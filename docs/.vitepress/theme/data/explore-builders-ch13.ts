import type { ExploreConfig } from './explore-types'
const BG='#0f172a';const DIM='#64748b'
const CYAN='#06b6d4';const GREEN='#22c55e';const YELLOW='#eab308';const ORANGE='#f97316'
function bg(ctx:CanvasRenderingContext2D,w:number,h:number){ctx.fillStyle=BG;ctx.fillRect(0,0,w,h)}

export const shm:ExploreConfig={
  hint:'Phone vibrating — back-and-forth SHM in your pocket',
  controls:[
    {label:'Amplitude',min:10,max:80,step:5,unit:' mm',default:40},
    {label:'Frequency',min:1,max:10,step:0.5,unit:' Hz',default:2},
  ],
  draw(ctx,w,h,[A,f],t){
    bg(ctx,w,h)
    const omega=2*Math.PI*f,x=A*Math.cos(omega*t)
    const px=w/2+x*2,py=h/2
    ctx.fillStyle='#1e293b';ctx.fillRect(px-20,py-40,40,80);ctx.strokeStyle=CYAN;ctx.lineWidth=2;ctx.strokeRect(px-20,py-40,40,80)
    ctx.font='18px sans-serif';ctx.textAlign='center';ctx.fillText('📱',px,py+8)
    const trail=20
    for(let i=0;i<trail;i++){const ti=t-i*0.01;const xi=A*Math.cos(omega*ti)*2+w/2;ctx.fillStyle=`rgba(6,182,212,${0.3-i*0.015})`;ctx.beginPath();ctx.arc(xi,py,3,0,Math.PI*2);ctx.fill()}
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(`x = A·cos(ωt) = ${x.toFixed(1)} mm`,w/2,25)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText(`ω=${omega.toFixed(1)} rad/s  T=${(1/f).toFixed(2)}s`,w/2,h-16)
  }
}

export const simplePendulum:ExploreConfig={
  hint:'Grandfather clock — pendulum period depends on length only',
  controls:[{label:'Length',min:10,max:200,step:5,unit:' cm',default:100}],
  draw(ctx,w,h,[L],t){
    bg(ctx,w,h)
    const g=9.8,omega=Math.sqrt(g/(L/100))
    const T=2*Math.PI/omega,A=25*Math.PI/180
    const theta=A*Math.cos(omega*t)
    const cx=w/2,cy=30,len=Math.min(L*1.2,h-80)
    const bx=cx+len*Math.sin(theta),by=cy+len*Math.cos(theta)
    ctx.strokeStyle='#475569';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(bx,by);ctx.stroke()
    ctx.fillStyle=ORANGE;ctx.beginPath();ctx.arc(bx,by,12,0,Math.PI*2);ctx.fill()
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`T = 2π√(L/g) = ${T.toFixed(2)} s`,w/2,h-35)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`L=${L}cm  (T independent of mass!)`,w/2,h-15)
  }
}

export const energySHM:ExploreConfig={
  hint:'Bungee jump — KE and PE swap back and forth',
  controls:[{label:'Amplitude',min:10,max:80,step:5,unit:'px',default:50}],
  draw(ctx,w,h,[A],t){
    bg(ctx,w,h)
    const omega=2,x=A*Math.cos(omega*t),v=-A*omega*Math.sin(omega*t)
    const m=70,k=50
    const KE=0.5*m*v*v/1000,PE=0.5*k*x*x/1000,E=0.5*k*A*A/1000
    const py=h/2+x
    ctx.strokeStyle='#475569';ctx.lineWidth=2;ctx.beginPath()
    for(let i=0;i<=10;i++)ctx.lineTo(w/2+(i%2===0?-15:15),30+i*A*0.3)
    ctx.stroke()
    ctx.font='22px sans-serif';ctx.textAlign='center';ctx.fillText('🧍',w/2,py)
    const bw=w-80
    ctx.fillStyle='#1e293b';ctx.fillRect(40,h-45,bw,14)
    ctx.fillStyle=GREEN;ctx.fillRect(40,h-45,bw*(KE/E),14)
    ctx.fillStyle=YELLOW;ctx.fillRect(40+bw*(KE/E),h-45,bw*(PE/E),14)
    ctx.strokeStyle='#475569';ctx.lineWidth=1;ctx.strokeRect(40,h-45,bw,14)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText(`KE=${KE.toFixed(1)}kJ`,w*0.3,h-50)
    ctx.fillStyle=YELLOW;ctx.fillText(`PE=${PE.toFixed(1)}kJ`,w*0.7,h-50)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`E_total=${E.toFixed(1)}kJ (constant)`,w/2,h-16)
  }
}

export const dampedOscillations:ExploreConfig={
  hint:'Car shock absorber — oscillation dies out over time',
  controls:[{label:'Damping',min:1,max:50,step:1,unit:'%',default:15}],
  draw(ctx,w,h,[damp]){
    bg(ctx,w,h)
    const b=damp/100*0.5,omega=3,gx=30,gy=h/2,gw=w-60
    ctx.strokeStyle=CYAN;ctx.lineWidth=2;ctx.beginPath()
    for(let i=0;i<=200;i++){
      const t=i/200*10,A=Math.exp(-b*t),x=A*Math.cos(omega*t)
      const px=gx+i*gw/200,py=gy-x*60
      i===0?ctx.moveTo(px,py):ctx.lineTo(px,py)
    }
    ctx.stroke()
    ctx.strokeStyle='#1e3a5f';ctx.lineWidth=1;ctx.setLineDash([4,4])
    for(let i=0;i<=200;i++){
      const t=i/200*10,A=Math.exp(-b*t)
      const px=gx+i*gw/200,py1=gy-A*60,py2=gy+A*60
      if(i===0){ctx.beginPath();ctx.moveTo(px,py1)}else ctx.lineTo(px,py1)
    }
    ctx.stroke();ctx.beginPath()
    for(let i=0;i<=200;i++){const t=i/200*10,A=Math.exp(-b*t);const px=gx+i*gw/200,py2=gy+A*60;i===0?ctx.moveTo(px,py2):ctx.lineTo(px,py2)}
    ctx.stroke();ctx.setLineDash([])
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`x = A₀e^{-bt}cos(ωt)  b=${b.toFixed(2)}`,w/2,22)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText(damp>30?'Overdamped (slow return)':damp>15?'Critically damped':'Underdamped (oscillates)',w/2,h-16)
  }
}

export const resonance:ExploreConfig={
  hint:'Phone speaker — loudest when frequency matches resonant frequency',
  controls:[{label:'Drive frequency',min:1,max:10,step:0.2,unit:' Hz',default:3}],
  draw(ctx,w,h,[f],t){
    bg(ctx,w,h)
    const f0=3,Q=5,denom=Math.sqrt((f0*f0-f*f)**2+(f0*f/Q)**2)
    const amp=f0*f0/Math.max(denom,0.1)
    const normAmp=Math.min(amp/f0/f0*0.5,1)
    const gx=40,gy=h-50,gw=w-80,gh=h-80
    ctx.strokeStyle='#1e293b';ctx.lineWidth=1
    ctx.beginPath();ctx.moveTo(gx,gy-gh);ctx.lineTo(gx,gy);ctx.lineTo(gx+gw,gy);ctx.stroke()
    ctx.strokeStyle=CYAN;ctx.lineWidth=2;ctx.beginPath()
    for(let i=0;i<=200;i++){
      const fi=i/200*10,d2=Math.sqrt((f0*f0-fi*fi)**2+(f0*fi/Q)**2)
      const a=f0*f0/Math.max(d2,0.01)
      const px=gx+i*gw/200,py=gy-Math.min(a/f0/f0*0.5,1)*gh
      i===0?ctx.moveTo(px,py):ctx.lineTo(px,py)
    }
    ctx.stroke()
    const fx=gx+(f/10)*gw
    ctx.strokeStyle=ORANGE;ctx.lineWidth=2;ctx.setLineDash([4,3])
    ctx.beginPath();ctx.moveTo(fx,gy);ctx.lineTo(fx,gy-normAmp*gh);ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`f=${f.toFixed(1)}Hz  f₀=3Hz  Amplitude=${(normAmp*100).toFixed(0)}%`,w/2,22)
    ctx.fillStyle=normAmp>0.8?'#ef4444':DIM;ctx.font='10px sans-serif'
    ctx.fillText(normAmp>0.8?'⚡ At resonance! Max amplitude':'Tune to f₀=3Hz for max loudness',w/2,h-16)
  }
}
