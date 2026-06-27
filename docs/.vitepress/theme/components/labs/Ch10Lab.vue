<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const tempC = ref(25), tempF = computed(() => (tempC.value*9/5+32).toFixed(1))
const tempK = computed(() => (tempC.value+273.15).toFixed(2))
const material = ref('Steel')
const alphas: Record<string,number> = { Steel:12e-6, Aluminum:23e-6, Glass:9e-6, Copper:17e-6 }
const L0exp = ref(10), dT = ref(50)
const dL = computed(() => (alphas[material.value]*L0exp.value*dT.value*1000).toFixed(3))
const m1cal = ref(0.2), T1 = ref(80), m2cal = ref(0.3), T2 = ref(20), c = ref(4186)
const Tmix = computed(() => ((m1cal.value*c.value*T1.value+m2cal.value*c.value*T2.value)/((m1cal.value+m2cal.value)*c.value)).toFixed(1))
const htMode = ref('Conduction')
const t0 = ref(90), tAmb = ref(25), k = ref(0.05), dt2 = ref(5)
const tCool = computed(() => (tAmb.value+(t0.value-tAmb.value)*Math.exp(-k.value*dt2.value)).toFixed(1))
</script>

<template>
  <div class="lab">
    <template v-if="type === 'temperature-and-heat'">
      <h3>🍵 Temperature Lab</h3>
      <div class="ctrl"><label>Temperature: <b>{{ tempC }}°C</b></label><input type="range" min="-100" max="300" v-model.number="tempC" /></div>
      <table><tr><th>Scale</th><th>Value</th></tr>
        <tr><td>Celsius</td><td>{{ tempC }} °C</td></tr>
        <tr><td>Fahrenheit</td><td>{{ tempF }} °F</td></tr>
        <tr><td>Kelvin</td><td>{{ tempK }} K</td></tr>
      </table>
      <div class="result-box">Water boils at 100°C = 373.15 K = 212°F</div>
    </template>
    <template v-else-if="type === 'thermal-expansion'">
      <h3>🛤️ Thermal Expansion Lab</h3>
      <select v-model="material" style="margin-bottom:0.5rem;padding:4px;border-radius:6px;">
        <option v-for="m in Object.keys(alphas)" :key="m">{{ m }}</option>
      </select>
      <div class="ctrl"><label>Length L₀: <b>{{ L0exp }} m</b></label><input type="range" min="1" max="100" v-model.number="L0exp" /></div>
      <div class="ctrl"><label>Temp rise ΔT: <b>{{ dT }}°C</b></label><input type="range" min="1" max="200" v-model.number="dT" /></div>
      <div class="result-box">ΔL = αL₀ΔT = {{ (alphas[material]*1e6).toFixed(0) }}×10⁻⁶ × {{ L0exp }} × {{ dT }} = <b>{{ dL }} mm</b></div>
    </template>
    <template v-else-if="type === 'calorimetry'">
      <h3>☕ Calorimetry Lab</h3>
      <div class="ctrl"><label>Hot water m₁: <b>{{ m1cal }} kg</b></label><input type="range" min="0.05" max="1" step="0.05" v-model.number="m1cal" /></div>
      <div class="ctrl"><label>T₁: <b>{{ T1 }}°C</b></label><input type="range" min="50" max="100" v-model.number="T1" /></div>
      <div class="ctrl"><label>Cold water m₂: <b>{{ m2cal }} kg</b></label><input type="range" min="0.05" max="1" step="0.05" v-model.number="m2cal" /></div>
      <div class="ctrl"><label>T₂: <b>{{ T2 }}°C</b></label><input type="range" min="5" max="30" v-model.number="T2" /></div>
      <div class="result-box">Mix temperature = <b>{{ Tmix }}°C</b><br>Heat lost by hot = heat gained by cold ✅</div>
    </template>
    <template v-else-if="type === 'heat-transfer'">
      <h3>🥄 Heat Transfer Lab</h3>
      <table><tr><th>Mode</th><th>Example</th><th>Medium needed?</th></tr>
        <tr><td>Conduction</td><td>Metal spoon in hot tea</td><td>Yes (solid best)</td></tr>
        <tr><td>Convection</td><td>Boiling water in pot</td><td>Yes (fluid)</td></tr>
        <tr><td>Radiation</td><td>Sun warming Earth</td><td>No (vacuum OK)</td></tr>
      </table>
      <div class="result-box">Conductivity: Silver > Copper > Aluminum > Steel > Glass > Wood</div>
    </template>
    <template v-else-if="type === 'newtons-cooling'">
      <h3>📉 Newton's Cooling Lab</h3>
      <div class="ctrl"><label>Initial temp T₀: <b>{{ t0 }}°C</b></label><input type="range" min="50" max="200" v-model.number="t0" /></div>
      <div class="ctrl"><label>Room temp Tₐ: <b>{{ tAmb }}°C</b></label><input type="range" min="15" max="40" v-model.number="tAmb" /></div>
      <div class="ctrl"><label>Cooling const k: <b>{{ k }}</b></label><input type="range" min="0.01" max="0.2" step="0.01" v-model.number="k" /></div>
      <div class="ctrl"><label>Time: <b>{{ dt2 }} min</b></label><input type="range" min="1" max="60" v-model.number="dt2" /></div>
      <div class="result-box">T(t) = Tₐ + (T₀−Tₐ)e^(−kt) = <b>{{ tCool }}°C</b></div>
    </template>
  </div>
</template>

<style scoped>
.lab { padding: 1rem; font-size: 0.9rem; }
h3 { margin: 0 0 0.75rem; font-size: 1rem; }
.ctrl { display: flex; align-items: center; gap: 0.5rem; margin: 0.4rem 0; flex-wrap: wrap; }
.ctrl label { min-width: 160px; font-size: 0.82rem; color: var(--vp-c-text-2); }
.ctrl input[type=range] { flex: 1; accent-color: var(--vp-c-brand-1); }
.result-box { background: var(--vp-c-bg-soft); border-radius: 8px; padding: 8px 12px; margin: 0.5rem 0; line-height: 1.8; }
table { border-collapse: collapse; width: 100%; margin-top: 0.75rem; font-size: 0.82rem; }
th, td { border: 1px solid var(--vp-c-divider); padding: 5px 8px; }
th { background: var(--vp-c-bg-alt); }
</style>
