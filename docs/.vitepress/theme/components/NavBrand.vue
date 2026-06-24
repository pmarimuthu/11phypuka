<!-- Injected into VitePress nav-bar-title-before slot.
     Replaces the static favicon.svg with the correct animated subject icon. -->
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { subjectFromPath } from '../subjects'
import SubjectIcon from './SubjectIcon.vue'

const route  = useRoute()
const subject = computed(() => subjectFromPath(route.path))
</script>

<template>
  <SubjectIcon :subjectId="subject.id" :size="22" style="margin-right: 4px; flex-shrink: 0;" />
</template>
