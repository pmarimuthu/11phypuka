---
description: "Resolving vectors into rectangular components for Class 11 Physics (NCERT). Ax = Acosθ, Ay = Asinθ — notes for JEE Main, KCET and Karnataka PU."
---

# Components of a Vector

<ConceptMeta chapter="3" section="3.4" page="45–48" />

<Predict
  label="Split it up"
  prompt="A force of 10 N acts at 30° above the horizontal. Which component is larger — horizontal or vertical?"
  :options="[
    { text: 'Horizontal (cos 30° is larger)', correct: true },
    { text: 'Vertical (sin 30° is larger)' },
    { text: 'They are equal at 30°' }
  ]"
  reveal="cos 30° ≈ 0.87, sin 30° = 0.50. So horizontal component = 8.7 N, vertical = 5 N. The horizontal is larger whenever the angle is less than 45°."
/>

::: idea
Any vector can be **split into two perpendicular pieces** called its **rectangular components**. This is the single most useful technique in 2D physics — once you decompose every vector into x and y parts, you have two independent 1D problems that you already know how to solve.

The components are shadows: if you shine light straight down onto a vector, the shadow on the x-axis is the x-component; the shadow on the wall (y-axis) is the y-component.

Given those two components, you can always **reconstruct** the original vector using Pythagoras and an inverse tangent.
:::

<ConceptHero type="vector-components" />

::: formula
For a vector $\vec{A}$ of magnitude $A$ at angle $\theta$ measured from the positive x-axis:

$$A_x = A\cos\theta \qquad A_y = A\sin\theta$$

Going the other way (reconstruction):

$$A = \sqrt{A_x^2 + A_y^2} \qquad \theta = \tan^{-1}\!\left(\frac{A_y}{A_x}\right)$$

In component notation:

$$\vec{A} = A_x\,\hat{i} + A_y\,\hat{j}$$

**Adding vectors by components** (much easier than geometry):

$$\vec{R} = \vec{A} + \vec{B} \implies R_x = A_x + B_x,\quad R_y = A_y + B_y$$

Symbols:
- $A_x, A_y$ — x and y components (can be negative)
- $\hat{i}, \hat{j}$ — unit vectors along x and y axes
- $\theta$ — angle from the positive x-axis (anti-clockwise positive)
:::

::: real
When a cricket fielder throws the ball at 20 m/s at 40° above the horizontal, the ball has a horizontal component $v_x = 20\cos40° \approx 15.3$ m/s (this carries the ball toward the wicket) and a vertical component $v_y = 20\sin40° \approx 12.9$ m/s (this lifts the ball against gravity). These two components are completely independent: gravity acts only on the vertical part, and the horizontal part covers distance at constant speed. This decomposition is the key to solving every projectile problem.
:::

::: try
Draw a vector on graph paper at roughly 45°, about 7 cm long. Drop a perpendicular to the x-axis — the foot is at $A_x$ cm. The height at the tip is $A_y$ cm. Measure both. Now compute $\sqrt{A_x^2 + A_y^2}$ — does it equal 7 cm? Check $\tan^{-1}(A_y/A_x)$ against your drawn angle.
:::

::: whatif
A vector has components $A_x = -3$ and $A_y = 4$. What is its magnitude? In which quadrant does it point? (Hint: negative x-component means it points left of the y-axis.)
:::

<Quiz
  question="A velocity vector has components vₓ = 3 m/s and vᵧ = 4 m/s. Its magnitude is:"
  :options="[
    { text: '7 m/s' },
    { text: '3.5 m/s' },
    { text: '5 m/s', correct: true },
    { text: '25 m/s' }
  ]"
  explanation="v = √(3² + 4²) = √(9 + 16) = √25 = 5 m/s."
/>

::: notes
- Components: $A_x = A\cos\theta$, $A_y = A\sin\theta$
- Reconstruction: $A = \sqrt{A_x^2 + A_y^2}$, $\theta = \tan^{-1}(A_y/A_x)$
- Components can be negative (depending on quadrant).
- Vectors add component-wise: $R_x = A_x + B_x$; $R_y = A_y + B_y$.
- This makes multi-vector addition purely arithmetic once decomposed.
:::

::: refs
- [Vector Components — Khan Academy](https://www.khanacademy.org/science/physics/two-dimensional-motion/vectors-and-projectiles/v/vector-components-from-magnitude-direction)
- [Motion in a Plane — NCERT Chapter 3](https://ncert.nic.in/textbook/pdf/keph103.pdf)
- [Vectors — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/vect.html#vcomp)
:::
