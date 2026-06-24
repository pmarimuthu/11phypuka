---
description: "Impulse and change in momentum for Class 11 Physics (NCERT). Why airbags and catching softly reduce injury — JEE Main, KCET, Karnataka PU notes."
---

# Impulse

<ConceptMeta chapter="4" section="4.6" page="64–65" />

<Predict
  label="Why pull your hands back?"
  prompt="Catching a fast cricket ball, should you pull your hands back as you catch?"
  :options="[
    { text: 'Yes — it hurts less', correct: true },
    { text: 'No — keep them stiff' },
    { text: 'Makes no difference' }
  ]"
  reveal="Pull back — a longer contact time means a smaller force for the same change in momentum."
/>

::: idea
**Impulse** is the *total effect of a force acting over time*. The same change in momentum can be achieved with a big force for a short time, or a small force for a long time.

This is the secret behind every "soft landing": stretch the time, and you shrink the force.
:::

<ConceptHero type="impulse" />

::: formula
**Impulse = force × time = change in momentum:**

$$\vec{J} = \vec{F}\,\Delta t = \Delta\vec{p} = m(\vec{v} - \vec{u})$$

Symbols:
- $\vec{J}$ — impulse (N·s, same units as momentum)
- $\vec{F}$ — average force (N)
- $\Delta t$ — time the force acts (s)
- $\Delta\vec{p}$ — change in momentum (kg·m/s)
- $\vec{u},\ \vec{v}$ — initial and final velocity (m/s)
:::

::: real
A cricketer "draws the hands back" while catching a fast ball. The ball's momentum must drop to zero either way (`Δp` is fixed). By increasing the catching time `Δt`, the force `F = Δp / Δt` on the hands becomes small — so it doesn't sting.

The same physics is why cars have crumple zones and why we land on bent knees.
:::

::: try
Drop a raw egg from the same small height onto (a) a hard plate and (b) a thick folded towel. The plate stops it instantly (tiny `Δt`, huge force → crack). The towel stretches the stopping time, lowering the force enough to survive. Same `Δp`, very different force.
:::

::: whatif
Airbags inflate in about 0.03 seconds. Why would inflating *too slowly* be useless, and inflating *instantly hard* also be dangerous? Think about what value of `Δt` you actually want.
:::

<Quiz
  question="Why does a high-jumper land on a thick foam mat instead of bare ground?"
  :options="[
    { text: 'The mat reduces the change in momentum' },
    { text: 'The mat increases the stopping time, reducing the force', correct: true },
    { text: 'The mat removes gravity' },
    { text: 'The mat increases the jumper\'s mass' }
  ]"
  explanation="The change in momentum is the same. The mat increases Δt, so F = Δp/Δt is much smaller — a gentler stop."
/>

::: notes
- **Impulse** $J = F\,\Delta t = \Delta p = m(v-u)$; units **N·s**.
- Same $\Delta p$: longer $\Delta t$ → smaller force (airbags, crumple zones, catching).
- Impulse = **area under the force–time graph**.
:::

::: refs
- [Newton's Laws of Dynamics — Feynman Lectures, Caltech (USA)](https://www.feynmanlectures.caltech.edu/I_09.html)
- [Classical Mechanics 8.01 — MIT OpenCourseWare (USA)](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)
- [Forces & Motion: Basics — interactive sim, PhET, UC Boulder (USA)](https://phet.colorado.edu/en/simulations/forces-and-motion-basics)
:::
