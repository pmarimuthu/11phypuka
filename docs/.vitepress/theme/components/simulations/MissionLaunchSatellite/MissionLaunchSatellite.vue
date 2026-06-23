<script setup lang="ts">
/**
 * MissionLaunchSatellite.vue
 * ------------------------------------------------------------------------
 * Top-level orchestrator for "Mission: Launch a Satellite". Owns the one
 * requestAnimationFrame loop, the physics state, mission tracking and
 * the contextual "learning moment" popups. EarthCanvas stays a dumb
 * renderer; ControlPanel stays a dumb input panel; this component is
 * where they meet.
 *
 * SSR note: VitePress pre-renders this component once in Node during
 * `vitepress build`. Every browser-only API (rAF, canvas, performance)
 * is therefore called only from inside onMounted/onUnmounted, never at
 * module or setup top level.
 */
import { computed, onMounted, onUnmounted, reactive, ref, shallowRef, watch } from 'vue'
import EarthCanvas from './EarthCanvas.vue'
import ControlPanel from './ControlPanel.vue'
import {
  EARTH_RADIUS_M,
  circularSpeedAt,
  classifyFlightStatus,
  computeOrbitPreviewPath,
  computeOrbitalElements,
  escapeSpeedAt,
  launchVelocity,
  verletStep
} from './PhysicsEngine'
import {
  GEO_ALTITUDE_KM,
  LEARNING_MOMENTS,
  MISSIONS,
  createMissionProgress,
  updateMissionProgress
} from './MissionManager'
import type {
  BodyState,
  FlightStatus,
  LearningMoment,
  MissionId,
  MissionProgress,
  RunPhase,
  SimSpeed,
  Telemetry,
  Vec2
} from './types'
import { FLIGHT_STATUS_LABEL } from './types'

const FIXED_DT = 0.05 // seconds of simulated time per physics substep
const MAX_STEPS_PER_FRAME = 400
const MAX_TRAIL_POINTS = 1600

// ---- Student-controlled launch parameters --------------------------------
const angleDeg = ref(45)
const velocityKms = ref(5)
const fuelPercent = ref(50)
const simSpeed = ref<SimSpeed>(1)

// ---- Run state -------------------------------------------------------------
const runPhase = ref<RunPhase>('idle')
const state = reactive<BodyState>({ r: { x: EARTH_RADIUS_M, y: 0 }, v: { x: 0, y: 0 }, t: 0 })
const trail = shallowRef<Vec2[]>([])
const crashed = ref(false)
const crashPoint = ref<Vec2 | null>(null)
const launched = computed(() => runPhase.value !== 'idle')

// ---- Mission tracking -------------------------------------------------------
const activeMission = ref<MissionId | 'free'>('free')
const missionProgress = reactive<Record<MissionId, MissionProgress>>({
  leo: createMissionProgress('leo'),
  geo: createMissionProgress('geo'),
  escape: createMissionProgress('escape')
})
const justCompleted = ref<MissionId | null>(null)

// ---- Learning moments --------------------------------------------------------
const activeMoment = ref<LearningMoment | null>(null)
let lastNotifiedStatus: FlightStatus | null = null
let momentTimer: number | null = null

function showMoment(moment: LearningMoment) {
  activeMoment.value = moment
  if (momentTimer) window.clearTimeout(momentTimer)
  momentTimer = window.setTimeout(() => {
    activeMoment.value = null
  }, 11000)
}
function dismissMoment() {
  activeMoment.value = null
  if (momentTimer) window.clearTimeout(momentTimer)
}

// ---- Telemetry --------------------------------------------------------------
const status = computed<FlightStatus>(() =>
  classifyFlightStatus({
    r: state.r,
    v: state.v,
    launched: launched.value,
    crashed: crashed.value,
    timeSinceLaunch: state.t
  })
)

const orbitalElements = computed(() => computeOrbitalElements(state.r, state.v))

const telemetry = computed<Telemetry>(() => {
  const rMag = Math.hypot(state.r.x, state.r.y)
  const els = orbitalElements.value
  return {
    altitudeKm: (rMag - EARTH_RADIUS_M) / 1000,
    speedKm: Math.hypot(state.v.x, state.v.y) / 1000,
    status: status.value,
    simTimeSec: state.t,
    periapsisAltKm: (els.periapsis - EARTH_RADIUS_M) / 1000,
    apoapsisAltKm: Number.isFinite(els.apoapsis) ? (els.apoapsis - EARTH_RADIUS_M) / 1000 : null
  }
})

const localCircularKms = computed(() => circularSpeedAt(Math.hypot(state.r.x, state.r.y)) / 1000)
const localEscapeKms = computed(() => escapeSpeedAt(Math.hypot(state.r.x, state.r.y)) / 1000)

// ---- Pre-launch predicted path (pure geometry, no time stepping) -----------
const padPosition: Vec2 = { x: EARTH_RADIUS_M, y: 0 }
const previewPath = computed<Vec2[]>(() => {
  if (launched.value) return []
  const v0 = launchVelocity(angleDeg.value, velocityKms.value * 1000)
  return computeOrbitPreviewPath(padPosition, v0)
})

// ---- Canvas wiring -----------------------------------------------------------
const canvasComp = ref<InstanceType<typeof EarthCanvas> | null>(null)

function currentFrameVelocity(): Vec2 {
  if (launched.value) return state.v
  return launchVelocity(angleDeg.value, velocityKms.value * 1000)
}

function pushFrame(timeMs: number) {
  canvasComp.value?.draw({
    launched: launched.value,
    position: launched.value ? state.r : padPosition,
    velocity: currentFrameVelocity(),
    status: status.value,
    trail: trail.value,
    preview: previewPath.value,
    crashPoint: crashPoint.value,
    showGeoRing: activeMission.value === 'geo',
    timeMs
  })
}

// ---- Mission progress evaluation --------------------------------------------
function evaluateMissions(dtSeconds: number) {
  if (activeMission.value === 'free') return
  const id = activeMission.value
  const before = missionProgress[id].completed
  missionProgress[id] = updateMissionProgress(
    missionProgress[id],
    telemetry.value,
    telemetry.value.apoapsisAltKm ?? Number.POSITIVE_INFINITY,
    dtSeconds
  )
  if (!before && missionProgress[id].completed) {
    justCompleted.value = id
  }
}

// ---- Physics + render loop ---------------------------------------------------
let rafId = 0
let lastTimeMs = 0
let accumulator = 0

function physicsSubstep() {
  const next = verletStep(state, FIXED_DT)
  state.r.x = next.r.x
  state.r.y = next.r.y
  state.v.x = next.v.x
  state.v.y = next.v.y
  state.t = next.t

  const altitude = Math.hypot(state.r.x, state.r.y) - EARTH_RADIUS_M
  if (altitude <= 0) {
    const rMag = Math.hypot(state.r.x, state.r.y)
    const proj = { x: (state.r.x / rMag) * EARTH_RADIUS_M, y: (state.r.y / rMag) * EARTH_RADIUS_M }
    crashPoint.value = proj
    crashed.value = true
    state.r.x = proj.x
    state.r.y = proj.y
    state.v.x = 0
    state.v.y = 0
    runPhase.value = 'ended'
  }
}

function recordTrailPoint() {
  const pts = trail.value
  pts.push({ x: state.r.x, y: state.r.y })
  if (pts.length > MAX_TRAIL_POINTS) pts.splice(0, pts.length - MAX_TRAIL_POINTS)
  trail.value = pts.slice()
}

function tick(now: number) {
  rafId = requestAnimationFrame(tick)
  if (!lastTimeMs) lastTimeMs = now
  const realDt = Math.min(0.1, Math.max(0, (now - lastTimeMs) / 1000))
  lastTimeMs = now

  if (runPhase.value === 'running' && !crashed.value) {
    accumulator += realDt * simSpeed.value
    let steps = 0
    while (accumulator >= FIXED_DT && steps < MAX_STEPS_PER_FRAME) {
      physicsSubstep()
      accumulator -= FIXED_DT
      steps++
      if (crashed.value) break
    }
    if (steps > 0) {
      recordTrailPoint()
      evaluateMissions(steps * FIXED_DT)
    }
  }

  pushFrame(now)
}

onMounted(() => {
  rafId = requestAnimationFrame(tick)
})
onUnmounted(() => {
  cancelAnimationFrame(rafId)
  if (momentTimer) window.clearTimeout(momentTimer)
})

// Watch flight status to fire learning moments exactly once per transition.
watch(status, (s) => {
  if (s === lastNotifiedStatus) return
  lastNotifiedStatus = s
  const moment = LEARNING_MOMENTS[s]
  if (moment) showMoment(moment)
})

// ---- Controls ------------------------------------------------------------
function launch() {
  state.r.x = padPosition.x
  state.r.y = padPosition.y
  const v0 = launchVelocity(angleDeg.value, velocityKms.value * 1000)
  state.v.x = v0.x
  state.v.y = v0.y
  state.t = 0
  trail.value = [{ x: state.r.x, y: state.r.y }]
  crashed.value = false
  crashPoint.value = null
  justCompleted.value = null
  lastNotifiedStatus = null
  accumulator = 0
  if (activeMission.value !== 'free') {
    missionProgress[activeMission.value] = createMissionProgress(activeMission.value)
  }
  runPhase.value = 'running'
}

function pause() {
  if (runPhase.value === 'running') runPhase.value = 'paused'
}
function resume() {
  if (runPhase.value === 'paused') runPhase.value = 'running'
}
function reset() {
  runPhase.value = 'idle'
  state.r.x = padPosition.x
  state.r.y = padPosition.y
  state.v.x = 0
  state.v.y = 0
  state.t = 0
  trail.value = []
  crashed.value = false
  crashPoint.value = null
  justCompleted.value = null
  activeMoment.value = null
  lastNotifiedStatus = null
  accumulator = 0
}

function selectMission(id: MissionId | 'free') {
  activeMission.value = id
  if (id !== 'free') missionProgress[id] = createMissionProgress(id)
  justCompleted.value = null
}

const statusLabel = computed(() => FLIGHT_STATUS_LABEL[status.value])
const currentMissionDef = computed(() => MISSIONS.find((m) => m.id === activeMission.value) ?? null)
const currentMissionProgress = computed(() =>
  activeMission.value === 'free' ? null : missionProgress[activeMission.value]
)
const progressPct = computed(() => {
  const p = currentMissionProgress.value
  if (!p) return 0
  return Math.min(100, (p.holdSeconds / p.requiredHoldSeconds) * 100)
})
</script>

<template>
  <div class="mls">
    <div class="mls-missions" role="tablist" aria-label="Mission selector">
      <button
        type="button"
        class="mls-tab"
        :class="{ active: activeMission === 'free' }"
        role="tab"
        :aria-selected="activeMission === 'free'"
        @click="selectMission('free')"
      >
        Free Exploration
      </button>
      <button
        v-for="m in MISSIONS"
        :key="m.id"
        type="button"
        class="mls-tab"
        :class="{ active: activeMission === m.id, done: missionProgress[m.id].completed }"
        role="tab"
        :aria-selected="activeMission === m.id"
        @click="selectMission(m.id)"
      >
        {{ missionProgress[m.id].completed ? '✅ ' : '' }}{{ m.title }}
      </button>
    </div>

    <div v-if="currentMissionDef" class="mls-brief">
      <p><strong>{{ currentMissionDef.title }}.</strong> {{ currentMissionDef.brief }}</p>
      <p class="mls-success-cond">{{ currentMissionDef.successCondition }}</p>
      <div class="mls-progress-track" role="progressbar" :aria-valuenow="Math.round(progressPct)" aria-valuemin="0" aria-valuemax="100">
        <div class="mls-progress-fill" :style="{ width: progressPct + '%' }" />
      </div>
    </div>

    <div class="mls-body">
      <div class="mls-stage">
        <EarthCanvas ref="canvasComp" />

        <div class="mls-hud" aria-live="polite">
          <div class="mls-hud-row">
            <span class="mls-hud-label">Altitude</span>
            <span class="mls-hud-val">{{ launched ? telemetry.altitudeKm.toFixed(0) : '0' }} km</span>
          </div>
          <div class="mls-hud-row">
            <span class="mls-hud-label">Speed</span>
            <span class="mls-hud-val">{{ (launched ? telemetry.speedKm : velocityKms).toFixed(2) }} km/s</span>
          </div>
          <div class="mls-hud-row mls-hud-status" :class="status">
            <span class="mls-hud-dot" />
            {{ statusLabel }}
          </div>
        </div>

        <Transition name="mls-fade">
          <div v-if="justCompleted" class="mls-success-banner">
            <strong>Mission complete!</strong>
            <span>{{ MISSIONS.find((m) => m.id === justCompleted)?.title }} accomplished.</span>
            <button type="button" @click="justCompleted = null">✕</button>
          </div>
        </Transition>

        <Transition name="mls-fade">
          <div v-if="activeMoment" class="mls-moment" role="status">
            <div class="mls-moment-head">
              <strong>{{ activeMoment.title }}</strong>
              <button type="button" aria-label="Dismiss" @click="dismissMoment">✕</button>
            </div>
            <p>{{ activeMoment.body }}</p>
          </div>
        </Transition>
      </div>

      <div class="mls-side">
        <ControlPanel
          v-model:angleDeg="angleDeg"
          v-model:velocityKms="velocityKms"
          v-model:fuelPercent="fuelPercent"
          v-model:simSpeed="simSpeed"
          :run-phase="runPhase"
          @launch="launch"
          @pause="pause"
          @resume="resume"
          @reset="reset"
        />

        <details class="mls-reference">
          <summary>Reference speeds at your current altitude</summary>
          <ul>
            <li>Orbital (circular) speed here: <strong>{{ localCircularKms.toFixed(2) }} km/s</strong></li>
            <li>Escape speed here: <strong>{{ localEscapeKms.toFixed(2) }} km/s</strong></li>
            <li>Geostationary altitude: <strong>{{ Math.round(GEO_ALTITUDE_KM).toLocaleString() }} km</strong></li>
          </ul>
        </details>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mls {
  margin: 1.4rem 0 1.8rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  padding: 1rem;
  background: var(--vp-c-bg);
}

.mls-missions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
}

.mls-tab {
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.mls-tab.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-1);
  color: white;
}

.mls-brief {
  margin: 0 0 0.8rem;
  padding: 0.7rem 0.9rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px dashed var(--vp-c-divider);
}

.mls-brief p {
  margin: 0.15rem 0;
  font-size: 0.92rem;
}

.mls-success-cond {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}

.mls-progress-track {
  margin-top: 0.5rem;
  height: 8px;
  border-radius: 999px;
  background: var(--vp-c-divider);
  overflow: hidden;
}

.mls-progress-fill {
  height: 100%;
  background: var(--pc-real, #1f9d6b);
  transition: width 0.2s linear;
}

.mls-body {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 960px) {
  .mls-body {
    grid-template-columns: 1.6fr 1fr;
    align-items: start;
  }
}

.mls-stage {
  position: relative;
  aspect-ratio: 4 / 3;
  min-height: 320px;
}

.mls-hud {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.55rem 0.75rem;
  border-radius: 10px;
  background: rgba(4, 7, 20, 0.55);
  backdrop-filter: blur(4px);
  color: #e2e8f0;
  font-size: 0.82rem;
  font-variant-numeric: tabular-nums;
}

.mls-hud-row {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.mls-hud-label {
  opacity: 0.75;
  min-width: 4.2rem;
}

.mls-hud-val {
  font-weight: 700;
}

.mls-hud-status {
  margin-top: 0.15rem;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
}

.mls-hud-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
}

.mls-hud-status.preparing { color: #8aa0c8; }
.mls-hud-status.ascending { color: #f5b942; }
.mls-hud-status.orbit { color: #34d399; }
.mls-hud-status.escape { color: #c084fc; }
.mls-hud-status.reentry { color: #fb923c; }
.mls-hud-status.crashed { color: #f87171; }

.mls-success-banner {
  position: absolute;
  top: 10px;
  right: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  border-radius: 12px;
  background: rgba(16, 185, 129, 0.92);
  color: white;
  font-size: 0.85rem;
}

.mls-success-banner button {
  margin-left: auto;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
}

.mls-moment {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  padding: 0.7rem 0.85rem;
  border-radius: 12px;
  background: rgba(4, 7, 20, 0.88);
  color: #e2e8f0;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.mls-moment-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.mls-moment-head button {
  margin-left: auto;
  background: transparent;
  border: none;
  color: #e2e8f0;
  cursor: pointer;
}

.mls-moment p {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.5;
}

.mls-fade-enter-active,
.mls-fade-leave-active {
  transition: opacity 0.25s ease;
}
.mls-fade-enter-from,
.mls-fade-leave-to {
  opacity: 0;
}

.mls-side {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.mls-reference {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 0.6rem 0.8rem;
  background: var(--vp-c-bg-soft);
  font-size: 0.85rem;
}

.mls-reference summary {
  cursor: pointer;
  font-weight: 600;
}

.mls-reference ul {
  margin: 0.5rem 0 0;
  padding-left: 1.1rem;
}

@media (prefers-reduced-motion: reduce) {
  .mls-fade-enter-active,
  .mls-fade-leave-active {
    transition: none;
  }
}
</style>
