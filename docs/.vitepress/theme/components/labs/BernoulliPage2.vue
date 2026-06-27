<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { setup } from './AerofoilSetup'

const cvs   = ref<HTMLCanvasElement>()
const speed = ref(0.5)
let ctrl: ReturnType<typeof setup> | null = null

onMounted(() => { ctrl = setup(cvs.value!, () => speed.value) })
onUnmounted(() => ctrl?.stop())
</script>

<template>
  <div class="pg">
    <p class="tag">✈️ Aerofoil Lift — curved top forces air faster → lower pressure above → net upward lift.</p>

    <div class="scene">
      <canvas ref="cvs" width="480" height="280" class="cvs"/>
    </div>

    <div class="ctrl">
      <span class="slbl">💨 Airspeed</span>
      <span class="lo">Slow</span>
      <input type="range" min="0.05" max="1" step="0.05" v-model.number="speed" class="sl"/>
      <span class="hi">Fast</span>
      <code class="sv">{{ (speed * 100).toFixed(0) }}%</code>
      <span class="hint">↑ increase speed — watch lift arrow grow and streamlines compress</span>
    </div>

    <div class="law">
      <span class="eq">p + ½ρv² = const</span>
      <span class="sep">→</span>
      <span>Curved top → longer path → faster air → lower pressure above → pressure difference = <b>Lift ↑</b></span>
    </div>
  </div>
</template>

<style scoped>
.pg{display:flex;flex-direction:column;gap:10px;padding:4px 0}
.tag{font-size:12px;color:var(--vp-c-text-2);font-style:italic}
.scene{border-radius:10px;overflow:hidden}
.cvs{width:100%;display:block}
.ctrl{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:10px 14px;background:var(--vp-c-bg-soft);border-radius:10px;border:1px solid var(--vp-c-divider)}
.slbl{font-size:13px;font-weight:600;color:var(--vp-c-text-1);white-space:nowrap}
.lo{font-size:11px;color:var(--vp-c-text-3);white-space:nowrap}
.hi{font-size:11px;color:#1d4ed8;white-space:nowrap}
.sl{flex:1;min-width:100px;max-width:200px}
.sv{font-size:12px;font-weight:700;color:var(--vp-c-text-1);background:var(--vp-c-bg);padding:2px 6px;border-radius:4px}
.hint{font-size:11px;color:var(--vp-c-text-3);font-style:italic}
.law{font-size:12px;color:var(--vp-c-text-3);padding:8px 12px;background:var(--vp-c-bg-soft);border-radius:8px;border:1px solid var(--vp-c-divider);display:flex;flex-wrap:wrap;gap:6px;align-items:center;line-height:1.6}
.eq{font-weight:700;color:var(--vp-c-text-1);font-family:serif;font-size:13px}.sep{color:var(--vp-c-brand-1)}
</style>
