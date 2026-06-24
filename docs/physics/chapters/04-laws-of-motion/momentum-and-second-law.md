---
description: "Newton's Second Law F=ma for Class 11 Physics (NCERT). Momentum, force and acceleration — notes with examples for JEE Main, KCET, Karnataka PU."
---

# Momentum & Newton's Second Law

<ConceptMeta chapter="4" section="4.5–4.6" page="60–65" />

<Predict
  label="Which speeds up more?"
  prompt="You give the SAME push to a tennis ball and a cricket ball. Which speeds up more?"
  :options="[
    { text: 'The tennis ball', correct: true },
    { text: 'The cricket ball' },
    { text: 'Both the same' }
  ]"
  reveal="The lighter tennis ball — for the same force, smaller mass means bigger acceleration (a = F/m)."
/>

::: idea
First, **momentum** is "how hard something is to stop" — it grows with both mass and speed. A slow truck and a fast cricket ball can both be hard to stop.

Newton's Second Law says: **force is what changes momentum**. The harder you push, the faster the momentum changes; the heavier the object, the less it speeds up for the same push.
:::

<ConceptHero type="momentum-second-law" />

::: formula
**Momentum** is mass times velocity:

$$\vec{p} = m\vec{v}$$

**Newton's Second Law** — force is the rate of change of momentum, which for constant mass becomes:

$$\vec{F} = \frac{d\vec{p}}{dt} = m\vec{a}$$

Symbols:
- $\vec{p}$ — momentum (kg·m/s)
- $m$ — mass (kg)
- $\vec{v}$ — velocity (m/s)
- $\vec{a}$ — acceleration, how quickly velocity changes (m/s²)
- $\vec{F}$ — net force (N), where $1\,\text{N} = 1\,\text{kg}\cdot\text{m/s}^2$
:::

::: real
Push an empty shopping trolley and it shoots forward easily. Load it with rice bags and the same push barely moves it. Same force `F`, bigger mass `m`, so smaller acceleration `a`.

In cricket, a fast bowler gives the ball a large momentum (`p = mv`) with a big velocity — which is exactly why it's hard for the batsman to stop or redirect.
:::

::: try
Roll a tennis ball and a heavier ball (or a filled water bottle) by flicking each with the *same* finger force. The light one accelerates much more. You've just felt `a = F / m` — for the same force, less mass means more acceleration.
:::

::: whatif
If you could double the engine force of a scooter *and* the rider's mass at the same time, what happens to the acceleration? (Use `a = F / m` and see why it stays the same.)
:::

<Quiz
  question="The same force is applied to a 2 kg ball and a 6 kg ball. The 6 kg ball will have:"
  :options="[
    { text: 'Three times the acceleration' },
    { text: 'The same acceleration' },
    { text: 'One-third the acceleration', correct: true },
    { text: 'Zero acceleration' }
  ]"
  explanation="From a = F/m, acceleration is inversely proportional to mass. Triple the mass, one-third the acceleration for the same force."
/>

::: notes
- **Momentum** $p = mv$ (kg·m/s).
- **2nd Law:** $F = \dfrac{dp}{dt} = ma$ (constant mass).
- $1\,\text{N} = 1\,\text{kg·m/s}^2$.
- Bigger mass → smaller acceleration for the same force; $\vec a$ points along net $\vec F$.
:::

::: refs
- [Newton's Laws of Dynamics — Feynman Lectures, Caltech (USA)](https://www.feynmanlectures.caltech.edu/I_09.html)
- [Classical Mechanics 8.01 — MIT OpenCourseWare (USA)](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)
- [Newton's Laws — HyperPhysics, Georgia State (USA)](http://hyperphysics.phy-astr.gsu.edu/hbase/Newt.html)
:::
