<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="ch-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--ch-c)"/>
      </marker>
    </defs>
    <line v-for="(a, i) in [0,45,90,135,180,225,270,315]" :key="i"
      :x1="210 + 24 * Math.cos(a * Math.PI/180)"
      :y1="88  + 24 * Math.sin(a * Math.PI/180)"
      :x2="210 + 85 * Math.cos(a * Math.PI/180)"
      :y2="88  + 85 * Math.sin(a * Math.PI/180)"
      stroke="var(--ch-c)" stroke-width="1.5" opacity="0.3" marker-end="url(#ch-arrow)"/>
    <circle cx="210" cy="88" r="22" fill="var(--ch-c)" opacity="0.7"/>
    <text x="210" y="93" text-anchor="middle" font-size="12" fill="white" font-weight="700">M</text>
    <circle class="grav-test" cx="330" cy="88" r="9" fill="var(--ch-c)" opacity="0.85"/>
    <text x="330" y="92" text-anchor="middle" font-size="9" fill="white" font-weight="700">m</text>
    <text x="210" y="148" text-anchor="middle" font-size="11" fill="var(--ch-c)" opacity="0.6">F = GM m / r²</text>
  </svg>
</template>

<style scoped>
@keyframes grav-pull { 0%,100%{transform:translateX(0)} 60%{transform:translateX(-18px)} }
.grav-test { animation: grav-pull 2.4s ease-in-out infinite; }
</style>
