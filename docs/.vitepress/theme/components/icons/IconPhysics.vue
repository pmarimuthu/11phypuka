<!-- BohrAtomicModelIcon.vue -->
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
    style="overflow: visible"
  >
    <defs>
      <radialGradient
        id="ph-nucleus-grad"
        cx="40%"
        cy="35%"
        r="60%"
      >
        <stop offset="0%" stop-color="#bfdbfe" />
        <stop offset="100%" stop-color="#2563eb" />
      </radialGradient>

      <filter id="ph-nucleus-glow">
        <feGaussianBlur stdDeviation="1.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- ===================================================== -->
    <!-- ORBIT 1 (0°) -->
    <!-- ===================================================== -->
    <g>
      <ellipse
        cx="20"
        cy="20"
        rx="17"
        ry="5.5"
        fill="none"
        stroke="#3b82f6"
        stroke-width="0.75"
        opacity="0.55"
      />

      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="2.4s"
          repeatCount="indefinite"
        />

        <circle
          cx="37"
          cy="20"
          r="2"
          fill="#93c5fd"
        />
      </g>
    </g>

    <!-- ===================================================== -->
    <!-- ORBIT 2 (60°) -->
    <!-- ===================================================== -->
    <g transform="rotate(60 20 20)">
      <ellipse
        cx="20"
        cy="20"
        rx="17"
        ry="5.5"
        fill="none"
        stroke="#3b82f6"
        stroke-width="0.75"
        opacity="0.55"
      />

      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="120 20 20"
          to="480 20 20"
          dur="3.6s"
          repeatCount="indefinite"
        />

        <circle
          cx="37"
          cy="20"
          r="2"
          fill="#60a5fa"
        />
      </g>
    </g>

    <!-- ===================================================== -->
    <!-- ORBIT 3 (120°) -->
    <!-- ===================================================== -->
    <g transform="rotate(120 20 20)">
      <ellipse
        cx="20"
        cy="20"
        rx="17"
        ry="5.5"
        fill="none"
        stroke="#3b82f6"
        stroke-width="0.75"
        opacity="0.55"
      />

      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="240 20 20"
          to="600 20 20"
          dur="4.8s"
          repeatCount="indefinite"
        />

        <circle
          cx="37"
          cy="20"
          r="2"
          fill="#93c5fd"
        />
      </g>
    </g>

    <!-- ===================================================== -->
    <!-- NUCLEUS GLOW -->
    <!-- ===================================================== -->
    <circle
      cx="20"
      cy="20"
      r="4.5"
      fill="#1e40af"
      opacity="0.25"
      filter="url(#ph-nucleus-glow)"
    />

    <!-- ===================================================== -->
    <!-- NUCLEUS -->
    <!-- ===================================================== -->
    <circle
      cx="20"
      cy="20"
      r="3"
      fill="url(#ph-nucleus-grad)"
    />
  </svg>
</template>
