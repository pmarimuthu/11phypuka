<script setup lang="ts">
import { ref } from 'vue'
import BernoulliPage1 from './BernoulliPage1.vue'
import BernoulliPage2 from './BernoulliPage2.vue'

const page = ref(1)
</script>

<template>
  <div class="shell">
    <div class="dots">
      <button :class="['dot', { active: page === 1 }]" @click="page = 1" title="⚽ Free Kick"/>
      <button :class="['dot', { active: page === 2 }]" @click="page = 2" title="✈️ Aerofoil"/>
    </div>
    <BernoulliPage1 v-if="page === 1"/>
    <BernoulliPage2 v-else/>
  </div>
</template>

<style scoped>
.shell { position: relative; }
.dots {
  position: absolute; top: 2px; right: 2px;
  display: flex; gap: 7px; z-index: 10;
}
.dot {
  width: 11px; height: 11px; border-radius: 50%;
  border: 2px solid var(--vp-c-brand-1);
  background: transparent; cursor: pointer; padding: 0;
  transition: background 0.18s, transform 0.15s;
}
.dot:hover { transform: scale(1.25); }
.dot.active { background: var(--vp-c-brand-1); }
</style>
