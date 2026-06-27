<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const G = 6.674e-11, Me = 5.972e24, Re = 6.371e6
const M1 = ref(6e24), M2 = ref(7.35e22), dist = ref(3.84e8)
const Fg = computed(() => (G*M1.value*M2.value/(dist.value**2)).toExponential(3))
const planet = ref('Earth')
const planets: Record<string,{g:number,R:number}> = {
  Earth: {g:9.8,R:6371},Mercury:{g:3.7,R:2439},Mars:{g:3.7,R:3389},Jupiter:{g:24.8,R:69911}
}
const gVal = computed(() => planets[planet.value].g)
const escV = computed(() => Math.sqrt(2*planets[planet.value].g*planets[planet.value].R*1000).toFixed(0))
const kM = ref(6e24), kT = ref(365.25*86400), kRatio = ref(1)
const kA = computed(() => ((kT.value**2)*G*kM.value/(4*Math.PI**2)**(1/3)).toExponential(3))
const altKm = ref(400)
const satV = computed(() => Math.sqrt(G*Me/(Re+altKm.value*1000)).toFixed(0))
const satT = computed(() => (2*Math.PI*(Re+altKm.value*1000)/parseFloat(satV.value)/3600).toFixed(1))
</script>

<template>
  <div class="lab">
    <template v-if="type === 'universal-law'">
      <h3>🌍 Gravity Lab</h3>
      <div class="ctrl"><label>Distance: <b>{{ (dist/1e8).toFixed(2) }}×10⁸ m</b></label><input type="range" min="1e8" max="1e9" step="1e7" v-model.number="dist" /></div>
      <div class="result-box">F = GM₁M₂/r² = <b>{{ Fg }} N</b><br>Earth–Moon gravitational pull</div>
      <table><tr><th>Distance ×</th><th>Force factor</th></tr>
        <tr><td>1 (now)</td><td>1</td></tr>
        <tr><td>2</td><td>1/4 = 0.25</td></tr>
        <tr><td>3</td><td>1/9 = 0.11</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'gravitational-field'">
      <h3>🪐 Gravitational Field Lab</h3>
      <select v-model="planet" style="margin-bottom:0.5rem;padding:4px;border-radius:6px;">
        <option v-for="p in Object.keys(planets)" :key="p">{{ p }}</option>
      </select>
      <table><tr><th>Quantity</th><th>Value</th></tr>
        <tr><td>g (surface)</td><td>{{ gVal }} m/s²</td></tr>
        <tr><td>Weight of 60 kg person</td><td>{{ (60*gVal).toFixed(0) }} N</td></tr>
        <tr><td>Escape velocity</td><td>{{ (parseInt(escV)/1000).toFixed(1) }} km/s</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'escape-velocity'">
      <h3>🚀 Escape Velocity Lab</h3>
      <select v-model="planet" style="margin-bottom:0.5rem;padding:4px;border-radius:6px;">
        <option v-for="p in Object.keys(planets)" :key="p">{{ p }}</option>
      </select>
      <div class="result-box">v_escape = √(2gR) = <b>{{ (parseInt(escV)/1000).toFixed(2) }} km/s</b> from {{ planet }}</div>
      <table><tr><th>Planet</th><th>v_esc (km/s)</th></tr>
        <tr v-for="(data,name) in planets" :key="name">
          <td>{{ name }}</td><td>{{ (Math.sqrt(2*data.g*data.R*1000)/1000).toFixed(2) }}</td>
        </tr>
      </table>
    </template>
    <template v-else-if="type === 'keplers-laws'">
      <h3>🌌 Kepler's Laws Lab</h3>
      <p style="font-size:0.82rem;color:var(--vp-c-text-2)">T² ∝ a³ (Period² ∝ Semi-major axis³)</p>
      <table><tr><th>Planet</th><th>T (years)</th><th>a (AU)</th><th>T²/a³</th></tr>
        <tr><td>Mercury</td><td>0.24</td><td>0.387</td><td>{{ (0.24**2/0.387**3).toFixed(2) }}</td></tr>
        <tr><td>Earth</td><td>1.00</td><td>1.000</td><td>1.00</td></tr>
        <tr><td>Mars</td><td>1.88</td><td>1.524</td><td>{{ (1.88**2/1.524**3).toFixed(2) }}</td></tr>
        <tr><td>Jupiter</td><td>11.86</td><td>5.203</td><td>{{ (11.86**2/5.203**3).toFixed(2) }}</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'satellites'">
      <h3>🛰️ Satellite Lab</h3>
      <div class="ctrl"><label>Altitude: <b>{{ altKm }} km</b></label><input type="range" min="200" max="36000" step="100" v-model.number="altKm" /></div>
      <table><tr><th>Quantity</th><th>Value</th></tr>
        <tr><td>Orbital speed</td><td>{{ satV }} m/s ({{ (parseInt(satV)/1000).toFixed(2) }} km/s)</td></tr>
        <tr><td>Orbital period</td><td>{{ satT }} hours</td></tr>
        <tr><td>Type</td><td>{{ altKm<1000?'LEO (ISS)':altKm<20000?'MEO (GPS)':'GEO (TV satellite)' }}</td></tr>
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
