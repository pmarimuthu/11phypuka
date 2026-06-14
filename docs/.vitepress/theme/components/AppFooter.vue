<template>
  <footer class="app-footer">
    <div class="af-inner">
      <div class="af-copy">© 2025 Physics Companion · For students By students</div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  padding: 28px 24px 20px;
  margin-top: 40px;
}
.af-inner {
  max-width: 1152px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}
.af-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}
.af-logo { font-size: 1.3rem; }
.af-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  letter-spacing: 0.02em;
}
.af-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}
.af-tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  opacity: 0.8;
}
.af-copy {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}
</style>
