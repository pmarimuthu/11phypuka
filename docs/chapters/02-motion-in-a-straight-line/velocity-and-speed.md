---
description: "Velocity vs speed in Class 11 Physics — why direction matters. NCERT Chapter 2 notes with v–t graph insight for JEE Main, KCET and Karnataka PU."
---

# Velocity & Speed

<ConceptMeta chapter="2" section="2.2" page="15-16" />

<Predict
  label="Which matters more?"
  prompt="Two cars travel the same 100 km road in 2 hours. Car A goes straight; Car B takes a detour and covers 120 km total. Are their average speeds the same?"
  :options="[
    { text: 'No — Car B has a higher average speed', correct: true },
    { text: 'Yes — same displacement, same speed' },
    { text: 'No — Car A has a higher average speed' }
  ]"
  reveal="Average speed uses path length, not displacement. Car A: 50 km/h. Car B: 60 km/h. Their average velocities are equal (same displacement ÷ same time)."
/>

::: idea
**Speed** is how fast you are covering ground — it is a scalar (no direction).

**Velocity** is speed *with direction* — it is a vector. A car going north at 60 km/h and a car going south at 60 km/h have the same speed but opposite velocities.

**Average** values smooth out everything over a time interval. **Instantaneous** velocity (or speed) is the exact value at one frozen moment — the number your speedometer shows right now.
:::

<ConceptHero type="velocity-speed" />

::: formula
**Average velocity:**

$$\bar{v} = \frac{\Delta x}{\Delta t} = \frac{x_f - x_i}{t_f - t_i}$$

**Average speed:**

$$\bar{s} = \frac{\text{total path length}}{\Delta t}$$

**Instantaneous velocity** (the limiting case as the time interval shrinks to zero):

$$v = \lim_{\Delta t \to 0} \frac{\Delta x}{\Delta t} = \frac{dx}{dt}$$

Symbols:
- $\bar{v}$ — average velocity (m/s); can be negative
- $\bar{s}$ — average speed (m/s); always ≥ 0
- $\Delta x$ — displacement (m)
- $\Delta t$ — time interval (s)
- $v$ — instantaneous velocity (m/s)
:::

::: real
Your car's speedometer reads **instantaneous speed** — the speed at this exact moment. When Google Maps estimates your arrival time, it uses your **average speed** for the whole journey. If you brake hard for a speed bump then floor it again, the speedometer fluctuates wildly but Maps only cares about total distance ÷ total time.
:::

::: try
Walk from one wall to the opposite wall of a room and time yourself. Then walk back. Calculate (a) average speed for the whole trip, and (b) average velocity for the whole trip. Why does one come out zero?
:::

::: whatif
Can an object have a non-zero speed but zero velocity? (Hint: think of a planet completing one full orbit — what is its displacement after one year?)
:::

<Quiz
  question="A ball is thrown straight up and comes back to the thrower's hand after 4 s. The average velocity over the full trip is:"
  :options="[
    { text: 'Equal to the maximum speed' },
    { text: 'Positive (upward)' },
    { text: 'Zero', correct: true },
    { text: 'Equal to half the maximum speed' }
  ]"
  explanation="The ball starts and ends at the same point, so displacement = 0. Average velocity = 0 ÷ 4 = 0. Average speed would be non-zero (total distance ÷ time)."
/>

::: notes
- **Average speed** = total path length $/ \Delta t$; instantaneous speed = $|v|$.
- **Average velocity** = $\Delta x / \Delta t$ — vector, can be zero or negative.
- **Instantaneous velocity** = $dx/dt$ — the derivative of position w.r.t. time.
- Common trap: average speed ≠ $|\text{average velocity}|$ unless motion is one-directional.
- SI unit: **m/s** (or km/h in everyday life; 1 km/h ≈ 0.278 m/s).
:::

::: refs
- [Average vs Instantaneous Velocity — Khan Academy (USA)](https://www.khanacademy.org/science/physics/one-dimensional-motion/kinematic-formulas/a/what-is-velocity)
- [1D Kinematics — HyperPhysics, Georgia State University (USA)](http://hyperphysics.phy-astr.gsu.edu/hbase/mot.html)
- [Motion in a Straight Line — NCERT Chapter 2 (India)](https://ncert.nic.in/textbook/pdf/keph102.pdf)
:::
