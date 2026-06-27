import type { ExploreConfig } from './explore-types'
const BG='#0f172a';const DIM='#64748b'
const CYAN='#06b6d4';const GREEN='#22c55e';const YELLOW='#eab308';const ORANGE='#f97316'
function bg(ctx:CanvasRenderingContext2D,w:number,h:number){ctx.fillStyle=BG;ctx.fillRect(0,0,w,h)}

export const kineticTheory:ExploreConfig={
  hint:'Gas in a balloon — molecules collide with walls creating pressure',
  controls:[{label:'Temperature',min:100,max:500,step:20,unit:' K',default:300}],
  draw(ctx,w,h,[T],t){
    bg(ctx,w,h)
    const speed=Math.sqrt(T/300)
    const cx=w/2,cy=h/2,R=70
    ctx.strokeStyle=CYAN;ctx.lineWidth=2;ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);ctx.stroke()
    const n=12
    for(let i=0;i<n;i++){
      const angle=(i/n)*Math.PI*2+t*speed*0.5
      const r2=R*0.7*Math.random()*0+R*(0.3+0.4*((i*7%10)/10))
      const px=cx+r2*Math.cos(angle),py=cy+r2*Math.sin(angle)
      const vx=speed*Math.cos(angle+Math.PI/2)*20,vy=speed*Math.sin(angle+Math.PI/2)*20
      ctx.fillStyle=`hsl(${(T/500)*60},90%,60%)`;ctx.beginPath();ctx.arc(px,py,4,0,Math.PI*2);ctx.fill()
      ctx.strokeStyle=`rgba(6,182,212,0.3)`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(px+vx*0.3,py+vy*0.3);ctx.stroke()
    }
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`T=${T}K  KE_avg = 3/2 kT`,w/2,25)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText(`v_rms ∝ √T = ${(Math.sqrt(T/300)*400).toFixed(0)} m/s`,w/2,h-16)
  }
}

export const speedOfMolecules:ExploreConfig={
  hint:'Maxwell-Boltzmann distribution — speeds of air molecules',
  controls:[{label:'Temperature',min:100,max:1000,step:50,unit:' K',default:300}],
  draw(ctx,w,h,[T]){
    bg(ctx,w,h)
    const m=4.65e-26,k=1.38e-23
    const vmp=Math.sqrt(2*k*T/m)/100
    const gx=40,gy=h-40,gw=w-70,gh=h-70
    ctx.strokeStyle='#1e293b';ctx.lineWidth=1
    ctx.beginPath();ctx.moveTo(gx,gy-gh);ctx.lineTo(gx,gy);ctx.lineTo(gx+gw,gy);ctx.stroke()
    ctx.strokeStyle=ORANGE;ctx.lineWidth=2;ctx.beginPath()
    let peak=0
    for(let i=0;i<=100;i++){const v=i*20;const f=4*Math.PI*Math.pow(m/(2*Math.PI*k*T),1.5)*v*v*Math.exp(-m*v*v/(2*k*T));peak=Math.max(peak,f)}
    ctx.beginPath()
    for(let i=0;i<=100;i++){
      const v=i*20,f=4*Math.PI*Math.pow(m/(2*Math.PI*k*T),1.5)*v*v*Math.exp(-m*v*v/(2*k*T))
      const px=gx+i*gw/100,py=gy-f/peak*gh*0.85
      i===0?ctx.moveTo(px,py):ctx.lineTo(px,py)
    }
    ctx.stroke()
    const vmpPx=gx+vmp/20*gw/100
    ctx.strokeStyle=CYAN;ctx.lineWidth=1.5;ctx.setLineDash([4,3])
    ctx.beginPath();ctx.moveTo(vmpPx,gy);ctx.lineTo(vmpPx,gy-gh*0.85);ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle=YELLOW;ctx.font='bold 11px monospace';ctx.textAlign='center'
    ctx.fillText(`T=${T}K  v_mp=${(vmp*100).toFixed(0)} m/s`,w/2,22)
    ctx.fillStyle=DIM;ctx.font='9px sans-serif'
    ctx.fillText('v →',gx+gw,gy+12);ctx.fillText('f(v) ↑',gx-18,gy-gh+10)
  }
}

export const equipartition:ExploreConfig={
  hint:'Energy distributed equally among all degrees of freedom',
  controls:[{label:'Molecule type',min:0,max:2,step:1,unit:'',default:0}],
  draw(ctx,w,h,[idx]){
    bg(ctx,w,h)
    const types=[
      {name:'Monatomic (He)',dof:3,trans:3,rot:0,vib:0,col:'#a78bfa'},
      {name:'Diatomic (O₂)',dof:5,trans:3,rot:2,vib:0,col:CYAN},
      {name:'Polyatomic (CO₂)',dof:6,trans:3,rot:3,vib:0,col:GREEN},
    ]
    const tp=types[Math.round(idx)%3]
    const T=300,k=1.38e-23,energy=tp.dof*0.5*k*T*6.022e23
    const barW=(w-80)/tp.dof
    ctx.fillStyle='#e2e8f0';ctx.font='bold 14px monospace';ctx.textAlign='center'
    ctx.fillText(tp.name,w/2,28)
    const labels=['Tx','Ty','Tz','Rx','Ry','Rz']
    for(let i=0;i<tp.dof;i++){
      const bx=40+i*barW+2,by=h-60,bh=60
      ctx.fillStyle=i<3?ORANGE:CYAN;ctx.fillRect(bx,by,barW-4,bh)
      ctx.fillStyle='#0f172a';ctx.font='bold 11px sans-serif'
      ctx.fillText(labels[i],bx+barW/2-2,by+bh/2+5)
    }
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(`U = ${tp.dof}/2·NkT = ${(energy/1000).toFixed(1)} kJ/mol`,w/2,55)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText(`${tp.trans} translational + ${tp.rot} rotational DOF`,w/2,h-16)
  }
}

export const meanFreePath:ExploreConfig={
  hint:'Air molecule journey — collides billions of times per second',
  controls:[{label:'Pressure (atm)',min:1,max:10,step:1,unit:'',default:1}],
  draw(ctx,w,h,[P],t){
    bg(ctx,w,h)
    const lambda=(68e-9/P),n=Math.round(1/P*5+3)
    const path:Array<[number,number]>=[]
    let px=w/2,py=h/2,seed=42
    function rng(){seed=(seed*1664525+1013904223)&0xffffffff;return(seed>>>0)/0xffffffff}
    path.push([px,py])
    for(let i=0;i<n;i++){const a=rng()*Math.PI*2;const l=rng()*60+20;px+=l*Math.cos(a);py+=l*Math.sin(a);path.push([Math.max(20,Math.min(w-20,px)),Math.max(20,Math.min(h-40,py))])}
    ctx.strokeStyle=CYAN;ctx.lineWidth=1.5;ctx.beginPath()
    path.slice(0,Math.floor(((t*2)%(n+1))+1)).forEach(([x,y],i)=>i===0?ctx.moveTo(x,y):ctx.lineTo(x,y))
    ctx.stroke()
    path.slice(0,Math.floor(((t*2)%(n+1))+1)).forEach(([x,y],i)=>{
      if(i===0)return
      ctx.fillStyle='#f97316';ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fill()
    })
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`λ = ${(lambda*1e9).toFixed(0)} nm  P=${P} atm`,w/2,22)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText('Higher pressure → more collisions → shorter λ',w/2,h-16)
  }
}
