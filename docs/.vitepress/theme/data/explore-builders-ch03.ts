import type { ExploreConfig } from './explore-types'
const BG='#0f172a';const TEXT='#e2e8f0';const DIM='#64748b'
const CYAN='#06b6d4';const GREEN='#22c55e';const RED='#ef4444';const YELLOW='#eab308';const ORANGE='#f97316'
function bg(ctx:CanvasRenderingContext2D,w:number,h:number){ctx.fillStyle=BG;ctx.fillRect(0,0,w,h)}
function arrow(ctx:CanvasRenderingContext2D,x1:number,y1:number,x2:number,y2:number,col:string){
  ctx.strokeStyle=col;ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke()
  const a=Math.atan2(y2-y1,x2-x1)
  ctx.fillStyle=col;ctx.beginPath()
  ctx.moveTo(x2,y2);ctx.lineTo(x2-10*Math.cos(a-0.4),y2-10*Math.sin(a-0.4))
  ctx.lineTo(x2-10*Math.cos(a+0.4),y2-10*Math.sin(a+0.4));ctx.closePath();ctx.fill()
}

export const scalarsVectors:ExploreConfig={
  hint:'GPS navigation: speed is scalar, direction makes it velocity',
  controls:[{label:'Direction',min:0,max:360,step:15,unit:'°',default:45}],
  draw(ctx,w,h,[deg]){
    bg(ctx,w,h)
    const rad=deg*Math.PI/180,cx=w/2,cy=h/2,len=70
    ctx.fillStyle='#1e293b';ctx.beginPath();ctx.arc(cx,cy,80,0,Math.PI*2);ctx.fill()
    ctx.strokeStyle='#374151';ctx.lineWidth=1
    for(let a=0;a<360;a+=30){const r=a*Math.PI/180;ctx.beginPath();ctx.moveTo(cx+70*Math.cos(r),cy+70*Math.sin(r));ctx.lineTo(cx+80*Math.cos(r),cy+80*Math.sin(r));ctx.stroke()}
    ctx.fillStyle=DIM;ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText('N',cx,cy-90)
    arrow(ctx,cx,cy,cx+len*Math.cos(rad),cy+len*Math.sin(rad),CYAN)
    ctx.fillStyle=GREEN;ctx.font='bold 11px monospace'
    ctx.fillText(`v⃗ = 60 km/h @ ${deg}°`,cx,h-35)
    ctx.fillStyle=YELLOW;ctx.font='11px sans-serif'
    ctx.fillText('Speed: 60 km/h (scalar — no direction)',cx,h-16)
  }
}

export const vectorAddition:ExploreConfig={
  hint:'GPS rerouting: add two road vectors to get resultant path',
  controls:[
    {label:'Leg A angle',min:0,max:180,step:15,unit:'°',default:0},
    {label:'Leg B angle',min:0,max:180,step:15,unit:'°',default:60},
  ],
  draw(ctx,w,h,[aA,aB]){
    bg(ctx,w,h)
    const ox=80,oy=h/2,la=90,lb=80
    const rA=aA*Math.PI/180,rB=aB*Math.PI/180
    const Ax=la*Math.cos(rA),Ay=-la*Math.sin(rA)
    const Bx=lb*Math.cos(rB),By=-lb*Math.sin(rB)
    arrow(ctx,ox,oy,ox+Ax,oy+Ay,CYAN)
    arrow(ctx,ox+Ax,oy+Ay,ox+Ax+Bx,oy+Ay+By,GREEN)
    arrow(ctx,ox,oy,ox+Ax+Bx,oy+Ay+By,RED)
    ctx.fillStyle=CYAN;ctx.font='11px monospace';ctx.textAlign='left'
    ctx.fillText('A⃗ = Road 1',ox+Ax/2+5,oy+Ay/2)
    ctx.fillStyle=GREEN;ctx.fillText('B⃗ = Road 2',ox+Ax+Bx/2+5,oy+Ay+By/2)
    ctx.fillStyle=RED;ctx.fillText('R⃗ = A⃗+B⃗ (resultant)',ox+5,oy+Ay/2+By+20)
    const R=Math.sqrt((Ax+Bx)**2+(Ay+By)**2)
    ctx.fillStyle=YELLOW;ctx.font='bold 11px monospace';ctx.textAlign='center'
    ctx.fillText(`|R⃗| = ${(R*0.5).toFixed(0)} km`,w/2,h-15)
  }
}

export const vectorComponents:ExploreConfig={
  hint:'Free kick — ball launched at angle splits into Vx and Vy',
  controls:[{label:'Launch angle',min:10,max:80,step:5,unit:'°',default:45}],
  draw(ctx,w,h,[ang],t){
    bg(ctx,w,h)
    const rad=ang*Math.PI/180,v0=80,g=9.8
    const vx=v0*Math.cos(rad),vy=v0*Math.sin(rad)
    const tFlight=2*vy/g
    const sc=1.8
    const path:Array<[number,number]>=[]
    for(let i=0;i<=60;i++){const ti=i/60*tFlight;path.push([50+vx*ti*sc,(h-50)-vy*ti*sc*0.5+0.5*g*ti*ti*sc*0.5])}
    ctx.strokeStyle='#1e3a5f';ctx.lineWidth=1.5;ctx.setLineDash([4,3])
    ctx.beginPath();path.forEach(([px,py],i)=>i===0?ctx.moveTo(px,py):ctx.lineTo(px,py));ctx.stroke()
    ctx.setLineDash([])
    const tNow=(t%((tFlight+0.8)))*1
    const bx=50+vx*tNow*sc,by=(h-50)-vy*tNow*sc*0.5+0.5*g*tNow*tNow*sc*0.5
    if(by<=h-50){ctx.font='16px sans-serif';ctx.textAlign='center';ctx.fillText('⚽',bx,by+8)}
    arrow(ctx,50,h-50,50+vx*1.2,h-50,-CYAN) // Vx
    arrow(ctx,50,h-50,50,-vy*1.2+h-50,GREEN) // Vy
    ctx.fillStyle=CYAN;ctx.font='bold 11px monospace';ctx.textAlign='left'
    ctx.fillText(`Vx=${vx.toFixed(0)} m/s`,58,h-40)
    ctx.fillStyle=GREEN;ctx.fillText(`Vy=${vy.toFixed(0)} m/s`,58,h-60)
    ctx.fillStyle=YELLOW;ctx.font='11px monospace';ctx.textAlign='center'
    ctx.fillText(`θ=${ang}°  Range=${(vx*tFlight*sc).toFixed(0)}px`,w/2,25)
  }
}

export const unitVectors:ExploreConfig={
  hint:'Phone compass — unit vectors î, ĵ, k̂ show direction only',
  controls:[
    {label:'X component',min:-5,max:5,step:1,unit:'',default:3},
    {label:'Y component',min:-5,max:5,step:1,unit:'',default:4},
  ],
  draw(ctx,w,h,[cx,cy]){
    bg(ctx,w,h)
    const ox=w/2,oy=h/2,sc=20
    ctx.strokeStyle='#1e293b';ctx.lineWidth=1
    for(let i=-8;i<=8;i++){ctx.beginPath();ctx.moveTo(ox+i*sc,oy-h/2);ctx.lineTo(ox+i*sc,oy+h/2);ctx.stroke()}
    for(let j=-5;j<=5;j++){ctx.beginPath();ctx.moveTo(0,oy+j*sc);ctx.lineTo(w,oy+j*sc);ctx.stroke()}
    arrow(ctx,ox,oy,ox+sc,oy,RED);arrow(ctx,ox,oy,ox,oy-sc,GREEN)
    ctx.fillStyle=RED;ctx.font='bold 11px monospace';ctx.textAlign='left';ctx.fillText('î',ox+sc+4,oy+4)
    ctx.fillStyle=GREEN;ctx.fillText('ĵ',ox+4,oy-sc-4)
    arrow(ctx,ox,oy,ox+cx*sc,oy-cy*sc,CYAN)
    const mag=Math.sqrt(cx*cx+cy*cy)
    ctx.fillStyle=CYAN;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`v⃗ = ${cx}î + ${cy}ĵ  |v| = ${mag.toFixed(2)}`,w/2,h-20)
  }
}

export const relativeVelocity2d:ExploreConfig={
  hint:'Plane flying north with crosswind — find actual velocity',
  controls:[
    {label:'Plane speed (N)',min:100,max:600,step:20,unit:' km/h',default:400},
    {label:'Wind speed (E)',min:0,max:200,step:10,unit:' km/h',default:100},
  ],
  draw(ctx,w,h,[vp,vw]){
    bg(ctx,w,h)
    const sc=0.25,ox=w/2,oy=h-40
    arrow(ctx,ox,oy,ox,oy-vp*sc,GREEN)
    arrow(ctx,ox,oy,ox+vw*sc,oy,YELLOW)
    const rx=ox+vw*sc,ry=oy-vp*sc
    arrow(ctx,ox,oy,rx,ry,CYAN)
    ctx.fillStyle=GREEN;ctx.font='11px monospace';ctx.textAlign='right'
    ctx.fillText(`Plane: ${vp} km/h N`,ox-5,oy-vp*sc/2)
    ctx.fillStyle=YELLOW;ctx.textAlign='center'
    ctx.fillText(`Wind: ${vw} km/h E`,ox+vw*sc/2,oy+16)
    const vr=Math.sqrt(vp*vp+vw*vw),ang=Math.atan2(vw,vp)*180/Math.PI
    ctx.fillStyle=CYAN;ctx.font='bold 12px monospace'
    ctx.fillText(`Actual: ${vr.toFixed(0)} km/h at ${ang.toFixed(0)}° from N`,w/2,25)
  }
}

export const uniformCircularMotion:ExploreConfig={
  hint:'Car turning — constant speed but velocity direction always changes',
  controls:[{label:'Speed',min:10,max:100,step:5,unit:' km/h',default:40}],
  draw(ctx,w,h,[spd],t){
    bg(ctx,w,h)
    const cx=w/2,cy=h/2+10,R=70,omega=(spd/100)*2
    const angle=t*omega
    const bx=cx+R*Math.cos(angle),by=cy+R*Math.sin(angle)
    ctx.strokeStyle='#1e3a5f';ctx.lineWidth=2
    ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);ctx.stroke()
    const vlen=50,tang=angle+Math.PI/2
    arrow(ctx,bx,by,bx+vlen*Math.cos(tang),by+vlen*Math.sin(tang),CYAN)
    const acclen=35
    arrow(ctx,bx,by,cx+(bx-cx)*0.6,cy+(by-cy)*0.6,RED)
    ctx.font='18px sans-serif';ctx.textAlign='center';ctx.fillText('🚗',bx,by+8)
    ctx.fillStyle=CYAN;ctx.font='bold 11px monospace'
    ctx.fillText(`v = ${spd} km/h (tangential)`,w/2,h-35)
    ctx.fillStyle=RED;ctx.font='11px monospace'
    ctx.fillText(`Centripetal acc → centre`,w/2,h-16)
  }
}
