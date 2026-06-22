<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="ch-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--ch-c)"/>
      </marker>
    </defs>
    <line x1="60" y1="130" x2="380" y2="130" stroke="var(--ch-c)" stroke-width="2" opacity="0.3"/>
    <path d="M80,130 Q215,18 355,130" fill="none" stroke="var(--ch-c)" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.45"/>
    <line x1="80" y1="130" x2="110" y2="96" stroke="var(--ch-c)" stroke-width="2" marker-end="url(#ch-arrow)" opacity="0.8"/>
    <circle class="proj-ball" cx="0" cy="0" r="9" fill="var(--ch-c)" opacity="0.9">
      <animateMotion dur="2.8s" repeatCount="indefinite" calcMode="spline"
        keySplines="0.42 0 0.58 1"
        path="M80,130 Q215,18 355,130"/>
    </circle>
    <line x1="80" y1="142" x2="355" y2="142" stroke="var(--ch-c)" stroke-width="1" opacity="0.3"/>
    <text x="218" y="155" font-size="11" fill="var(--ch-c)" text-anchor="middle" opacity="0.7">Range R</text>
  </svg>
</template>
