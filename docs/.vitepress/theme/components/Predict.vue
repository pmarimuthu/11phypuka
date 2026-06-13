<script setup lang="ts">
import { ref } from 'vue'

interface Option { text: string; correct?: boolean }
const props = withDefaults(defineProps<{
  prompt: string
  options: Option[]
  reveal: string
  label?: string
}>(), { label: 'What do you think?' })

const chosen = ref<number | null>(null)
function pick(i: number) { if (chosen.value === null) chosen.value = i }
function cls(i: number) {
  if (chosen.value === null) return 'predict-opt'
  if (props.options[i].correct) return 'predict-opt good'
  if (i === chosen.value) return 'predict-opt bad'
  return 'predict-opt'
}
</script>

<template>
  <div class="predict">
    <div class="predict-head">
      <span class="predict-ico" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      </span>
      <span>{{ label }}</span>
    </div>
    <p class="predict-q">{{ prompt }}</p>
    <div class="predict-opts">
      <button v-for="(o, i) in options" :key="i" :class="cls(i)" :disabled="chosen !== null" @click="pick(i)">
        {{ o.text }}
      </button>
    </div>
    <div v-if="chosen !== null" class="predict-reveal">
      <strong>Your guess is in.</strong> {{ reveal }}
    </div>
  </div>
</template>

<style scoped>
.predict {
  border: 1px solid var(--vp-c-divider);
  border-left: 5px solid #7c5cf0;
  border-radius: 14px;
  padding: 0.8rem 1rem 0.9rem;
  margin: 1.2rem 0;
  background: var(--vp-c-bg-soft);
}
.predict-head { display: flex; align-items: center; gap: 0.5rem; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; color: #7c5cf0; }
.predict-ico { width: 22px; height: 22px; display: inline-flex; }
.predict-ico svg { width: 100%; height: 100%; animation: predictPulse 2.2s ease-in-out infinite; }
@keyframes predictPulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.12); opacity: 1; } }
.predict-q { font-weight: 600; margin: 0.5rem 0 0.7rem; }
.predict-opts { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.predict-opt {
  flex: 1 1 auto;
  padding: 0.6rem 0.9rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  cursor: pointer;
  font-size: 0.98rem;
  transition: border-color 0.15s, background 0.15s, transform 0.1s;
}
.predict-opt:hover:enabled { border-color: #7c5cf0; transform: translateY(-1px); }
.predict-opt:disabled { cursor: default; }
.predict-opt.good { border-color: #1f9d6b; background: rgba(31,157,107,0.12); font-weight: 600; }
.predict-opt.bad { border-color: #d05050; background: rgba(208,80,80,0.10); }
.predict-reveal {
  margin-top: 0.8rem;
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  background: var(--vp-c-bg);
  border: 1px dashed var(--vp-c-divider);
  animation: predictFade 0.3s ease;
}
@keyframes predictFade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { .predict-ico svg, .predict-reveal { animation: none !important; } }
</style>
