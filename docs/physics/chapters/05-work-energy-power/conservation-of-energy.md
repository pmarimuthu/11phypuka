---
description: "Conservation of mechanical energy for Class 11 Physics — PE + KE = constant. NCERT notes with roller-coaster examples for JEE Main, KCET."
---

# Conservation of Mechanical Energy

<ConceptMeta chapter="5" section="5.7" page="88–92" />

<Predict
  label="At the bottom"
  prompt="A ball rolls down a frictionless hill from rest. At the bottom, compared to the top, its speed is determined by — "
  :options="[
    { text: 'The slope angle of the hill' },
    { text: 'Only the vertical height dropped', correct: true },
    { text: 'The length of the hill path' },
    { text: 'The ball mass' }
  ]"
  reveal="Because mechanical energy is conserved (frictionless), mgh = ½mv². The m cancels, so v = √(2gh). Only the height h matters — not the slope, path length, or mass."
/>

::: idea
**Conservation of mechanical energy:** in the absence of non-conservative forces (friction, air resistance), the total mechanical energy — kinetic plus potential — stays constant at every point of the motion.

Energy doesn't disappear; it transforms. At the top of a roller-coaster hill, you have maximum PE and minimum KE. At the bottom, minimum PE and maximum KE. The sum $KE + PE$ is the same at both points and at every point in between.

When friction is present, mechanical energy decreases — but the "lost" energy doesn't vanish. It converts to heat (thermal energy). Total energy (mechanical + thermal + all other forms) is always conserved. That is the deeper law.
:::

<ConceptHero type="conservation-of-energy" />

::: formula
**Conservation of mechanical energy** (no friction):

$$KE_i + PE_i = KE_f + PE_f$$

$$\frac{1}{2}mv_i^2 + mgh_i = \frac{1}{2}mv_f^2 + mgh_f$$

For a **spring–mass system** (horizontal, no friction):

$$\frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \text{constant}$$

Speed at height $h$ below the starting point (starting from rest):

$$v = \sqrt{2gh}$$

**With friction** (work done by friction $W_f < 0$):

$$KE_f + PE_f = KE_i + PE_i + W_f$$

(mechanical energy decreases by $|W_f|$, which goes to heat)
:::

::: real
A pendulum bob released from a height of 20 cm (at rest) swings down and rises to 20 cm on the other side — in a vacuum. In a real room, it rises to slightly less each swing because air resistance does negative work, converting mechanical energy to heat. A clock's escapement mechanism re-supplies exactly the energy lost per swing, keeping the pendulum going. Without that top-up, the pendulum would slow and stop over time. The conservation law tells you exactly how much energy the clock must supply each cycle.
:::

::: try
Hold a heavy book at shoulder height, then drop it onto a pillow. The pillow squashes (compresses) as the book pushes into it and finally stops. Energy accounting: the book started with gravitational PE = mgh. At the moment of impact it was all KE (½mv²). The pillow did negative work, removing that KE — it went into compressing the pillow (elastic PE + heat in the foam). Lift the book again and you have restored the gravitational PE. You did work equal to mgh. The cycle repeats.
:::

::: whatif
A ball is thrown upward at 20 m/s. Using energy conservation, find the maximum height without using any kinematic equation. Does the answer change if the ball is thrown at an angle instead of straight up?
:::

<Quiz
  question="A 1 kg ball falls freely from rest through 5 m. Its speed just before hitting the ground (g = 10 m/s²) is:"
  :options="[
    { text: '5 m/s' },
    { text: '10 m/s', correct: true },
    { text: '50 m/s' },
    { text: '√50 m/s' }
  ]"
  explanation="mgh = ½mv² → v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s. Mass cancels."
/>

::: notes
- Conservation: $KE + PE = $ constant (frictionless / conservative forces only).
- $v = \sqrt{2gh}$ for free fall from rest through height $h$; mass-independent.
- With friction: $\Delta(KE + PE) = W_{\text{friction}} < 0$ (energy lost to heat).
- Total energy (all forms) is always conserved — friction converts mechanical → thermal.
- Roller-coasters, pendulums, projectiles: all solved instantly with energy conservation.
:::

::: refs
- [Conservation of Energy — Khan Academy](https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/conservation-of-energy)
- [Work, Energy and Power — NCERT Chapter 5](https://ncert.nic.in/textbook/pdf/keph105.pdf)
- [Energy Conservation — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/conser.html)
:::
