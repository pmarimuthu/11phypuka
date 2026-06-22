<template>
  <section class="panel-sec">
    <h4 class="sec-head">Controls</h4>

    <!-- Velocity slider -->
    <div class="ctrl-row">
      <label class="ctrl-label">Initial Velocity</label>
      <div class="slider-row">
        <input
          type="range" min="0" max="10" step="0.5"
          v-model.number="initialVelocity"
          :disabled="isPlaying"
          class="slider"
        />
        <span class="slider-val">{{ initialVelocity.toFixed(1) }} m/s</span>
      </div>
    </div>

    <!-- Friction toggle -->
    <div class="ctrl-row">
      <label class="ctrl-label">Surface Friction</label>
      <button
        class="friction-toggle"
        :class="{ 'friction-toggle--on': frictionOn }"
        @click="$emit('toggle-friction')"
        :disabled="!sceneMounted"
      >
        <span class="ft-dot" />
        <span>{{ frictionOn ? `ON  (μ = ${frictionMu})` : 'OFF (μ = 0 — frictionless)' }}</span>
      </button>
    </div>

    <!-- Apply impulse -->
    <button class="action-btn" @click="$emit('apply-impulse')" :disabled="!sceneMounted">
      ⚡ Apply Impulse
      <span class="action-hint">Δv = +5 m/s</span>
    </button>
  </section>
</template>

<script setup lang="ts">
const initialVelocity = defineModel<number>('initialVelocity', { required: true })

defineProps<{
  frictionOn: boolean
  frictionMu: number
  isPlaying: boolean
  sceneMounted: boolean
}>()

defineEmits<{ 'toggle-friction': []; 'apply-impulse': [] }>()
</script>

<style scoped>
.panel-sec {
  padding: 12px 14px;
  border-bottom: 1px solid var(--c-divider);
}
.sec-head {
  font-size: 0.65rem;
  font-weight: 800;
  color: var(--c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.09em;
  margin: 0 0 10px;
}

.ctrl-row { margin-bottom: 11px; }
.ctrl-row:last-child { margin-bottom: 0; }
.ctrl-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--c-text-2);
  margin-bottom: 5px;
}

.slider-row { display: flex; align-items: center; gap: 8px; }
.slider { flex: 1; accent-color: var(--c-brand); cursor: pointer; }
.slider:disabled { opacity: 0.4; cursor: default; }
.slider-val {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--c-brand);
  min-width: 48px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* Friction toggle */
.friction-toggle {
  display: flex;
  align-items: center;
  gap: 7px;
  width: 100%;
  padding: 5px 10px 5px 5px;
  background: var(--c-bg);
  border: 1px solid var(--c-divider);
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--c-text-2);
  transition: border-color 0.15s, color 0.15s, background 0.15s;
  text-align: left;
}
.friction-toggle:disabled { opacity: 0.4; cursor: default; }
.friction-toggle--on {
  border-color: #ef4444;
  color: #ef4444;
  background: color-mix(in srgb, #ef4444 7%, var(--c-bg));
}
.ft-dot {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--c-divider);
  transition: background 0.15s;
}
.friction-toggle--on .ft-dot { background: #ef4444; }

/* Apply impulse button */
.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  margin-top: 10px;
  padding: 7px 10px;
  background: color-mix(in srgb, var(--c-brand) 10%, var(--c-bg));
  border: 1px solid color-mix(in srgb, var(--c-brand) 35%, transparent);
  border-radius: 8px;
  color: var(--c-brand);
  font-size: 0.76rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s;
}
.action-btn:hover:not(:disabled) {
  background: color-mix(in srgb, var(--c-brand) 18%, var(--c-bg));
}
.action-btn:disabled { opacity: 0.38; cursor: default; }
.action-hint {
  font-size: 0.65rem;
  opacity: 0.65;
  font-weight: 500;
}
</style>
