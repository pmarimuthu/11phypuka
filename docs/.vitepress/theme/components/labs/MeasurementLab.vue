<script setup lang="ts">
import { ref, computed } from "vue";

const objects = [
  { name: "Pencil", length: 12.7, type: "pencil" },
  { name: "Eraser", length: 4.3, type: "eraser" },
  { name: "Notebook", length: 18.6, type: "notebook" },
  { name: "Physics Book", length: 24.8, type: "book" },
];

const selectedIndex = ref(0);
const randomMode = ref(false);

const randomLength = ref(12.7);

const selectedObject = computed(() => {
  if (randomMode.value) {
    return {
      name: "Mystery Object",
      length: randomLength.value,
    };
  }

  return objects[selectedIndex.value];
});

const userAnswer = ref("");

const rulerOffset = ref(0);

const dragging = ref(false);
const startX = ref(0);
const startOffset = ref(0);

function generateObject() {
  randomMode.value = true;

  randomLength.value = Number((Math.random() * 24 + 3).toFixed(1));

  userAnswer.value = "";
}

function dragStart(event: MouseEvent) {
  dragging.value = true;
  startX.value = event.clientX;
  startOffset.value = rulerOffset.value;

  window.addEventListener("mousemove", dragMove);
  window.addEventListener("mouseup", dragEnd);
}

function dragMove(event: MouseEvent) {
  if (!dragging.value) return;

  rulerOffset.value = startOffset.value + (event.clientX - startX.value);
}

function dragEnd() {
  dragging.value = false;

  window.removeEventListener("mousemove", dragMove);
  window.removeEventListener("mouseup", dragEnd);
}

const result = computed(() => {
  const value = Number(userAnswer.value);

  if (!userAnswer.value) {
    return "";
  }

  return Math.abs(value - selectedObject.value.length) < 0.2
    ? "✅ Correct measurement"
    : "❌ Measure again";
});
</script>

<template>
  <div class="measurement-lab">
    <h3>Virtual Measurement Lab</h3>

    <p>Measure the blue object using the ruler.</p>

    <div class="object-selector">
      <div class="random-panel">
        <button class="generate-btn" @click="generateObject">
          🎲 New Object
        </button>
      </div>

      <button
        v-for="(obj, index) in objects"
        :key="obj.name"
        @click="selectedIndex = index"
      >
        {{ obj.name }}
      </button>
    </div>

    <div class="lab-area">
      <div
        class="ruler"
        :style="{ transform: `translateX(${rulerOffset}px)` }"
        @mousedown="dragStart"
      >
        <div
          v-for="n in 31"
          :key="n"
          class="tick"
          :style="{ left: (n - 1) * 10 + 'px' }"
        >
          <span>{{ n - 1 }}</span>
        </div>
      </div>

      <div
        class="object-container"
        :style="{
          width: selectedObject.length * 10 + 'px',
        }"
      >
        <div class="object"></div>
      </div>
    </div>

    <div class="answer-panel">
      <label> Length (cm): </label>

      <input v-model="userAnswer" type="number" step="0.1" />

      <div class="result">
        {{ result }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.measurement-lab {
  padding: 1rem;
}

.lab-area {
  margin-top: 1rem;
}

.ruler {
  position: relative;
  width: 300px;
  height: 50px;
  border-top: 2px solid #666;
}

.tick {
  position: absolute;
  top: 0;
}

.tick::before {
  content: "";
  display: block;
  width: 1px;
  height: 18px;
  background: #666;
}

.tick span {
  font-size: 10px;
}

.object {
  height: 24px;
  background: #3b82f6;
  margin-top: 16px;
  border-radius: 4px;
}

.answer-panel {
  margin-top: 20px;
}

.result {
  margin-top: 10px;
  font-weight: bold;
}
.ruler {
  cursor: grab;
  user-select: none;
}

.ruler:active {
  cursor: grabbing;
}

.lab-area {
  overflow-x: hidden;
  position: relative;
}
.object-selector {
  margin-bottom: 16px;
}

.object-selector button {
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 6px 12px;
}
.random-panel {
  margin-bottom: 16px;
}

.generate-btn {
  padding: 8px 14px;
  font-weight: 600;
}
.object {
  width: 100%;
  height: 30px;
  background: #3b82f6;
  border-radius: 4px;
}
</style>
