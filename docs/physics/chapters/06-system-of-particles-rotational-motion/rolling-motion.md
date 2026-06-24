---
description: "Rolling motion without slipping for Class 11 Physics (NCERT). KE of rolling = ½mv² + ½Iω². JEE Main, KCET and Karnataka PU notes."
---

# Rolling Motion

<ConceptMeta chapter="6" section="6.8" page="124–130" />

<Predict
  label="Wheel on a road"
  prompt="For a wheel rolling without slipping at speed v, what is the velocity of the contact point with the ground?"
  :options="[
    { text: 'v (same as the centre)' },
    { text: '2v (the top moves at 2v)' },
    { text: 'Zero', correct: true },
    { text: 'v/2' }
  ]"
  reveal="Rolling without slipping means the contact point has zero velocity relative to the ground — that is the no-slip condition. The centre moves at v, the top moves at 2v. The contact point is instantaneously at rest, which is why rolling friction is so much lower than sliding friction."
/>

::: idea
**Rolling motion** is the combination of pure translation (CM moves forward) and pure rotation (spinning about CM). Neither alone — both together.

For **rolling without slipping**, the contact point is momentarily at rest — like a pivot. The translational speed of the centre and the rotational speed are linked by the no-slip condition: $v = R\omega$.

The kinetic energy of rolling splits into two parts:
- Translational KE of the CM: $\frac{1}{2}Mv^2$
- Rotational KE about the CM: $\frac{1}{2}I_{\text{cm}}\omega^2$

Objects with smaller moment of inertia (solid cylinder, solid sphere) keep more energy in translation — they roll faster down a ramp. Objects with larger $I$ (hollow cylinder, ring) put more energy into rotation — they roll slower.
:::

<ConceptHero type="rolling-motion" />

::: formula
**No-slip condition:**

$$v_{\text{cm}} = R\omega$$

**Total kinetic energy of rolling:**

$$KE_{\text{total}} = \frac{1}{2}Mv_{\text{cm}}^2 + \frac{1}{2}I_{\text{cm}}\omega^2$$

Substituting $\omega = v/R$:

$$KE_{\text{total}} = \frac{1}{2}Mv^2\left(1 + \frac{I_{\text{cm}}}{MR^2}\right)$$

**Velocities of key points** (pure rolling):

| Point | Velocity (magnitude) |
|-------|----------------------|
| Contact point | 0 |
| Centre (CM) | $v$ |
| Top of wheel | $2v$ |

**Acceleration down an incline** (angle $\theta$, rolling without slip):

$$a = \frac{g\sin\theta}{1 + I_{\text{cm}}/(MR^2)}$$

Solid cylinder: $a = \frac{2}{3}g\sin\theta$. Hollow cylinder: $a = \frac{1}{2}g\sin\theta$.
:::

::: real
**Why trains can travel faster than cars on the same energy budget:** Steel wheels on steel rails roll with almost perfect no-slip contact. The contact point is nearly at rest, so almost no kinetic energy is wasted in friction (unlike a skidding wheel). This is why railway transport is dramatically more energy-efficient per tonne-kilometre than road transport — rolling friction on rails is about 5–10 times less than tyre friction on asphalt.
:::

::: try
Release a tin can (full of soup) and an empty tin can from the top of a ramp. The full one reaches the bottom faster — it is effectively a solid cylinder ($I = \frac{1}{2}MR^2$), while the empty can behaves like a hollow shell ($I \approx MR^2$). Now try a ball bearing (sphere, $I = \frac{2}{5}MR^2$) — it should beat both.
:::

::: whatif
A wheel rolls without slipping. A stone is stuck at the very top of the wheel. What is the stone's speed? What is the acceleration of the stone at the top? (Hint: use the velocity at the top = 2v and think about centripetal acceleration.)
:::

<Quiz
  question="A solid cylinder and a hollow cylinder of equal mass and radius roll down the same slope from rest. Which has more translational KE at the bottom?"
  :options="[
    { text: 'Hollow cylinder, it stores more rotational KE' },
    { text: 'Solid cylinder, it has lower I so more energy stays as translation', correct: true },
    { text: 'They have the same translational KE because they start from the same height' },
    { text: 'Cannot tell without knowing mass' }
  ]"
  explanation="Both start with the same PE = Mgh. Solid cylinder: KE_trans = (2/3)Mgh. Hollow: KE_trans = (1/2)Mgh. The solid cylinder translates faster because less energy goes to rotation."
/>

::: notes
- Rolling without slipping: $v = R\omega$ (no-slip condition).
- Top of wheel: $2v$. Bottom (contact point): 0.
- $KE_{\text{roll}} = \frac{1}{2}Mv^2 + \frac{1}{2}I\omega^2 = \frac{1}{2}Mv^2(1 + I/MR^2)$.
- Acceleration on slope: $a = g\sin\theta / (1 + I/MR^2)$.
- Ranking (fastest to slowest down a slope): solid sphere > solid cylinder > hollow sphere > hollow cylinder/ring.
- Rolling friction ≪ sliding friction — why wheels are so efficient.
:::

::: refs
- [Rolling Motion — Khan Academy](https://www.khanacademy.org/science/physics/torque-angular-momentum/rolling-motion/v/rolling-without-slipping)
- [System of Particles — NCERT Chapter 6](https://ncert.nic.in/textbook/pdf/keph106.pdf)
- [Rolling Motion — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/rotq.html)
:::
