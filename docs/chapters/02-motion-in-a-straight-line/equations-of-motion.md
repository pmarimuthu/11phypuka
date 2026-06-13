---
description: "Three equations of motion for Class 11 Physics — derivation, graphical proof and solved examples. NCERT notes for JEE Main, KCET and Karnataka PU."
---

# Equations of Motion

<ConceptMeta chapter="2" section="2.4" page="18-21" />

<Predict
  label="Which formula?"
  prompt="A car starts from rest and accelerates at 3 m/s² for 8 s. You want to find how far it travelled — but you don't know its final speed. Which of these formulas is most useful?"
  :options="[
    { text: 'v = u + at' },
    { text: 's = ut + ½at²', correct: true },
    { text: 'v² = u² + 2as' }
  ]"
  reveal="s = ut + ½at² uses only s, u, a, and t — exactly the four quantities in play here. No need to find v first."
/>

::: idea
When acceleration is **uniform** (constant), three elegant equations connect the five quantities: initial velocity $u$, final velocity $v$, acceleration $a$, displacement $s$, and time $t$. Each equation uses four of the five — pick the one that has the quantity you want and excludes the one you don't know.

These equations are derived purely from the definitions of velocity and acceleration — no new physics is needed, just algebra.
:::

<ConceptHero type="equations-of-motion" />

::: formula
The three kinematic equations for **uniform acceleration** (constant $a$):

$$v = u + at \tag{1}$$

$$s = ut + \frac{1}{2}at^2 \tag{2}$$

$$v^2 = u^2 + 2as \tag{3}$$

A fourth useful relation (average velocity × time):

$$s = \frac{(u + v)}{2} \cdot t \tag{4}$$

Symbols:
- $u$ — initial velocity (m/s)
- $v$ — final velocity (m/s)
- $a$ — uniform acceleration (m/s²)
- $s$ — displacement (m)
- $t$ — time elapsed (s)

**Validity:** these equations hold **only** when acceleration is constant. For variable acceleration, integration is needed.

**Free fall:** replace $a$ with $g = 9.8 \text{ m/s}^2$ (downward). Taking downward as positive: $v = u + gt$, $h = ut + \frac{1}{2}gt^2$, etc.
:::

::: real
An aircraft needs a minimum speed of 80 m/s to take off. Its engines give it a constant acceleration of 4 m/s². Using $v^2 = u^2 + 2as$ with $u = 0$: $80^2 = 0 + 2(4)s$, so $s = 6400/8 = 800 \text{ m}$. The runway must be at least 800 m long — airport designers use exactly this calculation.
:::

::: try
Drop a small ball from a known height (say 1 m). Time how long it takes to hit the floor. Use $h = \frac{1}{2}gt^2$ to estimate $g$. Repeat from 2 m. Do you get roughly 9.8 m/s² each time? (Use a phone stopwatch — or two phones for better accuracy.)
:::

::: whatif
What if $a = 0$ in equation (2)? You get $s = ut$ — constant velocity. What if $u = 0$ too? Then $s = \frac{1}{2}at^2$ — the classic free-fall result. The equations collapse to simpler forms at extreme values.
:::

<Quiz
  question="A stone is thrown vertically upward at 20 m/s. Taking g = 10 m/s² downward, how high does it go?"
  :options="[
    { text: '10 m' },
    { text: '20 m', correct: true },
    { text: '40 m' },
    { text: '200 m' }
  ]"
  explanation="At the highest point v = 0. Using v² = u² − 2gh: 0 = 400 − 2(10)h → h = 400/20 = 20 m."
/>

::: notes
- Three equations: $v = u + at$, $s = ut + \tfrac{1}{2}at^2$, $v^2 = u^2 + 2as$.
- **Valid only for constant $a$.**
- For free fall: use $g = 9.8 \text{ m/s}^2$; sign depends on chosen positive direction.
- Exam strategy: list known quantities first, then pick the equation that matches.
- Graphically: area under a $v$-$t$ graph = displacement; slope of $v$-$t$ graph = acceleration.
:::

::: refs
- [Kinematic Equations — Khan Academy (USA)](https://www.khanacademy.org/science/physics/one-dimensional-motion/kinematic-formulas/a/what-are-the-kinematic-formulas)
- [Uniformly Accelerated Motion — HyperPhysics, Georgia State University (USA)](http://hyperphysics.phy-astr.gsu.edu/hbase/mot.html#motcon)
- [Motion in a Straight Line — NCERT Chapter 2 (India)](https://ncert.nic.in/textbook/pdf/keph102.pdf)
:::
