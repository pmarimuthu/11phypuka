---
description: "Elastic and inelastic collisions for Class 11 Physics (NCERT). Momentum conservation, coefficient of restitution. JEE Main, JEE Advanced, KCET notes."
---

# Collisions

<ConceptMeta chapter="5" section="5.9" page="94–101" />

<Predict
  label="Clay vs steel"
  prompt="A clay ball and a steel ball of the same mass hit a wall at the same speed and both stop. Which collision is elastic?"
  :options="[
    { text: 'Clay — it sticks and stays' },
    { text: 'Steel — it bounces back', correct: true },
    { text: 'Both are equally elastic' },
    { text: 'Neither — both lose energy' }
  ]"
  reveal="In a perfectly elastic collision, kinetic energy is conserved and objects bounce back. The steel ball bounces (some KE returned), making it closer to elastic. The clay ball sticks — perfectly inelastic — all KE is lost to deformation and heat."
/>

::: idea
In every collision, **momentum is always conserved** (Newton's third law guarantees this). But **kinetic energy may or may not be conserved**.

**Elastic collision:** KE is conserved — the objects bounce off each other without any energy loss to heat, sound, or deformation. Ideal billiard balls, atomic-scale collisions.

**Inelastic collision:** KE is not conserved — some KE converts to heat, sound, or deformation. Most real-world collisions are inelastic. A **perfectly inelastic** collision is the most extreme case: the objects stick together and move as one, with maximum KE loss (but momentum is still conserved).

Key insight: you can have large KE loss with no change in momentum. These are independent conservation laws.
:::

<ConceptHero type="collisions" />

::: formula
**Conservation of momentum** (always):

$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$

**Elastic collision** (both momentum and KE conserved):

$$v_1 = \frac{(m_1 - m_2)u_1 + 2m_2 u_2}{m_1 + m_2}$$

$$v_2 = \frac{(m_2 - m_1)u_2 + 2m_1 u_1}{m_1 + m_2}$$

**Special elastic cases:**
- Equal masses: $v_1 = u_2$, $v_2 = u_1$ (velocities exchange — Newton's cradle)
- Heavy hits stationary light: heavy barely slows, light goes at ≈ 2× heavy's speed
- Light hits stationary heavy: light bounces back at ≈ same speed, heavy barely moves

**Perfectly inelastic** (objects stick together):

$$v_{\text{common}} = \frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}$$

**Coefficient of restitution** $e$:

$$e = \frac{\text{relative speed after}}{\text{relative speed before}} = \frac{v_2 - v_1}{u_1 - u_2}$$

$e = 1$: perfectly elastic. $e = 0$: perfectly inelastic.
:::

::: real
**Newton's cradle** is the classic demonstration of elastic collision with equal masses. Pull back one ball — only one ball on the other side flies out. The momentum and KE must both transfer: if two came out at half the speed, momentum would be conserved but KE would halve. Only one ball at the same speed satisfies both laws simultaneously. Similarly, a cue ball hitting a stationary billiard ball of equal mass stops dead — all motion transfers to the target ball.
:::

::: try
Stack two coins of different sizes (or a tennis ball on top of a basketball). Drop them together from waist height. The top coin flies up dramatically higher than expected — because the large ball bounces off the floor, and in the subsequent collision with the coin (treated as elastic), the small coin gets approximately twice the large ball's rebound speed. Try to predict the height using energy conservation.
:::

::: whatif
Two identical railway wagons approach each other at the same speed and collide perfectly inelastically. What is the final speed? What fraction of the kinetic energy is lost? (Hint: what does the total initial momentum equal when they move toward each other symmetrically?)
:::

<Quiz
  question="In a perfectly inelastic collision between equal masses where one is initially at rest:"
  :options="[
    { text: 'Both objects stop' },
    { text: 'The moving object stops; the target moves at the original speed' },
    { text: 'Both move together at half the original speed', correct: true },
    { text: 'Kinetic energy is conserved' }
  ]"
  explanation="v_common = m·u/(m+m) = u/2. KE_final = ½(2m)(u/2)² = ¼mu² = half the initial KE. Half the KE is lost."
/>

::: notes
- **Momentum always conserved** in any collision (Newton's 3rd law).
- **Elastic:** KE also conserved; $e = 1$; objects bounce.
- **Inelastic:** KE not conserved; $e < 1$; some KE → heat/deformation.
- **Perfectly inelastic:** objects stick; maximum KE loss; $e = 0$.
- Equal mass elastic: velocities exchange. Equal mass perfectly inelastic: both at $u/2$, half KE lost.
- Coefficient of restitution $e = \Delta v_{\text{after}} / \Delta v_{\text{before}}$.
:::

::: refs
- [Elastic and Inelastic Collisions — Khan Academy](https://www.khanacademy.org/science/physics/linear-momentum/elastic-and-inelastic-collisions/v/elastic-and-inelastic-collisions)
- [Work, Energy and Power — NCERT Chapter 5](https://ncert.nic.in/textbook/pdf/keph105.pdf)
- [Collisions — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/elacol.html)
:::
