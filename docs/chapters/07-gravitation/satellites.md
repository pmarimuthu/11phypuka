---
description: "Satellites and orbital velocity for Class 11 Physics (NCERT). Orbital speed, time period, geostationary orbit. Notes for JEE Main, KCET, Karnataka PU."
---

# Satellites & Orbital Motion

<ConceptMeta chapter="7" section="7.6–7.7" page="153–160" />

<Predict
  label="Geostationary orbit"
  prompt="A geostationary satellite appears to stay fixed over one point on the equator. What is special about its orbit?"
  :options="[
    { text: 'It is stationary in space — not orbiting at all' },
    { text: 'Its orbital period exactly equals 24 hours and it orbits over the equator', correct: true },
    { text: 'It is at any altitude but orbits counter to Earth rotation' },
    { text: 'It is in a polar orbit so it covers all longitudes' }
  ]"
  reveal="A geostationary satellite orbits the equator with a period of exactly 24 hours (one sidereal day, actually 23 h 56 min). This matches Earth's rotation rate, so the satellite stays above the same point on the equator. The required altitude is about 35 786 km — determined entirely by orbital mechanics."
/>

::: idea
A **satellite** in orbit is simply an object in free fall — it is constantly falling toward Earth, but moving sideways fast enough to keep missing the planet. There is no "magical" support; gravity is the only force acting.

For a **circular orbit**, the gravitational force provides exactly the centripetal force needed to maintain the circular path. This determines the orbital speed and period uniquely for each altitude — no choice.

Key results:
- Higher orbit → slower orbital speed (counterintuitive for some)
- Higher orbit → longer orbital period
- The total mechanical energy (KE + PE) of a satellite is negative — it is a bound system
- **Geostationary** orbit: period = 24 h, altitude ≈ 35 786 km, always above equator
- **Low Earth orbit (LEO)**: altitude 200–2000 km, period ~90 min (ISS)

There is no "weightlessness switch" in orbit — gravity is still ~8.7 m/s² at ISS altitude. Astronauts feel weightless because they and the station are all in the same free fall together.
:::

<ConceptHero type="satellites" />

::: formula
**Orbital speed** (circular orbit at radius $r$ from Earth's centre):

$$v = \sqrt{\frac{GM_E}{r}}$$

At Earth's surface ($r = R_E$): $v_0 = \sqrt{gR_E} \approx 7.9$ km/s

**Orbital period:**

$$T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM_E}}$$

**Energy of a satellite in circular orbit:**

$$KE = \frac{GMm}{2r}, \quad PE = -\frac{GMm}{r}, \quad E_{\text{total}} = -\frac{GMm}{2r}$$

Note: total energy is negative (bound); $|E_{\text{total}}| = KE$.

**Geostationary orbit radius** (from $T = 24$ h):

$$r_{\text{geo}} = \left(\frac{GM_E T^2}{4\pi^2}\right)^{1/3} \approx 42 164 \text{ km from Earth's centre}$$

Height above surface ≈ 35 786 km.
:::

::: real
**The International Space Station (ISS):** The ISS orbits at about 400 km altitude ($r \approx 6770$ km from Earth's centre). Using $v = \sqrt{GM/r}$: $v \approx 7.66$ km/s = 27 576 km/h. Its period: $T = 2\pi r/v \approx 5550$ s = 92.5 minutes. The ISS completes about 15.5 orbits per day. At that altitude, gravity is $g_h = g(R_E/r)^2 \approx 8.75$ m/s² — nearly as strong as at the surface. The astronauts feel weightless only because the station and everything inside it are falling together.
:::

::: try
Using $T = 2\pi\sqrt{r^3/GM_E}$ with $G = 6.67 \times 10^{-11}$, $M_E = 6 \times 10^{24}$ kg, calculate the orbital period for the Moon at $r = 3.84 \times 10^8$ m. Compare to the known lunar month of 27.3 days. (This was one of Newton's key verifications of the universal law.)
:::

::: whatif
What happens to the orbital speed and period if a satellite loses energy due to atmospheric drag and drops to a lower orbit? (The answer is counterintuitive — it actually speeds up. Why?)
:::

<Quiz
  question="If a satellite's orbital radius is increased to 4 times its original value, its orbital period becomes:"
  :options="[
    { text: '4T' },
    { text: '2T' },
    { text: '8T', correct: true },
    { text: '16T' }
  ]"
  explanation="T ∝ r^(3/2). If r → 4r, then T → (4r)^(3/2) = 4^(3/2) · T = 8T. This is Kepler's third law."
/>

::: notes
- Orbital speed $v = \sqrt{GM/r}$ — slower at higher altitude.
- Period $T = 2\pi\sqrt{r^3/GM}$ — longer at higher altitude.
- $T^2 \propto r^3$ (Kepler's 3rd law).
- Total energy $E = -GMm/2r$ (negative = bound orbit).
- Geostationary: $T = 24$ h, $r \approx 42 164$ km, equatorial.
- Weightlessness = free fall, not absence of gravity.
- Escape velocity $= \sqrt{2} \times$ orbital speed at same radius.
:::

::: refs
- [Orbital Mechanics — Khan Academy](https://www.khanacademy.org/science/physics/gravity/gravity-tutorial/v/introduction-to-orbital-motion)
- [Gravitation — NCERT Chapter 7](https://ncert.nic.in/textbook/pdf/keph107.pdf)
- [Satellite Orbits — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/orbv.html)
:::
