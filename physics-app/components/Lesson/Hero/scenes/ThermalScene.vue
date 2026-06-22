<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="ch-arrow-y" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#f59e0b"/>
      </marker>
    </defs>
    <rect x="52" y="48" width="68" height="82" rx="6" fill="#ef4444" opacity="0.55"/>
    <text x="86" y="88"  text-anchor="middle" font-size="22" fill="white">🔥</text>
    <text x="86" y="112" text-anchor="middle" font-size="10" fill="white" font-weight="700" opacity="0.9">T₁</text>
    <rect x="300" y="48" width="68" height="82" rx="6" fill="#3b82f6" opacity="0.55"/>
    <text x="334" y="85"  text-anchor="middle" font-size="22" fill="white">❄</text>
    <text x="334" y="112" text-anchor="middle" font-size="10" fill="white" font-weight="700" opacity="0.9">T₂</text>
    <g class="heat-arrows">
      <line x1="128" y1="78"  x2="292" y2="78"  stroke="#f59e0b" stroke-width="2" marker-end="url(#ch-arrow-y)" opacity="0.9"/>
      <line x1="128" y1="94"  x2="292" y2="94"  stroke="#f59e0b" stroke-width="2" marker-end="url(#ch-arrow-y)" opacity="0.65"/>
      <line x1="128" y1="110" x2="292" y2="110" stroke="#f59e0b" stroke-width="2" marker-end="url(#ch-arrow-y)" opacity="0.45"/>
    </g>
    <text x="210" y="148" text-anchor="middle" font-size="11" fill="var(--ch-c)" opacity="0.7">Heat Q</text>
  </svg>
</template>

<style scoped>
@keyframes heat-pulse { 0%,100%{opacity:0.85} 50%{opacity:0.3} }
.heat-arrows { animation: heat-pulse 1.6s ease-in-out infinite; }
</style>
