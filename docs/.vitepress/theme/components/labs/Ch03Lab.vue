<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const ax = ref(3), ay = ref(4)
const magA = computed(() => Math.sqrt(ax.value**2+ay.value**2).toFixed(2))
const bx = ref(1), by = ref(2)
const rx = computed(() => ax.value+bx.value), ry = computed(() => ay.value+by.value)
const magR = computed(() => Math.sqrt(rx.value**2+ry.value**2).toFixed(2))
const angle = ref(45), speed = ref(20)
const rad = computed(() => angle.value*Math.PI/180)
const vx = computed(() => (speed.value*Math.cos(rad.value)).toFixed(2))
const vy = computed(() => (speed.value*Math.sin(rad.value)).toFixed(2))
const range = computed(() => (speed.value**2*Math.sin(2*rad.value)/9.8).toFixed(1))
const maxH = computed(() => (speed.value**2*Math.sin(rad.value)**2/(2*9.8)).toFixed(1))
const ucmV = ref(10), ucmR = ref(5)
const ucmA = computed(() => (ucmV.value**2/ucmR.value).toFixed(2))
const ucmT = computed(() => (2*Math.PI*ucmR.value/ucmV.value).toFixed(2))
const ucmF = computed(() => (1*ucmV.value**2/ucmR.value).toFixed(2))
</script>

<template>
  <div class="lab">
    <template v-if="type === 'scalars-and-vectors'">
      <h3>🧭 Vectors Lab</h3>
      <p>Vector A: ({{ ax }}, {{ ay }})  |A| = {{ magA }}</p>
      <div class="ctrl"><label>Ax:</label><input type="range" min="-5" max="5" v-model.number="ax" /></div>
      <div class="ctrl"><label>Ay:</label><input type="range" min="-5" max="5" v-model.number="ay" /></div>
      <div class="result-box">Magnitude |A| = √({{ ax }}² + {{ ay }}²) = <b>{{ magA }}</b></div>
    </template>
    <template v-else-if="type === 'vector-addition'">
      <h3>➕ Vector Addition Lab</h3>
      <div class="ctrl"><label>A: ({{ ax }}, {{ ay }})</label></div>
      <div class="ctrl"><label>Bx:</label><input type="range" min="-5" max="5" v-model.number="bx" /></div>
      <div class="ctrl"><label>By:</label><input type="range" min="-5" max="5" v-model.number="by" /></div>
      <table><tr><th>Vector</th><th>x</th><th>y</th><th>Magnitude</th></tr>
        <tr><td>A</td><td>{{ ax }}</td><td>{{ ay }}</td><td>{{ magA }}</td></tr>
        <tr><td>B</td><td>{{ bx }}</td><td>{{ by }}</td><td>{{ Math.sqrt(bx**2+by**2).toFixed(2) }}</td></tr>
        <tr><td><b>R = A+B</b></td><td><b>{{ rx }}</b></td><td><b>{{ ry }}</b></td><td><b>{{ magR }}</b></td></tr>
      </table>
    </template>
    <template v-else-if="type === 'vector-components'">
      <h3>⚽ Projectile Components Lab</h3>
      <div class="ctrl"><label>Speed: <b>{{ speed }} m/s</b></label><input type="range" min="5" max="50" v-model.number="speed" /></div>
      <div class="ctrl"><label>Angle: <b>{{ angle }}°</b></label><input type="range" min="5" max="85" v-model.number="angle" /></div>
      <table><tr><th>Component</th><th>Value</th></tr>
        <tr><td>Vx = v·cosθ</td><td>{{ vx }} m/s</td></tr>
        <tr><td>Vy = v·sinθ</td><td>{{ vy }} m/s</td></tr>
        <tr><td>Range</td><td>{{ range }} m</td></tr>
        <tr><td>Max Height</td><td>{{ maxH }} m</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'unit-vectors'">
      <h3>📱 Unit Vectors Lab</h3>
      <div class="ctrl"><label>Ax: <b>{{ ax }}</b></label><input type="range" min="-5" max="5" v-model.number="ax" /></div>
      <div class="ctrl"><label>Ay: <b>{{ ay }}</b></label><input type="range" min="-5" max="5" v-model.number="ay" /></div>
      <div class="result-box">
        <div>A⃗ = {{ ax }}î + {{ ay }}ĵ</div>
        <div>|A⃗| = {{ magA }}</div>
        <div>â = {{ (ax/parseFloat(magA)).toFixed(2) }}î + {{ (ay/parseFloat(magA)).toFixed(2) }}ĵ (unit vector)</div>
      </div>
    </template>
    <template v-else-if="type === 'relative-velocity-2d'">
      <h3>✈️ Plane + Wind Lab</h3>
      <div class="ctrl"><label>Plane (N): <b>{{ speed }} km/h</b></label><input type="range" min="100" max="600" v-model.number="speed" /></div>
      <div class="ctrl"><label>Wind (E): <b>{{ ax*20 }} km/h</b></label><input type="range" min="0" max="10" v-model.number="ax" /></div>
      <table><tr><th>Parameter</th><th>Value</th></tr>
        <tr><td>Plane velocity (N)</td><td>{{ speed }} km/h</td></tr>
        <tr><td>Wind velocity (E)</td><td>{{ ax*20 }} km/h</td></tr>
        <tr><td>Actual speed</td><td>{{ Math.sqrt(speed**2+(ax*20)**2).toFixed(0) }} km/h</td></tr>
        <tr><td>Drift angle</td><td>{{ Math.atan2(ax*20,speed)*180/Math.PI|0 }}° east</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'uniform-circular-motion'">
      <h3>🏍️ Circular Motion Lab</h3>
      <div class="ctrl"><label>Speed: <b>{{ ucmV }} m/s</b></label><input type="range" min="1" max="30" v-model.number="ucmV" /></div>
      <div class="ctrl"><label>Radius: <b>{{ ucmR }} m</b></label><input type="range" min="1" max="20" v-model.number="ucmR" /></div>
      <table><tr><th>Quantity</th><th>Formula</th><th>Value</th></tr>
        <tr><td>Centripetal acc</td><td>v²/r</td><td>{{ ucmA }} m/s²</td></tr>
        <tr><td>Period</td><td>2πr/v</td><td>{{ ucmT }} s</td></tr>
        <tr><td>Centripetal force (1kg)</td><td>mv²/r</td><td>{{ ucmF }} N</td></tr>
      </table>
    </template>
  </div>
</template>

<style scoped>
.lab { padding: 1rem; font-size: 0.9rem; }
h3 { margin: 0 0 0.75rem; font-size: 1rem; }
p { margin: 0 0 0.5rem; color: var(--vp-c-text-2); }
.ctrl { display: flex; align-items: center; gap: 0.5rem; margin: 0.4rem 0; flex-wrap: wrap; }
.ctrl label { min-width: 120px; font-size: 0.82rem; color: var(--vp-c-text-2); }
.ctrl input[type=range] { flex: 1; accent-color: var(--vp-c-brand-1); }
.result-box { background: var(--vp-c-bg-soft); border-radius: 8px; padding: 8px 12px; margin: 0.5rem 0; font-size: 0.85rem; line-height: 1.8; }
table { border-collapse: collapse; width: 100%; margin-top: 0.75rem; font-size: 0.82rem; }
th, td { border: 1px solid var(--vp-c-divider); padding: 5px 8px; }
th { background: var(--vp-c-bg-alt); }
</style>
