---
description: "Circular motion and centripetal force for Class 11 Physics (NCERT). Banking of roads, conical pendulum. JEE Main, JEE Advanced, KCET notes."
---

# Circular Motion

<ConceptMeta chapter="4" section="4.10" page="76–79" />

<Predict
  label="Which way does it go?"
  prompt="You swing a ball on a string and suddenly let go. Which way does it fly off?"
  :options="[
    { text: 'Straight along the tangent', correct: true },
    { text: 'Outward, away from the centre' },
    { text: 'Inward, toward the centre' }
  ]"
  reveal="Straight along the tangent — there was never an outward force; you only removed the inward pull."
/>

::: idea
To move in a circle, an object must constantly *change direction* — and changing direction is a change in velocity, which needs a force. That inward-pointing force is called **centripetal force**. It's not a new kind of force; it's whatever real force happens to point toward the centre (tension, gravity, friction).

There is no real outward "centrifugal" force — the outward feeling is just your inertia trying to go straight.
:::

<ConceptHero type="circular-motion" />

::: formula
**Centripetal acceleration** and **centripetal force**, both pointing toward the centre:

$$a = \frac{v^2}{r} \qquad\qquad F = \frac{m v^2}{r}$$

Symbols:
- $v$ — speed along the circle (m/s)
- $r$ — radius of the circle (m)
- $m$ — mass (kg)
- $F$ — net inward force needed (N)

Note the $v^2$: doubling the speed needs **four times** the force.
:::

::: real
On a curved road, the **friction** between tyres and road supplies the centripetal force. If you go too fast (or the road is wet, lowering friction), there isn't enough force and the car skids outward. That's why curves have speed limits, and why race tracks and highways **bank** (tilt) the curve so part of the normal force points inward and helps turn the car.
:::

::: try
Tie a small object to a string and swing it in a horizontal circle. Feel the steady inward pull you must apply through the string — that's the centripetal force. Now swing faster and feel the pull grow sharply (because of `v²`). Let go, and it flies off in a *straight* line (tangent), not outward — proof there was never an outward force.
:::

::: whatif
You swing a bucket of water in a vertical circle fast enough and the water doesn't fall out at the top. What is providing the centripetal force at the very top, and why must you keep a minimum speed? (Hint: gravity is already pointing toward the centre up there.)
:::

<Quiz
  question="A car rounds a curve. What actually provides the centripetal force keeping it on the road?"
  :options="[
    { text: 'An outward centrifugal force' },
    { text: 'Friction between the tyres and the road, pointing inward', correct: true },
    { text: 'The engine\'s forward thrust' },
    { text: 'Air pushing from outside the curve' }
  ]"
  explanation="The inward force comes from tyre–road friction (and the banking of the road). The 'outward' feeling is the passengers' inertia, not a real force."
/>

::: notes
- **Centripetal:** $a = \dfrac{v^2}{r}$, $F = \dfrac{mv^2}{r}$, directed to the centre.
- Centripetal force is a **role** played by tension / gravity / friction.
- No real 'centrifugal' force — it is an inertial effect.
- Key cases: banking of roads, minimum speed at the top of a vertical circle.
:::

::: refs
- [Centripetal Force — HyperPhysics, Georgia State (USA)](http://hyperphysics.phy-astr.gsu.edu/hbase/cf.html)
- [Newton's Laws of Dynamics — Feynman Lectures, Caltech (USA)](https://www.feynmanlectures.caltech.edu/I_09.html)
- [Classical Mechanics 8.01 — MIT OpenCourseWare (USA)](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)
:::
