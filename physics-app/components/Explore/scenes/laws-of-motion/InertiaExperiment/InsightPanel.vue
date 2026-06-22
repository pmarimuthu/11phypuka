<template>
  <div class="insight" :class="insightClass">
    <span class="insight-icon">{{ insightIcon }}</span>
    <p class="insight-text">{{ insightText }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  insightText: string
  insightClass: string
  insightIcon: string
}>()
</script>

<style scoped>
.insight {
  margin: 10px 14px;
  padding: 9px 11px;
  border-radius: 10px;
  display: flex;
  gap: 8px;
  align-items: flex-start;
  font-size: 0.73rem;
  line-height: 1.45;
}
.insight--neutral {
  background: var(--c-bg-elv);
  border: 1px solid var(--c-divider);
  color: var(--c-text-2);
}
.insight--blue {
  background: color-mix(in srgb, #3b82f6 9%, transparent);
  border: 1px solid color-mix(in srgb, #3b82f6 28%, transparent);
  color: #3b82f6;
}
.insight--amber {
  background: color-mix(in srgb, #f59e0b 9%, transparent);
  border: 1px solid color-mix(in srgb, #f59e0b 28%, transparent);
  color: #b45309;
}
.insight--green {
  background: color-mix(in srgb, #22c55e 9%, transparent);
  border: 1px solid color-mix(in srgb, #22c55e 28%, transparent);
  color: #15803d;
}
.insight-icon { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }
.insight-text { margin: 0; }
</style>
