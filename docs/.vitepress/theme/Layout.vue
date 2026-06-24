<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useData } from 'vitepress'
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

watch(() => route.path, () => {
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
      <template #doc-before>
        <PageBreadcrumb />
      </template>
      <template #layout-bottom>
        <AppFooter />
      </template>
    </Layout>
  </template>
</template>
