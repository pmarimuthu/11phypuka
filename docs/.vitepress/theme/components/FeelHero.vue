<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { FEEL_BUILDERS } from '../data/feel-builders'

const props = defineProps<{ type: string }>()
const canvas = ref<HTMLCanvasElement | null>(null)
let _animId = 0, _renderer: any = null, _controls: any = null

async function boot() {
  const c = canvas.value
  if (!c) return
  const [{ default: THREE }, { OrbitControls }] = await Promise.all([
    import('three'),
    import('three/examples/jsm/controls/OrbitControls.js'),
  ])
  function makeSprite(text: string, color = '#e2e8f0', scaleXY = [2.4, 0.8]) {
    const cv = document.createElement('canvas'); cv.width = 512; cv.height = 128
    const ctx = cv.getContext('2d')!; ctx.clearRect(0, 0, 512, 128)
    ctx.fillStyle = color; ctx.font = 'bold 48px system-ui, sans-serif'
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 256, 64)
    const tex = new THREE.CanvasTexture(cv)
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false })
    const sp = new THREE.Sprite(mat); sp.scale.set(scaleXY[0], scaleXY[1], 1)
    return sp
  }
  const W = c.clientWidth || 360, H = c.clientHeight || 240
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x0f172a)
  const camera = new THREE.PerspectiveCamera(52, W / H, 0.1, 100)
  camera.position.set(0, 3, 9)
  _renderer = new THREE.WebGLRenderer({ canvas: c, antialias: true })
  _renderer.setSize(W, H, false); _renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  _controls = new OrbitControls(camera, _renderer.domElement)
  _controls.enableDamping = true; _controls.dampingFactor = 0.08
  scene.add(new THREE.AmbientLight(0xffffff, 0.5))
  const pt = new THREE.PointLight(0x60a5fa, 2.5, 30); pt.position.set(2, 5, 5); scene.add(pt)
  const builder = FEEL_BUILDERS[props.type]
  const extraDraw = builder ? builder(THREE, scene, makeSprite) : () => {}
  camera.lookAt(0, 0, 0); _controls.target.set(0, 0, 0); _controls.update()
  function loop() { _animId = requestAnimationFrame(loop); _controls.update(); extraDraw(); _renderer.render(scene, camera) }
  loop()
}

onMounted(() => boot())
onUnmounted(() => { cancelAnimationFrame(_animId); _controls?.dispose(); _renderer?.dispose() })
</script>

<template>
  <div class="feel-hero">
    <canvas ref="canvas" class="feel-canvas" />
    <p class="feel-hint">Drag to orbit · Scroll to zoom</p>
  </div>
</template>

<style scoped>
.feel-hero { position: relative; width: 100%; }
.feel-canvas { width: 100%; height: 240px; display: block; border-radius: 8px; background: #0f172a; }
.feel-hint { text-align: center; font-size: 0.72rem; color: var(--vp-c-text-3, #64748b); margin: 4px 0 0; }
</style>
