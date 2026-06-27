export function buildInertia(THREE: any, scene: any, makeSprite: Function) {
  const bus = new THREE.Mesh(new THREE.BoxGeometry(4, 1.5, 1.8), new THREE.MeshPhongMaterial({ color: 0xf59e0b }))
  bus.position.set(0, 0, 0); scene.add(bus)
  const person = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1, 8), new THREE.MeshPhongMaterial({ color: 0xe2e8f0 }))
  person.position.set(0.5, 1.2, 0); scene.add(person)
  const fa = makeSprite('🚌 Bus brakes suddenly', '#f59e0b', [5, 0.75]); fa.position.set(0, 2.8, 0); scene.add(fa)
  const fb = makeSprite('Passenger slides → (inertia)', '#06b6d4', [5, 0.75]); fb.position.set(0, 2.0, 0); scene.add(fb)
  let t = 0, dir = 1
  return () => {
    t += 0.015 * dir
    if (t > 1) dir = -1
    if (t < 0) dir = 1
    const braking = t > 0.3
    if (braking) person.position.x = 0.5 + (t - 0.3) * 1.5
  }
}

export function buildMomentum(THREE: any, scene: any, makeSprite: Function) {
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), new THREE.MeshPhongMaterial({ color: 0xffffff }))
  scene.add(ball)
  const boot = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.3, 0.5), new THREE.MeshPhongMaterial({ color: 0x1e293b }))
  boot.position.set(-2, -0.7, 0); scene.add(boot)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0.6, 0, 0), 3, 0x06b6d4, 0.5, 0.25))
  const p = makeSprite('p = mv = 0.4×15 = 6 kg·m/s', '#06b6d4', [5.5, 0.75]); p.position.set(1.5, 2, 0); scene.add(p)
  const f = makeSprite('⚽ F = Δp/Δt', '#22c55e', [3.5, 0.65]); f.position.set(0, -2, 0); scene.add(f)
  let t = 0
  return () => {
    t += 0.02
    ball.position.x = -3 + (t % 4) * 3
    boot.position.x = -2 + (t % 4) * 0.5
  }
}

export function buildImpulse(THREE: any, scene: any, makeSprite: Function) {
  const bat = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.25, 2.5, 8), new THREE.MeshPhongMaterial({ color: 0x78350f }))
  bat.rotation.z = Math.PI / 4; bat.position.set(-1.5, 0, 0); scene.add(bat)
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), new THREE.MeshPhongMaterial({ color: 0xdc2626, emissive: 0xdc2626, emissiveIntensity: 0.2 }))
  ball.position.set(1, 0.2, 0); scene.add(ball)
  const l1 = makeSprite('J = FΔt = Δp', '#fbbf24', [4, 0.75]); l1.position.set(0, 2.5, 0); scene.add(l1)
  const l2 = makeSprite('Follow-through ↑ Δt → same J, less F', '#06b6d4', [6, 0.7]); l2.position.set(0, 1.7, 0); scene.add(l2)
  let t = 0
  return () => {
    t += 0.02
    const swing = Math.sin(t * 2) * 0.4
    bat.rotation.z = Math.PI / 4 + swing
    ball.position.x = 1 + Math.max(0, swing * 5)
  }
}

export function buildThirdLaw(THREE: any, scene: any, makeSprite: Function) {
  const rocket = new THREE.Mesh(new THREE.ConeGeometry(0.4, 2, 8), new THREE.MeshPhongMaterial({ color: 0xe2e8f0 }))
  rocket.position.set(0, 1, 0); scene.add(rocket)
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.2, 8), new THREE.MeshPhongMaterial({ color: 0xf97316, emissive: 0xf97316, emissiveIntensity: 0.8 }))
  flame.rotation.z = Math.PI; flame.position.set(0, -0.4, 0); scene.add(flame)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 2, 0), 2, 0x22c55e, 0.4, 0.2))
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, -0.4, 0), 1.5, 0xef4444, 0.4, 0.2))
  const l1 = makeSprite('Action: exhaust ↓', '#ef4444', [4, 0.65]); l1.position.set(2, -1.5, 0); scene.add(l1)
  const l2 = makeSprite('Reaction: rocket ↑', '#22c55e', [4, 0.65]); l2.position.set(2, 1.5, 0); scene.add(l2)
  let t = 0
  return () => {
    t += 0.016
    rocket.position.y = 1 + Math.sin(t * 2) * 0.3 + t * 0.1
    flame.position.y = rocket.position.y - 1.4
    if (rocket.position.y > 5) t = 0
  }
}

export function buildConservationMomentum(THREE: any, scene: any, makeSprite: Function) {
  const ball1 = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), new THREE.MeshPhongMaterial({ color: 0xe2e8f0 }))
  const ball2 = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), new THREE.MeshPhongMaterial({ color: 0x3b82f6, emissive: 0x1d4ed8, emissiveIntensity: 0.3 }))
  ball1.position.set(-3, 0, 0); ball2.position.set(1, 0, 0); scene.add(ball1); scene.add(ball2)
  const l = makeSprite('p_total conserved: m₁v₁ = m₂v₂', '#fbbf24', [6, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  const l2 = makeSprite('Billiards: elastic collision', '#94a3b8', [5, 0.65]); l2.position.set(0, 1.7, 0); scene.add(l2)
  let t = 0
  return () => {
    t += 0.015
    const phase = t % 4
    if (phase < 1.5) { ball1.position.x = -3 + phase * 2.67; ball2.position.x = 1 }
    else { ball1.position.x = 1; ball2.position.x = 1 + (phase - 1.5) * 2.67 }
  }
}

export function buildEquilibrium(THREE: any, scene: any, makeSprite: Function) {
  const base = new THREE.Mesh(new THREE.BoxGeometry(6, 0.15, 2), new THREE.MeshPhongMaterial({ color: 0x374151 }))
  base.position.set(0, -2.5, 0); scene.add(base)
  const col = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 4, 8), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
  col.position.set(0, -0.5, 0); scene.add(col)
  const top = new THREE.Mesh(new THREE.BoxGeometry(3, 0.4, 1.5), new THREE.MeshPhongMaterial({ color: 0x64748b }))
  top.position.set(0, 1.7, 0); scene.add(top)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 2.5, 0), 2, 0xef4444, 0.4, 0.2))
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -2.5, 0), 2, 0x22c55e, 0.4, 0.2))
  const l = makeSprite('ΣF = 0  ΣΤ = 0  (Static Equilibrium)', '#fbbf24', [6.5, 0.75]); l.position.set(0, 3.2, 0); scene.add(l)
  return () => {}
}

export function buildFriction(THREE: any, scene: any, makeSprite: Function) {
  const surfaces = [{ col: 0x1e293b, label: 'Ice (μ=0.03)' }, { col: 0x374151, label: 'Asphalt (μ=0.7)' }]
  surfaces.forEach((s, i) => {
    const surf = new THREE.Mesh(new THREE.BoxGeometry(4, 0.2, 1.5), new THREE.MeshPhongMaterial({ color: s.col }))
    surf.position.set(i === 0 ? -2.5 : 2.5, -1.5, 0); scene.add(surf)
    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.35, 0.6), new THREE.MeshPhongMaterial({ color: 0xef4444 }))
    shoe.position.set(i === 0 ? -2.5 : 2.5, -0.9, 0); scene.add(shoe)
    const sp = makeSprite(s.label, i === 0 ? '#60a5fa' : '#86efac', [3, 0.65]); sp.position.set(i === 0 ? -2.5 : 2.5, -2.5, 0); scene.add(sp)
  })
  const h = makeSprite('Same force — very different friction!', '#fbbf24', [5.5, 0.75]); h.position.set(0, 2.5, 0); scene.add(h)
  return () => {}
}

export function buildCircularMotion(THREE: any, scene: any, makeSprite: Function) {
  const road = new THREE.Mesh(new THREE.TorusGeometry(3, 0.35, 8, 40), new THREE.MeshPhongMaterial({ color: 0x374151 }))
  scene.add(road)
  const moto = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.3, 0.35), new THREE.MeshPhongMaterial({ color: 0xef4444, emissive: 0x991b1b, emissiveIntensity: 0.4 }))
  scene.add(moto)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), 0, 0xef4444))
  const l = makeSprite('Fc = mv²/r (centripetal force)', '#ef4444', [5, 0.75]); l.position.set(0, -4.5, 0); scene.add(l)
  const l2 = makeSprite('Bike leans inward to balance', '#94a3b8', [5, 0.65]); l2.position.set(0, -5.3, 0); scene.add(l2)
  let t = 0
  return () => {
    t += 0.03; const R = 3
    moto.position.set(R * Math.cos(t), R * Math.sin(t), 0)
    moto.rotation.z = t + Math.PI / 2
  }
}
