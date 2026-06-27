<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PhysicsAnim from './PhysicsAnim.vue'
import { ANIM_COUNT, ANIM_INTERVAL_MS } from './anim-carousel.config'

const current = ref(0)
let timer: ReturnType<typeof setInterval>

function startTimer() {
  timer = setInterval(() => {
    current.value = (current.value + 1) % ANIM_COUNT
  }, ANIM_INTERVAL_MS)
}

function goTo(i: number) {
  current.value = i
  clearInterval(timer)
  startTimer()
}

onMounted(startTimer)
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="ac-root">
    <div class="ac-dots" role="tablist" aria-label="Animation slides">
      <button
        v-for="i in ANIM_COUNT"
        :key="i"
        role="tab"
        :aria-selected="current === i - 1"
        :aria-label="`Slide ${i}`"
        :class="['ac-dot', { 'ac-dot--active': current === i - 1 }]"
        @click="goTo(i - 1)"
      />
    </div>
    <div class="ac-stage">
      <Transition name="ac-fade" mode="out-in">
        <PhysicsAnim :key="current" :index="current" />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.ac-root {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.ac-dots {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 1;
}

.ac-dot {
  height: 5px;
  width: 5px;
  border-radius: 3px;
  border: none;
  background: var(--vp-c-text-3);
  cursor: pointer;
  padding: 0;
  opacity: 0.35;
  transition: width 0.25s ease, opacity 0.25s ease, background 0.25s ease;
}

.ac-dot--active {
  width: 16px;
  background: var(--vp-c-brand-1);
  opacity: 1;
}

.ac-dot:not(.ac-dot--active):hover {
  opacity: 0.65;
}

.ac-stage {
  flex: 1;
  min-height: 0;
}

.ac-fade-enter-active,
.ac-fade-leave-active {
  transition: opacity 0.4s ease;
}

.ac-fade-enter-from,
.ac-fade-leave-to {
  opacity: 0;
}
</style>
