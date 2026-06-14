<script setup lang="ts">
import PhysicsAnim from './PhysicsAnim.vue'

const chapters = [
  { num: 1,  title: 'Physical World',             path: '/chapters/ch01-physical-world/' },
  { num: 2,  title: 'Units & Measurement',         path: '/chapters/ch02-units-measurement/' },
  { num: 3,  title: 'Motion in a Straight Line',   path: '/chapters/ch03-motion-straight-line/' },
  { num: 4,  title: 'Motion in a Plane',           path: '/chapters/ch04-motion-plane/' },
  { num: 5,  title: 'Laws of Motion',              path: '/chapters/ch05-laws-of-motion/' },
  { num: 6,  title: 'Work, Energy & Power',        path: '/chapters/ch06-work-energy-power/' },
  { num: 7,  title: 'Systems of Particles',        path: '/chapters/ch07-systems-particles/' },
  { num: 8,  title: 'Gravitation',                 path: '/chapters/ch08-gravitation/' },
  { num: 9,  title: 'Mechanical Properties of Solids', path: '/chapters/ch09-mechanical-properties-solids/' },
  { num: 10, title: 'Mechanical Properties of Fluids', path: '/chapters/ch10-mechanical-properties-fluids/' },
  { num: 11, title: 'Thermal Properties of Matter', path: '/chapters/ch11-thermal-properties/' },
  { num: 12, title: 'Thermodynamics',              path: '/chapters/ch12-thermodynamics/' },
  { num: 13, title: 'Kinetic Theory',              path: '/chapters/ch13-kinetic-theory/' },
  { num: 14, title: 'Oscillations',                path: '/chapters/ch14-oscillations/' },
  { num: 15, title: 'Waves',                       path: '/chapters/ch15-waves/' },
]

const features = [
  { icon: '💡', color: '#f59e0b', title: 'Concept First',     desc: 'Understand the "why" before touching a formula. Every topic starts with intuition.' },
  { icon: '🌍', color: '#10b981', title: 'Real Examples',      desc: 'Physics from everyday life — lightning, fridges, bridges, rockets.' },
  { icon: '✅', color: '#06b6d4', title: 'Quick Quizzes',      desc: 'Bite-sized questions after each concept. Instant feedback.' },
  { icon: '🎬', color: '#8b5cf6', title: 'Live Animations',    desc: 'Watch, Explore (interactive), and Feel (3D) — three ways to see physics.' },
]
</script>

<template>
  <div class="hl-root">
    <!-- ── NAV ── -->
    <header class="hl-nav">
      <div class="hl-nav-inner">
        <a href="/" class="hl-logo">
          <span class="hl-logo-icon">⚛</span>
          <span class="hl-logo-text">Physics Companion</span>
        </a>
        <nav class="hl-nav-links">
          <a href="/chapters/">Chapters</a>
        </nav>
        <a href="/chapters/" class="hl-cta-sm">Start →</a>
      </div>
    </header>

    <!-- ── HERO ── -->
    <section class="hl-hero">
      <div class="hl-hero-inner">
        <div class="hl-hero-text">
          <div class="hl-badge">Class 11 · Karnataka PU · NCERT</div>
          <h1 class="hl-h1">Physics that<br><span class="hl-accent">makes sense</span></h1>
          <p class="hl-tagline">Concept first. Formula second.<br>One real example. Then you own it.</p>
          <div class="hl-hero-actions">
            <a href="/chapters/" class="hl-btn-primary">Start Learning →</a>
            <a href="/chapters/01-units-and-measurement/dimensional-analysis" class="hl-btn-ghost">Try a Lesson</a>
          </div>
          <div class="hl-exam-tags">
            <span>JEE Main</span><span>JEE Advanced</span><span>KCET / KEA</span><span>Karnataka PU Board</span>
          </div>
        </div>
        <div class="hl-hero-anim">
          <div class="hl-anim-card">
            <PhysicsAnim />
          </div>
        </div>
      </div>
    </section>

    <!-- ── FEATURES ── -->
    <section class="hl-section">
      <div class="hl-section-inner">
        <h2 class="hl-section-title">Built differently</h2>
        <div class="hl-features">
          <div v-for="f in features" :key="f.title" class="hl-feat-card" :style="`--fc:${f.color}`">
            <div class="hl-feat-icon">{{ f.icon }}</div>
            <h3 class="hl-feat-title">{{ f.title }}</h3>
            <p class="hl-feat-desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FOOTER ── -->
    <footer class="hl-footer">
      <div class="hl-footer-inner">
        <div class="hl-footer-brand">
          <span>⚛</span>
          <span>Physics Companion</span>
        </div>
        <p class="hl-footer-copy">© 2025 Physics Companion · For students By students</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* ── RESET / ROOT ── */
.hl-root {
  min-height: 100vh;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: system-ui, -apple-system, sans-serif;
  display: flex;
  flex-direction: column;
}

/* ── NAV ── */
.hl-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--vp-c-bg) 85%, transparent);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--vp-c-divider);
}
.hl-nav-inner {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 20px;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.hl-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  flex-shrink: 0;
}
.hl-logo-icon { font-size: 1.3rem; }
.hl-logo-text {
  font-weight: 800;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  letter-spacing: -0.01em;
}
.hl-nav-links {
  display: flex;
  gap: 16px;
  margin-left: auto;
}
.hl-nav-links a {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s;
}
.hl-nav-links a:hover { color: var(--vp-c-brand-1); }
.hl-cta-sm {
  background: var(--vp-c-brand-1);
  color: #fff;
  padding: 6px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 700;
  flex-shrink: 0;
  transition: opacity 0.15s;
}
.hl-cta-sm:hover { opacity: 0.85; }

/* ── HERO ── */
.hl-hero {
  padding: 60px 20px 40px;
  background: linear-gradient(160deg, var(--vp-c-bg) 0%, color-mix(in srgb, var(--vp-c-brand-1) 6%, var(--vp-c-bg)) 100%);
}
.hl-hero-inner {
  max-width: 1152px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}
.hl-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 30%, transparent);
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 18px;
}
.hl-h1 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0 0 16px;
  color: var(--vp-c-text-1);
}
.hl-accent {
  background: linear-gradient(90deg, var(--vp-c-brand-1), #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hl-tagline {
  font-size: 1.05rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 28px;
}
.hl-hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.hl-btn-primary {
  background: var(--vp-c-brand-1);
  color: #fff;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  transition: opacity 0.15s, transform 0.15s;
  display: inline-block;
}
.hl-btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
.hl-btn-ghost {
  border: 2px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  padding: 11px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: border-color 0.15s, color 0.15s;
  display: inline-block;
}
.hl-btn-ghost:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.hl-exam-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.hl-exam-tags span {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 3px 10px;
  border-radius: 20px;
}

/* ── ANIMATION CARD ── */
.hl-hero-anim {
  display: flex;
  justify-content: center;
}
.hl-anim-card {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 4/3;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}

/* ── SECTIONS ── */
.hl-section { padding: 60px 20px; }
.hl-section--alt { background: var(--vp-c-bg-soft); }
.hl-section-inner { max-width: 1152px; margin: 0 auto; }
.hl-section-title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 36px;
  color: var(--vp-c-text-1);
  text-align: center;
}

/* ── FEATURE CARDS ── */
.hl-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.hl-feat-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-top: 3px solid var(--fc, #06b6d4);
  border-radius: 12px;
  padding: 24px 20px;
  transition: transform 0.15s, box-shadow 0.15s;
}
.hl-feat-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
.hl-feat-icon { font-size: 1.8rem; margin-bottom: 12px; }
.hl-feat-title { font-size: 1rem; font-weight: 700; margin: 0 0 8px; color: var(--vp-c-text-1); }
.hl-feat-desc { font-size: 0.85rem; color: var(--vp-c-text-2); line-height: 1.6; margin: 0; }

/* ── CHAPTER CARDS ── */
.hl-chapters {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 12px;
}
.hl-ch-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 14px 16px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: border-color 0.15s, background 0.15s, transform 0.15s;
}
.hl-ch-card:hover {
  border-color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 5%, var(--vp-c-bg));
  transform: translateX(2px);
}
.hl-ch-num {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
  min-width: 22px;
}
.hl-ch-title { font-size: 0.9rem; font-weight: 500; flex: 1; }
.hl-ch-arr { font-size: 0.85rem; color: var(--vp-c-text-3); transition: color 0.15s; }
.hl-ch-card:hover .hl-ch-arr { color: var(--vp-c-brand-1); }

/* ── FOOTER ── */
.hl-footer {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  padding: 28px 20px 24px;
  margin-top: auto;
}
.hl-footer-inner {
  max-width: 1152px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}
.hl-footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.hl-footer-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}
.hl-footer-tags span {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  opacity: 0.75;
}
.hl-footer-copy { font-size: 0.72rem; color: var(--vp-c-text-3); margin: 0; }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .hl-hero-inner {
    grid-template-columns: 1fr;
  }
  .hl-hero-anim { order: -1; }
  .hl-anim-card { max-width: 100%; aspect-ratio: 16/9; }
  .hl-nav-links { display: none; }
  .hl-h1 { font-size: 2rem; }
}
@media (max-width: 480px) {
  .hl-hero { padding: 32px 16px 28px; }
  .hl-section { padding: 40px 16px; }
  .hl-chapters { grid-template-columns: 1fr; }
  .hl-features { grid-template-columns: 1fr; }
  .hl-btn-primary, .hl-btn-ghost { width: 100%; text-align: center; }
}
</style>
