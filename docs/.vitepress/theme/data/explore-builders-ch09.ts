import type { ExploreConfig } from './explore-types'
const BG='#0f172a';const DIM='#64748b'
const CYAN='#06b6d4';const GREEN='#22c55e';const YELLOW='#eab308'
function bg(ctx:CanvasRenderingContext2D,w:number,h:number){ctx.fillStyle=BG;ctx.fillRect(0,0,w,h)}

export const pressure:ExploreConfig={
  hint:'Tyre inflation — change area or force to see pressure change',
  controls:[
    {label:'Force',min:100,max:2000,step:100,unit:' N',default:500},
    {label:'Area',min:1,max:20,step:1,unit:' cm²',default:5},
  ],
  draw(ctx,w,h,[F,A]){
    bg(ctx,w,h)
    const P=F/(A*1e-4)
    const tyrePSI=P/6894.76
    ctx.fillStyle='#1a1a2e';ctx.ellipse?ctx.beginPath()&&ctx.ellipse(w/2,h/2,60,40,0,0,Math.PI*2)&&ctx.fill():0
    ctx.fillStyle='#1a1a2e';ctx.beginPath();ctx.ellipse(w/2,h/2,60,40,0,0,Math.PI*2);ctx.fill()
    ctx.strokeStyle=P>400000?'#ef4444':CYAN;ctx.lineWidth=3
    ctx.beginPath();ctx.ellipse(w/2,h/2,60,40,0,0,Math.PI*2);ctx.stroke()
    ctx.font='20px sans-serif';ctx.textAlign='center';ctx.fillText('🏎️',w/2,h/2+8)
    ctx.fillStyle=YELLOW;ctx.font='bold 13px monospace'
    ctx.fillText(`P = F/A = ${(P/1000).toFixed(1)} kPa`,w/2,35)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText(`≈ ${tyrePSI.toFixed(0)} PSI  (normal: 30–35 PSI)`,w/2,55)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText('Wider tyre → lower pressure on road',w/2,h-16)
  }
}

export const archimedes:ExploreConfig={
  hint:'Ship floating — buoyancy = weight of water displaced',
  controls:[{label:'Object density',min:100,max:2000,step:50,unit:' kg/m³',default:500}],
  draw(ctx,w,h,[rho]){
    bg(ctx,w,h)
    const rhoW=1000,floats=rho<rhoW
    const subFrac=floats?rho/rhoW:1
    const objH=60,wX=30,wW=w-60,wY=h-80,wH=70
    ctx.fillStyle='#0c4a6e';ctx.fillRect(wX,wY,wW,wH)
    ctx.fillStyle='#0ea5e9';ctx.font='24px sans-serif';ctx.textAlign='center'
    ctx.fillText(floats?'🚢':'⚓',w/2,wY-objH*(1-subFrac)+16)
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(`ρ_obj = ${rho} kg/m³  ρ_water = 1000`,w/2,30)
    ctx.fillStyle=floats?GREEN:'#ef4444';ctx.font='bold 13px monospace'
    ctx.fillText(floats?`Floats ✅ (${(subFrac*100).toFixed(0)}% submerged)`:'Sinks ❌',w/2,55)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`Buoyant force = ρ_water × g × V_displaced`,w/2,h-16)
  }
}

export const bernoulli:ExploreConfig={
  hint:'Airplane wing — faster air on top = lower pressure = lift',
  controls:[{label:'Airspeed',min:50,max:300,step:10,unit:' km/h',default:150}],
  draw(ctx,w,h,[spd]){
    bg(ctx,w,h)
    const lift=(spd/100)**2*500
    const wx=40,wy=h/2,ww=w-80
    ctx.fillStyle='#1e3a5f';ctx.beginPath();ctx.moveTo(wx,wy);ctx.quadraticCurveTo(wx+ww/2,wy-50,wx+ww,wy);ctx.quadraticCurveTo(wx+ww/2,wy+10,wx,wy);ctx.fill()
    const n=8
    for(let i=0;i<n;i++){
      const fx=wx+(i+0.5)*ww/n
      const tLen=20+spd/20
      ctx.strokeStyle=`rgba(6,182,212,${0.3+i/n*0.5})`;ctx.lineWidth=1.5
      ctx.beginPath();ctx.moveTo(fx-10,wy-30);ctx.lineTo(fx-10+tLen,wy-30);ctx.stroke()
      ctx.beginPath();ctx.moveTo(fx-10,wy+12);ctx.lineTo(fx-10+tLen*0.7,wy+12);ctx.stroke()
    }
    const liftH=Math.min(lift/50,60)
    ctx.fillStyle='rgba(34,197,94,0.5)';ctx.fillRect(w/2-40,wy-liftH-55,80,liftH)
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`v=${spd}km/h → Lift=${lift.toFixed(0)}N/m²`,w/2,25)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText('Top: faster v → lower P → lift generated',w/2,h-16)
  }
}

export const surfaceTension:ExploreConfig={
  hint:'Water droplet — surface tension keeps it spherical',
  controls:[{label:'Drop radius',min:1,max:10,step:0.5,unit:' mm',default:3}],
  draw(ctx,w,h,[r]){
    bg(ctx,w,h)
    const gamma=0.072,excess=2*gamma/(r/1000)
    const px=w/2,py=h/2,pr=r*15
    ctx.fillStyle='rgba(14,165,233,0.6)';ctx.beginPath();ctx.arc(px,py,pr,0,Math.PI*2);ctx.fill()
    ctx.strokeStyle=CYAN;ctx.lineWidth=2;ctx.beginPath();ctx.arc(px,py,pr,0,Math.PI*2);ctx.stroke()
    const n=12
    for(let i=0;i<n;i++){
      const a=i*Math.PI*2/n
      ctx.strokeStyle=`rgba(6,182,212,0.7)`;ctx.lineWidth=1.5
      ctx.beginPath();ctx.moveTo(px+pr*Math.cos(a),py+pr*Math.sin(a))
      ctx.lineTo(px+(pr+12)*Math.cos(a),py+(pr+12)*Math.sin(a));ctx.stroke()
    }
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`r=${r}mm  ΔP=${excess.toFixed(0)} Pa`,w/2,30)
    ctx.fillStyle=GREEN;ctx.font='11px monospace'
    ctx.fillText('ΔP = 2γ/r (excess pressure inside)',w/2,50)
    ctx.fillStyle='#64748b';ctx.font='10px sans-serif'
    ctx.fillText('γ(water) = 0.072 N/m',w/2,h-16)
  }
}

export const viscosity:ExploreConfig={
  hint:'Honey vs water — viscosity affects flow speed',
  controls:[{label:'Fluid',min:0,max:3,step:1,unit:'',default:0}],
  draw(ctx,w,h,[idx],t){
    bg(ctx,w,h)
    const fluids=[{name:'Water',eta:0.001,col:'#0ea5e9'},{name:'Oil',eta:0.1,col:'#f59e0b'},{name:'Honey',eta:2,col:'#d97706'},{name:'Glycerol',eta:1.5,col:'#a78bfa'}]
    const f=fluids[Math.round(idx)%4]
    const speed=0.02/f.eta
    const tube_h=60
    for(let layer=0;layer<8;layer++){
      const lv=speed*(1-(layer/8)**2)*200
      const ly=h/2-tube_h/2+layer*tube_h/8
      const lx=(t*lv*50)%w
      ctx.fillStyle=f.col;ctx.globalAlpha=0.3+layer*0.08
      ctx.beginPath();ctx.arc((lx)%w,ly,4,0,Math.PI*2);ctx.fill()
      ctx.beginPath();ctx.arc((lx+w/2)%w,ly,4,0,Math.PI*2);ctx.fill()
    }
    ctx.globalAlpha=1
    ctx.strokeStyle='#1e3a5f';ctx.lineWidth=2
    ctx.beginPath();ctx.moveTo(20,h/2-tube_h/2);ctx.lineTo(w-20,h/2-tube_h/2);ctx.stroke()
    ctx.beginPath();ctx.moveTo(20,h/2+tube_h/2);ctx.lineTo(w-20,h/2+tube_h/2);ctx.stroke()
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`${f.name}: η = ${f.eta} Pa·s`,w/2,30)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`Flow speed ∝ 1/η`,w/2,h-16)
  }
}
