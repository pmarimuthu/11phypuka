<template>
  <div class="exp-wrap">
    <!-- ── Header ── -->
    <div class="exp-header">
      <span class="exp-chip">⚗️ Interactive Experiment</span>
      <h3 class="exp-title">Inertia &amp; Newton's First Law</h3>
      <p class="exp-desc">
        A net force of zero means no change in motion — forever. Set the velocity,
        toggle friction, and watch the law prove itself.
      </p>
    </div>

    <!-- ── Body: canvas left, panel right ── -->
    <div class="exp-body">
      <!-- Three.js viewport -->
      <div class="canvas-wrap" ref="canvasRef">
        <div v-if="!sceneMounted" class="canvas-loading">
          <span class="spin" />
          <span>Loading physics engine…</span>
        </div>
        <Transition name="msg">
          <div v-if="statusMsg && sceneMounted" class="canvas-msg">{{ statusMsg }}</div>
        </Transition>
      </div>

      <!-- Controls + readings panel -->
      <aside class="side-panel">
        <ControlsPanel
          v-model:initial-velocity="initialVelocity"
          :friction-on="frictionOn"
          :friction-mu="FRICTION_MU"
          :is-playing="isPlaying"
          :scene-mounted="sceneMounted"
          @toggle-friction="handleFrictionToggle"
          @apply-impulse="applyImpulse"
        />

        <ReadingsPanel
          :fmt-vel="fmtVel"
          :fmt-acc="fmtAcc"
          :fmt-force="fmtForce"
          :fmt-time="fmtTime"
          :vel-color="velColor"
        />

        <InsightPanel
          :insight-text="insightText"
          :insight-class="insightClass"
          :insight-icon="insightIcon"
        />
      </aside>
    </div>

    <!-- ── Play bar ── -->
    <PlayBar
      :is-playing="isPlaying"
      :scene-mounted="sceneMounted"
      @play="doPlay"
      @pause="doPause"
      @reset="doReset"
      @restart="doRestart"
    />
  </div>
</template>

<script setup lang="ts">
// All simulation state/logic (Three.js + Rapier + controls) lives in the
// composable — this component only wires it into presentational sub-components.
const {
  FRICTION_MU,
  canvasRef,
  initialVelocity,
  frictionOn,
  sceneMounted,
  statusMsg,
  isPlaying,
  fmtVel,
  fmtAcc,
  fmtForce,
  fmtTime,
  velColor,
  insightText,
  insightClass,
  insightIcon,
  doPlay,
  doPause,
  doReset,
  doRestart,
  handleFrictionToggle,
  applyImpulse,
} = useInertiaExperiment()
</script>

<style scoped>
/* ── Outer wrapper ─────────────────────────────────────────────────────────── */
.exp-wrap {
  margin: 32px 0;
  border: 1px solid var(--c-divider);
  border-radius: 16px;
  overflow: hidden;
  background: var(--c-bg-soft);
}

/* ── Header ─────────────────────────────────────────────────────────────────── */
.exp-header {
  padding: 18px 22px 14px;
  border-bottom: 1px solid var(--c-divider);
}
.exp-chip {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #7c3aed;
  background: color-mix(in srgb, #7c3aed 10%, transparent);
  border: 1px solid color-mix(in srgb, #7c3aed 28%, transparent);
  padding: 3px 10px;
  border-radius: 20px;
  margin-bottom: 8px;
}
.exp-title {
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 5px;
}
.exp-desc {
  font-size: 0.8rem;
  color: var(--c-text-2);
  line-height: 1.5;
  margin: 0;
}

/* ── Body: canvas + side panel ─────────────────────────────────────────────── */
.exp-body {
  display: grid;
  grid-template-columns: 1fr 260px;
  min-height: 280px;
}
@media (max-width: 680px) {
  .exp-body { grid-template-columns: 1fr; }
}

/* ── Three.js canvas ─────────────────────────────────────────────────────────  */
.canvas-wrap {
  position: relative;
  height: 280px;
  background: #0d1b2a;
  overflow: hidden;
}
/* Three.js appends a <canvas> — make it fill the container */
.canvas-wrap :deep(canvas) {
  display: block;
  width: 100% !important;
  height: 100% !important;
}

.canvas-loading {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #6b7280;
  font-size: 0.8rem;
}
.spin {
  width: 22px;
  height: 22px;
  border: 2px solid #1e3a5f;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: sp 0.75s linear infinite;
}
@keyframes sp { to { transform: rotate(360deg); } }

.canvas-msg {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.78);
  color: #f1f5f9;
  font-size: 0.76rem;
  font-weight: 600;
  padding: 6px 18px;
  border-radius: 20px;
  white-space: nowrap;
  max-width: 92%;
  text-align: center;
  pointer-events: none;
}
.msg-enter-active, .msg-leave-active { transition: opacity 0.3s; }
.msg-enter-from, .msg-leave-to { opacity: 0; }

/* ── Side panel ──────────────────────────────────────────────────────────────  */
.side-panel {
  border-left: 1px solid var(--c-divider);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
@media (max-width: 680px) {
  .side-panel { border-left: none; border-top: 1px solid var(--c-divider); }
}
</style>
