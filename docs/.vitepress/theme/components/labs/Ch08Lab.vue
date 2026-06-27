<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const L0 = ref(2), dL = ref(0.02), A = ref(1e-4), F = ref(1000)
const stress = computed(() => (F.value/A.value).toFixed(2))
const strain = computed(() => (dL.value/L0.value).toFixed(4))
const youngMod = computed(() => (parseFloat(stress.value)/parseFloat(strain.value)).toExponential(2))
const kSpring = ref(50), xSpring = ref(0.1)
const springF = computed(() => (kSpring.value*xSpring.value).toFixed(1))
const material = ref('Steel')
const materials: Record<string,{Y:number,G:number,B:number}> = {
  Steel:{Y:200,G:80,B:160}, Rubber:{Y:0.05,G:0.003,B:2}, Glass:{Y:70,G:30,B:37}, Copper:{Y:110,G:40,B:140}
}
const stressKPa = ref(100)
</script>

<template>
  <div class="lab">
    <template v-if="type === 'stress-and-strain'">
      <h3>🔩 Stress & Strain Lab</h3>
      <div class="ctrl"><label>Force F: <b>{{ F }} N</b></label><input type="range" min="100" max="50000" step="100" v-model.number="F" /></div>
      <div class="ctrl"><label>Area A: <b>{{ (A*1e6).toFixed(0) }} mm²</b></label><input type="range" min="1e-5" max="1e-3" step="1e-5" v-model.number="A" /></div>
      <div class="ctrl"><label>Length L₀: <b>{{ L0 }} m</b></label><input type="range" min="0.5" max="5" step="0.5" v-model.number="L0" /></div>
      <div class="ctrl"><label>Extension ΔL: <b>{{ (dL*100).toFixed(1) }} cm</b></label><input type="range" min="0.001" max="0.1" step="0.001" v-model.number="dL" /></div>
      <table><tr><th>Quantity</th><th>Value</th></tr>
        <tr><td>Stress = F/A</td><td>{{ stress }} Pa</td></tr>
        <tr><td>Strain = ΔL/L₀</td><td>{{ strain }}</td></tr>
        <tr><td>Young's Modulus</td><td>{{ youngMod }} Pa</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'hookes-law'">
      <h3>🤸 Hooke's Law Lab</h3>
      <div class="ctrl"><label>Spring constant k: <b>{{ kSpring }} N/m</b></label><input type="range" min="10" max="500" v-model.number="kSpring" /></div>
      <div class="ctrl"><label>Extension x: <b>{{ (xSpring*100).toFixed(0) }} cm</b></label><input type="range" min="0.01" max="0.5" step="0.01" v-model.number="xSpring" /></div>
      <div class="result-box">F = kx = {{ kSpring }} × {{ xSpring }} = <b>{{ springF }} N</b></div>
      <table><tr><th>Extension (cm)</th><th>Force (N)</th></tr>
        <tr v-for="x in [5,10,15,20,25]" :key="x"><td>{{ x }}</td><td>{{ (kSpring*x/100).toFixed(1) }}</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'elastic-moduli'">
      <h3>🏗️ Elastic Moduli Lab</h3>
      <select v-model="material" style="margin-bottom:0.5rem;padding:4px;border-radius:6px;">
        <option v-for="m in Object.keys(materials)" :key="m">{{ m }}</option>
      </select>
      <table><tr><th>Modulus</th><th>Value (GPa)</th><th>What it resists</th></tr>
        <tr><td>Young's (Y)</td><td>{{ materials[material].Y }}</td><td>Stretching/compression</td></tr>
        <tr><td>Shear (G)</td><td>{{ materials[material].G }}</td><td>Shear forces</td></tr>
        <tr><td>Bulk (B)</td><td>{{ materials[material].B }}</td><td>Pressure from all sides</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'stress-strain-curve'">
      <h3>📊 Stress-Strain Curve Lab</h3>
      <div class="ctrl"><label>Applied stress: <b>{{ stressKPa }} MPa</b></label><input type="range" min="0" max="600" step="10" v-model.number="stressKPa" /></div>
      <div class="result-box">
        Region: <b>{{ stressKPa<250?'Elastic (Hooke\'s law applies)':stressKPa<350?'Yield point (permanent deformation starts)':stressKPa<500?'Plastic deformation':' Fracture zone' }}</b>
      </div>
      <table><tr><th>Stress (MPa)</th><th>Region</th></tr>
        <tr><td>0–250</td><td>Elastic (returns to shape)</td></tr>
        <tr><td>250–350</td><td>Yield (deforms permanently)</td></tr>
        <tr><td>350–500</td><td>Plastic deformation</td></tr>
        <tr><td>>500</td><td>Fracture</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'applications-elasticity'">
      <h3>🌉 Elasticity Applications Lab</h3>
      <div class="ctrl"><label>Bridge cable load: <b>{{ F }} kN</b></label><input type="range" min="100" max="10000" step="100" v-model.number="F" /></div>
      <table><tr><th>Application</th><th>Key property used</th><th>Material</th></tr>
        <tr><td>Bridge cables</td><td>High Y, tensile strength</td><td>Steel (Y=200GPa)</td></tr>
        <tr><td>Shock absorbers</td><td>Low Y, high damping</td><td>Rubber</td></tr>
        <tr><td>Bone</td><td>Stiff yet flexible</td><td>Bone (Y≈18GPa)</td></tr>
        <tr><td>Bungee cord</td><td>Very low Y, elastic</td><td>Latex rubber</td></tr>
      </table>
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
