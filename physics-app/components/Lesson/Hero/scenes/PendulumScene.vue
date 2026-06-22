<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <line x1="70" y1="28" x2="360" y2="28" stroke="var(--ch-c)" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
    <circle cx="210" cy="28" r="5" fill="var(--ch-c)" opacity="0.4"/>
    <path d="M160,105 Q210,148 260,105" fill="none" stroke="var(--ch-c)" stroke-width="1" stroke-dasharray="4 3" opacity="0.25"/>
    <g>
      <animateTransform attributeName="transform" type="rotate"
        values="-26 210 28; 26 210 28; -26 210 28"
        dur="2.2s" calcMode="spline"
        keySplines="0.45 0.05 0.55 0.95; 0.45 0.05 0.55 0.95"
        repeatCount="indefinite"/>
      <line x1="210" y1="28" x2="210" y2="128" stroke="var(--ch-c)" stroke-width="2" opacity="0.7"/>
      <circle cx="210" cy="128" r="16" fill="var(--ch-c)" opacity="0.85"/>
    </g>
    <text x="210" y="155" font-size="11" fill="var(--ch-c)" text-anchor="middle" opacity="0.6">T = 2π√(l/g)</text>
  </svg>
</template>
