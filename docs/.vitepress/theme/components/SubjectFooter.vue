<script setup lang="ts">
import { SUBJECTS, SITE, FOOTER_WIDGETS } from '../subjects'

const props = defineProps<{ subjectId: string }>()
const subject = SUBJECTS[props.subjectId] ?? { name: 'Student' }
const widgets = FOOTER_WIDGETS
</script>

<template>
  <footer class="sf-footer">
    <p v-if="widgets.includes('copyright')" class="sf-copy">
      © {{ SITE.copyrightYear }} {{ subject.name }} Companion · {{ SITE.copyrightSuffix }}
    </p>
  </footer>
</template>

<style scoped>
.sf-footer {
  text-align: center;
  padding: 20px;
  border-top: 1px solid var(--vp-c-divider);
}
.sf-copy {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  margin: 0;
}
</style>
