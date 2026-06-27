export function buildStressAndStrain(THREE: any, scene: any, makeSprite: Function) {
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 4, 12, 1, false), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
  rod.rotation.z = Math.PI / 2; scene.add(rod)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(-1, 0, 0), new THREE.Vector3(-2.5, 0, 0), 1.2, 0xef4444, 0.4, 0.2))
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(2.5, 0, 0), 1.2, 0xef4444, 0.4, 0.2))
  const l = makeSprite('σ = F/A  ε = ΔL/L  E = σ/ε', '#fbbf24', [5, 0.75]); l.position.set(0, 2, 0); scene.add(l)
  let t = 0
  return () => { t += 0.01; rod.scale.x = 1 + Math.sin(t) * 0.15 }
}

export function buildHookesLawFeel(THREE: any, scene: any, makeSprite: Function) {
  for (let i = 0; i < 8; i++) {
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.08, 6, 12), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
    coil.position.set(0, 2.5 - i * 0.7, 0); scene.add(coil)
  }
  const weight = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), new THREE.MeshPhongMaterial({ color: 0xf97316, emissive: 0xf97316, emissiveIntensity: 0.3 }))
  weight.position.set(0, -3, 0); scene.add(weight)
  const l = makeSprite('F = kx  (Hooke\'s Law)', '#fbbf24', [4, 0.75]); l.position.set(0, 3.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.02; weight.position.y = -3 + Math.sin(t) * 0.8 }
}

export function buildElasticModuliFeel(THREE: any, scene: any, makeSprite: Function) {
  const mats = [{ col: 0x94a3b8, label: 'Steel Y=200GPa', x: -2.5 }, { col: 0xfde68a, label: 'Bone Y=20GPa', x: 0 }, { col: 0x1a1a1a, label: 'Rubber Y=0.01GPa', x: 2.5 }]
  mats.forEach(({ col, label, x }) => {
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 2.5, 8), new THREE.MeshPhongMaterial({ color: col }))
    bar.position.set(x, 0, 0); scene.add(bar)
    const sp = makeSprite(label, '#e2e8f0', [3.2, 0.55]); sp.position.set(x, -2.2, 0); scene.add(sp)
  })
  const l = makeSprite('Young\'s Modulus: stiffness of material', '#fbbf24', [6, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  return () => {}
}

export function buildStressStrainCurveFeel(THREE: any, scene: any, makeSprite: Function) {
  const pts = [[0, 0], [1, 2], [1.5, 2.5], [2.5, 2.4], [3.5, 2.7], [4.5, 2.0]].map(([x, y]) => new THREE.Vector3(x, y, 0))
  const curve = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x06b6d4 }))
  scene.add(curve)
  const labels = [['Elastic', 0.5, 1.5], ['Yield', 1.5, 2.8], ['Plastic', 3, 2.8], ['Fracture', 4.5, 2.2]]
  labels.forEach(([t, x, y]) => { const sp = makeSprite(t as string, '#94a3b8', [2.5, 0.6]); sp.position.set(x as number - 2, y as number - 1.5, 0); scene.add(sp) })
  const l = makeSprite('Stress-Strain Curve', '#fbbf24', [4.5, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  return () => {}
}

export function buildApplicationsElasticityFeel(THREE: any, scene: any, makeSprite: Function) {
  const beam = new THREE.Mesh(new THREE.BoxGeometry(8, 0.3, 0.8), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
  scene.add(beam)
  const sup1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 1, 8), new THREE.MeshPhongMaterial({ color: 0x475569 }))
  sup1.position.set(-3.5, -0.65, 0); scene.add(sup1)
  const sup2 = sup1.clone(); sup2.position.set(3.5, -0.65, 0); scene.add(sup2)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 0.8, 0), 1.2, 0xef4444, 0.3, 0.15))
  const l = makeSprite('Bridge beam bends under load — elasticity keeps it safe', '#fbbf24', [8, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.02; beam.rotation.z = Math.sin(t * 0.5) * 0.04 }
}

export function buildPressureFeel(THREE: any, scene: any, makeSprite: Function) {
  const tyre = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.5, 10, 30), new THREE.MeshPhongMaterial({ color: 0x1a1a1a }))
  scene.add(tyre)
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6, r = 1.2
    scene.add(new THREE.ArrowHelper(new THREE.Vector3(Math.cos(a), Math.sin(a), 0), new THREE.Vector3(r * Math.cos(a), r * Math.sin(a), 0), 0.7, 0x06b6d4, 0.2, 0.1))
  }
  const l = makeSprite('P = F/A  Tyre pressure ~35 PSI = 241 kPa', '#fbbf24', [7, 0.75]); l.position.set(0, 3, 0); scene.add(l)
  return () => {}
}

export function buildArchimedes(THREE: any, scene: any, makeSprite: Function) {
  const water = new THREE.Mesh(new THREE.BoxGeometry(5, 3, 2), new THREE.MeshPhongMaterial({ color: 0x0ea5e9, opacity: 0.5, transparent: true }))
  water.position.set(0, -1, 0); scene.add(water)
  const ship = new THREE.Mesh(new THREE.BoxGeometry(2, 0.8, 1), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
  ship.position.set(0, 0.15, 0); scene.add(ship)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), new THREE.Vector3(-0.3, 0.8, 0), 1.2, 0xef4444, 0.3, 0.15))
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0.3, -0.3, 0), 1.5, 0x22c55e, 0.3, 0.15))
  const l = makeSprite('Buoyancy = weight of water displaced', '#fbbf24', [6.5, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.01; ship.position.y = 0.15 + Math.sin(t) * 0.1 }
}

export function buildBernoulliFeel(THREE: any, scene: any, makeSprite: Function) {
  const wing = new THREE.Shape()
  wing.moveTo(-2, 0); wing.quadraticCurveTo(0, 1.2, 2, 0); wing.quadraticCurveTo(0, -0.2, -2, 0)
  const wingMesh = new THREE.Mesh(new THREE.ShapeGeometry(wing), new THREE.MeshPhongMaterial({ color: 0x1e3a5f, side: THREE.DoubleSide }))
  scene.add(wingMesh)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1.5, 0), 1.5, 0x22c55e, 0.3, 0.15))
  const l = makeSprite('Faster air on top → lower P → lift ↑', '#fbbf24', [6, 0.75]); l.position.set(0, 3.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.02; wingMesh.position.y = Math.sin(t * 0.5) * 0.2 }
}

export function buildSurfaceTension(THREE: any, scene: any, makeSprite: Function) {
  for (let i = 0; i < 3; i++) {
    const drop = new THREE.Mesh(new THREE.SphereGeometry(0.35 + i * 0.15, 16, 16), new THREE.MeshPhongMaterial({ color: 0x0ea5e9, opacity: 0.75, transparent: true }))
    drop.position.set(-2.5 + i * 2.5, 0, 0); scene.add(drop)
    const sp = makeSprite(`r=${i + 2}mm`, '#94a3b8', [1.8, 0.55]); sp.position.set(-2.5 + i * 2.5, -1.2, 0); scene.add(sp)
  }
  const l = makeSprite('Surface tension keeps droplets spherical', '#fbbf24', [6.5, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  return () => {}
}

export function buildViscosity(THREE: any, scene: any, makeSprite: Function) {
  const pipe = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 6, 20, 1, true), new THREE.MeshPhongMaterial({ color: 0x1e3a5f, side: THREE.DoubleSide, opacity: 0.4, transparent: true }))
  pipe.rotation.z = Math.PI / 2; scene.add(pipe)
  const particles: any[] = []
  for (let i = 0; i < 10; i++) {
    const r = Math.random() * 0.8, a = Math.random() * Math.PI * 2
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshPhongMaterial({ color: 0x0ea5e9, opacity: 0.8, transparent: true }))
    p.position.set(-3, r * Math.cos(a), r * Math.sin(a))
    p.userData = { r, speed: 1 - r * 0.8 }; scene.add(p); particles.push(p)
  }
  const l = makeSprite('Viscosity: faster at centre, slower at walls', '#fbbf24', [7, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.02; particles.forEach(p => { p.position.x += p.userData.speed * 0.04; if (p.position.x > 3) p.position.x = -3 }) }
}

export function buildTemperatureHeat(THREE: any, scene: any, makeSprite: Function) {
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.5, 1.5, 12), new THREE.MeshPhongMaterial({ color: 0x78350f }))
  scene.add(cup)
  const liquid = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.45, 1.2, 12), new THREE.MeshPhongMaterial({ color: 0x7c2d12 }))
  liquid.position.y = -0.1; scene.add(liquid)
  const l = makeSprite('T (temp) ≠ Q (heat)  Q = mcΔT', '#fbbf24', [5, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.015; const c = 0x7c2d12 + Math.floor(t * 0.1 % 0x303030); liquid.material.color.setHex(0x7c2d12) }
}

export function buildThermalExpansion(THREE: any, scene: any, makeSprite: Function) {
  const rail1 = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.2, 0.4), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
  rail1.position.set(-2, 0, 0); scene.add(rail1)
  const rail2 = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.2, 0.4), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
  rail2.position.set(2.1, 0, 0); scene.add(rail2)
  const gap = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.2, 0.4), new THREE.MeshPhongMaterial({ color: 0x1e293b }))
  gap.position.set(0.05, 0, 0); scene.add(gap)
  const l = makeSprite('ΔL = αLΔT  Steel rail summer gap', '#fbbf24', [6, 0.75]); l.position.set(0, 1.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.01; const heat = (Math.sin(t) + 1) / 2; rail1.scale.x = 1 + heat * 0.1; rail2.position.x = 2.1 + heat * 0.2 }
}

export function buildCalorimetry(THREE: any, scene: any, makeSprite: Function) {
  const cup1 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.4, 1.2, 10), new THREE.MeshPhongMaterial({ color: 0x7f1d1d }))
  cup1.position.set(-2, 0, 0); scene.add(cup1)
  const cup2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.4, 1.2, 10), new THREE.MeshPhongMaterial({ color: 0x1e3a5f }))
  cup2.position.set(2, 0, 0); scene.add(cup2)
  const l = makeSprite('m₁c₁T₁ + m₂c₂T₂ = (m₁+m₂)cTf', '#fbbf24', [7, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0; let merged = false
  return () => { t += 0.015; if (!merged && t > 2) { cup1.position.x += 0.05; cup2.position.x -= 0.05 } }
}

export function buildHeatTransfer(THREE: any, scene: any, makeSprite: Function) {
  const spoon = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.2, 3, 8), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
  spoon.rotation.z = 0.3; scene.add(spoon)
  const bowl = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), new THREE.MeshPhongMaterial({ color: 0x7c3aed, opacity: 0.8, transparent: true }))
  bowl.scale.y = 0.6; bowl.position.y = -0.5; scene.add(bowl)
  const l = makeSprite('Conduction: heat travels up metal spoon', '#fbbf24', [7, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.02; const c = Math.floor(t * 2 % 255); spoon.material.color.setRGB(0.58, 0.58 + c / 1000, 0.58) }
}

export function buildNewtonsCooling(THREE: any, scene: any, makeSprite: Function) {
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.4, 1.2, 10), new THREE.MeshPhongMaterial({ color: 0x78350f }))
  scene.add(cup)
  for (let i = 0; i < 6; i++) {
    const steam = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.03, 6, 12), new THREE.MeshPhongMaterial({ color: 0xe2e8f0, opacity: 0.5, transparent: true }))
    steam.position.set(Math.sin(i) * 0.2, 1.2 + i * 0.25, 0); scene.add(steam)
  }
  const l = makeSprite('dT/dt = -k(T-T_amb)  Chai cooling', '#fbbf24', [6, 0.75]); l.position.set(0, 3, 0); scene.add(l)
  let t = 0
  return () => { t += 0.02 }
}

export function buildThermodynamicProcesses(THREE: any, scene: any, makeSprite: Function) {
  const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 2, 12, 1, true), new THREE.MeshPhongMaterial({ color: 0x475569, side: THREE.DoubleSide }))
  scene.add(cyl)
  const piston = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.78, 0.15, 12), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
  scene.add(piston)
  const l = makeSprite('Thermodynamic processes: P-V diagram', '#fbbf24', [6.5, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.02; piston.position.y = Math.sin(t) * 0.8 }
}

export function buildFirstLaw(THREE: any, scene: any, makeSprite: Function) {
  const pump = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 2, 10), new THREE.MeshPhongMaterial({ color: 0x374151 }))
  pump.rotation.z = Math.PI / 4; scene.add(pump)
  const l = makeSprite('ΔU = Q - W  (First Law of Thermodynamics)', '#fbbf24', [7, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  const l2 = makeSprite('Bicycle pump: work done heats air inside', '#94a3b8', [7, 0.7]); l2.position.set(0, 1.7, 0); scene.add(l2)
  let t = 0
  return () => { t += 0.02; pump.rotation.z = Math.PI / 4 + Math.sin(t) * 0.2 }
}

export function buildSecondLaw(THREE: any, scene: any, makeSprite: Function) {
  const hot = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 16), new THREE.MeshPhongMaterial({ color: 0xef4444, emissive: 0xef4444, emissiveIntensity: 0.4 }))
  hot.position.set(-2, 0, 0); scene.add(hot)
  const cold = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 16), new THREE.MeshPhongMaterial({ color: 0x60a5fa }))
  cold.position.set(2, 0, 0); scene.add(cold)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1.2, 0.1, 0), 2, 0xfbbf24, 0.3, 0.15))
  const l = makeSprite('Heat: hot → cold (ΔS ≥ 0)', '#fbbf24', [5, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  return () => {}
}

export function buildHeatEngine(THREE: any, scene: any, makeSprite: Function) {
  const hot = new THREE.Mesh(new THREE.BoxGeometry(2, 1.2, 1), new THREE.MeshPhongMaterial({ color: 0x7f1d1d }))
  hot.position.set(0, 2, 0); scene.add(hot)
  const engine = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1, 0.8), new THREE.MeshPhongMaterial({ color: 0x374151 }))
  engine.position.set(0, 0, 0); scene.add(engine)
  const cold = new THREE.Mesh(new THREE.BoxGeometry(2, 1.2, 1), new THREE.MeshPhongMaterial({ color: 0x1e3a5f }))
  cold.position.set(0, -2, 0); scene.add(cold)
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), new THREE.Vector3(-0.3, 1.4, 0), 1.3, 0xef4444, 0.3, 0.15))
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), new THREE.Vector3(0.3, -0.5, 0), 1, 0x3b82f6, 0.3, 0.15))
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0.75, 0.1, 0), 1.5, 0x22c55e, 0.3, 0.15))
  const l = makeSprite('η = W/Q_H = 1 - T_C/T_H', '#fbbf24', [5, 0.75]); l.position.set(0, 3.5, 0); scene.add(l)
  return () => {}
}

export function buildCarnotTheorem(THREE: any, scene: any, makeSprite: Function) {
  const gauge = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.2, 8, 30, Math.PI), new THREE.MeshPhongMaterial({ color: 0x1e3a5f }))
  gauge.rotation.x = Math.PI; scene.add(gauge)
  const needle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.2, 0.06), new THREE.MeshPhongMaterial({ color: 0xef4444 }))
  scene.add(needle)
  const l = makeSprite('Carnot: maximum possible efficiency', '#fbbf24', [5.5, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.015; needle.rotation.z = -Math.PI * 0.4 + Math.sin(t * 0.3) * Math.PI * 0.3 }
}

export function buildKineticTheoryFeel(THREE: any, scene: any, makeSprite: Function) {
  const box = new THREE.Mesh(new THREE.BoxGeometry(5, 4, 4), new THREE.MeshPhongMaterial({ color: 0x1e293b, side: THREE.BackSide }))
  scene.add(box)
  const particles: any[] = []
  for (let i = 0; i < 20; i++) {
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), new THREE.MeshPhongMaterial({ color: 0x06b6d4, emissive: 0x06b6d4, emissiveIntensity: 0.4 }))
    p.position.set((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3)
    p.userData = { vx: (Math.random() - 0.5) * 0.08, vy: (Math.random() - 0.5) * 0.08, vz: (Math.random() - 0.5) * 0.08 }
    scene.add(p); particles.push(p)
  }
  const l = makeSprite('Gas molecules collide → create pressure', '#fbbf24', [6.5, 0.75]); l.position.set(0, 3, 0); scene.add(l)
  return () => {
    particles.forEach(p => {
      p.position.x += p.userData.vx; p.position.y += p.userData.vy; p.position.z += p.userData.vz
      if (Math.abs(p.position.x) > 2) p.userData.vx *= -1
      if (Math.abs(p.position.y) > 1.5) p.userData.vy *= -1
      if (Math.abs(p.position.z) > 1.5) p.userData.vz *= -1
    })
  }
}

export function buildSpeedOfMolecules(THREE: any, scene: any, makeSprite: Function) {
  const speeds = [1, 2.5, 4, 6, 8, 7, 5, 3, 1.5, 0.5]
  speeds.forEach((h, i) => {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.5, h * 0.4, 0.4), new THREE.MeshPhongMaterial({ color: 0x06b6d4, emissive: 0x06b6d4, emissiveIntensity: 0.2 }))
    bar.position.set(-2.5 + i * 0.6, h * 0.2 - 1.5, 0); scene.add(bar)
  })
  const l = makeSprite('Maxwell-Boltzmann speed distribution', '#fbbf24', [6.5, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  return () => {}
}

export function buildEquipartition(THREE: any, scene: any, makeSprite: Function) {
  const dirs = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)]
  const cols = [0xef4444, 0x22c55e, 0x3b82f6]
  dirs.forEach((d, i) => {
    scene.add(new THREE.ArrowHelper(d, new THREE.Vector3(0, 0, 0), 2.5, cols[i], 0.4, 0.2))
    scene.add(new THREE.ArrowHelper(d.clone().negate(), new THREE.Vector3(0, 0, 0), 2.5, cols[i], 0.4, 0.2))
  })
  const mol = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), new THREE.MeshPhongMaterial({ color: 0xfbbf24, emissive: 0xfbbf24, emissiveIntensity: 0.3 }))
  scene.add(mol)
  const l = makeSprite('½kT per DOF  3 translational = 3/2kT', '#fbbf24', [7, 0.75]); l.position.set(0, 3.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.02; mol.position.set(Math.sin(t) * 0.3, Math.cos(t * 1.3) * 0.3, Math.sin(t * 0.7) * 0.3) }
}

export function buildMeanFreePath(THREE: any, scene: any, makeSprite: Function) {
  const points: THREE.Vector3[] = [new THREE.Vector3(-3, 0, 0)]
  for (let i = 0; i < 8; i++) {
    const a = Math.random() * Math.PI * 2, r = 0.5 + Math.random() * 0.8
    const last = points[points.length - 1]
    points.push(new THREE.Vector3(last.x + r * Math.cos(a), last.y + r * Math.sin(a), 0))
  }
  const path = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: 0x06b6d4 }))
  scene.add(path)
  points.slice(1).forEach(p => {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), new THREE.MeshPhongMaterial({ color: 0xef4444 }))
    dot.position.copy(p); scene.add(dot)
  })
  const l = makeSprite('λ = mean free path between collisions', '#fbbf24', [6, 0.75]); l.position.set(0, 3.5, 0); scene.add(l)
  return () => {}
}

export function buildSHM(THREE: any, scene: any, makeSprite: Function) {
  for (let i = 0; i < 8; i++) {
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.07, 6, 12), new THREE.MeshPhongMaterial({ color: 0x64748b }))
    coil.position.set(0, 2.5 - i * 0.5, 0); scene.add(coil)
  }
  const mass = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), new THREE.MeshPhongMaterial({ color: 0x3b82f6 }))
  scene.add(mass)
  const l = makeSprite('x = A·cos(ωt)  SHM restoring force', '#fbbf24', [6, 0.75]); l.position.set(0, 3.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.025; mass.position.y = -1.5 + Math.sin(t * 2) * 1.5 }
}

export function buildSimplePendulum(THREE: any, scene: any, makeSprite: Function) {
  const pivot = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshPhongMaterial({ color: 0xffffff }))
  pivot.position.set(0, 3, 0); scene.add(pivot)
  const bob = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), new THREE.MeshPhongMaterial({ color: 0xf97316, emissive: 0xf97316, emissiveIntensity: 0.3 }))
  scene.add(bob)
  const rod = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 3, 0), new THREE.Vector3(0, 0, 0)]), new THREE.LineBasicMaterial({ color: 0x94a3b8 }))
  scene.add(rod)
  const l = makeSprite('T = 2π√(L/g) — independent of mass', '#fbbf24', [6, 0.75]); l.position.set(0, -3, 0); scene.add(l)
  let t = 0
  return () => {
    t += 0.025; const theta = 0.5 * Math.sin(t)
    bob.position.set(Math.sin(theta) * 2.8, 3 - Math.cos(theta) * 2.8, 0)
    rod.geometry.setFromPoints([new THREE.Vector3(0, 3, 0), bob.position.clone()])
  }
}

export function buildEnergySHM(THREE: any, scene: any, makeSprite: Function) {
  const wall = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3, 1), new THREE.MeshPhongMaterial({ color: 0x475569 }))
  wall.position.set(-4, 0, 0); scene.add(wall)
  const spring = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0x94a3b8 }))
  scene.add(spring)
  const block = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), new THREE.MeshPhongMaterial({ color: 0x3b82f6 }))
  scene.add(block)
  const l = makeSprite('E = ½kx² + ½mv² = constant', '#fbbf24', [5.5, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => {
    t += 0.025; const x = Math.sin(t * 2) * 2
    block.position.x = x
    const pts: THREE.Vector3[] = []; for (let i = 0; i <= 20; i++) pts.push(new THREE.Vector3(-4 + i * (x + 4) / 20, Math.sin(i * Math.PI) * 0.2, 0))
    spring.geometry.setFromPoints(pts)
  }
}

export function buildDampedOscillations(THREE: any, scene: any, makeSprite: Function) {
  const car = new THREE.Mesh(new THREE.BoxGeometry(3, 0.8, 1.5), new THREE.MeshPhongMaterial({ color: 0x374151 }))
  scene.add(car)
  const shock = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.5, 8), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
  shock.position.set(0.8, -1, 0); scene.add(shock)
  const l = makeSprite('Shock absorber: damped oscillation', '#fbbf24', [6, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.02; car.position.y = Math.sin(t * 3) * Math.exp(-t * 0.3) * 0.8; if (t > 8) t = 0 }
}

export function buildResonance(THREE: any, scene: any, makeSprite: Function) {
  const speaker = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.3, 16), new THREE.MeshPhongMaterial({ color: 0x1e293b }))
  speaker.rotation.z = Math.PI / 2; speaker.position.set(-2.5, 0, 0); scene.add(speaker)
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.3, 1.5, 12, 1, true), new THREE.MeshPhongMaterial({ color: 0xbae6fd, opacity: 0.5, transparent: true, side: THREE.DoubleSide }))
  glass.position.set(1.5, 0, 0); scene.add(glass)
  const l = makeSprite('Resonance: drive freq = natural freq', '#fbbf24', [6.5, 0.75]); l.position.set(0, 2.5, 0); scene.add(l)
  let t = 0
  return () => { t += 0.02; glass.rotation.y += 0.02; glass.scale.x = 1 + Math.sin(t * 6) * 0.05 }
}

export function buildWaveMotion(THREE: any, scene: any, makeSprite: Function) {
  const particles: any[] = []
  const n = 16
  for (let i = 0; i < n; i++) {
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), new THREE.MeshPhongMaterial({ color: 0x0ea5e9, emissive: 0x0ea5e9, emissiveIntensity: 0.2 }))
    p.position.x = -4 + i * 8 / (n - 1); p.userData = { phase: (i / n) * Math.PI * 4 }
    scene.add(p); particles.push(p)
  }
  const l = makeSprite('Wave: energy travels, particles oscillate', '#fbbf24', [7, 0.75]); l.position.set(0, 3, 0); scene.add(l)
  let t = 0
  return () => { t += 0.025; particles.forEach(p => { p.position.y = Math.sin(t * 2 - p.userData.phase) * 1.5 }) }
}

export function buildSpeedOfWaves(THREE: any, scene: any, makeSprite: Function) {
  const wall = new THREE.Mesh(new THREE.BoxGeometry(0.3, 4, 1.5), new THREE.MeshPhongMaterial({ color: 0x475569 }))
  wall.position.set(4, 0, 0); scene.add(wall)
  const person = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.8, 8), new THREE.MeshPhongMaterial({ color: 0xfbbf24 }))
  person.position.set(-4, 0, 0); scene.add(person)
  const l = makeSprite('v = 340 m/s  Echo: d = v × t / 2', '#fbbf24', [6.5, 0.75]); l.position.set(0, 3, 0); scene.add(l)
  const waves: any[] = []
  for (let i = 0; i < 3; i++) {
    const w = new THREE.Mesh(new THREE.TorusGeometry(0.5 + i * 0.5, 0.04, 6, 20), new THREE.MeshPhongMaterial({ color: 0x06b6d4, opacity: 0.6, transparent: true }))
    w.rotation.x = Math.PI / 2; w.position.set(-4, 0, 0); w.userData = { delay: i * 0.5 }; scene.add(w); waves.push(w)
  }
  let t = 0
  return () => { t += 0.02; waves.forEach(w => { const p = (t - w.userData.delay) % 3; if (p > 0) w.position.x = -4 + p * 2.5 }) }
}

export function buildStandingWaves(THREE: any, scene: any, makeSprite: Function) {
  const string = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0x06b6d4, linewidth: 2 }))
  scene.add(string)
  const l = makeSprite('Guitar string: standing wave nodes & antinodes', '#fbbf24', [7.5, 0.75]); l.position.set(0, 3, 0); scene.add(l)
  const pin1 = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
  pin1.position.set(-3.5, 0, 0); scene.add(pin1)
  const pin2 = pin1.clone(); pin2.position.set(3.5, 0, 0); scene.add(pin2)
  let t = 0, n = 2
  return () => {
    t += 0.025; const pts: THREE.Vector3[] = []
    for (let i = 0; i <= 50; i++) { const x = -3.5 + i * 7 / 50; pts.push(new THREE.Vector3(x, 1.2 * Math.sin(n * Math.PI * (i / 50)) * Math.cos(t * 3), 0)) }
    string.geometry.setFromPoints(pts)
  }
}

export function buildBeats(THREE: any, scene: any, makeSprite: Function) {
  const fork1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2, 8), new THREE.MeshPhongMaterial({ color: 0x94a3b8 }))
  fork1.position.set(-1.5, 0, 0); scene.add(fork1)
  const fork2 = fork1.clone(); fork2.position.set(1.5, 0, 0); scene.add(fork2)
  const l = makeSprite('Beats: |f₁ - f₂| = beat frequency', '#fbbf24', [5.5, 0.75]); l.position.set(0, 3, 0); scene.add(l)
  let t = 0
  return () => {
    t += 0.025
    fork1.position.x = -1.5 + Math.sin(t * 8) * 0.15
    fork2.position.x = 1.5 + Math.sin(t * 8.5) * 0.15
  }
}

export function buildDoppler(THREE: any, scene: any, makeSprite: Function) {
  const siren = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), new THREE.MeshPhongMaterial({ color: 0xef4444, emissive: 0xef4444, emissiveIntensity: 0.5 }))
  scene.add(siren)
  const rings: any[] = []
  for (let i = 0; i < 4; i++) {
    const r = new THREE.Mesh(new THREE.TorusGeometry(0.8 + i * 0.5, 0.04, 6, 20), new THREE.MeshPhongMaterial({ color: 0x06b6d4, opacity: 0.4, transparent: true }))
    r.rotation.x = Math.PI / 2; r.userData = { delay: i * 0.4 }; scene.add(r); rings.push(r)
  }
  const l = makeSprite('Doppler: compressed wavefronts → higher pitch', '#fbbf24', [7.5, 0.75]); l.position.set(0, 3.5, 0); scene.add(l)
  let t = 0
  return () => {
    t += 0.02; const srcX = -4 + (t % 6) * 1.5
    siren.position.x = srcX
    rings.forEach((r, i) => {
      const phase = (t - r.userData.delay) % 3
      if (phase > 0) {
        r.position.x = srcX - phase * 0.3
        r.scale.setScalar(1 + phase * 0.5)
        r.material.opacity = Math.max(0, 0.4 - phase * 0.13)
      }
    })
  }
}
