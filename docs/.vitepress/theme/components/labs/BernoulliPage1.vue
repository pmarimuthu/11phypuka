<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { setup, type Result } from './BernoulliLabSetup'

const cvs    = ref<HTMLCanvasElement>()
const spin   = ref(0)
const result = ref<Result>('idle')
let ctrl: ReturnType<typeof setup> | null = null

const sideLabel = computed(() => spin.value >= 0 ? 'top' : 'bottom')
const forceDir  = computed(() => spin.value >= 0 ? '↑ lifts over wall' : '↓ dips down')

onMounted(() => {
  ctrl = setup(cvs.value!, () => spin.value, r => { result.value = r })
})
onUnmounted(() => ctrl?.stop())
</script>

<template>
  <div class="pg">
    <p class="tag">⚽ FIFA World Cup 2026 — Dial in the spin, then kick. Watch Magnus effect curve the ball!</p>

    <div class="scene">
      <canvas ref="cvs" width="480" height="280" class="cvs"/>
    </div>

    <div class="ctrl">
      <div class="spin-row">
        <span class="slbl">🔄 Ball spin</span>
        <span class="neg">Dip (−)</span>
        <input type="range" min="-5" max="5" step="0.5" v-model.number="spin" class="sl"/>
        <span class="pos">Lift (+)</span>
        <code class="sv">{{ spin > 0 ? '+' : '' }}{{ spin }} rad/s</code>
      </div>
      <div class="btn-row">
        <button class="kick" @click="ctrl?.kick()">⚽ KICK!</button>
        <button class="rst" @click="ctrl?.reset(); result = 'idle'">↺ Reset</button>
        <span v-if="result==='goal'"  class="badge green">GOAL ✅</span>
        <span v-if="result==='wall'"  class="badge red">Wall blocked ❌</span>
        <span v-if="result==='miss'"  class="badge orange">Missed 🔄</span>
      </div>
    </div>

    <div class="law">
      <span class="eq">p + ½ρv² + ρgh = const</span>
      <span class="sep">→</span>
      <span>Spin {{ spin >= 0 ? '(+)' : '(−)' }} → faster air on <b>{{ sideLabel }}</b> → lower pressure → net force <b>{{ forceDir }}</b></span>
    </div>
  </div>
</template>

<style scoped>
.pg{display:flex;flex-direction:column;gap:10px;padding:4px 0}
.tag{font-size:12px;color:var(--vp-c-text-2);font-style:italic}
.scene{border-radius:10px;overflow:hidden}
.cvs{width:100%;display:block}
.ctrl{display:flex;flex-direction:column;gap:8px;padding:10px 14px;background:var(--vp-c-bg-soft);border-radius:10px;border:1px solid var(--vp-c-divider)}
.spin-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.slbl{font-size:13px;font-weight:600;color:var(--vp-c-text-1);white-space:nowrap}
.neg{font-size:11px;color:#60a5fa;white-space:nowrap}.pos{font-size:11px;color:#f87171;white-space:nowrap}
.sl{flex:1;min-width:100px;max-width:200px}
.sv{font-size:12px;font-weight:700;color:var(--vp-c-text-1);min-width:72px;background:var(--vp-c-bg);padding:2px 6px;border-radius:4px}
.btn-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.kick{padding:8px 22px;font-size:14px;font-weight:700;background:#16a34a;color:#fff;border:none;border-radius:8px;cursor:pointer}
.kick:hover{background:#15803d}
.rst{padding:8px 14px;font-size:13px;background:var(--vp-c-bg);color:var(--vp-c-text-2);border:1px solid var(--vp-c-divider);border-radius:8px;cursor:pointer}
.badge{font-size:12px;font-weight:600;padding:4px 10px;border-radius:20px}
.badge.green{background:#dcfce7;color:#166534}.badge.red{background:#fee2e2;color:#991b1b}.badge.orange{background:#ffedd5;color:#9a3412}
.law{font-size:12px;color:var(--vp-c-text-3);padding:8px 12px;background:var(--vp-c-bg-soft);border-radius:8px;border:1px solid var(--vp-c-divider);display:flex;flex-wrap:wrap;gap:6px;align-items:center;line-height:1.6}
.eq{font-weight:700;color:var(--vp-c-text-1);font-family:serif;font-size:13px}.sep{color:var(--vp-c-brand-1)}
</style>
