<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="ch-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--ch-c)"/>
      </marker>
    </defs>
    <!-- card 1: kitchen scale, "100 g" — ambiguous trailing zeros -->
    <g class="sf1">
      <rect x="14" y="14" width="121" height="100" rx="8" fill="var(--ch-c)" opacity="0.1"/>
      <rect x="18" y="20" width="113" height="64" rx="5" fill="var(--ch-c)" opacity="0.16"/>
      <text x="84" y="42" font-size="13" fill="var(--ch-c)" text-anchor="middle" opacity="0.62">??</text>
      <text font-size="24" font-weight="700" font-family="monospace" text-anchor="middle" x="74" y="65">
        <tspan fill="var(--ch-c)">1</tspan><tspan fill="var(--ch-c)" opacity="0.28">00</tspan><tspan fill="var(--ch-c)"> g</tspan>
      </text>
      <rect x="20" y="88" width="108" height="14" rx="5" fill="var(--ch-c)" opacity="0.14"/>
      <text x="74" y="98" font-size="8.5" font-weight="700" fill="var(--ch-c)" text-anchor="middle">1–3 sig figs?</text>
      <text x="74" y="110" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.42">kitchen scale</text>
    </g>
    <line x1="138" y1="60" x2="146" y2="60" stroke="var(--ch-c)" stroke-width="1.5" marker-end="url(#ch-arrow)" opacity="0.3"/>
    <!-- card 2: pharmacy scale, "100.0 g" — 4 sig figs, .0 highlighted -->
    <g class="sf2">
      <rect x="149" y="14" width="121" height="100" rx="8" fill="var(--ch-c)" opacity="0.1"/>
      <rect x="153" y="20" width="113" height="64" rx="5" fill="var(--ch-c)" opacity="0.16"/>
      <text font-size="21" font-weight="700" font-family="monospace" text-anchor="middle" x="209" y="63">
        <tspan fill="var(--ch-c)">100</tspan><tspan fill="#10b981">.0</tspan><tspan fill="var(--ch-c)"> g</tspan>
      </text>
      <rect x="155" y="88" width="108" height="14" rx="5" fill="var(--ch-c)" opacity="0.14"/>
      <text x="209" y="98" font-size="9" font-weight="700" fill="var(--ch-c)" text-anchor="middle">4 sig figs</text>
      <text x="209" y="110" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.42">pharmacy scale</text>
    </g>
    <line x1="273" y1="60" x2="281" y2="60" stroke="var(--ch-c)" stroke-width="1.5" marker-end="url(#ch-arrow)" opacity="0.3"/>
    <!-- card 3: lab balance, "100.00 g" — 5 sig figs, .00 highlighted -->
    <g class="sf3">
      <rect x="284" y="14" width="121" height="100" rx="8" fill="var(--ch-c)" opacity="0.1"/>
      <rect x="288" y="20" width="113" height="64" rx="5" fill="var(--ch-c)" opacity="0.16"/>
      <text font-size="20" font-weight="700" font-family="monospace" text-anchor="middle" x="344" y="63">
        <tspan fill="var(--ch-c)">100</tspan><tspan fill="#10b981">.00</tspan><tspan fill="var(--ch-c)"> g</tspan>
      </text>
      <rect x="290" y="88" width="108" height="14" rx="5" fill="var(--ch-c)" opacity="0.14"/>
      <text x="344" y="98" font-size="9" font-weight="700" fill="var(--ch-c)" text-anchor="middle">5 sig figs</text>
      <text x="344" y="110" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.42">lab balance</text>
    </g>
    <!-- trailing zero rule -->
    <text x="210" y="130" font-size="9" fill="var(--ch-c)" text-anchor="middle" opacity="0.52" font-weight="600">Trailing zeros after a decimal point are always significant</text>
    <text x="210" y="147" font-size="8.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.38" font-style="italic">100 g = ambiguous · 100.0 g = 4 sig figs · 100.00 g = 5 sig figs</text>
  </svg>
</template>

<style scoped>
@keyframes chip-in { from { opacity: 0; } to { opacity: 1; } }
.sf1 { animation: chip-in 0.4s 0.00s both; }
.sf2 { animation: chip-in 0.4s 0.22s both; }
.sf3 { animation: chip-in 0.4s 0.44s both; }
</style>
