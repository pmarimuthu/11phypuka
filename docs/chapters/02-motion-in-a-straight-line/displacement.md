---
description: "Position, displacement and path length for Class 11 Physics (NCERT Ch 2). Understand the difference with animated examples — JEE Main, KCET, Karnataka PU."
---

# Position, Displacement & Path Length

<ConceptMeta chapter="2" section="2.1" page="14" />

<Predict
  label="Which is larger?"
  prompt="You walk 3 km north, then 3 km south and end up back home. Which is larger — your path length or your displacement?"
  :options="[
    { text: 'Path length (6 km)', correct: true },
    { text: 'Displacement (6 km)' },
    { text: 'They are always equal' }
  ]"
  reveal="Path length is 6 km (total distance covered). Displacement is 0 km — you are back where you started."
/>

::: idea
**Position** is where you are on a number line — measured from a reference point (origin). It can be positive or negative depending on direction.

**Path length** (distance) is the total ground covered — it always adds up and can never decrease.

**Displacement** is the straight-line shift from start to finish — it has a direction. If you end up where you began, displacement is zero even if you walked a marathon.
:::

<ConceptHero type="displacement" />

::: formula
Displacement is the change in position:

$$\Delta x = x_f - x_i$$

Symbols:
- $\Delta x$ — displacement (m); positive = rightward/upward, negative = leftward/downward
- $x_f$ — final position (m)
- $x_i$ — initial position (m)

Path length $s$ is the total distance travelled (always $\geq |\Delta x|$).
:::

::: real
An athlete runs a 400 m track race and finishes at the starting line. Her path length is 400 m. Her displacement is **zero** — start and finish are the same point. Her coach reports speed (path/time) for training, but a physicist reports velocity (displacement/time) — and gets zero for that lap.
:::

::: try
Stand in your room. Walk to the door (measure the distance), then walk back to your starting spot. Write down (a) path length and (b) displacement. Now walk to the door and stop there. Write down (a) and (b) again. Why are the answers different in the two cases?
:::

::: whatif
What if you could teleport instantly from home to school? Your path length would be zero, but would your displacement also be zero? (Think: does teleporting change where you are relative to home?)
:::

<Quiz
  question="A car travels 60 km east and then 40 km west. Its displacement is:"
  :options="[
    { text: '100 km east' },
    { text: '20 km east', correct: true },
    { text: '20 km west' },
    { text: '100 km west' }
  ]"
  explanation="Displacement = final position − initial position = 60 − 40 = 20 km east. Path length (100 km) is different."
/>

::: notes
- **Position** $x$ — location on a number line, measured from origin; can be negative.
- **Displacement** $\Delta x = x_f - x_i$ — vector; can be negative; zero if you return to start.
- **Path length / distance** — scalar; always ≥ 0; total ground covered.
- Key trap: displacement ≠ distance unless motion is in one direction without turning back.
- SI unit for both: **metre (m)**.
:::

::: refs
- [Position, Velocity and Acceleration — Khan Academy (USA)](https://www.khanacademy.org/science/physics/one-dimensional-motion/displacement-velocity-time/a/position-vs-time-graphs-review)
- [Motion in a Straight Line — NCERT Chapter 2 (India)](https://ncert.nic.in/textbook/pdf/keph102.pdf)
- [1D Kinematics — HyperPhysics, Georgia State University (USA)](http://hyperphysics.phy-astr.gsu.edu/hbase/mot.html)
:::
