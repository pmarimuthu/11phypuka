<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { trackVisit, subscribeToSummary } from '../firebase'

const totalVisits = ref<number | null>(null)
const uniqueVisitors = ref<number | null>(null)

let unsubscribe: (() => void) | null = null

onMounted(() => {
  // Fire-and-forget track
  trackVisit()

  // Live subscription to summary doc
  unsubscribe = subscribeToSummary(data => {
    totalVisits.value = data.totalVisits
    uniqueVisitors.value = data.uniqueVisitors
  })
})

onUnmounted(() => {
  unsubscribe?.()
})
</script>

<template>
  <div class="vc-wrap" v-if="totalVisits !== null">
    <span class="vc-item" title="Total page visits">
      <svg class="vc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      {{ totalVisits.toLocaleString() }} visits
    </span>
    <span class="vc-sep">·</span>
    <span class="vc-item" title="Unique devices">
      <svg class="vc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      {{ uniqueVisitors?.toLocaleString() }} unique
    </span>
  </div>
</template>

<style scoped>
.vc-wrap {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}
.vc-item {
  display: flex;
  align-items: center;
  gap: 4px;
}
.vc-icon {
  width: 13px;
  height: 13px;
  opacity: 0.7;
}
.vc-sep {
  opacity: 0.4;
}
</style>
