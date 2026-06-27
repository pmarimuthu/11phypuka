import type { ExploreConfig } from './explore-types'
const BG='#0f172a';const DIM='#64748b'
const CYAN='#06b6d4';const GREEN='#22c55e';const RED='#ef4444';const YELLOW='#eab308';const ORANGE='#f97316'
function bg(ctx:CanvasRenderingContext2D,w:number,h:number){ctx.fillStyle=BG;ctx.fillRect(0,0,w,h)}

export const temperatureHeat:ExploreConfig={
  hint:'Cup of tea cooling — temperature vs heat are different!',
  controls:[{label:'Temp (°C)',min:0,max:100,step:5,unit:'°C',default:90}],
  draw(ctx,w,h,[T]){
    bg(ctx,w,h)
    const K=T+273.15,col=T>60?'#ef4444':T>30?ORANGE:CYAN
    ctx.fillStyle='#1e293b';ctx.fillRect(w/2-40,h/2-50,80,90);ctx.strokeStyle='#374151';ctx.lineWidth=2;ctx.strokeRect(w/2-40,h/2-50,80,90)
    ctx.fillStyle=col;ctx.fillRect(w/2-36,h/2-46+86*(1-T/100),76,86*T/100)
    ctx.font='20px sans-serif';ctx.textAlign='center';ctx.fillText('☕',w/2,h/2+16)
    ctx.fillStyle='#e2e8f0';ctx.font='bold 14px monospace'
    ctx.fillText(`T = ${T}°C = ${K.toFixed(1)} K`,w/2,35)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`m=0.25kg  c=4180 J/kg·K`,w/2,55)
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(`Q to cool to 25°C = ${(0.25*4180*(T-25)).toFixed(0)} J`,w/2,h-20)
  }
}

export const thermalExpansion:ExploreConfig={
  hint:'Railway track gap — metal expands in summer heat',
  controls:[{label:'Temperature rise',min:0,max:50,step:2,unit:'°C',default:20}],
  draw(ctx,w,h,[dT]){
    bg(ctx,w,h)
    const alpha=12e-6,L0=30,dL=alpha*L0*dT*1e6
    const gap=dL>15?0:15-dL
    const trackW=(w-80)/2
    ctx.fillStyle='#64748b';ctx.fillRect(30,h/2-10,trackW-gap/2,20)
    ctx.fillRect(30+trackW+gap,h/2-10,trackW,20)
    ctx.strokeStyle='#475569';ctx.lineWidth=1;ctx.strokeRect(30,h/2-10,trackW-gap/2,20)
    ctx.strokeRect(30+trackW+gap,h/2-10,trackW,20)
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`ΔL = α L₀ ΔT = ${dL.toFixed(2)} mm`,w/2,35)
    ctx.fillStyle=gap>0?GREEN:RED;ctx.font='11px monospace'
    ctx.fillText(gap>0?`Gap remaining: ${gap.toFixed(1)} mm ✅`:'Gap closed — buckling risk! ⚠️',w/2,58)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`α_steel = 12×10⁻⁶ /°C  ΔT=${dT}°C`,w/2,h-16)
  }
}

export const calorimetry:ExploreConfig={
  hint:'Mixing hot chai and cold milk — find final temperature',
  controls:[
    {label:'Hot liquid temp',min:50,max:100,step:5,unit:'°C',default:90},
    {label:'Cold liquid mass',min:50,max:200,step:10,unit:' g',default:100},
  ],
  draw(ctx,w,h,[Th,mc]){
    bg(ctx,w,h)
    const mh=200,c=4180,Tc=5
    const Tf=(mh*c*Th+mc*c*Tc)/((mh+mc)*c)
    const col=`hsl(${210-Tf*1.5},80%,50%)`
    ctx.fillStyle='#7c3aed';ctx.fillRect(40,h/2-50,90,80)
    ctx.fillStyle='#0ea5e9';ctx.fillRect(w-130,h/2-50,90,80)
    ctx.font='24px sans-serif';ctx.textAlign='center'
    ctx.fillText('☕',85,h/2+8);ctx.fillText('🥛',w-85,h/2+8)
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(`Hot: ${mh}g @ ${Th}°C`,w*0.25,35)
    ctx.fillStyle=CYAN
    ctx.fillText(`Cold: ${mc}g @ ${Tc}°C`,w*0.75,35)
    ctx.fillStyle=col;ctx.font='bold 15px monospace'
    ctx.fillText(`T_final = ${Tf.toFixed(1)}°C`,w/2,h-20)
  }
}

export const heatTransfer:ExploreConfig={
  hint:'Metal spoon in hot soup — conduction, convection, radiation',
  controls:[{label:'Mode',min:0,max:2,step:1,unit:'',default:0}],
  draw(ctx,w,h,[mode],t){
    bg(ctx,w,h)
    const modes=[
      {name:'Conduction',desc:'Heat flows through material',col:'#f97316'},
      {name:'Convection',desc:'Heat flows via fluid movement',col:'#06b6d4'},
      {name:'Radiation',desc:'Heat emitted as IR waves',col:'#ef4444'},
    ]
    const m=modes[Math.round(mode)%3]
    ctx.fillStyle='#1e293b';ctx.fillRect(w/2-30,h/2-60,60,80)
    ctx.fillStyle=m.col;ctx.fillRect(w/2-28,h/2-58,56,Math.min(t*8,76))
    ctx.font='22px sans-serif';ctx.textAlign='center';ctx.fillText('🥄',w/2,h/2+16)
    if(Math.round(mode)===2){
      for(let i=0;i<6;i++){const a=i*Math.PI/3,r=40+10*Math.sin(t*3+i)
        ctx.strokeStyle=`rgba(239,68,68,${0.3+0.4*Math.sin(t*3+i)})`;ctx.lineWidth=1.5
        ctx.beginPath();ctx.moveTo(w/2+30*Math.cos(a),h/2+30*Math.sin(a));ctx.lineTo(w/2+r*Math.cos(a),h/2+r*Math.sin(a));ctx.stroke()}
    }
    ctx.fillStyle=m.col;ctx.font='bold 14px monospace'
    ctx.fillText(m.name,w/2,30)
    ctx.fillStyle=DIM;ctx.font='11px sans-serif'
    ctx.fillText(m.desc,w/2,50)
  }
}

export const newtonsCooling:ExploreConfig={
  hint:'Hot chai cooling — Newton\'s law: rate ∝ temp difference',
  controls:[{label:'Initial temp',min:50,max:100,step:5,unit:'°C',default:90}],
  draw(ctx,w,h,[T0]){
    bg(ctx,w,h)
    const Tamb=25,k=0.05
    const gx=40,gy=h-40,gw=w-70,gh=h-70
    ctx.strokeStyle='#1e293b';ctx.lineWidth=1
    ctx.beginPath();ctx.moveTo(gx,gy-gh);ctx.lineTo(gx,gy);ctx.lineTo(gx+gw,gy);ctx.stroke()
    ctx.strokeStyle=ORANGE;ctx.lineWidth=2;ctx.beginPath()
    for(let i=0;i<=100;i++){
      const tx=i/10,T=Tamb+(T0-Tamb)*Math.exp(-k*tx)
      const px=gx+i*gw/100,py=gy-(T-Tamb)/(T0-Tamb)*gh*0.85
      i===0?ctx.moveTo(px,py):ctx.lineTo(px,py)
    }
    ctx.stroke()
    ctx.strokeStyle='#1e3a5f';ctx.lineWidth=1;ctx.setLineDash([4,4])
    ctx.beginPath();ctx.moveTo(gx,gy-0);ctx.lineTo(gx+gw,gy);ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle=YELLOW;ctx.font='bold 11px monospace';ctx.textAlign='center'
    ctx.fillText(`T(t) = ${Tamb} + (${T0}-${Tamb})·e^{-kt}`,w/2,22)
    ctx.fillStyle=CYAN;ctx.font='10px sans-serif'
    ctx.fillText(`Reaches ${(Tamb+(T0-Tamb)*0.37).toFixed(0)}°C in ${(1/k).toFixed(0)}s`,w/2,h-16)
  }
}
