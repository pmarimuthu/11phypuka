<!-- DNA Double Helix — Static DNA with Scanning Beam -->
<script setup lang="ts">
defineProps<{ size?: number }>()
</script>

<template>
  <svg
    :width="size ?? 24"
    :height="size ?? 24"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <!-- Strand Gradients -->
      <linearGradient
        id="bio-s1"
        x1="10"
        y1="2"
        x2="10"
        y2="38"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stop-color="#38bdf8" />
        <stop offset="50%" stop-color="#0ea5e9" />
        <stop offset="100%" stop-color="#0284c7" />
      </linearGradient>

      <linearGradient
        id="bio-s2"
        x1="30"
        y1="2"
        x2="30"
        y2="38"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stop-color="#fb7185" />
        <stop offset="50%" stop-color="#f43f5e" />
        <stop offset="100%" stop-color="#e11d48" />
      </linearGradient>

      <!-- Beam Gradient -->
      <linearGradient
        id="scan-beam"
        x1="0"
        y1="0"
        x2="0"
        y2="1"
      >
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
        <stop offset="50%" stop-color="#ffffff" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </linearGradient>

      <!-- Glow -->
      <filter id="beam-glow">
        <feGaussianBlur stdDeviation="1.2" />
      </filter>
    </defs>

    <!-- ===================================================== -->
    <!-- DNA STRAND 1 -->
    <!-- ===================================================== -->

    <path
      d="M10 2 C20 8,28 12,20 20 C12 28,20 32,10 38"
      stroke="url(#bio-s1)"
      stroke-width="2.2"
      stroke-linecap="round"
      fill="none"
    />

    <!-- ===================================================== -->
    <!-- DNA STRAND 2 -->
    <!-- ===================================================== -->

    <path
      d="M30 2 C20 8,12 12,20 20 C28 28,20 32,30 38"
      stroke="url(#bio-s2)"
      stroke-width="2.2"
      stroke-linecap="round"
      fill="none"
    />

    <!-- ===================================================== -->
    <!-- BASE PAIRS -->
    <!-- ===================================================== -->

    <line
      x1="10"
      y1="4"
      x2="30"
      y2="4"
      stroke="#f59e0b"
      stroke-width="1.8"
      stroke-linecap="round"
      opacity="0.9"
    />

    <line
      x1="22"
      y1="11"
      x2="18"
      y2="11"
      stroke="#8b5cf6"
      stroke-width="1.8"
      stroke-linecap="round"
      opacity="0.9"
    />

    <line
      x1="21"
      y1="18"
      x2="19"
      y2="18"
      stroke="#f97316"
      stroke-width="1.8"
      stroke-linecap="round"
      opacity="0.85"
    />

    <line
      x1="19"
      y1="22"
      x2="21"
      y2="22"
      stroke="#06b6d4"
      stroke-width="1.8"
      stroke-linecap="round"
      opacity="0.85"
    />

    <line
      x1="14"
      y1="29"
      x2="26"
      y2="29"
      stroke="#10b981"
      stroke-width="1.8"
      stroke-linecap="round"
      opacity="0.9"
    />

    <line
      x1="10"
      y1="36"
      x2="30"
      y2="36"
      stroke="#ef4444"
      stroke-width="1.8"
      stroke-linecap="round"
      opacity="0.9"
    />

    <!-- ===================================================== -->
    <!-- END NODES -->
    <!-- ===================================================== -->

    <circle
      cx="10"
      cy="2"
      r="2.2"
      fill="#38bdf8"
    />

    <circle
      cx="30"
      cy="2"
      r="2.2"
      fill="#fb7185"
    />

    <circle
      cx="10"
      cy="38"
      r="2.2"
      fill="#0284c7"
    />

    <circle
      cx="30"
      cy="38"
      r="2.2"
      fill="#e11d48"
    />

    <!-- ===================================================== -->
    <!-- SCANNING BEAM -->
    <!-- ===================================================== -->

    <g>
      <rect
        x="4"
        y="-8"
        width="32"
        height="8"
        rx="4"
        fill="url(#scan-beam)"
      >
        <animate
          attributeName="y"
          values="-8;40"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </rect>

      <rect
        x="4"
        y="-6"
        width="32"
        height="2"
        rx="1"
        fill="#93c5fd"
        opacity="0.5"
        filter="url(#beam-glow)"
      >
        <animate
          attributeName="y"
          values="-6;42"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </rect>
    </g>

  </svg>
</template>
