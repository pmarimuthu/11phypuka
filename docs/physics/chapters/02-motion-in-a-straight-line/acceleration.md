---
description: "Acceleration in Class 11 Physics — rate of change of velocity, v–t graphs. NCERT notes with real-life examples for JEE Main, JEE Advanced and KCET."
---

# Acceleration

<ConceptMeta chapter="2" section="2.3" page="16-18" />

<Predict
  label="What happens?"
  prompt="A car is moving north and brakes to a stop. Which direction is its acceleration?"
  :options="[
    { text: 'North (same as motion)' },
    { text: 'South (opposite to motion)', correct: true },
    { text: 'Zero — it is just slowing down' }
  ]"
  reveal="Acceleration is the rate of change of velocity. The velocity is decreasing northward, so acceleration points south — opposite to the direction of motion. Slowing down IS acceleration."
/>

::: idea
**Acceleration** is how fast velocity is changing — in magnitude, direction, or both. It is a vector.

Crucially, acceleration does **not** mean "speeding up." A car braking hard is accelerating (in the opposite direction to its motion). A ball thrown upward decelerates on the way up — its acceleration is downward the whole time (gravity).

Zero acceleration means constant velocity (constant speed in a straight line). Any change in velocity — faster, slower, or turning — requires acceleration.
:::

<ConceptHero type="acceleration" />

::: formula
**Average acceleration:**

$$\bar{a} = \frac{\Delta v}{\Delta t} = \frac{v_f - v_i}{t_f - t_i}$$

**Instantaneous acceleration:**

$$a = \lim_{\Delta t \to 0} \frac{\Delta v}{\Delta t} = \frac{dv}{dt} = \frac{d^2x}{dt^2}$$

Symbols:
- $\bar{a}$ — average acceleration (m/s²)
- $a$ — instantaneous acceleration (m/s²)
- $v_f, v_i$ — final and initial velocities (m/s)
- $\Delta t$ — time interval (s)

Sign convention (1D): choose positive direction (e.g., rightward). Acceleration is positive if velocity is increasing in the positive direction; negative if decreasing.
:::

::: real
Emergency braking in a car: going from 60 km/h (≈ 16.7 m/s) to rest in about 4 s gives $a = (0 - 16.7)/4 \approx -4.2 \text{ m/s}^2$. The negative sign means the acceleration is opposite to the direction of travel. A racing car can achieve 0–100 km/h in 3 s, giving $a \approx +9.3 \text{ m/s}^2$ — almost 1 g!
:::

::: try
Drop a ball from shoulder height and catch it. Try to catch it as softly as possible (over a long time), then try catching it as sharply as possible (stopping it quickly). In which case do you feel a bigger force in your palm? That force is proportional to the acceleration you impose on the ball.
:::

::: whatif
A car is moving east. If it has a westward acceleration, what happens over time? What if the westward acceleration continues long enough — can the car end up moving west?
:::

<Quiz
  question="A train moving at 20 m/s slows uniformly to 5 m/s in 10 s. Its acceleration is:"
  :options="[
    { text: '+1.5 m/s²' },
    { text: '−1.5 m/s²', correct: true },
    { text: '+2.5 m/s²' },
    { text: '−0.5 m/s²' }
  ]"
  explanation="a = (v_f − v_i) / Δt = (5 − 20) / 10 = −15/10 = −1.5 m/s². Negative because the train is slowing (decelerating in the direction of motion)."
/>

::: notes
- **Acceleration** $a = \Delta v / \Delta t$; instantaneous $a = dv/dt$.
- Positive $a$ ⟹ velocity increases in the positive direction; negative $a$ ⟹ decreases.
- "Deceleration" is just acceleration opposite to the direction of motion — not a separate concept in physics.
- SI unit: **m/s²**.
- Free-fall near Earth's surface: $g = 9.8 \text{ m/s}^2$ downward.
:::

::: refs
- [Acceleration — Khan Academy (USA)](https://www.khanacademy.org/science/physics/one-dimensional-motion/acceleration-tutorial/a/acceleration-article)
- [1D Kinematics — HyperPhysics, Georgia State University (USA)](http://hyperphysics.phy-astr.gsu.edu/hbase/mot.html)
- [Motion in a Straight Line — NCERT Chapter 2 (India)](https://ncert.nic.in/textbook/pdf/keph102.pdf)
:::
