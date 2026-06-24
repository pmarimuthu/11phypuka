/**
 * breadcrumb.config.ts
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for the sticky breadcrumb strip.
 * To add Class 12: add subjects + chapters below with class: '12'.
 * To add Chemistry/Bio/Maths content: add entries in CHAPTERS.
 *
 * Segment format rendered:  CBSE › 11 › Phy › Ch 01 › Le 02
 * Tooltip on hover shows full labels.
 * ─────────────────────────────────────────────────────────────
 */

export interface LessonEntry {
  slug: string       // URL slug, e.g. 'physical-quantities-and-si-units'
  label: string      // Full lesson title for tooltip
}

export interface ChapterEntry {
  num: string        // Zero-padded, e.g. '01'
  short: string      // Compact label, e.g. 'Ch 01'
  full: string       // Full title for tooltip, e.g. 'Units & Measurement'
  path: string       // Absolute href to chapter index
  subjectId: string  // e.g. 'physics'
  classId: string    // e.g. '11'
  lessons: LessonEntry[]
}

/** Keyed by chapter folder slug, e.g. '01-units-and-measurement' */
export const CHAPTERS: Record<string, ChapterEntry> = {

  /* ══════════════  CLASS 11 · PHYSICS  ══════════════ */

  '01-units-and-measurement': {
    num: '01', short: 'Ch 01', full: 'Units & Measurement',
    path: '/physics/chapters/01-units-and-measurement/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'physical-quantities-and-si-units', label: 'Physical Quantities & SI Units' },
      { slug: 'significant-figures',              label: 'Significant Figures' },
      { slug: 'dimensions-of-physical-quantities',label: 'Dimensions of Physical Quantities' },
      { slug: 'dimensional-analysis',             label: 'Dimensional Analysis' },
    ],
  },

  '02-motion-in-a-straight-line': {
    num: '02', short: 'Ch 02', full: 'Motion in a Straight Line',
    path: '/physics/chapters/02-motion-in-a-straight-line/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'displacement',        label: 'Position, Displacement & Path Length' },
      { slug: 'velocity-and-speed',  label: 'Velocity & Speed' },
      { slug: 'acceleration',        label: 'Acceleration' },
      { slug: 'equations-of-motion', label: 'Equations of Motion' },
      { slug: 'relative-velocity',   label: 'Relative Velocity' },
    ],
  },

  '03-motion-in-a-plane': {
    num: '03', short: 'Ch 03', full: 'Motion in a Plane',
    path: '/physics/chapters/03-motion-in-a-plane/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'scalars-and-vectors',    label: 'Scalars and Vectors' },
      { slug: 'vector-addition',        label: 'Vector Addition' },
      { slug: 'vector-components',      label: 'Components of a Vector' },
      { slug: 'unit-vectors',           label: 'Unit Vectors' },
      { slug: 'relative-velocity-2d',   label: 'Relative Velocity in 2D' },
      { slug: 'projectile-motion',      label: 'Projectile Motion' },
      { slug: 'uniform-circular-motion',label: 'Uniform Circular Motion' },
    ],
  },

  '04-laws-of-motion': {
    num: '04', short: 'Ch 04', full: 'Laws of Motion',
    path: '/physics/chapters/04-laws-of-motion/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'inertia-and-first-law',        label: 'Inertia & the First Law' },
      { slug: 'momentum-and-second-law',      label: 'Momentum & the Second Law' },
      { slug: 'impulse',                      label: 'Impulse' },
      { slug: 'third-law',                    label: 'The Third Law' },
      { slug: 'conservation-of-momentum',     label: 'Conservation of Momentum' },
      { slug: 'equilibrium-of-a-particle',    label: 'Equilibrium of a Particle' },
      { slug: 'friction',                     label: 'Friction' },
      { slug: 'circular-motion',              label: 'Circular Motion' },
    ],
  },

  '05-work-energy-power': {
    num: '05', short: 'Ch 05', full: 'Work, Energy and Power',
    path: '/physics/chapters/05-work-energy-power/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'work',                    label: 'Work' },
      { slug: 'kinetic-energy',          label: 'Kinetic Energy & Work–Energy Theorem' },
      { slug: 'potential-energy',        label: 'Potential Energy' },
      { slug: 'conservation-of-energy',  label: 'Conservation of Mechanical Energy' },
      { slug: 'power',                   label: 'Power' },
      { slug: 'collisions',              label: 'Collisions' },
    ],
  },

  '06-system-of-particles-rotational-motion': {
    num: '06', short: 'Ch 06', full: 'Rotational Motion',
    path: '/physics/chapters/06-system-of-particles-rotational-motion/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'centre-of-mass',    label: 'Centre of Mass' },
      { slug: 'torque',            label: 'Torque' },
      { slug: 'angular-momentum',  label: 'Angular Momentum' },
      { slug: 'moment-of-inertia', label: 'Moment of Inertia' },
      { slug: 'rolling-motion',    label: 'Rolling Motion' },
    ],
  },

  '07-gravitation': {
    num: '07', short: 'Ch 07', full: 'Gravitation',
    path: '/physics/chapters/07-gravitation/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'universal-law',           label: 'Universal Law of Gravitation' },
      { slug: 'gravitational-field',     label: 'Gravitational Field & Potential' },
      { slug: 'escape-velocity',         label: 'Escape Velocity' },
      { slug: 'satellites',              label: 'Satellites & Orbital Motion' },
      { slug: 'mission-launch-a-satellite', label: 'Mission: Launch a Satellite' },
      { slug: 'keplers-laws',            label: "Kepler's Laws" },
    ],
  },

  '08-mechanical-properties-of-solids': {
    num: '08', short: 'Ch 08', full: 'Properties of Solids',
    path: '/physics/chapters/08-mechanical-properties-of-solids/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'stress-and-strain',  label: 'Stress and Strain' },
      { slug: 'hookes-law',         label: "Hooke's Law" },
      { slug: 'elastic-moduli',     label: 'Elastic Moduli' },
      { slug: 'stress-strain-curve',label: 'Stress–Strain Curve' },
      { slug: 'applications',       label: 'Applications of Elasticity' },
    ],
  },

  '09-mechanical-properties-of-fluids': {
    num: '09', short: 'Ch 09', full: 'Properties of Fluids',
    path: '/physics/chapters/09-mechanical-properties-of-fluids/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'pressure-pascals-law',  label: "Pressure & Pascal's Law" },
      { slug: 'archimedes-principle',  label: "Archimedes' Principle" },
      { slug: 'viscosity',             label: "Viscosity & Stokes' Law" },
      { slug: 'surface-tension',       label: 'Surface Tension' },
      { slug: 'bernoullis-theorem',    label: "Bernoulli's Theorem" },
    ],
  },

  '10-thermal-properties-of-matter': {
    num: '10', short: 'Ch 10', full: 'Thermal Properties',
    path: '/physics/chapters/10-thermal-properties-of-matter/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'temperature-and-heat',      label: 'Temperature & Heat' },
      { slug: 'thermal-expansion',         label: 'Thermal Expansion' },
      { slug: 'calorimetry',               label: 'Calorimetry' },
      { slug: 'heat-transfer',             label: 'Heat Transfer' },
      { slug: 'newtons-law-of-cooling',    label: "Newton's Law of Cooling" },
    ],
  },

  '11-thermodynamics': {
    num: '11', short: 'Ch 11', full: 'Thermodynamics',
    path: '/physics/chapters/11-thermodynamics/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'first-law',               label: 'Zeroth & First Law' },
      { slug: 'thermodynamic-processes', label: 'Thermodynamic Processes' },
      { slug: 'second-law',              label: 'Second Law & Entropy' },
      { slug: 'heat-engines',            label: 'Heat Engines & Refrigerators' },
      { slug: 'carnot-theorem',          label: 'Carnot Theorem' },
    ],
  },

  '12-kinetic-theory': {
    num: '12', short: 'Ch 12', full: 'Kinetic Theory',
    path: '/physics/chapters/12-kinetic-theory/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'kinetic-theory-gases', label: 'Kinetic Theory of Gases' },
      { slug: 'speed-of-molecules',   label: 'Speed of Gas Molecules' },
      { slug: 'equipartition',        label: 'Law of Equipartition of Energy' },
      { slug: 'mean-free-path',       label: 'Mean Free Path' },
    ],
  },

  '13-oscillations': {
    num: '13', short: 'Ch 13', full: 'Oscillations',
    path: '/physics/chapters/13-oscillations/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'simple-harmonic-motion', label: 'Periodic Motion & SHM' },
      { slug: 'energy-in-shm',          label: 'Energy in SHM' },
      { slug: 'simple-pendulum',        label: 'Simple Pendulum' },
      { slug: 'damped-oscillations',    label: 'Damped Oscillations' },
    ],
  },

  '14-waves': {
    num: '14', short: 'Ch 14', full: 'Waves',
    path: '/physics/chapters/14-waves/',
    subjectId: 'physics', classId: '11',
    lessons: [
      { slug: 'wave-motion',       label: 'Wave Motion' },
      { slug: 'speed-of-sound',    label: 'Speed of Sound' },
      { slug: 'superposition',     label: 'Superposition of Waves' },
      { slug: 'standing-waves',    label: 'Standing Waves' },
      { slug: 'beats',             label: 'Beats' },
      { slug: 'doppler-effect',    label: 'Doppler Effect' },
    ],
  },

  /* ══════════════  CLASS 12 entries go here  ══════════════
     Pattern:
     '01-electric-charges': {
       num: '01', short: 'Ch 01', full: 'Electric Charges & Fields',
       path: '/physics/12/chapters/01-electric-charges/',
       subjectId: 'physics', classId: '12',
       lessons: [ ... ],
     },
  ══════════════════════════════════════════════════════════ */
}

/**
 * Look up a chapter by its URL folder slug.
 * Returns undefined if the path is not a chapter/lesson page.
 */
export function chapterFromSlug(slug: string): ChapterEntry | undefined {
  return CHAPTERS[slug]
}

/**
 * Given a chapter and a lesson slug, return {lessonNum, lessonLabel}.
 * lessonNum is 1-based, zero-padded to 2 digits.
 */
export function lessonInfo(
  chapter: ChapterEntry,
  lessonSlug: string
): { num: string; label: string } | undefined {
  const idx = chapter.lessons.findIndex(l => l.slug === lessonSlug)
  if (idx === -1) return undefined
  return {
    num: String(idx + 1).padStart(2, '0'),
    label: chapter.lessons[idx].label,
  }
}
