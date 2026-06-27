const W=480,H=280,MX=210
const WX1=120,WX2=310,WY=140

const ABOVE:number[][]= [[82,66],[96,80],[109,93],[120,105],[130,116]]
const BELOW:number[][]= [[154,160],[167,174],[181,187]]

export function setup(cv:HTMLCanvasElement, getSpeed:()=>number){
  const c=cv.getContext('2d')!
  let t=0,rid=0

  const wing=()=>{
    c.beginPath();c.moveTo(WX1,WY)
    c.bezierCurveTo(155,102,245,102,WX2,WY)
    c.bezierCurveTo(248,150,165,154,WX1,WY)
    c.closePath()
  }

  const streamline=(y0:number,ym:number,fast:boolean,sp:number,i:number)=>{
    const spd=fast?sp*2.4:sp*0.85
    const alpha=0.38+i*0.13
    c.strokeStyle=fast?`rgba(37,99,235,${alpha})`:`rgba(185,28,28,${alpha})`
    c.lineWidth=1.6;c.setLineDash([9,7]);c.lineDashOffset=-(t*spd)
    c.beginPath();c.moveTo(0,y0);c.quadraticCurveTo(MX,ym,W,y0);c.stroke()
    c.setLineDash([])
  }

  const liftArrow=(sp:number)=>{
    const len=sp*sp*82
    if(len<6) return
    const ax=MX+30,ay=WY-8
    c.strokeStyle='#15803d';c.fillStyle='#15803d';c.lineWidth=3
    c.beginPath();c.moveTo(ax,ay);c.lineTo(ax,ay-len);c.stroke()
    c.beginPath();c.moveTo(ax-7,ay-len+11);c.lineTo(ax,ay-len);c.lineTo(ax+7,ay-len+11);c.fill()
    c.font='bold 11px system-ui';c.fillStyle='#15803d';c.textAlign='left'
    c.fillText(`Lift ≈ ${(len*0.85).toFixed(0)} N`,ax+12,ay-len/2+4)
  }

  const draw=()=>{
    const sp=Math.max(0.05,getSpeed())
    c.clearRect(0,0,W,H)
    const bg=c.createLinearGradient(0,0,0,H)
    bg.addColorStop(0,'#dbeafe');bg.addColorStop(0.75,'#f0f9ff');bg.addColorStop(1,'#e2e8f0')
    c.fillStyle=bg;c.fillRect(0,0,W,H)
    c.fillStyle='#cbd5e1';c.fillRect(0,H-22,W,22)
    c.font='9px system-ui';c.fillStyle='#64748b';c.textAlign='center';c.fillText('GROUND',W/2,H-8)

    BELOW.forEach(([y0,ym],i)=>streamline(y0,ym,false,sp,i))

    c.save();c.translate(4,5);c.fillStyle='rgba(0,0,0,0.1)';wing();c.fill();c.restore()
    c.fillStyle='#1e293b';wing();c.fill()
    c.strokeStyle='#0f172a';c.lineWidth=1.5;wing();c.stroke()

    ABOVE.forEach(([y0,ym],i)=>streamline(y0,ym,true,sp,i))

    liftArrow(sp)

    c.textAlign='center'
    c.font='bold 10px system-ui';c.fillStyle='#1e40af'
    c.fillText('LOW PRESSURE  —  faster air',MX,58)
    c.font='10px system-ui';c.fillStyle='#2563eb'
    c.fillText(`v_top ≈ ${(sp*70+22).toFixed(0)} m/s`,MX,71)

    c.font='bold 10px system-ui';c.fillStyle='#991b1b'
    c.fillText('HIGH PRESSURE  —  slower air',MX,H-34)
    c.font='10px system-ui';c.fillStyle='#dc2626'
    c.fillText(`v_bottom ≈ ${(sp*24+16).toFixed(0)} m/s`,MX,H-22)

    c.font='italic 11px serif';c.fillStyle='#475569'
    c.fillText('p + ½ρv² = const  →  v ↑  means  p ↓',W/2,16)

    t+=sp*0.5
  }

  const loop=()=>{draw();rid=requestAnimationFrame(loop)}
  rid=requestAnimationFrame(loop)
  return {stop(){cancelAnimationFrame(rid)}}
}
