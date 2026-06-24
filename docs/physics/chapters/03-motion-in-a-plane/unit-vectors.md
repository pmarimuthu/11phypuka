---
description: "Unit vectors i, j, k for Class 11 Physics (NCERT) — magnitude 1, direction only. Properties and usage in problems for JEE Main, KCET, Karnataka PU."
---

# Unit Vectors

<ConceptMeta chapter="3" section="3.4" page="46–47" />

<Predict
  label="What is |î|?"
  prompt="The unit vector î points along the x-axis. What is its magnitude?"
  :options="[
    { text: '0' },
    { text: '1', correct: true },
    { text: 'Depends on the problem' },
    { text: 'Equal to the x-component' }
  ]"
  reveal="A unit vector has magnitude exactly 1 — that's what makes it a *unit* vector. It carries direction information only; the actual magnitude comes from the scalar multiplied with it."
/>

::: idea
A **unit vector** is a vector of magnitude exactly **1**. Its only job is to point in a direction — it carries no size information itself.

The three standard unit vectors are:
- $\hat{i}$ (or $\hat{x}$) — points along the positive x-axis (east / right)
- $\hat{j}$ (or $\hat{y}$) — points along the positive y-axis (north / up)
- $\hat{k}$ (or $\hat{z}$) — points along the positive z-axis (out of the page)

Any vector in a plane is a scalar multiple of these: $\vec{A} = A_x\hat{i} + A_y\hat{j}$. The numbers $A_x$ and $\hat{i}$ together encode both magnitude and direction.

You can also make a unit vector in *any* direction by dividing a vector by its own magnitude: $\hat{A} = \dfrac{\vec{A}}{|\vec{A}|}$.
:::

<ConceptHero type="unit-vectors" />

::: formula
Standard unit vectors (orthogonal and of magnitude 1):

$$|\hat{i}| = |\hat{j}| = |\hat{k}| = 1$$

Any 2D vector in component form:

$$\vec{A} = A_x\,\hat{i} + A_y\,\hat{j}$$

Any 3D vector:

$$\vec{A} = A_x\,\hat{i} + A_y\,\hat{j} + A_z\,\hat{k}$$

Unit vector in the direction of $\vec{A}$:

$$\hat{A} = \frac{\vec{A}}{|\vec{A}|} = \frac{A_x\,\hat{i} + A_y\,\hat{j}}{\sqrt{A_x^2 + A_y^2}}$$

**Vector addition in component notation:**

$$\vec{A} + \vec{B} = (A_x + B_x)\,\hat{i} + (A_y + B_y)\,\hat{j}$$
:::

::: real
GPS navigation systems store every position as a vector from the Earth's centre — written in three components (latitude, longitude, altitude directions). Speed is stored as a unit vector (direction of motion) multiplied by the scalar speed. When Google Maps calculates your route, it adds and subtracts displacement vectors in exactly this component form. The unit vector framework is why computers can do vector maths efficiently — everything reduces to arithmetic on numbers.
:::

::: try
Take the vector $\vec{A} = 3\hat{i} + 4\hat{j}$. Compute its magnitude: $|\vec{A}| = \sqrt{9+16} = 5$. Divide each component by 5 to get $\hat{A} = 0.6\hat{i} + 0.8\hat{j}$. Verify: $|\hat{A}| = \sqrt{0.36 + 0.64} = \sqrt{1} = 1$. You have stripped away the size and kept only the direction.
:::

::: whatif
If $\vec{A} = 3\hat{i} + 4\hat{j}$ and $\vec{B} = -3\hat{i} - 4\hat{j}$, what is $\hat{A} + \hat{B}$? What does that tell you about the directions of $\vec{A}$ and $\vec{B}$?
:::

<Quiz
  question="The unit vector in the direction of $\vec{A} = 5\hat{i} + 12\hat{j}$ is:"
  :options="[
    { text: '$5\\hat{i} + 12\\hat{j}$' },
    { text: '$\\frac{5}{13}\\hat{i} + \\frac{12}{13}\\hat{j}$', correct: true },
    { text: '$\\frac{1}{5}\\hat{i} + \\frac{1}{12}\\hat{j}$' },
    { text: '$13\\hat{i}$' }
  ]"
  explanation="|A| = √(25 + 144) = √169 = 13. Unit vector = (5/13)î + (12/13)ĵ. Its magnitude = √(25/169 + 144/169) = √1 = 1. ✓"
/>

::: notes
- Unit vector: magnitude = 1; direction only.
- $\hat{i}, \hat{j}, \hat{k}$ point along +x, +y, +z axes.
- Any vector: $\vec{A} = A_x\hat{i} + A_y\hat{j} + A_z\hat{k}$.
- Unit vector in direction of $\vec{A}$: $\hat{A} = \vec{A}/|\vec{A}|$.
- Component form turns vector addition into number addition.
:::

::: refs
- [Unit Vectors — Khan Academy](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/unit-vectors)
- [Motion in a Plane — NCERT Chapter 3](https://ncert.nic.in/textbook/pdf/keph103.pdf)
- [Unit Vectors — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/vect.html#unitvec)
:::
