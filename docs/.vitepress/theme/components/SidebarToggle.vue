<!--
  SidebarToggle — matches claude.ai sidebar close/open button
  ─────────────────────────────────────────────────────────
  • 24×24px icon-only button, no border, ghost-fill on hover
  • When open : sits at top-right of the sidebar panel
  • When closed: slides to the left edge of the content area
  • Tooltip    : "Close sidebar  Ctrl+."  /  "Open sidebar  Ctrl+."
  • Keyboard   : Ctrl+. toggles sidebar (desktop only ≥960px)
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

  // Ctrl+. keyboard shortcut — desktop only
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
    :class="{ 'sbt--closed': !open }"
    :title="open ? 'Close sidebar  Ctrl+.' : 'Open sidebar  Ctrl+.'"
    :aria-label="open ? 'Close sidebar' : 'Open sidebar'"
    @click.stop="toggle"
  >
    <!--
      Sidebar panel icon — same concept as claude.ai:
      Left bar (the sidebar) + content lines + directional arrow chevron.
      Arrow faces LEFT (into left bar) when open → "collapse left"
      Arrow faces RIGHT when closed → "expand left"
    -->
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Outer panel frame -->
      <rect x="1.5" y="1.5" width="13" height="13" rx="2"
        stroke="currentColor" stroke-width="1.25"/>
      <!-- Left sidebar bar (filled to indicate the sidebar panel) -->
      <rect x="1.5" y="1.5" width="4.5" height="13" rx="2"
        fill="currentColor" opacity="0.9"/>
      <!-- Divider line between sidebar and content -->
      <line x1="6" y1="1.5" x2="6" y2="14.5"
        stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
      <!-- Chevron arrow — flips direction based on open/closed -->
      <path
        :d="open
          ? 'M 9.5 5.5 L 7.5 8 L 9.5 10.5'
          : 'M 7.5 5.5 L 9.5 8 L 7.5 10.5'"
        stroke="currentColor" stroke-width="1.25"
        stroke-linecap="round" stroke-linejoin="round"
        fill="none"/>
    </svg>
  </button>
</template>

<style scoped>
.sbt {
  /* Fixed, sits inside the sidebar at its top-right corner when open */
  position: fixed;
  top: calc(var(--vp-nav-height, 64px) + 8px);
  left: calc(var(--pc-sb-w, 272px) - 32px);   /* right edge of sidebar */
  z-index: 200;

  display: none;   /* mobile: hidden */

  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-3);
  cursor: pointer;

  /* Slide left when sidebar closes; same easing as sidebar itself */
  transition:
    left     0.28s cubic-bezier(0.4, 0, 0.2, 1),
    color    0.12s ease,
    background 0.12s ease;
}

/* Ghost fill on hover — matches claude.ai */
.sbt:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

/* When sidebar is closed: slide button to left edge of content */
.sbt--closed {
  left: 8px;
}

.sbt svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Desktop only — sidebar only exists ≥960px */
@media (min-width: 960px) {
  .sbt { display: flex; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .sbt { transition: color 0.12s, background 0.12s; }
}
</style>
