<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { SUBJECTS_LIST, SITE } from '../subjects'
import SubjectIcon from './SubjectIcon.vue'

const LS_CLASS   = 'sc:selectedClass'
const LS_SUBJECT = 'sc:selectedSubject'

const classes = [
  { id: 'c11', label: 'Class 11' },
  { id: 'c12', label: 'Class 12', soon: true },
]

const subjectsByClass: Record<string, typeof SUBJECTS_LIST> = {
  c11: SUBJECTS_LIST,
  c12: [],
}

// Restore last selection, fall back to Class 11 + Physics
const savedClass   = typeof localStorage !== 'undefined' ? localStorage.getItem(LS_CLASS)   : null
const savedSubject = typeof localStorage !== 'undefined' ? localStorage.getItem(LS_SUBJECT) : null

const selectedClass   = ref<string | null>(savedClass   ?? 'c11')
const selectedSubject = ref<string | null>(savedSubject ?? 'physics')

watch(selectedClass,   v => { if (typeof localStorage !== 'undefined') localStorage.setItem(LS_CLASS,   v ?? '') })
watch(selectedSubject, v => { if (typeof localStorage !== 'undefined') localStorage.setItem(LS_SUBJECT, v ?? '') })

const currentSubjects = computed(() =>
  selectedClass.value ? (subjectsByClass[selectedClass.value] ?? SUBJECTS_LIST) : SUBJECTS_LIST
)

const startPath = computed(() => {
  if (!selectedClass.value || !selectedSubject.value) return null
  const sub = currentSubjects.value.find(s => s.id === selectedSubject.value)
  return sub?.path ?? null
})

function selectClass(id: string) {
  if (selectedClass.value === id) {
    selectedClass.value = null
    selectedSubject.value = null
  } else {
    selectedClass.value = id
    selectedSubject.value = null
  }
}

function go() {
  if (startPath.value) window.location.href = startPath.value
}

const isDark = ref(false)
onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})
function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('vitepress-theme-appearance', isDark.value ? 'dark' : 'light')
}

</script>

<template>
  <div class="sl-root">
    <!-- Background orbs -->
    <div class="sl-orb sl-orb1" aria-hidden="true"></div>
    <div class="sl-orb sl-orb2" aria-hidden="true"></div>

    <main class="sl-main">

      <!-- ── LOGO ── -->
      <div class="sl-logo-wrap">
        <div class="sl-logo-mark">
          <span class="sl-logo-emoji">📚</span>
        </div>
        <div class="sl-logo-text">
          <span class="sl-logo-name">Student's Companion</span>
          <span class="sl-logo-tagline">Learn it. Get it. Ace it.</span>
        </div>
      </div>

      <!-- ── CARD ── -->
      <div class="sl-card">
        <div class="sl-row-header">
          <p class="sl-card-label">Select your class</p>
          <button class="sl-dark-toggle" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleDark">
            <svg v-if="isDark" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm4.22 2.78a1 1 0 0 1 0 1.42l-.71.7a1 1 0 1 1-1.41-1.41l.7-.71a1 1 0 0 1 1.42 0ZM17 9a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1Zm-2.78 5.22a1 1 0 0 1-1.42 0l-.7-.71a1 1 0 1 1 1.41-1.41l.71.7a1 1 0 0 1 0 1.42ZM11 16a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0v1Zm-5.22-1.78a1 1 0 0 1 0-1.42l.71-.7a1 1 0 1 1 1.41 1.41l-.7.71a1 1 0 0 1-1.42 0ZM4 11a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2H4Zm1.78-6.22a1 1 0 0 1 1.42 0l.7.71A1 1 0 1 1 6.49 6.9l-.71-.7a1 1 0 0 1 0-1.42ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
            </svg>
            <svg v-else viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586Z"/>
            </svg>
          </button>
        </div>
        <div class="sl-pill-group">
          <button
            v-for="c in classes"
            :key="c.id"
            class="sl-pill"
            :class="{ active: selectedClass === c.id, soon: c.soon }"
            :disabled="c.soon"
            @click="selectClass(c.id)"
          >
            {{ c.label }}
            <span v-if="c.soon" class="sl-soon">soon</span>
          </button>
        </div>

        <p class="sl-card-label">Select your subject</p>
        <div class="sl-subject-grid">
          <button
            v-for="s in currentSubjects"
            :key="s.id"
            class="sl-subj-btn"
            :class="{ active: selectedSubject === s.id, soon: s.status === 'coming-soon' }"
            @click="selectedSubject = selectedSubject === s.id ? null : s.id"
          >
            <SubjectIcon :subjectId="s.id" :size="28" />
            <span class="sl-subj-label">{{ s.name }}</span>
            <span v-if="s.status === 'coming-soon'" class="sl-soon">soon</span>
          </button>
        </div>

        <button class="sl-start-btn" :disabled="!startPath" @click="go">
          Start Learning →
        </button>

        <p class="sl-board-note">NCERT · CBSE · Karnataka PU Board · JEE · KCET</p>
      </div>

    </main>

    <footer class="sl-footer">© {{ SITE.copyrightYear }} {{ SITE.name }} · {{ SITE.copyrightSuffix }}</footer>
  </div>
</template>

<style scoped>
/* ── ROOT ── */
.sl-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  position: relative;
  overflow: hidden;
  padding: 24px 16px 60px;
  font-family: system-ui, -apple-system, sans-serif;
}

/* ── BACKGROUND ORBS ── */
.sl-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;
  pointer-events: none;
}
.sl-orb1 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, #3b82f6, transparent);
  top: -120px; left: -100px;
}
.sl-orb2 {
  width: 360px; height: 360px;
  background: radial-gradient(circle, #8b5cf6, transparent);
  bottom: -80px; right: -80px;
}

/* ── MAIN ── */
.sl-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  width: 100%;
  max-width: 440px;
  position: relative;
  z-index: 1;
}

/* ── LOGO ── */
.sl-logo-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.sl-logo-mark {
  width: 96px;
  height: 96px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(59,130,246,0.15), 0 2px 8px rgba(0,0,0,0.08);
}
.sl-logo-emoji {
  font-size: 48px;
  line-height: 1;
}
.sl-logo-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.sl-logo-name {
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--vp-c-text-1);
}
.sl-logo-tagline {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  font-weight: 500;
}

/* ── CARD ── */
.sl-card {
  width: 100%;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  padding: 28px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
}
.sl-card-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--vp-c-text-3);
  margin: 4px 0 0;
}

/* ── CLASS ROW HEADER ── */
.sl-row-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0 0;
}
.sl-row-header .sl-card-label { margin: 0; }
.sl-dark-toggle {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.15s, background 0.15s;
  flex-shrink: 0;
}
.sl-dark-toggle:hover { color: var(--vp-c-text-1); background: var(--vp-c-bg-alt); }
.sl-dark-toggle svg { width: 14px; height: 14px; }

/* ── CLASS PILLS ── */
.sl-pill-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.sl-pill {
  padding: 7px 18px;
  border-radius: 20px;
  border: 2px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s, background 0.15s;
  display: flex;
  align-items: center;
  gap: 6px;
}
.sl-pill.active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 8%, var(--vp-c-bg));
}
.sl-pill.soon { opacity: 0.45; cursor: not-allowed; }

/* ── SUBJECT GRID ── */
.sl-subject-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.sl-subj-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 2px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  text-align: left;
  position: relative;
}
.sl-subj-btn.active {
  border-color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 8%, var(--vp-c-bg));
}
.sl-subj-btn.soon { opacity: 0.75; }   /* selectable — badge conveys "coming soon" */
.sl-subj-icon { font-size: 1.3rem; line-height: 1; }
.sl-subj-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

/* ── SOON BADGE ── */
.sl-soon {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-3);
  border: 1px solid var(--vp-c-divider);
  padding: 1px 5px;
  border-radius: 6px;
  margin-left: auto;
}

/* ── START BUTTON ── */
.sl-start-btn {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: none;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  cursor: pointer;
  margin-top: 8px;
  transition: opacity 0.15s, transform 0.15s;
}
.sl-start-btn:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
.sl-start-btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* ── BOARD NOTE ── */
.sl-board-note {
  font-size: 0.68rem;
  color: var(--vp-c-text-3);
  text-align: center;
  margin: 0;
}

/* ── FOOTER ── */
.sl-footer {
  position: absolute;
  bottom: 20px;
  font-size: 0.68rem;
  color: var(--vp-c-text-3);
}

/* ── DARK MODE orb tweak ── */
:root.dark .sl-orb { opacity: 0.12; }
</style>
