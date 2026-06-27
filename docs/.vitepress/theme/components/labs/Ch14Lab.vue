<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const freq = ref(440), waveLen = ref(0.77)
const waveSpeed = computed(() => (freq.value*waveLen.value).toFixed(1))
const medium = ref('Air (20°C)')
const speeds: Record<string,number> = { 'Air (20°C)':343,'Water':1480,'Steel':5960,'Wood (oak)':3850 }
const speedVal = computed(() => speeds[medium.value])
const waveLenCalc = computed(() => (speedVal.value/freq.value).toFixed(3))
const L = ref(0.5), harmonic = ref(1)
const standFreq = computed(() => (harmonic.value*343/(2*L.value)).toFixed(1))
const f1 = ref(440), f2 = ref(444)
const beatFreq = computed(() => Math.abs(f1.value - f2.value))
const isBeat = computed(() => beatFreq.value < 10)
const vs = ref(343), vsrc = ref(0), vobs = ref(0), fsrc = ref(500)
const fObs = computed(() => (fsrc.value*(vs.value+vobs.value)/(vs.value-vsrc.value)).toFixed(1))
</script>

<template>
  <div class="lab">
    <template v-if="type === 'wave-motion'">
      <h3>🌊 Wave Motion Lab</h3>
      <div class="ctrl"><label>Frequency: <b>{{ freq }} Hz</b></label><input type="range" min="100" max="2000" v-model.number="freq" /></div>
      <div class="ctrl"><label>Wavelength: <b>{{ waveLen }} m</b></label><input type="range" min="0.1" max="5" step="0.01" v-model.number="waveLen" /></div>
      <div class="result-box">v = fλ = {{ freq }} × {{ waveLen }} = <b>{{ waveSpeed }} m/s</b></div>
      <table><tr><th>Wave type</th><th>Example</th><th>Medium</th></tr>
        <tr><td>Transverse</td><td>Guitar string, light</td><td>Solid / vacuum</td></tr>
        <tr><td>Longitudinal</td><td>Sound, ultrasound</td><td>Any</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'speed-of-waves'">
      <h3>📢 Speed of Waves Lab</h3>
      <select v-model="medium" style="margin-bottom:0.5rem;padding:4px;border-radius:6px;">
        <option v-for="m in Object.keys(speeds)" :key="m">{{ m }}</option>
      </select>
      <div class="ctrl"><label>Frequency: <b>{{ freq }} Hz</b></label><input type="range" min="100" max="5000" v-model.number="freq" /></div>
      <div class="result-box">Speed in {{ medium }}: <b>{{ speedVal }} m/s</b><br>λ = v/f = {{ speedVal }}/{{ freq }} = <b>{{ waveLenCalc }} m</b></div>
    </template>
    <template v-else-if="type === 'standing-waves'">
      <h3>🎸 Standing Waves Lab</h3>
      <div class="ctrl"><label>String length L: <b>{{ L }} m</b></label><input type="range" min="0.1" max="2" step="0.05" v-model.number="L" /></div>
      <div class="ctrl"><label>Harmonic n: <b>{{ harmonic }}</b></label><input type="range" min="1" max="5" v-model.number="harmonic" /></div>
      <div class="result-box">f_n = n·v/(2L) = {{ harmonic }}×343/(2×{{ L }}) = <b>{{ standFreq }} Hz</b></div>
      <table><tr><th>Harmonic</th><th>Freq (Hz)</th><th>Nodes</th></tr>
        <tr v-for="n in [1,2,3,4,5]" :key="n">
          <td>{{ n }} ({{ ['fundamental','2nd','3rd','4th','5th'][n-1] }})</td>
          <td>{{ (n*343/(2*L)).toFixed(1) }}</td><td>{{ n+1 }}</td>
        </tr>
      </table>
    </template>
    <template v-else-if="type === 'beats'">
      <h3>🎵 Beats Lab</h3>
      <div class="ctrl"><label>f₁: <b>{{ f1 }} Hz</b></label><input type="range" min="400" max="500" v-model.number="f1" /></div>
      <div class="ctrl"><label>f₂: <b>{{ f2 }} Hz</b></label><input type="range" min="400" max="500" v-model.number="f2" /></div>
      <div class="result-box">Beat frequency = |f₁ − f₂| = <b>{{ beatFreq }} Hz</b><br>{{ isBeat?'Audible beats (wah-wah effect)':'Too fast to hear as beats — sounds like new frequency' }}</div>
      <table><tr><th>Use case</th><th>How beats help</th></tr>
        <tr><td>Tuning a guitar</td><td>Adjust till beats disappear (f₁=f₂)</td></tr>
        <tr><td>Piano tuning</td><td>Tune to zero beats against reference</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'doppler'">
      <h3>🚨 Doppler Effect Lab</h3>
      <div class="ctrl"><label>Source freq f₀: <b>{{ fsrc }} Hz</b></label><input type="range" min="200" max="2000" v-model.number="fsrc" /></div>
      <div class="ctrl"><label>Source speed v_s: <b>{{ vsrc }} m/s →</b></label><input type="range" min="-100" max="100" v-model.number="vsrc" /></div>
      <div class="ctrl"><label>Observer speed v_o: <b>{{ vobs }} m/s →</b></label><input type="range" min="-100" max="100" v-model.number="vobs" /></div>
      <div class="result-box">f_obs = f₀(v+v_o)/(v−v_s) = <b>{{ fObs }} Hz</b><br>{{ parseFloat(fObs)>fsrc?'Higher pitch (approaching)':parseFloat(fObs)<fsrc?'Lower pitch (receding)':'Same pitch' }}</div>
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
