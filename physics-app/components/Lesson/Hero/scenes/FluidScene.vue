<template>
  <svg viewBox="0 0 420 160" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="ch-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--ch-c)"/>
      </marker>
    </defs>
    <path d="M50,62 L148,62 L175,80 L255,80 L282,62 L390,62" fill="none" stroke="var(--ch-c)" stroke-width="2" opacity="0.4"/>
    <path d="M50,118 L148,118 L175,100 L255,100 L282,118 L390,118" fill="none" stroke="var(--ch-c)" stroke-width="2" opacity="0.4"/>
    <line x1="72"  y1="90" x2="118" y2="90" stroke="var(--ch-c)" stroke-width="2.5" marker-end="url(#ch-arrow)" opacity="0.7"/>
    <line x1="178" y1="90" x2="252" y2="90" stroke="var(--ch-c)" stroke-width="3.5" marker-end="url(#ch-arrow)" opacity="0.9"/>
    <line x1="298" y1="90" x2="358" y2="90" stroke="var(--ch-c)" stroke-width="2.5" marker-end="url(#ch-arrow)" opacity="0.7"/>
    <text x="215" y="75" font-size="10" fill="var(--ch-c)" text-anchor="middle" font-weight="700" opacity="0.8">v₂ ↑  P₂ ↓</text>
    <text x="210" y="148" font-size="11" fill="var(--ch-c)" text-anchor="middle" opacity="0.6">P + ½ρv² = const</text>
  </svg>
</template>
