import type { ExploreConfig } from './explore-types'
const BG='#0f172a';const DIM='#64748b'
const CYAN='#06b6d4';const GREEN='#22c55e';const RED='#ef4444';const YELLOW='#eab308';const ORANGE='#f97316'
function bg(ctx:CanvasRenderingContext2D,w:number,h:number){ctx.fillStyle=BG;ctx.fillRect(0,0,w,h)}
function arrow(ctx:CanvasRenderingContext2D,x1:number,y1:number,x2:number,y2:number,col:string,lw=2.5){
  const a=Math.atan2(y2-y1,x2-x1)
  ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke()
  ctx.fillStyle=col;ctx.beginPath()
  ctx.moveTo(x2,y2);ctx.lineTo(x2-10*Math.cos(a-0.4),y2-10*Math.sin(a-0.4))
  ctx.lineTo(x2-10*Math.cos(a+0.4),y2-10*Math.sin(a+0.4));ctx.closePath();ctx.fill()
}

export const inertia:ExploreConfig={
  hint:'Bus braking — passenger slides forward due to inertia',
  controls:[{label:'Braking force',min:0,max:100,step:5,unit:'%',default:50}],
  draw(ctx,w,h,[force],t){
    bg(ctx,w,h)
    const decel=force/100
    const slide=Math.sin(t*2)*decel*20
    ctx.fillStyle='#1e293b';ctx.fillRect(30,h/2-30,w-60,60);
    ctx.strokeStyle='#475569';ctx.lineWidth=2;ctx.strokeRect(30,h/2-30,w-60,60)
    ctx.font='22px sans-serif';ctx.textAlign='center'
    ctx.fillText('🚌',w*0.3,h/2+8)
    const px=w*0.6+slide
    ctx.fillText('🧍',px,h/2+8)
    if(force>0){arrow(ctx,w*0.3+30,h/2,w*0.3+30-force*0.8,h/2,RED)}
    arrow(ctx,px-10,h/2,px-10+slide*1.5,h/2,ORANGE)
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(`Newton's 1st Law: body resists change`,w/2,h-35)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText('Passenger continues at original velocity when bus stops',w/2,h-16)
  }
}

export const momentum:ExploreConfig={
  hint:'Football kick — more mass or speed = more momentum',
  controls:[
    {label:'Mass',min:1,max:10,step:0.5,unit:' kg',default:4},
    {label:'Speed',min:1,max:30,step:1,unit:' m/s',default:15},
  ],
  draw(ctx,w,h,[m,v]){
    bg(ctx,w,h)
    const p=m*v,F=p/0.1
    const ballR=Math.max(8,m*3)
    const bx=w*0.35,by=h/2
    ctx.fillStyle='#1e3a5f';ctx.beginPath();ctx.arc(bx,by,ballR,0,Math.PI*2);ctx.fill()
    ctx.strokeStyle=CYAN;ctx.lineWidth=1.5;ctx.stroke()
    ctx.font=`${Math.min(ballR*1.2,20)}px sans-serif`;ctx.textAlign='center'
    ctx.fillText('⚽',bx,by+6)
    arrow(ctx,bx+ballR,by,bx+ballR+v*4,by,RED)
    ctx.fillStyle=RED;ctx.font='bold 13px monospace'
    ctx.fillText(`p = mv = ${p.toFixed(0)} kg·m/s`,w/2,40)
    ctx.fillStyle=GREEN;ctx.font='12px monospace'
    ctx.fillText(`F = Δp/Δt = ${F.toFixed(0)} N (0.1s kick)`,w/2,65)
    ctx.fillStyle=ORANGE;ctx.font='11px monospace'
    ctx.fillText(`m=${m}kg  v=${v}m/s`,w/2,h-20)
  }
}

export const impulse:ExploreConfig={
  hint:'Cricket bat — longer contact time reduces impact force',
  controls:[{label:'Contact time',min:1,max:50,step:1,unit:' ms',default:10}],
  draw(ctx,w,h,[tms]){
    bg(ctx,w,h)
    const t=tms/1000,p=5,F=p/t
    const barW=Math.min(F/5000*180,w-100)
    ctx.font='28px sans-serif';ctx.textAlign='center';ctx.fillText('🏏',w*0.4,h/2)
    ctx.fillText('🏀',w*0.6,h/2+4)
    ctx.fillStyle='#1e293b';ctx.fillRect(40,h-70,w-80,20)
    ctx.fillStyle=F>5000?RED:GREEN;ctx.fillRect(40,h-70,barW,20)
    ctx.strokeStyle='#475569';ctx.lineWidth=1;ctx.strokeRect(40,h-70,w-80,20)
    ctx.fillStyle=YELLOW;ctx.font='bold 13px monospace'
    ctx.fillText(`Impulse J = ${p} N·s`,w/2,35)
    ctx.fillStyle=F>5000?RED:GREEN;ctx.font='12px monospace'
    ctx.fillText(`Force = J/t = ${F.toFixed(0)} N`,w/2,58)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText('Same impulse — longer time = less force (follow-through!)',w/2,h-18)
  }
}

export const thirdLaw:ExploreConfig={
  hint:'Rocket launch — exhaust pushed down, rocket goes up',
  controls:[{label:'Thrust',min:10,max:100,step:5,unit:'%',default:50}],
  draw(ctx,w,h,[thrust],t){
    bg(ctx,w,h)
    const lift=thrust/100
    const ry=h*0.6-lift*Math.sin(t*lift*2)*30-lift*t*15
    const clampY=Math.max(20,ry)
    ctx.font='28px sans-serif';ctx.textAlign='center';ctx.fillText('🚀',w/2,clampY)
    const flameLen=20+thrust*0.5
    ctx.fillStyle=ORANGE;ctx.font=`${18+thrust*0.1}px sans-serif`
    ctx.fillText('🔥',w/2,clampY+30+flameLen*0.3)
    arrow(ctx,w/2,clampY-10,w/2,clampY-10-flameLen*1.2,GREEN)
    arrow(ctx,w/2,clampY+20,w/2,clampY+20+flameLen,RED)
    ctx.fillStyle=GREEN;ctx.font='bold 11px monospace'
    ctx.fillText(`Action: exhaust ↓ ${thrust}%`,w/2,h-35)
    ctx.fillStyle=RED;ctx.font='11px monospace'
    ctx.fillText(`Reaction: rocket ↑ (Newton's 3rd Law)`,w/2,h-16)
  }
}

export const conservationMomentum:ExploreConfig={
  hint:'Billiards collision — total momentum conserved',
  controls:[{label:'Ball 1 speed',min:1,max:10,step:0.5,unit:' m/s',default:5}],
  draw(ctx,w,h,[v1],t){
    bg(ctx,w,h)
    const m=0.17,tColl=1.5,phase=t%(tColl*2+1)
    let x1:number,x2:number
    if(phase<tColl){x1=60+v1*phase*30;x2=260}
    else if(phase<tColl+0.1){x1=240;x2=260}
    else{x1=240;x2=260+v1*(phase-tColl-0.1)*30}
    ctx.fillStyle='#e2e8f0';ctx.beginPath();ctx.arc(x1,h/2,18,0,Math.PI*2);ctx.fill()
    ctx.fillStyle='#3b82f6';ctx.beginPath();ctx.arc(x2,h/2,18,0,Math.PI*2);ctx.fill()
    const p1=m*v1,ptot=p1
    ctx.fillStyle=CYAN;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`p_total = ${ptot.toFixed(3)} kg·m/s (conserved)`,w/2,35)
    ctx.fillStyle=YELLOW;ctx.font='11px monospace'
    ctx.fillText(`m=${m}kg × v=${v1}m/s = ${p1.toFixed(3)}`,w/2,58)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText('White ball stops, blue ball moves at same velocity',w/2,h-16)
  }
}

export const equilibrium:ExploreConfig={
  hint:'Building column — net force and torque must be zero',
  controls:[{label:'Load (tonnes)',min:1,max:20,step:1,unit:'t',default:5}],
  draw(ctx,w,h,[load]){
    bg(ctx,w,h)
    const col=load>15?RED:load>10?YELLOW:GREEN
    ctx.fillStyle='#334155';ctx.fillRect(w/2-20,h-60,40,h)
    ctx.fillStyle=col;ctx.fillRect(w/2-60,30,120,25)
    ctx.font='22px sans-serif';ctx.textAlign='center'
    for(let i=0;i<Math.min(load,10);i++)ctx.fillText('🏗️',w/2-40+i*9,24)
    arrow(ctx,w/2,50,w/2,50+load*4,RED)
    arrow(ctx,w/2,h-65,w/2,h-65-load*4,GREEN)
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(`Load: ${load}t  ↓F = ${(load*9800).toFixed(0)}N`,w/2,h-20)
    ctx.fillStyle=col;ctx.font='11px monospace'
    ctx.fillText(load>15?'⚠️ Over design load!':load>10?'⚠️ High load':'✅ Equilibrium: ΣF = 0',w/2,h-40)
  }
}

export const friction:ExploreConfig={
  hint:'Shoe on different surfaces — see how friction varies',
  controls:[
    {label:'Surface',min:0,max:3,step:1,unit:'',default:1},
    {label:'Applied force',min:0,max:100,step:5,unit:' N',default:30},
  ],
  draw(ctx,w,h,[surf,F]){
    bg(ctx,w,h)
    const surfaces=[{name:'Ice',mu:0.03,col:'#93c5fd'},{name:'Tile',mu:0.3,col:'#94a3b8'},{name:'Asphalt',mu:0.7,col:'#374151'},{name:'Rubber mat',mu:0.9,col:'#78350f'}]
    const s=surfaces[Math.round(surf)%4]
    const m=70,g=9.8,ff=Math.min(s.mu*m*g,F)
    const moving=F>ff
    ctx.fillStyle=s.col;ctx.fillRect(20,h/2+10,w-40,30)
    ctx.font='28px sans-serif';ctx.textAlign='center'
    ctx.fillText('👟',w/2+(moving?F*0.3:0),h/2)
    arrow(ctx,w/2,h/2-10,w/2+F*1.5,h/2-10,RED)
    arrow(ctx,w/2,h/2+5,w/2-ff*1.5,h/2+5,GREEN)
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(`${s.name}: μ=${s.mu}  f_friction=${ff.toFixed(0)}N`,w/2,h-35)
    ctx.fillStyle=moving?ORANGE:CYAN;ctx.font='11px monospace'
    ctx.fillText(moving?'SLIDING (F > friction)':'STATIC (F ≤ friction)',w/2,h-15)
  }
}

export const circularMotion:ExploreConfig={
  hint:'Motorcycle banking — centripetal force at a curve',
  controls:[{label:'Speed',min:20,max:120,step:5,unit:' km/h',default:60}],
  draw(ctx,w,h,[spd],t){
    bg(ctx,w,h)
    const r=80,cx=w/2,cy=h/2+10,omega=spd/300
    const angle=t*omega
    const bx=cx+r*Math.cos(angle),by=cy+r*Math.sin(angle)
    ctx.strokeStyle='#1e3a5f';ctx.lineWidth=3
    ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.stroke()
    const vc=spd*spd/3.6/3.6/(r/20)
    ctx.font='20px sans-serif';ctx.textAlign='center';ctx.fillText('🏍️',bx,by+8)
    arrow(ctx,bx,by,cx+(bx-cx)*0.55,cy+(by-cy)*0.55,RED)
    ctx.fillStyle=RED;ctx.font='bold 11px monospace'
    ctx.fillText(`Fc = mv²/r = ${vc.toFixed(0)} N/kg`,w/2,h-35)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`v=${spd} km/h  r=${r/20}m road curve`,w/2,h-16)
  }
}
