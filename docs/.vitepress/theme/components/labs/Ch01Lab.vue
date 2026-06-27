<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{ type: string }>()
const input = ref('')
const result = ref('')

const sigFigConfig = { values: ['0.00405', '12.30', '100.0', '0.0050', '2.500'], answer: [3, 4, 4, 2, 4] }
const sigIdx = ref(0)
const sigAnswer = ref('')
const sigResult = computed(() => {
  if (!sigAnswer.value) return ''
  return Number(sigAnswer.value) === sigFigConfig.answer[sigIdx.value] ? '✅ Correct!' : `❌ Try again (hint: count non-zero + trapped zeros + trailing zeros after decimal)`
})

const dimOptions = ['velocity', 'force', 'energy', 'pressure']
const dimIdx = ref(0)
const dimAnswers: Record<string, string> = { velocity: 'LT⁻¹', force: 'MLT⁻²', energy: 'ML²T⁻²', pressure: 'ML⁻¹T⁻²' }
const dimInput = ref('')
const dimResult = computed(() => {
  if (!dimInput.value) return ''
  return dimInput.value.trim().replace(/\s/g,'') === dimAnswers[dimOptions[dimIdx.value]].replace(/\s/g,'') ? '✅ Correct!' : `❌ Answer: ${dimAnswers[dimOptions[dimIdx.value]]}`
})

const dimAnalysisFormulas = ['v = u + at', 's = ut + ½at²', 'KE = ½mv²', 'F = ma']
const daIdx = ref(0)
const daInput = ref('')
const daAnswers = ['LHS: [v]=LT⁻¹ RHS: LT⁻¹+(LT⁻²)T=LT⁻¹ ✅', 'LHS: [s]=L RHS: LT⁻¹·T+LT⁻²·T²=L ✅', 'LHS: ML²T⁻² RHS: M(LT⁻¹)²=ML²T⁻² ✅', 'LHS: MLT⁻² RHS: M·LT⁻²=MLT⁻² ✅']
</script>

<template>
  <div class="lab">
    <template v-if="type === 'significant-figures'">
      <h3>🎯 Significant Figures Lab</h3>
      <p>How many significant figures in <strong>{{ sigFigConfig.values[sigIdx] }}</strong>?</p>
      <div class="row"><input v-model="sigAnswer" type="number" min="1" max="9" placeholder="Count" /><span>{{ sigResult }}</span></div>
      <div class="row"><button @click="sigIdx=(sigIdx+1)%sigFigConfig.values.length;sigAnswer=''">Next number →</button></div>
      <table><tr><th>Number</th><th>Sig Figs</th><th>Rule</th></tr>
        <tr><td>0.00405</td><td>3</td><td>Leading zeros don't count</td></tr>
        <tr><td>12.30</td><td>4</td><td>Trailing zero after decimal counts</td></tr>
        <tr><td>100.0</td><td>4</td><td>Decimal point makes zeros significant</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'dimensions'">
      <h3>📐 Dimensions Lab</h3>
      <p>Write the dimensional formula for: <strong>{{ dimOptions[dimIdx] }}</strong></p>
      <p class="hint">Use M, L, T with superscripts e.g. ML²T⁻²</p>
      <div class="row"><input v-model="dimInput" placeholder="e.g. LT⁻¹" /><span>{{ dimResult }}</span></div>
      <div class="row"><button @click="dimIdx=(dimIdx+1)%dimOptions.length;dimInput=''">Next →</button></div>
      <table><tr><th>Quantity</th><th>Formula</th></tr>
        <tr v-for="(q,i) in dimOptions" :key="i"><td>{{ q }}</td><td>{{ dimAnswers[q] }}</td></tr>
      </table>
    </template>
    <template v-else-if="type === 'dimensional-analysis'">
      <h3>⚖️ Dimensional Analysis Lab</h3>
      <p>Check if <strong>{{ dimAnalysisFormulas[daIdx] }}</strong> is dimensionally correct.</p>
      <div class="row"><input v-model="daInput" placeholder="Write LHS and RHS dimensions" /></div>
      <div class="result">{{ daAnswers[daIdx] }}</div>
      <div class="row"><button @click="daIdx=(daIdx+1)%dimAnalysisFormulas.length;daInput=''">Next formula →</button></div>
    </template>
  </div>
</template>

<style scoped>
.lab { padding: 1rem; font-size: 0.9rem; }
h3 { margin: 0 0 0.75rem; font-size: 1rem; }
p { margin: 0 0 0.5rem; }
.hint { color: var(--vp-c-text-3); font-size: 0.8rem; }
.row { display: flex; gap: 0.5rem; align-items: center; margin: 0.5rem 0; flex-wrap: wrap; }
input { padding: 6px 8px; border: 1px solid var(--vp-c-divider); border-radius: 6px; background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); width: 120px; }
button { padding: 6px 14px; border-radius: 6px; border: none; background: var(--vp-c-brand-1); color: #fff; cursor: pointer; font-size: 0.82rem; }
.result { background: var(--vp-c-bg-soft); border-radius: 8px; padding: 8px 12px; margin: 0.5rem 0; font-family: monospace; font-size: 0.82rem; }
table { border-collapse: collapse; width: 100%; margin-top: 0.75rem; font-size: 0.82rem; }
th, td { border: 1px solid var(--vp-c-divider); padding: 6px 8px; text-align: left; }
th { background: var(--vp-c-bg-alt); }
</style>
