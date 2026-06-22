<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <line x1="40" y1="90" x2="400" y2="90" stroke="var(--ch-c)" stroke-width="1" opacity="0.2"/>
    <path class="wave-path"
      d="M40,90 C75,42 110,138 145,90 S215,42 250,90 S320,138 355,90 S390,42 410,90"
      fill="none" stroke="var(--ch-c)" stroke-width="2.5" opacity="0.85" stroke-linecap="round"/>
    <line x1="40" y1="142" x2="145" y2="142" stroke="var(--ch-c)" stroke-width="1" opacity="0.3"/>
    <text x="92" y="155" text-anchor="middle" font-size="11" fill="var(--ch-c)" opacity="0.65" font-style="italic">λ</text>
    <line x1="355" y1="56" x2="355" y2="90" stroke="var(--ch-c)" stroke-width="1" stroke-dasharray="3 2" opacity="0.3"/>
    <text x="370" y="76" font-size="10" fill="var(--ch-c)" opacity="0.55">A</text>
  </svg>
</template>

<style scoped>
@keyframes wave-move { from{transform:translateX(0)} to{transform:translateX(-105px)} }
.wave-path { animation: wave-move 2s linear infinite; }
</style>
