---
description: "Centre of mass for Class 11 Physics (NCERT) — definition, formula, motion. Notes with uniform rod and lamina examples for JEE Main, KCET, Karnataka PU."
---

# Centre of Mass

<ConceptMeta chapter="6" section="6.1–6.2" page="102–107" />

<Predict
  label="Throwing a bat"
  prompt="A cricket bat is thrown spinning through the air. Which point traces a smooth parabolic path?"
  :options="[
    { text: 'The tip of the bat' },
    { text: 'The handle end' },
    { text: 'The centre of mass of the bat', correct: true },
    { text: 'All points trace the same path' }
  ]"
  reveal="Every point of the spinning bat follows a complex spiral path. Only the centre of mass (roughly one-third from the broad end) follows a clean parabola — exactly as if the entire bat were a single particle located at that one point."
/>

::: idea
The **centre of mass (CM)** of a system of particles is the one special point that moves as if all the mass of the system were concentrated there, acted upon by the net external force.

For a single rigid body with uniform density, the CM is simply the geometric centre (centroid). For an asymmetric object, the CM is closer to the heavier side.

The key law: the CM of a system accelerates in the exact direction of the net external force — regardless of how the internal parts move relative to each other. Internal forces (action–reaction pairs) cancel out and never shift the CM.

This is why an astronaut in space who pushes off one wall drifts toward the other — the CM of the (astronaut + station) system stays put because no external force acts on it.
:::

<ConceptHero type="centre-of-mass" />

::: formula
**Centre of mass — position:**

$$\vec{r}_{\text{cm}} = \frac{m_1 \vec{r}_1 + m_2 \vec{r}_2 + \cdots}{m_1 + m_2 + \cdots} = \frac{\sum m_i \vec{r}_i}{M}$$

For two particles on a line:

$$x_{\text{cm}} = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}$$

**Velocity of CM:**

$$\vec{v}_{\text{cm}} = \frac{\sum m_i \vec{v}_i}{M} = \frac{\vec{p}_{\text{total}}}{M}$$

**Acceleration of CM (Newton's 2nd law for a system):**

$$M \vec{a}_{\text{cm}} = \vec{F}_{\text{ext}}$$

where $M$ = total mass, $\vec{F}_{\text{ext}}$ = net external force only (internal forces sum to zero).
:::

::: real
**The high-jump Fosbury Flop:** When a high-jumper arches their back over the bar, each body part (head, torso, legs) passes over the bar separately — but the CM actually goes *under* the bar. The athlete's body curves around the bar so the CM never rises as high as the bar itself. By using gravity as efficiently as possible, the jumper clears a greater height than the CM ever reaches. This is pure CM physics exploited athletically.
:::

::: try
Tie a heavy nut to one end of a 30 cm ruler and a lighter coin to the other. Balance the ruler on a pencil. The pencil sits closer to the heavy end — that's the CM. Now measure: if the nut is 80 g and the coin is 20 g, the CM should be at 20% of the length from the nut. Verify your prediction.
:::

::: whatif
A 60 kg person and a 40 kg dog are at opposite ends of a 5 m boat floating freely on calm water. The person walks to the dog's end. How far does the boat move? (Hint: the CM of the system doesn't move because there's no net external horizontal force.)
:::

<Quiz
  question="Two particles of mass 3 kg and 1 kg are at x = 0 and x = 4 m. Where is their centre of mass?"
  :options="[
    { text: 'x = 2 m (midpoint)' },
    { text: 'x = 1 m', correct: true },
    { text: 'x = 3 m' },
    { text: 'x = 1.5 m' }
  ]"
  explanation="x_cm = (3×0 + 1×4)/(3+1) = 4/4 = 1 m. The CM is closer to the heavier mass."
/>

::: notes
- CM is the mass-weighted average position: $x_{\text{cm}} = \sum m_i x_i / M$.
- For a uniform body: CM = geometric centre.
- $M \vec{a}_{\text{cm}} = \vec{F}_{\text{ext}}$ — internal forces don't affect CM motion.
- If $\vec{F}_{\text{ext}} = 0$, CM moves at constant velocity (or stays put).
- CM of a system of free particles: each part can do complex things; only CM follows the simple parabolic/straight path.
:::

::: refs
- [Centre of Mass — Khan Academy](https://www.khanacademy.org/science/physics/linear-momentum/center-of-mass/v/center-of-mass)
- [System of Particles — NCERT Chapter 6](https://ncert.nic.in/textbook/pdf/keph106.pdf)
- [Centre of Mass — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/cm.html)
:::
