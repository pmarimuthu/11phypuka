<script setup lang="ts">
import { ref, computed } from "vue";

const trackLength = 100; // meters

const speed = ref(10); // m/s

const started = ref(false);

const elapsed = ref(0);

const position = computed(() => {
  return Math.min(elapsed.value * speed.value, trackLength);
});

const calculatedSpeed = computed(() => {
  if (elapsed.value === 0) return 0;

  return (position.value / elapsed.value).toFixed(2);
});

const studentSpeed = ref("");

const validation = computed(() => {
  if (!studentSpeed.value) {
    return "";
  }

  const expected = position.value / elapsed.value;

  return Math.abs(Number(studentSpeed.value) - expected) < 0.5
    ? "✅ Correct"
    : "❌ Try Again";
});

let timer: number | null = null;

function start() {
  reset();

  started.value = true;

  timer = window.setInterval(() => {
    elapsed.value += 0.1;

    if (position.value >= trackLength) {
      stop();
    }
  }, 100);
}

function stop() {
  started.value = false;

  if (timer) {
    clearInterval(timer);

    timer = null;
  }
}

function reset() {
  stop();

  elapsed.value = 0;
}
</script>

<template>
  <div class="speed-lab">
    <h3>Speed Distance Time Lab</h3>

    <div class="track">
      <div
        class="car"
        :style="{
          left: (position / trackLength) * 90 + '%',
        }"
      >
        🚗
      </div>

      <div class="finish">🏁</div>
    </div>

    <div class="controls">
      <label>
        Speed:
        {{ speed }} m/s
      </label>

      <input type="range" min="2" max="20" v-model="speed" />
    </div>

    <div class="readings">
      <p>
        Distance:
        {{ position.toFixed(1) }} m
      </p>

      <p>
        Time:
        {{ elapsed.toFixed(1) }} s
      </p>

      <div class="calculation-box">
        <p>Calculate: Speed = Distance ÷ Time</p>

        <label> Speed (m/s): </label>

        <input v-model="studentSpeed" type="number" step="0.1" />

        <div class="validation">
          {{ validation }}
        </div>
      </div>
    </div>

    <table class="obs-table">
      <tr>
        <th>Distance (m)</th>
        <th>Time (s)</th>
        <th>Speed (m/s)</th>
      </tr>

      <tr>
        <td>{{ position.toFixed(1) }}</td>
        <td>{{ elapsed.toFixed(1) }}</td>
        <td>{{ calculatedSpeed }}</td>
      </tr>
    </table>

    <button @click="start">Start</button>

    <button @click="reset">Reset</button>
  </div>
</template>

<style scoped>
.speed-lab {
  padding: 1rem;
}

.track {
  position: relative;

  height: 80px;

  border: 2px solid #999;

  margin: 20px 0;
}

.car {
  position: absolute;

  top: 20px;

  font-size: 30px;
}

.finish {
  position: absolute;

  right: 10px;

  top: 20px;

  font-size: 30px;
}

button {
  margin-right: 10px;
}
.obs-table {
  margin-top: 20px;
  border-collapse: collapse;
}

.obs-table td,
.obs-table th {
  border: 1px solid #ccc;
  padding: 8px;
}
.calculation-box {
  margin-top: 20px;

  padding: 12px;

  border: 1px solid #ddd;

  border-radius: 8px;
}

.validation {
  margin-top: 10px;

  font-weight: bold;
}
</style>
