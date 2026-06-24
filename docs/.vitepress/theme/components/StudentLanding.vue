<script setup lang="ts">
import { ref, computed } from 'vue'
import { SUBJECTS_LIST, SITE } from '../subjects'
import SubjectIcon from './SubjectIcon.vue'

const classes = [
  { id: 'c11', label: 'Class 11' },
  { id: 'c12', label: 'Class 12', soon: true },
]

// All subjects from config — map to selector shape
const subjectsByClass: Record<string, typeof SUBJECTS_LIST> = {
  c11: SUBJECTS_LIST,
  c12: [],
}

const selectedClass   = ref<string | null>(null)
const selectedSubject = ref<string | null>(null)

const currentSubjects = computed(() =>
  selectedClass.value ? (subjectsByClass[selectedClass.value] ?? SUBJECTS_LIST) : SUBJECTS_LIST
)

// Enabled only when BOTH class and subject are explicitly chosen
const startPath = computed(() => {
  if (!selectedClass.value || !selectedSubject.value) return null
  const sub = currentSubjects.value.find(s => s.id === selectedSubject.value)
  return sub?.path ?? null
})

function selectClass(id: string) {
  if (selectedClass.value === id) {
    selectedClass.value = null   // toggle off
    selectedSubject.value = null
  } else {
    selectedClass.value = id
    selectedSubject.value = null // reset subject on class change
  }
}

function go() {
  if (startPath.value) window.location.href = startPath.value
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
          <!-- Book with atom orbit — SVG logo -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="sl-svg-logo">
            <!-- Book body -->
            <rect x="10" y="18" width="26" height="34" rx="3" fill="url(#bookGrad)" opacity="0.95"/>
            <rect x="14" y="22" width="18" height="2.5" rx="1.2" fill="white" opacity="0.6"/>
            <rect x="14" y="27" width="14" height="2" rx="1" fill="white" opacity="0.4"/>
            <rect x="14" y="32" width="16" height="2" rx="1" fill="white" opacity="0.4"/>
            <!-- Book spine -->
            <rect x="8" y="18" width="4" height="34" rx="2" fill="url(#spineGrad)"/>
            <!-- Atom nucleus -->
            <circle cx="54" cy="36" r="4" fill="url(#atomGrad)"/>
            <!-- Orbit 1 -->
            <ellipse cx="54" cy="36" rx="14" ry="6" stroke="url(#orbitGrad1)" stroke-width="1.8" fill="none" transform="rotate(-30 54 36)"/>
            <!-- Orbit 2 -->
            <ellipse cx="54" cy="36" rx="14" ry="6" stroke="url(#orbitGrad2)" stroke-width="1.8" fill="none" transform="rotate(30 54 36)"/>
            <!-- Orbit 3 (horizontal) -->
            <ellipse cx="54" cy="36" rx="14" ry="6" stroke="url(#orbitGrad3)" stroke-width="1.8" fill="none"/>
            <!-- Electron dots -->
            <circle cx="68" cy="36" r="2.2" fill="#06b6d4"/>
            <circle cx="47" cy="43" r="2.2" fill="#8b5cf6"/>
            <circle cx="47" cy="29" r="2.2" fill="#10b981"/>
            <!-- Connector line book→atom -->
            <line x1="36" y1="35" x2="46" y2="36" stroke="url(#connGrad)" stroke-width="1.5" stroke-dasharray="2 2"/>
            <defs>
              <linearGradient id="bookGrad" x1="10" y1="18" x2="36" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#3b82f6"/>
                <stop offset="100%" stop-color="#6366f1"/>
              </linearGradient>
              <linearGradient id="spineGrad" x1="8" y1="18" x2="12" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#2563eb"/>
                <stop offset="100%" stop-color="#4f46e5"/>
              </linearGradient>
              <linearGradient id="atomGrad" x1="50" y1="32" x2="58" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#f59e0b"/>
                <stop offset="100%" stop-color="#ef4444"/>
              </linearGradient>
              <linearGradient id="orbitGrad1" x1="40" y1="30" x2="68" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.4"/>
              </linearGradient>
              <linearGradient id="orbitGrad2" x1="40" y1="30" x2="68" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.4"/>
              </linearGradient>
              <linearGradient id="orbitGrad3" x1="40" y1="30" x2="68" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#10b981" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.4"/>
              </linearGradient>
              <linearGradient id="connGrad" x1="36" y1="35" x2="46" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#6366f1" stop-opacity="0.6"/>
                <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="sl-logo-text">
          <span class="sl-logo-name">Student Companion</span>
          <span class="sl-logo-tagline">Learn smarter, not harder</span>
        </div>
      </div>

      <!-- ── CARD ── -->
      <div class="sl-card">
        <p class="sl-card-label">Select your class</p>
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
.sl-svg-logo {
  width: 72px;
  height: 72px;
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
