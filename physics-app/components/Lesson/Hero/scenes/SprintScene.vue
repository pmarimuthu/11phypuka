<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <!-- ── Left: Sprint Track ── -->
    <rect x="14" y="14" width="182" height="134" rx="7" fill="var(--ch-c)" opacity="0.05"/>
    <rect x="14" y="14" width="182" height="22"  rx="7" fill="var(--ch-c)" opacity="0.14"/>
    <text x="105" y="29" font-size="10" font-weight="700" fill="var(--ch-c)" text-anchor="middle" letter-spacing="1.5">100 m  SPRINT</text>
    <!-- lane lines -->
    <line x1="14" y1="40"  x2="196" y2="40"  stroke="var(--ch-c)" stroke-width="1.2" opacity="0.18"/>
    <line x1="14" y1="58"  x2="196" y2="58"  stroke="var(--ch-c)" stroke-width="0.8" opacity="0.13"/>
    <line x1="14" y1="76"  x2="196" y2="76"  stroke="var(--ch-c)" stroke-width="0.8" opacity="0.13"/>
    <line x1="14" y1="94"  x2="196" y2="94"  stroke="var(--ch-c)" stroke-width="0.8" opacity="0.13"/>
    <line x1="14" y1="112" x2="196" y2="112" stroke="var(--ch-c)" stroke-width="1.2" opacity="0.18"/>
    <!-- start / finish lines -->
    <line x1="26"  y1="40" x2="26"  y2="112" stroke="var(--ch-c)" stroke-width="2"   opacity="0.28"/>
    <line x1="188" y1="40" x2="188" y2="112" stroke="var(--ch-c)" stroke-width="3"   stroke-dasharray="6 5" opacity="0.52"/>
    <text x="26"  y="124" font-size="8" fill="var(--ch-c)" text-anchor="middle" opacity="0.42">START</text>
    <text x="188" y="124" font-size="8" fill="var(--ch-c)" text-anchor="middle" opacity="0.42">FINISH</text>
    <!-- measurement dimension line -->
    <line x1="26"  y1="138" x2="188" y2="138" stroke="var(--ch-c)" stroke-width="1" opacity="0.28"/>
    <line x1="26"  y1="133" x2="26"  y2="143" stroke="var(--ch-c)" stroke-width="1" opacity="0.28"/>
    <line x1="188" y1="133" x2="188" y2="143" stroke="var(--ch-c)" stroke-width="1" opacity="0.28"/>
    <text x="107" y="153" font-size="9" fill="var(--ch-c)" text-anchor="middle" opacity="0.65" font-weight="600">d = 100 m · t = 9.58 s · m = 94 kg</text>
    <!-- animated runner in lane 2 (center y = 67) -->
    <g class="runner-slide">
      <circle cx="0" cy="0" r="10" fill="var(--ch-c)" opacity="0.9"/>
      <line x1="-14" y1="-3" x2="-24" y2="-3" stroke="var(--ch-c)" stroke-width="1.5" opacity="0.42"/>
      <line x1="-12" y1="4"  x2="-20" y2="4"  stroke="var(--ch-c)" stroke-width="1"   opacity="0.28"/>
    </g>
    <!-- ── Divider ── -->
    <line x1="202" y1="10" x2="202" y2="154" stroke="var(--ch-c)" stroke-width="0.5" opacity="0.1"/>
    <!-- ── Right: 7 SI Unit Chips ── -->
    <!-- Row 1: m  kg  s  A  (y: 14–72, x: 204–407, chip w=47, gap=6) -->
    <g class="su1">
      <rect x="204" y="14" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="227" y="49" font-size="23" font-weight="700" fill="var(--ch-c)" text-anchor="middle">m</text>
      <text x="227" y="63" font-size="8"  fill="var(--ch-c)" text-anchor="middle" opacity="0.65">length</text>
    </g>
    <g class="su2">
      <rect x="257" y="14" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="280" y="48" font-size="19" font-weight="700" fill="var(--ch-c)" text-anchor="middle">kg</text>
      <text x="280" y="63" font-size="8"  fill="var(--ch-c)" text-anchor="middle" opacity="0.65">mass</text>
    </g>
    <g class="su3">
      <rect x="310" y="14" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="333" y="49" font-size="23" font-weight="700" fill="var(--ch-c)" text-anchor="middle">s</text>
      <text x="333" y="63" font-size="8"  fill="var(--ch-c)" text-anchor="middle" opacity="0.65">time</text>
    </g>
    <g class="su4">
      <rect x="363" y="14" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="386" y="49" font-size="23" font-weight="700" fill="var(--ch-c)" text-anchor="middle">A</text>
      <text x="386" y="63" font-size="8"  fill="var(--ch-c)" text-anchor="middle" opacity="0.65">current</text>
    </g>
    <!-- Row 2: K  mol  cd  (y: 80–138, centred in right panel) -->
    <g class="su5">
      <rect x="227" y="80" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="250" y="115" font-size="23" font-weight="700" fill="var(--ch-c)" text-anchor="middle">K</text>
      <text x="250" y="130" font-size="8"  fill="var(--ch-c)" text-anchor="middle" opacity="0.65">temp.</text>
    </g>
    <g class="su6">
      <rect x="280" y="80" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="303" y="113" font-size="17" font-weight="700" fill="var(--ch-c)" text-anchor="middle">mol</text>
      <text x="303" y="130" font-size="8"  fill="var(--ch-c)" text-anchor="middle" opacity="0.65">amount</text>
    </g>
    <g class="su7">
      <rect x="333" y="80" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="356" y="115" font-size="21" font-weight="700" fill="var(--ch-c)" text-anchor="middle">cd</text>
      <text x="356" y="130" font-size="8"  fill="var(--ch-c)" text-anchor="middle" opacity="0.65">candela</text>
    </g>
  </svg>
</template>

<style scoped>
/* ── sprint runner (moves from start to finish, loops) ── */
@keyframes runner-run {
  0%   { transform: translate(26px, 67px); }
  68%  { transform: translate(188px, 67px); }
  84%  { transform: translate(188px, 67px); }
  100% { transform: translate(26px, 67px); }
}
.runner-slide { animation: runner-run 2.6s ease-in-out infinite; }

/* ── SI unit chips (staggered fade-in on mount) ── */
@keyframes chip-in { from { opacity: 0; } to { opacity: 1; } }
.su1 { animation: chip-in 0.4s 0.00s both; }
.su2 { animation: chip-in 0.4s 0.15s both; }
.su3 { animation: chip-in 0.4s 0.30s both; }
.su4 { animation: chip-in 0.4s 0.45s both; }
.su5 { animation: chip-in 0.4s 0.60s both; }
.su6 { animation: chip-in 0.4s 0.75s both; }
.su7 { animation: chip-in 0.4s 0.90s both; }
</style>
