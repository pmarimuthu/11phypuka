// AssemblyScript — SI Units particle physics
// Memory layout: particles array starts at offset 0
// Each particle: x(f32) y(f32) vx(f32) vy(f32) = 16 bytes
// N = 8 particles (one per SI prefix: f, p, n, µ, m, _, k, M)

const N: i32 = 8;
const PARTICLE_SIZE: i32 = 16; // bytes per particle (4 x f32)

// Radii for each prefix (log-scaled, pixels)
// f=4, p=5, n=6, µ=8, m=10, 1=13, k=17, M=22
@inline function radius(i: i32): f32 {
  if (i === 0) return 4.0;
  if (i === 1) return 5.0;
  if (i === 2) return 6.0;
  if (i === 3) return 8.0;
  if (i === 4) return 10.0;
  if (i === 5) return 13.0;
  if (i === 6) return 17.0;
  return 22.0;
}

// Accessors — base address 0
@inline function px(i: i32): f32 { return load<f32>(i * PARTICLE_SIZE + 0); }
@inline function py(i: i32): f32 { return load<f32>(i * PARTICLE_SIZE + 4); }
@inline function pvx(i: i32): f32 { return load<f32>(i * PARTICLE_SIZE + 8); }
@inline function pvy(i: i32): f32 { return load<f32>(i * PARTICLE_SIZE + 12); }

@inline function spx(i: i32, v: f32): void { store<f32>(i * PARTICLE_SIZE + 0, v); }
@inline function spy(i: i32, v: f32): void { store<f32>(i * PARTICLE_SIZE + 4, v); }
@inline function spvx(i: i32, v: f32): void { store<f32>(i * PARTICLE_SIZE + 8, v); }
@inline function spvy(i: i32, v: f32): void { store<f32>(i * PARTICLE_SIZE + 12, v); }

// Initialise positions + velocities (called once from JS)
export function init(W: f32, H: f32): void {
  // Spread evenly across width, mid-height, random-ish velocities
  const speeds: f32[] = [90, 75, 65, 55, 48, 40, 32, 25];
  const ys: f32[]     = [0.35, 0.60, 0.45, 0.70, 0.30, 0.55, 0.65, 0.40];
  for (let i: i32 = 0; i < N; i++) {
    spx(i,  (f32(i) + 0.8) * (W / f32(N)));
    spy(i,  H * ys[i]);
    // alternate direction
    const s = speeds[i];
    spvx(i, i % 2 === 0 ?  s : -s);
    spvy(i, i % 3 === 0 ? -s :  s);
  }
}

// Step physics by dt seconds (W, H = canvas dimensions)
export function step(dt: f32, W: f32, H: f32): void {
  for (let i: i32 = 0; i < N; i++) {
    const r = radius(i);
    let x  = px(i)  + pvx(i) * dt;
    let y  = py(i)  + pvy(i) * dt;
    let vx = pvx(i);
    let vy = pvy(i);

    // Wall bounce
    if (x - r < 0.0)  { x = r;     vx = -vx; }
    if (x + r > W)    { x = W - r;  vx = -vx; }
    if (y - r < 0.0)  { y = r;     vy = -vy; }
    if (y + r > H)    { y = H - r;  vy = -vy; }

    spx(i, x); spy(i, y); spvx(i, vx); spvy(i, vy);
  }
}

// Return x of particle i (JS reads positions for rendering)
export function getX(i: i32): f32 { return px(i); }
export function getY(i: i32): f32 { return py(i); }
export function getR(i: i32): f32 { return radius(i); }
export function count(): i32 { return N; }
