<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <!-- ── Left: Cricket Pitch (side view) ── -->
    <rect x="14" y="14" width="182" height="134" rx="7" fill="var(--ch-c)" opacity="0.05"/>
    <rect x="14" y="14" width="182" height="22"  rx="7" fill="var(--ch-c)" opacity="0.14"/>
    <text x="105" y="29" font-size="10" font-weight="700" fill="var(--ch-c)" text-anchor="middle" letter-spacing="1">CRICKET · PITCH</text>
    <!-- ground line -->
    <line x1="14" y1="104" x2="196" y2="104" stroke="var(--ch-c)" stroke-width="1.5" opacity="0.18"/>
    <!-- pitch surface (lighter rectangle, wicket to wicket) -->
    <rect x="28" y="82" width="158" height="22" rx="2" fill="var(--ch-c)" opacity="0.1"/>
    <!-- LEFT stumps (batting end) -->
    <rect x="25" y="60" width="2.5" height="44" rx="1" fill="var(--ch-c)" opacity="0.8"/>
    <rect x="29" y="60" width="2.5" height="44" rx="1" fill="var(--ch-c)" opacity="0.8"/>
    <rect x="33" y="60" width="2.5" height="44" rx="1" fill="var(--ch-c)" opacity="0.8"/>
    <line x1="23" y1="60" x2="37" y2="60" stroke="var(--ch-c)" stroke-width="2.2" opacity="0.8"/>
    <!-- RIGHT stumps (bowling end) -->
    <rect x="181" y="60" width="2.5" height="44" rx="1" fill="var(--ch-c)" opacity="0.45"/>
    <rect x="185" y="60" width="2.5" height="44" rx="1" fill="var(--ch-c)" opacity="0.45"/>
    <rect x="189" y="60" width="2.5" height="44" rx="1" fill="var(--ch-c)" opacity="0.45"/>
    <line x1="179" y1="60" x2="193" y2="60" stroke="var(--ch-c)" stroke-width="2.2" opacity="0.45"/>
    <!-- crease lines -->
    <line x1="19" y1="82" x2="42" y2="82" stroke="var(--ch-c)" stroke-width="1.5" opacity="0.38"/>
    <line x1="172" y1="82" x2="195" y2="82" stroke="var(--ch-c)" stroke-width="1.5" opacity="0.38"/>
    <!-- ball flight path (dashed: bowl end → pitch → bat) -->
    <path d="M187,72 Q148,106 107,106 Q66,106 29,74"
      fill="none" stroke="var(--ch-c)" stroke-width="1" stroke-dasharray="4 3" opacity="0.28"/>
    <!-- animated ball -->
    <circle r="7" fill="var(--ch-c)" opacity="0.9">
      <animateMotion dur="2.2s" repeatCount="indefinite" calcMode="spline"
        keyTimes="0;0.5;1"
        keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
        path="M187,72 Q148,106 107,106 Q66,106 29,74"/>
    </circle>
    <!-- BAT / BOWL labels -->
    <text x="29"  y="120" font-size="8" fill="var(--ch-c)" text-anchor="middle" opacity="0.42">BAT</text>
    <text x="186" y="120" font-size="8" fill="var(--ch-c)" text-anchor="middle" opacity="0.42">BOWL</text>
    <!-- dimension line -->
    <line x1="29" y1="134" x2="186" y2="134" stroke="var(--ch-c)" stroke-width="1" opacity="0.26"/>
    <line x1="29"  y1="129" x2="29"  y2="139" stroke="var(--ch-c)" stroke-width="1" opacity="0.26"/>
    <line x1="186" y1="129" x2="186" y2="139" stroke="var(--ch-c)" stroke-width="1" opacity="0.26"/>
    <text x="107" y="150" font-size="9" fill="var(--ch-c)" text-anchor="middle" opacity="0.65" font-weight="600">20.12 m · ball = 0.156 kg</text>
    <!-- ── Divider ── -->
    <line x1="202" y1="10" x2="202" y2="154" stroke="var(--ch-c)" stroke-width="0.5" opacity="0.1"/>
    <!-- ── Right: 7 SI chips with cricket values (value + unit + context) ── -->
    <!-- Row 1: m  kg  s  A -->
    <g class="su1">
      <rect x="204" y="14" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="227" y="43" font-size="15" font-weight="700" fill="var(--ch-c)" text-anchor="middle">20.12</text>
      <text x="227" y="55" font-size="11" font-weight="700" fill="var(--ch-c)" text-anchor="middle" opacity="0.85">m</text>
      <text x="227" y="65" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.55">pitch</text>
    </g>
    <g class="su2">
      <rect x="257" y="14" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="280" y="43" font-size="15" font-weight="700" fill="var(--ch-c)" text-anchor="middle">0.156</text>
      <text x="280" y="55" font-size="11" font-weight="700" fill="var(--ch-c)" text-anchor="middle" opacity="0.85">kg</text>
      <text x="280" y="65" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.55">ball</text>
    </g>
    <g class="su3">
      <rect x="310" y="14" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="333" y="43" font-size="15" font-weight="700" fill="var(--ch-c)" text-anchor="middle">0.42</text>
      <text x="333" y="55" font-size="11" font-weight="700" fill="var(--ch-c)" text-anchor="middle" opacity="0.85">s</text>
      <text x="333" y="65" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.55">delivery</text>
    </g>
    <g class="su4">
      <rect x="363" y="14" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="386" y="43" font-size="15" font-weight="700" fill="var(--ch-c)" text-anchor="middle">800</text>
      <text x="386" y="55" font-size="11" font-weight="700" fill="var(--ch-c)" text-anchor="middle" opacity="0.85">A</text>
      <text x="386" y="65" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.55">lights</text>
    </g>
    <!-- Row 2: K  mol  cd -->
    <g class="su5">
      <rect x="227" y="80" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="250" y="109" font-size="15" font-weight="700" fill="var(--ch-c)" text-anchor="middle">305</text>
      <text x="250" y="121" font-size="11" font-weight="700" fill="var(--ch-c)" text-anchor="middle" opacity="0.85">K</text>
      <text x="250" y="131" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.55">air (32°C)</text>
    </g>
    <g class="su6">
      <rect x="280" y="80" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="303" y="109" font-size="15" font-weight="700" fill="var(--ch-c)" text-anchor="middle">~8</text>
      <text x="303" y="121" font-size="11" font-weight="700" fill="var(--ch-c)" text-anchor="middle" opacity="0.85">mol</text>
      <text x="303" y="131" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.55">carbon</text>
    </g>
    <g class="su7">
      <rect x="333" y="80" width="47" height="58" rx="5" fill="var(--ch-c)" opacity="0.1"/>
      <text x="356" y="109" font-size="15" font-weight="700" fill="var(--ch-c)" text-anchor="middle">1M</text>
      <text x="356" y="121" font-size="11" font-weight="700" fill="var(--ch-c)" text-anchor="middle" opacity="0.85">cd</text>
      <text x="356" y="131" font-size="7.5" fill="var(--ch-c)" text-anchor="middle" opacity="0.55">floodlight</text>
    </g>
  </svg>
</template>

<style scoped>
@keyframes chip-in { from { opacity: 0; } to { opacity: 1; } }
.su1 { animation: chip-in 0.4s 0.00s both; }
.su2 { animation: chip-in 0.4s 0.15s both; }
.su3 { animation: chip-in 0.4s 0.30s both; }
.su4 { animation: chip-in 0.4s 0.45s both; }
.su5 { animation: chip-in 0.4s 0.60s both; }
.su6 { animation: chip-in 0.4s 0.75s both; }
.su7 { animation: chip-in 0.4s 0.90s both; }
</style>
