---
description: "Kepler's three laws of planetary motion for Class 11 Physics (NCERT). Ellipse, equal areas, T² ∝ r³. Notes for JEE Main, JEE Advanced and KCET."
---

# Kepler's Laws

<ConceptMeta chapter="7" section="7.8" page="160–165" />

<Predict
  label="Equal areas"
  prompt="A planet moves faster when it is closer to the Sun. Which law explains this?"
  :options="[
    { text: 'First law — the orbit is an ellipse' },
    { text: 'Second law — equal areas in equal times', correct: true },
    { text: 'Third law — T² ∝ a³' },
    { text: 'Conservation of kinetic energy' }
  ]"
  reveal="Kepler's second law states that the line joining the planet to the Sun sweeps out equal areas in equal times. To sweep equal areas near the Sun (where r is small), the planet must move faster. This is a consequence of conservation of angular momentum — gravity acts radially, so torque about the Sun is zero and L = mvr is constant."
/>

::: idea
**Kepler's three laws** describe planetary motion empirically — Kepler deduced them by painstakingly analysing decades of Tycho Brahe's naked-eye observations of planetary positions.

Newton later showed that all three laws follow mathematically from a single assumption: the inverse-square law of gravity.

**First law (law of orbits):** Planets orbit the Sun in ellipses with the Sun at one focus. A circle is a special case (both foci at the same point).

**Second law (law of areas):** The line from the Sun to a planet sweeps equal areas in equal time intervals. This is equivalent to conservation of angular momentum.

**Third law (law of periods):** The square of the orbital period is proportional to the cube of the semi-major axis. This relates orbital size to orbital time — and the constant of proportionality is the same for all planets orbiting the same star.
:::

<ConceptHero type="keplers-laws" />

::: formula
**Kepler's First Law:**
Planet orbits the Sun in an ellipse; Sun is at one focus.

Semi-major axis = $a$; semi-minor axis = $b$.

**Kepler's Second Law:**

$$\frac{dA}{dt} = \frac{L}{2m} = \text{constant}$$

Equal areas swept in equal times ↔ conservation of angular momentum ($L = $ const, since gravitational torque about Sun = 0).

Speed at perihelion $v_p$ and aphelion $v_a$:

$$v_p r_p = v_a r_a \quad (\text{from conservation of } L = mvr)$$

**Kepler's Third Law:**

$$T^2 = \frac{4\pi^2}{GM} a^3 \quad \Rightarrow \quad T^2 \propto a^3$$

For planets in the Solar System (orbiting the Sun, $M = M_\odot$):

$$\frac{T^2}{a^3} = \text{same constant for all planets}$$

| Planet | $a$ (AU) | $T$ (years) | $T^2/a^3$ |
|--------|-----------|-------------|------------|
| Mercury | 0.387 | 0.241 | 1.00 |
| Earth | 1.000 | 1.000 | 1.00 |
| Mars | 1.524 | 1.881 | 1.00 |
| Jupiter | 5.203 | 11.86 | 1.00 |
:::

::: real
**Discovering Neptune by calculation:** In the 1840s, astronomers noticed that Uranus was not following its predicted orbit exactly. The French mathematician Urbain Le Verrier calculated where an unknown planet must be to cause those perturbations — using only Newton's laws and Kepler's third law. He sent his prediction to the Berlin Observatory, and Johann Galle found Neptune within 1° of the predicted position on his very first night of searching. It is one of the greatest triumphs of mathematical physics.
:::

::: try
Verify Kepler's third law using Earth and Mars: Earth has $a = 1$ AU, $T = 1$ year. Mars has $T = 1.881$ years. Predict Mars's semi-major axis: $a = T^{2/3} = 1.881^{2/3}$ AU. Calculate and compare to the known value of 1.524 AU.
:::

::: whatif
A comet has a highly elliptical orbit with semi-major axis $a = 17.8$ AU (like Halley's comet). Using Kepler's third law, calculate its period in years. How much of that time does it spend near the Sun (within, say, 2 AU)?
:::

<Quiz
  question="If a planet's orbital period is 8 years, what is its average orbital radius in AU? (Use T² ∝ a³)"
  :options="[
    { text: '2 AU' },
    { text: '4 AU', correct: true },
    { text: '8 AU' },
    { text: '64 AU' }
  ]"
  explanation="T² = a³ (with T in years, a in AU). 8² = 64 = a³, so a = ∛64 = 4 AU."
/>

::: notes
- **1st law:** Elliptical orbits; Sun at one focus.
- **2nd law:** Equal areas in equal times ↔ $L = mvr\sin\theta = $ const (angular momentum conserved).
- Faster at perihelion (closer), slower at aphelion (farther): $v_p r_p = v_a r_a$.
- **3rd law:** $T^2 \propto a^3$; constant $= 4\pi^2/GM$ (same for all bodies orbiting same central mass).
- In AU and years: $T^2 = a^3$ for Solar System planets.
- All three laws derivable from Newton's law of gravitation.
:::

::: refs
- [Kepler's Laws — Khan Academy](https://www.khanacademy.org/science/physics/gravity/gravity-tutorial/v/keplers-first-law)
- [Gravitation — NCERT Chapter 7](https://ncert.nic.in/textbook/pdf/keph107.pdf)
- [Kepler's Laws — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/kepler.html)
:::
