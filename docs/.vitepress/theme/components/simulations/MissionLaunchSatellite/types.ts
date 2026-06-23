/**
 * Mission: Launch a Satellite — shared type definitions.
 *
 * All physics quantities inside the engine are SI (metres, seconds, kg).
 * UI-facing quantities (sliders, HUD) use km / km·s⁻¹ for readability —
 * conversion happens at the component boundary, never inside PhysicsEngine.
 */

export interface Vec2 {
  x: number
  y: number
}

/** Full kinematic state of the satellite, in SI units, Earth-centred frame. */
export interface BodyState {
  /** Position vector (m) from Earth's centre. */
  r: Vec2
  /** Velocity vector (m/s). */
  v: Vec2
  /** Simulated mission time elapsed since launch (s). */
  t: number
}

/**
 * Flight status shown to the student. Mirrors the six states called out
 * in the brief — kept as a closed union so the UI can exhaustively switch.
 */
export type FlightStatus =
  | 'preparing'
  | 'ascending'
  | 'orbit'
  | 'escape'
  | 'reentry'
  | 'crashed'

export const FLIGHT_STATUS_LABEL: Record<FlightStatus, string> = {
  preparing: 'Preparing Launch',
  ascending: 'Ascending',
  orbit: 'Orbit Achieved',
  escape: 'Escape Trajectory',
  reentry: 'Re-entry',
  crashed: 'Crashed'
}

/** Student-controlled launch parameters (UI units). */
export interface LaunchParams {
  /** Degrees from local horizontal: 0 = tangential, 90 = straight up. */
  angleDeg: number
  /** Requested launch speed, km/s. */
  velocityKms: number
  /** Fuel reserve, 0–100 %. Caps the maximum achievable velocity. */
  fuelPercent: number
}

export type SimSpeed = 1 | 5 | 10

export type RunPhase = 'idle' | 'running' | 'paused' | 'ended'

/** Orbital elements derived analytically from a state vector (r, v). */
export interface OrbitalElements {
  /** Specific orbital energy, J/kg. Negative = bound ellipse. */
  energy: number
  /** Specific angular momentum (z-component, m²/s). */
  angularMomentum: number
  /** Eccentricity. 0 = circle, <1 ellipse, 1 parabola, >1 hyperbola. */
  eccentricity: number
  /** Semi-latus rectum, m. */
  semiLatusRectum: number
  /** Closest approach distance of the full conic, m (from Earth's centre). */
  periapsis: number
  /** Farthest point, m. Infinity for parabola/hyperbola. */
  apoapsis: number
  /** True anomaly of the current position, radians. */
  trueAnomaly: number
  /** Argument of periapsis, radians (orientation of the conic). */
  argOfPeriapsis: number
  isBound: boolean
}

/** A point on the live telemetry HUD, already unit-converted for display. */
export interface Telemetry {
  altitudeKm: number
  speedKm: number
  status: FlightStatus
  simTimeSec: number
  periapsisAltKm: number
  apoapsisAltKm: number | null
}

export type MissionId = 'leo' | 'geo' | 'escape'

export interface MissionDef {
  id: MissionId
  title: string
  brief: string
  successCondition: string
  /** Target ring to draw on the canvas, as altitude in km, or null. */
  targetAltitudeKm: number | null
  targetToleranceKm: number
}

export interface MissionProgress {
  id: MissionId
  /** Seconds the student has continuously held the success condition. */
  holdSeconds: number
  /** Seconds required to confirm success. */
  requiredHoldSeconds: number
  completed: boolean
}

export interface LearningMoment {
  key: FlightStatus
  title: string
  body: string
}

/**
 * Everything EarthCanvas needs to paint a single frame. Built fresh by
 * the parent component each tick — EarthCanvas itself stays a "dumb"
 * renderer with no physics knowledge of its own.
 */
export interface RenderFrame {
  launched: boolean
  position: Vec2 // world metres, Earth-centred
  velocity: Vec2 // m/s
  status: FlightStatus
  trail: Vec2[] // flown path so far, world metres
  preview: Vec2[] // predicted path for current slider settings (pre-launch)
  crashPoint: Vec2 | null
  showGeoRing: boolean
  timeMs: number
}
