<template>
  <section class="panel-sec">
    <h4 class="sec-head">Live Readings</h4>
    <div class="readings">
      <div class="reading">
        <span class="r-label">Velocity</span>
        <span class="r-value" :style="{ color: velColor }">{{ fmtVel }}</span>
        <span class="r-unit">m/s</span>
      </div>
      <div class="reading">
        <span class="r-label">Acceleration</span>
        <span class="r-value">{{ fmtAcc }}</span>
        <span class="r-unit">m/s²</span>
      </div>
      <div class="reading">
        <span class="r-label">Net Force</span>
        <span class="r-value">{{ fmtForce }}</span>
        <span class="r-unit">N</span>
      </div>
      <div class="reading">
        <span class="r-label">Time</span>
        <span class="r-value">{{ fmtTime }}</span>
        <span class="r-unit">s</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  fmtVel: string
  fmtAcc: string
  fmtForce: string
  fmtTime: string
  velColor: string
}>()
</script>

<style scoped>
.panel-sec {
  padding: 12px 14px;
  border-bottom: 1px solid var(--c-divider);
}
.sec-head {
  font-size: 0.65rem;
  font-weight: 800;
  color: var(--c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.09em;
  margin: 0 0 10px;
}

.readings {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
}
.reading {
  background: var(--c-bg);
  border: 1px solid var(--c-divider);
  border-radius: 8px;
  padding: 7px 9px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.r-label {
  font-size: 0.58rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--c-text-3);
}
.r-value {
  font-size: 1rem;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  color: var(--c-text-1);
  transition: color 0.2s;
}
.r-unit {
  font-size: 0.58rem;
  color: var(--c-text-3);
}
</style>
