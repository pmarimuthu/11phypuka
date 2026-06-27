export function buildVelocitySpeed(THREE: any, scene: any, makeSprite: Function) {
  const road = new THREE.Mesh(new THREE.BoxGeometry(10, 0.1, 2), new THREE.MeshPhongMaterial({ color: 0x374151 }))
  road.position.set(0, -1, 0); scene.add(road)
  const car = new THREE.Group()
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.6, 0.9), new THREE.MeshPhongMaterial({ color: 0xef4444, emissive: 0x7f1d1d, emissiveIntensity: 0.3 }))
  car.add(body)
  const top = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.45, 0.85), new THREE.MeshPhongMaterial({ color: 0xdc2626 }))
  top.position.set(-0.1, 0.52, 0); car.add(top)
  car.position.set(0, -0.65, 0); scene.add(car)
  const vArr = makeSprite('v⃗ = 100 km/h →', '#06b6d4', [3.5, 0.7]); vArr.position.set(2.5, 0.5, 0); scene.add(vArr)
  const s1 = makeSprite('Speed = |velocity| (scalar)', '#94a3b8', [5, 0.65]); s1.position.set(0, 2, 0); scene.add(s1)
  let t = 0
  return () => { t += 0.02; car.position.x = ((t * 2) % 12) - 6 }
}

export function buildDisplacement(THREE: any, scene: any, makeSprite: Function) {
  const ground = new THREE.Mesh(new THREE.BoxGeometry(12, 0.1, 3), new THREE.MeshPhongMaterial({ color: 0x14532d }))
  ground.position.set(0, -1.5, 0); scene.add(ground)
  const path = new THREE.Line(new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-4, -1, 0), new THREE.Vector3(-1, -1, 0.8), new THREE.Vector3(1, -1, -0.8), new THREE.Vector3(4, -1, 0)
  ]), new THREE.LineBasicMaterial({ color: 0x6b7280 }))
  scene.add(path)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(-4, -0.5, 0), 8, 0x06b6d4, 0.5, 0.25))
  const d1 = makeSprite('Distance (winding path)', '#f97316', [4.5, 0.65]); d1.position.set(0, 1.5, 0); scene.add(d1)
  const d2 = makeSprite('Displacement (straight line →)', '#06b6d4', [4.8, 0.65]); d2.position.set(0, 0.8, 0); scene.add(d2)
  const runner = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.6, 8), new THREE.MeshPhongMaterial({ color: 0xfbbf24 }))
  runner.position.set(-4, -0.8, 0); scene.add(runner)
  let t = 0
  return () => {
    t += 0.015
    const p = (Math.sin(t) + 1) / 2
    runner.position.x = -4 + p * 8
    runner.position.z = Math.sin(p * Math.PI) * 0.8
  }
}

export function buildAcceleration(THREE: any, scene: any, makeSprite: Function) {
  const track = new THREE.Mesh(new THREE.BoxGeometry(12, 0.1, 2), new THREE.MeshPhongMaterial({ color: 0x111827 }))
  track.position.set(0, -1.5, 0); scene.add(track)
  const car = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.5, 0.8), new THREE.MeshPhongMaterial({ color: 0xef4444, emissive: 0x991b1b, emissiveIntensity: 0.4 }))
  car.position.set(-5, -1, 0); scene.add(car)
  let v = 0, pos = -5
  const vLabel = makeSprite('v = 0 m/s', '#22c55e', [3, 0.65]); vLabel.position.set(0, 1.5, 0); scene.add(vLabel)
  const aLabel = makeSprite('a = 5 m/s²', '#06b6d4', [3, 0.65]); aLabel.position.set(0, 0.8, 0); scene.add(aLabel)
  let t = 0
  return () => {
    t += 0.016; v = Math.min(5 * t, 20); pos = -5 + 0.5 * 5 * t * t
    if (pos > 6) { t = 0; v = 0; pos = -5 }
    car.position.x = pos
  }
}

export function buildEquationsOfMotion(THREE: any, scene: any, makeSprite: Function) {
  const stadium = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 1.5), new THREE.MeshPhongMaterial({ color: 0x1e3a5f }))
  stadium.position.set(-4, 0, 0); scene.add(stadium)
  const ground = new THREE.Mesh(new THREE.BoxGeometry(12, 0.1, 3), new THREE.MeshPhongMaterial({ color: 0x14532d }))
  ground.position.set(0, -1.5, 0); scene.add(ground)
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), new THREE.MeshPhongMaterial({ color: 0xdc2626, emissive: 0xdc2626, emissiveIntensity: 0.3 }))
  scene.add(ball)
  const e1 = makeSprite('v = u + at', '#06b6d4', [3, 0.65]); e1.position.set(2, 2, 0); scene.add(e1)
  const e2 = makeSprite('s = ut + ½at²', '#22c55e', [3.5, 0.65]); e2.position.set(2, 1.2, 0); scene.add(e2)
  const e3 = makeSprite('v² = u² + 2as', '#eab308', [3.5, 0.65]); e3.position.set(2, 0.4, 0); scene.add(e3)
  let t = 0
  return () => {
    t += 0.016
    const g = 9.8, u = 0, tFall = 1.5
    const phase = t % (tFall + 0.8)
    const fall = u * phase + 0.5 * g * phase * phase
    ball.position.set(-4, 1.5 - fall * 0.8, 0)
    if (phase > tFall) { }
  }
}

export function buildRelativeVelocity(THREE: any, scene: any, makeSprite: Function) {
  const track = new THREE.Mesh(new THREE.BoxGeometry(12, 0.2, 3), new THREE.MeshPhongMaterial({ color: 0x1e293b }))
  track.position.set(0, -1.5, 0); scene.add(track)
  const trainA = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.8, 0.7), new THREE.MeshPhongMaterial({ color: 0x3b82f6, emissive: 0x1d4ed8, emissiveIntensity: 0.3 }))
  const trainB = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.8, 0.7), new THREE.MeshPhongMaterial({ color: 0xef4444, emissive: 0x991b1b, emissiveIntensity: 0.3 }))
  trainA.position.set(-4, -1, 0); trainB.position.set(4, -1, 0); scene.add(trainA); scene.add(trainB)
  const l1 = makeSprite('→ Train A: 60 km/h', '#3b82f6', [4, 0.65]); l1.position.set(-3, 0.5, 0); scene.add(l1)
  const l2 = makeSprite('← Train B: 80 km/h', '#ef4444', [4, 0.65]); l2.position.set(3, 0.5, 0); scene.add(l2)
  const l3 = makeSprite('Relative: 140 km/h', '#fbbf24', [4, 0.75]); l3.position.set(0, 1.5, 0); scene.add(l3)
  let t = 0
  return () => {
    t += 0.016
    trainA.position.x = -6 + ((t * 1.5) % 10)
    trainB.position.x = 6 - ((t * 2) % 10)
  }
}
