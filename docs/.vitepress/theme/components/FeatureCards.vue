<script setup lang="ts">
defineProps<{
  title:    string
  features: { icon: string; color: string; title: string; desc: string }[]
}>()
</script>

<template>
  <section class="fc-section">
    <div class="fc-inner">
      <h2 class="fc-title">{{ title }}</h2>
      <div class="fc-grid">
        <div
          v-for="f in features"
          :key="f.title"
          class="fc-card"
          :style="`--fc: ${f.color}`"
        >
          <div class="fc-icon">{{ f.icon }}</div>
          <h3 class="fc-card-title">{{ f.title }}</h3>
          <p class="fc-desc">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fc-section {
  padding: 60px 20px;
}
.fc-inner {
  max-width: 1152px;
  margin: 0 auto;
}
.fc-title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 36px;
  color: var(--vp-c-text-1);
  text-align: center;
}
.fc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.fc-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-top: 3px solid var(--fc, #06b6d4);
  border-radius: 12px;
  padding: 24px 20px;
  transition: transform 0.15s, box-shadow 0.15s;
}
.fc-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
.fc-icon {
  font-size: 1.8rem;
  margin-bottom: 12px;
}
.fc-card-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}
.fc-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 480px) {
  .fc-section { padding: 40px 16px; }
  .fc-grid    { grid-template-columns: 1fr; }
}
</style>
