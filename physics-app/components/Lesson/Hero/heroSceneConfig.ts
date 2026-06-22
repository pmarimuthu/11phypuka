import type { Component } from 'vue'
import MovingBlockScene from './scenes/MovingBlockScene.vue'
import VectorsScene from './scenes/VectorsScene.vue'
import ProjectileScene from './scenes/ProjectileScene.vue'
import CircularScene from './scenes/CircularScene.vue'
import PendulumScene from './scenes/PendulumScene.vue'
import SpringScene from './scenes/SpringScene.vue'
import ParticlesScene from './scenes/ParticlesScene.vue'
import ThermalScene from './scenes/ThermalScene.vue'
import GravityScene from './scenes/GravityScene.vue'
import UnitsScene from './scenes/UnitsScene.vue'
import SprintScene from './scenes/SprintScene.vue'
import CricketScene from './scenes/CricketScene.vue'
import SigFigsF1Scene from './scenes/SigFigsF1Scene.vue'
import SigFigsScaleScene from './scenes/SigFigsScaleScene.vue'
import EnergyScene from './scenes/EnergyScene.vue'
import WaveScene from './scenes/WaveScene.vue'
import FluidScene from './scenes/FluidScene.vue'

export interface HeroTab {
  label: string
  scene: string
}

/** Lesson `type` (from lesson JSON `visualType`) → scene key shown in the hero. */
export const SCENE_MAP: Record<string, string> = {
  // units / measurement
  'si-units': 'sprint', 'dimensions': 'units', 'significant-figures': 'units', 'dimensional-analysis': 'units',
  // kinematics 1-D
  'displacement': 'moving-block', 'velocity-speed': 'moving-block', 'acceleration': 'moving-block',
  'equations-of-motion': 'moving-block', 'relative-velocity': 'moving-block',
  // vectors
  'scalars-and-vectors': 'vectors', 'vector-addition': 'vectors',
  'vector-components': 'vectors', 'unit-vectors': 'vectors', 'relative-velocity-2d': 'vectors',
  // projectile
  'projectile-motion': 'projectile',
  // circular / orbital
  'uniform-circular-motion': 'circular', 'circular-motion': 'circular',
  'keplers-laws': 'circular', 'satellites': 'circular', 'escape-velocity': 'circular',
  'angular-momentum': 'circular', 'rolling-motion': 'circular', 'torque': 'circular',
  'moment-of-inertia': 'circular',
  // Newton's laws / forces
  'inertia-first-law': 'moving-block', 'momentum-second-law': 'moving-block',
  'impulse': 'moving-block', 'third-law': 'moving-block',
  'conservation-of-momentum': 'moving-block', 'collisions': 'moving-block',
  'equilibrium': 'vectors', 'friction': 'moving-block',
  // centre of mass
  'centre-of-mass': 'vectors',
  // gravity
  'universal-law': 'gravity', 'gravitational-field': 'gravity',
  // elasticity / solids
  'stress-and-strain': 'spring', 'hookes-law': 'spring',
  'elastic-moduli': 'spring', 'stress-strain-curve': 'spring', 'applications-elasticity': 'spring',
  // fluids
  'pressure': 'fluid', 'archimedes': 'fluid', 'viscosity': 'fluid',
  'surface-tension': 'fluid', 'bernoulli': 'fluid',
  // thermal
  'temperature-and-heat': 'thermal', 'thermal-expansion': 'thermal',
  'calorimetry': 'thermal', 'heat-transfer': 'thermal', 'newtons-cooling': 'thermal',
  // thermodynamics
  'first-law': 'thermal', 'thermodynamic-processes': 'thermal',
  'second-law': 'thermal', 'heat-engine': 'thermal', 'carnot-theorem': 'thermal',
  // kinetic theory
  'kinetic-theory': 'particles', 'speed-of-molecules': 'particles',
  'equipartition': 'particles', 'mean-free-path': 'particles',
  // energy
  'work': 'energy', 'kinetic-energy': 'energy', 'potential-energy': 'energy',
  'conservation-of-energy': 'energy', 'power': 'energy', 'energy-shm': 'energy',
  // oscillations
  'shm': 'pendulum', 'simple-pendulum': 'pendulum',
  'damped-oscillations': 'wave', 'resonance': 'wave',
  // waves
  'wave-motion': 'wave', 'speed-of-waves': 'wave', 'standing-waves': 'wave',
  'beats': 'wave', 'doppler': 'wave',
}

/** Scene key → accent theme used for the card header / SVG colour vars. */
export const THEME_MAP: Record<string, string> = {
  'sprint': 'brand', 'cricket': 'green', 'sig-figs-f1': 'red', 'sig-figs-scale': 'violet',
  'units': 'blue', 'moving-block': 'brand', 'vectors': 'amber',
  'projectile': 'brand', 'circular': 'violet', 'pendulum': 'cyan',
  'spring': 'green', 'particles': 'orange', 'thermal': 'red',
  'gravity': 'indigo', 'energy': 'emerald', 'wave': 'cyan', 'fluid': 'sky',
}

/** Lesson types with more than one selectable scene (rendered as tabs). */
export const TABS_MAP: Record<string, HeroTab[]> = {
  'si-units': [
    { label: 'Sprint', scene: 'sprint' },
    { label: 'Cricket', scene: 'cricket' },
  ],
  'significant-figures': [
    { label: 'F1 Racing', scene: 'sig-figs-f1' },
    { label: 'Lab Scale', scene: 'sig-figs-scale' },
  ],
}

/** Scene key → the component that renders it. */
export const SCENE_COMPONENTS: Record<string, Component> = {
  'moving-block': MovingBlockScene,
  'vectors': VectorsScene,
  'projectile': ProjectileScene,
  'circular': CircularScene,
  'pendulum': PendulumScene,
  'spring': SpringScene,
  'particles': ParticlesScene,
  'thermal': ThermalScene,
  'gravity': GravityScene,
  'units': UnitsScene,
  'sprint': SprintScene,
  'cricket': CricketScene,
  'sig-figs-f1': SigFigsF1Scene,
  'sig-figs-scale': SigFigsScaleScene,
  'energy': EnergyScene,
  'wave': WaveScene,
  'fluid': FluidScene,
}
