<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const g = 9.8
const m1 = ref(40), x1 = ref(1), m2 = ref(60), x2 = ref(2)
const com = computed(() => ((m1.value*x1.value+m2.value*x2.value)/(m1.value+m2.value)).toFixed(2))
const F = ref(20), r = ref(0.4), ang = ref(90)
const torque = computed(() => (F.value*r.value*Math.sin(ang.value*Math.PI/180)).toFixed(2))
const I = ref(2), omega = ref(5)
const L = computed(() => (I.value*omega.value).toFixed(2))
const omegaNew = computed(() => (I.value*omega.value/Math.max(0.1,I.value*0.5)).toFixed(2))
const moi_m = ref(1), moi_r = ref(0.3)
const moiDisc = computed(() => (0.5*moi_m.value*moi_r.value**2).toFixed(3))
const moiRing = computed(() => (moi_m.value*moi_r.value**2).toFixed(3))
const moiRod = computed(() => ((1/12)*moi_m.value*(moi_r.value*4)**2).toFixed(3))
const rollM = ref(1), rollR = ref(0.2), rollH = ref(2)
const rollVdisc = computed(() => Math.sqrt(4*g*rollH.value/3).toFixed(2))
const rollVball = computed(() => Math.sqrt(10*g*rollH.value/7).toFixed(2))
const rollVring = computed(() => Math.sqrt(g*rollH.value).toFixed(2))
</script>

<template>
  <div class="lab">
    <template v-if="type === 'centre-of-mass'">
      <h3>🎡 Centre of Mass Lab</h3>
      <div class="ctrl"><label>m₁: <b>{{ m1 }} kg at x={{ x1 }}m</b></label><input type="range" min="10" max="100" v-model.number="m1" /></div>
      <div class="ctrl"><label>x₁:</label><input type="range" min="0" max="5" step="0.1" v-model.number="x1" /></div>
      <div class="ctrl"><label>m₂: <b>{{ m2 }} kg at x={{ x2 }}m</b></label><input type="range" min="10" max="100" v-model.number="m2" /></div>
      <div class="ctrl"><label>x₂:</label><input type="range" min="0" max="5" step="0.1" v-model.number="x2" /></div>
      <div class="result-box">CoM = (m₁x₁+m₂x₂)/(m₁+m₂) = <b>{{ com }} m</b><br>Heavier {{ m1>m2?'m₁':'m₂' }} pulls CoM closer to itself</div>
    </template>
    <template v-else-if="type === 'torque'">
      <h3>🔧 Torque Lab</h3>
      <div class="ctrl"><label>Force F: <b>{{ F }} N</b></label><input type="range" min="1" max="100" v-model.number="F" /></div>
      <div class="ctrl"><label>Lever arm r: <b>{{ r }} m</b></label><input type="range" min="0.1" max="2" step="0.1" v-model.number="r" /></div>
      <div class="ctrl"><label>Angle θ: <b>{{ ang }}°</b></label><input type="range" min="0" max="180" v-model.number="ang" /></div>
      <div class="result-box">τ = F·r·sinθ = {{ F }}×{{ r }}×sin{{ ang }}° = <b>{{ torque }} N·m</b><br>{{ ang===90?'Max torque at 90°':'Reduce angle to reduce torque' }}</div>
    </template>
    <template v-else-if="type === 'angular-momentum'">
      <h3>⛸️ Angular Momentum Lab</h3>
      <div class="ctrl"><label>Moment of Inertia I: <b>{{ I }} kg·m²</b></label><input type="range" min="1" max="10" v-model.number="I" /></div>
      <div class="ctrl"><label>Angular velocity ω: <b>{{ omega }} rad/s</b></label><input type="range" min="1" max="20" v-model.number="omega" /></div>
      <table><tr><th>Quantity</th><th>Value</th></tr>
        <tr><td>L = Iω</td><td><b>{{ L }} kg·m²/s</b></td></tr>
        <tr><td>If I halves (arms in)</td><td>ω doubles → {{ (parseFloat(omegaNew)*2).toFixed(1) }} rad/s</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'moment-of-inertia'">
      <h3>🚲 Moment of Inertia Lab</h3>
      <div class="ctrl"><label>Mass: <b>{{ moi_m }} kg</b></label><input type="range" min="0.1" max="5" step="0.1" v-model.number="moi_m" /></div>
      <div class="ctrl"><label>Radius: <b>{{ moi_r }} m</b></label><input type="range" min="0.1" max="1" step="0.01" v-model.number="moi_r" /></div>
      <table><tr><th>Shape</th><th>Formula</th><th>I (kg·m²)</th></tr>
        <tr><td>Solid disc (wheel)</td><td>½mr²</td><td>{{ moiDisc }}</td></tr>
        <tr><td>Ring (hoop)</td><td>mr²</td><td>{{ moiRing }}</td></tr>
        <tr><td>Thin rod (L=4r)</td><td>mL²/12</td><td>{{ moiRod }}</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'rolling-motion'">
      <h3>⚽ Rolling Motion Lab</h3>
      <div class="ctrl"><label>Height: <b>{{ rollH }} m</b></label><input type="range" min="0.5" max="10" step="0.5" v-model.number="rollH" /></div>
      <table><tr><th>Object</th><th>Speed at bottom</th></tr>
        <tr><td>Solid disc (bicycle wheel solid)</td><td>{{ rollVdisc }} m/s</td></tr>
        <tr><td>Solid ball (football)</td><td>{{ rollVball }} m/s</td></tr>
        <tr><td>Hollow ring (wheel rim)</td><td>{{ rollVring }} m/s</td></tr>
      </table>
      <div class="result-box">Ball wins! More KE in translation, less in rotation.</div>
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
