<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const { Layout } = DefaultTheme
const route = useRoute()

let observer = null
let isClosing = false

// Collapse all level-0 sidebar groups except the one that contains an active link
function collapseOthers() {
  if (isClosing) return
  const sidebar = document.querySelector('.VPSidebar')
  if (!sidebar) return

  isClosing = true
  sidebar.querySelectorAll('.VPSidebarItem.level-0.has-children').forEach(group => {
    // Keep the group that has the currently active link
    if (group.querySelector('a.is-active')) return
    if (group.classList.contains('collapsed')) return
    const btn = group.querySelector(':scope > .item > button.caret')
    if (btn) btn.click()
  })
  requestAnimationFrame(() => { isClosing = false })
}

function setupAccordion() {
  const sidebar = document.querySelector('.VPSidebar')
  if (!sidebar) return

  if (observer) observer.disconnect()

  observer = new MutationObserver((mutations) => {
    if (isClosing) return

    for (const mut of mutations) {
      const el = mut.target
      // Detect a level-0 group that just lost the 'collapsed' class (caret clicked)
      if (
        el.classList.contains('VPSidebarItem') &&
        el.classList.contains('level-0') &&
        el.classList.contains('has-children') &&
        !el.classList.contains('collapsed') &&
        mut.oldValue && mut.oldValue.includes('collapsed')
      ) {
        isClosing = true
        sidebar.querySelectorAll('.VPSidebarItem.level-0.has-children').forEach(group => {
          if (group === el || group.classList.contains('collapsed')) return
          const btn = group.querySelector(':scope > .item > button.caret')
          if (btn) btn.click()
        })
        requestAnimationFrame(() => { isClosing = false })
        break
      }
    }
  })

  observer.observe(sidebar, {
    attributes: true,
    attributeFilter: ['class'],
    attributeOldValue: true,
    subtree: true
  })
}

// Collapse other chapters whenever the route changes (link click navigation)
watch(() => route.path, () => {
  // Give VitePress time to update the sidebar active state
  setTimeout(collapseOthers, 80)
})

onMounted(() => {
  setTimeout(setupAccordion, 150)
})

onUnmounted(() => {
  if (observer) { observer.disconnect(); observer = null }
})
</script>

<template>
  <Layout />
</template>
