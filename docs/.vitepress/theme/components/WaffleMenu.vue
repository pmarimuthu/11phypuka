<!--
  WaffleMenu — 9-dot grid button that opens a menu panel.
  Used on subject pages (HomeLanding) and chapter/lesson pages (Layout navbar).
-->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { SUBJECTS_LIST, SITE } from '../subjects'
import SubjectIcon from './SubjectIcon.vue'

const LS_DARK = 'vitepress-theme-appearance'

const menuOpen = ref(false)
const menuRef  = ref<HTMLElement | null>(null)

function toggleMenu() { menuOpen.value = !menuOpen.value }

function onClickOutside(e: MouseEvent) {
  if (menuRef.value && !menuRef.value.contains(e.target as Node)) {
    menuOpen.value = false
  }
}

onMounted(() => document.addEventListener('mousedown', onClickOutside))
onUnmounted(() => document.removeEventListener('mousedown', onClickOutside))

// Dark mode
const isDark = ref(
  typeof document !== 'undefined'
    ? document.documentElement.classList.contains('dark')
    : false
)

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem(LS_DARK, isDark.value ? 'dark' : 'light')
}

function goToSubject(path: string | undefined, status: string) {
  if (!path || status === 'coming-soon') return
  menuOpen.value = false
  window.location.href = path
}
</script>

<template>
  <div class="wm-wrap" ref="menuRef">
    <button
      class="wm-btn"
      :class="{ open: menuOpen }"
      aria-label="Menu"
      @click="toggleMenu"
    >
      <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="3"  cy="3"  r="1.2"/>
        <circle cx="8"  cy="3"  r="1.2"/>
        <circle cx="13" cy="3"  r="1.2"/>
        <circle cx="3"  cy="8"  r="1.2"/>
        <circle cx="8"  cy="8"  r="1.2"/>
        <circle cx="13" cy="8"  r="1.2"/>
        <circle cx="3"  cy="13" r="1.2"/>
        <circle cx="8"  cy="13" r="1.2"/>
        <circle cx="13" cy="13" r="1.2"/>
      </svg>
    </button>

    <div v-if="menuOpen" class="wm-panel">
      <!-- Subjects -->
      <p class="wm-section">Subjects</p>
      <button
        v-for="s in SUBJECTS_LIST"
        :key="s.id"
        class="wm-item"
        :class="{ 'wm-item--soon': s.status === 'coming-soon' }"
        @click="goToSubject(s.path, s.status)"
      >
        <SubjectIcon :subjectId="s.id" :size="16" />
        <span>{{ s.name }}</span>
        <span v-if="s.status === 'coming-soon'" class="wm-badge">soon</span>
        <span v-else class="wm-check">✓</span>
      </button>

      <div class="wm-divider" />

      <!-- Home -->
      <a href="/" class="wm-item" @click="menuOpen = false">
        <span class="wm-emoji">📚</span>
        <span>{{ SITE.name }}</span>
      </a>

      <!-- Dark mode -->
      <button class="wm-item" @click="toggleDark">
        <span class="wm-emoji">{{ isDark ? '☀️' : '🌙' }}</span>
        <span>{{ isDark ? 'Light mode' : 'Dark mode' }}</span>
        <span class="wm-toggle" :class="{ on: isDark }"></span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.wm-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.wm-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.wm-btn:hover,
.wm-btn.open {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}
.wm-btn svg { width: 16px; height: 16px; }

.wm-panel {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 220px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 999;
}

.wm-section {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--vp-c-text-3);
  padding: 4px 8px 2px;
  margin: 0;
}

.wm-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-text-1);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  transition: background 0.12s;
}
.wm-item:hover { background: var(--vp-c-bg-soft); }
.wm-item--soon { opacity: 0.45; cursor: default; }

.wm-emoji { font-size: 1rem; line-height: 1; }

.wm-check {
  margin-left: auto;
  font-size: 0.8rem;
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

.wm-badge {
  margin-left: auto;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-3);
  border: 1px solid var(--vp-c-divider);
  padding: 1px 5px;
  border-radius: 5px;
}

.wm-divider {
  height: 1px;
  background: var(--vp-c-divider);
  margin: 4px 0;
}

.wm-toggle {
  margin-left: auto;
  width: 32px;
  height: 18px;
  border-radius: 9px;
  background: var(--vp-c-divider);
  position: relative;
  flex-shrink: 0;
  transition: background 0.2s;
}
.wm-toggle::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.2s;
}
.wm-toggle.on { background: var(--vp-c-brand-1); }
.wm-toggle.on::after { transform: translateX(14px); }
</style>
