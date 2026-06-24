<script setup lang="ts">
import { computed } from 'vue'
import IconPhysics   from './icons/IconPhysics.vue'
import IconChemistry from './icons/IconChemistry.vue'
import IconBiology   from './icons/IconBiology.vue'
import IconMaths     from './icons/IconMaths.vue'
import { SUBJECTS }  from '../subjects'

const props = defineProps<{
  subjectId: string
  size?: number        // px — e.g. 20 (sm), 28 (md), 48 (lg)
}>()

const iconMap: Record<string, unknown> = {
  physics:   IconPhysics,
  chemistry: IconChemistry,
  biology:   IconBiology,
  maths:     IconMaths,
}

const icon    = computed(() => iconMap[props.subjectId] ?? null)
const subject = computed(() => SUBJECTS[props.subjectId])
</script>

<template>
  <!-- Animated SVG component if available -->
  <component :is="icon" v-if="icon" :size="size ?? 24" />
  <!-- Fallback to emoji from config -->
  <span v-else style="font-size: 1em; line-height: 1;">{{ subject?.icon ?? '📚' }}</span>
</template>
