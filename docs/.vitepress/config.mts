import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import type MarkdownIt from 'markdown-it'
import { ACTIVE_FONT } from './theme/subjects'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

function buildSidebar(jsonPath: string) {
  const data = require('./' + jsonPath)
  return data.chapters.map((ch: any) => ({
    text: ch.title,
    collapsed: true,
    link: `${data.base}/chapters/${ch.id}/`,
    items: ch.lessons.map((l: any) => ({
      text: l.title,
      link: `${data.base}/chapters/${ch.id}/${l.id}`,
    })),
  }))
}

const curriculum = require('./curriculum.json')
const sidebar = buildSidebar(curriculum.ncert.class11.physics)

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
  lastUpdated: false,

  /* ── Sitemap ─────────────────────────────────────────────── */
  sitemap: {
    hostname: FULL_URL + '/',
  },

  /* ── Global <head> tags ──────────────────────────────────── */
  head: [
    // Favicon
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'alternate icon', href: '/favicon.svg' }],

    // Active font — driven by site.config.json fonts[].active
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: ACTIVE_FONT.googleUrl }],
    ['style', {}, `:root { --app-font-family: ${ACTIVE_FONT.family}; }`],

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
    if (pageData.relativePath.includes('/ncert/class11/physics/chapters/') && !pageData.relativePath.endsWith('index.md')) {
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
    logoLink: '/ncert/class11/physics/',
    nav: [],
    sidebar,
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous concept', next: 'Next concept' }
  }
})
