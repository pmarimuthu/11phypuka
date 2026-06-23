/**
 * MissionManager.ts
 * ------------------------------------------------------------------------
 * Defines the three guided challenges and the one-off "learning moment"
 * explanations that appear when a milestone is first reached. Kept free
 * of Vue so it can be reasoned about (and unit tested) in isolation.
 */

import { EARTH_RADIUS_M, geostationaryRadius } from './PhysicsEngine'
import type { FlightStatus, LearningMoment, MissionDef, MissionId, MissionProgress, Telemetry } from './types'

export const GEO_ALTITUDE_KM = (geostationaryRadius() - EARTH_RADIUS_M) / 1000

export const MISSIONS: MissionDef[] = [
  {
    id: 'leo',
    title: 'Mission 1 — Low Earth Orbit',
    brief: 'Place the satellite into a stable orbit between 160 km and 2,000 km altitude.',
    successCondition: 'Hold a stable orbit in that band for 2 simulated minutes.',
    targetAltitudeKm: null,
    targetToleranceKm: 0
  },
  {
    id: 'geo',
    title: 'Mission 2 — Geostationary Orbit',
    brief: `Stretch your orbit's far point out to the geostationary ring, about ${Math.round(
      GEO_ALTITUDE_KM
    ).toLocaleString()} km up — the dashed target ring on screen.`,
    successCondition: 'Reach a stable orbit whose apoapsis sits on the geostationary ring.',
    targetAltitudeKm: GEO_ALTITUDE_KM,
    targetToleranceKm: 2500
  },
  {
    id: 'escape',
    title: 'Mission 3 — Escape Earth',
    brief: "Give the satellite enough speed to leave Earth's gravity behind for good.",
    successCondition: 'Reach and hold an escape trajectory.',
    targetAltitudeKm: null,
    targetToleranceKm: 0
  }
]

const REQUIRED_HOLD_SECONDS: Record<MissionId, number> = {
  leo: 120,
  geo: 6,
  escape: 6
}

export function createMissionProgress(id: MissionId): MissionProgress {
  return {
    id,
    holdSeconds: 0,
    requiredHoldSeconds: REQUIRED_HOLD_SECONDS[id],
    completed: false
  }
}

/**
 * Step a mission's progress forward by dtSeconds of *simulated* time,
 * given the latest telemetry and the orbit's apoapsis altitude (km,
 * Infinity for unbound). Resets the hold timer the instant the success
 * condition stops holding, so partial credit doesn't carry over.
 */
export function updateMissionProgress(
  progress: MissionProgress,
  telemetry: Telemetry,
  apoapsisAltKm: number,
  dtSeconds: number
): MissionProgress {
  if (progress.completed) return progress

  let holding = false
  switch (progress.id) {
    case 'leo':
      holding = telemetry.status === 'orbit' && telemetry.altitudeKm >= 160 && telemetry.altitudeKm <= 2000
      break
    case 'geo': {
      const target = GEO_ALTITUDE_KM
      const tol = MISSIONS.find((m) => m.id === 'geo')!.targetToleranceKm
      holding = telemetry.status === 'orbit' && Number.isFinite(apoapsisAltKm) && Math.abs(apoapsisAltKm - target) <= tol
      break
    }
    case 'escape':
      holding = telemetry.status === 'escape'
      break
  }

  const holdSeconds = holding ? progress.holdSeconds + dtSeconds : 0
  const completed = holdSeconds >= progress.requiredHoldSeconds
  return { ...progress, holdSeconds, completed }
}

/**
 * Contextual explanations shown the first time a milestone is reached.
 * Deliberately plain-language — formulas live on the rest of the chapter
 * pages, not here. The simulation's job is the "aha", not the algebra.
 */
export const LEARNING_MOMENTS: Partial<Record<FlightStatus, LearningMoment>> = {
  orbit: {
    key: 'orbit',
    title: 'Orbit Achieved',
    body:
      "Your satellite is moving fast enough sideways that, as gravity pulls it down, the ground curves away beneath it just as fast. It keeps falling — and keeps missing. That endless falling-and-missing is all an orbit ever is."
  },
  escape: {
    key: 'escape',
    title: 'Escape Velocity Achieved',
    body:
      "Your satellite is now moving so fast that Earth's gravity can slow it down but never turn it back. It will keep coasting outward forever. This is why probes leaving Earth for good need such enormous launch speeds."
  },
  crashed: {
    key: 'crashed',
    title: 'Mission Failed — Crash',
    body:
      "Gravity never stopped pulling. Without enough sideways speed to keep missing the ground, the path curved back down and met the surface. Try a higher velocity, or a smaller angle so more of that speed points sideways instead of straight up."
  },
  reentry: {
    key: 'reentry',
    title: 'Re-entry Warning',
    body:
      "Altitude has dropped below 100 km — the rough edge of the usable atmosphere. In a real mission, drag and heating start to matter here. This orbit's far point isn't high enough to stay clear of the ground on every pass."
  }
}
