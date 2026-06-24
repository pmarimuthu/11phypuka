---
description: "Kinetic energy KE = ½mv² for Class 11 Physics (NCERT). Work-energy theorem derivation and applications. JEE Main, KCET, Karnataka PU notes."
---

# Kinetic Energy & the Work–Energy Theorem

<ConceptMeta chapter="5" section="5.4" page="80–83" />

<Predict
  label="Double the speed"
  prompt="A car's speed doubles from 30 km/h to 60 km/h. By what factor does its kinetic energy change?"
  :options="[
    { text: '2× — speed doubles, energy doubles' },
    { text: '4× — energy goes as v²', correct: true },
    { text: '√2× — energy follows the square root' },
    { text: 'Depends on the car mass' }
  ]"
  reveal="KE = ½mv². Doubling v multiplies v² by 4, so KE quadruples. This is why highway collisions are so much more destructive than low-speed ones."
/>

::: idea
**Kinetic energy (KE)** is the energy an object has because it is moving. It is the work that was done on the object to bring it from rest to its current speed — and it is also the work the object can do before coming to rest.

The **Work–Energy Theorem** is the bridge between force and motion: the net work done on an object equals the change in its kinetic energy. No need to solve $F = ma$ for each instant — just track the total work and you know how the speed changed.

Because KE depends on $v^2$, doubling speed requires four times the energy, and stopping from twice the speed requires four times the braking distance — a fact that defines road safety speed limits.
:::

<ConceptHero type="kinetic-energy" />

::: formula
**Kinetic energy:**

$$KE = \frac{1}{2}mv^2$$

**Work–Energy Theorem** (net work = change in KE):

$$W_{\text{net}} = \Delta KE = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$$

Derivation sketch: from $F = ma$ and $v^2 = u^2 + 2as$, multiply both sides of Newton's second law by displacement $s$:

$$Fs = mas = m \cdot \frac{v^2 - u^2}{2} = \frac{1}{2}mv^2 - \frac{1}{2}mu^2$$

Symbols:
- $m$ — mass (kg)
- $v_f, v_i$ — final and initial speeds (m/s)
- $W_{\text{net}}$ — total work by all forces (J)
- $KE$ — kinetic energy (J)
:::

::: real
A cricket ball (0.16 kg) bowled at 140 km/h (≈ 39 m/s) has KE = ½ × 0.16 × 39² ≈ 122 J. The same ball at 70 km/h has KE ≈ 30 J — one quarter as much. The bowler does 122 J of work on the ball in the delivery stride (the arm is the "engine"). The batsman must do −122 J of work (bat provides an opposing force) to stop the ball — or redirect it over the boundary.
:::

::: try
Roll two identical balls off the edge of a table — one at twice the speed of the other (push the second one harder). Both drop the same height (same time of flight), but the faster ball lands four times further away horizontally. The horizontal distance is proportional to launch speed, but the kinetic energy is proportional to the square of that speed. The "extra" energy went into covering more horizontal ground.
:::

::: whatif
A car brakes to a stop. Where does its kinetic energy go? (Hint: friction between tyres and road — feel the brakes after a hard stop.) What does this tell you about regenerative braking in electric vehicles?
:::

<Quiz
  question="A 2 kg object moves at 3 m/s. Net work of 9 J is done on it. Its final speed is:"
  :options="[
    { text: '3 m/s' },
    { text: '√(18) ≈ 4.24 m/s' },
    { text: '√(18) — wait, let me recalculate' },
    { text: '√(18) m/s ≈ 4.24 m/s', correct: true }
  ]"
  explanation="Initial KE = ½×2×9 = 9 J. Final KE = 9 + 9 = 18 J. ½×2×v² = 18 → v² = 18 → v = √18 ≈ 4.24 m/s."
/>

::: notes
- $KE = \frac{1}{2}mv^2$; SI unit: joule (J); scalar, always ≥ 0.
- Work–Energy Theorem: $W_{\text{net}} = \Delta KE = KE_f - KE_i$
- Net work positive → KE increases (speeds up). Net work negative → KE decreases (slows down). Net work zero → constant speed.
- KE ∝ v²: doubling speed → 4× energy; braking distance ∝ v².
:::

::: refs
- [Kinetic Energy and Work–Energy Theorem — Khan Academy](https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/work-and-energy-part-2)
- [Work, Energy and Power — NCERT Chapter 5](https://ncert.nic.in/textbook/pdf/keph105.pdf)
- [Kinetic Energy — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/ke.html)
:::
