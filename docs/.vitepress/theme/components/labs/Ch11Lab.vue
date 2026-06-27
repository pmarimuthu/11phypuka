<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const P1 = ref(1), V1 = ref(10), T1 = ref(300)
const gamma = ref(1.4)
const process = ref('Isothermal')
const V2 = ref(5)
const P2 = computed(() => {
  if (process.value==='Isothermal') return (P1.value*V1.value/V2.value).toFixed(2)
  if (process.value==='Adiabatic') return (P1.value*(V1.value/V2.value)**gamma.value).toFixed(2)
  if (process.value==='Isobaric') return P1.value.toFixed(2)
  return P1.value.toFixed(2)
})
const dQ = ref(500), dW = ref(200)
const dU = computed(() => (dQ.value - dW.value).toFixed(0))
const Th = ref(500), Tc = ref(300)
const eta = computed(() => ((1 - Tc.value/Th.value)*100).toFixed(1))
const etaCarnot = computed(() => ((1 - Tc.value/Th.value)*100).toFixed(1))
const QH = ref(1000)
const Wout = computed(() => (parseFloat(eta.value)/100*QH.value).toFixed(0))
const Qc = computed(() => (QH.value - parseFloat(Wout.value)).toFixed(0))
</script>

<template>
  <div class="lab">
    <template v-if="type === 'thermodynamic-processes'">
      <h3>🫙 Thermodynamic Processes Lab</h3>
      <select v-model="process" style="margin-bottom:0.5rem;padding:4px;border-radius:6px;">
        <option>Isothermal</option><option>Adiabatic</option><option>Isobaric</option><option>Isochoric</option>
      </select>
      <div class="ctrl"><label>P₁: <b>{{ P1 }} atm</b></label><input type="range" min="1" max="10" v-model.number="P1" /></div>
      <div class="ctrl"><label>V₁: <b>{{ V1 }} L</b></label><input type="range" min="1" max="20" v-model.number="V1" /></div>
      <div class="ctrl"><label>V₂: <b>{{ V2 }} L</b></label><input type="range" min="1" max="20" v-model.number="V2" /></div>
      <div class="result-box">P₂ = <b>{{ P2 }} atm</b> ({{ process }})<br>{{ process==='Isothermal'?'PV = const':process==='Adiabatic'?'PVᵞ = const':process==='Isobaric'?'P = const':'V = const' }}</div>
    </template>
    <template v-else-if="type === 'first-law'">
      <h3>🚲 First Law Lab</h3>
      <div class="ctrl"><label>Heat added Q: <b>{{ dQ }} J</b></label><input type="range" min="0" max="2000" v-model.number="dQ" /></div>
      <div class="ctrl"><label>Work done W: <b>{{ dW }} J</b></label><input type="range" min="0" max="1000" v-model.number="dW" /></div>
      <div class="result-box">ΔU = Q − W = {{ dQ }} − {{ dW }} = <b>{{ dU }} J</b><br>{{ parseInt(dU)>0?'Internal energy increased (gas heats up)':parseInt(dU)<0?'Internal energy decreased':'No change in internal energy' }}</div>
    </template>
    <template v-else-if="type === 'second-law'">
      <h3>🧊 Second Law Lab</h3>
      <div class="result-box">Entropy always increases in spontaneous processes</div>
      <table><tr><th>Process</th><th>Allowed?</th><th>Why</th></tr>
        <tr><td>Ice melts in warm room</td><td>✅ Yes</td><td>Entropy increases</td></tr>
        <tr><td>Water freezes spontaneously at 30°C</td><td>❌ No</td><td>Entropy would decrease</td></tr>
        <tr><td>Perfume spreads in room</td><td>✅ Yes</td><td>Entropy increases</td></tr>
        <tr><td>Gas compresses itself</td><td>❌ No</td><td>Entropy would decrease</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'heat-engine'">
      <h3>🚗 Heat Engine Lab</h3>
      <div class="ctrl"><label>Th (hot reservoir): <b>{{ Th }} K</b></label><input type="range" min="400" max="2000" v-model.number="Th" /></div>
      <div class="ctrl"><label>Tc (cold reservoir): <b>{{ Tc }} K</b></label><input type="range" min="200" max="400" v-model.number="Tc" /></div>
      <div class="ctrl"><label>Heat input QH: <b>{{ QH }} J</b></label><input type="range" min="100" max="5000" step="100" v-model.number="QH" /></div>
      <table><tr><th>Quantity</th><th>Value</th></tr>
        <tr><td>Efficiency η</td><td>{{ eta }}%</td></tr>
        <tr><td>Work output W</td><td>{{ Wout }} J</td></tr>
        <tr><td>Heat rejected Qc</td><td>{{ Qc }} J</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'carnot-theorem'">
      <h3>🏆 Carnot Theorem Lab</h3>
      <div class="ctrl"><label>Th: <b>{{ Th }} K</b></label><input type="range" min="400" max="2000" v-model.number="Th" /></div>
      <div class="ctrl"><label>Tc: <b>{{ Tc }} K</b></label><input type="range" min="200" max="400" v-model.number="Tc" /></div>
      <div class="result-box">Max possible efficiency = 1 − Tc/Th = <b>{{ etaCarnot }}%</b><br>No real engine can exceed this!</div>
      <table><tr><th>Real engine</th><th>Typical η</th></tr>
        <tr><td>Car petrol engine</td><td>~25%</td></tr>
        <tr><td>Diesel engine</td><td>~40%</td></tr>
        <tr><td>Steam turbine</td><td>~45%</td></tr>
        <tr><td>Carnot ({{ Th }}K/{{ Tc }}K)</td><td>{{ etaCarnot }}%</td></tr>
      </table>
    </template>
  </div>
</template>

<style scoped>
.lab { padding: 1rem; font-size: 0.9rem; }
h3 { margin: 0 0 0.75rem; font-size: 1rem; }
.ctrl { display: flex; align-items: center; gap: 0.5rem; margin: 0.4rem 0; flex-wrap: wrap; }
.ctrl label { min-width: 180px; font-size: 0.82rem; color: var(--vp-c-text-2); }
.ctrl input[type=range] { flex: 1; accent-color: var(--vp-c-brand-1); }
.result-box { background: var(--vp-c-bg-soft); border-radius: 8px; padding: 8px 12px; margin: 0.5rem 0; line-height: 1.8; }
table { border-collapse: collapse; width: 100%; margin-top: 0.75rem; font-size: 0.82rem; }
th, td { border: 1px solid var(--vp-c-divider); padding: 5px 8px; }
th { background: var(--vp-c-bg-alt); }
</style>
