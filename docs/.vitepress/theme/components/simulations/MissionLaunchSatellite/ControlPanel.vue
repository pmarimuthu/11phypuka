<script setup lang="ts">
/**
 * ControlPanel.vue
 * ------------------------------------------------------------------------
 * All student-facing inputs: the three launch sliders, the simulation
 * speed selector, and the Launch/Pause/Resume/Reset transport buttons.
 * No physics knowledge here — it just reports parameter changes and
 * button presses upward.
 */
import { computed, watch } from 'vue'
import type { RunPhase, SimSpeed } from './types'

const angleDeg = defineModel<number>('angleDeg', { default: 45 })
const velocityKms = defineModel<number>('velocityKms', { default: 5 })
const fuelPercent = defineModel<number>('fuelPercent', { default: 50 })
const simSpeed = defineModel<SimSpeed>('simSpeed', { default: 1 })

const props = defineProps<{ runPhase: RunPhase }>()
const emit = defineEmits<{
  launch: []
  pause: []
  resume: []
  reset: []
}>()

const MAX_VELOCITY_KMS = 15

const fuelMaxVelocity = computed(() => Math.max(0.5, (fuelPercent.value / 100) * MAX_VELOCITY_KMS))

// Fuel caps the achievable burn — if the student drags fuel down below
// the velocity they had selected, pull velocity back down with it.
watch(fuelMaxVelocity, (max) => {
  if (velocityKms.value > max) velocityKms.value = Math.round(max * 10) / 10
})

const locked = computed(() => props.runPhase !== 'idle')

const speedOptions: SimSpeed[] = [1, 5, 10]
</script>

<template>
  <div class="cp">
    <div class="cp-group">
      <label class="cp-label" for="cp-angle">
        Launch Angle
        <span class="cp-val">{{ angleDeg }}°</span>
      </label>
      <input
        id="cp-angle"
        type="range"
        min="0"
        max="90"
        step="1"
        v-model.number="angleDeg"
        :disabled="locked"
        aria-describedby="cp-angle-hint"
      />
      <p id="cp-angle-hint" class="cp-hint">0° = straight sideways · 90° = straight up</p>
    </div>

    <div class="cp-group">
      <label class="cp-label" for="cp-velocity">
        Initial Velocity
        <span class="cp-val">{{ velocityKms.toFixed(1) }} km/s</span>
      </label>
      <input
        id="cp-velocity"
        type="range"
        min="0"
        :max="fuelMaxVelocity"
        step="0.1"
        v-model.number="velocityKms"
        :disabled="locked"
        aria-describedby="cp-velocity-hint"
      />
      <p id="cp-velocity-hint" class="cp-hint">
        Max {{ MAX_VELOCITY_KMS }} km/s — capped to {{ fuelMaxVelocity.toFixed(1) }} km/s by current fuel
      </p>
    </div>

    <div class="cp-group">
      <label class="cp-label" for="cp-fuel">
        Fuel Level
        <span class="cp-val">{{ fuelPercent }}%</span>
      </label>
      <input
        id="cp-fuel"
        type="range"
        min="0"
        max="100"
        step="1"
        v-model.number="fuelPercent"
        :disabled="locked"
        aria-describedby="cp-fuel-hint"
      />
      <p id="cp-fuel-hint" class="cp-hint">More fuel raises the maximum velocity you can reach</p>
    </div>

    <div class="cp-group">
      <span class="cp-label">Simulation Speed</span>
      <div class="cp-speed" role="group" aria-label="Simulation speed">
        <button
          v-for="s in speedOptions"
          :key="s"
          type="button"
          class="cp-speed-btn"
          :class="{ active: simSpeed === s }"
          @click="simSpeed = s"
        >
          {{ s }}×
        </button>
      </div>
    </div>

    <div class="cp-actions">
      <button v-if="runPhase === 'idle'" type="button" class="cp-btn cp-btn-primary" @click="emit('launch')">
        🚀 Launch
      </button>
      <button v-if="runPhase === 'running'" type="button" class="cp-btn" @click="emit('pause')">
        ⏸ Pause
      </button>
      <button v-if="runPhase === 'paused'" type="button" class="cp-btn cp-btn-primary" @click="emit('resume')">
        ▶ Resume
      </button>
      <button
        v-if="runPhase === 'running' || runPhase === 'paused' || runPhase === 'ended'"
        type="button"
        class="cp-btn cp-btn-ghost"
        @click="emit('reset')"
      >
        ⟲ Reset
      </button>
    </div>
  </div>
</template>

<style scoped>
.cp {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.cp-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.cp-label {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-weight: 600;
  font-size: 0.92rem;
}

.cp-val {
  font-weight: 700;
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
}

.cp-hint {
  margin: 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}

input[type='range'] {
  width: 100%;
  height: 32px;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  touch-action: none;
}

input[type='range']::-webkit-slider-runnable-track {
  height: 6px;
  border-radius: 999px;
  background: var(--vp-c-divider);
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 26px;
  height: 26px;
  margin-top: -10px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  border: 3px solid var(--vp-c-bg);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
  cursor: pointer;
}

input[type='range']::-moz-range-track {
  height: 6px;
  border-radius: 999px;
  background: var(--vp-c-divider);
}

input[type='range']::-moz-range-thumb {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  border: 3px solid var(--vp-c-bg);
  cursor: pointer;
}

input[type='range']:disabled::-webkit-slider-thumb {
  background: var(--vp-c-text-3);
  cursor: not-allowed;
}
input[type='range']:disabled::-moz-range-thumb {
  background: var(--vp-c-text-3);
  cursor: not-allowed;
}

input[type='range']:focus-visible::-webkit-slider-thumb {
  outline: 3px solid var(--vp-c-brand-2);
  outline-offset: 2px;
}

.cp-speed {
  display: flex;
  gap: 0.5rem;
}

.cp-speed-btn {
  flex: 1;
  min-height: 40px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  font-weight: 700;
  cursor: pointer;
}

.cp-speed-btn.active {
  background: var(--vp-c-brand-1);
  color: white;
  border-color: var(--vp-c-brand-1);
}

.cp-actions {
  display: flex;
  gap: 0.6rem;
  margin-top: 0.2rem;
}

.cp-btn {
  flex: 1;
  min-height: 46px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.1s, background 0.15s;
}

.cp-btn:hover {
  transform: translateY(-1px);
}

.cp-btn-primary {
  background: var(--vp-c-brand-1);
  color: white;
  border-color: var(--vp-c-brand-1);
}

.cp-btn-ghost {
  background: transparent;
}
</style>
