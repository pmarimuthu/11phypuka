/**
 * PhysicsEngine.ts
 * ------------------------------------------------------------------------
 * Newtonian two-body gravity for "Mission: Launch a Satellite".
 *
 * Design notes
 * - All values here are SI (metres, seconds). Components convert to km /
 *   km·s⁻¹ only at the display boundary.
 * - We use real Earth constants (μ = GM⊕, R⊕) rather than gameplay-scaled
 *   numbers, so the speeds a student discovers here (≈7.9 km/s orbital,
 *   ≈11.2 km/s escape) match the figures already taught on the
 *   Escape Velocity and Satellites pages in this chapter.
 * - Integration uses velocity Verlet (symplectic), which conserves energy
 *   far better than explicit Euler over many orbits — essential for a
 *   simulation students can leave running and trust.
 * - Orbit shape (periapsis/apoapsis) is computed analytically from the
 *   instantaneous state vector every step, using the standard
 *   eccentricity-vector method. That lets the UI classify "will this
 *   crash / orbit / escape" instantly, without forward-simulating.
 */

import type { BodyState, FlightStatus, OrbitalElements, Vec2 } from './types'

/** Earth's standard gravitational parameter, GM⊕ (m³/s²). */
export const MU_EARTH = 3.986004418e14

/** Earth's mean radius (m). */
export const EARTH_RADIUS_M = 6_371_000

/** Sidereal day — the period a geostationary satellite must match (s). */
export const SIDEREAL_DAY_S = 86_164.1

/** Karman-line-ish re-entry threshold: below this we call it "Re-entry". */
export const REENTRY_ALTITUDE_M = 100_000

/** Beyond this multiple of R⊕, an unbound trajectory reads as "Escape". */
export const ESCAPE_DISPLAY_RADIUS_FACTOR = 3

const TWO_PI = Math.PI * 2

export function vecLen(v: Vec2): number {
  return Math.hypot(v.x, v.y)
}

export function vecScale(v: Vec2, s: number): Vec2 {
  return { x: v.x * s, y: v.y * s }
}

export function vecAdd(a: Vec2, b: Vec2): Vec2 {
  return { x: a.x + b.x, y: a.y + b.y }
}

function clamp(x: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, x))
}

/** Gravitational acceleration at position r (Earth at origin). */
export function accelerationAt(r: Vec2): Vec2 {
  const dist = vecLen(r)
  const k = -MU_EARTH / (dist * dist * dist)
  return { x: r.x * k, y: r.y * k }
}

/**
 * Advance one fixed physics step using velocity Verlet integration.
 * Stable and energy-conserving for the eccentric, long-running orbits
 * this simulation produces.
 */
export function verletStep(state: BodyState, dt: number): BodyState {
  const a0 = accelerationAt(state.r)
  const r1: Vec2 = {
    x: state.r.x + state.v.x * dt + 0.5 * a0.x * dt * dt,
    y: state.r.y + state.v.y * dt + 0.5 * a0.y * dt * dt
  }
  const a1 = accelerationAt(r1)
  const v1: Vec2 = {
    x: state.v.x + 0.5 * (a0.x + a1.x) * dt,
    y: state.v.y + 0.5 * (a0.y + a1.y) * dt
  }
  return { r: r1, v: v1, t: state.t + dt }
}

/** Circular orbital speed at distance r from Earth's centre (m/s). */
export function circularSpeedAt(r: number): number {
  return Math.sqrt(MU_EARTH / r)
}

/** Escape speed at distance r from Earth's centre (m/s). */
export function escapeSpeedAt(r: number): number {
  return Math.sqrt((2 * MU_EARTH) / r)
}

/** Radius of a geostationary orbit, from Earth's centre (m). */
export function geostationaryRadius(): number {
  return Math.cbrt((MU_EARTH * SIDEREAL_DAY_S * SIDEREAL_DAY_S) / (4 * Math.PI * Math.PI))
}

/**
 * Build a launch velocity vector at the launch pad.
 * The pad sits at angle 0 on the surface, i.e. r0 = (R⊕, 0).
 * angleDeg = 0   → fully tangential (counter-clockwise, the "easy orbit" direction)
 * angleDeg = 90  → fully radial (straight up)
 */
export function launchVelocity(angleDeg: number, speedMs: number): Vec2 {
  const a = (angleDeg * Math.PI) / 180
  // Tangential unit vector (ccw) at (R,0) is (0,1); radial unit vector is (1,0).
  return {
    x: speedMs * Math.sin(a), // radial component
    y: speedMs * Math.cos(a) // tangential component
  }
}

/**
 * Derive orbital elements (energy, eccentricity, periapsis/apoapsis, ...)
 * analytically from a single state vector. This is what lets the engine
 * answer "is this orbit going to hit the ground?" the instant the rocket
 * leaves the pad, instead of waiting for it to happen.
 */
export function computeOrbitalElements(r: Vec2, v: Vec2): OrbitalElements {
  const rMag = vecLen(r)
  const vMag2 = v.x * v.x + v.y * v.y
  const energy = vMag2 / 2 - MU_EARTH / rMag

  // Specific angular momentum (z-component in 2D).
  const h = r.x * v.y - r.y * v.x

  // Eccentricity vector: e = (v × h) / mu - r̂
  const ex = (v.y * h) / MU_EARTH - r.x / rMag
  const ey = (-v.x * h) / MU_EARTH - r.y / rMag
  const e = Math.hypot(ex, ey)

  const p = (h * h) / MU_EARTH // semi-latus rectum
  // r_p = p / (1+e) holds for every conic type (ellipse, parabola, hyperbola).
  const periapsis = p / (1 + e)
  const isBound = energy < 0
  const apoapsis = isBound && e < 1 - 1e-9 ? p / (1 - e) : Number.POSITIVE_INFINITY

  let argOfPeriapsis: number
  let trueAnomaly: number
  if (e < 1e-6) {
    // Near-circular: periapsis direction is undefined: use current radius
    // vector as the reference so downstream preview math stays continuous.
    argOfPeriapsis = Math.atan2(r.y, r.x)
    trueAnomaly = 0
  } else {
    argOfPeriapsis = Math.atan2(ey, ex)
    const cosNu = clamp((ex * r.x + ey * r.y) / (e * rMag), -1, 1)
    let nu = Math.acos(cosNu)
    const rDotV = r.x * v.x + r.y * v.y
    if (rDotV < 0) nu = -nu
    trueAnomaly = nu
  }

  return {
    energy,
    angularMomentum: h,
    eccentricity: e,
    semiLatusRectum: p,
    periapsis,
    apoapsis,
    trueAnomaly,
    argOfPeriapsis,
    isBound
  }
}

export interface ClassifyInput {
  r: Vec2
  v: Vec2
  launched: boolean
  crashed: boolean
  timeSinceLaunch: number
}

/**
 * Translate live physics into one of the six student-facing flight states.
 * The periapsis/apoapsis test means we can say "Orbit Achieved" or
 * "this will crash" immediately — the small time-since-launch hold on
 * "Orbit Achieved" just gives the moment a beat before the badge flips.
 */
export function classifyFlightStatus(input: ClassifyInput): FlightStatus {
  const { r, v, launched, crashed, timeSinceLaunch } = input
  if (!launched) return 'preparing'
  if (crashed) return 'crashed'

  const rMag = vecLen(r)
  const altitude = rMag - EARTH_RADIUS_M
  const radialSpeed = (r.x * v.x + r.y * v.y) / rMag

  const els = computeOrbitalElements(r, v)

  if (!els.isBound) {
    // Hyperbolic / parabolic trajectory — it will leave forever.
    if (altitude > ESCAPE_DISPLAY_RADIUS_FACTOR * EARTH_RADIUS_M) return 'escape'
    return 'ascending'
  }

  const willClearSurface = els.periapsis >= EARTH_RADIUS_M * 0.999

  if (willClearSurface) {
    return timeSinceLaunch > 2 ? 'orbit' : 'ascending'
  }

  // Bound, but the ellipse dips below the surface somewhere — it is, or
  // will be, on a collision course.
  if (altitude <= 0) return 'crashed'
  if (radialSpeed < 0 && altitude < REENTRY_ALTITUDE_M) return 'reentry'
  return 'ascending'
}

/**
 * Sample the exact analytic path (ellipse / hyperbola / degenerate line)
 * a launch would follow, starting from the pad. Pure geometry — no time
 * stepping — so it is cheap enough to redraw live as the student drags
 * sliders, before they commit to a launch.
 *
 * Returns points in metres, Earth-centred. Stops at the point the path
 * would first cross the surface ("the crash point"), after one full
 * revolution for a clean orbit, or once a hyperbola has clearly departed.
 */
export function computeOrbitPreviewPath(r0: Vec2, v0: Vec2, maxPoints = 480): Vec2[] {
  const speed = vecLen(v0)
  if (!Number.isFinite(speed) || speed < 1) return [r0]

  const els = computeOrbitalElements(r0, v0)
  const { eccentricity: e, semiLatusRectum: p, argOfPeriapsis: omega, trueAnomaly: nu0 } = els
  const direction = els.angularMomentum >= 0 ? 1 : -1

  if (p < 1) {
    // Degenerate radial trajectory (near-zero angular momentum): straight
    // line out (and, if bound, straight back down).
    const rHat = vecScale(r0, 1 / vecLen(r0))
    const pts: Vec2[] = [r0]
    const apo = els.isBound ? -MU_EARTH / els.energy : EARTH_RADIUS_M * 30
    const steps = 60
    for (let i = 1; i <= steps; i++) {
      const dist = EARTH_RADIUS_M + ((apo - EARTH_RADIUS_M) * i) / steps
      pts.push(vecScale(rHat, dist))
      if (dist >= apo) break
    }
    if (els.isBound) {
      for (let i = steps - 1; i >= 0; i--) {
        const dist = EARTH_RADIUS_M + ((apo - EARTH_RADIUS_M) * i) / steps
        pts.push(vecScale(rHat, dist))
        if (dist <= EARTH_RADIUS_M) break
      }
    }
    return pts
  }

  const pointAt = (nu: number): Vec2 => {
    const r = p / (1 + e * Math.cos(nu))
    const angle = nu + omega
    return { x: r * Math.cos(angle), y: r * Math.sin(angle) }
  }

  const pts: Vec2[] = []
  const dNu = (TWO_PI / 360) * 1 // 1° resolution

  // Only treat "reached the surface" as a crash if the orbit's periapsis is
  // genuinely below ground. Without this guard, a clean circular orbit at
  // r ≈ R⊕ (periapsis == apoapsis == R⊕) would trip the surface check on
  // floating-point noise after only a few sample points, instead of
  // drawing the full loop.
  const doomed = els.periapsis < EARTH_RADIUS_M * 0.999

  if (e < 1 - 1e-6) {
    // Bound ellipse. Walk forward in true anomaly until either we cross
    // the surface (crash, doomed orbits only) or complete a full
    // revolution (clean, stable orbit).
    let nu = nu0
    const start = nu0
    for (let i = 0; i < maxPoints; i++) {
      const pt = pointAt(nu)
      pts.push(pt)
      const r = vecLen(pt)
      if (doomed && r <= EARTH_RADIUS_M && i > 2) break
      nu += direction * dNu
      if (Math.abs(nu - start) >= TWO_PI + dNu) break
    }
  } else {
    // Parabolic / hyperbolic escape — only the real branch exists.
    const nuInf = Math.acos(clamp(-1 / e, -1, 1)) - 0.02
    let nu = nu0
    for (let i = 0; i < maxPoints; i++) {
      const pt = pointAt(nu)
      const r = vecLen(pt)
      if (doomed && r <= EARTH_RADIUS_M && i > 2) {
        pts.push(pt)
        break
      }
      pts.push(pt)
      if (r > EARTH_RADIUS_M * 25) break
      nu += direction * dNu
      if (Math.abs(nu) >= nuInf) break
    }
  }

  return pts
}
