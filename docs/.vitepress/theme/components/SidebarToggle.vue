<!--
  SidebarToggle — lives in the navbar's left slot (#nav-bar-title-before)
  ────────────────────────────────────────────────────────────────────────
  • Always in the same spot — no sliding / fixed-position tricks
  • Desktop only (≥960px); VitePress hamburger handles mobile
  • Tooltip: "Close sidebar  Ctrl+." / "Open sidebar  Ctrl+."
  • Keyboard: Ctrl+. (or ⌘+.) toggles sidebar
-->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const open = ref(true)

function applyState(isOpen: boolean, animate: boolean) {
  const body = document.body
  if (animate) body.classList.add('pc-sb-anim')
  body.classList.toggle('pc-sb-closed', !isOpen)
}

onMounted(() => {
  const saved = localStorage.getItem('pc-sidebar')
  if (saved === 'closed') {
    open.value = false
    applyState(false, false)
  }
  window.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
})

function onKey(e: KeyboardEvent) {
  if ((e.ctrlKey || e.metaKey) && e.key === '.') {
    e.preventDefault()
    toggle()
  }
}

function toggle() {
  open.value = !open.value
  applyState(open.value, true)
  localStorage.setItem('pc-sidebar', open.value ? 'open' : 'closed')
}
</script>

<template>
  <button
    class="sbt"
    :title="open ? 'Close sidebar  Ctrl+.' : 'Open sidebar  Ctrl+.'"
    :aria-label="open ? 'Close sidebar' : 'Open sidebar'"
    @click.stop="toggle"
  >
    <!-- 9-dot grid icon -->
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
</template>

<style scoped>
.sbt {
  /* Inline flex item — sits naturally in the navbar flow */
  display: none;          /* hidden on mobile */
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 32px;
  height: 32px;
  margin-right: 4px;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease;
}

.sbt:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-default-soft);
}

.sbt svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Desktop only — sidebar exists only ≥960px */
@media (min-width: 960px) {
  .sbt { display: flex; }
}

@media (prefers-reduced-motion: reduce) {
  .sbt { transition: none; }
}
</style>
