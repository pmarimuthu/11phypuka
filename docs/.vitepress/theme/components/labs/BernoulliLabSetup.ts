const W=480,H=280,GY=240,BR=12
const GX=420,GT=175,GB=239
const WX=248,WT=190,WW=38

export type Result='idle'|'flying'|'goal'|'wall'|'miss'

export function setup(
  cv:HTMLCanvasElement,
  getSpin:()=>number,
  onResult:(r:Result)=>void
){
  const c=cv.getContext('2d')!
  let bx=50,by=GY-BR-1,vx=0,vy=0,ang=0,res:Result='idle',rid=0,kicked=false

  const pent=(x:number,y:number,r:number)=>{
    c.beginPath()
    for(let i=0;i<5;i++){const a=i*Math.PI*2/5-Math.PI/2;i?c.lineTo(x+r*Math.cos(a),y+r*Math.sin(a)):c.moveTo(x+r*Math.cos(a),y+r*Math.sin(a))}
    c.closePath();c.fill()
  }

  const drawScene=()=>{
    c.clearRect(0,0,W,H)
    const g=c.createLinearGradient(0,0,0,GY);g.addColorStop(0,'#0f172a');g.addColorStop(1,'#1e3a6e')
    c.fillStyle=g;c.fillRect(0,0,W,GY);c.fillStyle='#166534';c.fillRect(0,GY,W,H-GY)
    c.strokeStyle='rgba(255,255,255,0.28)';c.lineWidth=1.5;c.beginPath();c.moveTo(0,GY);c.lineTo(W,GY);c.stroke()
    c.strokeStyle='rgba(255,255,255,0.16)';c.lineWidth=1
    for(let y=GT+6;y<GB;y+=8){c.beginPath();c.moveTo(GX,y);c.lineTo(GX+35,y);c.stroke()}
    for(let x=GX+7;x<=GX+34;x+=7){c.beginPath();c.moveTo(x,GT);c.lineTo(x,GB);c.stroke()}
    c.strokeStyle='#e5e7eb';c.lineWidth=3;c.strokeRect(GX,GT,35,GB-GT)
    c.fillStyle='#1d4ed8';c.fillRect(WX-WW/2,WT,WW,GB-WT)
    c.fillStyle='#fbbf24';c.fillRect(WX-WW/2,WT,WW,6)
    c.font='9px system-ui';c.textAlign='center'
    c.fillStyle='rgba(255,255,255,0.38)';c.fillText('FIFA WORLD CUP 2026 — FREE KICK SIMULATOR',W/2,13)
    c.fillStyle='rgba(255,255,255,0.55)';c.fillText('WALL',WX,WT-4);c.fillText('GOAL',GX+17,GT-4)
  }

  const drawPlayer=()=>{
    const px=28,py=GY
    c.save();c.strokeStyle='#fcd34d';c.fillStyle='#fcd34d';c.lineWidth=2.5;c.lineCap='round';c.lineJoin='round'
    c.beginPath();c.arc(px,py-50,6,0,Math.PI*2);c.fill()
    c.beginPath();c.moveTo(px,py-44);c.lineTo(px,py-25);c.stroke()
    if(res==='goal'){
      c.beginPath();c.moveTo(px,py-40);c.lineTo(px-12,py-53);c.stroke()
      c.beginPath();c.moveTo(px,py-40);c.lineTo(px+12,py-53);c.stroke()
      c.beginPath();c.moveTo(px,py-25);c.lineTo(px-5,py);c.moveTo(px,py-25);c.lineTo(px+5,py);c.stroke()
    } else if(kicked){
      c.beginPath();c.moveTo(px,py-40);c.lineTo(px-14,py-40);c.stroke()
      c.beginPath();c.moveTo(px,py-40);c.lineTo(px+14,py-40);c.stroke()
      c.beginPath();c.moveTo(px,py-25);c.lineTo(px-5,py);c.stroke()
      c.beginPath();c.moveTo(px,py-25);c.lineTo(px+10,py-12);c.lineTo(px+24,py-2);c.stroke()
    } else {
      c.beginPath();c.moveTo(px,py-40);c.lineTo(px-6,py-30);c.stroke()
      c.beginPath();c.moveTo(px,py-40);c.lineTo(px+6,py-30);c.stroke()
      c.beginPath();c.moveTo(px,py-25);c.lineTo(px-5,py);c.moveTo(px,py-25);c.lineTo(px+5,py);c.stroke()
    }
    c.restore()
  }

  const drawBall=()=>{
    if(res==='idle') return
    const spin=getSpin()
    if(Math.abs(spin)>0.4&&res==='flying'){
      const s=spin>0?-1:1
      const h=c.createRadialGradient(bx+s*11,by,1,bx,by,BR+13);h.addColorStop(0,'rgba(239,68,68,0.5)');h.addColorStop(1,'transparent')
      c.fillStyle=h;c.beginPath();c.arc(bx,by,BR+13,0,Math.PI*2);c.fill()
      const l=c.createRadialGradient(bx-s*11,by,1,bx,by,BR+13);l.addColorStop(0,'rgba(59,130,246,0.5)');l.addColorStop(1,'transparent')
      c.fillStyle=l;c.beginPath();c.arc(bx,by,BR+13,0,Math.PI*2);c.fill()
      c.font='8px system-ui';c.textAlign='center'
      c.fillStyle='#fca5a5';c.fillText('HIGH P',bx+s*25,by+3)
      c.fillStyle='#93c5fd';c.fillText('LOW P',bx-s*25,by+3)
    }
    c.fillStyle='#f1f5f9';c.strokeStyle='#0f172a';c.lineWidth=1.3
    c.beginPath();c.arc(bx,by,BR,0,Math.PI*2);c.fill();c.stroke()
    c.save();c.translate(bx,by);c.rotate(ang)
    c.fillStyle='#0f172a';pent(0,0,BR*0.38)
    c.fillStyle='#1e293b'
    for(let i=0;i<5;i++){const a=i*Math.PI*2/5;pent(Math.cos(a)*BR*0.74,Math.sin(a)*BR*0.74,BR*0.26)}
    c.fillStyle='rgba(203,213,225,0.35)'
    for(let i=0;i<5;i++){const a=i*Math.PI*2/5+Math.PI/5;pent(Math.cos(a)*BR*0.74,Math.sin(a)*BR*0.74,BR*0.22)}
    c.restore()
    if(res==='goal'){c.font='bold 26px system-ui';c.textAlign='center';c.fillStyle='#fbbf24';c.fillText('⚽ GOAL!',W/2,75);c.font='13px system-ui';c.fillStyle='#86efac';c.fillText('Magnus effect curved the ball over the wall!',W/2,96)}
    if(res==='wall'){c.font='bold 15px system-ui';c.textAlign='center';c.fillStyle='#f87171';c.fillText('Wall blocked! Increase spin (+) to lift the ball.',W/2,75)}
    if(res==='miss'){c.font='bold 15px system-ui';c.textAlign='center';c.fillStyle='#fb923c';c.fillText('Missed the goal — dial back the spin.',W/2,75)}
  }

  const loop=()=>{
    if(res==='flying'){
      const dt=1/60,spin=getSpin(),K=0.19,G=260
      vx+=(K*spin*vy)*dt;vy+=(-K*spin*vx+G)*dt
      bx+=vx*dt;by+=vy*dt;ang+=spin*9*dt
      if(bx>WX-WW/2-BR&&bx<WX+WW/2+BR&&by>WT-BR){res='wall';onResult('wall')}
      if(by>GY-BR&&res==='flying'){res='miss';onResult('miss')}
      if(bx>GX-BR&&by>GT&&by<GB&&res==='flying'){res='goal';onResult('goal')}
      if(bx>W&&res==='flying'){res='miss';onResult('miss')}
    }
    drawScene();drawPlayer();drawBall()
    rid=requestAnimationFrame(loop)
  }

  rid=requestAnimationFrame(loop)
  return {
    kick(){bx=50;by=GY-BR-1;vx=265;vy=-120;ang=0;res='flying';kicked=true;onResult('flying')},
    reset(){bx=50;by=GY-BR-1;vx=0;vy=0;ang=0;res='idle';kicked=false;onResult('idle')},
    stop(){cancelAnimationFrame(rid)}
  }
}
