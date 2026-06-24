---
description: "Conservation of linear momentum for Class 11 Physics (NCERT). Derivation and applications — recoil, explosions, collisions. JEE Main, KCET notes."
---

# Conservation of Momentum

<ConceptMeta chapter="4" section="4.8" page="67–69" />

<Predict
  label="Who moves faster?"
  prompt="Two skaters (one light, one heavy) push off each other on smooth ice. Who moves away faster?"
  :options="[
    { text: 'The lighter skater', correct: true },
    { text: 'The heavier skater' },
    { text: 'Both move equally fast' }
  ]"
  reveal="The lighter skater — both gain equal momentum, so the smaller mass ends up faster (v = p/m)."
/>

::: idea
If no outside force acts on a group of objects, their **total momentum stays the same**, no matter how they push, collide, or explode among themselves.

This follows directly from the Third Law: the internal pushes are equal and opposite, so they cancel for the group as a whole.
:::

<ConceptHero type="conservation-of-momentum" />

::: formula
**Total momentum before = total momentum after:**

$$m_1\vec{u}_1 + m_2\vec{u}_2 = m_1\vec{v}_1 + m_2\vec{v}_2$$

Symbols:
- $m_1, m_2$ — the two masses (kg)
- $\vec{u}_1, \vec{u}_2$ — velocities before (m/s)
- $\vec{v}_1, \vec{v}_2$ — velocities after (m/s)

Valid when the net *external* force is zero.
:::

::: real
A rifle and bullet start at rest, so total momentum is zero. When fired, the bullet shoots forward with momentum `mv`; the rifle must recoil backward with an equal momentum so the total stays zero. That's the "kick" on the shoulder.

A rocket throws hot gas backward and is pushed forward — the same principle, continuously.
:::

::: try
Blow up a balloon and let it go without tying it. It zooms around the room. The balloon pushes air out the back; the escaping air's momentum is matched by the balloon's momentum in the opposite direction. A no-fuel rocket demo.
:::

::: whatif
Two ice skaters stand still, then push off each other. A heavy skater and a light skater — who slides away faster, and why? (Equal and opposite momentum, but `v = p/m`.)
:::

<Quiz
  question="A 60 kg skater pushes a 30 kg skater on frictionless ice. Compared to the lighter skater, the heavier one moves:"
  :options="[
    { text: 'Faster, because it is heavier' },
    { text: 'At the same speed' },
    { text: 'Slower, with half the speed', correct: true },
    { text: 'Not at all' }
  ]"
  explanation="Both gain equal and opposite momentum. With twice the mass, the heavier skater moves at half the speed (v = p/m)."
/>

::: notes
- No external force → **total momentum is conserved**.
- $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$.
- Follows from the 3rd Law; applies to recoil, rockets, collisions, explosions.
:::

::: refs
- [Conservation of Momentum — Feynman Lectures, Caltech (USA)](https://www.feynmanlectures.caltech.edu/I_10.html)
- [Classical Mechanics 8.01 — MIT OpenCourseWare (USA)](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)
- [Forces & Motion — interactive sim, PhET, UC Boulder (USA)](https://phet.colorado.edu/en/simulations/forces-and-motion)
:::
