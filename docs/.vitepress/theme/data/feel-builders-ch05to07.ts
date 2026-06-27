export function buildWork(THREE: any, scene: any, makeSprite: Function) {
  const ground = new THREE.Mesh(new THREE.BoxGeometry(10, 0.1, 3), new THREE.MeshPhongMaterial({ color: 0x475569 }))
  ground.position.set(0, -1.5, 0); scene.add(ground)
  const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({ color: 0x3b82f6 }))
  box.position.set(-3, -0.95, 0); scene.add(box)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(Math.cos(0.5), Math.sin(-0.5), 0), new THREE.Vector3(-2, -0.45, 0), 2.5, 0xef4444, 0.4, 0.2))
  const l = makeSprite('W = F·d·cos θ = 50×3×cos30 = 130 J', '#fbbf24', [7, 0.75]); l.position.set(0, 1.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.015; box.position.x = -3 + (t % 3) * 2 }
}

export function buildKineticEnergy(THREE: any, scene: any, makeSprite: Function) {
  const shuttle = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.5, 8), new THREE.MeshPhongMaterial({ color: 0xe2e8f0 }))
  shuttle.rotation.z = Math.PI / 2; scene.add(shuttle)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 0), 4, 0xef4444, 0.4, 0.2))
  const l = makeSprite('KE = ½mv²  Badminton: 0.005kg × 100²/2 = 25J', '#fbbf24', [8, 0.75]); l.position.set(0, 2, 0); scene.add(l)
  let t = 0
  return () => { t += 0.03; shuttle.position.x = -5 + (t % 5) * 3; shuttle.rotation.y += 0.1 }
}

export function buildPotentialEnergy(THREE: any, scene: any, makeSprite: Function) {
  const track = [[-4, -1.5], [-2, 1], [0, -1], [2, 2], [4, -1.5]]
  const pts = track.map(([x, y]) => new THREE.Vector3(x, y, 0))
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x374151, linewidth: 3 }))
  scene.add(line)
  const cart = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.4, 0.5), new THREE.MeshPhongMaterial({ color: 0xef4444 }))
  scene.add(cart)
  const l = makeSprite('PE = mgh  ↑height → ↑PE → ↑speed at bottom', '#fbbf24', [7, 0.75]); l.position.set(0, 3.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.01; const i = Math.floor(t % (track.length - 1)); const p = track[i], n = track[(i + 1) % track.length]; cart.position.set(p[0] + (n[0] - p[0]) * (t % 1), p[1] + (n[1] - p[1]) * (t % 1), 0) }
}

export function buildConservationEnergy(THREE: any, scene: any, makeSprite: Function) {
  const pivot = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), new THREE.MeshPhongMaterial({ color: 0xffffff }))
  pivot.position.set(0, 3, 0); scene.add(pivot)
  const rod = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -2.5, 0)]), new THREE.LineBasicMaterial({ color: 0x94a3b8 }))
  scene.add(rod)
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), new THREE.MeshPhongMaterial({ color: 0xf97316, emissive: 0xf97316, emissiveIntensity: 0.4 }))
  scene.add(ball)
  const l = makeSprite('KE + PE = constant', '#fbbf24', [4.5, 0.75]); l.position.set(0, -3.5, 0); scene.add(l)
  let t = 0
  return () => {
    t += 0.025; const angle = Math.sin(t) * 0.7
    ball.position.set(Math.sin(angle) * 2.5, 3 - Math.cos(angle) * 2.5, 0)
    const rpts = [new THREE.Vector3(0, 3, 0), ball.position.clone()]
    rod.geometry.setFromPoints(rpts)
  }
}

export function buildPower(THREE: any, scene: any, makeSprite: Function) {
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.6, 0.7), new THREE.MeshPhongMaterial({ color: 0x1d4ed8 }))
  body.position.set(0, 0, 0); scene.add(body)
  const l = makeSprite('P = W/t = 50kW EV charges 100kWh in 2hrs', '#fbbf24', [7, 0.75]); l.position.set(0, 2, 0); scene.add(l)
  const bolt = makeSprite('⚡', '#eab308', [1.5, 1]); bolt.position.set(0, 0.1, 0); scene.add(bolt)
  let t = 0
  return () => { t += 0.02; body.position.x = -3 + (t * 0.8 % 8) }
}

export function buildCollisions(THREE: any, scene: any, makeSprite: Function) {
  const b1 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), new THREE.MeshPhongMaterial({ color: 0x3b82f6 }))
  const b2 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), new THREE.MeshPhongMaterial({ color: 0xef4444 }))
  b1.position.set(-3, 0, 0); b2.position.set(2, 0, 0); scene.add(b1); scene.add(b2)
  const l = makeSprite('Elastic: KE conserved  Inelastic: KE lost', '#fbbf24', [7, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  const l2 = makeSprite('Momentum ALWAYS conserved', '#22c55e', [5.5, 0.75]); l2.position.set(0, 1.5, 0); scene.add(l2)
  let t = 0
  return () => {
    t += 0.02; const p = t % 3
    if (p < 1) { b1.position.x = -3 + p * 4; b2.position.x = 2 }
    else { b1.position.x = 1; b2.position.x = 2 + (p - 1) * 3 }
  }
}

export function buildCentreOfMass(THREE: any, scene: any, makeSprite: Function) {
  const plank = new THREE.Mesh(new THREE.BoxGeometry(7, 0.15, 1), new THREE.MeshPhongMaterial({ color: 0x78350f }))
  plank.position.set(0, 0, 0); scene.add(plank)
  const pivot = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.6, 6), new THREE.MeshPhongMaterial({ color: 0x475569 }))
  pivot.position.set(0, -0.4, 0); scene.add(pivot)
  const c1 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), new THREE.MeshPhongMaterial({ color: 0x3b82f6 }))
  c1.position.set(-3, 0.35, 0); scene.add(c1)
  const c2 = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), new THREE.MeshPhongMaterial({ color: 0x22c55e }))
  c2.position.set(3, 0.25, 0); scene.add(c2)
  const l = makeSprite('COM at balance point: m₁x₁ = m₂x₂', '#fbbf24', [6, 0.75]); l.position.set(0, 2, 0); scene.add(l)
  let t = 0
  return () => { t += 0.01; plank.rotation.z = Math.sin(t) * 0.08 }
}

export function buildTorque(THREE: any, scene: any, makeSprite: Function) {
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.1, 3, 1.5), new THREE.MeshPhongMaterial({ color: 0x78350f }))
  door.position.set(-1.5, 0, 0); scene.add(door)
  const handle = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 12), new THREE.MeshPhongMaterial({ color: 0xfbbf24 }))
  handle.position.set(1.4, 0, 0); scene.add(handle)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), new THREE.Vector3(1.4, 0.6, 0), 1.5, 0xef4444, 0.4, 0.2))
  const l = makeSprite('τ = r × F  (longer arm = less effort)', '#fbbf24', [6, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.01; door.rotation.y = Math.sin(t * 0.5) * 0.5 }
}

export function buildAngularMomentum(THREE: any, scene: any, makeSprite: Function) {
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.5, 8), new THREE.MeshPhongMaterial({ color: 0xe2e8f0 }))
  scene.add(body)
  const arms = new THREE.Mesh(new THREE.BoxGeometry(3, 0.15, 0.15), new THREE.MeshPhongMaterial({ color: 0xf472b6 }))
  scene.add(arms)
  const l = makeSprite('L = Iω = constant (arms in → I↓ → ω↑)', '#fbbf24', [7, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0, armLen = 1.5
  return () => {
    t += 0.02; const slow = Math.sin(t * 0.3)
    armLen = 0.8 + slow * 0.7
    body.rotation.y += 0.02 + (1 - slow) * 0.06
    arms.scale.x = armLen
    arms.rotation.y = body.rotation.y
  }
}

export function buildMomentOfInertia(THREE: any, scene: any, makeSprite: Function) {
  const rim = new THREE.Mesh(new THREE.TorusGeometry(2, 0.18, 8, 40), new THREE.MeshPhongMaterial({ color: 0x94a3b8, emissive: 0x94a3b8, emissiveIntensity: 0.2 }))
  scene.add(rim)
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.2, 12), new THREE.MeshPhongMaterial({ color: 0x475569 }))
  scene.add(hub)
  for (let i = 0; i < 8; i++) {
    const a = i * Math.PI / 4, spoke = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2, 0.06), new THREE.MeshPhongMaterial({ color: 0x64748b }))
    spoke.rotation.z = a; scene.add(spoke)
  }
  const l = makeSprite('I = mr²  mass at rim = max inertia', '#fbbf24', [6, 0.75]); l.position.set(0, 3.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.015; rim.rotation.z = t; hub.rotation.z = t }
}

export function buildRollingMotion(THREE: any, scene: any, makeSprite: Function) {
  const ramp = new THREE.Mesh(new THREE.BoxGeometry(8, 0.15, 1.5), new THREE.MeshPhongMaterial({ color: 0x475569 }))
  ramp.rotation.z = -0.3; ramp.position.set(0, -1, 0); scene.add(ramp)
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), new THREE.MeshPhongMaterial({ color: 0xf97316, emissive: 0xf97316, emissiveIntensity: 0.3 }))
  scene.add(ball)
  const line = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.8, 0.05), new THREE.MeshPhongMaterial({ color: 0xffffff }))
  scene.add(line)
  const l = makeSprite('Rolling: KE = ½mv² + ½Iω²', '#fbbf24', [5.5, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => {
    t += 0.015; const p = (t % 3) / 3
    ball.position.set(-3.5 + p * 7, -0.5 - p * 0.5 + 0.4, 0)
    ball.rotation.z -= 0.05; line.position.copy(ball.position); line.rotation.z = ball.rotation.z
  }
}

export function buildUniversalLaw(THREE: any, scene: any, makeSprite: Function) {
  const earth = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 16), new THREE.MeshPhongMaterial({ color: 0x1d4ed8, emissive: 0x1e3a5f, emissiveIntensity: 0.3 }))
  earth.position.set(-2.5, 0, 0); scene.add(earth)
  const moon = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
  moon.position.set(2.5, 0, 0); scene.add(moon)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(-1, 0, 0), new THREE.Vector3(2.15, 0.1, 0), 1.5, 0xef4444, 0.4, 0.2))
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(-2.15, 0.1, 0), 1.5, 0x22c55e, 0.4, 0.2))
  const l = makeSprite('F = GM₁M₂/r²  drag to change r', '#fbbf24', [6.5, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.01; moon.position.x = 2.5 + Math.sin(t) * 0.5 }
}

export function buildGravitationalField(THREE: any, scene: any, makeSprite: Function) {
  const planet = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), new THREE.MeshPhongMaterial({ color: 0x3b82f6, emissive: 0x1d4ed8, emissiveIntensity: 0.3 }))
  scene.add(planet)
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6, r = 2.5
    scene.add(new THREE.ArrowHelper(new THREE.Vector3(-Math.cos(a), -Math.sin(a), 0), new THREE.Vector3(r * Math.cos(a), r * Math.sin(a), 0), 0.8, 0x22c55e, 0.25, 0.12))
  }
  const l = makeSprite('Gravitational field lines → planet', '#22c55e', [6, 0.75]); l.position.set(0, 3.8, 0); scene.add(l)
  return () => { planet.rotation.y += 0.01 }
}

export function buildEscapeVelocity(THREE: any, scene: any, makeSprite: Function) {
  const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), new THREE.MeshPhongMaterial({ color: 0x1d4ed8 }))
  scene.add(earth)
  const rocket = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.7, 8), new THREE.MeshPhongMaterial({ color: 0xe2e8f0 }))
  scene.add(rocket)
  const l = makeSprite('v_esc = √(2GM/R) = 11.2 km/s', '#fbbf24', [6, 0.75]); l.position.set(0, 3.5, 0); scene.add(l)
  let t = 0
  return () => {
    t += 0.02; const h = 1 + t * 0.5
    rocket.position.set(Math.sin(t * 0.3) * 0.5, h, 0)
    if (h > 5) t = 0
  }
}

export function buildKeplersLaws(THREE: any, scene: any, makeSprite: Function) {
  const sun = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), new THREE.MeshPhongMaterial({ color: 0xfbbf24, emissive: 0xfbbf24, emissiveIntensity: 0.6 }))
  scene.add(sun)
  const planet = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), new THREE.MeshPhongMaterial({ color: 0x3b82f6 }))
  scene.add(planet)
  const curve = new THREE.EllipseCurve(0.5, 0, 3.5, 2.5, 0, Math.PI * 2, false, 0)
  const pts = curve.getPoints(50)
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts.map(p => new THREE.Vector3(p.x, p.y, 0))), new THREE.LineBasicMaterial({ color: 0x1e3a5f }))
  scene.add(line)
  const l = makeSprite('Kepler 2nd: equal areas in equal time', '#fbbf24', [6, 0.75]); l.position.set(0, -4, 0); scene.add(l)
  let t = 0
  return () => {
    t += 0.02; const p = pts[Math.floor(t % pts.length)]
    planet.position.set(p.x, p.y, 0)
  }
}

export function buildSatellites(THREE: any, scene: any, makeSprite: Function) {
  const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), new THREE.MeshPhongMaterial({ color: 0x1d4ed8 }))
  scene.add(earth)
  const orbits = [{ r: 2, col: 0x22c55e, label: 'LEO' }, { r: 3.5, col: 0x3b82f6, label: 'GPS' }, { r: 5, col: 0xfbbf24, label: 'GEO' }]
  const sats = orbits.map(({ r, col, label }) => {
    const orbit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(Array.from({ length: 65 }, (_, i) => new THREE.Vector3(r * Math.cos(i / 64 * Math.PI * 2), r * Math.sin(i / 64 * Math.PI * 2), 0))), new THREE.LineBasicMaterial({ color: col, opacity: 0.4, transparent: true }))
    scene.add(orbit)
    const sat = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.12, 0.12), new THREE.MeshPhongMaterial({ color: col }))
    scene.add(sat)
    const sp = makeSprite(label, '#e2e8f0', [1.8, 0.6]); sp.position.set(r + 0.5, 0.3, 0); scene.add(sp)
    return { sat, r, speed: 1 / Math.sqrt(r) }
  })
  let t = 0
  return () => { t += 0.02; sats.forEach(({ sat, r, speed }) => { sat.position.set(r * Math.cos(t * speed), r * Math.sin(t * speed), 0) }) }
}
