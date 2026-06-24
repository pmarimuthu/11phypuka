<script setup lang="ts">
import SubjectHeader from './SubjectHeader.vue'
import SubjectFooter from './SubjectFooter.vue'
import PageBreadcrumb from './PageBreadcrumb.vue'
import SubjectIcon from './SubjectIcon.vue'
import { SUBJECTS } from '../subjects'

const props = defineProps<{ subject?: string }>()
const subjectId = props.subject ?? 'chemistry'
const s = SUBJECTS[subjectId] ?? { id: subjectId, name: subjectId, icon: '📚', color: '#10b981', colorLight: '#6ee7b7', path: '/', chaptersPath: '/', status: 'coming-soon', shortCode: '' }
</script>

<template>
  <div class="cs-root">
    <!-- Dynamic orb colors based on subject -->
    <div class="cs-orb cs-orb1" :style="`background: radial-gradient(circle, ${s.color}, transparent)`" aria-hidden="true"></div>
    <div class="cs-orb cs-orb2" :style="`background: radial-gradient(circle, ${s.colorLight}, transparent)`" aria-hidden="true"></div>

    <SubjectHeader :subjectId="subjectId" />
    <PageBreadcrumb :subjectId="subjectId" />

    <main class="cs-main">
      <div class="cs-badge" :style="`color:${s.color}; background: color-mix(in srgb, ${s.color} 12%, transparent); border-color: color-mix(in srgb, ${s.color} 30%, transparent)`">
        Coming Soon
      </div>

      <!-- Animated subject icon instead of emoji -->
      <div class="cs-icon-wrap">
        <SubjectIcon :subjectId="subjectId" :size="88" />
      </div>

      <h1 class="cs-title">{{ s.name }} Companion</h1>
      <p class="cs-desc">
        We're building concept-first, interactive {{ s.name }} notes —
        same approach as Physics.<br>Check back soon!
      </p>
      <a href="/" class="cs-btn">← Back to All Subjects</a>
    </main>

    <SubjectFooter :subjectId="subjectId" />
  </div>
</template>

<style scoped>
.cs-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg);
  font-family: var(--app-font-family, system-ui, sans-serif);
  position: relative;
  overflow: hidden;
}
.cs-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.15;
  pointer-events: none;
}
.cs-orb1 { width: 380px; height: 380px; top: -100px; right: -80px; }
.cs-orb2 { width: 320px; height: 320px; bottom: -60px; left: -60px; }

.cs-main {
  flex: 1;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 60px 24px;
  gap: 16px;
  text-align: center;
  position: relative; z-index: 1;
}
.cs-badge {
  font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.08em;
  padding: 4px 14px; border-radius: 20px;
  border: 1px solid;
}
.cs-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 28px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}
.cs-title {
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 900; letter-spacing: -0.03em;
  color: var(--vp-c-text-1); margin: 0;
}
.cs-desc {
  font-size: 1rem; color: var(--vp-c-text-2);
  line-height: 1.7; max-width: 480px; margin: 0;
}
.cs-btn {
  margin-top: 8px;
  display: inline-block;
  padding: 12px 28px;
  border-radius: 8px;
  border: 2px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.95rem; font-weight: 600;
  transition: border-color 0.15s, color 0.15s;
}
.cs-btn:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
</style>
