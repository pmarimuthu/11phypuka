<!-- Erlenmeyer Flask — Chemistry icon, shaking side-to-side -->
<!-- Emerald green palette: #10b981 / #6ee7b7 / #059669 -->
<script setup lang="ts">
defineProps<{ size?: number }>()
</script>

<template>
  <svg
    :width="size ?? 24"
    :height="size ?? 24"
    viewBox="0 0 40 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="overflow: visible"
  >
    <defs>
      <linearGradient id="flask-body-grad" x1="6" y1="16" x2="34" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stop-color="#6ee7b7"/>
        <stop offset="100%" stop-color="#047857"/>
      </linearGradient>
      <linearGradient id="flask-liquid-grad" x1="6" y1="28" x2="34" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stop-color="#34d399"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
      <clipPath id="flask-body-clip">
        <path d="M13 14 L5 32 Q4 40 20 40 Q36 40 35 32 L27 14 Z"/>
      </clipPath>
    </defs>

    <!-- Entire flask wrapped in shake group -->
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 2.5,0; 0,0; -2.5,0; 0,0"
        keyTimes="0; 0.25; 0.5; 0.75; 1"
        calcMode="spline"
        keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
        dur="2.8s"
        repeatCount="indefinite"/>

      <!-- Flask neck -->
      <rect x="15" y="1" width="10" height="14" rx="2"
        fill="#10b981" opacity="0.25" stroke="#10b981" stroke-width="1"/>

      <!-- Flask body outline -->
      <path d="M13 14 L5 32 Q4 40 20 40 Q36 40 35 32 L27 14 Z"
        fill="url(#flask-body-grad)" opacity="0.18"
        stroke="#10b981" stroke-width="1.3" stroke-linejoin="round"/>

      <!-- Liquid fill (clipped to body) -->
      <rect x="3" y="28" width="34" height="14"
        fill="url(#flask-liquid-grad)" opacity="0.35"
        clip-path="url(#flask-body-clip)"/>

      <!-- Liquid surface line -->
      <path d="M7 28 Q20 26 33 28"
        stroke="#34d399" stroke-width="0.9" stroke-linecap="round" opacity="0.6"/>

      <!-- Bubble 1 -->
      <circle cx="15" cy="34" r="1.3" fill="#6ee7b7" opacity="0.75">
        <animate attributeName="cy"      values="35;26;35" dur="2s"   begin="0s"    repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.75;0;0.75" dur="2s" begin="0s"  repeatCount="indefinite"/>
      </circle>
      <!-- Bubble 2 -->
      <circle cx="22" cy="33" r="1.0" fill="#a7f3d0" opacity="0.65">
        <animate attributeName="cy"      values="34;25;34" dur="2.5s" begin="0.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.65;0;0.65" dur="2.5s" begin="0.6s" repeatCount="indefinite"/>
      </circle>
      <!-- Bubble 3 -->
      <circle cx="18" cy="37" r="0.8" fill="#6ee7b7" opacity="0.5">
        <animate attributeName="cy"      values="37;29;37" dur="3s"   begin="1.1s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="3s"   begin="1.1s" repeatCount="indefinite"/>
      </circle>

      <!-- Neck cap -->
      <rect x="14" y="1" width="12" height="3" rx="1.5"
        fill="#10b981" opacity="0.5"/>
    </g>
  </svg>
</template>
