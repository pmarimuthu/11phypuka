<script setup lang="ts">
import WasmHero from './WasmHero.vue'
import FeelHero from './FeelHero.vue'
import ExploreHero from './ExploreHero.vue'
import MeasurementLab from './labs/MeasurementLab.vue'
import PascalLab from './labs/PascalLab.vue'
import BernoulliLab from './labs/BernoulliLab.vue'
import Ch01Lab from './labs/Ch01Lab.vue'
import Ch02Lab from './labs/Ch02Lab.vue'
import Ch03Lab from './labs/Ch03Lab.vue'
import Ch04Lab from './labs/Ch04Lab.vue'
import Ch05Lab from './labs/Ch05Lab.vue'
import Ch06Lab from './labs/Ch06Lab.vue'
import Ch07Lab from './labs/Ch07Lab.vue'
import Ch08Lab from './labs/Ch08Lab.vue'
import Ch09Lab from './labs/Ch09Lab.vue'
import Ch10Lab from './labs/Ch10Lab.vue'
import Ch11Lab from './labs/Ch11Lab.vue'
import Ch12Lab from './labs/Ch12Lab.vue'
import Ch13Lab from './labs/Ch13Lab.vue'
import Ch14Lab from './labs/Ch14Lab.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import CAPTIONS from '../data/concept-captions.json'
import conceptConfig from '../data/concept-config.json'

const props = defineProps<{ type: string; caption?: string; open?: boolean }>()

const cap = computed(() => props.caption ?? (CAPTIONS as Record<string, string>)[props.type] ?? '')
const isOpen       = ref(props.open ?? true)
const tab          = ref<'svg'|'wasm'|'three'|'feel'|'lab'>('svg')
const isFullscreen = ref(false)

const WASM_TYPES = new Set(conceptConfig.wasmTypes)
const FEEL_TYPES = new Set(conceptConfig.feelTypes)
const hasWasm = computed(() => WASM_TYPES.has(props.type))
const has3D   = computed(() => props.type === 'projectile-motion')
const hasFeel = computed(() => FEEL_TYPES.has(props.type))

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && isFullscreen.value) isFullscreen.value = false
}
onMounted(()   => document.addEventListener('keydown', onKey))
onUnmounted(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <figure class="concept-hero" :class="'ch-' + type">
    <div :class="['ch-card', { 'ch-card--full': isFullscreen }]">
      <div class="ch-head">
        <span class="ch-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12 C5 6 8 6 11 12 C14 18 17 18 20 12 L22 10"/></svg></span>
        <span class="ch-label">Visualise</span>
        <button class="ch-fullscreen-btn"
                :aria-label="isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'"
                @click="isFullscreen = !isFullscreen">
          <svg v-if="!isFullscreen" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
            <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/>
            <line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/>
          </svg>
        </button>
        <button class="ch-toggle" :aria-expanded="isOpen" :aria-label="isOpen ? 'Collapse' : 'Expand'" @click="isOpen = !isOpen">
          <svg class="ch-arrow" :class="{ open: isOpen }" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <div v-show="isOpen" class="ch-body">
        <div class="ch-tabs">
          <button :class="['ch-tab', { active: tab === 'svg' }]" @click="tab = 'svg'">Watch</button>
          <button :class="['ch-tab', { active: tab === 'wasm' }]" @click="tab = 'wasm'">Explore</button>
          <button v-if="has3D" :class="['ch-tab', { active: tab === 'three' }]" @click="tab = 'three'">3D Scene</button>
          <button v-if="hasFeel" :class="['ch-tab', { active: tab === 'feel' }]" @click="tab = 'feel'">Feel</button>
          <button :class="['ch-tab', { active: tab === 'lab' }]" @click="tab = 'lab'">Lab</button>
        </div>
      <WasmHero v-if="hasWasm && (tab === 'wasm' || tab === 'three')"
                :type="type" :active-tab="tab" />
      <ExploreHero v-else-if="tab === 'wasm'" :type="type" />
      <div v-else-if="tab === 'three'" class="visualise-empty">No Content</div>

      <FeelHero v-if="hasFeel && tab === 'feel'" :type="type" />

      <MeasurementLab v-if="tab === 'lab' && type === 'si-units'" />
      <PascalLab v-else-if="tab === 'lab' && type === 'pressure'" />
      <BernoulliLab v-else-if="tab === 'lab' && type === 'bernoulli'" />
      <Ch01Lab v-else-if="tab === 'lab' && ['significant-figures','dimensions','dimensional-analysis'].includes(type)" :type="type" />
      <Ch02Lab v-else-if="tab === 'lab' && ['velocity-speed','displacement','acceleration','equations-of-motion','relative-velocity'].includes(type)" :type="type" />
      <Ch03Lab v-else-if="tab === 'lab' && ['scalars-and-vectors','vector-addition','vector-components','unit-vectors','relative-velocity-2d','uniform-circular-motion'].includes(type)" :type="type" />
      <Ch04Lab v-else-if="tab === 'lab' && ['inertia-first-law','momentum-second-law','impulse','third-law','conservation-of-momentum','equilibrium','friction','circular-motion'].includes(type)" :type="type" />
      <Ch05Lab v-else-if="tab === 'lab' && ['work','kinetic-energy','potential-energy','conservation-of-energy','power','collisions'].includes(type)" :type="type" />
      <Ch06Lab v-else-if="tab === 'lab' && ['centre-of-mass','torque','angular-momentum','moment-of-inertia','rolling-motion'].includes(type)" :type="type" />
      <Ch07Lab v-else-if="tab === 'lab' && ['universal-law','gravitational-field','escape-velocity','keplers-laws','satellites'].includes(type)" :type="type" />
      <Ch08Lab v-else-if="tab === 'lab' && ['stress-and-strain','hookes-law','elastic-moduli','stress-strain-curve','applications-elasticity'].includes(type)" :type="type" />
      <Ch09Lab v-else-if="tab === 'lab' && ['archimedes','surface-tension','viscosity'].includes(type)" :type="type" />
      <Ch10Lab v-else-if="tab === 'lab' && ['temperature-and-heat','thermal-expansion','calorimetry','heat-transfer','newtons-cooling'].includes(type)" :type="type" />
      <Ch11Lab v-else-if="tab === 'lab' && ['thermodynamic-processes','first-law','second-law','heat-engine','carnot-theorem'].includes(type)" :type="type" />
      <Ch12Lab v-else-if="tab === 'lab' && ['kinetic-theory','speed-of-molecules','equipartition','mean-free-path'].includes(type)" :type="type" />
      <Ch13Lab v-else-if="tab === 'lab' && ['shm','simple-pendulum','energy-shm','damped-oscillations','resonance'].includes(type)" :type="type" />
      <Ch14Lab v-else-if="tab === 'lab' && ['wave-motion','speed-of-waves','standing-waves','beats','doppler'].includes(type)" :type="type" />
      <div v-else-if="tab === 'lab'" class="visualise-empty">No Content</div>

      <svg v-show="tab === 'svg'" viewBox="0 0 360 150" role="img" :aria-label="cap" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ahR" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#e2483d"/></marker>
          <marker id="ahB" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2f6fd0"/></marker>
          <marker id="ahO" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#e08a1e"/></marker>
          <marker id="ahG" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1f9d6b"/></marker>
        </defs>


        <g v-if="type === 'si-units'">
          <text x="180" y="34" class="lblS" text-anchor="middle">7 SI base units</text>
          <g class="u1"><rect x="22" y="48" width="92" height="58" rx="8" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/><text x="68" y="82" class="lblBig" text-anchor="middle">m</text><text x="68" y="98" class="lblS" text-anchor="middle">length</text></g>
          <g class="u2"><rect x="134" y="48" width="92" height="58" rx="8" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/><text x="180" y="82" class="lblBig" text-anchor="middle">kg</text><text x="180" y="98" class="lblS" text-anchor="middle">mass</text></g>
          <g class="u3"><rect x="246" y="48" width="92" height="58" rx="8" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/><text x="292" y="82" class="lblBig" text-anchor="middle">s</text><text x="292" y="98" class="lblS" text-anchor="middle">time</text></g>
          <text x="180" y="128" class="lblS" text-anchor="middle">+ ampere · kelvin · mole · candela</text>
        </g>
        <g v-else-if="type === 'significant-figures'">
          <text x="180" y="40" class="lblS" text-anchor="middle">leading zeros don't count</text>
          <text x="108" y="84" class="sfD sfDim" text-anchor="middle">0</text>
          <text x="132" y="84" class="sfD sfDim" text-anchor="middle">.</text>
          <text x="156" y="84" class="sfD sfDim" text-anchor="middle">0</text>
          <text x="180" y="84" class="sfD sfSig" text-anchor="middle">4</text>
          <text x="204" y="84" class="sfD sfSig" text-anchor="middle">0</text>
          <text x="228" y="84" class="sfD sfSig" text-anchor="middle">5</text>
          <text x="252" y="84" class="sfD sfSig" text-anchor="middle">0</text>
          <rect class="sfBar" x="168" y="94" width="96" height="4" rx="2" fill="#1f9d6b"/>
          <text x="180" y="124" class="lblS" text-anchor="middle">4 significant figures (green)</text>
        </g>
        <g v-else-if="type === 'dimensions'">
          <text x="180" y="40" class="lblS" text-anchor="middle">Force in base dimensions</text>
          <text x="58" y="92" class="dimEq" text-anchor="middle">[F] =</text>
          <g class="dimM"><rect x="100" y="66" width="42" height="42" rx="6" fill="#3a6fd0"/><text x="121" y="93" class="dimB" text-anchor="middle">M</text></g>
          <g class="dimL"><rect x="150" y="66" width="42" height="42" rx="6" fill="#1f9d6b"/><text x="171" y="93" class="dimB" text-anchor="middle">L</text></g>
          <g class="dimT"><rect x="200" y="66" width="64" height="42" rx="6" fill="#e08a1e"/><text x="232" y="93" class="dimB" text-anchor="middle">T-2</text></g>
          <text x="305" y="92" class="lblS" text-anchor="middle">= MLT-2</text>
        </g>
        <g v-else-if="type === 'dimensional-analysis'">
          <line x1="180" y1="42" x2="180" y2="118" stroke="var(--vp-c-text-3)" stroke-width="3"/>
          <polygon points="168,118 192,118 180,132" fill="var(--vp-c-text-3)"/>
          <g class="balBeam">
            <line x1="100" y1="50" x2="260" y2="50" stroke="#4b5a6b" stroke-width="4"/>
            <line x1="100" y1="50" x2="100" y2="72" stroke="#4b5a6b" stroke-width="2"/>
            <line x1="260" y1="50" x2="260" y2="72" stroke="#4b5a6b" stroke-width="2"/>
            <rect x="64" y="72" width="72" height="30" rx="6" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <text x="100" y="92" class="lblM" text-anchor="middle">L T-1</text>
            <rect x="224" y="72" width="72" height="30" rx="6" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <text x="260" y="92" class="lblM" text-anchor="middle">L T-1</text>
          </g>
          <text x="180" y="146" class="lblS" text-anchor="middle">both sides match: equation can be valid</text>
        </g>


        <g v-else-if="type === 'displacement'">
          <line x1="30" y1="80" x2="330" y2="80" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <line x1="30" y1="74" x2="30" y2="86" stroke="var(--vp-c-text-3)" stroke-width="1.5"/>
          <line x1="105" y1="74" x2="105" y2="86" stroke="var(--vp-c-text-3)" stroke-width="1.5"/>
          <line x1="180" y1="74" x2="180" y2="86" stroke="var(--vp-c-text-3)" stroke-width="1.5"/>
          <line x1="255" y1="74" x2="255" y2="86" stroke="var(--vp-c-text-3)" stroke-width="1.5"/>
          <line x1="330" y1="74" x2="330" y2="86" stroke="var(--vp-c-text-3)" stroke-width="1.5"/>
          <text x="30" y="100" class="lbl" text-anchor="middle">-2</text>
          <text x="105" y="100" class="lbl" text-anchor="middle">-1</text>
          <text x="180" y="100" class="lbl" text-anchor="middle">0</text>
          <text x="255" y="100" class="lbl" text-anchor="middle">+1</text>
          <text x="330" y="100" class="lbl" text-anchor="middle">+2</text>
          <path d="M105,80 A112,55 0 0,1 330,80" fill="none" stroke="#e08a1e" stroke-width="2.5" stroke-dasharray="6 4"/>
          <text x="218" y="22" class="lbl" fill="#e08a1e" text-anchor="middle">path length = 3 units</text>
          <line x1="108" y1="116" x2="327" y2="116" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
          <text x="218" y="135" class="lbl" fill="#2f6fd0" text-anchor="middle">displacement = +3 units</text>
          <circle cx="105" cy="80" r="6" fill="#e08a1e" stroke="none"/>
          <circle cx="330" cy="80" r="6" fill="#2f6fd0" stroke="none"/>
          <text x="105" y="68" class="lbl" text-anchor="middle" fill="#e08a1e">start</text>
          <text x="330" y="68" class="lbl" text-anchor="middle" fill="#2f6fd0">finish</text>
        </g>
        <g v-else-if="type === 'velocity-speed'">
          <line x1="15" y1="100" x2="345" y2="100" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <g class="carA">
            <rect x="60" y="74" width="44" height="24" rx="4" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <text x="82" y="91" class="lbl" text-anchor="middle">A</text>
            <line x1="106" y1="86" x2="138" y2="86" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
            <text x="122" y="78" class="lbl" fill="#2f6fd0">v=+60</text>
          </g>
          <g class="carB">
            <rect x="240" y="106" width="44" height="24" rx="4" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <text x="262" y="123" class="lbl" text-anchor="middle">B</text>
            <line x1="238" y1="118" x2="206" y2="118" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
            <text x="222" y="138" class="lbl" fill="#2f6fd0">v=-60</text>
          </g>
          <text x="180" y="30" class="lblS" text-anchor="middle">same speed | opposite velocities</text>
        </g>
        <g v-else-if="type === 'acceleration'">
          <line x1="40" y1="20" x2="40" y2="130" stroke="var(--vp-c-text-2)" stroke-width="2"/>
          <line x1="40" y1="130" x2="330" y2="130" stroke="var(--vp-c-text-2)" stroke-width="2"/>
          <text x="36" y="18" class="lbl" text-anchor="end">v</text>
          <text x="334" y="134" class="lbl">t</text>
          <line x1="50" y1="120" x2="310" y2="30" stroke="#2f6fd0" stroke-width="3"/>
          <line x1="200" y1="72" x2="250" y2="72" stroke="#e2483d" stroke-width="2" stroke-dasharray="4 3"/>
          <line x1="250" y1="72" x2="250" y2="55" stroke="#e2483d" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="225" y="86" class="lbl" fill="#e2483d" text-anchor="middle">Dt</text>
          <text x="263" y="66" class="lbl" fill="#e2483d">Dv</text>
          <text x="255" y="104" class="lbl" fill="#e2483d">slope=a</text>
          <g class="accObj"><circle cx="50" cy="120" r="7" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/></g>
        </g>
        <g v-else-if="type === 'equations-of-motion'">
          <line x1="40" y1="15" x2="40" y2="120" stroke="var(--vp-c-text-2)" stroke-width="2"/>
          <line x1="40" y1="120" x2="320" y2="120" stroke="var(--vp-c-text-2)" stroke-width="2"/>
          <text x="36" y="14" class="lbl" text-anchor="end">v</text><text x="324" y="124" class="lbl">t</text>
          <polygon points="50,100 260,40 260,120 50,120" fill="#2f6fd0" fill-opacity="0.18"/>
          <line x1="50" y1="100" x2="260" y2="40" stroke="#2f6fd0" stroke-width="3"/>
          <line x1="30" y1="100" x2="50" y2="100" stroke="var(--vp-c-text-3)" stroke-width="1.5" stroke-dasharray="3 3"/>
          <text x="26" y="104" class="lbl" text-anchor="end">u</text>
          <line x1="30" y1="40" x2="260" y2="40" stroke="var(--vp-c-text-3)" stroke-width="1.5" stroke-dasharray="3 3"/>
          <text x="26" y="44" class="lbl" text-anchor="end">v</text>
          <text x="160" y="96" class="lbl" fill="#2f6fd0" text-anchor="middle">area = displacement</text>
          <text x="270" y="56" class="lbl" fill="#e2483d">slope=a</text>
          <text x="30" y="140" class="lblS">v=u+at</text>
          <text x="130" y="140" class="lblS">s=ut+1/2at2</text>
          <text x="240" y="140" class="lblS">v2=u2+2as</text>
        </g>
        <g v-else-if="type === 'relative-velocity'">
          <line x1="15" y1="90" x2="345" y2="90" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <g class="trainA">
            <rect x="50" y="62" width="60" height="28" rx="4" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <text x="80" y="81" class="lbl" text-anchor="middle">A</text>
            <line x1="112" y1="76" x2="148" y2="76" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
            <text x="130" y="68" class="lbl" fill="#2f6fd0">80</text>
          </g>
          <g class="trainB">
            <rect x="200" y="62" width="60" height="28" rx="4" fill="#6b7d92" stroke="#3a4757" stroke-width="1.5"/>
            <text x="230" y="81" class="lbl" text-anchor="middle">B</text>
            <line x1="262" y1="76" x2="310" y2="76" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
            <text x="286" y="68" class="lbl" fill="#2f6fd0">120</text>
          </g>
          <text x="180" y="30" class="lblS" text-anchor="middle">v_BA = 120-80 = 40 km/h</text>
          <text x="180" y="46" class="lblS" text-anchor="middle">(B seen from A: slowly pulling ahead)</text>
        </g>


        <g v-else-if="type === 'scalars-and-vectors'">
          <rect x="20" y="30" width="140" height="90" rx="8" fill="var(--vp-c-bg-soft)" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <text x="90" y="50" class="lblS" text-anchor="middle">SCALAR</text>
          <text x="90" y="80" class="lblBig" text-anchor="middle">37 C</text>
          <text x="90" y="106" class="lblS" text-anchor="middle">magnitude only</text>
          <rect x="200" y="30" width="140" height="90" rx="8" fill="var(--vp-c-bg-soft)" stroke="#2f6fd0" stroke-width="1.5"/>
          <text x="270" y="50" class="lblS" text-anchor="middle" fill="#2f6fd0">VECTOR</text>
          <line x1="220" y1="80" x2="308" y2="80" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
          <text x="264" y="73" class="lbl" text-anchor="middle" fill="#2f6fd0">40 m/s</text>
          <text x="270" y="106" class="lblS" text-anchor="middle">magnitude + direction</text>
          <text x="180" y="140" class="lblS" text-anchor="middle">temperature: scalar | velocity: vector</text>
        </g>
        <g v-else-if="type === 'vector-addition'">
          <g class="vecA">
            <line x1="60" y1="110" x2="170" y2="70" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
            <text x="105" y="82" class="lbl" fill="#2f6fd0">A</text>
          </g>
          <g class="vecB">
            <line x1="170" y1="70" x2="270" y2="100" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
            <text x="228" y="80" class="lbl" fill="#e2483d">B</text>
          </g>
          <line x1="60" y1="110" x2="270" y2="100" stroke="#1f9d6b" stroke-width="3" stroke-dasharray="6 3" marker-end="url(#ahG)"/>
          <text x="165" y="126" class="lbl" fill="#1f9d6b" text-anchor="middle">R = A + B</text>
          <text x="180" y="20" class="lblS" text-anchor="middle">tip-to-tail (triangle) rule</text>
        </g>
        <g v-else-if="type === 'vector-components'">
          <line x1="80" y1="120" x2="310" y2="120" stroke="var(--vp-c-text-2)" stroke-width="1.5"/>
          <line x1="80" y1="120" x2="80" y2="20" stroke="var(--vp-c-text-2)" stroke-width="1.5"/>
          <text x="314" y="124" class="lbl">x</text>
          <text x="78" y="16" class="lbl" text-anchor="end">y</text>
          <g class="vecComp">
            <line x1="80" y1="120" x2="255" y2="45" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
            <text x="175" y="70" class="lbl" fill="#2f6fd0">A</text>
          </g>
          <line x1="80" y1="120" x2="255" y2="120" stroke="#e2483d" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#ahR)"/>
          <text x="168" y="136" class="lbl" fill="#e2483d" text-anchor="middle">Ax = A cos</text>
          <line x1="255" y1="120" x2="255" y2="45" stroke="#e08a1e" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#ahO)"/>
          <text x="290" y="82" class="lbl" fill="#e08a1e">Ay = A sin</text>
          <path d="M112,120 A32,32 0 0,0 91,98" fill="none" stroke="var(--vp-c-text-3)" stroke-width="1.5"/>
          <text x="120" y="108" class="lbl">q</text>
        </g>
        <g v-else-if="type === 'unit-vectors'">
          <circle cx="140" cy="100" r="4" fill="var(--vp-c-text-2)"/>
          <line x1="140" y1="100" x2="260" y2="100" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
          <text x="264" y="104" class="lbl" fill="#e2483d">i (x)</text>
          <line x1="140" y1="100" x2="140" y2="20" stroke="#1f9d6b" stroke-width="3"/>
          <polygon points="140,20 133,36 147,36" fill="#1f9d6b"/>
          <text x="150" y="16" class="lbl" fill="#1f9d6b">j (y)</text>
          <line x1="140" y1="100" x2="80" y2="135" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
          <text x="58" y="140" class="lbl" fill="#2f6fd0">k (z)</text>
          <text x="260" y="60" class="lblS">|i|=|j|=|k|=1</text>
          <text x="180" y="140" class="lblS" text-anchor="middle">each has magnitude = 1</text>
        </g>
        <g v-else-if="type === 'relative-velocity-2d'">
          <line x1="30" y1="130" x2="330" y2="130" stroke="var(--vp-c-divider)" stroke-width="1"/>
          <line x1="30" y1="130" x2="30" y2="20" stroke="var(--vp-c-divider)" stroke-width="1"/>
          <g class="rv2dA">
            <circle cx="100" cy="90" r="12" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <text x="100" y="94" class="lbl" text-anchor="middle">A</text>
            <line x1="100" y1="90" x2="150" y2="50" stroke="#2f6fd0" stroke-width="2.5" marker-end="url(#ahB)"/>
            <text x="138" y="60" class="lbl" fill="#2f6fd0">va</text>
          </g>
          <g class="rv2dB">
            <circle cx="240" cy="90" r="12" fill="#6b7d92" stroke="#3a4757" stroke-width="1.5"/>
            <text x="240" y="94" class="lbl" text-anchor="middle">B</text>
            <line x1="240" y1="90" x2="290" y2="70" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
            <text x="292" y="68" class="lbl" fill="#e2483d">vb</text>
          </g>
          <text x="180" y="25" class="lblS" text-anchor="middle">v_AB = va - vb (vector difference)</text>
          <text x="180" y="140" class="lblS" text-anchor="middle">velocity of A as seen from B</text>
        </g>
        <g v-else-if="type === 'projectile-motion'">
          <line x1="20" y1="130" x2="340" y2="130" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <path d="M30,130 Q180,5 330,130" fill="none" stroke="var(--vp-c-text-3)" stroke-width="1.5" stroke-dasharray="6 4"/>
          <g class="projBall">
            <circle r="10" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="10" y1="0" x2="36" y2="0" stroke="#2f6fd0" stroke-width="2.5" marker-end="url(#ahB)"/>
            <line x1="0" y1="10" x2="0" y2="32" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
          </g>
          <text x="180" y="148" class="lblS" text-anchor="middle">vx = const | vy changes due to gravity</text>
        </g>
        <g v-else-if="type === 'uniform-circular-motion'">
          <circle cx="180" cy="73" r="55" fill="none" stroke="var(--vp-c-divider)" stroke-width="2" stroke-dasharray="5 5"/>
          <circle cx="180" cy="73" r="4" fill="var(--vp-c-text-2)"/>
          <g class="ucmBall">
            <circle cx="180" cy="18" r="11" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="191" y1="18" x2="228" y2="18" stroke="#2f6fd0" stroke-width="2.5" marker-end="url(#ahB)"/>
            <line x1="180" y1="29" x2="180" y2="56" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
          </g>
          <text x="22" y="140" class="lbl" fill="#2f6fd0">v (tangential)</text>
          <text x="170" y="140" class="lbl" fill="#e2483d">ac (centripetal)</text>
          <text x="180" y="10" class="lblS" text-anchor="middle">|v| constant, direction changes</text>
        </g>


        <g v-else-if="type === 'inertia-first-law'">
          <line x1="15" y1="120" x2="345" y2="120" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <text x="180" y="30" class="lblS" text-anchor="middle">No net force → constant velocity</text>
          <g class="il1Ball">
            <circle cx="40" cy="106" r="13" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="54" y1="106" x2="90" y2="106" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
            <text x="72" y="97" class="lbl" fill="#2f6fd0">v</text>
          </g>
        </g>
        <g v-else-if="type === 'momentum-second-law'">
          <line x1="15" y1="120" x2="345" y2="120" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <g class="ms2Box">
            <line x1="8" y1="104" x2="40" y2="104" stroke="#e2483d" stroke-width="3.5" marker-end="url(#ahR)"/>
            <text x="16" y="96" class="lbl" fill="#e2483d">F</text>
            <rect x="42" y="90" width="40" height="30" rx="3" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          </g>
        </g>
        <g v-else-if="type === 'impulse'">
          <line x1="15" y1="120" x2="345" y2="120" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <rect x="318" y="64" width="10" height="56" fill="var(--vp-c-text-3)"/>
          <path d="M300,68 l10,8 l-10,8 l10,8 l-10,8 l10,8" fill="none" stroke="#e08a1e" stroke-width="2.5"/>
          <g class="impBall"><circle cx="60" cy="92" r="13" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/></g>
          <text x="150" y="40" class="lbl">small F over long Dt = same Dp</text>
        </g>
        <g v-else-if="type === 'third-law'">
          <line x1="15" y1="120" x2="345" y2="120" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <g class="boxA">
            <rect x="118" y="86" width="44" height="34" rx="3" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <text x="135" y="108" class="lbl">A</text>
            <line x1="116" y1="103" x2="78" y2="103" stroke="#e2483d" stroke-width="3.5" marker-end="url(#ahR)"/>
          </g>
          <g class="boxB">
            <rect x="162" y="86" width="44" height="34" rx="3" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <text x="179" y="108" class="lbl">B</text>
            <line x1="208" y1="103" x2="246" y2="103" stroke="#e2483d" stroke-width="3.5" marker-end="url(#ahR)"/>
          </g>
          <text x="40" y="98" class="lbl" fill="#e2483d">F(B on A)</text>
          <text x="250" y="98" class="lbl" fill="#e2483d">F(A on B)</text>
        </g>
        <g v-else-if="type === 'conservation-of-momentum'">
          <line x1="15" y1="120" x2="345" y2="120" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <g class="heavy">
            <rect x="135" y="82" width="46" height="38" rx="3" fill="#6b7d92" stroke="#3a4757" stroke-width="1.5"/>
            <line x1="133" y1="101" x2="105" y2="101" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
          </g>
          <g class="light">
            <rect x="181" y="92" width="28" height="28" rx="3" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="211" y1="106" x2="262" y2="106" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
          </g>
          <text x="120" y="60" class="lbl">equal and opposite momentum</text>
        </g>
        <g v-else-if="type === 'equilibrium'">
          <line x1="100" y1="22" x2="260" y2="22" stroke="var(--vp-c-text-3)" stroke-width="3"/>
          <g class="swing">
            <line x1="120" y1="22" x2="180" y2="72" stroke="#4b5a6b" stroke-width="2"/>
            <line x1="240" y1="22" x2="180" y2="72" stroke="#4b5a6b" stroke-width="2"/>
            <line x1="180" y1="72" x2="180" y2="92" stroke="#4b5a6b" stroke-width="2"/>
            <rect x="166" y="92" width="28" height="26" rx="3" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="180" y1="72" x2="146" y2="44" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
            <line x1="180" y1="72" x2="214" y2="44" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
            <line x1="180" y1="118" x2="180" y2="140" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
            <text x="120" y="44" class="lbl" fill="#e2483d">T1</text>
            <text x="222" y="44" class="lbl" fill="#e2483d">T2</text>
            <text x="186" y="136" class="lbl" fill="#e2483d">W</text>
          </g>
        </g>
        <g v-else-if="type === 'friction'">
          <line x1="15" y1="118" x2="345" y2="118" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <g stroke="var(--vp-c-text-3)" stroke-width="1.5">
            <line x1="30" y1="118" x2="22" y2="128"/><line x1="55" y1="118" x2="47" y2="128"/>
            <line x1="80" y1="118" x2="72" y2="128"/><line x1="105" y1="118" x2="97" y2="128"/>
            <line x1="130" y1="118" x2="122" y2="128"/><line x1="155" y1="118" x2="147" y2="128"/>
            <line x1="180" y1="118" x2="172" y2="128"/><line x1="205" y1="118" x2="197" y2="128"/>
            <line x1="230" y1="118" x2="222" y2="128"/><line x1="255" y1="118" x2="247" y2="128"/>
            <line x1="280" y1="118" x2="272" y2="128"/><line x1="305" y1="118" x2="297" y2="128"/>
            <line x1="330" y1="118" x2="322" y2="128"/>
          </g>
          <rect x="146" y="84" width="50" height="34" rx="3" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          <line class="applied" x1="198" y1="101" x2="248" y2="101" stroke="#2f6fd0" stroke-width="3.5" marker-end="url(#ahB)"/>
          <text x="214" y="93" class="lbl" fill="#2f6fd0">push</text>
          <line class="fric" x1="144" y1="113" x2="100" y2="113" stroke="#e08a1e" stroke-width="3.5" marker-end="url(#ahO)"/>
          <text x="96" y="106" class="lbl" fill="#e08a1e">friction f</text>
        </g>
        <g v-else-if="type === 'circular-motion'">
          <circle cx="180" cy="75" r="52" fill="none" stroke="var(--vp-c-divider)" stroke-width="2" stroke-dasharray="5 6"/>
          <circle cx="180" cy="75" r="3" fill="var(--vp-c-text-2)"/>
          <g class="orbit">
            <circle cx="180" cy="23" r="11" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="180" y1="23" x2="180" y2="58" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
            <line x1="191" y1="23" x2="232" y2="23" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
          </g>
          <text x="14" y="142" class="lbl" fill="#2f6fd0">velocity</text>
          <text x="100" y="142" class="lbl" fill="#e2483d">centripetal force</text>
        </g>


        <g v-else-if="type === 'work'">
          <line x1="20" y1="120" x2="340" y2="120" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <g class="workBox">
            <rect x="100" y="86" width="44" height="34" rx="3" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          </g>
          <line class="workForce" x1="50" y1="100" x2="98" y2="90" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
          <text x="46" y="88" class="lbl" fill="#2f6fd0">F</text>
          <path d="M75,100 A24,24 0 0,1 83,82" fill="none" stroke="#e08a1e" stroke-width="1.5"/>
          <text x="76" y="78" class="lbl" fill="#e08a1e">q</text>
          <line x1="102" y1="135" x2="220" y2="135" stroke="#e2483d" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#ahR)"/>
          <text x="162" y="148" class="lbl" fill="#e2483d" text-anchor="middle">d (displacement)</text>
          <text x="290" y="60" class="lblM" text-anchor="middle" fill="#1f9d6b">W = Fd cosq</text>
          <text x="290" y="80" class="lblS" text-anchor="middle">parallel component only</text>
        </g>
        <g v-else-if="type === 'kinetic-energy'">
          <line x1="20" y1="112" x2="340" y2="112" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <g class="keSlow">
            <rect x="40" y="80" width="44" height="30" rx="4" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <text x="62" y="100" class="lbl" text-anchor="middle">m</text>
            <line x1="86" y1="95" x2="110" y2="95" stroke="#2f6fd0" stroke-width="2.5" marker-end="url(#ahB)"/>
            <text x="98" y="86" class="lbl" fill="#2f6fd0">v</text>
            <text x="62" y="70" class="lblS" text-anchor="middle" fill="#1f9d6b">KE=1/2 mv2</text>
          </g>
          <g class="keFast">
            <rect x="190" y="80" width="44" height="30" rx="4" fill="#6b7d92" stroke="#3a4757" stroke-width="1.5"/>
            <text x="212" y="100" class="lbl" text-anchor="middle">m</text>
            <line x1="236" y1="95" x2="283" y2="95" stroke="#2f6fd0" stroke-width="2.5" marker-end="url(#ahB)"/>
            <text x="260" y="86" class="lbl" fill="#2f6fd0">2v</text>
            <text x="212" y="70" class="lblS" text-anchor="middle" fill="#e2483d">KE=4x(1/2 mv2)</text>
          </g>
          <text x="180" y="140" class="lblS" text-anchor="middle">double speed: 4x kinetic energy</text>
        </g>
        <g v-else-if="type === 'potential-energy'">
          <line x1="20" y1="130" x2="340" y2="130" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <line x1="180" y1="130" x2="180" y2="50" stroke="var(--vp-c-text-3)" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="170" y1="130" x2="170" y2="50" stroke="var(--vp-c-text-2)" stroke-width="1.5"/>
          <line x1="164" y1="130" x2="176" y2="130" stroke="var(--vp-c-text-2)" stroke-width="1.5"/>
          <line x1="164" y1="50" x2="176" y2="50" stroke="var(--vp-c-text-2)" stroke-width="1.5"/>
          <text x="156" y="93" class="lbl" text-anchor="end">h</text>
          <g class="peBall">
            <circle cx="220" cy="50" r="13" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <text x="220" y="54" class="lbl" text-anchor="middle">m</text>
          </g>
          <line x1="220" y1="63" x2="220" y2="92" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
          <text x="232" y="84" class="lbl" fill="#e2483d">mg</text>
          <text x="290" y="80" class="lblM" text-anchor="middle" fill="#1f9d6b">PE = mgh</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">PE converts to KE as ball falls</text>
        </g>
        <g v-else-if="type === 'conservation-of-energy'">
          <line x1="30" y1="130" x2="200" y2="30" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <line x1="30" y1="130" x2="330" y2="130" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <rect x="238" y="60" width="22" height="68" rx="2" fill="#e08a1e" opacity="0.85"/>
          <text x="249" y="44" class="lblS" text-anchor="middle">Top</text>
          <rect x="292" y="52" width="22" height="68" rx="2" fill="#2f6fd0" opacity="0.85"/>
          <text x="303" y="44" class="lblS" text-anchor="middle">Bottom</text>
          <rect x="220" y="128" width="10" height="10" fill="#e08a1e"/>
          <text x="234" y="138" class="lblS" fill="#e08a1e">PE</text>
          <rect x="258" y="128" width="10" height="10" fill="#2f6fd0"/>
          <text x="272" y="138" class="lblS" fill="#2f6fd0">KE</text>
          <g class="ceBall"><circle r="11" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/></g>
          <text x="100" y="148" class="lblS" text-anchor="middle">PE + KE = constant</text>
        </g>
        <g v-else-if="type === 'power'">
          <line x1="20" y1="120" x2="340" y2="120" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <g class="pwrFast">
            <circle cx="60" cy="98" r="11" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <text x="60" y="102" class="lbl" text-anchor="middle">A</text>
            <line x1="72" y1="98" x2="108" y2="98" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
          </g>
          <g class="pwrSlow">
            <circle cx="60" cy="98" r="11" fill="#6b7d92" stroke="#3a4757" stroke-width="1.5"/>
            <text x="60" y="102" class="lbl" text-anchor="middle">B</text>
            <line x1="72" y1="98" x2="96" y2="98" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
          </g>
          <text x="180" y="30" class="lblS" text-anchor="middle">Same work W, different time t</text>
          <text x="180" y="52" class="lblM" text-anchor="middle" fill="#1f9d6b">P = W / t</text>
          <text x="180" y="70" class="lblS" text-anchor="middle">A faster = more power</text>
          <text x="180" y="140" class="lblS" text-anchor="middle">P = Fv cos q (instantaneous)</text>
        </g>
        <g v-else-if="type === 'collisions'">
          <text x="90" y="20" class="lblS" text-anchor="middle">Before</text>
          <text x="270" y="20" class="lblS" text-anchor="middle">After</text>
          <line x1="180" y1="15" x2="180" y2="140" stroke="var(--vp-c-divider)" stroke-width="1.5" stroke-dasharray="4 4"/>
          <g class="colB1">
            <circle cx="60" cy="75" r="13" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="74" y1="75" x2="104" y2="75" stroke="#2f6fd0" stroke-width="2.5" marker-end="url(#ahB)"/>
            <text x="60" y="100" class="lbl" text-anchor="middle">m1</text>
          </g>
          <g class="colB2">
            <circle cx="150" cy="75" r="10" fill="#6b7d92" stroke="#3a4757" stroke-width="1.5"/>
            <line x1="136" y1="75" x2="110" y2="75" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
            <text x="150" y="100" class="lbl" text-anchor="middle">m2</text>
          </g>
          <g class="colA1">
            <circle cx="210" cy="75" r="13" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          </g>
          <g class="colA2">
            <circle cx="290" cy="75" r="10" fill="#6b7d92" stroke="#3a4757" stroke-width="1.5"/>
            <line x1="300" y1="75" x2="328" y2="75" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
          </g>
          <text x="180" y="125" class="lblS" text-anchor="middle">p_total always conserved</text>
          <text x="180" y="140" class="lblS" text-anchor="middle">elastic: KE also conserved</text>
        </g>


        <g v-else-if="type === 'centre-of-mass'">
          <line x1="30" y1="90" x2="330" y2="90" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <circle cx="80" cy="90" r="22" fill="#4b5a6b" stroke="#2a3442" stroke-width="1.5"/>
          <text x="80" y="95" class="lbl" text-anchor="middle" fill="white">3m</text>
          <circle cx="290" cy="90" r="12" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          <text x="290" y="94" class="lbl" text-anchor="middle">m</text>
          <g class="cmMarker">
            <line x1="130" y1="70" x2="130" y2="112" stroke="#e2483d" stroke-width="2.5"/>
            <text x="130" y="62" class="lbl" text-anchor="middle" fill="#e2483d">CM</text>
            <polygon points="130,112 122,124 138,124" fill="#e2483d"/>
          </g>
          <text x="105" y="130" class="lblS" text-anchor="middle">d/4</text>
          <text x="210" y="130" class="lblS" text-anchor="middle">3d/4</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">CM is closer to the heavier mass</text>
        </g>
        <g v-else-if="type === 'torque'">
          <line x1="60" y1="90" x2="300" y2="90" stroke="var(--vp-c-text-2)" stroke-width="3"/>
          <polygon points="90,90 78,115 102,115" fill="var(--vp-c-text-3)"/>
          <line x1="70" y1="116" x2="110" y2="116" stroke="var(--vp-c-text-3)" stroke-width="2"/>
          <g class="torqueArrow">
            <line x1="270" y1="90" x2="270" y2="40" stroke="#e2483d" stroke-width="3.5" marker-end="url(#ahR)"/>
            <text x="278" y="70" class="lbl" fill="#e2483d">F</text>
          </g>
          <line x1="90" y1="130" x2="270" y2="130" stroke="#2f6fd0" stroke-width="2" stroke-dasharray="4 3"/>
          <line x1="90" y1="124" x2="90" y2="136" stroke="#2f6fd0" stroke-width="1.5"/>
          <line x1="270" y1="124" x2="270" y2="136" stroke="#2f6fd0" stroke-width="1.5"/>
          <text x="180" y="144" class="lbl" fill="#2f6fd0" text-anchor="middle">moment arm r</text>
          <text x="180" y="28" class="lblM" text-anchor="middle" fill="#1f9d6b">t = r x F</text>
          <text x="180" y="48" class="lblS" text-anchor="middle">larger r: larger torque</text>
        </g>
        <g v-else-if="type === 'angular-momentum'">
          <ellipse cx="180" cy="80" rx="70" ry="20" fill="var(--vp-c-bg-soft)" stroke="#4b5a6b" stroke-width="2"/>
          <ellipse cx="180" cy="65" rx="70" ry="20" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          <g class="amArrow">
            <line x1="180" y1="55" x2="180" y2="15" stroke="#e2483d" stroke-width="3.5" marker-end="url(#ahR)"/>
            <text x="192" y="30" class="lbl" fill="#e2483d">L = Iw</text>
          </g>
          <text x="180" y="110" class="lblS" text-anchor="middle">w (angular velocity)</text>
          <text x="18" y="140" class="lblS">arms out: I up, w down</text>
          <text x="195" y="140" class="lblS">arms in: I down, w up</text>
        </g>
        <g v-else-if="type === 'moment-of-inertia'">
          <ellipse cx="110" cy="55" rx="48" ry="14" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          <rect x="62" y="55" width="96" height="46" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          <ellipse cx="110" cy="101" rx="48" ry="14" fill="#6b7d92" stroke="#4b5a6b" stroke-width="1.5"/>
          <text x="110" y="82" class="lbl" text-anchor="middle">SOLID</text>
          <text x="110" y="122" class="lblS" text-anchor="middle" fill="#1f9d6b">I = 1/2 MR2</text>
          <text x="110" y="138" class="lblS" text-anchor="middle">easier to spin</text>
          <ellipse cx="260" cy="55" rx="48" ry="14" fill="none" stroke="#4b5a6b" stroke-width="1.5"/>
          <line x1="212" y1="55" x2="212" y2="101" stroke="#4b5a6b" stroke-width="1.5"/>
          <line x1="308" y1="55" x2="308" y2="101" stroke="#4b5a6b" stroke-width="1.5"/>
          <ellipse cx="260" cy="101" rx="48" ry="14" fill="none" stroke="#4b5a6b" stroke-width="1.5"/>
          <text x="260" y="82" class="lbl" text-anchor="middle">HOLLOW</text>
          <text x="260" y="122" class="lblS" text-anchor="middle" fill="#e2483d">I = MR2</text>
          <text x="260" y="138" class="lblS" text-anchor="middle">harder to spin</text>
        </g>
        <g v-else-if="type === 'rolling-motion'">
          <line x1="20" y1="128" x2="340" y2="128" stroke="var(--vp-c-divider)" stroke-width="2"/>
          <g class="rollingWheel">
            <circle cx="0" cy="0" r="36" fill="#8aa0bf" fill-opacity="0.4" stroke="#4b5a6b" stroke-width="2"/>
            <line x1="0" y1="0" x2="0" y2="-36" stroke="#4b5a6b" stroke-width="2"/>
            <line x1="36" y1="0" x2="70" y2="0" stroke="#2f6fd0" stroke-width="2.5" marker-end="url(#ahB)"/>
            <text x="54" y="-8" class="lbl" fill="#2f6fd0">v</text>
            <line x1="0" y1="-36" x2="68" y2="-36" stroke="#1f9d6b" stroke-width="2.5"/>
            <polygon points="68,-36 54,-42 54,-30" fill="#1f9d6b"/>
            <text x="38" y="-44" class="lbl" fill="#1f9d6b">2v</text>
            <circle cx="0" cy="36" r="5" fill="#e2483d"/>
            <text x="12" y="50" class="lbl" fill="#e2483d">v=0</text>
          </g>
          <text x="180" y="148" class="lblS" text-anchor="middle">bottom: v=0, top: 2v, v=Rw</text>
        </g>


        <g v-else-if="type === 'universal-law'">
          <g class="gravM1">
            <circle cx="95" cy="75" r="26" fill="#4b5a6b" stroke="#2a3442" stroke-width="1.5"/>
            <text x="95" y="80" class="lbl" text-anchor="middle" fill="white">M1</text>
          </g>
          <g class="gravM2">
            <circle cx="265" cy="75" r="18" fill="#6b7d92" stroke="#4b5a6b" stroke-width="1.5"/>
            <text x="265" y="80" class="lbl" text-anchor="middle" fill="white">M2</text>
          </g>
          <line x1="122" y1="75" x2="155" y2="75" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
          <line x1="248" y1="75" x2="215" y2="75" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
          <text x="180" y="65" class="lbl" fill="#e2483d" text-anchor="middle">F (attraction)</text>
          <line x1="95" y1="110" x2="265" y2="110" stroke="var(--vp-c-text-3)" stroke-width="1"/>
          <text x="180" y="124" class="lblS" text-anchor="middle">r</text>
          <text x="180" y="30" class="lblM" text-anchor="middle" fill="#1f9d6b">F = GM1M2/r2</text>
          <text x="180" y="145" class="lblS" text-anchor="middle">double r: force drops to 1/4</text>
        </g>
        <g v-else-if="type === 'gravitational-field'">
          <circle cx="180" cy="75" r="28" fill="#3a7bd5" stroke="#2a5aa5" stroke-width="1.5"/>
          <text x="180" y="79" class="lbl" text-anchor="middle" fill="white">Earth</text>
          <g class="gField" stroke="#e2483d" stroke-width="1.5">
            <line x1="180" y1="47" x2="180" y2="22"/><polygon points="180,22 174,34 186,34" fill="#e2483d"/>
            <line x1="180" y1="103" x2="180" y2="128"/><polygon points="180,128 174,116 186,116" fill="#e2483d"/>
            <line x1="152" y1="75" x2="122" y2="75"/><polygon points="122,75 134,69 134,81" fill="#e2483d"/>
            <line x1="208" y1="75" x2="238" y2="75"/><polygon points="238,75 226,69 226,81" fill="#e2483d"/>
            <line x1="160" y1="55" x2="140" y2="35"/><polygon points="140,35 148,48 158,42" fill="#e2483d"/>
            <line x1="200" y1="55" x2="220" y2="35"/><polygon points="220,35 212,48 202,42" fill="#e2483d"/>
            <line x1="160" y1="95" x2="140" y2="115"/><polygon points="140,115 150,102 160,108" fill="#e2483d"/>
            <line x1="200" y1="95" x2="220" y2="115"/><polygon points="220,115 210,102 200,108" fill="#e2483d"/>
          </g>
          <text x="180" y="148" class="lblS" text-anchor="middle">field lines inward; g = GM/r2</text>
        </g>
        <g v-else-if="type === 'escape-velocity'">
          <circle cx="180" cy="115" r="28" fill="#3a7bd5" stroke="#2a5aa5" stroke-width="1.5"/>
          <text x="180" y="119" class="lbl" text-anchor="middle" fill="white">Earth</text>
          <g class="escRocket">
            <polygon points="180,82 173,97 187,97" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="180" y1="82" x2="180" y2="20" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
          </g>
          <text x="196" y="50" class="lbl" fill="#e2483d">ve = sqrt(2GM/R)</text>
          <text x="40" y="30" class="lblS">1/2 mv2 = GMm/R</text>
          <text x="40" y="45" class="lblS">total energy = 0</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">Earth: ve ~11.2 km/s</text>
        </g>
        <g v-else-if="type === 'satellites'">
          <circle cx="180" cy="75" r="30" fill="#3a7bd5" stroke="#2a5aa5" stroke-width="1.5"/>
          <text x="180" y="79" class="lbl" text-anchor="middle" fill="white">Earth</text>
          <circle cx="180" cy="75" r="60" fill="none" stroke="var(--vp-c-divider)" stroke-width="1.5" stroke-dasharray="5 5"/>
          <g class="satOrbit">
            <rect x="233" y="60" width="14" height="10" rx="2" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1"/>
            <rect x="220" y="63" width="11" height="4" fill="#e08a1e"/>
            <rect x="249" y="63" width="11" height="4" fill="#e08a1e"/>
            <line x1="240" y1="60" x2="240" y2="32" stroke="#2f6fd0" stroke-width="2.5" marker-end="url(#ahB)"/>
            <line x1="240" y1="65" x2="218" y2="75" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
          </g>
          <text x="180" y="148" class="lblS" text-anchor="middle">v = sqrt(GM/r) | T2 proportional to r3</text>
        </g>
        <g v-else-if="type === 'keplers-laws'">
          <ellipse cx="170" cy="80" rx="130" ry="60" fill="none" stroke="var(--vp-c-divider)" stroke-width="1.5" stroke-dasharray="5 4"/>
          <circle cx="90" cy="80" r="12" fill="#e08a1e" stroke="#b56e10" stroke-width="1.5"/>
          <text x="90" y="84" class="lbl" text-anchor="middle" fill="white">Sun</text>
          <g class="kepClose">
            <circle cx="96" cy="28" r="8" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="90" y1="80" x2="96" y2="28" stroke="var(--vp-c-text-3)" stroke-width="1"/>
            <line x1="96" y1="28" x2="142" y2="22" stroke="#2f6fd0" stroke-width="2.5" marker-end="url(#ahB)"/>
            <text x="128" y="14" class="lbl" fill="#2f6fd0">fast</text>
          </g>
          <g class="kepFar">
            <circle cx="295" cy="80" r="8" fill="#6b7d92" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="90" y1="80" x2="295" y2="80" stroke="var(--vp-c-text-3)" stroke-width="1"/>
            <line x1="295" y1="80" x2="295" y2="56" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
            <text x="303" y="68" class="lbl" fill="#e2483d">slow</text>
          </g>
          <text x="180" y="148" class="lblS" text-anchor="middle">equal areas in equal times | T2 = a3</text>
        </g>



        <g v-else-if="type === 'stress-and-strain'">
          <rect x="100" y="60" width="160" height="60" rx="4" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          <g class="ssStretch">
            <line x1="44" y1="90" x2="96" y2="90" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
            <line x1="316" y1="90" x2="268" y2="90" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
          </g>
          <text x="180" y="94" class="lbl" text-anchor="middle">Material</text>
          <text x="64" y="110" class="lbl" fill="#e2483d" text-anchor="middle">F</text>
          <text x="296" y="110" class="lbl" fill="#e2483d" text-anchor="middle">F</text>
          <text x="180" y="30" class="lblM" text-anchor="middle" fill="#1f9d6b">σ = F/A  ε = ΔL/L</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">Tensile: force normal to surface</text>
        </g>
        <g v-else-if="type === 'hookes-law'">
          <line x1="40" y1="80" x2="80" y2="80" stroke="#4b5a6b" stroke-width="2.5"/>
          <g class="hookSpring">
            <path d="M80,80 L88,80 L92,60 L100,100 L108,60 L116,100 L124,60 L132,100 L140,60 L148,80 L160,80" fill="none" stroke="#4b5a6b" stroke-width="2"/>
            <circle cx="170" cy="80" r="14" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="184" y1="80" x2="220" y2="80" stroke="#2f6fd0" stroke-width="2.5" marker-end="url(#ahB)"/>
            <text x="200" y="72" class="lbl" fill="#2f6fd0">x</text>
          </g>
          <text x="260" y="60" class="lblM" text-anchor="middle" fill="#1f9d6b">F = kx</text>
          <text x="260" y="80" class="lblS" text-anchor="middle">linear in elastic region</text>
          <text x="260" y="96" class="lblS" text-anchor="middle">U = ½kx²</text>
          <text x="180" y="140" class="lblS" text-anchor="middle">beyond elastic limit: permanent set</text>
        </g>
        <g v-else-if="type === 'elastic-moduli'">
          <rect x="50" y="50" width="70" height="80" rx="3" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          <line x1="85" y1="50" x2="85" y2="15" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
          <text x="50" y="148" class="lblS" text-anchor="middle">Y = FL/(AΔL)</text>
          <rect x="150" y="55" width="70" height="70" rx="3" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5" class="shearBlock"/>
          <text x="185" y="148" class="lblS" text-anchor="middle">G = shear</text>
          <circle cx="290" cy="90" r="36" fill="none" stroke="#4b5a6b" stroke-width="2" class="bulkCircle"/>
          <circle cx="290" cy="90" r="24" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          <text x="290" y="148" class="lblS" text-anchor="middle">B = −p/(ΔV/V)</text>
          <text x="180" y="28" class="lblS" text-anchor="middle" fill="#1f9d6b">Young  |  Shear  |  Bulk</text>
        </g>
        <g v-else-if="type === 'stress-strain-curve'">
          <polyline points="30,130 90,70 130,55 155,45 175,38 220,60 260,128" fill="none" stroke="#2f6fd0" stroke-width="2.5"/>
          <circle cx="90" cy="70" r="4" fill="#1f9d6b"/>
          <text x="90" y="62" class="lblS" fill="#1f9d6b">P</text>
          <circle cx="130" cy="55" r="4" fill="#e08a1e"/>
          <text x="130" y="47" class="lblS" fill="#e08a1e">E</text>
          <circle cx="155" cy="45" r="4" fill="#e08a1e"/>
          <text x="160" y="40" class="lblS" fill="#e08a1e">Y</text>
          <circle cx="220" cy="60" r="4" fill="#e2483d"/>
          <text x="225" y="55" class="lblS" fill="#e2483d">UTS</text>
          <circle cx="260" cy="128" r="4" fill="#e2483d"/>
          <text x="264" y="124" class="lblS" fill="#e2483d">B</text>
          <line x1="30" y1="130" x2="300" y2="130" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <line x1="30" y1="130" x2="30" y2="25" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <text x="165" y="148" class="lblS" text-anchor="middle">Strain →</text>
          <text x="18" y="80" class="lblS" text-anchor="middle" style="writing-mode:vertical-rl">Stress</text>
        </g>
        <g v-else-if="type === 'applications-elasticity'">
          <rect x="60" y="50" width="240" height="28" rx="2" fill="#4b5a6b" stroke="#2a3442" stroke-width="1.5"/>
          <rect x="60" y="88" width="240" height="28" rx="2" fill="#4b5a6b" stroke="#2a3442" stroke-width="1.5"/>
          <rect x="140" y="78" width="80" height="10" fill="#6b7d92" stroke="#4b5a6b" stroke-width="1"/>
          <text x="180" y="45" class="lblS" text-anchor="middle" fill="#1f9d6b">I-beam cross-section</text>
          <g class="beamLoad">
            <line x1="180" y1="50" x2="180" y2="38" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
            <text x="192" y="36" class="lbl" fill="#e2483d">W</text>
          </g>
          <text x="180" y="128" class="lblS" text-anchor="middle">δ = WL³/(48YI_G)</text>
          <text x="180" y="144" class="lblS" text-anchor="middle">deeper beam → 8× less sag</text>
        </g>


        <g v-else-if="type === 'pressure'">
          <rect x="120" y="30" width="120" height="110" rx="4" fill="none" stroke="#4b5a6b" stroke-width="2"/>
          <rect x="120" y="30" width="120" height="110" rx="4" fill="#3a7bd5" fill-opacity="0.18"/>
          <line x1="120" y1="70" x2="240" y2="70" stroke="#2f6fd0" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="120" y1="100" x2="240" y2="100" stroke="#2f6fd0" stroke-width="1.5" stroke-dasharray="4 3"/>
          <text x="250" y="54" class="lblS" fill="#2f6fd0">p₀</text>
          <text x="250" y="74" class="lblS" fill="#2f6fd0">p₁</text>
          <text x="250" y="104" class="lblS" fill="#2f6fd0">p₂</text>
          <text x="108" y="74" class="lblS" text-anchor="end">h₁</text>
          <text x="108" y="104" class="lblS" text-anchor="end">h₂</text>
          <text x="180" y="148" class="lblM" text-anchor="middle" fill="#1f9d6b">p = p₀ + ρgh</text>
        </g>
        <g v-else-if="type === 'archimedes'">
          <rect x="80" y="40" width="200" height="100" rx="4" fill="#3a7bd5" fill-opacity="0.2" stroke="#4b5a6b" stroke-width="1.5"/>
          <g class="archBlock">
            <rect x="145" y="70" width="70" height="50" rx="3" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="180" y1="70" x2="180" y2="35" stroke="var(--vp-c-text-2)" stroke-width="1.5"/>
            <line x1="180" y1="70" x2="180" y2="98" stroke="#1f9d6b" stroke-width="3" marker-end="url(#ahG)"/>
            <text x="196" y="92" class="lbl" fill="#1f9d6b">F_B</text>
            <line x1="180" y1="120" x2="180" y2="148" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
            <text x="192" y="140" class="lbl" fill="#e2483d">mg</text>
          </g>
          <text x="180" y="28" class="lblS" text-anchor="middle" fill="#1f9d6b">F_B = ρ_fluid × V_sub × g</text>
        </g>
        <g v-else-if="type === 'viscosity'">
          <line x1="30" y1="130" x2="330" y2="130" stroke="var(--vp-c-divider)" stroke-width="2.5"/>
          <g class="viscSphere">
            <circle cx="80" cy="90" r="18" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <line x1="80" y1="108" x2="80" y2="140" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
            <text x="92" y="130" class="lbl" fill="#e2483d">mg</text>
            <line x1="80" y1="72" x2="80" y2="50" stroke="#1f9d6b" stroke-width="2.5" marker-end="url(#ahG)"/>
            <text x="92" y="62" class="lbl" fill="#1f9d6b">F_D</text>
          </g>
          <text x="220" y="50" class="lblM" text-anchor="middle" fill="#1f9d6b">F = 6πηrv</text>
          <text x="220" y="70" class="lblS" text-anchor="middle">Stokes' Law</text>
          <text x="220" y="90" class="lblS" text-anchor="middle">v_t = 2r²(ρ−ρ_f)g / 9η</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">at terminal velocity: F_drag + F_B = mg</text>
        </g>
        <g v-else-if="type === 'surface-tension'">
          <ellipse cx="180" cy="75" rx="80" ry="45" fill="#3a7bd5" fill-opacity="0.25" stroke="#2f6fd0" stroke-width="2.5"/>
          <g class="surfPull" stroke="#e2483d" stroke-width="2">
            <line x1="100" y1="75" x2="60" y2="75" marker-end="url(#ahR)"/>
            <line x1="260" y1="75" x2="300" y2="75" marker-end="url(#ahR)"/>
            <line x1="180" y1="30" x2="180" y2="10" marker-end="url(#ahR)"/>
          </g>
          <text x="180" y="30" class="lblS" text-anchor="middle" fill="#1f9d6b">S = F/l</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">Bubble: Δp = 4S/r  |  Drop: Δp = 2S/r</text>
        </g>
        <g v-else-if="type === 'bernoulli'">
          <path d="M20,95 L100,95 Q130,95 140,75 L220,75 Q230,55 260,55 L340,55" fill="none" stroke="#4b5a6b" stroke-width="2.5"/>
          <path d="M20,115 L100,115 Q130,115 140,95 L220,95 Q230,115 260,115 L340,115" fill="none" stroke="#4b5a6b" stroke-width="2.5"/>
          <g class="bernFlow">
            <line x1="55" y1="105" x2="90" y2="105" stroke="#2f6fd0" stroke-width="2.5" marker-end="url(#ahB)"/>
            <text x="60" y="97" class="lbl" fill="#2f6fd0">v₁</text>
            <line x1="175" y1="85" x2="215" y2="85" stroke="#e2483d" stroke-width="3.5" marker-end="url(#ahR)"/>
            <text x="185" y="77" class="lbl" fill="#e2483d">v₂&gt;v₁</text>
          </g>
          <text x="60" y="130" class="lblS" fill="#1f9d6b">p₁ high</text>
          <text x="180" y="55" class="lblS" fill="#e2483d">p₂ low</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">p + ½ρv² + ρgh = const</text>
        </g>


        <g v-else-if="type === 'temperature-and-heat'">
          <rect x="40" y="40" width="120" height="80" rx="6" fill="#3a7bd5" fill-opacity="0.3" stroke="#2f6fd0" stroke-width="1.5"/>
          <text x="100" y="85" class="lblM" text-anchor="middle" fill="#2f6fd0">HOT</text>
          <text x="100" y="100" class="lblS" text-anchor="middle">T_H</text>
          <rect x="200" y="40" width="120" height="80" rx="6" fill="#e2483d" fill-opacity="0.2" stroke="#e2483d" stroke-width="1.5"/>
          <text x="260" y="85" class="lblM" text-anchor="middle" fill="#e2483d">COLD</text>
          <text x="260" y="100" class="lblS" text-anchor="middle">T_C</text>
          <g class="heatFlow">
            <line x1="162" y1="80" x2="198" y2="80" stroke="#e08a1e" stroke-width="3" marker-end="url(#ahO)"/>
            <text x="180" y="72" class="lbl" fill="#e08a1e">Q</text>
          </g>
          <text x="180" y="140" class="lblS" text-anchor="middle">Heat flows: hot → cold</text>
          <text x="180" y="155" class="lblS" text-anchor="middle">K = °C + 273</text>
        </g>
        <g v-else-if="type === 'thermal-expansion'">
          <line x1="40" y1="90" x2="200" y2="90" stroke="#4b5a6b" stroke-width="6" stroke-linecap="round"/>
          <line x1="40" y1="100" x2="40" y2="80" stroke="var(--vp-c-text-2)" stroke-width="2"/>
          <line x1="200" y1="100" x2="200" y2="80" stroke="var(--vp-c-text-2)" stroke-width="2"/>
          <text x="120" y="78" class="lbl" text-anchor="middle">L₀</text>
          <g class="thermalExpand">
            <line x1="40" y1="130" x2="226" y2="130" stroke="#e08a1e" stroke-width="6" stroke-linecap="round"/>
            <line x1="40" y1="140" x2="40" y2="120" stroke="#e08a1e" stroke-width="2"/>
            <line x1="226" y1="140" x2="226" y2="120" stroke="#e08a1e" stroke-width="2"/>
            <text x="133" y="118" class="lbl" text-anchor="middle" fill="#e08a1e">L₀+ΔL</text>
          </g>
          <text x="280" y="60" class="lblM" text-anchor="middle" fill="#1f9d6b">ΔL = L₀αΔT</text>
          <text x="280" y="80" class="lblS" text-anchor="middle">γ ≈ 3α (volume)</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">water densest at 4°C (anomalous)</text>
        </g>
        <g v-else-if="type === 'calorimetry'">
          <rect x="100" y="45" width="160" height="90" rx="6" fill="#3a7bd5" fill-opacity="0.15" stroke="#4b5a6b" stroke-width="2"/>
          <rect x="130" y="75" width="100" height="30" rx="3" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          <text x="180" y="95" class="lbl" text-anchor="middle">m kg, c</text>
          <line x1="180" y1="135" x2="180" y2="148" stroke="#e08a1e" stroke-width="3"/>
          <text x="196" y="148" class="lbl" fill="#e08a1e">Q=mcΔT</text>
          <g class="caloHeat">
            <line x1="60" y1="90" x2="96" y2="90" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
            <text x="66" y="82" class="lbl" fill="#e2483d">Q</text>
          </g>
          <text x="180" y="35" class="lblS" text-anchor="middle" fill="#1f9d6b">phase change: Q = mL (ΔT = 0)</text>
          <text x="180" y="20" class="lblS" text-anchor="middle">L_f(ice)=334 kJ/kg  L_v=2260 kJ/kg</text>
        </g>
        <g v-else-if="type === 'heat-transfer'">
          <rect x="30" y="50" width="70" height="70" rx="4" fill="#e2483d" fill-opacity="0.3" stroke="#e2483d" stroke-width="2"/>
          <text x="65" y="92" class="lbl" text-anchor="middle" fill="#e2483d">HOT</text>
          <rect x="260" y="50" width="70" height="70" rx="4" fill="#2f6fd0" fill-opacity="0.2" stroke="#2f6fd0" stroke-width="2"/>
          <text x="295" y="92" class="lbl" text-anchor="middle" fill="#2f6fd0">COLD</text>
          <g class="htConduct">
            <line x1="102" y1="85" x2="258" y2="85" stroke="#e08a1e" stroke-width="2.5" marker-end="url(#ahO)"/>
            <text x="180" y="75" class="lbl" fill="#e08a1e" text-anchor="middle">Conduction</text>
          </g>
          <line x1="140" y1="30" x2="140" y2="10" stroke="#e2483d" stroke-width="2" stroke-dasharray="3 2"/>
          <text x="140" y="8" class="lblS" fill="#e2483d" text-anchor="middle">Radiation</text>
          <path d="M200,30 Q220,20 240,30 Q220,40 200,30" fill="#e08a1e" opacity="0.6"/>
          <text x="220" y="18" class="lblS" fill="#e08a1e">Convection</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">P_rad = εσAT⁴  |  k: thermal conductivity</text>
        </g>
        <g v-else-if="type === 'newtons-cooling'">
          <path class="nclCurve" d="M30,30 C60,32 100,50 150,80 S240,120 330,130" fill="none" stroke="#e2483d" stroke-width="2.5"/>
          <line x1="30" y1="130" x2="330" y2="130" stroke="var(--vp-c-divider)" stroke-width="2" stroke-dasharray="5 4"/>
          <text x="338" y="134" class="lblS" fill="#2f6fd0">T₀</text>
          <line x1="30" y1="130" x2="30" y2="25" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <line x1="30" y1="30" x2="330" y2="30" stroke="var(--vp-c-divider)" stroke-width="1" stroke-dasharray="3 3"/>
          <text x="36" y="27" class="lblS">T_i</text>
          <text x="180" y="60" class="lblS" fill="#e2483d" text-anchor="middle">T(t) = T₀ + (T_i−T₀)e^(−kt)</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">rate of cooling ∝ (T − T₀)</text>
        </g>


        <g v-else-if="type === 'first-law'">
          <circle cx="180" cy="80" r="48" fill="var(--vp-c-bg-soft)" stroke="#4b5a6b" stroke-width="2"/>
          <text x="180" y="84" class="lblM" text-anchor="middle">System</text>
          <g class="flQArrow">
            <line x1="56" y1="80" x2="128" y2="80" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
            <text x="90" y="70" class="lbl" fill="#e2483d">Q</text>
          </g>
          <g class="flWArrow">
            <line x1="232" y1="80" x2="304" y2="80" stroke="#2f6fd0" stroke-width="3" marker-end="url(#ahB)"/>
            <text x="265" y="70" class="lbl" fill="#2f6fd0">W</text>
          </g>
          <text x="180" y="148" class="lblM" text-anchor="middle" fill="#1f9d6b">ΔU = Q − W</text>
        </g>
        <g v-else-if="type === 'thermodynamic-processes'">
          <line x1="30" y1="140" x2="30" y2="20" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <line x1="30" y1="140" x2="320" y2="140" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <text x="20" y="14" class="lblS">p</text>
          <text x="325" y="143" class="lblS">V</text>
          <path d="M60,30 Q150,35 280,110" fill="none" stroke="#2f6fd0" stroke-width="2"/>
          <text x="165" y="28" class="lblS" fill="#2f6fd0">Isothermal (pV=C)</text>
          <path d="M60,30 Q90,80 230,130" fill="none" stroke="#e2483d" stroke-width="2"/>
          <text x="62" y="80" class="lblS" fill="#e2483d">Adiabatic</text>
          <line x1="60" y1="30" x2="60" y2="130" stroke="#e08a1e" stroke-width="2"/>
          <text x="30" y="85" class="lblS" fill="#e08a1e">Iso-</text>
          <text x="28" y="95" class="lblS" fill="#e08a1e">choric</text>
          <line x1="60" y1="130" x2="280" y2="130" stroke="#1f9d6b" stroke-width="2"/>
          <text x="170" y="143" class="lblS" fill="#1f9d6b">Isobaric</text>
        </g>
        <g v-else-if="type === 'second-law'">
          <rect x="30" y="40" width="130" height="80" rx="6" fill="#e2483d" fill-opacity="0.15" stroke="#e2483d" stroke-width="1.5"/>
          <text x="95" y="82" class="lbl" text-anchor="middle" fill="#e2483d">ORDERED</text>
          <text x="95" y="96" class="lblS" text-anchor="middle">low entropy</text>
          <rect x="200" y="40" width="130" height="80" rx="6" fill="#4b5a6b" fill-opacity="0.15" stroke="#4b5a6b" stroke-width="1.5"/>
          <text x="265" y="82" class="lbl" text-anchor="middle">DISORDERED</text>
          <text x="265" y="96" class="lblS" text-anchor="middle">high entropy</text>
          <g class="slArrow">
            <line x1="162" y1="80" x2="198" y2="80" stroke="#e08a1e" stroke-width="3" marker-end="url(#ahO)"/>
          </g>
          <text x="180" y="148" class="lblS" text-anchor="middle">ΔS_universe ≥ 0 (spontaneous direction)</text>
        </g>
        <g v-else-if="type === 'heat-engine'">
          <rect x="140" y="50" width="80" height="60" rx="6" fill="var(--vp-c-bg-soft)" stroke="#4b5a6b" stroke-width="2"/>
          <text x="180" y="85" class="lbl" text-anchor="middle">Engine</text>
          <rect x="55" y="20" width="80" height="36" rx="4" fill="#e2483d" fill-opacity="0.3" stroke="#e2483d" stroke-width="1.5"/>
          <text x="95" y="42" class="lbl" text-anchor="middle" fill="#e2483d">T_H  Q_H</text>
          <line x1="95" y1="56" x2="140" y2="70" stroke="#e2483d" stroke-width="2.5" marker-end="url(#ahR)"/>
          <rect x="55" y="104" width="80" height="36" rx="4" fill="#2f6fd0" fill-opacity="0.2" stroke="#2f6fd0" stroke-width="1.5"/>
          <text x="95" y="125" class="lbl" text-anchor="middle" fill="#2f6fd0">T_C  Q_C</text>
          <line x1="140" y1="90" x2="95" y2="104" stroke="#2f6fd0" stroke-width="2.5" marker-end="url(#ahB)"/>
          <line x1="220" y1="80" x2="290" y2="80" stroke="#1f9d6b" stroke-width="3" marker-end="url(#ahG)"/>
          <text x="255" y="70" class="lbl" fill="#1f9d6b">W</text>
          <text x="180" y="145" class="lblS" text-anchor="middle">η = W/Q_H = 1 − Q_C/Q_H</text>
        </g>
        <g v-else-if="type === 'carnot-theorem'">
          <rect x="55" y="20" width="90" height="30" rx="4" fill="#e2483d" fill-opacity="0.3" stroke="#e2483d" stroke-width="1.5"/>
          <text x="100" y="40" class="lbl" text-anchor="middle" fill="#e2483d">T_H (hot)</text>
          <rect x="55" y="110" width="90" height="30" rx="4" fill="#2f6fd0" fill-opacity="0.2" stroke="#2f6fd0" stroke-width="1.5"/>
          <text x="100" y="130" class="lbl" text-anchor="middle" fill="#2f6fd0">T_C (cold)</text>
          <line x1="100" y1="50" x2="100" y2="108" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <text x="100" y="82" class="lblM" text-anchor="middle" fill="#1f9d6b">η_C</text>
          <text x="260" y="50" class="lblM" text-anchor="middle" fill="#1f9d6b">η_C = 1 − T_C/T_H</text>
          <text x="260" y="70" class="lblS" text-anchor="middle">Maximum possible</text>
          <text x="260" y="86" class="lblS" text-anchor="middle">efficiency</text>
          <text x="260" y="108" class="lblS" text-anchor="middle">Real engines:</text>
          <text x="260" y="124" class="lblS" text-anchor="middle">η &lt; η_Carnot</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">Carnot cycle: 2 isothermals + 2 adiabatics</text>
        </g>


        <g v-else-if="type === 'kinetic-theory'">
          <rect x="40" y="30" width="280" height="110" rx="8" fill="none" stroke="#4b5a6b" stroke-width="2"/>
          <g class="ktMolecules">
            <circle cx="80" cy="65" r="6" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1"/>
            <line x1="86" y1="65" x2="110" y2="52" stroke="#4b5a6b" stroke-width="1" marker-end="url(#ahB)"/>
            <circle cx="160" cy="90" r="6" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1"/>
            <line x1="166" y1="90" x2="190" y2="78" stroke="#4b5a6b" stroke-width="1" marker-end="url(#ahB)"/>
            <circle cx="240" cy="55" r="6" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1"/>
            <line x1="240" y1="61" x2="240" y2="90" stroke="#4b5a6b" stroke-width="1" marker-end="url(#ahB)"/>
            <circle cx="100" cy="115" r="6" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1"/>
            <line x1="106" y1="115" x2="134" y2="105" stroke="#4b5a6b" stroke-width="1" marker-end="url(#ahB)"/>
            <circle cx="200" cy="110" r="6" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1"/>
            <line x1="194" y1="110" x2="170" y2="125" stroke="#4b5a6b" stroke-width="1" marker-end="url(#ahB)"/>
          </g>
          <text x="180" y="148" class="lblS" text-anchor="middle">p = (1/3)ρ⟨v²⟩  |  KE = (3/2)k_BT</text>
        </g>
        <g v-else-if="type === 'speed-of-molecules'">
          <path d="M30,130 Q80,130 100,80 Q120,30 160,20 Q200,10 230,50 Q260,90 290,120 L320,130" fill="#8aa0bf" fill-opacity="0.3" stroke="#2f6fd0" stroke-width="2"/>
          <line x1="30" y1="130" x2="330" y2="130" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <line x1="30" y1="130" x2="30" y2="15" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <line x1="148" y1="18" x2="148" y2="130" stroke="#e2483d" stroke-width="1.5" stroke-dasharray="4 3"/>
          <text x="148" y="12" class="lblS" fill="#e2483d" text-anchor="middle">v_p</text>
          <line x1="173" y1="18" x2="173" y2="130" stroke="#e08a1e" stroke-width="1.5" stroke-dasharray="4 3"/>
          <text x="195" y="12" class="lblS" fill="#e08a1e">v̄</text>
          <line x1="188" y1="18" x2="188" y2="130" stroke="#1f9d6b" stroke-width="1.5" stroke-dasharray="4 3"/>
          <text x="208" y="12" class="lblS" fill="#1f9d6b">v_rms</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">v_rms = √(3RT/M)  |  v ∝ 1/√M</text>
        </g>
        <g v-else-if="type === 'equipartition'">
          <circle cx="100" cy="75" r="30" fill="#8aa0bf" fill-opacity="0.5" stroke="#4b5a6b" stroke-width="1.5"/>
          <text x="100" y="64" class="lblS" text-anchor="middle">Monatomic</text>
          <text x="100" y="78" class="lbl" text-anchor="middle">f = 3</text>
          <text x="100" y="92" class="lblS" text-anchor="middle">γ = 5/3</text>
          <ellipse cx="210" cy="75" rx="44" ry="22" fill="none" stroke="#4b5a6b" stroke-width="1.5"/>
          <circle cx="210" cy="75" r="7" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1"/>
          <circle cx="248" cy="75" r="7" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1"/>
          <text x="210" y="45" class="lblS" text-anchor="middle">Diatomic</text>
          <text x="210" y="104" class="lbl" text-anchor="middle">f = 5</text>
          <text x="210" y="118" class="lblS" text-anchor="middle">γ = 7/5</text>
          <text x="310" y="65" class="lblS" text-anchor="middle">C_v =</text>
          <text x="310" y="80" class="lblM" text-anchor="middle" fill="#1f9d6b">(f/2)R</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">each degree of freedom: ½k_BT</text>
        </g>
        <g v-else-if="type === 'mean-free-path'">
          <g class="mfpPath">
            <polyline points="50,90 100,50 160,110 220,60 280,100 320,70" fill="none" stroke="#2f6fd0" stroke-width="2"/>
            <circle cx="50" cy="90" r="8" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
            <circle cx="100" cy="50" r="8" fill="#4b5a6b" stroke="#2a3442" stroke-width="1"/>
            <circle cx="160" cy="110" r="8" fill="#4b5a6b" stroke="#2a3442" stroke-width="1"/>
            <circle cx="220" cy="60" r="8" fill="#4b5a6b" stroke="#2a3442" stroke-width="1"/>
            <circle cx="280" cy="100" r="8" fill="#4b5a6b" stroke="#2a3442" stroke-width="1"/>
          </g>
          <line x1="50" y1="110" x2="100" y2="110" stroke="#e2483d" stroke-width="2" stroke-dasharray="4 2"/>
          <text x="75" y="124" class="lblS" fill="#e2483d" text-anchor="middle">λ</text>
          <text x="180" y="30" class="lblM" text-anchor="middle" fill="#1f9d6b">λ = 1/(√2 π d² n)</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">λ ∝ T/p  |  ~70 nm at 1 atm</text>
        </g>


        <g v-else-if="type === 'shm'">
          <line x1="30" y1="90" x2="330" y2="90" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <path d="M30,90 Q95,30 160,90 Q225,150 290,90" fill="none" stroke="#2f6fd0" stroke-width="2.5"/>
          <g class="shmBall">
            <circle r="12" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          </g>
          <line x1="160" y1="90" x2="160" y2="155" stroke="var(--vp-c-divider)" stroke-width="1" stroke-dasharray="3 3"/>
          <text x="160" y="162" class="lblS" text-anchor="middle">equilibrium</text>
          <text x="290" y="40" class="lblS" text-anchor="middle" fill="#1f9d6b">F = −kx</text>
          <text x="290" y="56" class="lblS" text-anchor="middle">a = −ω²x</text>
          <text x="180" y="22" class="lblS" text-anchor="middle">x = A cos(ωt + φ)</text>
        </g>
        <g v-else-if="type === 'energy-shm'">
          <line x1="30" y1="130" x2="330" y2="130" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <path d="M30,130 Q95,30 160,130 Q225,30 290,130" fill="none" stroke="#e2483d" stroke-width="2" stroke-dasharray="5 3"/>
          <path d="M30,30 Q95,130 160,30 Q225,130 290,30" fill="none" stroke="#2f6fd0" stroke-width="2" stroke-dasharray="5 3"/>
          <line x1="30" y1="80" x2="290" y2="80" stroke="#1f9d6b" stroke-width="2"/>
          <text x="305" y="34" class="lblS" fill="#2f6fd0">KE</text>
          <text x="305" y="84" class="lblS" fill="#1f9d6b">E=½kA²</text>
          <text x="305" y="134" class="lblS" fill="#e2483d">PE</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">KE + PE = constant  |  K=U at x=A/√2</text>
        </g>
        <g v-else-if="type === 'simple-pendulum'">
          <line x1="180" y1="20" x2="180" y2="20" stroke="#4b5a6b" stroke-width="3"/>
          <circle cx="180" cy="20" r="5" fill="#4b5a6b"/>
          <g class="pendulumSwing">
            <line x1="180" y1="20" x2="180" y2="120" stroke="#4b5a6b" stroke-width="2"/>
            <circle cx="180" cy="124" r="14" fill="#8aa0bf" stroke="#4b5a6b" stroke-width="1.5"/>
          </g>
          <path d="M160,20 A20,70 0 0 0 180,88" fill="none" stroke="#e08a1e" stroke-width="1.5"/>
          <text x="148" y="56" class="lbl" fill="#e08a1e">θ</text>
          <line x1="180" y1="20" x2="180" y2="140" stroke="var(--vp-c-divider)" stroke-width="1" stroke-dasharray="3 3"/>
          <text x="280" y="50" class="lblM" text-anchor="middle" fill="#1f9d6b">T = 2π√(L/g)</text>
          <text x="280" y="68" class="lblS" text-anchor="middle">mass-independent</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">g = 4π²L/T² (measurement)</text>
        </g>
        <g v-else-if="type === 'damped-oscillations'">
          <line x1="30" y1="90" x2="330" y2="90" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <path class="dampedCurve" d="M30,90 C50,30 70,30 90,90 C110,150 130,150 150,90 C170,40 190,40 210,90 C230,130 250,130 270,90 C285,65 300,65 320,90" fill="none" stroke="#2f6fd0" stroke-width="2.5"/>
          <path d="M30,90 L320,78" fill="none" stroke="#e2483d" stroke-width="1.5" stroke-dasharray="4 3"/>
          <path d="M30,90 L320,102" fill="none" stroke="#e2483d" stroke-width="1.5" stroke-dasharray="4 3"/>
          <text x="180" y="30" class="lblS" text-anchor="middle" fill="#e2483d">envelope: A₀e^(−bt/2m)</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">amplitude decays exponentially</text>
        </g>
        <g v-else-if="type === 'resonance'">
          <line x1="30" y1="140" x2="30" y2="20" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <line x1="30" y1="140" x2="330" y2="140" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
          <path d="M40,138 Q100,136 150,130 Q165,125 180,20 Q195,125 210,130 Q260,136 320,138" fill="#2f6fd0" fill-opacity="0.2" stroke="#2f6fd0" stroke-width="2.5"/>
          <line x1="180" y1="20" x2="180" y2="140" stroke="#e2483d" stroke-width="1.5" stroke-dasharray="4 3"/>
          <text x="180" y="155" class="lblS" fill="#e2483d" text-anchor="middle">ω₀ (resonance)</text>
          <text x="30" y="14" class="lblS">A</text>
          <text x="335" y="143" class="lblS">ω_d</text>
          <text x="260" y="50" class="lblS" fill="#1f9d6b">low damping</text>
          <text x="260" y="65" class="lblS" fill="#1f9d6b">(high Q)</text>
        </g>


        <g v-else-if="type === 'wave-motion'">
          <line x1="30" y1="90" x2="330" y2="90" stroke="var(--vp-c-divider)" stroke-width="1"/>
          <path class="waveMove" d="M30,90 Q67,40 104,90 Q141,140 178,90 Q215,40 252,90 Q289,140 326,90" fill="none" stroke="#2f6fd0" stroke-width="2.5"/>
          <g class="waveCrest">
            <circle cx="67" cy="55" r="7" fill="#e2483d"/>
            <line x1="67" y1="55" x2="67" y2="90" stroke="#e2483d" stroke-width="1.5" stroke-dasharray="3 2"/>
          </g>
          <line x1="67" y1="90" x2="178" y2="90" stroke="#e08a1e" stroke-width="2"/>
          <text x="122" y="84" class="lblS" fill="#e08a1e" text-anchor="middle">λ</text>
          <text x="180" y="28" class="lblS" text-anchor="middle">y = A sin(kx − ωt)</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">v = fλ  |  k = 2π/λ  |  ω = 2πf</text>
        </g>
        <g v-else-if="type === 'speed-of-waves'">
          <line x1="40" y1="110" x2="40" y2="80" stroke="#4b5a6b" stroke-width="5" stroke-linecap="round"/>
          <line x1="40" y1="95" x2="260" y2="95" stroke="#4b5a6b" stroke-width="5" stroke-linecap="round"/>
          <line x1="260" y1="110" x2="260" y2="80" stroke="#4b5a6b" stroke-width="5" stroke-linecap="round"/>
          <text x="150" y="83" class="lblS" text-anchor="middle">μ kg/m</text>
          <line x1="40" y1="95" x2="260" y2="95" stroke="#4b5a6b" stroke-width="4"/>
          <path class="swWave" d="M40,95 Q80,65 120,95 Q160,125 200,95 Q240,65 280,95" fill="none" stroke="#2f6fd0" stroke-width="2.5"/>
          <line x1="260" y1="95" x2="300" y2="95" stroke="#e2483d" stroke-width="3" marker-end="url(#ahR)"/>
          <text x="285" y="85" class="lbl" fill="#e2483d">T</text>
          <text x="180" y="30" class="lblM" text-anchor="middle" fill="#1f9d6b">v = √(T/μ)</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">sound in gas: v = √(γRT/M)</text>
        </g>
        <g v-else-if="type === 'standing-waves'">
          <line x1="40" y1="90" x2="320" y2="90" stroke="var(--vp-c-divider)" stroke-width="1"/>
          <rect x="34" y="80" width="12" height="20" fill="#4b5a6b"/>
          <rect x="314" y="80" width="12" height="20" fill="#4b5a6b"/>
          <path class="stWavePos" d="M46,90 Q106,30 166,90 Q226,150 286,90" fill="none" stroke="#2f6fd0" stroke-width="2.5"/>
          <path class="stWaveNeg" d="M46,90 Q106,150 166,90 Q226,30 286,90" fill="none" stroke="#2f6fd0" stroke-width="2.5" stroke-dasharray="5 3" opacity="0.5"/>
          <circle cx="46" cy="90" r="5" fill="#e2483d"/>
          <circle cx="166" cy="90" r="5" fill="#e2483d"/>
          <circle cx="286" cy="90" r="5" fill="#e2483d"/>
          <text x="46" y="115" class="lblS" fill="#e2483d" text-anchor="middle">N</text>
          <text x="166" y="115" class="lblS" fill="#e2483d" text-anchor="middle">N</text>
          <text x="286" y="115" class="lblS" fill="#e2483d" text-anchor="middle">N</text>
          <text x="106" y="22" class="lblS" fill="#2f6fd0" text-anchor="middle">AN</text>
          <text x="226" y="22" class="lblS" fill="#2f6fd0" text-anchor="middle">AN</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">f_n = nv/2L  |  nodes: zero, antinodes: max</text>
        </g>
        <g v-else-if="type === 'beats'">
          <line x1="30" y1="90" x2="330" y2="90" stroke="var(--vp-c-divider)" stroke-width="1"/>
          <path d="M30,90 Q60,60 90,90 Q120,120 150,90 Q180,60 210,90 Q240,120 270,90 Q300,60 330,90" fill="none" stroke="#2f6fd0" stroke-width="1.5"/>
          <path d="M30,90 Q55,58 80,90 Q105,122 130,90 Q155,58 180,90 Q205,122 230,90 Q255,58 280,90 Q305,122 330,90" fill="none" stroke="#e2483d" stroke-width="1.5"/>
          <path class="beatEnv" d="M30,90 Q80,20 165,90 Q250,160 330,90" fill="none" stroke="#1f9d6b" stroke-width="2.5"/>
          <path d="M30,90 Q80,160 165,90 Q250,20 330,90" fill="none" stroke="#1f9d6b" stroke-width="2.5"/>
          <text x="180" y="148" class="lblS" text-anchor="middle">f_beat = |f₁ − f₂|</text>
        </g>
        <g v-else-if="type === 'doppler'">
          <circle cx="100" cy="75" r="12" fill="#e08a1e" stroke="#b56e10" stroke-width="1.5"/>
          <text x="100" y="79" class="lbl" text-anchor="middle" fill="white">S</text>
          <g class="dopplerSource">
            <line x1="112" y1="75" x2="145" y2="75" stroke="#e08a1e" stroke-width="2.5" marker-end="url(#ahO)"/>
          </g>
          <ellipse cx="160" cy="75" rx="25" ry="25" fill="none" stroke="#4b5a6b" stroke-width="1.5" stroke-dasharray="3 2"/>
          <ellipse cx="170" cy="75" rx="35" ry="35" fill="none" stroke="#4b5a6b" stroke-width="1.5" stroke-dasharray="3 2"/>
          <ellipse cx="182" cy="75" rx="50" ry="50" fill="none" stroke="#4b5a6b" stroke-width="1" stroke-dasharray="3 2"/>
          <text x="60" y="35" class="lblS" fill="#2f6fd0">f' = f·v/(v−v_S)</text>
          <text x="60" y="50" class="lblS" fill="#2f6fd0">(approaching)</text>
          <text x="280" y="50" class="lblS" text-anchor="middle" fill="#e2483d">f' &lt; f</text>
          <text x="280" y="65" class="lblS" text-anchor="middle" fill="#e2483d">(receding)</text>
          <text x="180" y="148" class="lblS" text-anchor="middle">f' = f(v + v_O)/(v − v_S)</text>
        </g>

      </svg>
        <figcaption v-if="cap">{{ cap }}</figcaption>
      </div>
    </div>
  </figure>
</template>

<style scoped>

figure.concept-hero { margin: 1.2rem 0; }
.ch-card {
  border: 1px solid var(--vp-c-divider);
  border-left: 5px solid var(--pc-visual);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}
.ch-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1.1rem;
}
.ch-ico {
  display: inline-flex;
  width: 26px;
  height: 26px;
  flex: 0 0 26px;
  color: var(--pc-visual);
}
.ch-ico svg { width: 100%; height: 100%; }
.ch-label {
  flex: 1;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--pc-visual);
  opacity: 0.9;
}
.ch-body { border-top: 1px solid var(--vp-c-divider); }
.ch-body > svg { display: block; width: 100%; height: 160px; }
figcaption {
  padding: .45rem 1rem;
  font-size: .78rem;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
  font-style: italic;
}

.lbl  { font: 500 11px/1 system-ui, sans-serif; }
.lblM { font: 600 13px/1 system-ui, sans-serif; }
.lblS { font: 400 10px/1 system-ui, sans-serif; }

@keyframes siPulse { 0%,100%{opacity:.4} 50%{opacity:1} }
.u1 { animation: siPulse 2.4s ease-in-out infinite 0s; }
.u2 { animation: siPulse 2.4s ease-in-out infinite .8s; }
.u3 { animation: siPulse 2.4s ease-in-out infinite 1.6s; }

@keyframes sfBlink { 0%,100%{opacity:1} 50%{opacity:.2} }
.sfBar { animation: sfBlink 1.4s ease-in-out infinite; }

@keyframes dimBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
.dimM  { animation: dimBounce 1.6s ease-in-out infinite 0s; }
.dimL  { animation: dimBounce 1.6s ease-in-out infinite .4s; }
.dimT  { animation: dimBounce 1.6s ease-in-out infinite .8s; }
.dimEq { animation: dimBounce 1.6s ease-in-out infinite 1.2s; }

@keyframes dispMove { 0%,15%{transform:translateX(0)} 85%,100%{transform:translateX(110px)} }
.dispObj { animation: dispMove 2.8s ease-in-out infinite; }

@keyframes carFast { 0%,100%{transform:translateX(0)} 50%{transform:translateX(90px)} }
@keyframes carSlow { 0%,100%{transform:translateX(0)} 50%{transform:translateX(40px)} }
.carA { animation: carFast 2s ease-in-out infinite; }
.carB { animation: carSlow 3s ease-in-out infinite; }

@keyframes accObj { 0%{transform:translateX(0)} 100%{transform:translateX(120px)} }
.accObj { animation: accObj 2s cubic-bezier(.2,0,.6,1) infinite; }

@keyframes eomFall { 0%{transform:translateY(0)} 80%{transform:translateY(66px)} 100%{transform:translateY(66px)} }

@keyframes trainFast { 0%,100%{transform:translateX(0)} 50%{transform:translateX(80px)} }
@keyframes trainSlow { 0%,100%{transform:translateX(0)} 50%{transform:translateX(30px)} }
.trainA { animation: trainFast 2.4s ease-in-out infinite; }
.trainB { animation: trainSlow 2.4s ease-in-out infinite; }

@keyframes svRotate { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(15deg)} }
.svArrow { transform-origin: 60px 90px; animation: svRotate 2s ease-in-out infinite; }

@keyframes vaResult { 0%,100%{opacity:.5} 50%{opacity:1} }
.vecA { animation: vaResult 1.8s ease-in-out infinite 0s; }
.vecB { animation: vaResult 1.8s ease-in-out infinite .6s; }

@keyframes vcReveal { 0%,30%{opacity:0} 60%,100%{opacity:1} }
.vecComp { animation: vcReveal 2s ease-in-out infinite; }

@keyframes rv2dA { 0%,100%{transform:translate(0,0)} 50%{transform:translate(24px,-10px)} }
@keyframes rv2dB { 0%,100%{transform:translate(0,0)} 50%{transform:translate(14px,4px)} }
.rv2dA { animation: rv2dA 2.4s ease-in-out infinite; }
.rv2dB { animation: rv2dB 2.4s ease-in-out infinite .6s; }

@keyframes projBall {
  0%  { transform:translate(0,0); }
  25% { transform:translate(55px,-32px); }
  50% { transform:translate(110px,0px); }
  75% { transform:translate(165px,-20px); }
  100%{ transform:translate(220px,60px); }
}
.projBall { animation: projBall 3s ease-in-out infinite; }

@keyframes ucmOrbit { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
.ucmBall  { transform-origin: 180px 73px; animation: ucmOrbit 2.4s linear infinite; }
.ucmDot   { transform-origin: 180px 73px; animation: ucmOrbit 2.4s linear infinite; }
.ucmArrow { transform-origin: 180px 73px; animation: ucmOrbit 2.4s linear infinite; }

@keyframes il1Glide { 0%{transform:translateX(0)} 80%{transform:translateX(230px)} 81%{transform:translateX(-90px);opacity:0} 82%{opacity:0} 100%{transform:translateX(0);opacity:1} }
.il1Ball { animation: il1Glide 3.5s linear infinite; }

@keyframes ms2Push { 0%,100%{transform:translateX(0)} 50%{transform:translateX(18px)} }
.ms2Box { animation: ms2Push 2s ease-in-out infinite; }

@keyframes impBat { 0%,100%{transform:translateX(0)} 40%,60%{transform:translateX(16px)} }
@keyframes impBall { 0%,50%{transform:translateX(0)} 100%{transform:translateX(80px)} }
.impBat  { animation: impBat  1.8s ease-in-out infinite; }
.impBall { animation: impBall 1.8s ease-in-out infinite; }

@keyframes boxAPush { 0%,100%{transform:translateX(0)} 50%{transform:translateX(-10px)} }
@keyframes boxBPush { 0%,100%{transform:translateX(0)} 50%{transform:translateX(10px)} }
.boxA { animation: boxAPush 2s ease-in-out infinite; }
.boxB { animation: boxBPush 2s ease-in-out infinite; }

@keyframes cmHeavy { 0%,15%{transform:translateX(0)} 85%,100%{transform:translateX(-28px)} }
@keyframes cmLight { 0%,15%{transform:translateX(0)} 85%,100%{transform:translateX(75px)} }
.heavy { animation: cmHeavy 2.4s ease-out infinite; }
.light { animation: cmLight 2.4s ease-out infinite; }

@keyframes cmBall1 { 0%,10%{transform:translateX(0)} 50%,100%{transform:translateX(60px)} }
@keyframes cmBall2 { 0%,50%{transform:translateX(0)} 90%,100%{transform:translateX(60px)} }

@keyframes eqRock  { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(2deg)} }
@keyframes swingPend { 0%,100%{transform:rotate(0deg)} 25%{transform:rotate(-3deg)} 75%{transform:rotate(3deg)} }
.eqBeam { transform-origin: 180px 95px; animation: eqRock 2.4s ease-in-out infinite; }
.swing  { transform-origin: 180px 22px; animation: swingPend 2.8s ease-in-out infinite; }

.balBeam { transform-origin: 180px 50px; animation: eqRock 2.4s ease-in-out infinite; }

@keyframes frSlide    { 0%,100%{transform:translateX(0)} 50%{transform:translateX(28px)} }
@keyframes forceArrow { 0%,100%{opacity:0.55} 50%{opacity:1} }
.frBlock  { animation: frSlide    2.4s ease-in-out infinite; }
.applied  { animation: forceArrow 1.4s ease-in-out infinite; }
.fric     { animation: forceArrow 1.4s ease-in-out infinite 0.7s; }

.orbit { transform-origin: 180px 75px; animation: ucmOrbit 3s linear infinite; }

@keyframes workBox { 0%,100%{transform:translateX(0)} 50%{transform:translateX(80px)} }
@keyframes workForce { 0%,100%{transform:translateX(0)} 50%{transform:translateX(80px)} }
.workBox   { animation: workBox   2.4s ease-in-out infinite; }
.workForce { animation: workForce 2.4s ease-in-out infinite; }

@keyframes keSlow { 0%,45%,100%{opacity:1} 55%,90%{opacity:.3} }
@keyframes keFast { 0%,10%,55%{opacity:.3} 45%,100%{opacity:1} }
.keSlow { animation: keSlow 2.4s ease-in-out infinite; }
.keFast { animation: keFast 2.4s ease-in-out infinite; }

@keyframes peBall { 0%,20%{transform:translateY(0)} 80%,100%{transform:translateY(60px)} }
.peBall { animation: peBall 2s ease-in infinite; }

@keyframes ceBall {
  0%  { transform: translate(40px, 30px); }
  50% { transform: translate(140px, 128px); }
  100%{ transform: translate(40px,  30px); }
}
.ceBall { animation: ceBall 3s ease-in-out infinite; }

@keyframes pwrFast { 0%,100%{transform:translateX(0)} 50%{transform:translateX(90px)} }
@keyframes pwrSlow { 0%,100%{transform:translateX(0)} 50%{transform:translateX(40px)} }
.pwrFast { animation: pwrFast 2s ease-in-out infinite; }
.pwrSlow { animation: pwrSlow 2s ease-in-out infinite; }

@keyframes colB1 { 0%,40%{transform:translateX(0)} 60%,100%{transform:translateX(20px)} }
@keyframes colB2 { 0%,40%{transform:translateX(0)} 60%,100%{transform:translateX(-20px)} }
@keyframes colA1 { 0%,50%{opacity:0} 60%,100%{opacity:1;transform:translateX(-10px)} }
@keyframes colA2 { 0%,50%{opacity:0} 60%,100%{opacity:1;transform:translateX(20px)} }
.colB1 { animation: colB1 2.4s ease-in-out infinite; }
.colB2 { animation: colB2 2.4s ease-in-out infinite; }
.colA1 { opacity:0; animation: colA1 2.4s ease-in-out infinite; }
.colA2 { opacity:0; animation: colA2 2.4s ease-in-out infinite; }

@keyframes cmMark { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
.cmMarker { animation: cmMark 2s ease-in-out infinite; }

@keyframes tqArrow { 0%,100%{transform:translateY(0);opacity:.7} 50%{transform:translateY(-10px);opacity:1} }
.torqueArrow { animation: tqArrow 1.8s ease-in-out infinite; }

@keyframes amArrow { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(1.15)} }
.amArrow { transform-origin: 180px 55px; animation: amArrow 1.6s ease-in-out infinite; }

@keyframes rollWheel { 0%{transform:translate(110px,92px) rotate(0deg)} 100%{transform:translate(230px,92px) rotate(360deg)} }
.rollingWheel { animation: rollWheel 3s linear infinite; }

@keyframes gravPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
.gravM1 { transform-origin: 95px 75px; animation: gravPulse 2s ease-in-out infinite; }
.gravM2 { transform-origin: 265px 75px; animation: gravPulse 2s ease-in-out .4s infinite; }

@keyframes gField { 0%,100%{opacity:.5;stroke-width:1.5} 50%{opacity:1;stroke-width:2.5} }
.gField { animation: gField 2s ease-in-out infinite; }

@keyframes escRocket { 0%{transform:translateY(0)} 80%{transform:translateY(-62px);opacity:1} 100%{transform:translateY(-62px);opacity:0} }
.escRocket { animation: escRocket 2.4s ease-in infinite; }

@keyframes satOrbit { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
.satOrbit { transform-origin: 180px 75px; animation: satOrbit 4s linear infinite; }

@keyframes kepClose { 0%,100%{transform:translate(0,0)} 50%{transform:translate(6px,3px)} }
@keyframes kepFar   { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-3px,0)} }
.kepClose { animation: kepClose 2s ease-in-out infinite; }
.kepFar   { animation: kepFar   2s ease-in-out .5s infinite; }

.ssStretch { animation: ssStretchKf 2s ease-in-out infinite alternate; transform-origin: center; }
@keyframes ssStretchKf { from { transform: scaleX(1); } to { transform: scaleX(1.12); } }
.hookSpring { animation: hookKf 1.8s ease-in-out infinite alternate; transform-origin: 80px 80px; }
@keyframes hookKf { from { transform: translateX(0); } to { transform: translateX(18px); } }
.shearBlock { animation: shearKf 2s ease-in-out infinite alternate; transform-origin: 185px 125px; }
@keyframes shearKf { from { transform: skewX(0deg); } to { transform: skewX(10deg); } }
.bulkCircle { animation: bulkKf 2.2s ease-in-out infinite alternate; transform-origin: 290px 90px; }
@keyframes bulkKf { from { transform: scale(1); } to { transform: scale(0.84); } }
.beamLoad { animation: beamKf 2s ease-in-out infinite alternate; transform-origin: 180px 50px; }
@keyframes beamKf { from { transform: translateY(0); } to { transform: translateY(6px); } }

.archBlock { animation: archKf 2.4s ease-in-out infinite alternate; transform-origin: 180px 95px; }
@keyframes archKf { from { transform: translateY(0); } to { transform: translateY(-18px); } }
.viscSphere { animation: viscKf 2.8s ease-in infinite; transform-origin: 80px 60px; }
@keyframes viscKf { 0% { transform: translateY(-30px); } 60% { transform: translateY(30px); } 100% { transform: translateY(30px); } }
.surfPull { animation: surfKf 2s ease-in-out infinite alternate; transform-origin: 180px 75px; }
@keyframes surfKf { from { transform: scale(1); } to { transform: scaleX(0.85); } }
.bernFlow { animation: bernKf 1.6s ease-in-out infinite; }
@keyframes bernKf { 0% { opacity: 1; transform: translateX(0); } 100% { opacity: 0.3; transform: translateX(30px); } }

.heatFlow { animation: heatKf 1.4s ease-in-out infinite; }
@keyframes heatKf { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
.thermalExpand { animation: thermKf 2s ease-in-out infinite alternate; transform-origin: 40px 130px; }
@keyframes thermKf { from { transform: scaleX(1); } to { transform: scaleX(1.15); } }
.caloHeat { animation: caloKf 1.6s ease-in-out infinite; }
@keyframes caloKf { 0%,100% { opacity: 1; transform: translateX(0); } 50% { opacity: 0.4; transform: translateX(10px); } }
.htConduct { animation: htKf 1.8s ease-in-out infinite; }
@keyframes htKf { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
.nclCurve { animation: nclKf 3s ease-out infinite; stroke-dasharray: 400; stroke-dashoffset: 400; }
@keyframes nclKf { 0% { stroke-dashoffset: 400; } 70%,100% { stroke-dashoffset: 0; } }

.flQArrow { animation: flQKf 2s ease-in-out infinite; }
.flQArrow { animation: flQKf 2s ease-in-out infinite; }
@keyframes flQKf { 0%,100% { opacity: 1; transform: translateX(0); } 50% { opacity: 0.4; transform: translateX(8px); } }
.bernFlow { animation: bernKf 1.6s ease-in-out infinite; }
@keyframes bernKf { 0%,100% { transform: scaleX(1); } 50% { transform: scaleX(1.3); } }
.viscLayer { animation: viscKf 2.5s ease-in-out infinite; }
@keyframes viscKf { 0%,100% { opacity: 0.9; } 50% { opacity: 0.3; } }
.stTension { animation: stKf 2s ease-in-out infinite; }
@keyframes stKf { 0%,100% { r: 3; } 50% { r: 5; } }

.ch-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.ch-toggle:hover { background: var(--vp-c-bg-mute); color: var(--pc-visual); border-color: var(--pc-visual); }
.ch-arrow { transition: transform 0.22s ease; }
.ch-arrow.open { transform: rotate(90deg); }

.ch-tabs {
  display: flex;
  gap: 4px;
  padding: 6px 8px 0;
  background: var(--vp-c-bg-soft);
  margin-bottom: 4px;
}
.ch-tab {
  padding: 4px 14px;
  font-size: 0.78rem;
  font-weight: 600;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px 6px 0 0;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.ch-tab.active {
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}
.ch-tab:hover:not(.active) {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.ch-fullscreen-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-left: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.ch-fullscreen-btn:hover {
  background: var(--vp-c-bg-mute);
  color: var(--pc-visual);
  border-color: var(--pc-visual);
}

.ch-card--full {
  position: fixed !important;
  inset: 0 !important;
  z-index: 200;
  margin: 0 !important;
  border-radius: 0 !important;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.ch-card--full .ch-body {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.ch-card--full canvas,
.ch-card--full .wasm-hero {
  flex: 1;
  width: 100% !important;
}
.visualise-empty {
  padding: 1.5rem 1rem;
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   