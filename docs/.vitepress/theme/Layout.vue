<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useData } from 'vitepress'
import { trackVisit } from './pulse'
import HomeLanding from './components/HomeLanding.vue'
import StudentLanding from './components/StudentLanding.vue'
import SubjectComingSoon from './components/SubjectComingSoon.vue'
import AppFooter from './components/AppFooter.vue'
import WaffleMenu from './components/WaffleMenu.vue'
import NavBrand from './components/NavBrand.vue'
import PageBreadcrumb from './components/PageBreadcrumb.vue'

const { Layout } = DefaultTheme
const route = useRoute()
const { frontmatter } = useData()

let observer = null
let isClosing = false

const sidebarOpen = ref(true)

function collapseOthers() {
  if (isClosing) return
  const sidebar = document.querySelector('.VPSidebar')
  if (!sidebar) return
  isClosing = true
  sidebar.querySelectorAll('.VPSidebarItem.level-0.has-children').forEach(group => {
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

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
  document.body.classList.add('pc-sb-anim')
  document.body.classList.toggle('pc-sb-closed', !sidebarOpen.value)
  localStorage.setItem('pc-sidebar', sidebarOpen.value ? 'open' : 'closed')
}

function onSbKey(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === '.') {
    e.preventDefault()
    toggleSidebar()
  }
}

function pageKey(path) {
  return path.replace(/^\/|\/$/g, '').replace(/\//g, '_') || 'home'
}

watch(() => route.path, (path) => {
  setTimeout(collapseOthers, 80)
  trackVisit(pageKey(path))
})

onMounted(() => {
  trackVisit(pageKey(route.path))
  if (localStorage.getItem('pc-sidebar') === 'closed') {
    sidebarOpen.value = false
    document.body.classList.add('pc-sb-closed')
  }
  setTimeout(setupAccordion, 150)
  window.addEventListener('keydown', onSbKey)
})

onUnmounted(() => {
  if (observer) { observer.disconnect(); observer = null }
  window.removeEventListener('keydown', onSbKey)
})
</script>

<template>
  <StudentLanding v-if="frontmatter.customRoot" />
  <HomeLanding v-else-if="frontmatter.customHome" />
  <SubjectComingSoon v-else-if="frontmatter.customSoon" :subject="frontmatter.subject" />
  <template v-else>
    <Layout>
      <template #nav-bar-title-before>
        <NavBrand />
      </template>
      <template #nav-bar-content-after>
        <WaffleMenu />
      </template>
      <template #sidebar-nav-before>
        <div class="pc-sb-btn-row">
          <button
            class="pc-sb-btn"
            :title="sidebarOpen ? 'Collapse sidebar  Ctrl+.' : 'Expand sidebar  Ctrl+.'"
            :aria-label="sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'"
            @click="toggleSidebar"
          >
            <svg viewBox="0 0 20 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="1" y="1" width="18" height="14" rx="3"/>
              <line x1="7" y1="1" x2="7" y2="15"/>
            </svg>
          </button>
        </div>
      </template>
      <template #doc-before>
        <PageBreadcrumb />
      </template>
      <template #layout-bottom>
        <AppFooter />
      </template>
    </Layout>
  </template>
</template>
