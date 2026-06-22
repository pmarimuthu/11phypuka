<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <ellipse id="ch-orbit" cx="210" cy="88" rx="125" ry="60" fill="none" stroke="var(--ch-c)" stroke-width="1.5" opacity="0.35"/>
    <circle cx="210" cy="88" r="14" fill="var(--ch-c)" opacity="0.55"/>
    <text x="210" y="93" text-anchor="middle" font-size="10" fill="white" font-weight="700">M</text>
    <circle r="10" fill="var(--ch-c)" opacity="0.9">
      <animateMotion dur="4s" repeatCount="indefinite">
        <mpath href="#ch-orbit"/>
      </animateMotion>
    </circle>
    <line x1="210" y1="88" x2="335" y2="88" stroke="var(--ch-c)" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.35"/>
    <text x="272" y="82" font-size="11" fill="var(--ch-c)" opacity="0.6" text-anchor="middle" font-style="italic">r</text>
  </svg>
</template>
