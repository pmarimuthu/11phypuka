<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const g = 9.8, rhoW = 1000
const depth = ref(10), rhoFluid = ref(1000)
const pAtm = 101325
const pressureTotal = computed(() => (pAtm + rhoFluid.value*g*depth.value).toFixed(0))
const archM = ref(5), archRho = ref(500)
const archVol = computed(() => (archM.value/archRho.value).toFixed(4))
const archBuoy = computed(() => (rhoW*g*parseFloat(archVol.value)).toFixed(2))
const archWeight = computed(() => (archM.value*g).toFixed(2))
const archFloats = computed(() => parseFloat(archBuoy.value) >= parseFloat(archWeight.value))
const stDropRadius = ref(1)
const stGamma = 0.0728
const stForce = computed(() => (4*Math.PI*stDropRadius.value*1e-3*stGamma*1000).toFixed(3))
const eta = ref(1), tubeR = ref(5), len = ref(10), dp = ref(1000)
const flow = computed(() => (Math.PI*parseFloat(tubeR.value)**4*dp.value/(8*eta.value*len.value*1e9)).toExponential(3))
</script>

<template>
  <div class="lab">
    <template v-if="type === 'archimedes'">
      <h3>🚢 Archimedes' Principle Lab</h3>
      <div class="ctrl"><label>Object mass: <b>{{ archM }} kg</b></label><input type="range" min="0.1" max="50" step="0.1" v-model.number="archM" /></div>
      <div class="ctrl"><label>Object density: <b>{{ archRho }} kg/m³</b></label><input type="range" min="100" max="8000" step="100" v-model.number="archRho" /></div>
      <table><tr><th>Quantity</th><th>Value</th></tr>
        <tr><td>Volume</td><td>{{ archVol }} m³</td></tr>
        <tr><td>Weight (mg)</td><td>{{ archWeight }} N</td></tr>
        <tr><td>Buoyant force</td><td>{{ archBuoy }} N</td></tr>
        <tr><td>Result</td><td><b>{{ archFloats ? '🚢 Floats!' : '⬇️ Sinks' }}</b></td></tr>
      </table>
    </template>
    <template v-else-if="type === 'surface-tension'">
      <h3>💧 Surface Tension Lab</h3>
      <div class="ctrl"><label>Drop radius: <b>{{ stDropRadius }} mm</b></label><input type="range" min="0.1" max="5" step="0.1" v-model.number="stDropRadius" /></div>
      <div class="result-box">γ (water) = 0.0728 N/m<br>Excess pressure in bubble = 4γ/r = <b>{{ (4*stGamma/(stDropRadius*1e-3)).toFixed(1) }} Pa</b></div>
      <table><tr><th>Phenomenon</th><th>Due to</th></tr>
        <tr><td>Water strider walks on water</td><td>Surface tension supports it</td></tr>
        <tr><td>Soap bubble is spherical</td><td>Minimum surface area</td></tr>
        <tr><td>Rain drops are spherical</td><td>Surface tension, min energy</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'viscosity'">
      <h3>🍯 Viscosity Lab</h3>
      <div class="ctrl"><label>η (viscosity): <b>{{ eta }} mPa·s</b></label><input type="range" min="1" max="100" v-model.number="eta" /></div>
      <div class="ctrl"><label>Tube radius: <b>{{ tubeR }} mm</b></label><input type="range" min="1" max="10" v-model.number="tubeR" /></div>
      <div class="result-box">Flow rate Q = <b>{{ flow }} m³/s</b> (Poiseuille's law)<br>Q ∝ r⁴ — double radius → 16× flow!</div>
      <table><tr><th>Liquid</th><th>η (mPa·s)</th><th>Comparison</th></tr>
        <tr><td>Water</td><td>1</td><td>Reference</td></tr>
        <tr><td>Blood</td><td>3–4</td><td>3–4× water</td></tr>
        <tr><td>Honey</td><td>2000–10000</td><td>Very slow flow</td></tr>
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
