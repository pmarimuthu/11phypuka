<template>
  <div class="chero" :class="`chero--${theme}`">
    <div class="chero-head">
      <span class="chero-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
      </span>
      <span class="chero-label">Visualization</span>
    </div>
    <HeroTabs v-if="tabs" v-model="activeTab" :tabs="tabs" />
    <component :is="sceneComponent" class="chero-svg" />
  </div>
</template>

<script setup lang="ts">
import HeroTabs from './Hero/HeroTabs.vue'
import { SCENE_MAP, THEME_MAP, TABS_MAP, SCENE_COMPONENTS } from './Hero/heroSceneConfig'

const props = defineProps<{ type: string }>()

const tabs = computed(() => TABS_MAP[props.type] ?? null)
const activeTab = ref(0)
const scene = computed(() => {
  if (tabs.value) return tabs.value[activeTab.value].scene
  return SCENE_MAP[props.type] ?? 'moving-block'
})
const theme = computed(() => THEME_MAP[scene.value] ?? 'brand')
const sceneComponent = computed(() => SCENE_COMPONENTS[scene.value])
</script>

<style scoped>
.chero {
  border-radius: 12px;
  border: 1px solid var(--c-divider);
  overflow: hidden;
  margin-bottom: 28px;
}

/* Header */
.chero-head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: color-mix(in srgb, var(--ch-c) 8%, var(--c-bg));
  border-bottom: 1px solid var(--c-divider);
}
.chero-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  color: var(--ch-c);
  flex-shrink: 0;
}
.chero-icon svg { width: 18px; height: 18px; }
.chero-label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--ch-c);
  letter-spacing: 0.01em;
}

/* colour themes */
.chero--brand   { --ch-c: #2f6fd0; --ch-bg: color-mix(in srgb, #2f6fd0 6%, var(--c-bg)); }
.chero--blue    { --ch-c: #3b82f6; --ch-bg: color-mix(in srgb, #3b82f6 6%, var(--c-bg)); }
.chero--indigo  { --ch-c: #6366f1; --ch-bg: color-mix(in srgb, #6366f1 6%, var(--c-bg)); }
.chero--violet  { --ch-c: #8b5cf6; --ch-bg: color-mix(in srgb, #8b5cf6 6%, var(--c-bg)); }
.chero--cyan    { --ch-c: #06b6d4; --ch-bg: color-mix(in srgb, #06b6d4 6%, var(--c-bg)); }
.chero--green   { --ch-c: #10b981; --ch-bg: color-mix(in srgb, #10b981 6%, var(--c-bg)); }
.chero--emerald { --ch-c: #10b981; --ch-bg: color-mix(in srgb, #10b981 6%, var(--c-bg)); }
.chero--amber   { --ch-c: #f59e0b; --ch-bg: color-mix(in srgb, #f59e0b 6%, var(--c-bg)); }
.chero--orange  { --ch-c: #f97316; --ch-bg: color-mix(in srgb, #f97316 6%, var(--c-bg)); }
.chero--red     { --ch-c: #ef4444; --ch-bg: color-mix(in srgb, #ef4444 6%, var(--c-bg)); }
.chero--sky     { --ch-c: #0ea5e9; --ch-bg: color-mix(in srgb, #0ea5e9 6%, var(--c-bg)); }

.chero-svg {
  display: block;
  width: 100%;
  height: 160px;
  background: var(--ch-bg);
}
</style>
