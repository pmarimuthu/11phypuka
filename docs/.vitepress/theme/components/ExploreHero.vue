<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, shallowRef } from 'vue'
import { getExploreConfig } from '../data/explore-builders'

const props = defineProps<{ type: string }>()
const canvas = ref<HTMLCanvasElement | null>(null)
const cfg = shallowRef(getExploreConfig(props.type))
const params = ref<number[]>(cfg.value ? cfg.value.controls.map(c => c.default) : [])
let raf = 0
let t = 0

function frame() {
  const c = canvas.value
  if (!c || !cfg.value) return
  const ctx = c.getContext('2d')!
  t += 0.016
  ctx.clearRect(0, 0, c.width, c.height)
  cfg.value.draw(ctx, c.width, c.height, params.value, t)
  raf = requestAnimationFrame(frame)
}

onMounted(() => { raf = requestAnimationFrame(frame) })
onUnmounted(() => cancelAnimationFrame(raf))
</script>

<template>
  <div v-if="cfg" class="eh-root">
    <canvas ref="canvas" width="360" height="200" class="eh-canvas" />
    <div class="eh-controls">
      <div v-for="(ctrl, i) in cfg.controls" :key="i" class="eh-ctrl-row">
        <span class="eh-lbl">{{ ctrl.label }}: <b>{{ params[i] }}{{ ctrl.unit }}</b></span>
        <input type="range" :min="ctrl.min" :max="ctrl.max" :step="ctrl.step ?? 1"
               v-model.number="params[i]" class="eh-slider" />
      </div>
    </div>
    <p class="eh-hint">{{ cfg.hint }}</p>
  </div>
  <div v-else class="visualise-empty">No Content</div>
</template>

<style scoped>
.eh-root { display: flex; flex-direction: column; gap: 8px; }
.eh-canvas { width: 100%; height: 200px; display: block; border-radius: 8px; background: #0f172a; }
.eh-controls { display: flex; flex-direction: column; gap: 6px; padding: 0 4px; }
.eh-ctrl-row { display: flex; align-items: center; gap: 8px; }
.eh-lbl { font-size: 0.78rem; color: var(--vp-c-text-2); min-width: 120px; flex-shrink: 0; }
.eh-lbl b { color: var(--vp-c-brand-1); }
.eh-slider { flex: 1; accent-color: var(--vp-c-brand-1); }
.eh-hint { font-size: 0.72rem; color: var(--vp-c-text-3); text-align: center; margin: 0; }
.visualise-empty { display:flex;align-items:center;justify-content:center;height:200px;color:var(--vp-c-text-3);font-size:.85rem; }
</style>
