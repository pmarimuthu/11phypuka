import type { ExploreConfig } from './explore-types'
const BG='#0f172a';const DIM='#64748b'
const CYAN='#06b6d4';const GREEN='#22c55e';const YELLOW='#eab308';const ORANGE='#f97316'
function bg(ctx:CanvasRenderingContext2D,w:number,h:number){ctx.fillStyle=BG;ctx.fillRect(0,0,w,h)}

export const waveMotion:ExploreConfig={
  hint:'Sea wave at beach — particles move up-down, wave moves forward',
  controls:[
    {label:'Amplitude',min:5,max:50,step:5,unit:' cm',default:20},
    {label:'Wavelength',min:40,max:200,step:20,unit:' px',default:100},
  ],
  draw(ctx,w,h,[A,lambda],t){
    bg(ctx,w,h)
    const k=2*Math.PI/lambda,omega=2
    ctx.strokeStyle=CYAN;ctx.lineWidth=2.5;ctx.beginPath()
    for(let x=0;x<=w;x++){const y=h/2+A*Math.sin(k*x-omega*t);x===0?ctx.moveTo(x,y):ctx.lineTo(x,y)}
    ctx.stroke()
    const n=6
    for(let i=0;i<n;i++){
      const x=i*(w/n)+w/(n*2),y=h/2+A*Math.sin(k*x-omega*t)
      ctx.fillStyle=ORANGE;ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fill()
      ctx.strokeStyle=`rgba(249,115,22,0.5)`;ctx.lineWidth=1
      ctx.beginPath();ctx.moveTo(x,h/2);ctx.lineTo(x,y);ctx.stroke()
    }
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`λ=${lambda}px  A=${A}cm`,w/2,25)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText('Particles oscillate vertically, wave moves →',w/2,h-16)
  }
}

export const speedOfWaves:ExploreConfig={
  hint:'Echo in a canyon — sound speed × time = distance to wall',
  controls:[{label:'Distance to wall',min:50,max:500,step:10,unit:' m',default:200}],
  draw(ctx,w,h,[dist],t){
    bg(ctx,w,h)
    const v=340,tEcho=dist/v,phase=t%(tEcho*2+0.5)
    const going=phase<tEcho
    const wavePct=going?phase/tEcho:(2*tEcho-phase)/tEcho
    const waveX=going?60+wavePct*(w-120):w-60-wavePct*(w-120)
    ctx.fillStyle='#374151';ctx.fillRect(20,40,20,h-80)
    ctx.fillRect(w-40,40,20,h-80)
    ctx.font='20px sans-serif';ctx.textAlign='center'
    ctx.fillText('🧍',50,h/2+8);ctx.fillText('🏔️',w-30,h/2+8)
    ctx.strokeStyle=going?CYAN:GREEN;ctx.lineWidth=2.5
    ctx.beginPath();ctx.arc(waveX,h/2,20,0,Math.PI*2);ctx.stroke()
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(`d=${dist}m  Echo in ${(tEcho*2).toFixed(2)}s`,w/2,28)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`v_sound = 340 m/s  d = v × t/2`,w/2,h-16)
  }
}

export const standingWaves:ExploreConfig={
  hint:'Guitar string — standing wave with nodes and antinodes',
  controls:[{label:'Harmonic',min:1,max:6,step:1,unit:'',default:1}],
  draw(ctx,w,h,[n],t){
    bg(ctx,w,h)
    const N=Math.round(n),L=w-80,omega=N*2
    ctx.strokeStyle='#475569';ctx.lineWidth=3
    ctx.beginPath();ctx.moveTo(40,h/2);ctx.lineTo(40+L,h/2);ctx.stroke()
    ctx.fillStyle='#64748b';ctx.fillRect(36,h/2-20,8,40);ctx.fillRect(36+L,h/2-20,8,40)
    ctx.strokeStyle=CYAN;ctx.lineWidth=2.5;ctx.beginPath()
    for(let x=0;x<=L;x++){const y=h/2+40*Math.sin(N*Math.PI*x/L)*Math.cos(omega*t);(x===0?ctx.moveTo:ctx.lineTo).call(ctx,40+x,y)}
    ctx.stroke()
    ctx.strokeStyle=`${CYAN}33`;ctx.lineWidth=1.5;ctx.beginPath()
    for(let x=0;x<=L;x++){const y=h/2-40*Math.sin(N*Math.PI*x/L)*Math.cos(omega*t);(x===0?ctx.moveTo:ctx.lineTo).call(ctx,40+x,y)}
    ctx.stroke()
    for(let i=0;i<=N;i++){const nx=40+i*L/N;ctx.fillStyle='#ef4444';ctx.beginPath();ctx.arc(nx,h/2,5,0,Math.PI*2);ctx.fill()}
    ctx.fillStyle=YELLOW;ctx.font='bold 13px monospace';ctx.textAlign='center'
    ctx.fillText(`n=${N}: ${N} loop${N>1?'s':''}, ${N-1} internal node${N-1>1?'s':''}`,w/2,25)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText(`λ = 2L/${N}  f = n·f₁`,w/2,h-16)
  }
}

export const beats:ExploreConfig={
  hint:'Two tuning forks — slightly different frequencies create beats',
  controls:[
    {label:'f₁',min:400,max:500,step:1,unit:' Hz',default:440},
    {label:'f₂',min:400,max:500,step:1,unit:' Hz',default:444},
  ],
  draw(ctx,w,h,[f1,f2],t){
    bg(ctx,w,h)
    const sc=0.002,beat=Math.abs(f1-f2)
    const gx=20,gy=h/2,gw=w-40
    ctx.strokeStyle=CYAN;ctx.lineWidth=1.5;ctx.globalAlpha=0.5;ctx.beginPath()
    for(let i=0;i<=gw;i++){const x=gx+i,y=gy+20*Math.sin(2*Math.PI*f1*sc*(i/gw));i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)}
    ctx.stroke()
    ctx.strokeStyle=GREEN;ctx.beginPath()
    for(let i=0;i<=gw;i++){const x=gx+i,y=gy+20*Math.sin(2*Math.PI*f2*sc*(i/gw));i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)}
    ctx.stroke()
    ctx.globalAlpha=1
    ctx.strokeStyle=YELLOW;ctx.lineWidth=2;ctx.beginPath()
    for(let i=0;i<=gw;i++){const x=gx+i,y=gy+20*(Math.sin(2*Math.PI*f1*sc*(i/gw))+Math.sin(2*Math.PI*f2*sc*(i/gw)));i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)}
    ctx.stroke()
    ctx.fillStyle=ORANGE;ctx.font='bold 13px monospace';ctx.textAlign='center'
    ctx.fillText(`Beat frequency = |f₁-f₂| = ${beat} Hz`,w/2,22)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText(`f₁=${f1}Hz  f₂=${f2}Hz  T_beat=${(1/Math.max(beat,0.01)).toFixed(2)}s`,w/2,h-16)
  }
}

export const doppler:ExploreConfig={
  hint:'Police siren — higher pitch approaching, lower pitch receding',
  controls:[
    {label:'Source speed',min:0,max:200,step:10,unit:' km/h',default:80},
    {label:'Source freq',min:400,max:1000,step:20,unit:' Hz',default:600},
  ],
  draw(ctx,w,h,[vs,f0],t){
    bg(ctx,w,h)
    const v=340,vsMs=vs/3.6
    const fApp=f0*v/(v-vsMs),fRec=f0*v/(v+vsMs)
    const srcX=50+(t*vsMs*20)%(w-80)
    ctx.font='22px sans-serif';ctx.textAlign='center';ctx.fillText('🚓',srcX,h/2+8)
    const nWaves=4
    for(let i=1;i<=nWaves;i++){
      const rF=i*20,rB=i*12
      ctx.strokeStyle=`rgba(6,182,212,${0.5-i*0.1})`;ctx.lineWidth=1.5
      ctx.beginPath();ctx.ellipse(srcX,h/2,rF,rF*0.6,0,Math.PI,Math.PI*2);ctx.stroke()
      ctx.strokeStyle=`rgba(249,115,22,${0.5-i*0.1})`
      ctx.beginPath();ctx.ellipse(srcX,h/2,rB,rB*0.6,0,0,Math.PI);ctx.stroke()
    }
    ctx.fillStyle=CYAN;ctx.font='bold 11px monospace'
    ctx.fillText(`f_approach = ${fApp.toFixed(0)} Hz ↑`,w*0.25,h-35)
    ctx.fillStyle=ORANGE
    ctx.fillText(`f_recede = ${fRec.toFixed(0)} Hz ↓`,w*0.75,h-35)
    ctx.fillStyle=YELLOW;ctx.font='11px monospace'
    ctx.fillText(`f_observed = f₀·v/(v±vs)`,w/2,h-15)
  }
}
