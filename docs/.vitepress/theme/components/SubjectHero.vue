<script setup lang="ts">
defineProps<{
  badge:         string
  title:         string
  accent:        string
  tagline:       string
  primaryLabel:  string
  primaryLink:   string
  secondaryLabel: string
  secondaryLink: string
  exams:         string[]
}>()
</script>

<template>
  <section class="sh-hero">
    <div class="sh-inner">
      <div class="sh-text">
        <div class="sh-badge">{{ badge }}</div>
        <h1 class="sh-h1">
          {{ title }}<br>
          <span class="sh-accent">{{ accent }}</span>
        </h1>
        <p class="sh-tagline">{{ tagline }}</p>
        <div class="sh-actions">
          <a :href="primaryLink"   class="sh-btn-primary">{{ primaryLabel }}</a>
          <a :href="secondaryLink" class="sh-btn-ghost">{{ secondaryLabel }}</a>
        </div>
        <div class="sh-exams">
          <span v-for="exam in exams" :key="exam">{{ exam }}</span>
        </div>
      </div>
      <div class="sh-anim">
        <div class="sh-anim-card">
          <slot name="animation" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sh-hero {
  padding: 60px 20px 40px;
  background: linear-gradient(
    160deg,
    var(--vp-c-bg) 0%,
    color-mix(in srgb, var(--vp-c-brand-1) 6%, var(--vp-c-bg)) 100%
  );
}
.sh-inner {
  max-width: 1152px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}
.sh-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 30%, transparent);
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 18px;
}
.sh-h1 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0 0 16px;
  color: var(--vp-c-text-1);
}
.sh-accent {
  background: linear-gradient(90deg, var(--vp-c-brand-1), #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.sh-tagline {
  font-size: 1.05rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 28px;
}
.sh-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.sh-btn-primary {
  background: var(--vp-c-brand-1);
  color: #fff;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  transition: opacity 0.15s, transform 0.15s;
  display: inline-block;
}
.sh-btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
.sh-btn-ghost {
  border: 2px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  padding: 11px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: border-color 0.15s, color 0.15s;
  display: inline-block;
}
.sh-btn-ghost:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.sh-exams {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.sh-exams span {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 3px 10px;
  border-radius: 20px;
}
.sh-anim {
  display: flex;
  justify-content: center;
}
.sh-anim-card {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 4/3;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}

@media (max-width: 768px) {
  .sh-inner { grid-template-columns: 1fr; }
  .sh-anim  { order: -1; }
  .sh-anim-card { max-width: 100%; aspect-ratio: 16/9; }
  .sh-h1 { font-size: 2rem; }
}
@media (max-width: 480px) {
  .sh-hero { padding: 32px 16px 28px; }
  .sh-btn-primary, .sh-btn-ghost { width: 100%; text-align: center; }
}
</style>
