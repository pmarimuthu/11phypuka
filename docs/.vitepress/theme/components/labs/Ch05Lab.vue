<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const m = ref(5), v = ref(10), F = ref(50), d = ref(10), ang = ref(30), h = ref(20)
const g = 9.8
const W = computed(() => (F.value*d.value*Math.cos(ang.value*Math.PI/180)).toFixed(1))
const KE = computed(() => (0.5*m.value*v.value**2).toFixed(1))
const PE = computed(() => (m.value*g*h.value).toFixed(1))
const totalE = computed(() => (parseFloat(KE.value)+parseFloat(PE.value)).toFixed(1))
const dt = ref(5)
const power = computed(() => (parseFloat(W.value)/dt.value).toFixed(1))
const m1 = ref(2), v1 = ref(5), m2 = ref(2), v2 = ref(-3)
const elastic = ref(true)
const p_before = computed(() => (m1.value*v1.value+m2.value*v2.value).toFixed(2))
const ke_before = computed(() => (0.5*m1.value*v1.value**2+0.5*m2.value*v2.value**2).toFixed(2))
const v1_el = computed(() => (((m1.value-m2.value)*v1.value+2*m2.value*v2.value)/(m1.value+m2.value)).toFixed(2))
const v2_el = computed(() => ((2*m1.value*v1.value+(m2.value-m1.value)*v2.value)/(m1.value+m2.value)).toFixed(2))
const v_com = computed(() => ((m1.value*v1.value+m2.value*v2.value)/(m1.value+m2.value)).toFixed(2))
</script>

<template>
  <div class="lab">
    <template v-if="type === 'work'">
      <h3>🛒 Work Lab</h3>
      <div class="ctrl"><label>Force: <b>{{ F }} N</b></label><input type="range" min="1" max="200" v-model.number="F" /></div>
      <div class="ctrl"><label>Distance: <b>{{ d }} m</b></label><input type="range" min="1" max="50" v-model.number="d" /></div>
      <div class="ctrl"><label>Angle θ: <b>{{ ang }}°</b></label><input type="range" min="0" max="90" v-model.number="ang" /></div>
      <div class="result-box">W = F·d·cosθ = {{ F }}×{{ d }}×cos{{ ang }}° = <b>{{ W }} J</b></div>
    </template>
    <template v-else-if="type === 'kinetic-energy'">
      <h3>🏸 Kinetic Energy Lab</h3>
      <div class="ctrl"><label>Mass: <b>{{ m }} kg</b></label><input type="range" min="0.1" max="20" step="0.1" v-model.number="m" /></div>
      <div class="ctrl"><label>Speed: <b>{{ v }} m/s</b></label><input type="range" min="1" max="100" v-model.number="v" /></div>
      <div class="result-box">KE = ½mv² = ½×{{ m }}×{{ v }}² = <b>{{ KE }} J</b></div>
    </template>
    <template v-else-if="type === 'potential-energy'">
      <h3>🎢 Potential Energy Lab</h3>
      <div class="ctrl"><label>Mass: <b>{{ m }} kg</b></label><input type="range" min="1" max="100" v-model.number="m" /></div>
      <div class="ctrl"><label>Height: <b>{{ h }} m</b></label><input type="range" min="1" max="100" v-model.number="h" /></div>
      <div class="ctrl"><label>Speed at bottom: <b>{{ v }} m/s</b></label><input type="range" min="0" max="50" v-model.number="v" /></div>
      <table><tr><th>Energy</th><th>Value</th></tr>
        <tr><td>PE = mgh</td><td>{{ PE }} J</td></tr>
        <tr><td>KE = ½mv²</td><td>{{ KE }} J</td></tr>
        <tr><td>Total</td><td>{{ totalE }} J</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'conservation-of-energy'">
      <h3>🎡 Energy Conservation Lab</h3>
      <div class="ctrl"><label>Height: <b>{{ h }} m</b></label><input type="range" min="1" max="50" v-model.number="h" /></div>
      <div class="ctrl"><label>Mass: <b>{{ m }} kg</b></label><input type="range" min="1" max="50" v-model.number="m" /></div>
      <table><tr><th>Position</th><th>PE (J)</th><th>KE (J)</th><th>Total (J)</th></tr>
        <tr><td>Top (h={{ h }}m)</td><td>{{ PE }}</td><td>0</td><td>{{ PE }}</td></tr>
        <tr><td>Middle (h/2)</td><td>{{ (m*g*h/2).toFixed(1) }}</td><td>{{ (m*g*h/2).toFixed(1) }}</td><td>{{ PE }}</td></tr>
        <tr><td>Bottom (h=0)</td><td>0</td><td>{{ PE }}</td><td>{{ PE }}</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'power'">
      <h3>⚡ Power Lab</h3>
      <div class="ctrl"><label>Work done: <b>{{ W }} J</b></label></div>
      <div class="ctrl"><label>Time taken: <b>{{ dt }} s</b></label><input type="range" min="1" max="60" v-model.number="dt" /></div>
      <div class="ctrl"><label>Force: <b>{{ F }} N</b></label><input type="range" min="1" max="500" v-model.number="F" /></div>
      <div class="ctrl"><label>Distance: <b>{{ d }} m</b></label><input type="range" min="1" max="100" v-model.number="d" /></div>
      <div class="result-box">P = W/t = {{ W }}/{{ dt }} = <b>{{ power }} W = {{ (parseFloat(power)/1000).toFixed(3) }} kW</b></div>
    </template>
    <template v-else-if="type === 'collisions'">
      <h3>🎱 Collisions Lab</h3>
      <div class="ctrl"><label>m₁: <b>{{ m1 }} kg</b></label><input type="range" min="1" max="10" v-model.number="m1" /></div>
      <div class="ctrl"><label>v₁: <b>{{ v1 }} m/s</b></label><input type="range" min="1" max="20" v-model.number="v1" /></div>
      <div class="ctrl"><label>m₂: <b>{{ m2 }} kg</b></label><input type="range" min="1" max="10" v-model.number="m2" /></div>
      <div class="ctrl"><label>v₂: <b>{{ v2 }} m/s</b></label><input type="range" min="-10" max="0" v-model.number="v2" /></div>
      <div class="ctrl"><label><input type="checkbox" v-model="elastic" /> Elastic</label></div>
      <table><tr><th></th><th>Before</th><th>After</th></tr>
        <tr><td>v₁</td><td>{{ v1 }} m/s</td><td>{{ elastic ? v1_el : v_com }} m/s</td></tr>
        <tr><td>v₂</td><td>{{ v2 }} m/s</td><td>{{ elastic ? v2_el : v_com }} m/s</td></tr>
        <tr><td>p_total</td><td>{{ p_before }} kg·m/s</td><td>{{ p_before }} kg·m/s ✅</td></tr>
        <tr><td>KE_total</td><td>{{ ke_before }} J</td><td>{{ elastic ? ke_before : (0.5*(m1+m2)*parseFloat(v_com)**2).toFixed(2) }} J {{ elastic?'✅':'(lost to heat)' }}</td></tr>
      </table>
    </template>
  </div>
</template>

<style scoped>
.lab { padding: 1rem; font-size: 0.9rem; }
h3 { margin: 0 0 0.75rem; font-size: 1rem; }
.ctrl { display: flex; align-items: center; gap: 0.5rem; margin: 0.4rem 0; flex-wrap: wrap; }
.ctrl label { min-width: 130px; font-size: 0.82rem; color: var(--vp-c-text-2); }
.ctrl input[type=range] { flex: 1; accent-color: var(--vp-c-brand-1); }
.result-box { background: var(--vp-c-bg-soft); border-radius: 8px; padding: 8px 12px; margin: 0.5rem 0; }
table { border-collapse: collapse; width: 100%; margin-top: 0.75rem; font-size: 0.82rem; }
th, td { border: 1px solid var(--vp-c-divider); padding: 5px 8px; }
th { background: var(--vp-c-bg-alt); }
</style>
