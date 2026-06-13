---
description: "Friction — static, kinetic and rolling for Class 11 Physics (NCERT). Laws of friction, angle of friction, advantages. JEE Main, KCET, Karnataka PU notes."
---

# Friction

<ConceptMeta chapter="4" section="4.9 (Common forces)" page="71–76" />

<Predict
  label="Which is harder?"
  prompt="Which is harder — to START a heavy box sliding, or to KEEP it sliding?"
  :options="[
    { text: 'To start it', correct: true },
    { text: 'To keep it going' },
    { text: 'Exactly the same' }
  ]"
  reveal="Starting it — maximum static friction is usually larger than kinetic (sliding) friction."
/>

::: idea
**Friction** is the force between surfaces that resists sliding. It's a villain (it wastes energy, wears out parts) *and* a hero (without it we couldn't walk, write, or stop a car).

- **Static friction** holds a still object in place — and adjusts itself up to a maximum.
- **Kinetic (sliding) friction** acts once the object is already moving, and is usually a bit smaller.
:::

<ConceptHero type="friction" />

::: formula
**Maximum static friction** and **kinetic friction:**

$$f_s^{\,\max} = \mu_s\, N \qquad\qquad f_k = \mu_k\, N$$

Symbols:
- $f$ — friction force (N)
- $\mu_s,\ \mu_k$ — coefficients of static and kinetic friction (pure numbers; rougher = bigger)
- $N$ — normal force pressing the surfaces together (N)

Usually $\mu_s > \mu_k$ — it is harder to *start* sliding than to *keep* sliding.
:::

::: real
It takes a big shove to *start* pushing a heavy almirah, but once it's sliding it moves more easily — that's static friction (larger) giving way to kinetic friction (smaller).

Car tyres and brakes are entirely about friction; this is also why roads and tyres are designed rough, and why a wet road (lower `μ`) is dangerous.
:::

::: try
Put a book on a table and slowly lift one end. The book stays put (static friction grows to match gravity's pull along the slope) until a certain angle — then it suddenly slides. That tipping angle tells you `μ_s` (`μ_s = tan θ` at the slipping angle). Try a notebook vs a phone and compare.
:::

::: whatif
Why do anti-lock brakes (ABS) prevent the wheels from fully locking? (Hint: a rolling tyre uses *static* friction with the road; a skidding tyre uses *kinetic* friction. Which is larger?)
:::

<Quiz
  question="Why is it harder to start sliding a heavy box than to keep it sliding?"
  :options="[
    { text: 'Air resistance is higher at rest' },
    { text: 'Maximum static friction is usually greater than kinetic friction', correct: true },
    { text: 'The box gets lighter once moving' },
    { text: 'Gravity decreases when moving' }
  ]"
  explanation="μ_s is typically larger than μ_k, so the force needed to break it free (overcome static friction) exceeds the force needed to keep it sliding."
/>

::: notes
- **Static:** $f_s \le \mu_s N$ (self-adjusts up to a max). **Kinetic:** $f_k = \mu_k N$.
- Usually $\mu_s > \mu_k$; friction opposes motion (or its tendency).
- At the slipping angle, $\mu_s = \tan\theta$. Rolling friction is smallest.
- Model: friction is independent of contact area.
:::

::: refs
- [Forces & Motion: Basics (try the Friction tab) — PhET, UC Boulder (USA)](https://phet.colorado.edu/en/simulations/forces-and-motion-basics)
- [Newton's Laws — HyperPhysics, Georgia State (USA)](http://hyperphysics.phy-astr.gsu.edu/hbase/Newt.html)
- [Classical Mechanics 8.01 — MIT OpenCourseWare (USA)](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)
:::
