<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <line x1="80" y1="30" x2="350" y2="30" stroke="var(--ch-c)" stroke-width="1" stroke-dasharray="5 3" opacity="0.3"/>
    <text x="210" y="26" font-size="10" fill="var(--ch-c)" text-anchor="middle" opacity="0.5">Total E = constant</text>
    <text x="145" y="148" font-size="11" fill="#06b6d4" text-anchor="middle" font-weight="700">KE</text>
    <rect class="ke-bar" x="110" y="130" width="70" height="2" rx="3" fill="#06b6d4" opacity="0.85"/>
    <text x="285" y="148" font-size="11" fill="#8b5cf6" text-anchor="middle" font-weight="700">PE</text>
    <rect class="pe-bar" x="250" y="130" width="70" height="2" rx="3" fill="#8b5cf6" opacity="0.85"/>
    <line x1="80" y1="130" x2="370" y2="130" stroke="var(--ch-c)" stroke-width="1.5" opacity="0.25"/>
  </svg>
</template>

<style scoped>
@keyframes ke-grow { 0%{height:2px;y:130px} 50%{height:92px;y:38px} 100%{height:2px;y:130px} }
@keyframes pe-grow { 0%{height:92px;y:38px} 50%{height:2px;y:130px} 100%{height:92px;y:38px} }
.ke-bar { animation: ke-grow 2.4s ease-in-out infinite; }
.pe-bar { animation: pe-grow 2.4s ease-in-out infinite; }
</style>
