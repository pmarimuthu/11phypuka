<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="28" width="300" height="108" rx="8" fill="none" stroke="var(--ch-c)" stroke-width="1.5" opacity="0.3"/>
    <circle class="pt1" cx="105" cy="70"  r="7" fill="var(--ch-c)" opacity="0.75"/>
    <circle class="pt2" cx="185" cy="118" r="7" fill="var(--ch-c)" opacity="0.75"/>
    <circle class="pt3" cx="265" cy="50"  r="7" fill="var(--ch-c)" opacity="0.75"/>
    <circle class="pt4" cx="320" cy="100" r="7" fill="var(--ch-c)" opacity="0.75"/>
    <circle class="pt5" cx="140" cy="88"  r="7" fill="var(--ch-c)" opacity="0.75"/>
    <circle class="pt6" cx="230" cy="66"  r="7" fill="var(--ch-c)" opacity="0.75"/>
    <text x="210" y="155" font-size="11" fill="var(--ch-c)" text-anchor="middle" opacity="0.6">KE ∝ Temperature</text>
  </svg>
</template>

<style scoped>
@keyframes p1 { 0%,100%{transform:translate(0,0)}  33%{transform:translate(52px,-28px)}  66%{transform:translate(-30px,22px)} }
@keyframes p2 { 0%,100%{transform:translate(0,0)}  33%{transform:translate(-44px,18px)}  66%{transform:translate(34px,-32px)} }
@keyframes p3 { 0%,100%{transform:translate(0,0)}  33%{transform:translate(28px,36px)}   66%{transform:translate(-48px,-12px)} }
@keyframes p4 { 0%,100%{transform:translate(0,0)}  33%{transform:translate(-32px,-22px)} 66%{transform:translate(40px,28px)} }
@keyframes p5 { 0%,100%{transform:translate(0,0)}  33%{transform:translate(44px,26px)}   66%{transform:translate(-26px,-34px)} }
@keyframes p6 { 0%,100%{transform:translate(0,0)}  33%{transform:translate(-36px,-30px)} 66%{transform:translate(30px,20px)} }
.pt1 { animation: p1 2.1s ease-in-out infinite; }
.pt2 { animation: p2 2.5s ease-in-out infinite; }
.pt3 { animation: p3 1.9s ease-in-out infinite; }
.pt4 { animation: p4 2.8s ease-in-out infinite; }
.pt5 { animation: p5 2.3s ease-in-out infinite; }
.pt6 { animation: p6 2.0s ease-in-out infinite; }
</style>
