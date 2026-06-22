<template>
  <div class="chero-tabs">
    <button
      v-for="(tab, i) in tabs"
      :key="i"
      class="chero-tab"
      :class="{ 'chero-tab--active': i === modelValue }"
      @click="$emit('update:modelValue', i)"
    >{{ tab.label }}</button>
  </div>
</template>

<script setup lang="ts">
import type { HeroTab } from './heroSceneConfig'

defineProps<{ tabs: HeroTab[]; modelValue: number }>()
defineEmits<{ 'update:modelValue': [value: number] }>()
</script>

<style scoped>
.chero-tabs {
  display: flex;
  gap: 6px;
  padding: 8px 14px;
  background: var(--c-bg);
  border-bottom: 1px solid var(--c-divider);
}
.chero-tab {
  padding: 4px 14px;
  font-size: 0.78rem;
  font-weight: 600;
  border-radius: 6px;
  border: 1px solid var(--c-divider);
  background: transparent;
  color: var(--c-text-2);
  cursor: pointer;
  transition: background 0.12s, border-color 0.12s, color 0.12s;
}
.chero-tab:hover {
  background: var(--c-bg-elv);
  color: var(--c-text-1);
}
.chero-tab--active {
  background: color-mix(in srgb, var(--ch-c) 11%, transparent);
  border-color: var(--ch-c);
  color: var(--ch-c);
}
</style>
