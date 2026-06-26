<script setup lang="ts">
import SubjectHeader  from './SubjectHeader.vue'
import SubjectHero    from './SubjectHero.vue'
import FeatureCards   from './FeatureCards.vue'
import SubjectFooter  from './SubjectFooter.vue'
import PhysicsAnim    from './PhysicsAnim.vue'

const features = [
  { icon: '💡', color: '#f59e0b', title: 'Concept First',  desc: 'Understand the "why" before touching a formula. Every topic starts with intuition.' },
  { icon: '🌍', color: '#10b981', title: 'Real Examples',   desc: 'Physics from everyday life — lightning, fridges, bridges, rockets.' },
  { icon: '✅', color: '#06b6d4', title: 'Quick Quizzes',   desc: 'Bite-sized questions after each concept. Instant feedback.' },
  { icon: '🎬', color: '#8b5cf6', title: 'Live Animations', desc: 'Watch, Explore (interactive), and Feel (3D) — three ways to see physics.' },
]
</script>

<template>
  <div class="hl-root">

    <SubjectHeader subjectId="physics" chaptersLink="/ncert/class11/physics/chapters/" />

    <SubjectHero
      badge="Class 11 · NCERT · CBSE"
      title="Physics that"
      accent="makes sense"
      tagline="Concept first. Formula second. One real example. Then you own it."
      primaryLabel="Start Learning →"
      primaryLink="/ncert/class11/physics/chapters/"
      secondaryLabel="Try a Lesson"
      secondaryLink="/ncert/class11/physics/chapters/01-units-and-measurement/dimensional-analysis"
      :exams="['IIT', 'JEE', 'NEET']"
    >
      <template #animation>
        <PhysicsAnim />
      </template>
    </SubjectHero>

    <FeatureCards title="Built differently" :features="features" />

    <SubjectFooter subjectId="physics" />

  </div>
</template>

<style scoped>
.hl-root {
  min-height: 100vh;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: system-ui, -apple-system, sans-serif;
  display: flex;
  flex-direction: column;
}
</style>
