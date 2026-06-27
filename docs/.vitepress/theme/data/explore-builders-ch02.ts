import type { ExploreConfig } from './explore-types'

const BG = '#0f172a'; const TEXT = '#e2e8f0'; const DIM = '#64748b'
const CYAN = '#06b6d4'; const GREEN = '#22c55e'; const RED = '#ef4444'
const YELLOW = '#eab308'; const ORANGE = '#f97316'

function bg(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = BG; ctx.fillRect(0, 0, w, h)
}

export const velocitySpeed: ExploreConfig = {
  hint: 'F1 car: speed is magnitude, velocity includes direction',
  controls: [{ label: 'Speed', min: 0, max: 300, step: 10, unit: ' km/h', default: 100 }],
  draw(ctx, w, h, [spd], t) {
    bg(ctx, w, h)
    const ms = (spd / 3.6).toFixed(1)
    const angle = 30 * Math.PI / 180
    const x0 = 50, y0 = h / 2, len = Math.min(spd * 0.6, 200)
    ctx.strokeStyle = '#334155'; ctx.lineWidth = 8
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(w - 30, y0); ctx.stroke()
    const carX = x0 + 10 + (((t * spd / 3.6) % (w - 80)))
    ctx.font = '22px sans-serif'; ctx.fillText('🏎️', carX, y0 - 5)
    ctx.strokeStyle = RED; ctx.lineWidth = 2.5
    const vx = x0 + 20, vy = y0 - 25
    ctx.beginPath(); ctx.moveTo(vx, vy)
    ctx.lineTo(vx + len * Math.cos(0), vy + len * Math.sin(0)); ctx.stroke()
    ctx.fillStyle = RED; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'left'
    ctx.fillText(`v⃗ = ${ms} m/s →`, vx + len + 4, vy + 4)
    ctx.fillStyle = CYAN; ctx.font = 'bold 13px monospace'; ctx.textAlign = 'center'
    ctx.fillText(`Speed: ${spd} km/h = ${ms} m/s`, w/2, h - 30)
    ctx.fillStyle = DIM; ctx.font = '10px sans-serif'
    ctx.fillText('Speed is scalar; velocity is speed + direction', w/2, h - 14)
  }
}

export const displacement: ExploreConfig = {
  hint: 'Cricketer runs between wickets — distance vs displacement',
  controls: [{ label: 'Runs completed', min: 1, max: 5, step: 1, unit: '', default: 2 }],
  draw(ctx, w, h, [runs]) {
    bg(ctx, w, h)
    const W1 = 60, W2 = 300, y = h / 2
    ctx.strokeStyle = '#1e3a5f'; ctx.lineWidth = 3
    ctx.beginPath(); ctx.moveTo(W1, y - 20); ctx.lineTo(W1, y + 20); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(W2, y - 20); ctx.lineTo(W2, y + 20); ctx.stroke()
    const r = Math.round(runs)
    const isAtStart = r % 2 === 0
    const px = isAtStart ? W1 : W2
    ctx.font = '18px sans-serif'; ctx.textAlign = 'center'
    ctx.fillText('🏃', px, y + 8)
    ctx.strokeStyle = ORANGE; ctx.lineWidth = 2; ctx.setLineDash([5, 4])
    const dist = r * (W2 - W1)
    ctx.beginPath(); ctx.moveTo(W1, y - 40); ctx.lineTo(W1 + Math.min(dist, w - 100), y - 40); ctx.stroke()
    ctx.setLineDash([])
    ctx.strokeStyle = GREEN; ctx.lineWidth = 2.5
    ctx.beginPath(); ctx.moveTo(W1, y - 60)
    ctx.lineTo(isAtStart ? W1 : W2, y - 60); ctx.stroke()
    ctx.fillStyle = ORANGE; ctx.font = '11px monospace'; ctx.textAlign = 'left'
    ctx.fillText(`Distance: ${r * 20}m`, 30, y - 30)
    ctx.fillStyle = GREEN; ctx.font = '11px monospace'
    ctx.fillText(`Displacement: ${isAtStart ? '0m (returned)' : '20m'}`, 30, y - 52)
    ctx.fillStyle = TEXT; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center'
    ctx.fillText(`${r} run${r>1?'s':''} — pitch = 20m`, w/2, h - 15)
  }
}

export const acceleration: ExploreConfig = {
  hint: 'Drag car from 0 to 100 km/h — feel the acceleration',
  controls: [{ label: 'Acceleration', min: 1, max: 20, step: 1, unit: ' m/s²', default: 5 }],
  draw(ctx, w, h, [a], t) {
    bg(ctx, w, h)
    const tEnd = 100 / 3.6 / a
    const tNow = t % (tEnd + 1.5)
    const v = Math.min(tNow * a, 100 / 3.6)
    const x = 40 + Math.min(tNow * v * 0.4, w - 100)
    ctx.strokeStyle = '#374151'; ctx.lineWidth = 10
    ctx.beginPath(); ctx.moveTo(30, h/2 + 20); ctx.lineTo(w - 20, h/2 + 20); ctx.stroke()
    ctx.font = '22px sans-serif'; ctx.fillText('🚗', x, h/2 + 14)
    const speedKmh = (v * 3.6).toFixed(0)
    ctx.fillStyle = GREEN; ctx.font = 'bold 20px monospace'; ctx.textAlign = 'center'
    ctx.fillText(`${speedKmh} km/h`, w/2, 35)
    ctx.fillStyle = CYAN; ctx.font = 'bold 12px monospace'
    ctx.fillText(`a = ${a} m/s²   t = ${Math.min(tNow, tEnd).toFixed(1)}s`, w/2, 58)
    const bw = 200, bh = 14, bx = (w - bw) / 2, by = h - 45
    ctx.fillStyle = '#1e293b'; ctx.fillRect(bx, by, bw, bh);
    ctx.fillStyle = ORANGE; ctx.fillRect(bx, by, bw * Number(speedKmh) / 100, bh)
    ctx.strokeStyle = '#475569'; ctx.lineWidth = 1; ctx.strokeRect(bx, by, bw, bh)
    ctx.fillStyle = DIM; ctx.font = '10px sans-serif'
    ctx.fillText(`0 km/h → 100 km/h in ${tEnd.toFixed(1)}s`, w/2, h - 14)
  }
}

export const equationsOfMotion: ExploreConfig = {
  hint: 'Ball dropped from stadium — watch all 3 equations live',
  controls: [
    { label: 'Height', min: 10, max: 100, step: 5, unit: ' m', default: 45 },
    { label: 'Init vel (up)', min: 0, max: 20, step: 1, unit: ' m/s', default: 0 },
  ],
  draw(ctx, w, h, [H, u0], t) {
    bg(ctx, w, h)
    const g = 9.8, u = u0
    const totalT = (-u + Math.sqrt(u * u + 2 * g * H)) / g
    const tNow = t % (totalT + 1)
    const y_pos = u * tNow - 0.5 * g * tNow * tNow
    const height = Math.max(H + y_pos, 0)
    const ballY = 30 + (H - height) / H * (h - 80)
    ctx.strokeStyle = '#1e3a5f'; ctx.lineWidth = 2; ctx.setLineDash([4, 3])
    ctx.beginPath(); ctx.moveTo(60, 30); ctx.lineTo(60, h - 50); ctx.stroke()
    ctx.setLineDash([])
    ctx.font = '16px sans-serif'; ctx.textAlign = 'center'
    ctx.fillText('🏟️', 60, h - 40)
    ctx.fillText('🏏', 60, ballY)
    const v = (u - g * Math.min(tNow, totalT)).toFixed(1)
    ctx.fillStyle = CYAN; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'left'
    ctx.fillText(`v = u + at = ${v} m/s`, 90, 40)
    ctx.fillStyle = GREEN; ctx.font = '11px monospace'
    ctx.fillText(`s = ut + ½at² = ${(H - height).toFixed(1)}m`, 90, 60)
    ctx.fillStyle = YELLOW; ctx.font = '11px monospace'
    ctx.fillText(`v² = u² + 2as`, 90, 80)
    ctx.fillStyle = TEXT; ctx.font = 'bold 12px monospace'; ctx.textAlign = 'center'
    ctx.fillText(`H = ${height.toFixed(1)}m  t = ${Math.min(tNow, totalT).toFixed(2)}s`, w/2, h - 15)
  }
}

export const relativeVelocity: ExploreConfig = {
  hint: 'Two trains — observe velocity from each reference frame',
  controls: [
    { label: 'Train A speed', min: 20, max: 120, step: 5, unit: ' km/h', default: 60 },
    { label: 'Train B speed', min: 20, max: 120, step: 5, unit: ' km/h', default: 80 },
  ],
  draw(ctx, w, h, [vA, vB], t) {
    bg(ctx, w, h)
    const tA = 60 + ((t * vA / 36) % (w - 80))
    const tB = w - 100 - ((t * vB / 36) % (w - 80))
    ctx.fillStyle = '#1e293b'; ctx.fillRect(0, h/2 - 20, w, 40)
    ctx.fillStyle = '#374151'; ctx.fillRect(0, h/2 - 5, w, 10)
    ctx.font = '22px sans-serif'; ctx.textAlign = 'center'
    ctx.fillText('🚆', tA, h/2 - 5)
    ctx.fillText('🚇', tB, h/2 - 5)
    ctx.fillStyle = CYAN; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'
    ctx.fillText(`A: ${vA} km/h →`, w*0.25, 30)
    ctx.fillStyle = RED
    ctx.fillText(`B: ← ${vB} km/h`, w*0.75, 30)
    ctx.fillStyle = YELLOW; ctx.font = 'bold 13px monospace'
    ctx.fillText(`Rel. vel (A sees B): ${vA + vB} km/h`, w/2, h - 35)
    ctx.fillStyle = GREEN; ctx.font = '11px monospace'
    ctx.fillText(`Rel. vel (ground sees A-B): ${Math.abs(vA - vB)} km/h`, w/2, h - 15)
  }
}
