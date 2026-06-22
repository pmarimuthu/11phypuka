<template>
  <div v-for="ch in chapters" :key="ch.slug" class="ch-group">
    <button
      class="ch-header"
      :class="{ 'ch-header--active': isActiveChapter(ch.slug) }"
      @click="$emit('toggle-chapter', ch.slug)"
    >
      <span class="ch-icon">{{ ch.icon }}</span>
      <span class="ch-info">
        <span class="ch-num">Ch {{ ch.num }}</span>
        <span class="ch-title">{{ ch.title }}</span>
      </span>
      <svg class="ch-chevron" :class="{ 'ch-chevron--open': !collapsed[ch.slug] }"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </button>

    <Transition name="lessons">
      <div v-show="!collapsed[ch.slug]" class="lesson-list">
        <template v-if="allLessons[ch.slug]">
          <NuxtLink
            v-for="lesson in allLessons[ch.slug]"
            :key="lesson.slug"
            :to="`/chapters/${ch.slug}/${lesson.slug}`"
            class="lesson-link"
            :class="{ 'lesson-link--active': isActiveLesson(ch.slug, lesson.slug) }"
            @click="$emit('lesson-click')"
          >
            <span class="lesson-dot" />
            {{ lesson.title }}
          </NuxtLink>
        </template>
        <div v-else class="lesson-loading">
          <div v-for="i in 4" :key="i" class="lesson-skeleton" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { Chapter, LessonRef } from '~/types/physics'

defineProps<{
  chapters: Chapter[]
  collapsed: Record<string, boolean>
  allLessons: Record<string, LessonRef[]>
  isActiveChapter: (slug: string) => boolean
  isActiveLesson: (chSlug: string, lSlug: string) => boolean
}>()

defineEmits<{ 'toggle-chapter': [slug: string]; 'lesson-click': [] }>()
</script>

<style scoped>
/* ── Chapter header button ── */
.ch-group { margin-bottom: 1px; }

.ch-header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px 7px 14px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.11s;
}
.ch-header:hover { background: var(--c-bg-elv); }
.ch-header--active { background: color-mix(in srgb, var(--c-brand) 7%, transparent); }

.ch-icon { font-size: 1rem; flex-shrink: 0; width: 22px; text-align: center; }

.ch-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}
.ch-num {
  font-size: 0.6rem;
  font-weight: 700;
  color: var(--c-brand);
  line-height: 1;
}
.ch-title {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--c-text-1);
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ch-header--active .ch-title { color: var(--c-brand); }

.ch-chevron {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: var(--c-text-3);
  transform: rotate(-90deg);
  transition: transform 0.18s ease;
}
.ch-chevron--open { transform: rotate(0deg); }

/* ── Lesson list ── */
.lesson-list {
  padding: 2px 8px 5px 44px;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.lesson-link {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  padding: 5px 8px;
  font-size: 0.76rem;
  color: var(--c-text-2);
  text-decoration: none;
  border-radius: 6px;
  line-height: 1.35;
  transition: background 0.1s, color 0.1s;
}
.lesson-link:hover { background: var(--c-bg-elv); color: var(--c-text-1); text-decoration: none; }
.lesson-link--active {
  background: color-mix(in srgb, var(--c-brand) 11%, transparent);
  color: var(--c-brand);
  font-weight: 600;
}

.lesson-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--c-divider);
  flex-shrink: 0;
  margin-top: 6px;
}
.lesson-link--active .lesson-dot { background: var(--c-brand); }

/* skeletons */
.lesson-loading { display: flex; flex-direction: column; gap: 5px; padding: 4px 0; }
.lesson-skeleton { height: 18px; background: var(--c-bg-elv); border-radius: 4px; animation: pulse 1.4s ease-in-out infinite; }

/* ── Slide transition ── */
.lessons-enter-active, .lessons-leave-active {
  transition: max-height 0.22s ease, opacity 0.16s ease;
  overflow: hidden;
  max-height: 800px;
}
.lessons-enter-from, .lessons-leave-to { max-height: 0; opacity: 0; }

@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
</style>
