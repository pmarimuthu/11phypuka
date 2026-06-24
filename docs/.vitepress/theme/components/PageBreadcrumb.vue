<!--
  PageBreadcrumb.vue
  ─────────────────────────────────────────────────────────────
  Sticky strip just below the navbar.
  Format:  CBSE › 11 › Phy                (subject home)
           CBSE › 11 › Phy › Ch 01        (chapter index)
           CBSE › 11 › Phy › Ch 01 › Le 02 (lesson page)

  Each segment: compact label + title tooltip + href.
  Last segment has no link (current page).
  Hidden on the root landing page (/).

  Props:
    subjectId — override auto-detection from URL (optional)

  Driven by:
    site.config.json    → board / classes / subjects.shortCode
    breadcrumb.config.ts → CHAPTERS / lessonInfo()
  ─────────────────────────────────────────────────────────────
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import siteConfig from '../site.config.json'
import { CHAPTERS, lessonInfo } from '../breadcrumb.config'

const props = defineProps<{ subjectId?: string }>()
const route = useRoute()

const board      = siteConfig.board as { label: string; fullLabel: string }
const activeClass = (siteConfig.classes as any[]).find(c => c.active) ?? siteConfig.classes[0]

interface Crumb {
  short: string
  full: string
  href: string | null
  current: boolean
}

const crumbs = computed((): Crumb[] | null => {
  const path = route.path

  // Never show on root landing
  if (path === '/' || path === '') return null

  // Resolve subject from prop or URL
  const rawSubjectId = props.subjectId ?? path.split('/').filter(Boolean)[0]
  const subject = (siteConfig.subjects as any[]).find(s => s.id === rawSubjectId)
  if (!subject) return null

  // Base: board › class › subject
  const base: Crumb[] = [
    { short: board.label,         full: board.fullLabel,       href: '/',            current: false },
    { short: activeClass.label,   full: activeClass.fullLabel, href: '/',            current: false },
    { short: subject.shortCode,   full: subject.name,          href: subject.path,   current: false },
  ]

  // Match chapter path: /<subjectId>/chapters/<chapterSlug>/[lessonSlug]
  const chapterMatch = path.match(/^\/[^/]+\/chapters\/([^/]+)\/?([^/]*)?\/?$/)

  // Subject home page — last crumb is current
  if (!chapterMatch) {
    base[base.length - 1].href    = null
    base[base.length - 1].current = true
    return base
  }

  const [, chapterSlug, lessonSlug] = chapterMatch
  const chapter = CHAPTERS[chapterSlug]
  if (!chapter) {
    // Unknown chapter — still show subject crumb as current
    base[base.length - 1].href    = null
    base[base.length - 1].current = true
    return base
  }

  const lesson = lessonSlug ? lessonInfo(chapter, lessonSlug) : undefined

  base.push({
    short: chapter.short,
    full:  chapter.full,
    href:  lesson ? chapter.path : null,  // link only when on a lesson (not on chapter index)
    current: !lesson,
  })

  if (lesson) {
    base.push({
      short: `Le ${lesson.num}`,
      full:  lesson.label,
      href:  null,
      current: true,
    })
  }

  return base
})
</script>

<template>
  <nav
    v-if="crumbs"
    class="pb-strip"
    aria-label="Breadcrumb"
  >
    <ol class="pb-list">
      <li
        v-for="(seg, i) in crumbs"
        :key="i"
        class="pb-item"
        :class="{ 'pb-current': seg.current }"
      >
        <span v-if="i > 0" class="pb-sep" aria-hidden="true">›</span>

        <a
          v-if="seg.href"
          :href="seg.href"
          class="pb-seg pb-link"
          :title="seg.full"
        >{{ seg.short }}</a>

        <span
          v-else
          class="pb-seg"
          :title="seg.full"
          :aria-current="seg.current ? 'page' : undefined"
        >{{ seg.short }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.pb-strip {
  position: sticky;
  top: var(--vp-nav-height, 64px);
  z-index: 20;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 0 16px;
  height: 32px;
  display: flex;
  align-items: center;
}

/* On custom-layout pages (HomeLanding etc.) there's no VitePress nav,
   so the strip sits naturally below SubjectHeader — no sticky needed */
.pb-strip.pb-static {
  position: static;
}

.pb-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
  overflow: hidden;
  min-width: 0;
}

.pb-item {
  display: flex;
  align-items: center;
  min-width: 0;
  flex-shrink: 1;
}

.pb-sep {
  font-size: 0.65rem;
  color: var(--vp-c-text-3);
  padding: 0 5px;
  user-select: none;
  flex-shrink: 0;
}

.pb-seg {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 2px 3px;
  border-radius: 4px;
  text-decoration: none;
  cursor: default;
  transition: color 0.12s, background 0.12s;
}

.pb-link {
  cursor: pointer;
}
.pb-link:hover {
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 8%, transparent);
  text-decoration: none;
}

.pb-current .pb-seg {
  color: var(--vp-c-text-1);
  font-weight: 700;
}

@media (max-width: 480px) {
  .pb-strip { padding: 0 10px; }
  .pb-sep   { padding: 0 3px; }
}

@media (prefers-reduced-motion: reduce) {
  .pb-seg { transition: none; }
}
</style>
