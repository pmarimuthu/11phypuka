import type { ExploreConfig } from './explore-types'
const BG='#0f172a';const DIM='#64748b'
const CYAN='#06b6d4';const GREEN='#22c55e';const RED='#ef4444';const YELLOW='#eab308';const ORANGE='#f97316'
function bg(ctx:CanvasRenderingContext2D,w:number,h:number){ctx.fillStyle=BG;ctx.fillRect(0,0,w,h)}

export const stressAndStrain:ExploreConfig={
  hint:'Metal rod stretched — see stress and strain increase with load',
  controls:[{label:'Applied force',min:0,max:100,step:5,unit:' kN',default:30}],
  draw(ctx,w,h,[F]){
    bg(ctx,w,h)
    const A=1e-4,E=200e9,L0=0.5
    const stress=F*1e3/A
    const strain=stress/E
    const dL=strain*L0*5e8
    const rodW=120+dL
    ctx.fillStyle='#475569';ctx.fillRect((w-rodW)/2,h/2-15,rodW,30)
    ctx.strokeStyle='#64748b';ctx.lineWidth=1;ctx.strokeRect((w-rodW)/2,h/2-15,rodW,30)
    ctx.fillStyle=stress>500e6?RED:stress>300e6?YELLOW:GREEN
    ctx.fillRect((w-rodW)/2,h/2-15,rodW,30)
    ctx.fillStyle='#e2e8f0';ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`σ = F/A = ${(stress/1e6).toFixed(1)} MPa`,w/2,35)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`ε = σ/E = ${(strain*1e6).toFixed(2)} μ`,w/2,55)
    ctx.fillStyle=YELLOW;ctx.font='11px monospace'
    ctx.fillText(`ΔL = ${(dL*1e9).toFixed(1)} nm  (exaggerated)`,w/2,75)
    ctx.fillStyle=stress>500e6?RED:DIM;ctx.font='10px sans-serif'
    ctx.fillText(stress>500e6?'⚠️ Exceeds yield strength!':'Steel rod, A=1cm²',w/2,h-16)
  }
}

export const hookesLaw:ExploreConfig={
  hint:'Bungee cord — stretch proportional to force (within limit)',
  controls:[{label:'Force',min:0,max:100,step:5,unit:' N',default:40}],
  draw(ctx,w,h,[F]){
    bg(ctx,w,h)
    const k=5,xl=F/k,maxX=20
    const elastic=xl<=maxX
    const springY=50,springH=80+xl*4
    ctx.strokeStyle='#475569';ctx.lineWidth=2
    ctx.beginPath();ctx.moveTo(w/2,springY)
    const coils=8
    for(let i=0;i<=coils*2;i++){const y=springY+i*springH/(coils*2);ctx.lineTo(w/2+(i%2===0?-20:20),y)}
    ctx.lineTo(w/2,springY+springH);ctx.stroke()
    ctx.fillStyle=elastic?ORANGE:RED;ctx.beginPath();ctx.arc(w/2,springY+springH+15,15,0,Math.PI*2);ctx.fill()
    ctx.fillStyle=elastic?GREEN:RED;ctx.font='bold 12px monospace';ctx.textAlign='center'
    ctx.fillText(`x = F/k = ${xl.toFixed(1)} cm`,w/2,h-40)
    ctx.fillStyle=elastic?CYAN:RED;ctx.font='11px monospace'
    ctx.fillText(elastic?`F = kx ✅ (k=${k} N/cm)`:'⚠️ Beyond elastic limit!',w/2,h-20)
  }
}

export const elasticModuli:ExploreConfig={
  hint:'Tyre rubber vs steel — compare Young\'s modulus',
  controls:[{label:'Material',min:0,max:3,step:1,unit:'',default:0}],
  draw(ctx,w,h,[idx]){
    bg(ctx,w,h)
    const mats=[
      {name:'Steel',E:200,col:'#94a3b8'},{name:'Aluminium',E:70,col:'#c0c0c0'},
      {name:'Rubber',E:0.01,col:'#1a1a1a'},{name:'Bone',E:20,col:'#fef3c7'},
    ]
    const m=mats[Math.round(idx)%4]
    const strain=0.001,stress=m.E*1e9*strain
    const barH=Math.min(m.E*0.6,130)
    ctx.fillStyle=m.col;ctx.fillRect(w/2-25,h-60-barH,50,barH)
    ctx.strokeStyle='#475569';ctx.lineWidth=1;ctx.strokeRect(w/2-25,h-60-barH,50,barH)
    ctx.fillStyle='#e2e8f0';ctx.font='bold 14px monospace';ctx.textAlign='center'
    ctx.fillText(m.name,w/2,35)
    ctx.fillStyle=YELLOW;ctx.font='bold 13px monospace'
    ctx.fillText(`Y = ${m.E} GPa`,w/2,58)
    ctx.fillStyle=CYAN;ctx.font='11px monospace'
    ctx.fillText(`Stress for ε=0.1%: ${(stress/1e6).toFixed(1)} MPa`,w/2,80)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText('Higher Y = stiffer material',w/2,h-16)
  }
}

export const stressStrainCurve:ExploreConfig={
  hint:'Stress-strain curve — elastic → yield → plastic → fracture',
  controls:[{label:'Applied strain',min:0,max:100,step:1,unit:'%',default:20}],
  draw(ctx,w,h,[pct]){
    bg(ctx,w,h)
    const gx=40,gy=h-40,gw=w-70,gh=h-70
    ctx.strokeStyle='#1e293b';ctx.lineWidth=1
    ctx.beginPath();ctx.moveTo(gx,gy-gh);ctx.lineTo(gx,gy);ctx.lineTo(gx+gw,gy);ctx.stroke()
    ctx.fillStyle='#475569';ctx.font='10px sans-serif';ctx.textAlign='center'
    ctx.fillText('Strain →',gx+gw/2,h-12);ctx.save();ctx.translate(12,gy-gh/2);ctx.rotate(-Math.PI/2);ctx.fillText('Stress ↑',0,0);ctx.restore()
    const pts:Array<[number,number]>=[[0,0],[30,90],[40,95],[60,90],[80,95],[100,70]]
    ctx.strokeStyle=CYAN;ctx.lineWidth=2;ctx.beginPath()
    pts.forEach(([sx,sy],i)=>{const px=gx+sx/100*gw,py=gy-sy/100*gh;i===0?ctx.moveTo(px,py):ctx.lineTo(px,py)})
    ctx.stroke()
    const stPct=pct/100
    let si=0;for(let i=1;i<pts.length;i++){if(pts[i][0]/100<stPct)si=i}
    const [sx,sy]=pts[Math.min(si,pts.length-1)]
    const px=gx+sx/100*gw,py=gy-sy/100*gh
    ctx.fillStyle=RED;ctx.beginPath();ctx.arc(px,py,6,0,Math.PI*2);ctx.fill()
    const regions=['Elastic','Elastic','Yield point','Plastic','Work hardening','Fracture']
    ctx.fillStyle=YELLOW;ctx.font='bold 11px monospace'
    ctx.fillText(`Region: ${regions[si]}`,w/2,22)
  }
}

export const applicationsElasticity:ExploreConfig={
  hint:'Bridge design — springs in parallel increase load capacity',
  controls:[{label:'Number of cables',min:1,max:8,step:1,unit:'',default:4}],
  draw(ctx,w,h,[n]){
    bg(ctx,w,h)
    const k=10,kEff=n*k,F=100,x=F/kEff
    const bW=200
    ctx.fillStyle='#374151';ctx.fillRect(w/2-bW/2,h/2+20,bW,15)
    const step=bW/(n+1)
    for(let i=1;i<=n;i++){
      const cx=w/2-bW/2+i*step
      ctx.strokeStyle=CYAN;ctx.lineWidth=2;ctx.beginPath()
      for(let j=0;j<=10;j++){ctx.lineTo(cx+(j%2===0?-8:8),h/2+20-j*8)}
      ctx.stroke()
      ctx.fillStyle='#1e3a5f';ctx.fillRect(cx-2,h/2-60,4,10)
    }
    ctx.fillStyle=YELLOW;ctx.font='bold 13px monospace';ctx.textAlign='center'
    ctx.fillText(`${n} cable${n>1?'s':''}: k_eff = ${kEff} kN/m`,w/2,35)
    ctx.fillStyle=GREEN;ctx.font='12px monospace'
    ctx.fillText(`Sag = F/k_eff = ${x.toFixed(2)} m`,w/2,55)
    ctx.fillStyle=DIM;ctx.font='10px sans-serif'
    ctx.fillText('More cables = stiffer bridge = less sag',w/2,h-16)
  }
}
