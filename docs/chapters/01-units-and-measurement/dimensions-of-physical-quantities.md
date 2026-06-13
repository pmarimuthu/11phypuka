---
description: "Dimensions of physical quantities — M, L, T notation for Class 11 NCERT Physics. Clear notes with examples for JEE Main, JEE Advanced, KCET."
---

# Dimensions of Physical Quantities

<ConceptMeta chapter="1" section="1.4–1.5" page="9–11" />

<Predict
  label="What are its dimensions?"
  prompt="Speed is distance ÷ time. Written with the base dimensions length (L) and time (T), speed has dimensions…"
  :options="[
    { text: 'L T⁻¹', correct: true },
    { text: 'L T' },
    { text: 'L² T' }
  ]"
  reveal="L T⁻¹ — a length divided by a time."
/>

::: idea
The **dimensions** of a quantity show how it is built from the base quantities — mass **M**, length **L** and time **T**. We write them in square brackets.

For example $[\text{area}] = L^2$ and $[\text{speed}] = LT^{-1}$. Dimensions are a quantity's "fingerprint": only quantities with the **same** dimensions can be added or compared.
:::

<ConceptHero type="dimensions" />

::: formula
Some common dimensional formulae:

$$[\text{area}] = L^2 \qquad [\text{velocity}] = LT^{-1} \qquad [\text{acceleration}] = LT^{-2}$$

$$[\text{force}] = MLT^{-2} \qquad [\text{energy}] = ML^2T^{-2}$$

Symbols: $M$ = mass, $L$ = length, $T$ = time.
:::

::: real
You can't add a length to a time — "5 metres + 3 seconds" is nonsense. Dimensions are the deep reason some quantities simply cannot be combined, no matter how you arrange the numbers.
:::

::: try
Take a formula you trust, such as distance = speed × time. Check the dimensions: $LT^{-1} \times T = L$. The right side comes out as a length (L), exactly what distance should be. You just tested a formula using only its dimensions.
:::

::: whatif
Work and torque both have dimensions $ML^2T^{-2}$, yet they are very different physical ideas. So does "same dimensions" guarantee "same quantity"? (It does not — be careful.)
:::

<Quiz
  question="What are the dimensions of acceleration?"
  :options="[
    { text: 'M L T⁻²' },
    { text: 'L T⁻²', correct: true },
    { text: 'L T⁻¹' },
    { text: 'L T²' }
  ]"
  explanation="Acceleration = change in velocity ÷ time = (L T⁻¹) ÷ T = L T⁻². No mass is involved, so there is no M."
/>

::: notes
- Base dimensions: **M** (mass), **L** (length), **T** (time).
- Common: area $L^2$, volume $L^3$, density $ML^{-3}$, velocity $LT^{-1}$, acceleration $LT^{-2}$, force $MLT^{-2}$, energy/work $ML^2T^{-2}$, pressure $ML^{-1}T^{-2}$.
- Only **same-dimension** quantities can be added or equated.
- Dimensionless quantities: angle, strain, refractive index, relative density.
:::

::: refs
- [Physical Units (M, L, T scheme) — HyperPhysics, Georgia State (USA)](http://hyperphysics.phy-astr.gsu.edu/hbase/units.html)
- [SI base units — BIPM, Sèvres / Paris (France)](https://www.bipm.org/en/measurement-units/si-base-units)
- [Classical Mechanics 8.01 — MIT OpenCourseWare (USA)](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)
:::
