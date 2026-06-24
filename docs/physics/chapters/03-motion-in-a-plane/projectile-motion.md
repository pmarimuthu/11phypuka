---
description: "Projectile motion for Class 11 Physics — range, max height, time of flight formulae with interactive 3D demo. NCERT notes for JEE Main, KCET, Karnataka PU."
---

# Projectile Motion

<ConceptMeta chapter="3" section="3.8" page="56–60" />

<Predict
  label="Which lands first?"
  prompt="You fire a bullet horizontally and at the same instant drop a bullet from the same height. Which hits the ground first?"
  :options="[
    { text: 'The fired bullet — it is moving faster' },
    { text: 'The dropped bullet — it goes straight down' },
    { text: 'Both land at the same time', correct: true }
  ]"
  reveal="Both fall under the same gravitational acceleration. The fired bullet's horizontal motion doesn't affect how fast it falls — vertical and horizontal are independent. Both hit the ground simultaneously."
/>

::: idea
A **projectile** is anything launched into the air that moves under gravity alone (no engine, no air resistance). A cricket ball, a javelin, water from a fountain, a ball rolling off a table — all are projectiles once they leave the surface.

The key insight: **the horizontal and vertical motions are completely independent**.
- Horizontal: no force → constant velocity → uniform motion.
- Vertical: gravity pulls down → constant acceleration $g$ downward → same as free fall.

Put them together and the path is a **parabola**. The ball doesn't 'decide' to follow a curve — it simply goes right at constant speed while falling down with constant acceleration.
:::

<ConceptHero type="projectile-motion" />

::: formula
Launched from origin with speed $u$ at angle $\theta$ above horizontal:

**Velocity components:**

$$u_x = u\cos\theta \qquad u_y = u\sin\theta$$

**Position at time $t$:**

$$x = u_x t = u\cos\theta \cdot t$$
$$y = u_y t - \tfrac{1}{2}gt^2 = u\sin\theta \cdot t - \tfrac{1}{2}gt^2$$

**Path equation (eliminating $t$):**

$$y = x\tan\theta - \frac{g}{2u^2\cos^2\theta}\,x^2 \quad \text{(parabola)}$$

**Time of flight** (lands back at $y = 0$):

$$T = \frac{2u\sin\theta}{g}$$

**Maximum height:**

$$H = \frac{u^2\sin^2\theta}{2g}$$

**Range** (horizontal distance):

$$R = \frac{u^2\sin 2\theta}{g}$$

Maximum range at $\theta = 45°$: $R_{\max} = \dfrac{u^2}{g}$

Symbols: $u$ — initial speed (m/s), $\theta$ — launch angle, $g = 9.8\,\text{m/s}^2$
:::

::: real
A cricket fast bowler releases the ball at about 140 km/h (≈ 39 m/s). To hit the stumps 20 m away, the ball must be released at just the right angle — the bowler's arm and wrist unconsciously solve the projectile equations at match speed. Steph Curry uses the same physics shooting a basketball: launch angle and speed combine to set range and peak height. Engineers use it to design water-jet fountains so the arc looks beautiful and the water lands in the pond.
:::

::: try
Roll a marble off a table. It lands some distance from the base. Measure the table height $h$ and the horizontal distance $x$. Time of flight from free fall: $t = \sqrt{2h/g}$. Horizontal speed = $x/t$. You have measured the marble's launch speed using only a ruler and the projectile equations — no speed gun needed.
:::

::: whatif
On the Moon ($g = 1.6\,\text{m/s}^2$), you throw a ball at the same speed and angle as on Earth. How does the range change? What about maximum height? (Hint: both $R$ and $H$ have $g$ in the denominator.)
:::

<Quiz
  question="A ball is projected at 45° with speed u. Its maximum range is:"
  :options="[
    { text: '$u^2 / 2g$' },
    { text: '$u^2 / g$', correct: true },
    { text: '$2u^2 / g$' },
    { text: '$u^2 \\sin 45° / g$' }
  ]"
  explanation="R = u²sin2θ/g. At θ = 45°, sin 90° = 1, so R_max = u²/g."
/>

::: notes
- Horizontal: $x = u\cos\theta \cdot t$ (uniform velocity; no acceleration)
- Vertical: $y = u\sin\theta \cdot t - \frac{1}{2}gt^2$ (free fall downward)
- Time of flight: $T = 2u\sin\theta/g$
- Max height: $H = u^2\sin^2\theta/(2g)$
- Range: $R = u^2\sin2\theta/g$; maximum at $\theta = 45°$
- Complementary angles (e.g. 30° and 60°) give the same range.
- Path is a parabola.
:::

::: refs
- [Projectile Motion — Khan Academy](https://www.khanacademy.org/science/physics/two-dimensional-motion/projectile-motion/v/projectile-at-an-angle)
- [Motion in a Plane — NCERT Chapter 3](https://ncert.nic.in/textbook/pdf/keph103.pdf)
- [Projectile Motion — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/traj.html)
:::
