---
description: "Equilibrium of a particle for Class 11 Physics — concurrent forces and Lami's theorem. NCERT notes for JEE Main, KCET and Karnataka PU."
---

# Equilibrium of a Particle

<ConceptMeta chapter="4" section="4.9" page="69–71" />

<Predict
  label="How big is the tension?"
  prompt="A heavy sign hangs from two almost-horizontal (flat) wires. The tension in each wire is…"
  :options="[
    { text: 'Very large', correct: true },
    { text: 'Very small' },
    { text: 'Exactly half the weight' }
  ]"
  reveal="Very large — the flatter the wires, the more tension is needed to hold up the same weight."
/>

::: idea
A particle is in **equilibrium** when all the forces on it add up to zero. It then either stays at rest or moves at constant velocity (this is just the First Law in action).

For forces in a plane, the sideways pushes must cancel *and* the up-down pushes must cancel — separately.
:::

<ConceptHero type="equilibrium" />

::: formula
**The net force is zero in every direction:**

$$\sum F_x = 0 \qquad\qquad \sum F_y = 0$$

Symbols:
- $\sum$ — "sum of"
- $F_x$ — horizontal components of all forces (N)
- $F_y$ — vertical components of all forces (N)

If three forces keep a particle in equilibrium, they form a closed triangle.
:::

::: real
A street lamp or a sign hung from two cables stays still because the two cable tensions and the weight balance perfectly. The steeper the cables, the more of their pull goes into holding the weight up — which is why nearly-horizontal cables must be enormously tight.
:::

::: try
Hang a water bottle from the middle of a string held by two hands. Now slowly pull your hands apart so the string becomes almost straight. Feel how much harder you must pull as the string flattens — even though the weight never changed. That's equilibrium math you can feel in your arms.
:::

::: whatif
Why can a tightrope never be pulled perfectly horizontal, no matter how strong the rope or how hard it's tensioned? (Think about what holds up the walker's weight when the rope has no vertical slope.)
:::

<Quiz
  question="A picture hangs still from two symmetric wires. As the wires are made more horizontal (flatter), the tension in each wire:"
  :options="[
    { text: 'Decreases' },
    { text: 'Stays the same' },
    { text: 'Increases', correct: true },
    { text: 'Becomes zero' }
  ]"
  explanation="The vertical parts of both tensions must still equal the weight. Flatter wires contribute less vertical pull per newton, so the tension must rise to compensate."
/>

::: notes
- **Equilibrium:** $\sum F_x = 0$ **and** $\sum F_y = 0$.
- Body stays at rest or moves with constant velocity.
- Three concurrent forces → form a **closed triangle** (triangle law).
- Flatter supports → much larger tension.
:::

::: refs
- [Newton's Laws of Dynamics — Feynman Lectures, Caltech (USA)](https://www.feynmanlectures.caltech.edu/I_09.html)
- [Classical Mechanics 8.01 — MIT OpenCourseWare (USA)](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)
- [Forces & Motion: Basics — interactive sim, PhET, UC Boulder (USA)](https://phet.colorado.edu/en/simulations/forces-and-motion-basics)
:::
