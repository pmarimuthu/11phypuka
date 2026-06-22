<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="ch-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--ch-c)"/>
      </marker>
      <marker id="ch-arrow-y" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#f59e0b"/>
      </marker>
      <marker id="ch-arrow-g" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#10b981"/>
      </marker>
    </defs>
    <line x1="80" y1="110" x2="195" y2="58" stroke="var(--ch-c)" stroke-width="2.5" marker-end="url(#ch-arrow)"/>
    <text x="126" y="77" font-size="13" fill="var(--ch-c)" font-weight="700">A</text>
    <line x1="195" y1="58" x2="330" y2="110" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#ch-arrow-y)"/>
    <text x="268" y="77" font-size="13" fill="#f59e0b" font-weight="700">B</text>
    <line x1="80" y1="110" x2="330" y2="110" stroke="#10b981" stroke-width="2.5" stroke-dasharray="7 4" marker-end="url(#ch-arrow-g)"/>
    <text x="200" y="130" font-size="12" fill="#10b981" font-weight="700" text-anchor="middle">A + B</text>
  </svg>
</template>
