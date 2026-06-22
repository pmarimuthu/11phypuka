<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="ch-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--ch-c)"/>
      </marker>
    </defs>
    <!-- card 1: stopwatch, 3 sig figs -->
    <g class="sf1">
      <rect x="14" y="14" width="121" height="96" rx="8" fill="var(--ch-c)" opacity="0.1"/>
      <rect x="18" y="20" width="113" height="58" rx="5" fill="var(--ch-c)" opacity="0.18"/>
      <text x="74" y="61" font-size="30" font-weight="700" fill="var(--ch-c)" text-anchor="middle" font-family="monospace">1:23</text>
      <rect x="32" y="84" width="84" height="14" rx="5" fill="var(--ch-c)" opacity="0.16"/>
      <text x="74" y="94" font-size="9" font-weight="700" fill="var(--ch-c)" text-anchor="middle">3 sig figs</text>
      <text x="74" y="107" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.42">stopwatch</text>
    </g>
    <line x1="138" y1="61" x2="146" y2="61" stroke="var(--ch-c)" stroke-width="1.5" marker-end="url(#ch-arrow)" opacity="0.3"/>
    <!-- card 2: team timer, 4 sig figs -->
    <g class="sf2">
      <rect x="149" y="14" width="121" height="96" rx="8" fill="var(--ch-c)" opacity="0.1"/>
      <rect x="153" y="20" width="113" height="58" rx="5" fill="var(--ch-c)" opacity="0.18"/>
      <text x="209" y="61" font-size="24" font-weight="700" fill="var(--ch-c)" text-anchor="middle" font-family="monospace">1:23.4</text>
      <rect x="167" y="84" width="84" height="14" rx="5" fill="var(--ch-c)" opacity="0.16"/>
      <text x="209" y="94" font-size="9" font-weight="700" fill="var(--ch-c)" text-anchor="middle">4 sig figs</text>
      <text x="209" y="107" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.42">team timer</text>
    </g>
    <line x1="273" y1="61" x2="281" y2="61" stroke="var(--ch-c)" stroke-width="1.5" marker-end="url(#ch-arrow)" opacity="0.3"/>
    <!-- card 3: official F1, 6 sig figs -->
    <g class="sf3">
      <rect x="284" y="14" width="121" height="96" rx="8" fill="var(--ch-c)" opacity="0.1"/>
      <rect x="288" y="20" width="113" height="58" rx="5" fill="var(--ch-c)" opacity="0.18"/>
      <text x="344" y="61" font-size="20" font-weight="700" fill="var(--ch-c)" text-anchor="middle" font-family="monospace">1:23.456</text>
      <rect x="302" y="84" width="84" height="14" rx="5" fill="var(--ch-c)" opacity="0.16"/>
      <text x="344" y="94" font-size="9" font-weight="700" fill="var(--ch-c)" text-anchor="middle">6 sig figs</text>
      <text x="344" y="107" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.42">official F1 timing</text>
    </g>
    <!-- precision progression line -->
    <line x1="20" y1="122" x2="396" y2="122" stroke="var(--ch-c)" stroke-width="1" marker-end="url(#ch-arrow)" opacity="0.18"/>
    <text x="20"  y="136" font-size="8" fill="var(--ch-c)" opacity="0.38">less precise</text>
    <text x="396" y="136" font-size="8" fill="var(--ch-c)" text-anchor="end" opacity="0.38">more precise</text>
    <text x="210" y="152" font-size="9" fill="var(--ch-c)" text-anchor="middle" opacity="0.48" font-style="italic">More digits recorded = more significant figures</text>
  </svg>
</template>

<style scoped>
@keyframes chip-in { from { opacity: 0; } to { opacity: 1; } }
.sf1 { animation: chip-in 0.4s 0.00s both; }
.sf2 { animation: chip-in 0.4s 0.22s both; }
.sf3 { animation: chip-in 0.4s 0.44s both; }
</style>
