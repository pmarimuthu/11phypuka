<template>
  <aside class="sidebar" :class="{ 'sidebar--open': open }">
    <div class="sidebar-inner">

      <!-- ── Part I ── -->
      <div class="part-label">Part I — Mechanics</div>
      <SidebarChapterGroup
        :chapters="part1"
        :collapsed="collapsed"
        :all-lessons="allLessons"
        :is-active-chapter="isActiveChapter"
        :is-active-lesson="isActiveLesson"
        @toggle-chapter="toggleCollapse"
        @lesson-click="closeMobile"
      />

      <!-- ── Part II ── -->
      <div class="part-label part-label--2">Part II — Properties &amp; Waves</div>
      <SidebarChapterGroup
        :chapters="part2"
        :collapsed="collapsed"
        :all-lessons="allLessons"
        :is-active-chapter="isActiveChapter"
        :is-active-lesson="isActiveLesson"
        @toggle-chapter="toggleCollapse"
        @lesson-click="closeMobile"
      />

      <div class="sidebar-footer">Class 11 Physics · Karnataka PU</div>
    </div>
  </aside>

  <!-- Mobile backdrop -->
  <Transition name="overlay">
    <div v-if="open && isMobile" class="overlay" @click="open = false" />
  </Transition>
</template>

<script setup lang="ts">
import type { Chapter, ChapterIndex, LessonRef } from '~/types/physics'

const { open } = useSidebar()
const route = useRoute()

// ── Responsive ────────────────────────────────────────────────────────────────
const isMobile = ref(false)
onMounted(() => {
  const update = () => { isMobile.value = window.innerWidth < 960 }
  update()
  window.addEventListener('resize', update)
})
function closeMobile() { if (isMobile.value) open.value = false }

// ── Chapters list ─────────────────────────────────────────────────────────────
const { data: chapters } = await useAsyncData('chapters', () =>
  $fetch<Chapter[]>('/data/chapters.json')
)

const part1 = computed(() => (chapters.value ?? []).filter(c => c.num <= 8))
const part2 = computed(() => (chapters.value ?? []).filter(c => c.num > 8))

// ── Eager-load all lesson indexes ─────────────────────────────────────────────
const allLessons = ref<Record<string, LessonRef[]>>({})

async function loadAllLessons() {
  const chs = chapters.value
  if (!chs?.length) return
  const results = await Promise.all(
    chs.map(ch =>
      $fetch<ChapterIndex>(`/data/chapters/${ch.slug}/index.json`).catch(() => null)
    )
  )
  const map: Record<string, LessonRef[]> = {}
  chs.forEach((ch, i) => { if (results[i]?.lessons) map[ch.slug] = results[i]!.lessons })
  allLessons.value = map
}

onMounted(loadAllLessons)

// ── Collapse state (per-chapter, persisted) ───────────────────────────────────
const STORE_KEY = 'pc-sidebar-collapsed'
const collapsed = ref<Record<string, boolean>>({})

const activeChapter = computed(() => route.params.chapter as string | undefined)
const activeLesson  = computed(() => route.params.lesson  as string | undefined)

function initCollapse() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) ?? '{}')
    const activeSlug = activeChapter.value
    const state: Record<string, boolean> = {}
    ;(chapters.value ?? []).forEach(ch => {
      // If never saved: active chapter open, others closed
      state[ch.slug] = saved[ch.slug] !== undefined
        ? saved[ch.slug]
        : ch.slug !== activeSlug
    })
    collapsed.value = state
  } catch {
    collapsed.value = {}
  }
}

function toggleCollapse(slug: string) {
  collapsed.value = { ...collapsed.value, [slug]: !collapsed.value[slug] }
  try { localStorage.setItem(STORE_KEY, JSON.stringify(collapsed.value)) } catch {}
}

onMounted(() => {
  initCollapse()
  const { init } = useSidebar()
  init()
})

// Auto-open active chapter on route change
watch(activeChapter, slug => {
  if (slug && collapsed.value[slug]) {
    collapsed.value = { ...collapsed.value, [slug]: false }
    try { localStorage.setItem(STORE_KEY, JSON.stringify(collapsed.value)) } catch {}
  }
})

function isActiveChapter(slug: string) { return slug === activeChapter.value }
function isActiveLesson(chSlug: string, lSlug: string) {
  return chSlug === activeChapter.value && lSlug === activeLesson.value
}
</script>

<style scoped>
/* ── Shell ── */
.sidebar {
  position: fixed;
  top: var(--nav-height);
  left: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background: var(--c-bg-soft);
  border-right: 1px solid var(--c-divider);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 50;
  transform: translateX(-100%);
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  scrollbar-width: thin;
  scrollbar-color: var(--c-divider) transparent;
}
.sidebar--open { transform: translateX(0); }

.sidebar-inner { padding: 6px 0 48px; }

/* ── Part labels ── */
.part-label {
  padding: 12px 16px 4px;
  font-size: 0.63rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--c-text-3);
  border-top: 1px solid var(--c-divider);
  margin-top: 6px;
}
.part-label:first-child { border-top: none; margin-top: 0; }
.part-label--2 { margin-top: 10px; }

/* ── Footer ── */
.sidebar-footer {
  margin-top: 24px;
  padding: 0 16px;
  font-size: 0.67rem;
  color: var(--c-text-3);
}

/* ── Mobile backdrop ── */
.overlay {
  position: fixed;
  inset: 0;
  top: var(--nav-height);
  background: rgba(0,0,0,0.4);
  z-index: 40;
  backdrop-filter: blur(2px);
}
.overlay-enter-active, .overlay-leave-active { transition: opacity 0.2s; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; }
</style>
