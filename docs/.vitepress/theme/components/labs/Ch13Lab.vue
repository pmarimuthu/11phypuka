<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const g = 9.8
const A = ref(0.1), omega = ref(5), t = ref(0)
const x = computed(() => (A.value*Math.cos(omega.value*t.value)).toFixed(3))
const vSHM = computed(() => (-A.value*omega.value*Math.sin(omega.value*t.value)).toFixed(3))
const T_shm = computed(() => (2*Math.PI/omega.value).toFixed(3))
const L = ref(1), thetaDeg = ref(10)
const T_pend = computed(() => (2*Math.PI*Math.sqrt(L.value/g)).toFixed(3))
const maxH = computed(() => (L.value*(1-Math.cos(thetaDeg.value*Math.PI/180))).toFixed(4))
const maxV = computed(() => Math.sqrt(2*g*parseFloat(maxH.value)).toFixed(3)  )
const m = ref(1), k = ref(25), b = ref(0.5)
const omegaN = computed(() => Math.sqrt(k.value/m.value).toFixed(2))
const omegaD = computed(() => Math.sqrt(Math.max(0,k.value/m.value-(b.value/(2*m.value))**2)).toFixed(2))
const dampType = computed(() => {
  const disc = (b.value/(2*m.value))**2 - k.value/m.value
  return disc<0?'Under-damped (oscillates)':disc===0?'Critically damped':'Over-damped'
})
const drivFreq = ref(5), natFreq = ref(5)
const resonAmp = computed(() => (1/Math.abs(natFreq.value**2-drivFreq.value**2+0.01)).toFixed(2))
</script>

<template>
  <div class="lab">
    <template v-if="type === 'shm'">
      <h3>📱 SHM Lab</h3>
      <div class="ctrl"><label>Amplitude A: <b>{{ A }} m</b></label><input type="range" min="0.01" max="0.5" step="0.01" v-model.number="A" /></div>
      <div class="ctrl"><label>ω: <b>{{ omega }} rad/s</b></label><input type="range" min="1" max="20" v-model.number="omega" /></div>
      <div class="ctrl"><label>Time t: <b>{{ t }} s</b></label><input type="range" min="0" max="6.28" step="0.1" v-model.number="t" /></div>
      <table><tr><th>Quantity</th><th>Value</th></tr>
        <tr><td>x = A·cos(ωt)</td><td>{{ x }} m</td></tr>
        <tr><td>v = −Aω·sin(ωt)</td><td>{{ vSHM }} m/s</td></tr>
        <tr><td>Period T = 2π/ω</td><td>{{ T_shm }} s</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'simple-pendulum'">
      <h3>⏱️ Simple Pendulum Lab</h3>
      <div class="ctrl"><label>Length L: <b>{{ L }} m</b></label><input type="range" min="0.1" max="5" step="0.1" v-model.number="L" /></div>
      <div class="ctrl"><label>Angle θ: <b>{{ thetaDeg }}°</b></label><input type="range" min="1" max="30" v-model.number="thetaDeg" /></div>
      <table><tr><th>Quantity</th><th>Value</th></tr>
        <tr><td>Period T = 2π√(L/g)</td><td>{{ T_pend }} s</td></tr>
        <tr><td>Max height</td><td>{{ maxH }} m</td></tr>
        <tr><td>Max speed at bottom</td><td>{{ maxV }} m/s</td></tr>
      </table>
      <div class="result-box">Period depends only on L, not mass or angle (for small θ)</div>
    </template>
    <template v-else-if="type === 'energy-shm'">
      <h3>🎢 Energy in SHM Lab</h3>
      <div class="ctrl"><label>k (spring): <b>{{ k }} N/m</b></label><input type="range" min="5" max="100" v-model.number="k" /></div>
      <div class="ctrl"><label>Amplitude A: <b>{{ A }} m</b></label><input type="range" min="0.01" max="0.5" step="0.01" v-model.number="A" /></div>
      <div class="ctrl"><label>Time t: <b>{{ t }} s</b></label><input type="range" min="0" max="6.28" step="0.1" v-model.number="t" /></div>
      <table><tr><th>Energy</th><th>At t={{ t }}</th></tr>
        <tr><td>Total E = ½kA²</td><td>{{ (0.5*k*A**2).toFixed(3) }} J</td></tr>
        <tr><td>PE = ½kx²</td><td>{{ (0.5*k*parseFloat(x)**2).toFixed(3) }} J</td></tr>
        <tr><td>KE = E−PE</td><td>{{ Math.max(0,0.5*k*A**2-0.5*k*parseFloat(x)**2).toFixed(3) }} J</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'damped-oscillations'">
      <h3>🚗 Damped Oscillations Lab</h3>
      <div class="ctrl"><label>Mass m: <b>{{ m }} kg</b></label><input type="range" min="0.1" max="5" step="0.1" v-model.number="m" /></div>
      <div class="ctrl"><label>k: <b>{{ k }} N/m</b></label><input type="range" min="5" max="100" v-model.number="k" /></div>
      <div class="ctrl"><label>Damping b: <b>{{ b }}</b></label><input type="range" min="0" max="20" step="0.1" v-model.number="b" /></div>
      <div class="result-box">ω₀ = {{ omegaN }} rad/s → ωd = {{ omegaD }} rad/s<br><b>{{ dampType }}</b></div>
    </template>
    <template v-else-if="type === 'resonance'">
      <h3>🔊 Resonance Lab</h3>
      <div class="ctrl"><label>Natural freq ω₀: <b>{{ natFreq }} Hz</b></label><input type="range" min="1" max="20" v-model.number="natFreq" /></div>
      <div class="ctrl"><label>Driving freq ω: <b>{{ drivFreq }} Hz</b></label><input type="range" min="1" max="20" v-model.number="drivFreq" /></div>
      <div class="result-box">Amplitude ∝ <b>{{ resonAmp }}</b> {{ drivFreq===natFreq?'← 🔴 RESONANCE! Maximum amplitude':'← Away from resonance' }}</div>
      <table><tr><th>Example</th><th>Resonance effect</th></tr>
        <tr><td>Phone speaker</td><td>Max sound at resonant freq</td></tr>
        <tr><td>Swing pushed at natural freq</td><td>Goes higher and higher</td></tr>
        <tr><td>Tacoma bridge (1940)</td><td>Wind matched freq → collapsed</td></tr>
      </table>
    </template>
  </div>
</template>

<style scoped>
.lab { padding: 1rem; font-size: 0.9rem; }
h3 { margin: 0 0 0.75rem; font-size: 1rem; }
.ctrl { display: flex; align-items: center; gap: 0.5rem; margin: 0.4rem 0; flex-wrap: wrap; }
.ctrl label { min-width: 150px; font-size: 0.82rem; color: var(--vp-c-text-2); }
.ctrl input[type=range] { flex: 1; accent-color: var(--vp-c-brand-1); }
.result-box { background: var(--vp-c-bg-soft); border-radius: 8px; padding: 8px 12px; margin: 0.5rem 0; line-height: 1.8; }
table { border-collapse: collapse; width: 100%; margin-top: 0.75rem; font-size: 0.82rem; }
th, td { border: 1px solid var(--vp-c-divider); padding: 5px 8px; }
th { background: var(--vp-c-bg-alt); }
</style>
