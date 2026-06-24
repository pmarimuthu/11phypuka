<script setup lang="ts">
import SubjectSwitcher from './SubjectSwitcher.vue'
import SubjectIcon from './SubjectIcon.vue'
import { SUBJECTS, HEADER_WIDGETS } from '../subjects'

const props = defineProps<{
  subjectId: string
  chaptersLink?: string
}>()

const subject = SUBJECTS[props.subjectId] ?? SUBJECTS['physics']
const widgets = HEADER_WIDGETS
</script>

<template>
  <header class="sh-nav">
    <div class="sh-inner">
      <a :href="subject.path" class="sh-logo">
        <SubjectIcon :subjectId="subjectId" :size="24" />
        <span class="sh-logo-text">{{ subject.name }} Companion</span>
      </a>

      <nav v-if="widgets.includes('chaptersLink') && chaptersLink" class="sh-links">
        <a :href="chaptersLink">Chapters</a>
      </nav>

      <div class="sh-spacer" />

      <SubjectSwitcher v-if="widgets.includes('subjectSwitcher')" :activeSubjectId="subjectId" />

      <slot v-if="widgets.includes('ctaButton')" name="cta" />
    </div>
  </header>
</template>

<style scoped>
.sh-nav {
  position: sticky; top: 0; z-index: 50;
  background: color-mix(in srgb, var(--vp-c-bg) 85%, transparent);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--vp-c-divider);
}
.sh-inner {
  max-width: 1152px; margin: 0 auto;
  padding: 0 20px; height: 56px;
  display: flex; align-items: center; gap: 12px;
}
.sh-logo {
  display: flex; align-items: center; gap: 8px;
  text-decoration: none; flex-shrink: 0;
}
.sh-logo-text {
  font-weight: 800; font-size: 0.95rem;
  color: var(--vp-c-text-1); letter-spacing: -0.01em;
}
.sh-links a {
  font-size: 0.85rem; color: var(--vp-c-text-2);
  text-decoration: none; font-weight: 500;
  transition: color 0.15s;
}
.sh-links a:hover { color: var(--vp-c-brand-1); }
.sh-spacer { flex: 1; }

@media (max-width: 480px) {
  .sh-links { display: none; }
}
</style>
