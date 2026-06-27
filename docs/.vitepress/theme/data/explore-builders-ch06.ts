import type { ExploreConfig } from './explore-types'
const BG='#0f172a';const DIM='#64748b'
const CYAN='#06b6d4';const GREEN='#22c55e';const RED='#ef4444';const YELLOW='#eab308';const ORANGE='#f97316'
function bg(ctx:CanvasRenderingContext2D,w:number,h:number){ctx.fillStyle=BG;ctx.fillRect(0,0,w,h)}
function arrow(ctx:CanvasRenderingContext2D,x1:number,y1:number,x2:number,y2:number,col:string){
  const a=Math.atan2(y2-y1,x2-x1)
  ctx.strokeStyle=col;ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke()
  ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(x2,y2);ctx.lineTo(x2-10*Math.cos(a-0.4),y2-10*Math.sin(a-0.4));ctx.lineTo(x2-10*Math.cos(a+0.4),y2-10*Math.sin(a+0.4));ctx.closePath();ctx.fill()
}

export const centreOfMass:ExploreConfig={
  hint:'Seesaw balance — COM shifts with mass ratio',
  controls:[
    {label:'Child A mass',min:20,max:80,step:5,unit:' kg',default:40},
    {label:'Child B mass',min:20,max:80,step:5,unit:' kg',default:40},
  ],
  draw(ctx,w,h,[mA,mB]){
    bg(ctx,w,h)
    const total=mA+mB,comX=40+(mA/total)*(w-80)
    const balance=Math.abs(mA-mB)<5
    const angle=balance?0:(mA>mB?-0.15:0.15)
    ctx.save();ctx.translate(w/2,h/2);ctx.rotate(angle)
    ctx.fillStyle='#475569';ctx.fillRect(-130,-8,260,16);
    ctx.fillStyle=CYAN;ctx.beginPath();ctx.arc(-100,0,18,0,Math.PI*2);ctx.fill()
    ctx.fillStyle=GREEN;ctx.beginPath();ctx.arc(100,0,18,0,Math.PI*2);ctx.fill()
    ctx.restore()
    ctx.fillStyle='#94a3b8';ctx.fillRect(w/2-8,h/2,16,30)
    ctx.fillStyle=CYAN;ctx.font='bold 11px monospace';ctx.textAlign='center'
    ctx.fillText(`A: ${mA}kg`,w*0.25,h-30)
    ctx.fillStyle=GREEN;ctx.fillText(`B: ${mB}kg`,w*0.75,h-30)
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(`COM from left: ${((mA/(mA+mB))*260+40).toFixed(0)}px`,w/2,h-12)
    ctx.fillStyle=balance?GREEN:ORANGE;ctx.font='11px monospace'
    ctx.fillText(balance?'✅ Balanced!':'↔ Imbalanced — COM not at pivot',w/2,30)
  }
}

export const torque:ExploreConfig={
  hint:'Door handle — same force, longer arm = more torque',
  controls:[
    {label:'Force',min:5,max:50,step:5,unit:' N',default:20},
    {label:'Distance from hinge',min:10,max:90,step:5,unit:' cm',default:70},
  ],
  draw(ctx,w,h,[F,d]){
    bg(ctx,w,h)
    const tau=F*(d/100)
    const doorX=w*0.3,doorW=20,doorH=130
    ctx.fillStyle='#78350f';ctx.fillRect(doorX,h/2-doorH/2,doorW,doorH)
    ctx.strokeStyle='#92400e';ctx.lineWidth=1.5;ctx.strokeRect(doorX,h/2-doorH/2,doorW,doorH)
    ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(doorX+doorW+d*1.5,h/2,6,0,Math.PI*2);ctx.fill()
    arrow(ctx,doorX+doorW+d*1.5,h/2-25,doorX+doorW+d*1.5,h/2-25+F*1.5,RED)
    ctx.strokeStyle=DIM;ctx.lineWidth=1;ctx.setLineDash([4,3])
    ctx.beginPath();ctx.moveTo(doorX+doorW,h/2);ctx.lineTo(doorX+doorW+d*1.5,h/2);ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle=DIM;ctx.font='11px monospace';ctx.textAlign='center'
    ctx.fillText(`r = ${d} cm`,doorX+doorW+d*0.75,h/2+16)
    ctx.fillStyle=YELLOW;ctx.font='bold 14px monospace'
    ctx.fillText(`τ = F×r = ${tau.toFixed(1)} N·m`,w/2,h-20)
    ctx.fillStyle=CYAN;ctx.font='10px sans-serif'
    ctx.fillText('Handle at edge → less effort to open door',w/2,h-38)
  }
}

export const angularMomentum:ExploreConfig={
  hint:'Ice skater spinning — arms in = faster rotation',
  controls:[{label:'Arms position',min:0,max:100,step:5,unit:'%',default:50}],
  draw(ctx,w,h,[armPos],t){
    bg(ctx,w,h)
    const armLen=10+armPos*0.8
    const I=1+armLen*0.05
    const omega=3/I
    const angle=t*omega
    const cx=w/2,cy=h/2
    ctx.fillStyle='#e2e8f0';ctx.beginPath();ctx.arc(cx,cy-armLen*0.3,12,0,Math.PI*2);ctx.fill()
    ctx.strokeStyle='#e2e8f0';ctx.lineWidth=4
    ctx.beginPath();ctx.moveTo(cx,cy-armLen*0.3+12);ctx.lineTo(cx,cy+15);ctx.stroke()
    const armAngle=angle+Math.PI/2
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+armLen*Math.cos(armAngle),cy+armLen*Math.sin(armAngle));ctx.stroke()
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx-armLen*Math.cos(armAngle),cy-armLen*Math.sin(armAngle));ctx.stroke()
    ctx.fillStyle=CYAN;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`ω = ${omega.toFixed(2)} rad/s`,w/2,h-40)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText(`L = Iω = ${(I*omega).toFixed(2)} kg·m²/s (conserved)`,w/2,h-20)
    ctx.fillStyle=YELLOW;ctx.font='10px sans-serif'
    ctx.fillText(`Arms ${armPos>50?'in → faster':'out → slower'}`,w/2,25)
  }
}

export const momentOfInertia:ExploreConfig={
  hint:'Bicycle wheel vs solid disc — same mass, different I',
  controls:[
    {label:'Mass distribution',min:0,max:100,step:10,unit:'%',default:80},
    {label:'Angular velocity',min:1,max:20,step:1,unit:' rad/s',default:5},
  ],
  draw(ctx,w,h,[rim,omega]){
    bg(ctx,w,h)
    const m=2,r=60
    const rimFrac=rim/100
    const I=m*r*r*rimFrac+m*r*r*0.5*(1-rimFrac)
    const KE=0.5*I*omega*omega
    const cx=w/2,cy=h/2
    const alpha=(Date.now()/1000)*omega%Math.PI*2
    ctx.strokeStyle='#475569';ctx.lineWidth=4;ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.stroke()
    const spokes=6
    for(let i=0;i<spokes;i++){
      const a=alpha+i*Math.PI*2/spokes
      const opacity=rimFrac
      ctx.strokeStyle=`rgba(148,163,184,${opacity})`
      ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));ctx.stroke()
    }
    if(rimFrac<0.5){ctx.fillStyle=`rgba(100,116,139,${1-rimFrac})`;ctx.beginPath();ctx.arc(cx,cy,r*0.8,0,Math.PI*2);ctx.fill()}
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`I = ${I.toFixed(2)} kg·m²`,w/2,h-40)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText(`KE_rot = ½Iω² = ${KE.toFixed(1)} J`,w/2,h-20)
    ctx.fillStyle=CYAN;ctx.font='10px sans-serif'
    ctx.fillText(rimFrac>0.6?'Mass at rim → harder to stop spinning':'Mass at centre → easier to spin',w/2,20)
  }
}

export const rollingMotion:ExploreConfig={
  hint:'Ball rolling down ramp — translation + rotation combined',
  controls:[{label:'Ramp angle',min:5,max:45,step:5,unit:'°',default:20}],
  draw(ctx,w,h,[ang],t){
    bg(ctx,w,h)
    const rad=ang*Math.PI/180,g=9.8
    const a=g*Math.sin(rad)*(5/7)
    const dist=0.5*a*(t%3)*(t%3)*60
    const bx=60+dist*Math.cos(rad),by=30+dist*Math.sin(rad)
    const rampEndX=60+200*Math.cos(rad),rampEndY=30+200*Math.sin(rad)
    ctx.strokeStyle='#475569';ctx.lineWidth=3
    ctx.beginPath();ctx.moveTo(60,30);ctx.lineTo(rampEndX,rampEndY);ctx.stroke()
    ctx.strokeStyle='#1e293b';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(rampEndX,rampEndY);ctx.lineTo(rampEndX,h-20);ctx.moveTo(60,h-20);ctx.lineTo(rampEndX,h-20);ctx.stroke()
    const R=15,cx2=Math.min(bx,rampEndX-20),cy2=Math.min(by+R,h-30)
    const spinA=dist/R
    ctx.fillStyle='#f97316';ctx.beginPath();ctx.arc(cx2,cy2,R,0,Math.PI*2);ctx.fill()
    ctx.strokeStyle='#fff';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(cx2,cy2);ctx.lineTo(cx2+R*Math.cos(spinA),cy2+R*Math.sin(spinA));ctx.stroke()
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`θ=${ang}°  a=${a.toFixed(2)}m/s²`,w/2,h-35)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText('KE_total = KE_trans + KE_rot',w/2,h-15)
  }
}
