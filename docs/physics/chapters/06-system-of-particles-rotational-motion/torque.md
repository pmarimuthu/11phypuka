---
description: "Torque (moment of force) for Class 11 Physics — τ = r × F. Lever principle and couple. NCERT notes for JEE Main, JEE Advanced and KCET."
---

# Torque

<ConceptMeta chapter="6" section="6.3–6.4" page="107–112" />

<Predict
  label="Door handle position"
  prompt="Why is the door handle placed at the far edge from the hinge — and not near the hinge?"
  :options="[
    { text: 'It looks better at the edge' },
    { text: 'A larger perpendicular distance from the hinge means a larger torque for the same force', correct: true },
    { text: 'The handle is lighter at the edge' },
    { text: 'There is no physics reason — it is just convention' }
  ]"
  reveal="Torque = force × perpendicular distance from the pivot (the moment arm). Placing the handle far from the hinge maximises the moment arm, so the same hand force produces the largest possible torque to rotate the door. Pushing near the hinge would require much more force."
/>

::: idea
**Torque** (also called moment of force) is the rotational equivalent of force. Just as force causes linear acceleration, torque causes angular acceleration.

Torque depends on three things:
1. **Magnitude of the force** — larger force, larger torque.
2. **Perpendicular distance from the pivot** (moment arm or lever arm) — farther from the axis, larger torque.
3. **Direction** — torques can be clockwise or anticlockwise.

A force applied exactly through the pivot produces *zero* torque — it cannot cause rotation because the moment arm is zero.

For a system in **rotational equilibrium**, the sum of all torques about any point must be zero (just as net force = 0 for translational equilibrium).
:::

<ConceptHero type="torque" />

::: formula
**Torque (magnitude):**

$$\tau = r F \sin\theta$$

where $r$ = distance from pivot to point of application, $F$ = magnitude of force, $\theta$ = angle between $\vec{r}$ and $\vec{F}$.

**Torque (vector form):**

$$\vec{\tau} = \vec{r} \times \vec{F}$$

Direction: right-hand rule — curl fingers from $\vec{r}$ toward $\vec{F}$; thumb points along $\vec{\tau}$.

**Moment arm** (perpendicular distance from pivot to the line of action of force):

$$\tau = F \times d_{\perp}$$

**Rotational equilibrium** (like a see-saw balanced):

$$\sum \tau_{\text{clockwise}} = \sum \tau_{\text{anticlockwise}}$$

**Newton's 2nd law for rotation:**

$$\tau_{\text{net}} = I \alpha$$

where $I$ = moment of inertia, $\alpha$ = angular acceleration.
:::

::: real
**The spanner and the bolt:** A mechanic uses a 30 cm wrench to tighten a bolt. If they apply 20 N at the end perpendicular to the wrench, the torque is $\tau = 0.30 \times 20 = 6$ N·m. A longer spanner (60 cm) delivers 12 N·m with the same force — that's why mechanics prefer long spanners for tight bolts. A torque wrench in a car engine is set to specific values (e.g., 90 N·m for a wheel nut) to avoid under- or over-tightening.
:::

::: try
Place a ruler over a cylindrical pencil as a pivot. Put a 20 g coin at 15 cm from the pivot on the left side. Find where to place a 10 g coin on the right to balance the ruler (rotational equilibrium). Verify: $\tau_{\text{left}} = \tau_{\text{right}}$ means $m_1 g d_1 = m_2 g d_2$, so $d_2 = 2 \times d_1 = 30$ cm.
:::

::: whatif
A force is applied exactly along the line joining the force's point of application to the pivot. What is the torque? What does this tell you about pushing a door directly toward or away from its hinge?
:::

<Quiz
  question="A force of 10 N is applied at 0.5 m from a pivot at 90° to the lever arm. The torque is:"
  :options="[
    { text: '5 N·m', correct: true },
    { text: '10 N·m' },
    { text: '0.5 N·m' },
    { text: '20 N·m' }
  ]"
  explanation="τ = rF sinθ = 0.5 × 10 × sin90° = 0.5 × 10 × 1 = 5 N·m."
/>

::: notes
- Torque $\tau = rF\sin\theta = \vec{r} \times \vec{F}$. Units: N·m.
- Moment arm = perpendicular distance from pivot to line of action.
- Torque = 0 if force passes through the pivot ($\theta = 0$ or $180°$).
- Rotational equilibrium: net torque = 0 about *any* point.
- $\tau_{\text{net}} = I\alpha$ — rotational analogue of $F = ma$.
- Direction: anticlockwise positive by convention (or use right-hand rule for 3D).
:::

::: refs
- [Torque — Khan Academy](https://www.khanacademy.org/science/physics/torque-angular-momentum/torque-tutorial/v/introduction-to-torque)
- [System of Particles — NCERT Chapter 6](https://ncert.nic.in/textbook/pdf/keph106.pdf)
- [Torque — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/torq.html)
:::
