export function buildSiUnits(THREE: any, scene: any, makeSprite: Function) {
  const units = [
    { sym: 'm', name: 'metre', hex: 0x3b82f6 }, { sym: 'kg', name: 'kilogram', hex: 0xef4444 },
    { sym: 's', name: 'second', hex: 0x22c55e }, { sym: 'A', name: 'ampere', hex: 0xeab308 },
    { sym: 'K', name: 'kelvin', hex: 0xf97316 }, { sym: 'mol', name: 'mole', hex: 0xa855f7 },
    { sym: 'cd', name: 'candela', hex: 0x06b6d4 },
  ]
  const ring = new THREE.Group(), R = 3.8
  units.forEach((u, i) => {
    const a = (i / 7) * Math.PI * 2, x = Math.cos(a) * R, z = Math.sin(a) * R
    const box = new THREE.Mesh(new THREE.BoxGeometry(1.15, 1.15, 1.15), new THREE.MeshPhongMaterial({ color: u.hex, emissive: u.hex, emissiveIntensity: 0.38, shininess: 70 }))
    box.position.set(x, 0, z); ring.add(box)
    const sp = makeSprite(u.sym, '#ffffff', [1.5, 0.7]); sp.position.set(x, 1.2, z); ring.add(sp)
    const ns = makeSprite(u.name, '#94a3b8', [2.1, 0.55]); ns.position.set(x, -1.05, z); ring.add(ns)
  })
  const t = makeSprite('7 SI Base Units · drag to orbit', '#cbd5e1', [4.8, 0.75]); t.position.set(0, 2.8, 0); ring.add(t)
  scene.add(ring)
  return () => { ring.rotation.y += 0.004 }
}

export function buildSigFigs(THREE: any, scene: any, makeSprite: Function) {
  const chars: { ch: string; sig: boolean | null }[] = [
    { ch: '0', sig: false }, { ch: '.', sig: null }, { ch: '0', sig: false },
    { ch: '0', sig: false }, { ch: '4', sig: true }, { ch: '0', sig: true }, { ch: '5', sig: true },
  ]
  let xi = 0
  chars.forEach(({ ch, sig }) => {
    if (sig === null) {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), new THREE.MeshPhongMaterial({ color: 0x475569 }))
      dot.position.set(xi * 1.18 - 3.6, -0.95, 0); scene.add(dot); xi++; return
    }
    const h = sig ? 3.1 : 0.65, col = sig ? 0x06b6d4 : 0x1e293b
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.78, h, 0.52), new THREE.MeshPhongMaterial({ color: col, emissive: sig ? 0x0284c7 : 0x0f172a, emissiveIntensity: sig ? 0.55 : 0.05, shininess: 80 }))
    bar.position.set(xi * 1.18 - 3.6, h / 2 - 1.15, 0); scene.add(bar)
    const sp = makeSprite(ch, sig ? '#22d3ee' : '#334155', [0.85, 0.55]); sp.position.set(xi * 1.18 - 3.6, h - 0.8, 0); scene.add(sp); xi++
  })
  const t1 = makeSprite('0.00405 → 3 Significant Figures', '#e2e8f0', [5.2, 0.78]); t1.position.set(0.2, 2.7, 0); scene.add(t1)
  const t2 = makeSprite('Cyan tall bars = significant  ·  Dark short = placeholders', '#64748b', [7.5, 0.6]); t2.position.set(0.2, -2.5, 0); scene.add(t2)
  return () => {}
}

export function buildDimensions(THREE: any, scene: any, makeSprite: Function) {
  const L = 3.2
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(-0.05, 0, 0), L, 0xef4444, 0.45, 0.22))
  const m = makeSprite('M  mass', '#fca5a5', [2.2, 0.65]); m.position.set(3.8, 0.1, 0); scene.add(m)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -0.05, 0), L, 0x3b82f6, 0.45, 0.22))
  const l = makeSprite('L  length', '#93c5fd', [2.2, 0.65]); l.position.set(0, 3.8, 0); scene.add(l)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -0.05), L, 0x22c55e, 0.45, 0.22))
  const tl = makeSprite('T  time', '#86efac', [2.2, 0.65]); tl.position.set(0, 0.1, 3.8); scene.add(tl)
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 10), new THREE.MeshPhongMaterial({ color: 0xffffff })))
  const qs = [
    { label: 'Velocity [LT⁻¹]', pos: [0.0, 1.8, 1.5], col: 0x60a5fa }, { label: 'Force [MLT⁻²]', pos: [1.4, 1.4, 1.2], col: 0xf87171 },
    { label: 'Energy [ML²T⁻²]', pos: [1.2, 2.5, 1.2], col: 0xfbbf24 }, { label: 'Pressure [ML⁻¹T⁻²]', pos: [1.2, 0.5, 1.2], col: 0xa78bfa },
  ]
  qs.forEach(q => {
    const [px, py, pz] = q.pos
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), new THREE.MeshPhongMaterial({ color: q.col, emissive: q.col, emissiveIntensity: 0.45 }))
    s.position.set(px, py, pz); scene.add(s)
    const sp = makeSprite(q.label, '#e2e8f0', [3.8, 0.65]); sp.position.set(px + 1.8, py + 0.35, pz); scene.add(sp)
  })
  return () => {}
}

export function buildDimAnalysis(THREE: any, scene: any, makeSprite: Function) {
  scene.add(new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.18, 2.4, 10), new THREE.MeshPhongMaterial({ color: 0x475569 })))
  const beam = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.18, 0.22), new THREE.MeshPhongMaterial({ color: 0x065f46, emissive: 0x065f46, emissiveIntensity: 0.45 }))
  beam.position.set(0, 1.1, 0); scene.add(beam)
  const strCol = new THREE.LineBasicMaterial({ color: 0x94a3b8 })
  for (const x of [-3.3, 3.3]) {
    const pts = [new THREE.Vector3(x, 1.1, 0), new THREE.Vector3(x, -0.18, 0)]
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), strCol))
    const pan = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.1, 20), new THREE.MeshPhongMaterial({ color: 0x0891b2 }))
    pan.position.set(x, -0.28, 0); scene.add(pan)
  }
  const cols = [0xef4444, 0x3b82f6, 0x22c55e]
  ;[['M', 'L', 'T⁻²'], ['kg', 'm', 's⁻²']].forEach((lbls, side) => {
    const sx = side === 0 ? -3.3 : 3.3
    lbls.forEach((t, i) => {
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.42, 0.52), new THREE.MeshPhongMaterial({ color: cols[i], emissive: cols[i], emissiveIntensity: 0.38 }))
      box.position.set(sx + (i - 1) * 0.68, -0.02 + i * 0.44, 0); scene.add(box)
      const sp = makeSprite(t, '#f1f5f9', [0.92, 0.54]); sp.position.set(sx + (i - 1) * 0.68, 0.22 + i * 0.44, 0); scene.add(sp)
    })
  })
  const h1 = makeSprite('[F] = MLT⁻²', '#fca5a5', [3.6, 0.75]); h1.position.set(-3.3, 2.3, 0); scene.add(h1)
  const h2 = makeSprite('kg · m · s⁻²', '#86efac', [3.6, 0.75]); h2.position.set(3.3, 2.3, 0); scene.add(h2)
  const eq = makeSprite('= ✓  balanced!', '#fbbf24', [3.5, 0.78]); eq.position.set(0, 3.0, 0); scene.add(eq)
  let t = 0
  return () => { t += 0.018; beam.rotation.z = Math.sin(t) * Math.exp(-t * 0.15) * 0.07 }
}
