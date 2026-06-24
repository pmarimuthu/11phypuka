---
description: "Moment of inertia for Class 11 Physics — I = Σmr². Standard results, theorems of axes. NCERT notes for JEE Main, JEE Advanced and KCET."
---

# Moment of Inertia

<ConceptMeta chapter="6" section="6.7" page="118–124" />

<Predict
  label="Hollow vs solid"
  prompt="A hollow cylinder and a solid cylinder of the same mass and radius start from rest and roll down the same ramp. Which reaches the bottom first?"
  :options="[
    { text: 'The hollow cylinder, because it has less material in the middle' },
    { text: 'The solid cylinder, because its moment of inertia is smaller', correct: true },
    { text: 'They arrive at the same time' },
    { text: 'Cannot be determined without knowing the slope' }
  ]"
  reveal="Moment of inertia of a solid cylinder = ½MR², hollow cylinder = MR². For rolling without slipping, the acceleration depends on I: lower I means more translational acceleration. The solid cylinder always wins because more of its rotational KE goes into translation. This is the key insight of moment of inertia."
/>

::: idea
**Moment of inertia** ($I$) is the rotational equivalent of mass. Mass measures resistance to linear acceleration; moment of inertia measures resistance to angular acceleration.

The crucial difference from mass: moment of inertia depends not just on how much mass an object has, but on *where* that mass is located relative to the rotation axis. Mass far from the axis contributes much more to $I$ than the same mass near the axis (it goes as $r^2$).

This is why:
- A figure skater pulls arms in to spin faster (reduces $I$)
- A flywheel is built with mass concentrated at the rim (maximises $I$ to store more rotational energy)
- Long rods are harder to swing than short ones of the same mass
- Hollow cylinders are harder to spin up than solid ones
:::

<ConceptHero type="moment-of-inertia" />

::: formula
**Moment of inertia (definition):**

$$I = \sum m_i r_i^2$$

For a continuous body:

$$I = \int r^2 \, dm$$

**Common results:**

| Object | Axis | $I$ |
|--------|------|-----|
| Thin rod (length $L$) | Through centre, perpendicular | $\frac{1}{12}ML^2$ |
| Thin rod | Through end, perpendicular | $\frac{1}{3}ML^2$ |
| Solid cylinder/disk (radius $R$) | Through centre | $\frac{1}{2}MR^2$ |
| Hollow cylinder/ring (radius $R$) | Through centre | $MR^2$ |
| Solid sphere (radius $R$) | Through centre | $\frac{2}{5}MR^2$ |
| Hollow sphere (radius $R$) | Through centre | $\frac{2}{3}MR^2$ |

**Parallel axis theorem:**

$$I = I_{\text{cm}} + Md^2$$

where $d$ = distance between the two parallel axes.

**Perpendicular axis theorem** (for a flat lamina):

$$I_z = I_x + I_y$$
:::

::: real
**The flywheel:** Heavy machinery uses flywheels — large spinning disks with mass at the rim — to smooth out power delivery. A car engine fires in pulses, but the flywheel (with large $I$) stores kinetic energy between firings and releases it smoothly. Similarly, a potter's wheel has a heavy base ring to keep spinning evenly despite the varying hand forces applied by the potter.
:::

::: try
Take two cylindrical tins — one full of sand, one empty — of the same radius. Roll them simultaneously down a ramp. The full (solid) one rolls faster. The empty (hollow shell) has all its mass at the rim: $I = MR^2$ vs $\frac{1}{2}MR^2$ for the full one. The higher $I$ means it accelerates rotationally more slowly.
:::

::: whatif
Using the parallel axis theorem, find the moment of inertia of a thin rod of mass $M$, length $L$ about an axis through one end, perpendicular to the rod. Start from $I_{\text{cm}} = \frac{1}{12}ML^2$ and use $d = L/2$.
:::

<Quiz
  question="The moment of inertia of a solid sphere of mass M and radius R about a diameter is:"
  :options="[
    { text: 'MR²' },
    { text: '½MR²' },
    { text: '⅔MR²' },
    { text: '⅖MR²', correct: true }
  ]"
  explanation="Standard result: I = (2/5)MR² for a solid sphere about any diameter. Hollow sphere is (2/3)MR²."
/>

::: notes
- $I = \sum m_i r_i^2$ — mass × (distance from axis)². Units: kg·m².
- Same mass, larger $r$ → larger $I$ (goes as $r^2$).
- Key values: solid cylinder $I = \frac{1}{2}MR^2$; ring $I = MR^2$; solid sphere $I = \frac{2}{5}MR^2$.
- Parallel axis: $I = I_{\text{cm}} + Md^2$.
- Perpendicular axis (lamina only): $I_z = I_x + I_y$.
- Rotational KE: $\frac{1}{2}I\omega^2$.
:::

::: refs
- [Moment of Inertia — Khan Academy](https://www.khanacademy.org/science/physics/torque-angular-momentum/rotational-inertia/v/rotational-inertia)
- [System of Particles — NCERT Chapter 6](https://ncert.nic.in/textbook/pdf/keph106.pdf)
- [Moment of Inertia — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/mi.html)
:::
