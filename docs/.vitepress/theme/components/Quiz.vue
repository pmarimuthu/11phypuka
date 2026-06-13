<script setup lang="ts">
import { ref, computed } from 'vue'

interface Option {
  text: string
  correct?: boolean
}

const props = defineProps<{
  question: string
  options: Option[]
  explanation: string
}>()

const chosen = ref<number | null>(null)
const answered = computed(() => chosen.value !== null)

function pick(i: number) {
  if (answered.value) return // lock after first answer
  chosen.value = i
}

function stateFor(i: number): '' | 'correct' | 'wrong' {
  if (!answered.value) return ''
  if (props.options[i].correct) return 'correct'
  if (i === chosen.value) return 'wrong'
  return ''
}

const isCorrect = computed(
  () => chosen.value !== null && !!props.options[chosen.value]?.correct
)

const letter = (i: number) => String.fromCharCode(65 + i) // A, B, C, D
</script>

<template>
  <div class="pc-quiz">
    <div class="pc-quiz-head">
      <span class="pc-qmark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.1 9.3a3 3 0 0 1 5.8 1c0 2-3 2.7-3 2.7" />
          <line x1="12" y1="17.5" x2="12.01" y2="17.5" />
        </svg>
      </span>
      <h4>Quick check</h4>
    </div>

    <p class="pc-q">{{ question }}</p>

    <ul>
      <li v-for="(opt, i) in options" :key="i">
        <button
          class="pc-opt"
          :class="stateFor(i)"
          :disabled="answered"
          @click="pick(i)"
        >
          <span class="pc-badge">{{ letter(i) }}</span>
          <span class="pc-opt-text">{{ opt.text }}</span>

          <span v-if="stateFor(i) === 'correct'" class="pc-opt-ico" aria-hidden="true">
            <svg class="pc-check" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <span v-else-if="stateFor(i) === 'wrong'" class="pc-opt-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                 stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
        </button>
      </li>
    </ul>

    <div v-if="answered" class="pc-explain">
      <strong>{{ isCorrect ? 'Correct! ' : 'Not quite. ' }}</strong>
      <span>{{ explanation }}</span>
    </div>
  </div>
</template>
