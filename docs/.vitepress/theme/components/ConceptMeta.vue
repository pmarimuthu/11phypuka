<script setup lang="ts">
// Shows the textbook reference for a concept (chapter / section / page).
defineProps<{
  chapter: string
  section: string
  page?: string
}>()
</script>

<template>
  <div class="pc-meta">
    <span class="chip">📘 NCERT Ch. {{ chapter }}</span>
    <span class="chip">§ {{ section }}</span>
    <span v-if="page" class="chip">p. {{ page }}</span>
  </div>
</template>
