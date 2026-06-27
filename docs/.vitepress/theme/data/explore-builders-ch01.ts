import type { ExploreConfig } from './explore-types'

const BG = '#0f172a'
const GRID = '#1e293b'
const TEXT = '#e2e8f0'
const DIM = '#64748b'
const CYAN = '#06b6d4'
const GREEN = '#22c55e'
const RED = '#ef4444'
const YELLOW = '#eab308'

function bg(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = BG; ctx.fillRect(0, 0, w, h)
}

export const sigFigures: ExploreConfig = {
  hint: 'GPS shows 2.35 km — drag slider to change precision',
  controls: [{ label: 'Decimal places', min: 0, max: 4, step: 1, unit: '', default: 2 }],
  draw(ctx, w, h, [places], t) {
    bg(ctx, w, h)
    const dist = 2.348657
    const shown = dist.toFixed(places)
    const sigCount = shown.replace('.', '').replace(/^0+/, '').length
    ctx.fillStyle = '#1e3a5f'; ctx.fillRect(w/2-110, 30, 220, 90);
    ctx.strokeStyle = CYAN; ctx.lineWidth = 1.5; ctx.strokeRect(w/2-110, 30, 220, 90)
    ctx.fillStyle = '#7dd3fc'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'
    ctx.fillText('📍 GPS Distance', w/2, 50)
    ctx.fillStyle = GREEN; ctx.font = `bold ${places < 2 ? 32 : 26}px monospace`
    ctx.fillText(shown + ' km', w/2, 88)
    ctx.fillStyle = YELLOW; ctx.font = 'bold 12px monospace'
    ctx.fillText(`→ ${sigCount} significant figure${sigCount !== 1 ? 's' : ''}`, w/2, 110)
    ctx.fillStyle = DIM; ctx.font = '10px sans-serif'
    ctx.fillText('More decimal places = more precision', w/2, 145)
    ctx.fillText(`True distance: ${dist} km`, w/2, 160)
  }
}

export const dimensions: ExploreConfig = {
  hint: 'Pick a quantity to see its base dimensions',
  controls: [{ label: 'Quantity', min: 0, max: 4, step: 1, unit: '', default: 0 }],
  draw(ctx, w, h, [idx]) {
    bg(ctx, w, h)
    const qs = [
      { name: 'Velocity', sym: 'v', dim: 'L T⁻¹', ex: 'Ball speed: m/s', col: CYAN },
      { name: 'Force', sym: 'F', dim: 'M L T⁻²', ex: 'Cricket ball impact: N', col: RED },
      { name: 'Energy', sym: 'E', dim: 'M L² T⁻²', ex: 'Batting power: J', col: YELLOW },
      { name: 'Pressure', sym: 'P', dim: 'M L⁻¹ T⁻²', ex: 'Tyre pressure: Pa', col: GREEN },
      { name: 'Power', sym: 'P', dim: 'M L² T⁻³', ex: 'Engine power: W', col: '#a78bfa' },
    ]
    const q = qs[Math.round(idx) % 5]
    ctx.fillStyle = '#1c1f2e'; ctx.fillRect(20, 20, w-40, 150);
    ctx.strokeStyle = q.col; ctx.lineWidth = 2; ctx.strokeRect(20, 20, w-40, 150)
    ctx.fillStyle = q.col; ctx.font = 'bold 18px monospace'; ctx.textAlign = 'center'
    ctx.fillText(q.name, w/2, 52)
    ctx.fillStyle = TEXT; ctx.font = 'bold 28px monospace'
    ctx.fillText(`[${q.sym}] = ${q.dim}`, w/2, 95)
    ctx.fillStyle = '#94a3b8'; ctx.font = '13px sans-serif'
    ctx.fillText(q.ex, w/2, 128)
    ctx.fillStyle = DIM; ctx.font = '11px sans-serif'
    ctx.fillText('← drag slider to explore quantities →', w/2, 158)
  }
}

export const dimAnalysis: ExploreConfig = {
  hint: 'Check if a formula is dimensionally valid',
  controls: [{ label: 'Formula check', min: 0, max: 3, step: 1, unit: '', default: 0 }],
  draw(ctx, w, h, [idx]) {
    bg(ctx, w, h)
    const checks = [
      { lhs: 'v = u + at', ldim: 'L T⁻¹', rdim: 'L T⁻¹ + (L T⁻²)(T)', valid: true },
      { lhs: 's = ut + ½at²', ldim: 'L', rdim: 'L T⁻¹·T + L T⁻²·T²', valid: true },
      { lhs: 'F = ma', ldim: 'M L T⁻²', rdim: 'M · L T⁻²', valid: true },
      { lhs: 'E = ½mv²', ldim: 'M L² T⁻²', rdim: 'M (L T⁻¹)²', valid: true },
    ]
    const c = checks[Math.round(idx) % 4]
    const col = c.valid ? GREEN : RED
    ctx.fillStyle = '#0d1f0d'; ctx.fillRect(20, 15, w-40, 155);
    ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.strokeRect(20, 15, w-40, 155)
    ctx.fillStyle = col; ctx.font = 'bold 16px monospace'; ctx.textAlign = 'center'
    ctx.fillText(c.lhs, w/2, 45)
    ctx.fillStyle = CYAN; ctx.font = '12px monospace'
    ctx.fillText('LHS: ' + c.ldim, w/2, 75)
    ctx.fillStyle = '#94a3b8'; ctx.font = '11px sans-serif'
    ctx.fillText('RHS: ' + c.rdim, w/2, 98)
    ctx.fillStyle = TEXT; ctx.font = 'bold 22px sans-serif'
    ctx.fillText(c.valid ? '✅ Balanced' : '❌ Mismatch', w/2, 135)
    ctx.fillStyle = DIM; ctx.font = '10px sans-serif'
    ctx.fillText('Both sides must have same dimensions', w/2, 158)
  }
}
