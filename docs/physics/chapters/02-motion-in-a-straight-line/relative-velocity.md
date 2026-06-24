---
description: "Relative velocity in 1D for Class 11 Physics (NCERT). Concept-first notes with train and bus examples for JEE Main, KCET and Karnataka PU board exam."
---

# Relative Velocity

<ConceptMeta chapter="2" section="2.5" page="21-23" />

<Predict
  label="What do you observe?"
  prompt="You are on a train moving at 80 km/h. A faster train on a parallel track overtakes you at 120 km/h (same direction). How fast does the faster train appear to move from your window?"
  :options="[
    { text: '120 km/h' },
    { text: '200 km/h' },
    { text: '40 km/h', correct: true }
  ]"
  reveal="From your reference frame the other train appears to creep past at only 120 − 80 = 40 km/h, even though it is doing 120 km/h relative to the ground."
/>

::: idea
Motion is always measured **relative to an observer**. The velocity of object A as seen by object B is called the **velocity of A relative to B**.

If both objects move in the **same direction**, relative velocity is the difference of their speeds. If they move in **opposite directions**, relative velocity is the sum of their speeds. The ground is just one possible reference frame — not a special one.
:::

<ConceptHero type="relative-velocity" />

::: formula
Velocity of A relative to B:

$$\vec{v}_{AB} = \vec{v}_A - \vec{v}_B$$

In one dimension (taking rightward as positive):

$$v_{AB} = v_A - v_B$$

Symbols:
- $\vec{v}_{AB}$ — velocity of A as seen by B (m/s)
- $\vec{v}_A$ — velocity of A relative to the ground (m/s)
- $\vec{v}_B$ — velocity of B relative to the ground (m/s)

**Note:** $v_{AB} = -v_{BA}$ — if A moves at +40 km/h relative to B, then B moves at −40 km/h relative to A.
:::

::: real
Two trains on the same track, heading toward each other: Train A at 90 km/h and Train B at 90 km/h. A passenger in Train A sees Train B approaching at $90 - (-90) = 180 \text{ km/h}$ — the relative speed is the sum when directions are opposite. This is why head-on collisions are so severe: the impact energy scales with the square of relative velocity.
:::

::: try
Sit in a parked car at a traffic light. When the car next to you starts moving forward, it often *feels* like you are rolling backward. Your brain interprets relative motion as your own motion. This is **exactly** relative velocity — you are the reference frame, and the other car's velocity relative to you is backward.
:::

::: whatif
What if both trains travel at exactly the same speed in the same direction? What is their relative velocity? What does a passenger in one see when they look at the other?
:::

<Quiz
  question="Car A moves east at 60 km/h. Car B moves west at 40 km/h. The velocity of A relative to B is:"
  :options="[
    { text: '20 km/h east' },
    { text: '100 km/h east', correct: true },
    { text: '100 km/h west' },
    { text: '20 km/h west' }
  ]"
  explanation="Taking east as positive: v_A = +60, v_B = −40. v_AB = v_A − v_B = 60 − (−40) = 100 km/h east."
/>

::: notes
- **Relative velocity:** $v_{AB} = v_A - v_B$ (velocities relative to a common ground frame).
- Same direction: relative speed = difference of speeds.
- Opposite directions: relative speed = sum of speeds.
- $v_{AB} = -v_{BA}$ (Newton's third law analogue for kinematics).
- Reference frame choice is arbitrary; pick the frame that simplifies your problem.
:::

::: refs
- [Relative Motion in One Dimension — Khan Academy (USA)](https://www.khanacademy.org/science/physics/one-dimensional-motion/relative-velocity-and-absolute-velocity/a/relative-velocity-review)
- [Relative Velocity — HyperPhysics, Georgia State University (USA)](http://hyperphysics.phy-astr.gsu.edu/hbase/relmot.html)
- [Motion in a Straight Line — NCERT Chapter 2 (India)](https://ncert.nic.in/textbook/pdf/keph102.pdf)
:::
