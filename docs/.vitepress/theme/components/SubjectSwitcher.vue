<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'
import { SUBJECTS_LIST, SITE } from '../subjects'
import SubjectIcon from './SubjectIcon.vue'

const props = defineProps<{ activeSubjectId?: string }>()
const { isDark } = useData()

const open = ref(false)
const wrapRef = ref<HTMLElement | null>(null)

function toggle() { open.value = !open.value }

function handleOutside(e: MouseEvent | TouchEvent) {
  if (wrapRef.value && !wrapRef.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleOutside)
  document.addEventListener('touchstart', handleOutside, { passive: true })
})
onUnmounted(() => {
  document.removeEventListener('mousedown', handleOutside)
  document.removeEventListener('touchstart', handleOutside)
})
</script>

<template>
  <div class="ss-wrap" ref="wrapRef">

    <!-- Waffle trigger button -->
    <button
      class="ss-btn"
      :class="{ open }"
      @click="toggle"
      :aria-expanded="open"
      aria-haspopup="true"
      aria-label="Switch subject"
    >
      <svg viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="0" y="0" width="5.5" height="5.5" rx="1"/>
        <rect x="8" y="0" width="5.5" height="5.5" rx="1"/>
        <rect x="0" y="8" width="5.5" height="5.5" rx="1"/>
        <rect x="8" y="8" width="5.5" height="5.5" rx="1"/>
      </svg>
    </button>

    <!-- Dropdown list -->
    <Transition name="ss-pop">
      <div v-if="open" class="ss-dropdown" role="menu">
        <p class="ss-label">Subjects</p>
        <a
          v-for="s in SUBJECTS_LIST"
          :key="s.id"
          :href="s.status === 'coming-soon' ? undefined : s.path"
          class="ss-row"
          :class="{
            'ss-active': s.id === activeSubjectId,
            'ss-soon':   s.status === 'coming-soon'
          }"
          role="menuitem"
          :aria-disabled="s.status === 'coming-soon'"
          @click="s.status !== 'coming-soon' && (open = false)"
        >
          <SubjectIcon :subjectId="s.id" :size="18" class="ss-icon" />
          <span class="ss-name">{{ s.name }}</span>
          <!-- Active check takes priority; show "soon" only when not active -->
          <span v-if="s.id === activeSubjectId" class="ss-check">✓</span>
          <span v-else-if="s.status === 'coming-soon'" class="ss-badge">soon</span>
        </a>
        <!-- Divider + home link -->
        <div class="ss-divider"></div>
        <a href="/" class="ss-row ss-home" role="menuitem" @click="open = false">
          <svg class="ss-home-icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
          </svg>
          <span class="ss-name">{{ SITE.name }}</span>
        </a>
        <!-- Divider + Appearance toggle -->
        <div class="ss-divider"></div>
        <button class="ss-row ss-appear" role="menuitem" @click="isDark = !isDark">
          <!-- Sun icon (shown in dark mode → switch to light) -->
          <svg v-if="isDark" class="ss-appear-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm4.22 2.78a1 1 0 0 1 0 1.42l-.71.7a1 1 0 1 1-1.41-1.41l.7-.71a1 1 0 0 1 1.42 0ZM17 9a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1Zm-2.78 5.22a1 1 0 0 1-1.42 0l-.7-.71a1 1 0 1 1 1.41-1.41l.71.7a1 1 0 0 1 0 1.42ZM11 16a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0v1Zm-5.22-1.78a1 1 0 0 1 0-1.42l.71-.7a1 1 0 1 1 1.41 1.41l-.7.71a1 1 0 0 1-1.42 0ZM4 11a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2H4Zm1.78-6.22a1 1 0 0 1 1.42 0l.7.71A1 1 0 1 1 6.49 6.9l-.71-.7a1 1 0 0 1 0-1.42ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
          </svg>
          <!-- Moon icon (shown in light mode → switch to dark) -->
          <svg v-else class="ss-appear-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586Z"/>
          </svg>
          <span class="ss-name">{{ isDark ? 'Light mode' : 'Dark mode' }}</span>
        </button>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
/* ── Wrapper ── */
.ss-wrap {
  position: relative;
  flex-shrink: 0;
}

/* ── Waffle button ── */
.ss-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 7px;
  border: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-3);
  cursor: pointer;
  transition: border-color 0.12s, color 0.12s, background 0.12s;
  -webkit-tap-highlight-color: transparent;
}
.ss-btn svg { width: 13px; height: 13px; }
.ss-btn:hover,
.ss-btn.open {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 8%, transparent);
}

/* ── Dropdown ── */
.ss-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  /* Never wider than viewport minus safe margins */
  width: 176px;
  max-width: calc(100vw - 24px);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.06);
  padding: 6px 6px 4px;
  z-index: 300;
  /* Keep inside viewport on the right edge */
  transform-origin: top right;
}

/* ── Section label ── */
.ss-label {
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3);
  margin: 0 0 4px 6px;
}

/* ── Subject row ── */
.ss-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
  height: 40px;           /* 40px — comfortable touch target */
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: background 0.12s;
  -webkit-tap-highlight-color: transparent;
}
.ss-row:hover:not(.ss-soon) {
  background: var(--vp-c-bg-soft);
}
.ss-row.ss-active {
  background: color-mix(in srgb, var(--vp-c-brand-1) 10%, var(--vp-c-bg));
}
.ss-row.ss-soon {
  opacity: 0.42;
  cursor: default;
  pointer-events: none;
}

.ss-icon { line-height: 1; flex-shrink: 0; }
.ss-divider {
  height: 1px;
  background: var(--vp-c-divider);
  margin: 4px 0;
}
.ss-home { color: var(--vp-c-text-2); }
.ss-home:hover { background: var(--vp-c-bg-soft); color: var(--vp-c-brand-1); }
.ss-home-icon { width: 14px; height: 14px; flex-shrink: 0; }
.ss-appear {
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--vp-c-text-2);
  text-align: left;
}
.ss-appear:hover { background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); }
.ss-appear-icon { width: 15px; height: 15px; flex-shrink: 0; }
.ss-name { font-size: 0.82rem; font-weight: 600; flex: 1; }

.ss-badge {
  font-size: 0.56rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
  border: 1px solid var(--vp-c-divider);
  padding: 1px 4px;
  border-radius: 4px;
  flex-shrink: 0;
}
.ss-check {
  font-size: 0.72rem;
  color: var(--vp-c-brand-1);
  font-weight: 700;
  flex-shrink: 0;
}

/* ── Transition ── */
.ss-pop-enter-active,
.ss-pop-leave-active {
  transition: opacity 0.12s ease, transform 0.12s ease;
}
.ss-pop-enter-from,
.ss-pop-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-4px);
}
</style>
