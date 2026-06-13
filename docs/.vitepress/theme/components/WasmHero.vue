<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps<{ type: string; activeTab?: string }>()

// ── WASM paths ───────────────────────────────────────────────────────────────
function wasmPath(type: string): string | null {
  if (type === 'si-units')          return '/wasm/si_units.wasm'
  if (type === 'projectile-motion') return '/wasm/projectile_motion.wasm'
  return null
}

// ── Shared UI state ──────────────────────────────────────────────────────────
const canvas      = ref<HTMLCanvasElement | null>(null)
const threeCanvas = ref<HTMLCanvasElement | null>(null)
const status      = ref<'loading' | 'running' | 'missing' | 'error'>('loading')
const errMsg      = ref('')
let   raf         = 0
let   rafThree    = 0

// ════════════════════════════════════════════════════════════════════════════
// SI-UNITS
// ════════════════════════════════════════════════════════════════════════════
const SI_META = {
  'si-units': {
    labels: ['f', 'p', 'n', 'μ', 'm', '—', 'k', 'M'],
    colors: ['#6366f1','#8b5cf6','#3b82f6','#06b6d4','#10b981','#f59e0b','#ef4444','#ec4899'],
    desc:   ['femto 10⁻¹⁵','pico 10⁻¹²','nano 10⁻⁹','micro 10⁻⁶',
             'milli 10⁻³','base (1)','kilo 10³','mega 10⁶'],
  },
}
type SiAPI = { init:(w:number,h:number)=>void; step:(dt:number,w:number,h:number)=>void
               getX:(i:number)=>number; getY:(i:number)=>number
               getR:(i:number)=>number; count:()=>number }
let siAPI: SiAPI | null = null
let siLast = 0

function startSiLoop() {
  const cvs = canvas.value; if (!cvs || !siAPI) return
  const ctx  = cvs.getContext('2d')!
  const meta = SI_META['si-units']
  const rect = cvs.getBoundingClientRect()
  const W = rect.width  || cvs.clientWidth  || 360
  const H = rect.height || cvs.clientHeight || 200
  cvs.width  = W * devicePixelRatio; cvs.height = H * devicePixelRatio
  ctx.scale(devicePixelRatio, devicePixelRatio)
  siAPI.init(W, H)
  const n = siAPI.count()
  function draw(now: number) {
    const dt = Math.min((now - siLast) / 1000, 0.05); siLast = now
    siAPI!.step(dt, W, H); ctx.clearRect(0, 0, W, H)
    ctx.strokeStyle = 'rgba(128,128,128,0.07)'; ctx.lineWidth = 1
    const col = W / n
    for (let i = 0; i <= n; i++) { ctx.beginPath(); ctx.moveTo(i*col,0); ctx.lineTo(i*col,H); ctx.stroke() }
    ctx.font = `${Math.max(9,Math.min(11,W/50))}px monospace`
    ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'
    for (let i = 0; i < n; i++) { ctx.fillStyle = meta.colors[i]+'88'; ctx.fillText(meta.desc[i], col*i+col/2, H-2) }
    for (let i = 0; i < n; i++) {
      const x = siAPI!.getX(i), y = siAPI!.getY(i), r = siAPI!.getR(i)
      const color = meta.colors[i]
      const grd = ctx.createRadialGradient(x,y,0,x,y,r*2.5)
      grd.addColorStop(0, color+'44'); grd.addColorStop(1, color+'00')
      ctx.beginPath(); ctx.arc(x,y,r*2.5,0,Math.PI*2); ctx.fillStyle=grd; ctx.fill()
      ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fillStyle=color+'bb'; ctx.fill()
      ctx.strokeStyle=color; ctx.lineWidth=1.5; ctx.stroke()
      const fs = Math.max(9, r*0.9)
      ctx.font=`bold ${fs}px monospace`; ctx.fillStyle='#fff'
      ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(meta.labels[i],x,y)
    }
    ctx.font='10px sans-serif'; ctx.textAlign='left'; ctx.textBaseline='top'
    ctx.fillStyle='rgba(128,128,128,0.55)'
    ctx.fillText('particle size ∝ log(SI scale)  |  physics in WASM', 6, 5)
    raf = requestAnimationFrame(draw)
  }
  siLast = performance.now(); raf = requestAnimationFrame(draw)
}

// ════════════════════════════════════════════════════════════════════════════
// PROJECTILE-MOTION  (2D WASM canvas)
// ════════════════════════════════════════════════════════════════════════════
const pmAngle = ref(45)
const pmSpeed = ref(25)

type PmAPI = {
  pm_init:       (vx:number, vy_up:number, lx:number, ly:number, grav:number) => void
  pm_step:       (dt:number) => void
  pm_get_bx:     () => number; pm_get_by:     () => number
  pm_get_vx:     () => number; pm_get_vy:     () => number
  pm_get_apex_x: () => number; pm_get_apex_y: () => number
  pm_get_range:  () => number
  pm_trail_len:  () => number
  pm_trail_x:    (i:number) => number
  pm_trail_y:    (i:number) => number
  pm_has_apex:   () => number; pm_has_landed: () => number
  pm_launch_x:   () => number; pm_launch_y:   () => number
}
let pmAPI: PmAPI | null = null
let pmScale = 1, pmCurAngle = 45, pmCurSpeed = 25
let pmGhost: {x:number;y:number}[] = []
let pmPhase = 'idle'
let pmRelaunchT: ReturnType<typeof setTimeout> | null = null
let pmLandTime = 0

function pmLaunch() {
  if (!pmAPI) return
  clearTimeout(pmRelaunchT!)
  const cvs = canvas.value; if (!cvs) return
  const rect = cvs.getBoundingClientRect()
  const W = rect.width  || cvs.clientWidth  || 400
  const H = rect.height || cvs.clientHeight || 230
  const G = 9.8, ang = pmAngle.value, spd = pmSpeed.value
  const maxR = spd*spd/G
  const scale = (W*0.80)/maxR
  const lx = W*0.07, ly = H*0.80
  const rad = ang*Math.PI/180
  pmScale=scale; pmCurAngle=ang; pmCurSpeed=spd; pmPhase='flying'; pmLandTime=0
  pmAPI.pm_init(spd*Math.cos(rad)*scale, spd*Math.sin(rad)*scale, lx, ly, G*scale)
}

function startPmLoop() {
  const cvs = canvas.value; if (!cvs || !pmAPI) return
  const ctx  = cvs.getContext('2d')!
  const rect = cvs.getBoundingClientRect()
  const W = rect.width  || cvs.clientWidth  || 400
  const H = rect.height || cvs.clientHeight || 230
  cvs.width = W*devicePixelRatio; cvs.height = H*devicePixelRatio
  ctx.scale(devicePixelRatio, devicePixelRatio)
  pmLaunch()

  function arrowHead(fx:number,fy:number,tx:number,ty:number,sz=7) {
    const dx=tx-fx,dy=ty-fy,len=Math.sqrt(dx*dx+dy*dy); if(len<1)return
    const ux=dx/len,uy=dy/len
    ctx.beginPath(); ctx.moveTo(tx,ty)
    ctx.lineTo(tx-ux*sz-uy*sz*0.5, ty-uy*sz+ux*sz*0.5)
    ctx.lineTo(tx-ux*sz+uy*sz*0.5, ty-uy*sz-ux*sz*0.5)
    ctx.closePath(); ctx.fill()
  }

  let lastT = performance.now()
  function draw(now: number) {
    raf = requestAnimationFrame(draw)
    const dt = Math.min((now-lastT)/1000, 0.05); lastT=now
    const api=pmAPI!
    if (!api.pm_has_landed()) api.pm_step(dt)
    const lx=api.pm_launch_x(), ly=api.pm_launch_y()
    const bx=api.pm_get_bx(),   by=api.pm_get_by()
    const tlen=api.pm_trail_len(), hasApex=api.pm_has_apex(), landed=api.pm_has_landed()
    const scale=pmScale
    ctx.clearRect(0,0,W,H)
    ctx.fillStyle='rgba(8,145,178,0.03)'; ctx.fillRect(0,0,W,ly)
    ctx.fillStyle='rgba(128,128,128,0.10)'; ctx.fillRect(0,ly,W,H-ly)
    ctx.strokeStyle='rgba(128,128,128,0.55)'; ctx.lineWidth=1.5
    ctx.beginPath(); ctx.moveTo(0,ly); ctx.lineTo(W,ly); ctx.stroke()
    if (pmGhost.length>1) {
      ctx.beginPath(); ctx.moveTo(pmGhost[0].x,pmGhost[0].y)
      for (const p of pmGhost) ctx.lineTo(p.x,p.y)
      ctx.strokeStyle='rgba(8,145,178,0.18)'; ctx.setLineDash([5,5]); ctx.lineWidth=1.5; ctx.stroke(); ctx.setLineDash([])
    }
    if (tlen>1) {
      ctx.beginPath(); ctx.moveTo(api.pm_trail_x(0),api.pm_trail_y(0))
      for (let i=1;i<tlen;i++) ctx.lineTo(api.pm_trail_x(i),api.pm_trail_y(i))
      ctx.strokeStyle='rgba(8,145,178,0.55)'; ctx.lineWidth=2; ctx.stroke()
    }
    const dStart=Math.max(0,tlen-40)
    for (let i=dStart;i<tlen;i++) {
      const t=(i-dStart)/Math.max(tlen-dStart-1,1)
      ctx.beginPath(); ctx.arc(api.pm_trail_x(i),api.pm_trail_y(i),2.5*t,0,Math.PI*2)
      ctx.fillStyle=`rgba(255,255,255,${t*0.75})`; ctx.fill()
    }
    const rad=pmCurAngle*Math.PI/180
    ctx.strokeStyle='rgba(224,162,30,0.75)'; ctx.lineWidth=1.2
    ctx.beginPath(); ctx.arc(lx,ly,26,-rad,0); ctx.stroke()
    ctx.strokeStyle='rgba(224,162,30,0.5)'; ctx.lineWidth=1
    ctx.beginPath(); ctx.moveTo(lx,ly); ctx.lineTo(lx+Math.cos(rad)*32,ly-Math.sin(rad)*32); ctx.stroke()
    ctx.fillStyle='rgba(224,162,30,0.9)'; ctx.font='10px monospace'; ctx.textAlign='left'
    ctx.fillText(`${pmCurAngle}°`,lx+30,ly-10)
    if (!landed) {
      const vx=api.pm_get_vx(),vy=api.pm_get_vy(),vmag=Math.sqrt(vx*vx+vy*vy)
      if (vmag>1) {
        const alen=28,ex=bx+(vx/vmag)*alen,ey=by+(vy/vmag)*alen
        ctx.strokeStyle='rgba(255,255,255,0.65)'; ctx.lineWidth=1.5
        ctx.beginPath(); ctx.moveTo(bx,by); ctx.lineTo(ex,ey); ctx.stroke()
        ctx.fillStyle='rgba(255,255,255,0.65)'; arrowHead(bx,by,ex,ey,6)
      }
      const grd=ctx.createRadialGradient(bx,by,0,bx,by,14)
      grd.addColorStop(0,'rgba(8,145,178,0.55)'); grd.addColorStop(1,'rgba(8,145,178,0)')
      ctx.beginPath(); ctx.arc(bx,by,14,0,Math.PI*2); ctx.fillStyle=grd; ctx.fill()
      ctx.beginPath(); ctx.arc(bx,by,5.5,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill()
      ctx.strokeStyle='#0891b2'; ctx.lineWidth=2; ctx.stroke()
    }
    if (hasApex) {
      const ax=api.pm_get_apex_x(),ay=api.pm_get_apex_y()
      const h_m=(ly-ay)/scale
      ctx.setLineDash([3,4]); ctx.strokeStyle='rgba(234,88,12,0.5)'; ctx.lineWidth=1
      ctx.beginPath(); ctx.moveTo(ax,ly); ctx.lineTo(ax,ay); ctx.stroke(); ctx.setLineDash([])
      ctx.beginPath(); ctx.arc(ax,ay,4,0,Math.PI*2); ctx.fillStyle='#ea580c'; ctx.fill()
      ctx.fillStyle='#ea580c'; ctx.font='bold 11px monospace'; ctx.textAlign='center'
      ctx.fillText(`H = ${h_m.toFixed(1)} m`,ax,ay-10)
    }
    if (landed) {
      const range_px=api.pm_get_range(), range_m=range_px/scale, landX=lx+range_px
      if (pmLandTime>0) {
        const age=(now-pmLandTime)/1000
        for (let r=0;r<3;r++) {
          const t=age-r*0.13; if(t<0||t>0.65) continue
          const radius=(t/0.65)*24, alpha=(1-t/0.65)*0.55
          ctx.beginPath(); ctx.arc(landX,ly,radius,Math.PI,0,false)
          ctx.strokeStyle=`rgba(8,145,178,${alpha})`; ctx.lineWidth=1.5; ctx.stroke()
        }
      }
      const yBr=ly+14; ctx.strokeStyle='#1f9d6b'; ctx.lineWidth=1.5
      ctx.beginPath()
      ctx.moveTo(lx,yBr-5); ctx.lineTo(lx,yBr+5)
      ctx.moveTo(lx,yBr);   ctx.lineTo(landX,yBr)
      ctx.moveTo(landX,yBr-5); ctx.lineTo(landX,yBr+5)
      ctx.stroke()
      ctx.fillStyle='#1f9d6b'; ctx.font='bold 12px monospace'; ctx.textAlign='center'
      ctx.fillText(`R = ${range_m.toFixed(1)} m`, lx+range_px/2, ly+30)
      if (pmPhase==='flying') {
        pmPhase='landed'; pmLandTime=now
        const n=api.pm_trail_len()
        pmGhost=Array.from({length:n},(_,i)=>({x:api.pm_trail_x(i),y:api.pm_trail_y(i)}))
        pmRelaunchT=setTimeout(()=>pmLaunch(),1800)
      }
    }
    ctx.fillStyle='rgba(128,128,128,0.40)'; ctx.font='10px monospace'
    ctx.textAlign='right'; ctx.textBaseline='top'
    ctx.fillText(`v₀ = ${pmCurSpeed} m/s  ·  θ = ${pmCurAngle}°  ·  g = 9.8 m/s²`,W-8,8)
    ctx.textBaseline='alphabetic'
  }
  raf=requestAnimationFrame(draw)
}

// ════════════════════════════════════════════════════════════════════════════
// THREE.JS  3D SCENE
// ════════════════════════════════════════════════════════════════════════════
let threeInited   = false
let threeLoading  = false
let threeDisposed = false
let t3DrawFn: ((n:number)=>void) | null = null
let t3Renderer: any = null
let t3Scene: any    = null
let t3Camera: any   = null
let t3Controls: any = null
let t3BallMesh: any = null
let t3BallLight: any = null
let t3ApexMesh: any = null
let t3GhostMesh: any = null
let t3TrailGeo: any  = null
let t3TrailBuf: Float32Array | null = null
const MAX_TRAIL = 300

let t3Time=0, t3Phase='idle', t3v0x=0, t3v0y=0, t3lx=0
let t3Scale=1, t3LastVy=0, t3ApexSet=false, t3TrailN=0
let t3RelaunchT: ReturnType<typeof setTimeout> | null = null
let t3PrevTrail: [number,number][] = []

function t3ComputeParams() {
  const G=9.8, ang=pmAngle.value*Math.PI/180, spd=pmSpeed.value
  const maxR=spd*spd/G, s=14/maxR
  return { s, grav: G*s, v0x: spd*Math.cos(ang)*s, v0y: spd*Math.sin(ang)*s }
}

function t3BuildGhost(THREE: any) {
  if (t3GhostMesh) {
    t3Scene.remove(t3GhostMesh)
    t3GhostMesh.geometry.dispose(); t3GhostMesh.material.dispose(); t3GhostMesh=null
  }
  if (t3PrevTrail.length < 3) return
  try {
    const pts = t3PrevTrail.map(([x,y]) => new THREE.Vector3(x,y,0))
    const curve = new THREE.CatmullRomCurve3(pts)
    const geo   = new THREE.TubeGeometry(curve, Math.min(pts.length*2,120), 0.05, 5, false)
    const mat   = new THREE.MeshBasicMaterial({color:0x0891b2,transparent:true,opacity:0.20})
    t3GhostMesh = new THREE.Mesh(geo, mat)
    t3Scene.add(t3GhostMesh)
  } catch(_) {}
}

function t3Launch(THREE: any) {
  clearTimeout(t3RelaunchT!)
  const { v0x, v0y, s, grav } = t3ComputeParams()
  t3Scale=s; t3v0x=v0x; t3v0y=v0y; t3lx=0.5
  t3Time=0; t3Phase='flying'; t3LastVy=v0y; t3ApexSet=false; t3TrailN=0
  t3ApexMesh.visible=false
  t3BuildGhost(THREE)
  t3PrevTrail=[]
  t3TrailGeo.setDrawRange(0,0)
}

async function startThreeScene() {
  const cvs = threeCanvas.value; if (!cvs || threeDisposed) return
  const [{ default: THREE }, { OrbitControls }] = await Promise.all([
    import('three'),
    import('three/examples/jsm/controls/OrbitControls.js'),
  ])
  const W = cvs.clientWidth  || 400
  const H = cvs.clientHeight || 300
  cvs.width  = W*devicePixelRatio
  cvs.height = H*devicePixelRatio
  if (t3Renderer) { t3Renderer.dispose(); t3Renderer=null }
  t3Renderer = new THREE.WebGLRenderer({canvas:cvs,antialias:true,alpha:true})
  t3Renderer.setPixelRatio(devicePixelRatio)
  t3Renderer.setSize(W,H,false)
  t3Renderer.setClearColor(0x000000,0)
  t3Scene  = new THREE.Scene()
  t3Camera = new THREE.PerspectiveCamera(52,W/H,0.1,200)
  t3Camera.position.set(7,7,16)
  t3Camera.lookAt(7,3,0)
  t3Scene.add(new THREE.AmbientLight(0x445566,2.5))
  const sun=new THREE.DirectionalLight(0xffffff,1.2); sun.position.set(5,12,6); t3Scene.add(sun)
  t3BallLight=new THREE.PointLight(0x00c8f8,3,10); t3Scene.add(t3BallLight)
  const grid=new THREE.GridHelper(40,40,0x224455,0x1a3344); grid.position.set(7,0,0); t3Scene.add(grid)
  const ballGeo=new THREE.SphereGeometry(0.25,20,20)
  const ballMat=new THREE.MeshPhongMaterial({color:0xffffff,emissive:0x0077aa,emissiveIntensity:0.9,shininess:150})
  t3BallMesh=new THREE.Mesh(ballGeo,ballMat); t3Scene.add(t3BallMesh)
  t3TrailBuf=new Float32Array(MAX_TRAIL*3)
  t3TrailGeo=new THREE.BufferGeometry()
  t3TrailGeo.setAttribute('position',new THREE.BufferAttribute(t3TrailBuf,3))
  t3TrailGeo.setDrawRange(0,0)
  const trailMat=new THREE.PointsMaterial({color:0x0891b2,size:0.14,transparent:true,opacity:0.75})
  t3Scene.add(new THREE.Points(t3TrailGeo,trailMat))
  const apexGeo=new THREE.SphereGeometry(0.18,10,10)
  const apexMat=new THREE.MeshPhongMaterial({color:0xea580c,emissive:0xcc3300,emissiveIntensity:0.9})
  t3ApexMesh=new THREE.Mesh(apexGeo,apexMat); t3ApexMesh.visible=false; t3Scene.add(t3ApexMesh)
  t3Controls=new OrbitControls(t3Camera,cvs)
  t3Controls.target.set(7,3,0); t3Controls.enableDamping=true; t3Controls.dampingFactor=0.08
  t3Controls.maxPolarAngle=Math.PI/2-0.02; t3Controls.minDistance=4; t3Controls.maxDistance=50
  threeInited=true
  t3Launch(THREE)
  const FPS=1/60
  t3DrawFn = function draw3() {
    rafThree=requestAnimationFrame(draw3)
    t3Controls.update()
    if (t3Phase==='flying') {
      t3Time+=FPS
      const {grav:g}=t3ComputeParams()
      const x=t3lx+t3v0x*t3Time
      const y=t3v0y*t3Time-0.5*g*t3Time*t3Time
      const vy=t3v0y-g*t3Time
      if (y<=0&&t3Time>0.05) {
        t3Phase='landed'
        t3BallMesh.position.set(x,0,0); t3BallLight.position.copy(t3BallMesh.position)
        t3RelaunchT=setTimeout(()=>t3Launch(THREE),1900)
      } else {
        const sy=Math.max(0,y)
        t3BallMesh.position.set(x,sy,0); t3BallLight.position.set(x,sy,0)
        if (!t3ApexSet&&t3LastVy>=0&&vy<0) {
          t3ApexSet=true; t3ApexMesh.position.set(x,sy,0); t3ApexMesh.visible=true
        }
        t3LastVy=vy
        if (t3TrailN<MAX_TRAIL) {
          const idx=t3TrailN*3
          t3TrailBuf![idx]=x; t3TrailBuf![idx+1]=sy; t3TrailBuf![idx+2]=0
          t3TrailN++
          t3TrailGeo.attributes.position.needsUpdate=true
          t3TrailGeo.setDrawRange(0,t3TrailN)
          t3PrevTrail.push([x,sy])
        }
      }
    }
    t3Renderer.render(t3Scene,t3Camera)
  }
  rafThree=requestAnimationFrame(t3DrawFn)
  const ro=new ResizeObserver(()=>{
    const w=cvs.clientWidth,h=cvs.clientHeight
    if (w<1||h<1) return
    t3Renderer.setSize(w,h,false)
    t3Camera.aspect=w/h; t3Camera.updateProjectionMatrix()
  })
  ro.observe(cvs)
}

// sliders
watch([pmAngle,pmSpeed],async()=>{
  if (props.activeTab==='three') {
    if (threeInited&&t3DrawFn) { const {default:T}=await import('three'); t3Launch(T) }
  } else {
    pmGhost=[]; pmLaunch()
  }
})

// tab switch
watch(()=>props.activeTab,async(tab)=>{
  if (!tab) return
  if (tab==='three') {
    cancelAnimationFrame(raf); raf=0
    await nextTick()
    if (!threeInited&&!threeLoading) {
      threeLoading=true; await startThreeScene(); threeLoading=false
    } else if (threeInited&&t3DrawFn) {
      const {default:T}=await import('three'); t3Launch(T)
      rafThree=requestAnimationFrame(t3DrawFn)
    }
  } else {
    cancelAnimationFrame(rafThree); rafThree=0; clearTimeout(t3RelaunchT!)
    await nextTick()
    if (status.value==='running') {
      if (props.type==='projectile-motion') { pmGhost=[]; startPmLoop() }
      else if (props.type==='si-units') startSiLoop()
    }
  }
})

// ── LOADER ───────────────────────────────────────────────────────────────────
async function loadWasm() {
  const path=wasmPath(props.type)
  if (!path) { status.value='missing'; return }
  try {
    const res=await fetch(path)
    if (!res.ok) throw new Error(`HTTP ${res.status} — ${path}`)
    const buf=await res.arrayBuffer()
    const mem=new WebAssembly.Memory({initial:1})
    const {instance}=await WebAssembly.instantiate(buf,{env:{memory:mem,abort:()=>{}}})
    if (props.type==='si-units') {
      siAPI=instance.exports as unknown as SiAPI
      status.value='running'; await nextTick(); startSiLoop()
    } else if (props.type==='projectile-motion') {
      pmAPI=instance.exports as unknown as PmAPI
      status.value='running'; await nextTick()
      if (props.activeTab==='three') await startThreeScene()
      else startPmLoop()
    }
  } catch(e:any) { errMsg.value=e?.message??String(e); status.value='error' }
}

onMounted(()=>loadWasm())
onUnmounted(()=>{
  threeDisposed=true
  cancelAnimationFrame(raf); cancelAnimationFrame(rafThree)
  clearTimeout(pmRelaunchT!); clearTimeout(t3RelaunchT!)
  if (t3Renderer) { t3Renderer.dispose(); t3Renderer=null }
})
</script>

<template>
  <div class="wasm-hero">
    <div v-if="status === 'loading'" class="wh-msg">
      <span class="wh-spin">⟳</span>&nbsp;Loading WASM module…
    </div>
    <div v-else-if="status === 'missing'" class="wh-msg wh-info">
      <strong>Interactive (WASM)</strong> module not yet built for <code>{{ type }}</code>.
    </div>
    <div v-else-if="status === 'error'" class="wh-msg wh-err">⚠ {{ errMsg }}</div>
    <template v-else>
      <!-- 2D WASM canvas -->
      <canvas ref="canvas"
              v-show="activeTab !== 'three'"
              :class="['wh-canvas', type === 'projectile-motion' ? 'wh-canvas-pm' : '']"
              aria-label="Interactive WASM physics simulation" />
      <!-- Three.js 3D canvas (projectile-motion only) -->
      <canvas v-if="type === 'projectile-motion'"
              ref="threeCanvas"
              v-show="activeTab === 'three'"
              class="wh-canvas wh-canvas-three"
              aria-label="3D projectile motion scene" />
      <!-- Sliders (both Explore + 3D tabs) -->
      <div v-if="type === 'projectile-motion'" class="pm-controls">
        <label class="pm-ctrl">
          <span class="pm-ctrl-val">θ = {{ pmAngle }}°</span>
          <input type="range" class="pm-slider" min="10" max="80" step="1" v-model.number="pmAngle" />
          <span class="pm-ctrl-hint">angle</span>
        </label>
        <label class="pm-ctrl">
          <span class="pm-ctrl-val">v₀ = {{ pmSpeed }} m/s</span>
          <input type="range" class="pm-slider" min="10" max="50" step="1" v-model.number="pmSpeed" />
          <span class="pm-ctrl-hint">speed</span>
        </label>
      </div>
    </template>
  </div>
</template>

<style scoped>
.wasm-hero { width: 100%; }
.wh-canvas {
  display: block; width: 100%; height: 200px;
  border-radius: 0 0 6px 6px;
  background: var(--vp-c-bg-soft);
}
.wh-canvas-pm    { height: 230px; }
.wh-canvas-three { height: 300px; background: transparent; }
.wh-msg {
  display: flex; align-items: center; justify-content: center;
  gap: 8px; height: 200px; padding: 16px;
  text-align: center; font-size: 0.87rem;
  color: var(--vp-c-text-2); background: var(--vp-c-bg-soft);
  border-radius: 0 0 6px 6px;
}
.wh-info { flex-direction: column; gap: 6px; }
.wh-err  { color: var(--vp-c-danger-1); }
.wh-spin { display: inline-block; animation: wasmSpin 0.9s linear infinite; }
@keyframes wasmSpin { to { transform: rotate(360deg); } }
.pm-controls {
  display: flex; gap: 1.2rem; padding: 0.55rem 1rem 0.6rem;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.pm-ctrl { display: flex; align-items: center; gap: 0.5rem; flex: 1; min-width: 0; }
.pm-ctrl-val { font: 500 0.78rem/1 monospace; color: var(--pc-visual); white-space: nowrap; min-width: 7ch; }
.pm-ctrl-hint { font-size: 0.72rem; color: var(--vp-c-text-3); white-space: nowrap; }
.pm-slider { flex: 1; min-width: 0; accent-color: var(--pc-visual); }
</style>
