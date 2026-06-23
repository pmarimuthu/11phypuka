import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import type MarkdownIt from 'markdown-it'

const ICONS: Record<string, string> = {
  idea: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.1 14c.2-1 .7-1.7 1.4-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.8 1.2 1.5 1.4 2.5"/></svg>',
  formula: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10.5" x2="8.01" y2="10.5"/><line x1="12" y1="10.5" x2="12.01" y2="10.5"/><line x1="16" y1="10.5" x2="16.01" y2="10.5"/><line x1="8" y1="14.5" x2="8.01" y2="14.5"/><line x1="12" y1="14.5" x2="12.01" y2="14.5"/><line x1="8" y1="18" x2="12" y2="18"/><line x1="16" y1="14.5" x2="16" y2="18"/></svg>',
  real: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  try: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v6.6L4.9 18.8A2 2 0 0 0 6.7 22h10.6a2 2 0 0 0 1.8-3.2L14 9.6V3"/><line x1="7.5" y1="15" x2="16.5" y2="15"/></svg>',
  whatif: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-9 8.3 8.5 8.5 0 0 1-3.9-.8L3 20l1.3-4A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 9 8.5z"/><path d="M9.8 9.3a2.2 2.2 0 0 1 4.3.7c0 1.5-2.2 2.2-2.2 2.2"/><line x1="12" y1="15.5" x2="12.01" y2="15.5"/></svg>'
}

const LABELS: Record<string, string> = {
  idea: 'The Idea',
  formula: 'The Formula',
  real: 'Real-World Example',
  try: 'Try It At Home',
  whatif: 'What If…'
}

const NOTE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5h6v2H9z"/><line x1="8.5" y1="11" x2="15.5" y2="11"/><line x1="8.5" y1="14.5" x2="15.5" y2="14.5"/><line x1="8.5" y1="18" x2="12.5" y2="18"/></svg>'

function registerBlock(md: MarkdownIt, name: string) {
  md.use(container, name, {
    render(tokens: any[], idx: number) {
      if (tokens[idx].nesting === 1) {
        return (
          `<div class="pc-block pc-${name}">` +
          `<div class="pc-head"><span class="pc-ico pc-ico-${name}">${ICONS[name]}</span>` +
          `<span class="pc-label">${LABELS[name]}</span></div>` +
          `<div class="pc-body">\n`
        )
      }
      return `</div></div>\n`
    }
  })
}

function registerNotes(md: MarkdownIt) {
  md.use(container, 'notes', {
    render(tokens: any[], idx: number) {
      if (tokens[idx].nesting === 1) {
        return (
          '<details class="exam-notes"><summary class="en-summary">' +
          `<span class="en-ico">${NOTE_ICON}</span>` +
          '<span class="en-title">Exam-Hall Quick Notes</span>' +
          '<span class="en-chev">▶</span></summary><div class="en-body">\n'
        )
      }
      return '</div></details>\n'
    }
  })
}

const REF_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18"/></svg>'

function registerRefs(md: MarkdownIt) {
  md.use(container, 'refs', {
    render(tokens: any[], idx: number) {
      if (tokens[idx].nesting === 1) {
        return (
          '<details class="ext-refs"><summary class="er-summary">' +
          `<span class="er-ico">${REF_ICON}</span>` +
          '<span class="er-title">Learn More — World-Class Sources</span>' +
          '<span class="er-chev">▶</span></summary><div class="er-body">\n'
        )
      }
      return '</div></details>\n'
    }
  })
}

const SITE_URL  = 'https://learn.kanaksan.com'
const BASE_PATH = ''
const FULL_URL  = SITE_URL

export default defineConfig({
  base: '/',
  lang: 'en-IN',
  title: 'Physics Companion',
  titleTemplate: ':title · Class 11 Physics NCERT',
  description:
    'Class 11 Physics made simple — concept first, then formula. Real-world examples, interactive animations, home experiments. NCERT syllabus for Karnataka PU, JEE Main, JEE Advanced, KCET.',
  cleanUrls: true,
  lastUpdated: true,

  /* ── Sitemap ─────────────────────────────────────────────── */
  sitemap: {
    hostname: FULL_URL + '/',
  },

  /* ── Global <head> tags ──────────────────────────────────── */
  head: [
    // Favicon
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'alternate icon', href: '/favicon.svg' }],

    // Viewport & theme
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: 'theme-color', content: '#3a7bd5' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],

    // Global keywords
    ['meta', { name: 'keywords', content: 'Class 11 Physics, NCERT Physics, Karnataka PU Physics, JEE Main Physics, JEE Advanced Physics, KCET Physics, KEA Physics, physics notes, physics formulas, physics concepts' }],
    ['meta', { name: 'author', content: 'Kanaksan Physics Companion' }],
    ['meta', { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],

    // Open Graph defaults (per-page values injected via transformHead)
    ['meta', { property: 'og:type',        content: 'website' }],
    ['meta', { property: 'og:site_name',   content: 'Physics Companion — Class 11 NCERT' }],
    ['meta', { property: 'og:image',       content: FULL_URL + '/og-cover.svg' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height',content: '630' }],
    ['meta', { property: 'og:locale',      content: 'en_IN' }],

    // Twitter / X card
    ['meta', { name: 'twitter:card',    content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image',   content: FULL_URL + '/og-cover.svg' }],
    ['meta', { name: 'twitter:creator', content: '@kanaksan' }],

    // Canonical base
    ['link', { rel: 'canonical', href: FULL_URL + '/' }],

    // JSON-LD — global site identity
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Physics Companion — Class 11 NCERT',
      url: FULL_URL + '/',
      description: 'Interactive Class 11 Physics notes for NCERT, Karnataka PU, JEE and KCET.',
      inLanguage: 'en-IN',
      publisher: {
        '@type': 'Organization',
        name: 'Kanaksan',
        url: SITE_URL,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: FULL_URL + '/?search={search_term_string}' },
        'query-input': 'required name=search_term_string',
      },
    })],
  ],

  /* ── Per-page <head> injection ───────────────────────────── */
  transformHead({ pageData, siteConfig }) {
    const tags: any[] = []
    const fm   = pageData.frontmatter ?? {}
    const title = fm.title
      ?? (pageData.title ? pageData.title + ' · Class 11 Physics NCERT' : siteConfig.site.title)
    const desc  = fm.description ?? siteConfig.site.description
    const path  = pageData.relativePath.replace(/\.md$/, '').replace(/index$/, '')
    const url   = FULL_URL + '/' + path

    tags.push(['meta', { property: 'og:title',       content: title }])
    tags.push(['meta', { property: 'og:description', content: desc  }])
    tags.push(['meta', { property: 'og:url',         content: url   }])
    tags.push(['meta', { name: 'twitter:title',       content: title }])
    tags.push(['meta', { name: 'twitter:description', content: desc  }])
    tags.push(['link', { rel: 'canonical',            href: url      }])

    // Article structured data for lesson pages
    if (pageData.relativePath.includes('/chapters/') && !pageData.relativePath.endsWith('index.md')) {
      tags.push(['script', { type: 'application/ld+json' }, JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LearningResource',
        name: title,
        description: desc,
        url,
        inLanguage: 'en-IN',
        educationalLevel: 'Grade 11',
        learningResourceType: 'lesson',
        teaches: title,
        isPartOf: { '@type': 'Course', name: 'Class 11 Physics NCERT', url: FULL_URL + '/' },
        provider: { '@type': 'Organization', name: 'Kanaksan', url: SITE_URL },
      })])
    }

    return tags
  },


  markdown: {
    math: true,
    config: (md) => {
      ;['idea', 'formula', 'real', 'try', 'whatif'].forEach((n) => registerBlock(md, n))
      registerNotes(md)
      registerRefs(md)
    }
  },
  themeConfig: {
    search: { provider: 'local' },
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Ch 1 — Units & Measurement',
        collapsed: true,
        link: '/chapters/01-units-and-measurement/',
        items: [
          { text: 'Physical Quantities & SI Units', link: '/chapters/01-units-and-measurement/physical-quantities-and-si-units' },
          { text: 'Significant Figures', link: '/chapters/01-units-and-measurement/significant-figures' },
          { text: 'Dimensions of Physical Quantities', link: '/chapters/01-units-and-measurement/dimensions-of-physical-quantities' },
          { text: 'Dimensional Analysis', link: '/chapters/01-units-and-measurement/dimensional-analysis' }
        ]
      },
      {
        text: 'Ch 2 — Motion in a Straight Line',
        collapsed: true,
        link: '/chapters/02-motion-in-a-straight-line/',
        items: [
          { text: 'Position, Displacement & Path Length', link: '/chapters/02-motion-in-a-straight-line/displacement' },
          { text: 'Velocity & Speed', link: '/chapters/02-motion-in-a-straight-line/velocity-and-speed' },
          { text: 'Acceleration', link: '/chapters/02-motion-in-a-straight-line/acceleration' },
          { text: 'Equations of Motion', link: '/chapters/02-motion-in-a-straight-line/equations-of-motion' },
          { text: 'Relative Velocity', link: '/chapters/02-motion-in-a-straight-line/relative-velocity' }
        ]
      },
      {
        text: 'Ch 3 — Motion in a Plane',
        collapsed: true,
        link: '/chapters/03-motion-in-a-plane/',
        items: [
          { text: 'Scalars and Vectors', link: '/chapters/03-motion-in-a-plane/scalars-and-vectors' },
          { text: 'Vector Addition', link: '/chapters/03-motion-in-a-plane/vector-addition' },
          { text: 'Components of a Vector', link: '/chapters/03-motion-in-a-plane/vector-components' },
          { text: 'Unit Vectors', link: '/chapters/03-motion-in-a-plane/unit-vectors' },
          { text: 'Relative Velocity in 2D', link: '/chapters/03-motion-in-a-plane/relative-velocity-2d' },
          { text: 'Projectile Motion', link: '/chapters/03-motion-in-a-plane/projectile-motion' },
          { text: 'Uniform Circular Motion', link: '/chapters/03-motion-in-a-plane/uniform-circular-motion' }
        ]
      },
      {
        text: 'Ch 4 — Laws of Motion',
        collapsed: true,
        link: '/chapters/04-laws-of-motion/',
        items: [
          { text: 'Inertia & the First Law', link: '/chapters/04-laws-of-motion/inertia-and-first-law' },
          { text: 'Momentum & the Second Law', link: '/chapters/04-laws-of-motion/momentum-and-second-law' },
          { text: 'Impulse', link: '/chapters/04-laws-of-motion/impulse' },
          { text: 'The Third Law', link: '/chapters/04-laws-of-motion/third-law' },
          { text: 'Conservation of Momentum', link: '/chapters/04-laws-of-motion/conservation-of-momentum' },
          { text: 'Equilibrium of a Particle', link: '/chapters/04-laws-of-motion/equilibrium-of-a-particle' },
          { text: 'Friction', link: '/chapters/04-laws-of-motion/friction' },
          { text: 'Circular Motion', link: '/chapters/04-laws-of-motion/circular-motion' }
        ]
      },
      {
        text: 'Ch 5 — Work, Energy and Power',
        collapsed: true,
        link: '/chapters/05-work-energy-power/',
        items: [
          { text: 'Work', link: '/chapters/05-work-energy-power/work' },
          { text: 'Kinetic Energy & Work–Energy Theorem', link: '/chapters/05-work-energy-power/kinetic-energy' },
          { text: 'Potential Energy', link: '/chapters/05-work-energy-power/potential-energy' },
          { text: 'Conservation of Mechanical Energy', link: '/chapters/05-work-energy-power/conservation-of-energy' },
          { text: 'Power', link: '/chapters/05-work-energy-power/power' },
          { text: 'Collisions', link: '/chapters/05-work-energy-power/collisions' }
        ]
      },
      {
        text: 'Ch 6 — Rotational Motion',
        collapsed: true,
        link: '/chapters/06-system-of-particles-rotational-motion/',
        items: [
          { text: 'Centre of Mass', link: '/chapters/06-system-of-particles-rotational-motion/centre-of-mass' },
          { text: 'Torque', link: '/chapters/06-system-of-particles-rotational-motion/torque' },
          { text: 'Angular Momentum', link: '/chapters/06-system-of-particles-rotational-motion/angular-momentum' },
          { text: 'Moment of Inertia', link: '/chapters/06-system-of-particles-rotational-motion/moment-of-inertia' },
          { text: 'Rolling Motion', link: '/chapters/06-system-of-particles-rotational-motion/rolling-motion' }
        ]
      },
      {
        text: 'Ch 7 — Gravitation',
        collapsed: true,
        link: '/chapters/07-gravitation/',
        items: [
          { text: 'Universal Law of Gravitation', link: '/chapters/07-gravitation/universal-law' },
          { text: 'Gravitational Field & Potential', link: '/chapters/07-gravitation/gravitational-field' },
          { text: 'Escape Velocity', link: '/chapters/07-gravitation/escape-velocity' },
          { text: 'Satellites & Orbital Motion', link: '/chapters/07-gravitation/satellites' },
          { text: 'Mission: Launch a Satellite', link: '/chapters/07-gravitation/mission-launch-a-satellite' },
          { text: "Kepler's Laws", link: '/chapters/07-gravitation/keplers-laws' }
        ]
      },
      {
        text: 'Ch 8 — Properties of Solids',
        collapsed: true,
        link: '/chapters/08-mechanical-properties-of-solids/',
        items: [
          { text: 'Stress and Strain', link: '/chapters/08-mechanical-properties-of-solids/stress-and-strain' },
          { text: "Hooke's Law", link: '/chapters/08-mechanical-properties-of-solids/hookes-law' },
          { text: 'Elastic Moduli', link: '/chapters/08-mechanical-properties-of-solids/elastic-moduli' },
          { text: 'Stress–Strain Curve', link: '/chapters/08-mechanical-properties-of-solids/stress-strain-curve' },
          { text: 'Applications of Elasticity', link: '/chapters/08-mechanical-properties-of-solids/applications' }
        ]
      },
      {
        text: 'Ch 9 — Properties of Fluids',
        collapsed: true,
        link: '/chapters/09-mechanical-properties-of-fluids/',
        items: [
          { text: "Pressure & Pascal's Law", link: '/chapters/09-mechanical-properties-of-fluids/pressure-pascals-law' },
          { text: "Archimedes' Principle", link: '/chapters/09-mechanical-properties-of-fluids/archimedes-principle' },
          { text: "Viscosity & Stokes' Law", link: '/chapters/09-mechanical-properties-of-fluids/viscosity' },
          { text: 'Surface Tension', link: '/chapters/09-mechanical-properties-of-fluids/surface-tension' },
          { text: "Bernoulli's Theorem", link: '/chapters/09-mechanical-properties-of-fluids/bernoullis-theorem' }
        ]
      },
      {
        text: 'Ch 10 — Thermal Properties',
        collapsed: true,
        link: '/chapters/10-thermal-properties-of-matter/',
        items: [
          { text: 'Temperature & Heat', link: '/chapters/10-thermal-properties-of-matter/temperature-and-heat' },
          { text: 'Thermal Expansion', link: '/chapters/10-thermal-properties-of-matter/thermal-expansion' },
          { text: 'Calorimetry', link: '/chapters/10-thermal-properties-of-matter/calorimetry' },
          { text: 'Heat Transfer', link: '/chapters/10-thermal-properties-of-matter/heat-transfer' },
          { text: "Newton's Law of Cooling", link: '/chapters/10-thermal-properties-of-matter/newtons-law-of-cooling' }
        ]
      },
      {
        text: 'Ch 11 — Thermodynamics',
        collapsed: true,
        link: '/chapters/11-thermodynamics/',
        items: [
          { text: 'Zeroth & First Law', link: '/chapters/11-thermodynamics/first-law' },
          { text: 'Thermodynamic Processes', link: '/chapters/11-thermodynamics/thermodynamic-processes' },
          { text: 'Second Law & Entropy', link: '/chapters/11-thermodynamics/second-law' },
          { text: 'Heat Engines & Refrigerators', link: '/chapters/11-thermodynamics/heat-engines' },
          { text: 'Carnot Theorem', link: '/chapters/11-thermodynamics/carnot-theorem' }
        ]
      },
      {
        text: 'Ch 12 — Kinetic Theory',
        collapsed: true,
        link: '/chapters/12-kinetic-theory/',
        items: [
          { text: 'Kinetic Theory of Gases', link: '/chapters/12-kinetic-theory/kinetic-theory-gases' },
          { text: 'Speed of Gas Molecules', link: '/chapters/12-kinetic-theory/speed-of-molecules' },
          { text: 'Law of Equipartition of Energy', link: '/chapters/12-kinetic-theory/equipartition' },
          { text: 'Mean Free Path', link: '/chapters/12-kinetic-theory/mean-free-path' }
        ]
      },
      {
        text: 'Ch 13 — Oscillations',
        collapsed: true,
        link: '/chapters/13-oscillations/',
        items: [
          { text: 'Periodic Motion & SHM', link: '/chapters/13-oscillations/simple-harmonic-motion' },
          { text: 'Energy in SHM', link: '/chapters/13-oscillations/energy-in-shm' },
          { text: 'Simple Pendulum', link: '/chapters/13-oscillations/simple-pendulum' },
          { text: 'Damped Oscillations', link: '/chapters/13-oscillations/damped-oscillations' },
          { text: 'Forced Oscillations & Resonance', link: '/chapters/13-oscillations/resonance' }
        ]
      },
      {
        text: 'Ch 14 — Waves',
        collapsed: true,
        link: '/chapters/14-waves/',
        items: [
          { text: 'Wave Motion', link: '/chapters/14-waves/wave-motion' },
          { text: 'Speed of a Wave', link: '/chapters/14-waves/speed-of-waves' },
          { text: 'Superposition & Standing Waves', link: '/chapters/14-waves/standing-waves' },
          { text: 'Beats', link: '/chapters/14-waves/beats' },
          { text: 'Doppler Effect', link: '/chapters/14-waves/doppler-effect' }
        ]
      }
    ],
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous concept', next: 'Next concept' }
  }
})
