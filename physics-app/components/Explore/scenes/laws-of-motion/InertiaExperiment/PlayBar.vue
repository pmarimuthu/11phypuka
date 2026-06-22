<template>
  <div class="playbar">
    <button class="pb play" @click="$emit('play')"    :disabled="isPlaying || !sceneMounted">▶ Play</button>
    <button class="pb"      @click="$emit('pause')"   :disabled="!isPlaying">⏸ Pause</button>
    <button class="pb mute" @click="$emit('reset')"   :disabled="!sceneMounted">↺ Reset</button>
    <button class="pb mute" @click="$emit('restart')" :disabled="!sceneMounted">⟳ Restart</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ isPlaying: boolean; sceneMounted: boolean }>()
defineEmits<{ play: []; pause: []; reset: []; restart: [] }>()
</script>

<style scoped>
.playbar {
  padding: 10px 14px;
  border-top: 1px solid var(--c-divider);
  background: var(--c-bg);
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.pb {
  padding: 6px 16px;
  border-radius: 8px;
  border: 1px solid var(--c-divider);
  background: var(--c-bg-soft);
  color: var(--c-text-1);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}
.pb:hover:not(:disabled) {
  border-color: var(--c-brand);
  background: color-mix(in srgb, var(--c-brand) 6%, var(--c-bg));
}
.pb:disabled { opacity: 0.32; cursor: default; }
.pb.play {
  background: var(--c-brand);
  border-color: var(--c-brand);
  color: #fff;
}
.pb.play:hover:not(:disabled) {
  background: color-mix(in srgb, var(--c-brand) 82%, #000);
}
.pb.mute { color: var(--c-text-2); }
</style>
