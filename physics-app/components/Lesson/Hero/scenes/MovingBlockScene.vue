<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="ch-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--ch-c)"/>
      </marker>
    </defs>
    <line x1="50" y1="112" x2="380" y2="112" stroke="var(--ch-c)" stroke-width="2" opacity="0.3"/>
    <line v-for="n in 7" :key="n" :x1="50+n*47" y1="112" :x2="50+n*47" y2="120"
      stroke="var(--ch-c)" stroke-width="1" opacity="0.2"/>
    <g class="block-slide">
      <rect x="0" y="84" width="44" height="28" rx="5" fill="var(--ch-c)" opacity="0.85"/>
      <line x1="44" y1="98" x2="72" y2="98" stroke="var(--ch-c)" stroke-width="2.5" marker-end="url(#ch-arrow)"/>
      <text x="76" y="102" font-size="12" fill="var(--ch-c)" font-weight="700" opacity="0.9">v</text>
    </g>
  </svg>
</template>

<style scoped>
@keyframes block-slide {
  0%   { transform: translateX(60px); }
  70%  { transform: translateX(230px); }
  85%  { transform: translateX(230px); }
  100% { transform: translateX(60px); }
}
.block-slide { animation: block-slide 3.2s ease-in-out infinite; }
</style>
