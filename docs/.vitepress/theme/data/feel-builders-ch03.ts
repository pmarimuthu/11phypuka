export function buildScalarsVectors(THREE: any, scene: any, makeSprite: Function) {
  const origin = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 12), new THREE.MeshPhongMaterial({ color: 0xffffff }))
  scene.add(origin)
  const dirs = [
    { d: [3, 0, 0], col: 0x3b82f6, label: 'v⃗ East' }, { d: [-2, 0, 1.5], col: 0xef4444, label: 'v⃗ NW' },
    { d: [0, 2.5, 0], col: 0x22c55e, label: 'v⃗ Up' },
  ]
  dirs.forEach(({ d, col, label }) => {
    const [dx, dy, dz] = d, len = Math.sqrt(dx * dx + dy * dy + dz * dz)
    scene.add(new THREE.ArrowHelper(new THREE.Vector3(dx / len, dy / len, dz / len), new THREE.Vector3(0, 0, 0), len, col, 0.4, 0.2))
    const sp = makeSprite(label, '#e2e8f0', [2.5, 0.65]); sp.position.set(dx + 0.3, dy + 0.2, dz); scene.add(sp)
  })
  const h = makeSprite('Same speed 50 km/h — different velocities', '#94a3b8', [6, 0.65]); h.position.set(0, 3.5, 0); scene.add(h)
  return () => {}
}

export function buildVectorAddition(THREE: any, scene: any, makeSprite: Function) {
  const A = new THREE.Vector3(3, 0, 0), B = new THREE.Vector3(1, 2.5, 0), R = A.clone().add(B)
  scene.add(new THREE.ArrowHelper(A.clone().normalize(), new THREE.Vector3(-4, -1, 0), A.length(), 0x06b6d4, 0.4, 0.2))
  scene.add(new THREE.ArrowHelper(B.clone().normalize(), new THREE.Vector3(-4 + A.x, -1 + A.y, 0), B.length(), 0x22c55e, 0.4, 0.2))
  scene.add(new THREE.ArrowHelper(R.clone().normalize(), new THREE.Vector3(-4, -1, 0), R.length(), 0xef4444, 0.4, 0.2))
  const la = makeSprite('A⃗ (Road 1)', '#06b6d4', [3, 0.65]); la.position.set(-2.5, -1.5, 0); scene.add(la)
  const lb = makeSprite('B⃗ (Road 2)', '#22c55e', [3, 0.65]); lb.position.set(-2, 1, 0); scene.add(lb)
  const lr = makeSprite('R⃗ = A⃗ + B⃗ (resultant)', '#ef4444', [4.5, 0.65]); lr.position.set(-1, 0.2, 0); scene.add(lr)
  const h = makeSprite('Triangle law of vector addition', '#cbd5e1', [5, 0.65]); h.position.set(0, 2.8, 0); scene.add(h)
  return () => {}
}

export function buildVectorComponents(THREE: any, scene: any, makeSprite: Function) {
  const angle = Math.PI / 4
  const V = new THREE.Vector3(Math.cos(angle) * 3, Math.sin(angle) * 3, 0)
  scene.add(new THREE.ArrowHelper(V.clone().normalize(), new THREE.Vector3(-2, -1.5, 0), V.length(), 0xfbbf24, 0.4, 0.2))
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(-2, -1.5, 0), V.x, 0x06b6d4, 0.4, 0.2))
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(-2 + V.x, -1.5, 0), V.y, 0x22c55e, 0.4, 0.2))
  const lv = makeSprite('v⃗ = 45° launch', '#fbbf24', [3.5, 0.65]); lv.position.set(0.5, 1.5, 0); scene.add(lv)
  const lx = makeSprite('Vx = v·cosθ', '#06b6d4', [3.5, 0.65]); lx.position.set(0, -2, 0); scene.add(lx)
  const ly = makeSprite('Vy = v·sinθ', '#22c55e', [3.5, 0.65]); ly.position.set(1.5, 0.2, 0); scene.add(ly)
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), new THREE.MeshPhongMaterial({ color: 0xfbbf24, emissive: 0xfbbf24, emissiveIntensity: 0.4 }))
  scene.add(ball); let t = 0
  return () => { t += 0.02; const p = t % 1.5; ball.position.set(-2 + p * 2.5, -1.5 + p * 2.5 - 4.9 * p * p, 0) }
}

export function buildUnitVectors(THREE: any, scene: any, makeSprite: Function) {
  const O = new THREE.Vector3(0, 0, 0), L = 3.5
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), O, L, 0xef4444, 0.45, 0.22))
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), O, L, 0x22c55e, 0.45, 0.22))
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), O, L, 0x3b82f6, 0.45, 0.22))
  const labels = [['î (x̂)', [L + 0.4, 0.1, 0], '#fca5a5'], ['ĵ (ŷ)', [0.1, L + 0.4, 0], '#86efac'], ['k̂ (ẑ)', [0.1, 0.1, L + 0.4], '#93c5fd']]
  labels.forEach(([text, pos, col]) => { const sp = makeSprite(text as string, col as string, [2, 0.65]); sp.position.set(...(pos as [number, number, number])); scene.add(sp) })
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 12), new THREE.MeshPhongMaterial({ color: 0xffffff })))
  const h = makeSprite('Unit vectors: magnitude = 1, pure direction', '#94a3b8', [6, 0.65]); h.position.set(1, -2.5, 0); scene.add(h)
  return () => {}
}

export function buildRelativeVelocity2d(THREE: any, scene: any, makeSprite: Function) {
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -2, 0), 4, 0x22c55e, 0.4, 0.2))
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, -2, 0), 2.5, 0xfbbf24, 0.4, 0.2))
  const rx = 2.5, ry = 4; const R = Math.sqrt(rx * rx + ry * ry)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(rx / R, ry / R, 0), new THREE.Vector3(0, -2, 0), R, 0x06b6d4, 0.4, 0.2))
  const lp = makeSprite('Plane: 400 km/h N', '#22c55e', [4, 0.65]); lp.position.set(-2.5, 0, 0); scene.add(lp)
  const lw = makeSprite('Wind: 100 km/h E', '#fbbf24', [4, 0.65]); lw.position.set(2.5, -2.5, 0); scene.add(lw)
  const la = makeSprite('Actual path →', '#06b6d4', [3.5, 0.75]); la.position.set(2, 0.5, 0); scene.add(la)
  const plane = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.6, 8), new THREE.MeshPhongMaterial({ color: 0x0ea5e9 }))
  plane.position.set(0, -2, 0); scene.add(plane)
  let t = 0
  return () => { t += 0.015; plane.position.set(t * 0.8 % 3, -2 + t * 1.5 % 5, 0) }
}

export function buildUniformCircularMotion(THREE: any, scene: any, makeSprite: Function) {
  const road = new THREE.Mesh(new THREE.TorusGeometry(3, 0.3, 8, 40), new THREE.MeshPhongMaterial({ color: 0x374151 }))
  scene.add(road)
  const car = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.25, 0.3), new THREE.MeshPhongMaterial({ color: 0xef4444, emissive: 0x991b1b, emissiveIntensity: 0.4 }))
  scene.add(car)
  const vArr = makeSprite('v⃗ tangential', '#06b6d4', [3, 0.65]); scene.add(vArr)
  const aArr = makeSprite('a_c → centre', '#ef4444', [3, 0.65]); scene.add(aArr)
  const h = makeSprite('Speed constant · Direction always changing', '#94a3b8', [6, 0.7]); h.position.set(0, -4, 0); scene.add(h)
  let t = 0
  return () => {
    t += 0.025; const a = t; const R = 3
    car.position.set(R * Math.cos(a), R * Math.sin(a), 0)
    car.rotation.z = a + Math.PI / 2
    vArr.position.set(R * Math.cos(a) + 0.8 * (-Math.sin(a)), R * Math.sin(a) + 0.8 * Math.cos(a), 0)
    aArr.position.set(R * Math.cos(a) * 0.5, R * Math.sin(a) * 0.5, 0)
  }
}
