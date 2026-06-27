<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()

const speed = ref(20), time = ref(5), dist = computed(() => (speed.value * time.value).toFixed(1))
const accU = ref(0), accA = ref(5), accT = ref(3)
const accV = computed(() => (accU.value + accA.value * accT.value).toFixed(1))
const accS = computed(() => (accU.value * accT.value + 0.5 * accA.value * accT.value ** 2).toFixed(1))
const h = ref(45), u = ref(0)
const eomG = 9.8
const eomT = computed(() => ((-u.value + Math.sqrt(u.value ** 2 + 2 * eomG * h.value)) / eomG).toFixed(2))
const eomV = computed(() => (u.value + eomG * parseFloat(eomT.value)).toFixed(1))
const va = ref(60), vb = ref(80)
const relOpp = computed(() => va.value + vb.value)
const relSame = computed(() => Math.abs(va.value - vb.value))
const dispD = ref(20), dispRuns = ref(3)
const totalDist = computed(() => dispRuns.value * dispD.value)
const displace = computed(() => dispRuns.value % 2 === 0 ? 0 : dispD.value)
</script>

<template>
  <div class="lab">
    <template v-if="type === 'velocity-speed'">
      <h3>🏎️ Speed-Distance-Time Lab</h3>
      <div class="ctrl"><label>Speed: <b>{{ speed }} m/s</b></label><input type="range" min="1" max="50" v-model.number="speed" /></div>
      <div class="ctrl"><label>Time: <b>{{ time }} s</b></label><input type="range" min="1" max="20" v-model.number="time" /></div>
      <div class="result-box">Distance = speed × time = <b>{{ dist }} m</b></div>
    </template>
    <template v-else-if="type === 'displacement'">
      <h3>🏏 Displacement vs Distance Lab</h3>
      <div class="ctrl"><label>Runs (pitch=20m): <b>{{ dispRuns }}</b></label><input type="range" min="1" max="6" v-model.number="dispRuns" /></div>
      <table><tr><th>Total Distance</th><th>Displacement</th></tr>
        <tr><td>{{ totalDist }} m</td><td>{{ displace }} m {{ displace === 0 ? '(returned!)' : '' }}</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'acceleration'">
      <h3>🚗 Acceleration Lab</h3>
      <div class="ctrl"><label>Initial velocity u: <b>{{ accU }} m/s</b></label><input type="range" min="0" max="30" v-model.number="accU" /></div>
      <div class="ctrl"><label>Acceleration a: <b>{{ accA }} m/s²</b></label><input type="range" min="1" max="20" v-model.number="accA" /></div>
      <div class="ctrl"><label>Time t: <b>{{ accT }} s</b></label><input type="range" min="1" max="10" v-model.number="accT" /></div>
      <table><tr><th>Equation</th><th>Value</th></tr>
        <tr><td>v = u + at</td><td>{{ accV }} m/s</td></tr>
        <tr><td>s = ut + ½at²</td><td>{{ accS }} m</td></tr>
        <tr><td>v² = u² + 2as</td><td>{{ (parseFloat(accV)**2).toFixed(0) }} = {{ (accU**2 + 2*accA*parseFloat(accS)).toFixed(0) }} ✅</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'equations-of-motion'">
      <h3>🏟️ Free Fall Lab</h3>
      <div class="ctrl"><label>Height h: <b>{{ h }} m</b></label><input type="range" min="5" max="100" v-model.number="h" /></div>
      <div class="ctrl"><label>Initial velocity u: <b>{{ u }} m/s</b></label><input type="range" min="0" max="20" v-model.number="u" /></div>
      <table><tr><th>Result</th><th>Value</th></tr>
        <tr><td>Time to ground</td><td>{{ eomT }} s</td></tr>
        <tr><td>Final velocity</td><td>{{ eomV }} m/s</td></tr>
        <tr><td>g</td><td>9.8 m/s²</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'relative-velocity'">
      <h3>🚆 Relative Velocity Lab</h3>
      <div class="ctrl"><label>Train A: <b>{{ va }} km/h →</b></label><input type="range" min="10" max="150" v-model.number="va" /></div>
      <div class="ctrl"><label>Train B: <b>← {{ vb }} km/h</b></label><input type="range" min="10" max="150" v-model.number="vb" /></div>
      <table><tr><th>Situation</th><th>Relative Velocity</th></tr>
        <tr><td>Opposite directions</td><td>{{ relOpp }} km/h</td></tr>
        <tr><td>Same direction</td><td>{{ relSame }} km/h</td></tr>
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
.result-box { background: var(--vp-c-bg-soft); border-radius: 8px; padding: 8px 12px; margin: 0.5rem 0; }
table { border-collapse: collapse; width: 100%; margin-top: 0.75rem; font-size: 0.82rem; }
th, td { border: 1px solid var(--vp-c-divider); padding: 6px 8px; }
th { background: var(--vp-c-bg-alt); }
</style>
