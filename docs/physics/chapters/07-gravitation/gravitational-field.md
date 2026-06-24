---
description: "Gravitational field and potential for Class 11 Physics (NCERT). Field strength g, field lines. Notes for JEE Main, JEE Advanced and KCET."
---

# Gravitational Field & Potential

<ConceptMeta chapter="7" section="7.3–7.4" page="143–150" />

<Predict
  label="Field concept"
  prompt="Why do we introduce the concept of a gravitational field instead of just using the force formula directly?"
  :options="[
    { text: 'The field formula is mathematically simpler' },
    { text: 'The field describes the effect of a mass on the surrounding space, independent of any test mass', correct: true },
    { text: 'Fields only apply to electric and magnetic forces, not gravity' },
    { text: 'The field and force give different numerical answers' }
  ]"
  reveal="The gravitational field at a point is the force per unit mass that would act on any test mass placed there. It is a property of the source mass and the location in space — not of what you put there. This lets you map gravity in a region without specifying a particular test object."
/>

::: idea
The **gravitational field** at a point in space is the gravitational force per unit mass that a small test mass would experience there.

The **gravitational potential** at a point is the work done per unit mass in bringing a test mass from infinity to that point against the gravitational force. It is always negative — you have to do *negative* work (the field does the work for you) to bring an object in from infinity, so you end up in a lower energy state.

The relationship between field and potential is analogous to the relationship between force and potential energy:
- Force = −(gradient of PE) → Field = −(gradient of potential)

Moving from high potential to low potential is like rolling downhill — objects accelerate in that direction naturally.
:::

<ConceptHero type="gravitational-field" />

::: formula
**Gravitational field intensity** at distance $r$ from a point mass $M$:

$$\vec{g} = -\frac{GM}{r^2}\hat{r}$$

Magnitude: $g = GM/r^2$. Direction: toward the source mass.

**Gravitational potential** at distance $r$ from mass $M$:

$$V = -\frac{GM}{r}$$

(Always negative; zero at $r \to \infty$.)

**Relation between field and potential:**

$$g = -\frac{dV}{dr}$$

**Gravitational potential energy** of a mass $m$ at distance $r$:

$$U = mV = -\frac{GMm}{r}$$

At Earth's surface (taking surface as reference, $h \ll R_E$):

$$\Delta U = mgh$$

(familiar result — the low-$h$ approximation of the exact formula)
:::

::: real
**GPS satellites and gravitational potential:** GPS satellites orbit at about 20 200 km altitude. At that height, the gravitational potential is less negative (higher) than at Earth's surface. By general relativity (which builds on these ideas), time runs slightly faster at higher potential — by about 45 µs/day. If uncorrected, GPS positions would drift by ~10 km/day. The system applies continuous corrections using both gravitational and relativistic time effects — an engineering application of gravitational potential.
:::

::: try
Draw concentric circles around a dot (representing Earth) to represent equipotential surfaces — like contour lines on a map. The potential $V = -GM/r$ becomes less negative as $r$ grows. Objects released from rest on an equipotential surface feel no net tangential force — they only accelerate *perpendicular* to the surface (radially inward, toward Earth). This is exactly why planets on circular orbits don't gain or lose speed — they move along an equipotential.
:::

::: whatif
The gravitational potential at Earth's surface is $V_s = -GM_E/R_E \approx -63$ MJ/kg. If you could somehow "switch off" gravity and needed to supply this energy to lift 1 kg from the surface to infinity, how many kWh of energy would that be?
:::

<Quiz
  question="The gravitational potential at a point is –500 J/kg. The gravitational potential energy of a 4 kg mass at this point is:"
  :options="[
    { text: '–125 J' },
    { text: '+2000 J' },
    { text: '–2000 J', correct: true },
    { text: '+500 J' }
  ]"
  explanation="U = mV = 4 × (–500) = –2000 J. Potential energy is negative — the mass is bound to the source."
/>

::: notes
- Gravitational field $g = GM/r^2$ (magnitude); direction toward source.
- Gravitational potential $V = -GM/r$; always negative; zero at infinity.
- $U = mV = -GMm/r$ — gravitational PE.
- $g = -dV/dr$ — field is the negative gradient of potential.
- Equipotential surfaces: spheres centred on mass; no work done moving along them.
- Near Earth's surface: $\Delta U = mgh$ (approximation for $h \ll R_E$).
:::

::: refs
- [Gravitational Potential Energy — Khan Academy](https://www.khanacademy.org/science/physics/gravity/gravity-tutorial/v/gravitational-potential-energy)
- [Gravitation — NCERT Chapter 7](https://ncert.nic.in/textbook/pdf/keph107.pdf)
- [Gravitational Potential — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/gpot.html)
:::
