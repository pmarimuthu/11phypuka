---
description: "Work done by a force for Class 11 Physics — W = Fd cosθ, positive/negative/zero work. NCERT notes for JEE Main, KCET and Karnataka PU."
---

# Work

<ConceptMeta chapter="5" section="5.2–5.3" page="76–80" />

<Predict
  label="Does gravity do work?"
  prompt="A book slides off a table and falls to the floor. Does gravity do positive, negative, or zero work on the book?"
  :options="[
    { text: 'Positive — gravity pulls down and the book moves down', correct: true },
    { text: 'Negative — gravity opposes the fall' },
    { text: 'Zero — gravity is always vertical' }
  ]"
  reveal="Work is positive when force and displacement point in the same direction. Gravity points down; the book moves down — so W = mgh, positive."
/>

::: idea
In everyday language, 'work' means any effort. In physics it means something precise: **work is done by a force only when it causes displacement, and only the component of force along the displacement counts**.

Push a wall all day — no displacement, no work. Carry a heavy bag horizontally at constant speed — the force is upward (to hold the bag), displacement is horizontal, the angle between them is 90°, so the carrying force does zero work. Surprising but true.

Work can be **positive** (force and displacement in the same direction), **negative** (force opposes motion — friction, brakes), or **zero** (force perpendicular to motion — circular orbit, normal force).
:::

<ConceptHero type="work" />

::: formula
Work done by a constant force $\vec{F}$ over displacement $\vec{d}$:

$$W = \vec{F} \cdot \vec{d} = Fd\cos\theta$$

For a **variable force** (force changes with position), work is the area under the F–x graph:

$$W = \int_{x_i}^{x_f} F(x)\, dx$$

Symbols:
- $F$ — magnitude of force (N)
- $d$ — magnitude of displacement (m)
- $\theta$ — angle between $\vec{F}$ and $\vec{d}$
- $W$ — work (J = N·m = kg·m²·s⁻²)

**Sign rules:**
- $\theta < 90°$: $W > 0$ (force aids motion)
- $\theta = 90°$: $W = 0$ (force perpendicular to motion)
- $\theta > 90°$: $W < 0$ (force opposes motion)
:::

::: real
A crane lifts a 500 kg steel beam 20 m upward. The crane's cable force is 500 × 9.8 = 4900 N upward; displacement is 20 m upward; $\theta = 0°$. Work = 4900 × 20 = 98 000 J = 98 kJ. Simultaneously, gravity (4900 N downward) acts over 20 m upward — $\theta = 180°$, so gravity does −98 kJ. The beam gains no kinetic energy (it moves at constant speed), which is exactly what the zero net work predicts.
:::

::: try
Push a book across a table at constant speed. The push force does positive work; friction does negative work of the same magnitude — net work is zero, so speed stays constant (Work–Energy Theorem). Now push the same book but harder — it accelerates, meaning net work is positive, meaning kinetic energy increases. Feel the difference between the two pushes.
:::

::: whatif
An astronaut in space pushes a crate for 5 seconds and then lets go. After release, does the crate's kinetic energy keep increasing? (Hint: once the force is gone, what is the net work done on the crate?)
:::

<Quiz
  question="A force of 10 N acts on an object at 60° to its displacement of 5 m. The work done is:"
  :options="[
    { text: '50 J' },
    { text: '25 J', correct: true },
    { text: '43.3 J' },
    { text: '0 J' }
  ]"
  explanation="W = Fd cosθ = 10 × 5 × cos60° = 50 × 0.5 = 25 J."
/>

::: notes
- $W = Fd\cos\theta$ (constant force); $W = \int F\,dx$ (variable force)
- SI unit: **joule (J)** = N·m; work is a scalar.
- $\theta = 0°$: W = Fd (max positive). $\theta = 90°$: W = 0. $\theta = 180°$: W = –Fd (max negative).
- No displacement → no work, regardless of force.
- Force perpendicular to velocity → no work (speed unchanged): normal force, centripetal force.
:::

::: refs
- [Work — Khan Academy](https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy)
- [Work, Energy and Power — NCERT Chapter 5](https://ncert.nic.in/textbook/pdf/keph105.pdf)
- [Work — HyperPhysics, Georgia State](http://hyperphysics.phy-astr.gsu.edu/hbase/work.html)
:::
