<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { subjectFromPath, SITE, FOOTER_WIDGETS } from '../subjects'
import VisitorCounter from './VisitorCounter.vue'

const route = useRoute()
const subject = computed(() => subjectFromPath(route.path))
const widgets = FOOTER_WIDGETS
</script>

<template>
  <footer class="app-footer">
    <div class="af-inner">
      <div v-if="widgets.includes('copyright')" class="af-copy">
        © {{ SITE.copyrightYear }} {{ subject.name }} Companion · {{ SITE.copyrightSuffix }}
      </div>
      <VisitorCounter v-if="widgets.includes('visitorCounter')" />
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  padding: 28px 24px 20px;
  margin-top: 40px;
}
.af-inner {
  max-width: 1152px; margin: 0 auto;
  display: flex; flex-direction: column;
  align-items: center; gap: 12px; text-align: center;
}
.af-copy { font-size: 0.72rem; color: var(--vp-c-text-3); }
</style>
