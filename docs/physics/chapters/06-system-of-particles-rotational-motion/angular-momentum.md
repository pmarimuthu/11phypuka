---
description: "Angular momentum L = Iω for Class 11 Physics (NCERT). Conservation of angular momentum — figure skater and planet examples. JEE, KCET notes."
---

# Angular Momentum

<ConceptMeta chapter="6" section="6.5–6.6" page="112–118" />

<Predict
  label="Spinning skater"
  prompt="An ice skater spins with arms outstretched, then pulls her arms in. What happens?"
  :options="[
    { text: 'She spins slower because she is more compact' },
    { text: 'She spins faster because angular momentum is conserved', correct: true },
    { text: 'Her spin rate does not change' },
    { text: 'She stops because there is no external torque' }
  ]"
  reveal="With no external torque (frictionless ice), angular momentum L = Iω is conserved. When she pulls her arms in, moment of inertia I decreases. To keep L constant, ω must increase — she spins faster. This is conservation of angular momentum in action."
/>

::: idea
**Angular momentum** ($L$) is the rotational equivalent of linear momentum ($p$). Just as a moving object resists changes to its linear motion, a rotating object resists changes to its spin.

The key conservation law: **if no external torque acts on a system, its total angular momentum remains constant.** This is as fundamental as conservation of linear momentum.

Angular momentum has both magnitude and direction. For a spinning top or wheel, the direction of $\vec{L}$ is along the rotation axis (right-hand rule). This directional stability is why a spinning bicycle wheel resists tipping — it has angular momentum pointing sideways, and changing that direction requires a torque.

The torque–angular momentum relationship ($\vec{\tau} = d\vec{L}/dt$) is the rotational analogue of Newton's second law.
:::

<ConceptHero type="angular-momentum" />

::: formula
**Angular momentum of a particle:**

$$\vec{L} = \vec{r} \times \vec{p} = \vec{r} \times m\vec{v}$$

**Magnitude:**

$$L = mvr\sin\theta = m v_\perp r$$

where $v_\perp$ = component of velocity perpendicular to $\vec{r}$.

**Angular momentum of a rigid body rotating about a fixed axis:**

$$L = I\omega$$

where $I$ = moment of inertia, $\omega$ = angular velocity.

**Newton's 2nd law for rotation:**

$$\vec{\tau}_{\text{net}} = \frac{d\vec{L}}{dt}$$

**Conservation of angular momentum** (when $\vec{\tau}_{\text{net}} = 0$):

$$I_1 \omega_1 = I_2 \omega_2 = \text{constant}$$
:::

::: real
**Planets speeding up near the Sun:** Kepler's second law — a planet sweeps equal areas in equal times — is a direct consequence of angular momentum conservation. As a planet approaches the Sun, the gravitational force acts toward the Sun (through the planet's position vector), so the torque about the Sun is zero. Angular momentum is conserved: closer to the Sun means smaller $r$, so $v$ must be larger. This is why Earth moves fastest in January (closest to the Sun) and slowest in July.
:::

::: try
Sit on a swivel chair (or a stool that can rotate). Hold a heavy book in each hand with arms outstretched. Spin yourself gently. Now pull the books in to your chest. You should spin noticeably faster. Spread arms again — you slow down. The friction in the chair bearing means it is not perfect, but the effect is clear.
:::

::: whatif
A student says: "If I drop an object from rest, it has no angular momentum about any point." Is this correct? (Hint: compute $L = mvr\sin\theta$ about a point that is not directly above or below the object's path.)
:::

<Quiz
  question="A spinning figure-skater pulls her arms in, reducing her moment of inertia by half. Her new angular speed is:"
  :options="[
    { text: 'Halved' },
    { text: 'Unchanged' },
    { text: 'Doubled', correct: true },
    { text: 'Quadrupled' }
  ]"
  explanation="L = Iω is conserved. I₂ = I₁/2, so ω₂ = L/I₂ = L/(I₁/2) = 2(L/I₁) = 2ω₁."
/>

::: notes
- $\vec{L} = \vec{r} \times m\vec{v}$ for a particle; $L = I\omega$ for a rigid body.
- $\vec{\tau} = d\vec{L}/dt$ — torque changes angular momentum.
- Conservation: if $\tau_{\text{net}} = 0$, then $L = I\omega = \text{const}$.
- Decreasing $I$ (arms in) → $\omega$ increases; increasing $I$ (arms out) → $\omega$ decreases.
- Direction of $\vec{L}$: right-hand rule along rotation axis.
- Gyroscopic stability: spinning wheel resists change in $\vec{L}$ direction.
:::

::: refs
- [Angular Momentum — Khan Academy](https://www.khanacademy.org/science/physics/torque-angular-momentum/angular-momentum-tutorial/v/angular-momentum)
- [System of Particles — NCERT Chapter 6](https://ncert.nic.in/textbook/pdf/keph106.pdf)
- [Angular Momentum — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/amom.html)
:::
