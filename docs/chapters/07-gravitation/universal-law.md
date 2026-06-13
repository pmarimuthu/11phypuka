---
description: "Newton's universal law of gravitation for Class 11 Physics — F = Gm₁m₂/r². NCERT notes with moon example for JEE Main, KCET and Karnataka PU."
---

# Universal Law of Gravitation

<ConceptMeta chapter="7" section="7.1–7.2" page="137–143" />

<Predict
  label="Apple and Earth"
  prompt="An apple falls toward the Earth. Does the Earth also accelerate toward the apple?"
  :options="[
    { text: 'No — the Earth is too massive to move' },
    { text: 'Yes, but the acceleration is negligibly tiny', correct: true },
    { text: 'Yes, and the accelerations are equal in magnitude' },
    { text: 'Only the apple accelerates because gravity only pulls downward' }
  ]"
  reveal="Newton's third law: the apple pulls the Earth upward with the same force the Earth pulls the apple downward. F = ma, so a_Earth = F/M_Earth ≈ 10⁻²⁵ m/s² — real but immeasurably tiny. The apple's acceleration is 9.8 m/s² because it is so much lighter."
/>

::: idea
Newton's **Universal Law of Gravitation** states that every object in the universe attracts every other object with a gravitational force. This is not just Earth pulling on you — it is true for any two masses, anywhere in the universe.

Three facts about this force:
1. It is **attractive** — always pulls, never pushes.
2. It is **proportional to both masses** — double either mass, double the force.
3. It is an **inverse-square law** — double the distance, force drops to one-quarter.

The same law that makes an apple fall also keeps the Moon in orbit and holds galaxies together. Newton showed these are identical phenomena: the Moon is just continuously "falling" toward the Earth while moving sideways fast enough to miss it.

The constant $G$ (Big G) is universal — the same everywhere in the universe. It is extremely small, which is why gravity is undetectable between everyday objects.
:::

<ConceptHero type="universal-law" />

::: formula
**Newton's Universal Law of Gravitation:**

$$F = G \frac{m_1 m_2}{r^2}$$

where:
- $F$ = gravitational force (N)
- $G = 6.674 \times 10^{-11}$ N·m²·kg⁻² (universal gravitational constant)
- $m_1, m_2$ = masses of the two objects (kg)
- $r$ = distance between their centres (m)

**Acceleration due to gravity** at Earth's surface:

$$g = \frac{GM_E}{R_E^2} \approx 9.8 \text{ m/s}^2$$

**Variation of $g$ with height $h$ above surface** (for $h \ll R_E$):

$$g_h \approx g\left(1 - \frac{2h}{R_E}\right)$$

**Variation with depth $d$ below surface:**

$$g_d = g\left(1 - \frac{d}{R_E}\right)$$

$g$ is zero at the Earth's centre ($d = R_E$).
:::

::: real
**The Moon as a falling object:** The Moon is about 60 Earth radii away. By the inverse-square law, gravity there is $(1/60)^2 \approx 1/3600$ of surface gravity, so $g_{\text{Moon's orbit}} \approx 9.8/3600 \approx 0.0027$ m/s². The centripetal acceleration of the Moon (calculated from its orbit radius and period) is exactly $0.0027$ m/s². Newton verified this match and concluded: the same force that pulls the apple pulls the Moon. One law for both.
:::

::: try
Weigh yourself on a bathroom scale at ground floor, then on the top floor of a tall building (say 30 m high). The difference is negligibly small ($\Delta g / g = 2h/R_E \approx 10^{-5}$), but the calculation shows $g$ genuinely decreases with height. Astronauts at 400 km altitude still experience $g \approx 8.7$ m/s² — not zero! They feel weightless because they are in free fall, not because gravity is absent.
:::

::: whatif
If the Earth were compressed to half its current radius (keeping the same mass), what would happen to $g$ at the surface? And how would the gravitational force between the Earth and the Moon change?
:::

<Quiz
  question="If the distance between two masses is tripled, the gravitational force becomes:"
  :options="[
    { text: '1/3 of the original' },
    { text: '1/6 of the original' },
    { text: '1/9 of the original', correct: true },
    { text: '9 times the original' }
  ]"
  explanation="F ∝ 1/r². Tripling r gives F ∝ 1/(3r)² = 1/9r². So force becomes 1/9 of original."
/>

::: notes
- $F = Gm_1m_2/r^2$; $G = 6.674 \times 10^{-11}$ N·m²·kg⁻².
- Always attractive; acts along the line joining the centres.
- Inverse-square: double distance → quarter force; triple → one-ninth.
- $g = GM_E/R_E^2 \approx 9.8$ m/s² at Earth's surface.
- $g$ decreases with height ($\propto 1/r^2$) and with depth (linearly).
- $g$ is zero at Earth's centre; maximum at the surface.
- "Weightlessness" in orbit = free fall, not absence of gravity.
:::

::: refs
- [Newton's Law of Universal Gravitation — Khan Academy](https://www.khanacademy.org/science/physics/gravity/gravity-tutorial/v/introduction-to-gravity)
- [Gravitation — NCERT Chapter 7](https://ncert.nic.in/textbook/pdf/keph107.pdf)
- [Gravitation — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/grav.html)
:::
