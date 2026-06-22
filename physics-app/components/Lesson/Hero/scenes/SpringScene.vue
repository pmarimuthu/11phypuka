<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="58" width="12" height="72" rx="3" fill="var(--ch-c)" opacity="0.3"/>
    <line x1="40" y1="25" x2="40" y2="145" stroke="var(--ch-c)" stroke-width="2" opacity="0.15"/>
    <g class="spring-oscillate">
      <path d="M52,94 L72,68 L92,120 L112,68 L132,120 L152,68 L172,120 L192,94"
        fill="none" stroke="var(--ch-c)" stroke-width="2.5" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="192" y="74" width="52" height="40" rx="6" fill="var(--ch-c)" opacity="0.85"/>
      <text x="218" y="99" text-anchor="middle" font-size="11" fill="white" font-weight="700">m</text>
    </g>
    <text x="220" y="148" font-size="11" fill="var(--ch-c)" text-anchor="middle" opacity="0.6">F = −kx</text>
  </svg>
</template>

<style scoped>
@keyframes spring-osc {
  0%, 100% { transform: translateX(0); }
  50%       { transform: translateX(36px); }
}
.spring-oscillate { animation: spring-osc 1.6s ease-in-out infinite; }
</style>
