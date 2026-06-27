import type { ExploreConfig } from './explore-types'
import { sigFigures, dimensions, dimAnalysis } from './explore-builders-ch01'
import { velocitySpeed, displacement, acceleration, equationsOfMotion, relativeVelocity } from './explore-builders-ch02'
import { scalarsVectors, vectorAddition, vectorComponents, unitVectors, relativeVelocity2d, uniformCircularMotion } from './explore-builders-ch03'
import { inertia, momentum, impulse, thirdLaw, conservationMomentum, equilibrium, friction, circularMotion } from './explore-builders-ch04'
import { work, kineticEnergy, potentialEnergy, conservationEnergy, power, collisions } from './explore-builders-ch05'
import { centreOfMass, torque, angularMomentum, momentOfInertia, rollingMotion } from './explore-builders-ch06'
import { universalLaw, gravitationalField, escapeVelocity, keplersLaws, satellites } from './explore-builders-ch07'
import { stressAndStrain, hookesLaw, elasticModuli, stressStrainCurve, applicationsElasticity } from './explore-builders-ch08'
import { pressure, archimedes, bernoulli, surfaceTension, viscosity } from './explore-builders-ch09'
import { temperatureHeat, thermalExpansion, calorimetry, heatTransfer, newtonsCooling } from './explore-builders-ch10'
import { thermodynamicProcesses, firstLaw, secondLaw, heatEngine, carnotTheorem } from './explore-builders-ch11'
import { kineticTheory, speedOfMolecules, equipartition, meanFreePath } from './explore-builders-ch12'
import { shm, simplePendulum, energySHM, dampedOscillations, resonance } from './explore-builders-ch13'
import { waveMotion, speedOfWaves, standingWaves, beats, doppler } from './explore-builders-ch14'

const MAP: Record<string, ExploreConfig> = {
  'significant-figures': sigFigures,
  'dimensions': dimensions,
  'dimensional-analysis': dimAnalysis,
  'velocity-speed': velocitySpeed,
  'displacement': displacement,
  'acceleration': acceleration,
  'equations-of-motion': equationsOfMotion,
  'relative-velocity': relativeVelocity,
  'scalars-and-vectors': scalarsVectors,
  'vector-addition': vectorAddition,
  'vector-components': vectorComponents,
  'unit-vectors': unitVectors,
  'relative-velocity-2d': relativeVelocity2d,
  'uniform-circular-motion': uniformCircularMotion,
  'inertia-first-law': inertia,
  'momentum-second-law': momentum,
  'impulse': impulse,
  'third-law': thirdLaw,
  'conservation-of-momentum': conservationMomentum,
  'equilibrium': equilibrium,
  'friction': friction,
  'circular-motion': circularMotion,
  'work': work,
  'kinetic-energy': kineticEnergy,
  'potential-energy': potentialEnergy,
  'conservation-of-energy': conservationEnergy,
  'power': power,
  'collisions': collisions,
  'centre-of-mass': centreOfMass,
  'torque': torque,
  'angular-momentum': angularMomentum,
  'moment-of-inertia': momentOfInertia,
  'rolling-motion': rollingMotion,
  'universal-law': universalLaw,
  'gravitational-field': gravitationalField,
  'escape-velocity': escapeVelocity,
  'keplers-laws': keplersLaws,
  'satellites': satellites,
  'stress-and-strain': stressAndStrain,
  'hookes-law': hookesLaw,
  'elastic-moduli': elasticModuli,
  'stress-strain-curve': stressStrainCurve,
  'applications-elasticity': applicationsElasticity,
  'pressure': pressure,
  'archimedes': archimedes,
  'bernoulli': bernoulli,
  'surface-tension': surfaceTension,
  'viscosity': viscosity,
  'temperature-and-heat': temperatureHeat,
  'thermal-expansion': thermalExpansion,
  'calorimetry': calorimetry,
  'heat-transfer': heatTransfer,
  'newtons-cooling': newtonsCooling,
  'thermodynamic-processes': thermodynamicProcesses,
  'first-law': firstLaw,
  'second-law': secondLaw,
  'heat-engine': heatEngine,
  'carnot-theorem': carnotTheorem,
  'kinetic-theory': kineticTheory,
  'speed-of-molecules': speedOfMolecules,
  'equipartition': equipartition,
  'mean-free-path': meanFreePath,
  'shm': shm,
  'simple-pendulum': simplePendulum,
  'energy-shm': energySHM,
  'damped-oscillations': dampedOscillations,
  'resonance': resonance,
  'wave-motion': waveMotion,
  'speed-of-waves': speedOfWaves,
  'standing-waves': standingWaves,
  'beats': beats,
  'doppler': doppler,
}

export function getExploreConfig(type: string): ExploreConfig | null {
  return MAP[type] ?? null
}
