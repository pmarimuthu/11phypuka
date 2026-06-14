<script setup lang="ts">
import { ref, onMounted } from 'vue'

const open = ref(true)

function applyState(isOpen: boolean, animate: boolean) {
  const body = document.body
  if (animate) body.classList.add('pc-sb-anim')
  if (isOpen) {
    body.classList.remove('pc-sb-closed')
  } else {
    body.classList.add('pc-sb-closed')
  }
}

onMounted(() => {
  const saved = localStorage.getItem('pc-sidebar')
  if (saved === 'closed') {
    open.value = false
    applyState(false, false) // no animation on cold load
  }
})

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
    :title="open ? 'Close sidebar' : 'Open sidebar'"
    :aria-label="open ? 'Close sidebar' : 'Open sidebar'"
    @click.stop="toggle"
  >
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- panel bar: blue=open, muted=closed -->
      <rect class="sbt-bar" x="2" y="3" width="3.5" height="14" rx="1"/>
      <line x1="8.5" y1="6.5"  x2="18" y2="6.5"  stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="8.5" y1="10"   x2="18" y2="10"    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="8.5" y1="13.5" x2="18" y2="13.5"  stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </button>
</template>

<style scoped>
.sbt {
  /* Fixed so it doesn't depend on VitePress slot rendering */
  position: fixed;
  top: calc(var(--vp-nav-height, 64px) / 2 - 16px);
  left: 8px;
  z-index: 100;

  display: none;           /* hidden on mobile */
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 7px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s,
              left 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}
.sbt:hover {
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}
.sbt svg { width: 17px; height: 17px; }

/* accent bar color */
.sbt-bar { fill: var(--vp-c-brand-1); transition: fill 0.2s; }
.sbt--closed .sbt-bar { fill: var(--vp-c-text-3); }

/* only show on desktop where sidebar exists */
@media (min-width: 960px) {
  .sbt { display: flex; }
}
</style>
