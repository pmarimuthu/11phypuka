import type { ExploreConfig } from './explore-types'
const BG='#0f172a';const DIM='#64748b'
const CYAN='#06b6d4';const GREEN='#22c55e';const YELLOW='#eab308';const ORANGE='#f97316'
function bg(ctx:CanvasRenderingContext2D,w:number,h:number){ctx.fillStyle=BG;ctx.fillRect(0,0,w,h)}

export const universalLaw:ExploreConfig={
  hint:'Earth pulls Moon — change distance to see force change',
  controls:[{label:'Distance (×1000 km)',min:100,max:1000,step:50,unit:'',default:384}],
  draw(ctx,w,h,[d]){
    bg(ctx,w,h)
    const G=6.674e-11,M=5.97e24,m=7.34e22
    const dist=d*1e6,F=G*M*m/(dist*dist)
    const earthX=70,moonX=70+(d/1000)*(w-140),cy=h/2
    ctx.fillStyle='#1d4ed8';ctx.beginPath();ctx.arc(earthX,cy,22,0,Math.PI*2);ctx.fill()
    ctx.fillStyle='#94a3b8';ctx.beginPath();ctx.arc(moonX,cy,10,0,Math.PI*2);ctx.fill()
    ctx.font='10px sans-serif';ctx.fillStyle='#93c5fd';ctx.textAlign='center';ctx.fillText('🌍',earthX,cy+5)
    ctx.fillStyle='#cbd5e1';ctx.fillText('🌕',moonX,cy+5)
    ctx.strokeStyle=ORANGE;ctx.lineWidth=2*Math.min(5,1/(d/100));ctx.setLineDash([5,4])
    ctx.beginPath();ctx.moveTo(earthX+22,cy);ctx.lineTo(moonX-10,cy);ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle=YELLOW;ctx.font='bold 11px monospace'
    ctx.fillText(`F = GM₁M₂/r² = ${F.toExponential(2)} N`,w/2,h-35)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`r = ${d}×10³ km`,w/2,h-15)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText('Force ∝ 1/r² — doubles distance = ¼ force',w/2,22)
  }
}

export const gravitationalField:ExploreConfig={
  hint:'Compare gravity on different planets — same mass, different g',
  controls:[{label:'Planet',min:0,max:7,step:1,unit:'',default:2}],
  draw(ctx,w,h,[idx]){
    bg(ctx,w,h)
    const planets=[
      {name:'Mercury',g:3.7,col:'#94a3b8'},{name:'Venus',g:8.87,col:'#f97316'},
      {name:'Earth',g:9.8,col:'#3b82f6'},{name:'Mars',g:3.72,col:'#ef4444'},
      {name:'Jupiter',g:24.8,col:'#f59e0b'},{name:'Saturn',g:10.4,col:'#d97706'},
      {name:'Moon',g:1.62,col:'#e2e8f0'},{name:'Sun',g:274,col:'#fbbf24'},
    ]
    const p=planets[Math.round(idx)%8]
    const norm=p.g/9.8,barH=Math.min(norm*60,h-80)
    ctx.fillStyle=p.col;ctx.fillRect(w/2-30,h-50-barH,60,barH)
    ctx.fillStyle='#e2e8f0';ctx.font='bold 22px sans-serif';ctx.textAlign='center'
    ctx.fillText(p.name,w/2,40)
    ctx.fillStyle=YELLOW;ctx.font='bold 15px monospace'
    ctx.fillText(`g = ${p.g} m/s²`,w/2,70)
    const myW=60,fall=Math.min(norm*15,60)
    ctx.font='22px sans-serif';ctx.fillText('🏋️',w/2,h-55-barH-fall)
    ctx.fillStyle=CYAN;ctx.font='bold 12px monospace'
    ctx.fillText(`Weight of 60kg person: ${(60*p.g).toFixed(0)} N`,w/2,h-15)
  }
}

export const escapeVelocity:ExploreConfig={
  hint:'Rocket launch — must exceed escape velocity to leave Earth',
  controls:[{label:'Launch speed',min:1,max:15,step:0.5,unit:' km/s',default:5}],
  draw(ctx,w,h,[spd],t){
    bg(ctx,w,h)
    const ve=11.2,escapes=spd>=ve
    const ry=h-60-Math.min(spd*t*15,escapes?h:h*(spd/ve)*0.6)
    ctx.fillStyle='#1e3a5f';ctx.beginPath();ctx.arc(w/2,h-30,25,0,Math.PI*2);ctx.fill()
    ctx.fillStyle='#3b82f6';ctx.font='24px sans-serif';ctx.textAlign='center';ctx.fillText('🌍',w/2,h-22)
    const ry2=Math.max(20,ry)
    if(ry2>30){ctx.font='20px sans-serif';ctx.fillText('🚀',w/2,ry2)}
    ctx.strokeStyle=escapes?GREEN:'#ef4444';ctx.lineWidth=2;ctx.setLineDash([6,4])
    if(!escapes){ctx.beginPath();ctx.moveTo(w/2,h-55);ctx.quadraticCurveTo(w/2+40,ry-20,w/2,h-55);ctx.stroke()}
    ctx.setLineDash([])
    ctx.fillStyle=escapes?GREEN:'#ef4444';ctx.font='bold 13px monospace'
    ctx.fillText(escapes?'✅ Escaped Earth!':'❌ Falls back',w/2,30)
    ctx.fillStyle=YELLOW;ctx.font='11px monospace'
    ctx.fillText(`v = ${spd} km/s | v_esc = ${ve} km/s`,w/2,50)
  }
}

export const keplersLaws:ExploreConfig={
  hint:'Kepler\'s Laws — planet sweeps equal areas in equal times',
  controls:[{label:'Eccentricity',min:0,max:80,step:5,unit:'%',default:40}],
  draw(ctx,w,h,[ecc],t){
    bg(ctx,w,h)
    const e=ecc/100,a=100,b=a*Math.sqrt(1-e*e)
    const cx=w/2-e*a*0.5,cy=h/2
    ctx.strokeStyle='#1e3a5f';ctx.lineWidth=2;ctx.beginPath()
    ctx.ellipse(cx,cy,a,b,0,0,Math.PI*2);ctx.stroke()
    const sunX=cx+e*a,sunY=cy
    ctx.fillStyle=YELLOW;ctx.font='18px sans-serif';ctx.textAlign='center';ctx.fillText('☀️',sunX,sunY+8)
    const speed=1+e*Math.cos(t)
    const px=cx+a*Math.cos(t*speed*0.5)
    const py=cy+b*Math.sin(t*speed*0.5)
    ctx.fillStyle='#3b82f6';ctx.font='14px sans-serif';ctx.fillText('🪐',px,py+6)
    ctx.strokeStyle=CYAN+'44';ctx.lineWidth=1;ctx.beginPath()
    ctx.moveTo(sunX,sunY);ctx.lineTo(px,py);ctx.stroke()
    ctx.fillStyle=CYAN;ctx.font='bold 11px monospace'
    ctx.fillText('Kepler\'s 2nd: equal areas in equal time',w/2,h-35)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText(`Eccentricity e=${ecc}%  (0=circle)`,w/2,h-15)
  }
}

export const satellites:ExploreConfig={
  hint:'GPS satellite — orbital speed depends on altitude',
  controls:[{label:'Altitude',min:200,max:36000,step:200,unit:' km',default:400}],
  draw(ctx,w,h,[alt],t){
    bg(ctx,w,h)
    const G=6.674e-11,M=5.97e24,R=6371
    const r=(R+alt)*1e3,v=Math.sqrt(G*M/r),period=2*Math.PI*r/v/3600
    const cx=w/2,cy=h/2
    const orbitR=35+alt/800
    ctx.fillStyle='#1d4ed8';ctx.beginPath();ctx.arc(cx,cy,18,0,Math.PI*2);ctx.fill()
    ctx.font='14px sans-serif';ctx.textAlign='center';ctx.fillText('🌍',cx,cy+5)
    ctx.strokeStyle='#1e3a5f';ctx.lineWidth=1.5;ctx.beginPath()
    ctx.arc(cx,cy,orbitR,0,Math.PI*2);ctx.stroke()
    const angle=t*(3600/Math.max(period*3600,1))*0.5
    const sx=cx+orbitR*Math.cos(angle),sy=cy+orbitR*Math.sin(angle)
    ctx.font='12px sans-serif';ctx.fillText('🛰️',sx,sy+5)
    ctx.fillStyle=YELLOW;ctx.font='bold 11px monospace'
    ctx.fillText(`v = ${(v/1000).toFixed(2)} km/s`,w/2,h-40)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`T = ${period.toFixed(1)} hrs  Alt=${alt}km`,w/2,h-18)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText(alt>35500?'GEO (fixed in sky)':alt<600?'LEO (ISS orbit)':'MEO (GPS orbit)',w/2,22)
  }
}
