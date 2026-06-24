---
description: "Scalars and vectors for Class 11 Physics — definitions, types and properties. NCERT Chapter 3 notes with real examples for JEE Main, KCET, Karnataka PU."
---

# Scalars and Vectors

<ConceptMeta chapter="3" section="3.1–3.2" page="38–40" />

<Predict
  label="Which needs a direction?"
  prompt="You tell a friend your school is 2 km away. Is that enough information for them to find it?"
  :options="[
    { text: 'No — you also need to say which direction', correct: true },
    { text: 'Yes — 2 km is all they need' },
    { text: 'Only if they know the city' }
  ]"
  reveal="Distance alone is a scalar — it tells you how far, not where. Displacement is a vector — it gives both distance and direction, so your friend can actually find the school."
/>

::: idea
Some physical quantities are completely described by a **number plus a unit** — these are **scalars**. Temperature 37 °C, mass 5 kg, time 10 s — once you know the number, you know everything.

Other quantities need a **number, a unit, and a direction** — these are **vectors**. Displacement, velocity, acceleration, and force all have direction baked in. Ignore the direction and you lose half the information.

Key rule: **vectors add geometrically, not arithmetically.** A 3 N force east and a 4 N force north do not give 7 N — they give 5 N north-east (Pythagoras applies).
:::

<ConceptHero type="scalars-and-vectors" />

::: formula
A vector is written with an arrow overhead or in bold:

$$\vec{A} \quad \text{or} \quad \mathbf{A}$$

Its **magnitude** (size, always ≥ 0):

$$|\vec{A}| = A$$

Two vectors are **equal** only if they have the same magnitude *and* the same direction. A vector shifted parallel to itself is unchanged — **position does not matter, only length and direction do**.

**Negative of a vector:** $-\vec{A}$ has the same magnitude as $\vec{A}$ but points in the opposite direction.
:::

::: real
When weather forecasters say "wind at 40 km/h", that is a scalar — it's wind *speed*. When air-traffic control says "wind from the north-west at 40 km/h", that is wind *velocity* — a vector. An aircraft pilot needs the full vector to correct for crosswind drift; just the speed number would crash the calculation.
:::

::: try
Hold a book in your hand and apply a small push with one finger pointing east and a small push with another finger pointing north. The book slides north-east — not north, not east. That diagonal motion is the **vector sum** of the two forces. Now push both fingers in the same direction — the effects simply add (scalar addition). The difference is what separates vectors from scalars.
:::

::: whatif
Can a vector ever have a negative magnitude? (Hint: magnitude is always a positive number — but what about the *component* of a vector along a chosen axis?)
:::

<Quiz
  question="Which of the following is a vector quantity?"
  :options="[
    { text: 'Temperature' },
    { text: 'Speed' },
    { text: 'Velocity', correct: true },
    { text: 'Mass' }
  ]"
  explanation="Velocity has both magnitude (speed) and direction, making it a vector. Temperature, speed, and mass are scalars — they are fully specified by a number alone."
/>

::: notes
- **Scalar:** magnitude only. Examples: mass, temperature, speed, distance, time, energy.
- **Vector:** magnitude + direction. Examples: displacement, velocity, acceleration, force, momentum.
- Magnitude of a vector: $|\vec{A}| \geq 0$, a scalar.
- Equal vectors: same magnitude AND same direction.
- Negative vector: same magnitude, opposite direction.
- Position does not define a vector — only its length and direction do.
:::

::: refs
- [Vectors — Khan Academy](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra)
- [Scalars and Vectors — NCERT Chapter 3](https://ncert.nic.in/textbook/pdf/keph103.pdf)
- [Vectors — HyperPhysics, Georgia State](http://hyperphysics.phy-astr.gsu.edu/hbase/vect.html)
:::
