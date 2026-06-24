<template>
  <a href="/" class="asb" title="All Subjects">
    <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="6" height="6" rx="1.2"/>
      <rect x="9" y="1" width="6" height="6" rx="1.2"/>
      <rect x="1" y="9" width="6" height="6" rx="1.2"/>
      <rect x="9" y="9" width="6" height="6" rx="1.2"/>
    </svg>
    <span>Subjects</span>
  </a>
</template>

<style scoped>
.asb {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 600;
  transition: border-color 0.15s, color 0.15s, background 0.15s;
  white-space: nowrap;
}
.asb:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 8%, var(--vp-c-bg));
}
.asb svg {
  width: 13px;
  height: 13px;
  opacity: 0.7;
  flex-shrink: 0;
}
</style>
