---
description: "Vector addition — triangle law and parallelogram law for Class 11 Physics (NCERT). Step-by-step notes with diagrams for JEE Main, JEE Advanced and KCET."
---

# Vector Addition

<ConceptMeta chapter="3" section="3.3" page="41–45" />

<Predict
  label="Guess the result"
  prompt="You walk 4 m east, then 3 m north. How far are you from where you started?"
  :options="[
    { text: '7 m' },
    { text: '5 m', correct: true },
    { text: '1 m' },
    { text: 'Depends on speed' }
  ]"
  reveal="Use Pythagoras: √(4² + 3²) = √25 = 5 m. The two displacements are perpendicular vectors, so they don't simply add as numbers."
/>

::: idea
To add two vectors geometrically, place the tail of the second vector at the tip of the first. The **resultant** is the arrow drawn from the tail of the first to the tip of the second. This is the **Triangle Law**.

When two vectors act simultaneously from the same point (like two forces on a box), complete the parallelogram they form — the diagonal through the shared corner is the **resultant**. This is the **Parallelogram Law**.

Subtraction: $\vec{A} - \vec{B} = \vec{A} + (-\vec{B})$. Flip $\vec{B}$ to get $-\vec{B}$, then add.

Key facts:
- Vector addition is **commutative**: $\vec{A} + \vec{B} = \vec{B} + \vec{A}$
- It is also **associative**: $(\vec{A} + \vec{B}) + \vec{C} = \vec{A} + (\vec{B} + \vec{C})$
:::

<ConceptHero type="vector-addition" />

::: formula
**Triangle / Head-to-tail rule:** place vectors tip-to-tail; resultant closes the triangle.

**Parallelogram Law:** if two vectors $\vec{A}$ and $\vec{B}$ act from the same point at angle $\theta$ between them, the magnitude of their resultant is:

$$R = \sqrt{A^2 + B^2 + 2AB\cos\theta}$$

The angle $\alpha$ the resultant makes with $\vec{A}$:

$$\tan\alpha = \frac{B\sin\theta}{A + B\cos\theta}$$

Symbols:
- $A, B$ — magnitudes of the two vectors
- $\theta$ — angle between them (when placed tail-to-tail)
- $R$ — magnitude of the resultant
- $\alpha$ — angle of resultant with respect to $\vec{A}$

**Special cases:**
- $\theta = 0°$: $R = A + B$ (maximum; vectors in same direction)
- $\theta = 180°$: $R = |A - B|$ (minimum; vectors opposite)
- $\theta = 90°$: $R = \sqrt{A^2 + B^2}$ (Pythagoras)
:::

::: real
A boat engine pushes the boat at 5 m/s across a river. The river current flows at 3 m/s downstream. The boat's actual velocity relative to the bank is the **vector sum** of these two — a diagonal of the parallelogram they form. Magnitude: √(5² + 3²) = √34 ≈ 5.83 m/s. The boat lands downstream of where it aimed. Engineers designing ferries must account for exactly this vector addition to hit the correct dock.
:::

::: try
On graph paper, draw an arrow 4 cm pointing right (east) and label it $\vec{A}$. Place another arrow 3 cm pointing up (north) at the tip of the first — label it $\vec{B}$. Draw the resultant from the tail of $\vec{A}$ to the tip of $\vec{B}$ and measure it. It should be 5 cm. Now swap the order — draw $\vec{B}$ first, then $\vec{A}$. Same resultant? That's commutativity.
:::

::: whatif
If two vectors have magnitudes 5 and 3, what are the possible magnitudes of their resultant? (Hint: think about what happens as the angle between them varies from 0° to 180°.)
:::

<Quiz
  question="Two forces of 6 N and 8 N act at right angles. Their resultant is:"
  :options="[
    { text: '14 N' },
    { text: '2 N' },
    { text: '10 N', correct: true },
    { text: '7 N' }
  ]"
  explanation="For perpendicular vectors: R = √(6² + 8²) = √(36 + 64) = √100 = 10 N."
/>

::: notes
- **Triangle Law:** head-to-tail placement; resultant closes the triangle from first tail to last head.
- **Parallelogram Law:** tail-to-tail; resultant is the diagonal.
- $R = \sqrt{A^2 + B^2 + 2AB\cos\theta}$
- Max resultant: $A + B$ (same direction). Min resultant: $|A - B|$ (opposite direction).
- Subtraction: add the negative (reversed) vector.
- Addition is commutative and associative.
:::

::: refs
- [Vector Addition — Khan Academy](https://www.khanacademy.org/science/physics/two-dimensional-motion/vectors-and-projectiles/v/adding-vectors)
- [Motion in a Plane — NCERT Chapter 3](https://ncert.nic.in/textbook/pdf/keph103.pdf)
- [Vector Mathematics — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/vect.html#vect2)
:::
