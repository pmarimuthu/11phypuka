/**
 * OrbitRenderer.ts
 * ------------------------------------------------------------------------
 * Pure canvas-drawing helpers for Mission: Launch a Satellite.
 * No Vue, no DOM lookups — everything here takes a 2D context plus plain
 * data, so it is easy to unit-reason about and keeps EarthCanvas.vue thin.
 *
 * Coordinate convention: world space is metres, Earth-centred, +x East,
 * +y "up" out of the page in the orbital plane (standard maths convention,
 * counter-clockwise positive). Screen space is canvas pixels, origin at
 * the canvas centre, y flipped so "world up" renders as "screen up".
 */

import type { FlightStatus, Vec2 } from './types'
import { EARTH_RADIUS_M } from './PhysicsEngine'

export interface Camera {
  scale: number // pixels per metre
  cx: number // canvas centre, px
  cy: number
}

export function makeCamera(canvasW: number, canvasH: number, viewRadiusM: number): Camera {
  const pixelRadius = Math.min(canvasW, canvasH) * 0.46
  return { scale: pixelRadius / viewRadiusM, cx: canvasW / 2, cy: canvasH / 2 }
}

export function worldToScreen(cam: Camera, p: Vec2): Vec2 {
  return { x: cam.cx + p.x * cam.scale, y: cam.cy - p.y * cam.scale }
}

/**
 * Smoothly grow/shrink the camera's view radius to keep Earth and the
 * satellite both comfortably in frame, without jarring snaps every frame.
 */
export function nextViewRadius(
  currentViewRadius: number,
  distanceFromEarth: number,
  maxRadius = EARTH_RADIUS_M * 35
): number {
  const minRadius = EARTH_RADIUS_M * 1.6
  const target = Math.min(maxRadius, Math.max(minRadius, distanceFromEarth * 1.35))
  const lerp = 0.06
  return currentViewRadius + (target - currentViewRadius) * lerp
}

export const STATUS_COLOR: Record<FlightStatus, string> = {
  preparing: '#8aa0c8',
  ascending: '#f5b942',
  orbit: '#34d399',
  escape: '#c084fc',
  reentry: '#fb923c',
  crashed: '#f87171'
}

interface Star {
  x: number // 0..1 normalised
  y: number
  r: number
  tw: number // twinkle phase
}

/** Deterministic starfield — seeded so it doesn't re-randomise every render. */
export function createStarfield(count = 160): Star[] {
  let seed = 1337
  const rand = () => {
    seed = (seed * 16807) % 2147483647
    return seed / 2147483647
  }
  const stars: Star[] = []
  for (let i = 0; i < count; i++) {
    stars.push({ x: rand(), y: rand(), r: rand() * 1.4 + 0.3, tw: rand() * Math.PI * 2 })
  }
  return stars
}

export function drawBackground(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  stars: Star[],
  timeMs: number
) {
  const grad = ctx.createLinearGradient(0, 0, 0, h)
  grad.addColorStop(0, '#040714')
  grad.addColorStop(1, '#0a1230')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  ctx.save()
  for (const s of stars) {
    const twinkle = 0.55 + 0.45 * Math.sin(timeMs / 900 + s.tw)
    ctx.globalAlpha = twinkle
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()
}

export function drawEarth(ctx: CanvasRenderingContext2D, cam: Camera) {
  const center = worldToScreen(cam, { x: 0, y: 0 })
  const radiusPx = EARTH_RADIUS_M * cam.scale

  // Soft atmosphere glow.
  const glow = ctx.createRadialGradient(
    center.x,
    center.y,
    radiusPx * 0.92,
    center.x,
    center.y,
    radiusPx * 1.35
  )
  glow.addColorStop(0, 'rgba(96,165,250,0.35)')
  glow.addColorStop(1, 'rgba(96,165,250,0)')
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(center.x, center.y, radiusPx * 1.35, 0, Math.PI * 2)
  ctx.fill()

  const body = ctx.createRadialGradient(
    center.x - radiusPx * 0.35,
    center.y - radiusPx * 0.35,
    radiusPx * 0.1,
    center.x,
    center.y,
    radiusPx
  )
  body.addColorStop(0, '#7dd3fc')
  body.addColorStop(0.45, '#2563eb')
  body.addColorStop(1, '#0f3a8f')
  ctx.fillStyle = body
  ctx.beginPath()
  ctx.arc(center.x, center.y, radiusPx, 0, Math.PI * 2)
  ctx.fill()

  // A couple of simple "continent" blobs so it doesn't read as a flat disc.
  ctx.save()
  ctx.clip()
  ctx.fillStyle = 'rgba(52,211,153,0.55)'
  const blobs: Array<[number, number, number]> = [
    [-0.35, 0.2, 0.42],
    [0.3, -0.3, 0.3],
    [0.1, 0.45, 0.22]
  ]
  for (const [bx, by, br] of blobs) {
    ctx.beginPath()
    ctx.ellipse(
      center.x + bx * radiusPx,
      center.y + by * radiusPx,
      br * radiusPx,
      br * radiusPx * 0.7,
      0.4,
      0,
      Math.PI * 2
    )
    ctx.fill()
  }
  ctx.restore()
}

/** Small marker + flag at the fixed launch pad on Earth's surface. */
export function drawLaunchPad(ctx: CanvasRenderingContext2D, cam: Camera) {
  const padWorld: Vec2 = { x: EARTH_RADIUS_M, y: 0 }
  const p = worldToScreen(cam, padWorld)
  ctx.save()
  ctx.fillStyle = '#facc15'
  ctx.beginPath()
  ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = '#facc15'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(p.x, p.y)
  ctx.lineTo(p.x + 10, p.y - 10)
  ctx.stroke()
  ctx.fillStyle = '#facc15'
  ctx.fillRect(p.x + 10, p.y - 16, 8, 6)
  ctx.restore()
}

export function drawPath(
  ctx: CanvasRenderingContext2D,
  cam: Camera,
  points: Vec2[],
  color: string,
  opts: { dashed?: boolean; width?: number; fadeTail?: boolean } = {}
) {
  if (points.length < 2) return
  ctx.save()
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  if (opts.dashed) ctx.setLineDash([6, 6])

  if (opts.fadeTail) {
    // Draw as short fading segments so the trail behind the satellite dims.
    const n = points.length
    for (let i = 1; i < n; i++) {
      const a = worldToScreen(cam, points[i - 1])
      const b = worldToScreen(cam, points[i])
      const alpha = i / n
      ctx.globalAlpha = 0.15 + 0.75 * alpha
      ctx.strokeStyle = color
      ctx.lineWidth = opts.width ?? 2
      ctx.beginPath()
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(b.x, b.y)
      ctx.stroke()
    }
  } else {
    ctx.strokeStyle = color
    ctx.lineWidth = opts.width ?? 2
    ctx.globalAlpha = 0.85
    ctx.beginPath()
    const first = worldToScreen(cam, points[0])
    ctx.moveTo(first.x, first.y)
    for (let i = 1; i < points.length; i++) {
      const p = worldToScreen(cam, points[i])
      ctx.lineTo(p.x, p.y)
    }
    ctx.stroke()
  }
  ctx.restore()
}

export function drawTargetRing(
  ctx: CanvasRenderingContext2D,
  cam: Camera,
  radiusM: number,
  color: string,
  label: string
) {
  const center = worldToScreen(cam, { x: 0, y: 0 })
  const r = radiusM * cam.scale
  ctx.save()
  ctx.setLineDash([4, 7])
  ctx.strokeStyle = color
  ctx.globalAlpha = 0.65
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.arc(center.x, center.y, r, 0, Math.PI * 2)
  ctx.stroke()
  ctx.globalAlpha = 0.9
  ctx.fillStyle = color
  ctx.font = '11px ui-sans-serif, system-ui, sans-serif'
  ctx.textAlign = 'left'
  ctx.fillText(label, center.x + 6, center.y - r - 6)
  ctx.restore()
}

export function drawSatellite(
  ctx: CanvasRenderingContext2D,
  cam: Camera,
  position: Vec2,
  velocity: Vec2,
  status: FlightStatus
) {
  const p = worldToScreen(cam, position)
  const heading = Math.atan2(-velocity.y, velocity.x) // screen space heading
  const color = STATUS_COLOR[status]

  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate(heading)

  // Glow
  const glow = ctx.createRadialGradient(0, 0, 1, 0, 0, 14)
  glow.addColorStop(0, color)
  glow.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = glow
  ctx.globalAlpha = 0.6
  ctx.beginPath()
  ctx.arc(0, 0, 14, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalAlpha = 1

  // Simple rocket triangle pointing along velocity.
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(9, 0)
  ctx.lineTo(-6, 4.5)
  ctx.lineTo(-6, -4.5)
  ctx.closePath()
  ctx.fill()
  ctx.strokeStyle = 'rgba(255,255,255,0.85)'
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.restore()
}

export function drawCrashMark(ctx: CanvasRenderingContext2D, cam: Camera, position: Vec2) {
  const p = worldToScreen(cam, position)
  ctx.save()
  ctx.strokeStyle = STATUS_COLOR.crashed
  ctx.lineWidth = 2.5
  ctx.beginPath()
  ctx.moveTo(p.x - 7, p.y - 7)
  ctx.lineTo(p.x + 7, p.y + 7)
  ctx.moveTo(p.x + 7, p.y - 7)
  ctx.lineTo(p.x - 7, p.y + 7)
  ctx.stroke()
  ctx.restore()
}
