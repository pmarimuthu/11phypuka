<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const kB = 1.38e-23, NA = 6.022e23, R = 8.314
const n = ref(1), T = ref(300), V = ref(0.025)
const P = computed(() => (n.value*R*T.value/V.value).toFixed(0))
const rmsV = computed(() => Math.sqrt(3*kB*T.value/3.34e-27).toFixed(0))
const vrms_O2 = computed(() => Math.sqrt(3*R*T.value/0.032).toFixed(0))
const vrms_H2 = computed(() => Math.sqrt(3*R*T.value/0.002).toFixed(0))
const vrms_N2 = computed(() => Math.sqrt(3*R*T.value/0.028).toFixed(0))
const dof = ref('Monatomic')
const dofMap: Record<string,{f:number,cv:string,cp:string}> = {
  Monatomic: {f:3,cv:'3R/2',cp:'5R/2'},
  Diatomic: {f:5,cv:'5R/2',cp:'7R/2'},
  Triatomic: {f:6,cv:'3R',cp:'4R'}
}
const diameter = ref(3e-10), pressure = ref(1e5)
const mfp = computed(() => (kB*T.value/(Math.sqrt(2)*Math.PI*diameter.value**2*pressure.value)).toExponential(2))
</script>

<template>
  <div class="lab">
    <template v-if="type === 'kinetic-theory'">
      <h3>🎈 Kinetic Theory Lab</h3>
      <div class="ctrl"><label>Moles n: <b>{{ n }}</b></label><input type="range" min="0.1" max="5" step="0.1" v-model.number="n" /></div>
      <div class="ctrl"><label>Temperature T: <b>{{ T }} K</b></label><input type="range" min="100" max="1000" v-model.number="T" /></div>
      <div class="ctrl"><label>Volume V: <b>{{ (V*1000).toFixed(0) }} L</b></label><input type="range" min="0.001" max="0.1" step="0.001" v-model.number="V" /></div>
      <div class="result-box">P = nRT/V = <b>{{ P }} Pa</b> = {{ (parseFloat(P)/101325).toFixed(2) }} atm</div>
    </template>
    <template v-else-if="type === 'speed-of-molecules'">
      <h3>💨 Molecular Speed Lab</h3>
      <div class="ctrl"><label>Temperature: <b>{{ T }} K</b></label><input type="range" min="100" max="1000" v-model.number="T" /></div>
      <table><tr><th>Gas</th><th>Molar mass</th><th>v_rms (m/s)</th></tr>
        <tr><td>H₂</td><td>2 g/mol</td><td>{{ vrms_H2 }}</td></tr>
        <tr><td>N₂</td><td>28 g/mol</td><td>{{ vrms_N2 }}</td></tr>
        <tr><td>O₂</td><td>32 g/mol</td><td>{{ vrms_O2 }}</td></tr>
      </table>
      <div class="result-box">v_rms ∝ √(T/M) — lighter molecules move faster!</div>
    </template>
    <template v-else-if="type === 'equipartition'">
      <h3>⚡ Equipartition Lab</h3>
      <select v-model="dof" style="margin-bottom:0.5rem;padding:4px;border-radius:6px;">
        <option v-for="d in Object.keys(dofMap)" :key="d">{{ d }}</option>
      </select>
      <div class="ctrl"><label>Temperature: <b>{{ T }} K</b></label><input type="range" min="200" max="1000" v-model.number="T" /></div>
      <table><tr><th>Quantity</th><th>Value</th></tr>
        <tr><td>Degrees of freedom f</td><td>{{ dofMap[dof].f }}</td></tr>
        <tr><td>Energy per molecule</td><td>{{ dofMap[dof].f }}/2 × kT = {{ (dofMap[dof].f/2*kB*T).toExponential(2) }} J</td></tr>
        <tr><td>Cv (molar)</td><td>{{ dofMap[dof].cv }}</td></tr>
        <tr><td>Cp (molar)</td><td>{{ dofMap[dof].cp }}</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'mean-free-path'">
      <h3>💥 Mean Free Path Lab</h3>
      <div class="ctrl"><label>Temperature: <b>{{ T }} K</b></label><input type="range" min="100" max="1000" v-model.number="T" /></div>
      <div class="ctrl"><label>Pressure: <b>{{ (pressure/1000).toFixed(0) }} kPa</b></label><input type="range" min="1000" max="500000" step="1000" v-model.number="pressure" /></div>
      <div class="result-box">λ = kT/(√2·π·d²·P) = <b>{{ mfp }} m</b></div>
      <table><tr><th>Condition</th><th>λ approx</th></tr>
        <tr><td>Atmosphere (sea level)</td><td>~70 nm</td></tr>
        <tr><td>Lab vacuum (10⁻³ Pa)</td><td>~10 cm</td></tr>
        <tr><td>Space (10⁻¹⁰ Pa)</td><td>~km</td></tr>
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
