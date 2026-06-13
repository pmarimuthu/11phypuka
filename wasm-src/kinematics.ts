// AssemblyScript - Chapter 2: Motion in a Straight Line
// Live kinematic graph plotter for vertical motion under constant gravity.
//
// Coordinates use classroom convention:
//   x = displacement from launch point, positive upward, in metres
//   v = velocity, positive upward, in m/s
//   a = -9.8 m/s^2 while the body is moving
//
const G: f32 = 9.8;
const MAX_HISTORY: i32 = 720;

let time: f32 = 0.0;
let x: f32 = 0.0;
let v: f32 = 0.0;
let a: f32 = -G;
let running: bool = false;
let len: i32 = 0;

let times = new StaticArray<f32>(MAX_HISTORY);
let positions = new StaticArray<f32>(MAX_HISTORY);
let velocities = new StaticArray<f32>(MAX_HISTORY);
let accelerations = new StaticArray<f32>(MAX_HISTORY);

@inline function clampDt(dt: f32): f32 {
  if (dt < 0.0) return 0.0;
  if (dt > 0.05) return 0.05;
  return dt;
}

function clearHistory(): void {
  len = 0;
}

function pushSample(): void {
  if (len >= MAX_HISTORY) {
    for (let i: i32 = 1; i < MAX_HISTORY; i++) {
      unchecked(times[i - 1] = times[i]);
      unchecked(positions[i - 1] = positions[i]);
      unchecked(velocities[i - 1] = velocities[i]);
      unchecked(accelerations[i - 1] = accelerations[i]);
    }
    len = MAX_HISTORY - 1;
  }

  unchecked(times[len] = time);
  unchecked(positions[len] = x);
  unchecked(velocities[len] = v);
  unchecked(accelerations[len] = a);
  len += 1;
}

function reset(u: f32): void {
  time = 0.0;
  x = 0.0;
  v = u;
  a = -G;
  running = true;
  clearHistory();
  pushSample();
}

// Start a vertical throw. Positive u throws upward; u = 0 acts like drop.
function throwMotion(u: f32): void {
  reset(u);
}

export { throwMotion as throw };

export function throwUp(u: f32): void {
  reset(u);
}

export function drop(): void {
  reset(0.0);
}

export function step(dt: f32): void {
  if (!running) return;

  const h = clampDt(dt);
  if (h <= 0.0) return;

  const nextV = v + a * h;
  const nextX = x + v * h + 0.5 * a * h * h;

  time += h;
  v = nextV;
  x = nextX;

  if (x <= 0.0 && time > 0.0 && v < 0.0) {
    x = 0.0;
    running = false;
  }

  pushSample();
}

export function getX(): f32 {
  return x;
}

export function getV(): f32 {
  return v;
}

export function getA(): f32 {
  return a;
}

export function getTime(): f32 {
  return time;
}

export function isRunning(): i32 {
  return running ? 1 : 0;
}

export function histLen(): i32 {
  return len;
}

export function histT(i: i32): f32 {
  if (i < 0 || i >= len) return 0.0;
  return unchecked(times[i]);
}

export function histX(i: i32): f32 {
  if (i < 0 || i >= len) return 0.0;
  return unchecked(positions[i]);
}

export function histV(i: i32): f32 {
  if (i < 0 || i >= len) return 0.0;
  return unchecked(velocities[i]);
}

export function histA(i: i32): f32 {
  if (i < 0 || i >= len) return 0.0;
  return unchecked(accelerations[i]);
}
