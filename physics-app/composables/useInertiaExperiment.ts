/**
 * useInertiaExperiment
 *
 * All simulation state and logic for the "Inertia & Newton's First Law"
 * interactive experiment: Three.js scene, Rapier physics world, the
 * animation tick, player controls, and the derived display/insight values.
 *
 * The InertiaExperiment.vue component stays purely presentational — it just
 * binds `canvasRef` to the viewport element and wires the returned state /
 * functions into ControlsPanel, ReadingsPanel, InsightPanel and PlayBar.
 *
 * Usage (inside InertiaExperiment.vue's <script setup>):
 *   const exp = useInertiaExperiment()
 *   // template: <div ref="exp.canvasRef" />, v-model="exp.initialVelocity", …
 */

import * as THREE from 'three'

// ── Constants ───────────────────────────────────────────────────────────────
const BLOCK_MASS  = 2          // kg  (displayed, set via setAdditionalMass)
const FRICTION_MU = 0.5        // kinetic friction coefficient
const BLOCK_X0    = -6         // starting x in Rapier world units
const TRACK_HALF  = 10         // track extends -10 … +10
const IMPULSE_N_S = 10         // N·s  →  Δv = 10/2 = 5 m/s

export function useInertiaExperiment() {
  // ── Composables ─────────────────────────────────────────────────────────
  const { scene, mount: mountScene, render, dispose: disposeScene } = useThreeScene()
  const { init: initWorld, dispose: disposeWorld } = useRapierWorld()
  const { running, play: startLoop, pause: stopLoop } = useAnimationLoop(tick)

  // ── DOM ref ─────────────────────────────────────────────────────────────
  const canvasRef = ref<HTMLDivElement | null>(null)

  // ── Reactive state ──────────────────────────────────────────────────────
  const initialVelocity = ref(5)     // slider value (m/s)
  const frictionOn      = ref(false) // surface friction toggle
  const velocity        = ref(0)     // live m/s
  const acceleration    = ref(0)     // live m/s²
  const simTime         = ref(0)     // elapsed s
  const sceneMounted    = ref(false) // true once Three.js + Rapier are ready
  const hasStarted      = ref(false) // true once Play has been pressed ≥ once
  const statusMsg       = ref('')    // canvas overlay text

  const isPlaying = computed(() => running.value)

  // ── Non-reactive physics handles (plain variables — no Vue tracking needed) ─
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let world: any = null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let RAPIER: any = null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let blockBody: any = null
  let prevV = 0 // previous frame velocity for Δv/Δt acceleration calc

  // ── Non-reactive Three.js handle ────────────────────────────────────────
  let blockMesh: THREE.Mesh | null = null

  // ── Animation tick ──────────────────────────────────────────────────────
  function tick(dt: number) {
    if (!world || !blockBody || !blockMesh) return

    world.timestep = Math.min(dt, 1 / 30)
    world.step()

    const pos = blockBody.translation()
    const vel = blockBody.linvel()

    // Sync mesh → physics body
    blockMesh.position.x = pos.x
    blockMesh.position.y = pos.y

    // Live readings
    const curV = vel.x
    velocity.value = curV
    acceleration.value = dt > 0 ? (curV - prevV) / dt : 0
    simTime.value += dt
    prevV = curV

    // ── Termination checks ──
    // Block reached right wall
    if (pos.x > TRACK_HALF - 0.4) {
      stopLoop()
      statusMsg.value = frictionOn.value
        ? '🏁 Block reached the end of the track.'
        : '💡 No friction → block keeps moving forever. Newton\'s First Law!'
    }
    // Block effectively stopped (only meaningful when friction is on)
    if (frictionOn.value && Math.abs(curV) < 0.03 && simTime.value > 0.4) {
      stopLoop()
      statusMsg.value = '⏹ Friction (external force) brought the block to rest.'
    }

    render()
  }

  // ── Three.js scene construction ─────────────────────────────────────────
  function buildScene() {
    scene.background = new THREE.Color(0x0d1b2a)

    // Lighting
    scene.add(new THREE.AmbientLight(0x6688aa, 0.75))
    const sun = new THREE.DirectionalLight(0xffffff, 1.1)
    sun.position.set(4, 10, 6)
    sun.castShadow = true
    sun.shadow.mapSize.set(1024, 1024)
    scene.add(sun)

    // Track surface — dark slate, full track length
    const trackGeo = new THREE.BoxGeometry(TRACK_HALF * 2, 0.2, 2.4)
    const trackMat = new THREE.MeshLambertMaterial({ color: 0x1e3a5f })
    const trackMesh = new THREE.Mesh(trackGeo, trackMat)
    trackMesh.receiveShadow = true
    scene.add(trackMesh)

    // Centre guide line — brand blue, faint
    const lineGeo = new THREE.BoxGeometry(TRACK_HALF * 2, 0.01, 0.05)
    const lineMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.45 })
    const lineMesh = new THREE.Mesh(lineGeo, lineMat)
    lineMesh.position.y = 0.11
    scene.add(lineMesh)

    // Distance tick marks every 2 units
    const tickMat = new THREE.MeshBasicMaterial({ color: 0x4a6a8a, transparent: true, opacity: 0.35 })
    for (let x = -TRACK_HALF + 2; x < TRACK_HALF; x += 2) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.01, 1.4), tickMat)
      m.position.set(x, 0.11, 0)
      scene.add(m)
    }

    // Green start marker at block origin
    const startMat = new THREE.MeshBasicMaterial({ color: 0x22c55e, transparent: true, opacity: 0.55 })
    const startMesh = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.01, 2.4), startMat)
    startMesh.position.set(BLOCK_X0, 0.11, 0)
    scene.add(startMesh)

    // Red end wall (visual cue for track boundary)
    const wallMat = new THREE.MeshLambertMaterial({ color: 0xef4444, transparent: true, opacity: 0.65 })
    const wallMesh = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.4, 2.4), wallMat)
    wallMesh.position.set(TRACK_HALF - 0.06, 0.7, 0)
    scene.add(wallMesh)

    // Block — brand blue, casts shadows
    const blockGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8)
    const blockMat = new THREE.MeshLambertMaterial({ color: 0x3b82f6 })
    blockMesh = new THREE.Mesh(blockGeo, blockMat)
    blockMesh.castShadow = true
    blockMesh.position.set(BLOCK_X0, 0.5, 0)
    scene.add(blockMesh)
  }

  // ── Rapier world construction ───────────────────────────────────────────
  async function buildPhysics() {
    // initWorld() frees any existing world and creates a fresh one
    const handles = await initWorld()
    world = handles.world
    RAPIER = handles.RAPIER

    const mu = frictionOn.value ? FRICTION_MU : 0

    // Ground — fixed rigid body spanning the full track
    const groundRb = world.createRigidBody(RAPIER.RigidBodyDesc.fixed())
    world.createCollider(
      RAPIER.ColliderDesc.cuboid(TRACK_HALF, 0.1, 1.2).setFriction(mu),
      groundRb
    )

    // Right wall — prevents block from exiting the scene completely
    const wallRb = world.createRigidBody(
      RAPIER.RigidBodyDesc.fixed().setTranslation(TRACK_HALF, 0.7, 0)
    )
    world.createCollider(
      RAPIER.ColliderDesc.cuboid(0.05, 1.4, 1.2).setFriction(0).setRestitution(0.05),
      wallRb
    )

    // Block — dynamic body, mass locked to BLOCK_MASS kg, no rotation (1-D experiment)
    const blockDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(BLOCK_X0, 0.5, 0)
      .setLinearDamping(0)
      .setAngularDamping(100) // prevent tipping without locking rotation axis
      .setAdditionalMass(BLOCK_MASS)
    blockBody = world.createRigidBody(blockDesc)
    world.createCollider(
      RAPIER.ColliderDesc.cuboid(0.4, 0.4, 0.4).setFriction(mu),
      blockBody
    )

    // Reset readings and block mesh position
    velocity.value = 0
    acceleration.value = 0
    simTime.value = 0
    prevV = 0
    if (blockMesh) blockMesh.position.set(BLOCK_X0, 0.5, 0)
  }

  // ── Player controls ─────────────────────────────────────────────────────
  function doPlay() {
    if (!blockBody || isPlaying.value) return
    statusMsg.value = ''

    if (!hasStarted.value) {
      // First press: give block its initial velocity
      blockBody.setLinvel({ x: initialVelocity.value, y: 0, z: 0 }, true)
      hasStarted.value = true
    }
    prevV = velocity.value
    startLoop()
  }

  function doPause() {
    stopLoop()
  }

  async function doReset() {
    stopLoop()
    hasStarted.value = false
    statusMsg.value = ''
    await buildPhysics() // frees old world, creates fresh one
    render()             // show block back at start
  }

  async function doRestart() {
    await doReset()
    doPlay()
  }

  async function handleFrictionToggle() {
    const wasPlaying = isPlaying.value
    stopLoop()
    frictionOn.value = !frictionOn.value
    hasStarted.value = false
    statusMsg.value = ''
    await buildPhysics()
    render()
    if (wasPlaying) doPlay()
  }

  function applyImpulse() {
    if (!blockBody) return
    statusMsg.value = ''
    // Apply impulse: F·Δt = m·Δv  →  Δv = IMPULSE_N_S / BLOCK_MASS = 5 m/s
    blockBody.applyImpulse({ x: IMPULSE_N_S, y: 0, z: 0 }, true)
    hasStarted.value = true
    if (!isPlaying.value) startLoop() // auto-play so student sees movement
  }

  // ── Lifecycle ────────────────────────────────────────────────────────────
  onMounted(async () => {
    if (!canvasRef.value) return

    // 1. Mount Three.js canvas (camera at slight elevation, centred on track)
    mountScene(canvasRef.value, {
      fov: 45,
      camPos: [1, 4.5, 15],
      camTarget: [1, 0.5, 0],
    })

    // 2. Build scene objects (meshes, lights)
    buildScene()

    // 3. Init Rapier + create bodies
    await buildPhysics()

    // 4. First render (shows block at rest before Play)
    render()
    sceneMounted.value = true
  })

  onUnmounted(() => {
    stopLoop()
    disposeScene()
    disposeWorld()
  })

  // ── Computed display values ──────────────────────────────────────────────
  const fmtVel = computed(() => velocity.value.toFixed(2))
  const fmtAcc = computed(() => acceleration.value.toFixed(2))
  const fmtForce = computed(() => (BLOCK_MASS * Math.abs(acceleration.value)).toFixed(2))
  const fmtTime = computed(() => simTime.value.toFixed(1))

  const velColor = computed(() => {
    const v = Math.abs(velocity.value)
    if (v < 0.05) return '#9ca3af' // stopped  — grey
    if (v < 2)    return '#f59e0b' // slow     — amber
    return '#3b82f6'               // moving   — brand blue
  })

  // ── Educational insight panel ─────────────────────────────────────────────
  const insightText = computed(() => {
    if (!hasStarted.value)
      return 'Set the initial velocity and press ▶ Play to start the experiment.'
    if (isPlaying.value && !frictionOn.value)
      return "Zero friction → zero net force → velocity stays constant. This IS Newton’s First Law."
    if (isPlaying.value && frictionOn.value)
      return 'Friction is an external force opposing motion. F = ma shows it decelerates the block.'
    if (!isPlaying.value && frictionOn.value && Math.abs(velocity.value) < 0.05)
      return 'The block stopped because friction (an external force) acted on it. No force = no stop.'
    if (!isPlaying.value && !frictionOn.value && simTime.value > 0)
      return 'The block reached the wall still moving — on a frictionless surface it never stops.'
    return 'Press ▶ Play to resume.'
  })

  const insightClass = computed(() => {
    if (!hasStarted.value) return 'insight--neutral'
    if (isPlaying.value && !frictionOn.value) return 'insight--blue'
    if (isPlaying.value && frictionOn.value) return 'insight--amber'
    return 'insight--green'
  })

  const insightIcon = computed(() => {
    if (!hasStarted.value) return '⚡'
    if (isPlaying.value && !frictionOn.value) return '🔵'
    if (isPlaying.value && frictionOn.value) return '🔴'
    return '✅'
  })

  return {
    // constants the UI needs to display
    FRICTION_MU,
    // DOM ref
    canvasRef,
    // state
    initialVelocity,
    frictionOn,
    sceneMounted,
    statusMsg,
    isPlaying,
    // formatted readings
    fmtVel,
    fmtAcc,
    fmtForce,
    fmtTime,
    velColor,
    // insight panel
    insightText,
    insightClass,
    insightIcon,
    // controls
    doPlay,
    doPause,
    doReset,
    doRestart,
    handleFrictionToggle,
    applyImpulse,
  }
}
