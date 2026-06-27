import type { ExploreConfig } from './explore-types'
const BG='#0f172a';const DIM='#64748b'
const CYAN='#06b6d4';const GREEN='#22c55e';const RED='#ef4444';const YELLOW='#eab308';const ORANGE='#f97316'
function bg(ctx:CanvasRenderingContext2D,w:number,h:number){ctx.fillStyle=BG;ctx.fillRect(0,0,w,h)}

export const thermodynamicProcesses:ExploreConfig={
  hint:'Pressure cooker — see how P, V, T relate in different processes',
  controls:[{label:'Process',min:0,max:3,step:1,unit:'',default:0}],
  draw(ctx,w,h,[proc]){
    bg(ctx,w,h)
    const procs=[
      {name:'Isothermal (T=const)',col:CYAN,eq:'PV = const',ex:'Slow compression'},
      {name:'Isobaric (P=const)',col:GREEN,eq:'V/T = const',ex:'Heating at open end'},
      {name:'Isochoric (V=const)',col:ORANGE,eq:'P/T = const',ex:'Sealed pressure cooker'},
      {name:'Adiabatic (Q=0)',col:RED,eq:'PV^γ = const',ex:'Bicycle tyre pump'},
    ]
    const p=procs[Math.round(proc)%4]
    const gx=40,gy=h-50,gw=w-70,gh=h-80
    ctx.strokeStyle='#1e293b';ctx.lineWidth=1
    ctx.beginPath();ctx.moveTo(gx,gy-gh);ctx.lineTo(gx,gy);ctx.lineTo(gx+gw,gy);ctx.stroke()
    ctx.fillStyle=DIM;ctx.font='9px sans-serif';ctx.textAlign='left'
    ctx.fillText('P',gx-18,gy-gh+10);ctx.fillText('V',gx+gw,gy+12)
    ctx.strokeStyle=p.col;ctx.lineWidth=2.5;ctx.beginPath()
    const idx=Math.round(proc)
    for(let i=5;i<=95;i++){
      const vn=i/100,px2=gx+vn*gw
      let pn:number
      if(idx===0)pn=1/vn
      else if(idx===1)pn=0.5
      else if(idx===2)pn=vn*0
      else pn=Math.pow(0.5/vn,1.4)
      const py2=gy-Math.min(pn,2)*gh*0.4
      i===5?ctx.moveTo(px2,py2):ctx.lineTo(px2,py2)
    }
    ctx.stroke()
    ctx.fillStyle=p.col;ctx.font='bold 13px monospace';ctx.textAlign='center'
    ctx.fillText(p.name,w/2,22)
    ctx.fillStyle=YELLOW;ctx.font='11px monospace'
    ctx.fillText(p.eq,w/2,42)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText(p.ex,w/2,h-16)
  }
}

export const firstLaw:ExploreConfig={
  hint:'Bicycle pump — work done on gas heats it up',
  controls:[
    {label:'Heat added Q',min:-200,max:200,step:10,unit:' J',default:100},
    {label:'Work done W',min:0,max:200,step:10,unit:' J',default:50},
  ],
  draw(ctx,w,h,[Q,W]){
    bg(ctx,w,h)
    const dU=Q-W
    const cx=w/2,cy=h/2-10
    ctx.fillStyle='#1e293b';ctx.fillRect(cx-50,cy-40,100,80)
    ctx.strokeStyle=CYAN;ctx.lineWidth=2;ctx.strokeRect(cx-50,cy-40,100,80)
    ctx.font='24px sans-serif';ctx.textAlign='center';ctx.fillText('🎈',cx,cy+8)
    if(Q>0){ctx.fillStyle=RED;for(let i=0;i<3;i++)ctx.fillText('→',cx-80+i*10,cy+(i-1)*12)}
    if(W>0){ctx.fillStyle=GREEN;for(let i=0;i<2;i++)ctx.fillText('←',cx+60+i*8,cy+(i-0.5)*15)}
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(`ΔU = Q - W = ${dU} J`,cx,35)
    ctx.fillStyle=dU>0?ORANGE:CYAN;ctx.font='11px monospace'
    ctx.fillText(dU>0?'Gas heats up (internal E ↑)':'Gas cools down (internal E ↓)',cx,55)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText(`Q=${Q}J (heat)  W=${W}J (work by gas)`,cx,h-16)
  }
}

export const secondLaw:ExploreConfig={
  hint:'Ice cream melting — heat always flows hot → cold',
  controls:[{label:'Time',min:0,max:100,step:1,unit:'%',default:0}],
  draw(ctx,w,h,[pct],t){
    bg(ctx,w,h)
    const melt=pct/100
    const iceH=70*(1-melt)
    ctx.fillStyle='#e0f2fe';ctx.fillRect(w/2-30,h/2-30,60,70)
    ctx.fillStyle='#bae6fd';ctx.fillRect(w/2-30,h/2-30+iceH*(1-melt),60,iceH)
    ctx.fillStyle='#0284c7';ctx.fillRect(w/2-35,h/2+40,70,4+melt*20)
    ctx.font='22px sans-serif';ctx.textAlign='center';ctx.fillText('🍦',w/2,h/2+5)
    const n=6
    for(let i=0;i<n;i++){
      const a=i*Math.PI*2/n,r=55
      ctx.strokeStyle=`rgba(239,68,68,${0.2+melt*0.5})`;ctx.lineWidth=1
      ctx.beginPath();ctx.moveTo(w/2+40*Math.cos(a),h/2+40*Math.sin(a));ctx.lineTo(w/2+r*Math.cos(a),h/2+r*Math.sin(a));ctx.stroke()
    }
    ctx.fillStyle=YELLOW;ctx.font='bold 12px monospace'
    ctx.fillText(`Entropy: ${(melt*100).toFixed(0)}% melted`,w/2,30)
    ctx.fillStyle=RED;ctx.font='11px monospace'
    ctx.fillText('ΔS ≥ 0 — entropy always increases',w/2,h-16)
  }
}

export const heatEngine:ExploreConfig={
  hint:'Car engine cycle — heat in → work out → heat rejected',
  controls:[{label:'Hot temp TH',min:400,max:800,step:20,unit:' K',default:600}],
  draw(ctx,w,h,[TH]){
    bg(ctx,w,h)
    const TC=300,eff=(1-TC/TH)*100
    ctx.fillStyle='#7f1d1d';ctx.fillRect(40,30,120,50)
    ctx.fillStyle=RED;ctx.font='12px monospace';ctx.textAlign='center';ctx.fillText(`🔥 T_H=${TH}K`,100,60)
    ctx.fillStyle='#1e3a5f';ctx.fillRect(w-160,h-80,120,50)
    ctx.fillStyle=CYAN;ctx.font='12px monospace';ctx.fillText(`❄️ T_C=${TC}K`,w-100,h-52)
    ctx.fillStyle='#1e293b';ctx.fillRect(w/2-30,h/2-25,60,50)
    ctx.strokeStyle='#475569';ctx.lineWidth=2;ctx.strokeRect(w/2-30,h/2-25,60,50)
    ctx.fillStyle='#e2e8f0';ctx.font='11px monospace';ctx.fillText('ENGINE',w/2,h/2+5)
    ctx.strokeStyle=RED;ctx.lineWidth=2
    ctx.beginPath();ctx.moveTo(160,55);ctx.lineTo(w/2-30,h/2-5);ctx.stroke()
    ctx.strokeStyle=CYAN;ctx.beginPath();ctx.moveTo(w/2+30,h/2+5);ctx.lineTo(w-160,h-80);ctx.stroke()
    ctx.strokeStyle=GREEN;ctx.lineWidth=3
    ctx.beginPath();ctx.moveTo(w/2,h/2-25);ctx.lineTo(w/2,h/2-60);ctx.stroke()
    ctx.fillStyle=YELLOW;ctx.font='bold 13px monospace'
    ctx.fillText(`η = 1-T_C/T_H = ${eff.toFixed(1)}%`,w/2,h-20)
  }
}

export const carnotTheorem:ExploreConfig={
  hint:'Carnot efficiency — maximum possible efficiency for any heat engine',
  controls:[
    {label:'Hot temp',min:300,max:1000,step:20,unit:' K',default:600},
    {label:'Cold temp',min:200,max:400,step:10,unit:' K',default:300},
  ],
  draw(ctx,w,h,[TH,TC]){
    bg(ctx,w,h)
    const eff=TC>=TH?0:(1-TC/TH)*100
    const ang=-(eff/100)*Math.PI*1.4
    const cx=w/2,cy=h/2+10,r=70
    ctx.strokeStyle='#1e293b';ctx.lineWidth=15;ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI*0.7,Math.PI*0.7);ctx.stroke()
    ctx.strokeStyle=eff>60?RED:eff>30?YELLOW:GREEN;ctx.lineWidth=14;ctx.beginPath()
    ctx.arc(cx,cy,r,-Math.PI*0.7,-Math.PI*0.7+(eff/100)*Math.PI*1.4);ctx.stroke()
    ctx.fillStyle='#e2e8f0';ctx.font='bold 22px monospace';ctx.textAlign='center'
    ctx.fillText(`${eff.toFixed(0)}%`,cx,cy+8)
    ctx.fillStyle=YELLOW;ctx.font='12px monospace'
    ctx.fillText(`η_Carnot = 1 - ${TC}/${TH}`,w/2,h-35)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText('No real engine can beat Carnot efficiency',w/2,h-15)
  }
}
