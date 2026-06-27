import type { ExploreConfig } from './explore-types'
const BG='#0f172a';const DIM='#64748b'
const CYAN='#06b6d4';const GREEN='#22c55e';const RED='#ef4444';const YELLOW='#eab308';const ORANGE='#f97316'
function bg(ctx:CanvasRenderingContext2D,w:number,h:number){ctx.fillStyle=BG;ctx.fillRect(0,0,w,h)}
function arrow(ctx:CanvasRenderingContext2D,x1:number,y1:number,x2:number,y2:number,col:string){
  const a=Math.atan2(y2-y1,x2-x1)
  ctx.strokeStyle=col;ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke()
  ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(x2,y2);ctx.lineTo(x2-10*Math.cos(a-0.4),y2-10*Math.sin(a-0.4));ctx.lineTo(x2-10*Math.cos(a+0.4),y2-10*Math.sin(a+0.4));ctx.closePath();ctx.fill()
}

export const work:ExploreConfig={
  hint:'Push shopping trolley — work = F·d·cos(θ)',
  controls:[
    {label:'Force',min:0,max:100,step:5,unit:' N',default:50},
    {label:'Angle',min:0,max:90,step:5,unit:'°',default:30},
  ],
  draw(ctx,w,h,[F,ang]){
    bg(ctx,w,h)
    const rad=ang*Math.PI/180,d=120
    const W=F*d*Math.cos(rad)
    ctx.fillStyle='#1e293b';ctx.fillRect(w*0.5-20,h/2-15,40,30);ctx.strokeStyle='#475569';ctx.lineWidth=1.5;ctx.strokeRect(w*0.5-20,h/2-15,40,30)
    ctx.font='16px sans-serif';ctx.textAlign='center';ctx.fillText('🛒',w*0.5,h/2+6)
    arrow(ctx,w*0.5+20,h/2,w*0.5+20+F*Math.cos(rad)*1.2,h/2-F*Math.sin(rad)*1.2,RED)
    ctx.strokeStyle='#1e3a5f';ctx.lineWidth=1.5;ctx.setLineDash([5,4])
    ctx.beginPath();ctx.moveTo(w*0.5+20,h/2);ctx.lineTo(w*0.5+20+F*Math.cos(rad)*1.2,h/2);ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle=YELLOW;ctx.font='bold 13px monospace'
    ctx.fillText(`W = F·d·cosθ = ${W.toFixed(0)} J`,w/2,35)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`F=${F}N  d=${d}m  θ=${ang}°`,w/2,58)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText('Only the horizontal component does work',w/2,h-16)
  }
}

export const kineticEnergy:ExploreConfig={
  hint:'Badminton shuttle — KE depends on mass and speed²',
  controls:[
    {label:'Mass',min:1,max:100,step:5,unit:' g',default:5},
    {label:'Speed',min:10,max:300,step:10,unit:' km/h',default:100},
  ],
  draw(ctx,w,h,[m,spd]){
    bg(ctx,w,h)
    const v=spd/3.6,kg=m/1000,KE=0.5*kg*v*v
    const bx=50+(spd/300)*(w-120)
    ctx.font='22px sans-serif';ctx.textAlign='center';ctx.fillText('🏸',bx,h/2)
    const barW=(w-80)*(KE/200)
    ctx.fillStyle='#1e293b';ctx.fillRect(40,h-55,w-80,16)
    ctx.fillStyle=KE>100?RED:KE>50?YELLOW:GREEN;ctx.fillRect(40,h-55,Math.min(barW,w-80),16)
    ctx.strokeStyle='#475569';ctx.lineWidth=1;ctx.strokeRect(40,h-55,w-80,16)
    ctx.fillStyle=YELLOW;ctx.font='bold 15px monospace'
    ctx.fillText(`KE = ½mv² = ${KE.toFixed(2)} J`,w/2,35)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`m=${m}g = ${kg.toFixed(3)}kg  v=${v.toFixed(1)}m/s`,w/2,58)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText('Fastest recorded shuttle: 426 km/h!',w/2,h-20)
  }
}

export const potentialEnergy:ExploreConfig={
  hint:'Roller coaster — height converts to potential energy',
  controls:[{label:'Height',min:1,max:100,step:1,unit:' m',default:30}],
  draw(ctx,w,h,[height],t){
    bg(ctx,w,h)
    const m=500,g=9.8,PE=m*g*height
    const profile=[0,10,50,80,60,30,10,0].map((v,i)=>({x:20+i*45,y:h-40-v*1.2}))
    ctx.strokeStyle='#374151';ctx.lineWidth=3;ctx.beginPath()
    profile.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));ctx.stroke()
    const idx=Math.floor(((t*0.5)%(profile.length-1)))
    const p=profile[idx]
    ctx.font='18px sans-serif';ctx.textAlign='center';ctx.fillText('🎢',p.x,p.y-5)
    ctx.fillStyle=YELLOW;ctx.font='bold 13px monospace'
    ctx.fillText(`PE = mgh = ${(m*g*profile[idx] ? m*g*(h-40-p.y-h+40+20)/12 : 0).toFixed(0)}J`,w/2,25)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText(`Height=${height}m  PE=${PE.toFixed(0)}J`,w/2,48)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText('Higher = more PE = faster at bottom',w/2,h-16)
  }
}

export const conservationEnergy:ExploreConfig={
  hint:'Pendulum — total energy (KE+PE) always constant',
  controls:[{label:'Release angle',min:5,max:80,step:5,unit:'°',default:45}],
  draw(ctx,w,h,[ang],t){
    bg(ctx,w,h)
    const L=100,cx=w/2,cy=40,g=9.8
    const A=ang*Math.PI/180,omega=Math.sqrt(g/L)
    const theta=A*Math.cos(omega*t)
    const bx=cx+L*Math.sin(theta),by=cy+L*Math.cos(theta)
    ctx.strokeStyle='#475569';ctx.lineWidth=1.5
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(bx,by);ctx.stroke()
    ctx.fillStyle=ORANGE;ctx.beginPath();ctx.arc(bx,by,12,0,Math.PI*2);ctx.fill()
    const maxH=L*(1-Math.cos(A)),currH=L*(1-Math.cos(theta))
    const totalE=5*9.8*maxH,KE=5*9.8*(maxH-currH),PE=5*9.8*currH
    const bwid=w-80
    ctx.fillStyle='#1e293b';ctx.fillRect(40,h-45,bwid,12)
    ctx.fillStyle=GREEN;ctx.fillRect(40,h-45,bwid*(KE/Math.max(totalE,1)),12)
    ctx.fillStyle=YELLOW;ctx.fillRect(40+bwid*(KE/Math.max(totalE,1)),h-45,bwid*(PE/Math.max(totalE,1)),12)
    ctx.strokeStyle='#475569';ctx.lineWidth=1;ctx.strokeRect(40,h-45,bwid,12)
    ctx.fillStyle=GREEN;ctx.font='11px monospace';ctx.textAlign='center'
    ctx.fillText(`KE=${KE.toFixed(1)}J`,w*0.33,h-50)
    ctx.fillStyle=YELLOW;ctx.fillText(`PE=${PE.toFixed(1)}J`,w*0.67,h-50)
    ctx.fillStyle=CYAN;ctx.font='bold 11px monospace'
    ctx.fillText(`Total E = ${totalE.toFixed(1)}J (constant!)`,w/2,h-18)
  }
}

export const power:ExploreConfig={
  hint:'EV charging — power = energy per second',
  controls:[{label:'Charging rate',min:3,max:250,step:3,unit:' kW',default:50}],
  draw(ctx,w,h,[kw],t){
    bg(ctx,w,h)
    const pct=Math.min((t*kw/100)%110,100)
    ctx.fillStyle='#1e3a5f';ctx.fillRect(w/2-55,30,110,150);ctx.strokeStyle=CYAN;ctx.lineWidth=2;ctx.strokeRect(w/2-55,30,110,150)
    ctx.fillStyle='#0f2040';ctx.fillRect(w/2-45,40,90,120)
    ctx.fillStyle=kw>100?'#22c55e':kw>50?'#3b82f6':'#f97316'
    ctx.fillRect(w/2-45,40+120*(1-pct/100),90,120*pct/100)
    ctx.fillStyle='#e2e8f0';ctx.font='bold 18px monospace';ctx.textAlign='center'
    ctx.fillText(`${pct.toFixed(0)}%`,w/2,115)
    ctx.fillStyle=YELLOW;ctx.font='bold 13px monospace'
    ctx.fillText(`P = ${kw} kW`,w/2,h-40)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText(`100 kWh charged in ${(100/kw*60).toFixed(0)} min`,w/2,h-20)
  }
}

export const collisions:ExploreConfig={
  hint:'Car crash test — elastic vs inelastic collision',
  controls:[
    {label:'Type',min:0,max:1,step:1,unit:'',default:0},
    {label:'Speed',min:10,max:80,step:5,unit:' km/h',default:40},
  ],
  draw(ctx,w,h,[type,spd],t){
    bg(ctx,w,h)
    const elastic=Math.round(type)===0
    const tColl=1.5,phase=t%(tColl*2+1)
    let x1:number,x2:number,v1out:number,v2out:number
    if(elastic){v1out=0;v2out=spd}else{v1out=spd/2;v2out=spd/2}
    if(phase<tColl){x1=40+spd*phase*2;x2=280}
    else if(phase<tColl+0.15){x1=240;x2=260}
    else{x1=240-v1out*(phase-tColl)*2;x2=260+v2out*(phase-tColl)*2}
    ctx.font='26px sans-serif';ctx.textAlign='center'
    ctx.fillText('🚗',Math.max(30,Math.min(x1,w-30)),h/2)
    ctx.fillText('🚙',Math.max(30,Math.min(x2,w-30)),h/2)
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(elastic?'Elastic Collision':'Inelastic Collision',w/2,35)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`KE ${elastic?'conserved ✅':'lost as heat/sound ❌'}`,w/2,58)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText('Momentum always conserved ✅',w/2,h-16)
  }
}
