<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const m = ref(5), v = ref(10)
const p = computed(() => (m.value*v.value).toFixed(1))
const dt = ref(100)
const F = computed(() => (m.value*v.value/(dt.value/1000)).toFixed(0))
const m1 = ref(2), v1 = ref(5), m2 = ref(3), v2 = ref(0)
const v1After = computed(() => ((m1.value-m2.value)/(m1.value+m2.value)*v1.value).toFixed(2))
const v2After = computed(() => (2*m1.value/(m1.value+m2.value)*v1.value).toFixed(2))
const mass = ref(60), angle = ref(30), mu = ref(0.3)
const g = 9.8
const normal = computed(() => (mass.value*g*Math.cos(angle.value*Math.PI/180)).toFixed(1))
const friction = computed(() => (mu.value*parseFloat(normal.value)).toFixed(1))
const netForce = computed(() => (mass.value*g*Math.sin(angle.value*Math.PI/180)-parseFloat(friction.value)).toFixed(1))
const torqueF = ref(20), torqueR = ref(0.5)
const tau = computed(() => (torqueF.value*torqueR.value).toFixed(2))
</script>

<template>
  <div class="lab">
    <template v-if="type === 'inertia-first-law'">
      <h3>🚌 Inertia Lab</h3>
      <p>An object at rest stays at rest unless acted on by net force.</p>
      <div class="ctrl"><label>Mass: <b>{{ m }} kg</b></label><input type="range" min="1" max="20" v-model.number="m" /></div>
      <div class="result-box"><b>Heavier objects ({{ m }}kg) need more force to accelerate</b><br>Inertia ∝ mass</div>
    </template>
    <template v-else-if="type === 'momentum-second-law'">
      <h3>⚽ Momentum Lab</h3>
      <div class="ctrl"><label>Mass: <b>{{ m }} kg</b></label><input type="range" min="0.1" max="10" step="0.1" v-model.number="m" /></div>
      <div class="ctrl"><label>Velocity: <b>{{ v }} m/s</b></label><input type="range" min="1" max="30" v-model.number="v" /></div>
      <table><tr><th>Quantity</th><th>Value</th></tr>
        <tr><td>Momentum p = mv</td><td><b>{{ p }} kg·m/s</b></td></tr>
        <tr><td>F if stopped in {{ dt }}ms</td><td>{{ F }} N</td></tr>
      </table>
      <div class="ctrl"><label>Contact time: <b>{{ dt }} ms</b></label><input type="range" min="10" max="500" v-model.number="dt" /></div>
    </template>
    <template v-else-if="type === 'impulse'">
      <h3>🏏 Impulse Lab</h3>
      <div class="ctrl"><label>Mass: <b>{{ m }} kg</b></label><input type="range" min="0.1" max="5" step="0.1" v-model.number="m" /></div>
      <div class="ctrl"><label>Velocity change Δv: <b>{{ v }} m/s</b></label><input type="range" min="1" max="50" v-model.number="v" /></div>
      <div class="ctrl"><label>Contact time: <b>{{ dt }} ms</b></label><input type="range" min="5" max="500" v-model.number="dt" /></div>
      <div class="result-box">J = mΔv = <b>{{ p }} N·s</b><br>Force = J/t = <b>{{ F }} N</b><br>{{ parseFloat(F)>1000?'⚡ Very high force — fast contact':'✅ Manageable force' }}</div>
    </template>
    <template v-else-if="type === 'third-law'">
      <h3>🚀 Newton's 3rd Law Lab</h3>
      <p>Action and reaction are equal and opposite.</p>
      <div class="ctrl"><label>Thrust: <b>{{ torqueF }} kN</b></label><input type="range" min="5" max="100" v-model.number="torqueF" /></div>
      <table><tr><th>Action</th><th>Reaction</th></tr>
        <tr><td>Exhaust pushed down: {{ torqueF }} kN</td><td>Rocket pushed up: {{ torqueF }} kN</td></tr>
        <tr><td>Swimmer pushes wall ←</td><td>Wall pushes swimmer →</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'conservation-of-momentum'">
      <h3>🎱 Conservation of Momentum Lab</h3>
      <div class="ctrl"><label>m₁: <b>{{ m1 }} kg</b></label><input type="range" min="1" max="10" v-model.number="m1" /></div>
      <div class="ctrl"><label>v₁: <b>{{ v1 }} m/s</b></label><input type="range" min="1" max="20" v-model.number="v1" /></div>
      <div class="ctrl"><label>m₂: <b>{{ m2 }} kg</b></label><input type="range" min="1" max="10" v-model.number="m2" /></div>
      <table><tr><th></th><th>Before</th><th>After (elastic)</th></tr>
        <tr><td>v₁</td><td>{{ v1 }} m/s</td><td>{{ v1After }} m/s</td></tr>
        <tr><td>v₂</td><td>{{ v2 }} m/s</td><td>{{ v2After }} m/s</td></tr>
        <tr><td>p_total</td><td>{{ (m1*v1+m2*v2).toFixed(1) }} kg·m/s</td><td>{{ (m1*parseFloat(v1After)+m2*parseFloat(v2After)).toFixed(1) }} kg·m/s ✅</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'equilibrium'">
      <h3>🧘 Equilibrium Lab</h3>
      <div class="ctrl"><label>Mass: <b>{{ mass }} kg</b></label><input type="range" min="1" max="200" v-model.number="mass" /></div>
      <div class="ctrl"><label>Angle: <b>{{ angle }}°</b></label><input type="range" min="0" max="60" v-model.number="angle" /></div>
      <table><tr><th>Force</th><th>Value</th></tr>
        <tr><td>Weight</td><td>{{ (mass*9.8).toFixed(0) }} N</td></tr>
        <tr><td>Normal force</td><td>{{ normal }} N</td></tr>
        <tr><td>Friction (μ={{ mu }})</td><td>{{ friction }} N</td></tr>
        <tr><td>Net force along surface</td><td>{{ netForce }} N {{ parseFloat(netForce)<0?'(stationary)':'(sliding)' }}</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'friction'">
      <h3>👟 Friction Lab</h3>
      <div class="ctrl"><label>Mass: <b>{{ mass }} kg</b></label><input type="range" min="10" max="100" v-model.number="mass" /></div>
      <div class="ctrl"><label>μ (surface): <b>{{ mu }}</b></label><input type="range" min="0.01" max="0.9" step="0.01" v-model.number="mu" /></div>
      <table><tr><th>Surface</th><th>μ</th><th>Friction force</th></tr>
        <tr><td>Ice</td><td>0.03</td><td>{{ (0.03*mass*9.8).toFixed(0) }} N</td></tr>
        <tr><td>Tile</td><td>0.3</td><td>{{ (0.3*mass*9.8).toFixed(0) }} N</td></tr>
        <tr><td>Rubber mat</td><td>0.9</td><td>{{ (0.9*mass*9.8).toFixed(0) }} N</td></tr>
        <tr><td><b>Your surface</b></td><td><b>{{ mu }}</b></td><td><b>{{ (mu*mass*9.8).toFixed(0) }} N</b></td></tr>
      </table>
    </template>
    <template v-else-if="type === 'circular-motion'">
      <h3>🏍️ Circular Motion Lab</h3>
      <div class="ctrl"><label>Speed: <b>{{ v }} m/s</b></label><input type="range" min="5" max="50" v-model.number="v" /></div>
      <div class="ctrl"><label>Radius: <b>{{ m }} m</b></label><input type="range" min="5" max="100" v-model.number="m" /></div>
      <table><tr><th>Quantity</th><th>Value</th></tr>
        <tr><td>Centripetal acc = v²/r</td><td>{{ (v*v/m).toFixed(2) }} m/s²</td></tr>
        <tr><td>Centripetal force (70kg)</td><td>{{ (70*v*v/m).toFixed(0) }} N</td></tr>
        <tr><td>Period T = 2πr/v</td><td>{{ (2*Math.PI*m/v).toFixed(2) }} s</td></tr>
      </table>
    </template>
  </div>
</template>

<style scoped>
.lab { padding: 1rem; font-size: 0.9rem; }
h3 { margin: 0 0 0.75rem; font-size: 1rem; }
p { margin: 0 0 0.5rem; color: var(--vp-c-text-2); font-size: 0.85rem; }
.ctrl { display: flex; align-items: center; gap: 0.5rem; margin: 0.4rem 0; flex-wrap: wrap; }
.ctrl label { min-width: 130px; font-size: 0.82rem; color: var(--vp-c-text-2); }
.ctrl input[type=range] { flex: 1; accent-color: var(--vp-c-brand-1); }
.result-box { background: var(--vp-c-bg-soft); border-radius: 8px; padding: 8px 12px; margin: 0.5rem 0; line-height: 1.8; }
table { border-collapse: collapse; width: 100%; margin-top: 0.75rem; font-size: 0.82rem; }
th, td { border: 1px solid var(--vp-c-divider); padding: 5px 8px; }
th { background: var(--vp-c-bg-alt); }
</style>
