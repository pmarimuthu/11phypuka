---
description: "Relative velocity in 2D for Class 11 Physics — vector subtraction and river-boat problems. NCERT notes for JEE Main, KCET and Karnataka PU."
---

# Relative Velocity in 2D

<ConceptMeta chapter="3" section="3.7" page="54–56" />

<Predict
  label="Which way does the boat go?"
  prompt="A boat aims straight across a river (east). The river flows south. Where does the boat actually land?"
  :options="[
    { text: 'Directly east — the engine overrides the current' },
    { text: 'South-east of the starting point, downstream', correct: true },
    { text: 'North-east — the current helps it across faster' },
    { text: 'It depends only on the boat speed' }
  ]"
  reveal="The boat's actual velocity is the vector sum of its engine velocity (east) and the river current (south). The resultant points south-east, so the boat lands downstream."
/>

::: idea
**All motion is relative** — you always measure it from some reference point. When two objects move in 2D, the velocity of one *as seen by the other* is the **relative velocity**.

The classic problem: a boat trying to cross a flowing river. The boat's velocity relative to the **water** is what the engine produces. The water's velocity relative to the **bank** is the current. Add them as vectors and you get the boat's velocity relative to the **bank** — which is what actually matters for where it lands.

To go *straight* across, the boat must aim slightly **upstream** so the river current cancels the sideways drift.
:::

<ConceptHero type="relative-velocity-2d" />

::: formula
Velocity of object A relative to object B:

$$\vec{v}_{AB} = \vec{v}_A - \vec{v}_B$$

For the boat-river problem, let the river flow along y and the boat aim along x:

$$\vec{v}_{\text{boat/bank}} = \vec{v}_{\text{boat/water}} + \vec{v}_{\text{water/bank}}$$

If the boat aims perpendicular to the river (angle 90°) but the current flows parallel:

- **Actual speed** relative to bank: $v = \sqrt{v_b^2 + v_r^2}$
- **Drift** (how far downstream it lands): $d = v_r \times t$, where $t = \dfrac{w}{v_b}$ ($w$ = river width)

To cross **straight** (zero drift): aim upstream at angle $\theta$ where $\sin\theta = \dfrac{v_r}{v_b}$ (only possible if $v_b > v_r$).

Symbols:
- $v_b$ — boat speed relative to water (m/s)
- $v_r$ — river current speed (m/s)
- $w$ — width of river (m)
:::

::: real
Commercial pilots call this the **wind triangle**. An aircraft flying from Bengaluru to Mumbai points its nose slightly *into* the wind so that the vector sum of aircraft velocity and wind velocity gives a straight track over the ground. Flight management computers solve this vector subtraction every second, adjusting heading continuously. Without it, the aircraft would be blown off course by hundreds of kilometres on a long-haul flight.
:::

::: try
Fill a rectangular tray with water. Float a small paper boat and push it straight across with one finger (your 'engine'). Now tilt the tray slightly so water flows — push straight across again and watch the boat land downstream. Tilt it more (faster 'current') and the drift grows. Try aiming the boat upstream at an angle until it goes straight across. You've just solved the boat-river problem with your hands.
:::

::: whatif
A boat has speed 4 m/s relative to water and the river current is 5 m/s. Can the boat ever cross straight to the other bank? (Hint: look at the formula $\sin\theta = v_r/v_b$ — what happens when $v_r > v_b$?)
:::

<Quiz
  question="A boat can travel at 5 m/s relative to water. The river flows at 3 m/s. If the boat heads directly across (perpendicular to the bank), its actual speed relative to the bank is:"
  :options="[
    { text: '8 m/s' },
    { text: '2 m/s' },
    { text: '√34 m/s ≈ 5.83 m/s', correct: true },
    { text: '5 m/s' }
  ]"
  explanation="The two velocity vectors are perpendicular: v = √(5² + 3²) = √(25 + 9) = √34 ≈ 5.83 m/s."
/>

::: notes
- $\vec{v}_{AB} = \vec{v}_A - \vec{v}_B$ (velocity of A as seen by B)
- Boat/bank velocity = boat/water + water/bank (vector addition)
- Aim straight across: lands downstream, drift $= v_r \cdot (w/v_b)$
- Aim upstream to cross straight: $\sin\theta = v_r/v_b$; only possible if $v_b > v_r$
- Same principle applies to aircraft in crosswind, swimmers in currents
:::

::: refs
- [Relative Velocity — Khan Academy](https://www.khanacademy.org/science/physics/two-dimensional-motion/relative-velocity/v/introduction-to-relative-velocity)
- [Motion in a Plane — NCERT Chapter 3](https://ncert.nic.in/textbook/pdf/keph103.pdf)
- [Relative Motion — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/relmot.html)
:::
