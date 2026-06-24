---
description: "Escape velocity for Class 11 Physics — derive v = √(2gR). Why the moon has no atmosphere. NCERT notes for JEE Main, KCET, Karnataka PU."
---

# Escape Velocity

<ConceptMeta chapter="7" section="7.5" page="150–153" />

<Predict
  label="Throwing a ball up"
  prompt="If you throw a ball upward with greater and greater speed, at what speed does it never return?"
  :options="[
    { text: 'Any finite speed — it always comes back' },
    { text: 'When KE equals gravitational PE at the surface', correct: true },
    { text: 'When the speed exceeds the speed of light' },
    { text: 'When the speed exceeds the orbital speed' }
  ]"
  reveal="To escape permanently, the ball needs enough KE to overcome the gravitational PE — ½mv² ≥ GMm/R. When KE = |PE|, the total mechanical energy is zero and the ball just barely escapes (arriving at infinity with zero speed). That critical launch speed is the escape velocity."
/>

::: idea
**Escape velocity** is the minimum speed needed to launch an object from a planet's surface so it escapes the planet's gravitational pull entirely — never returning, even without any additional thrust.

Key insight: escape velocity does NOT depend on the direction of launch (ignoring atmosphere) — it is the same whether you throw straight up, at an angle, or in any direction. It also does NOT depend on the mass of the object being launched.

The escape velocity comes directly from energy conservation: the total mechanical energy (KE + PE) at the surface must be at least zero (the total energy at infinity).

A black hole is an object whose escape velocity exceeds the speed of light — nothing, not even light, can escape once past the event horizon. The radius at which this occurs is the **Schwarzschild radius**.
:::

<ConceptHero type="escape-velocity" />

::: formula
**Escape velocity** (from surface of a planet of mass $M$, radius $R$):

$$v_e = \sqrt{\frac{2GM}{R}}$$

For Earth: $v_e = \sqrt{2 \times 9.8 \times 6.4 \times 10^6} \approx 11.2$ km/s

**From energy conservation** (starting at surface, ending at infinity at rest):

$$\frac{1}{2}mv_e^2 - \frac{GMm}{R} = 0$$

$$v_e = \sqrt{\frac{2GM}{R}} = \sqrt{2gR}$$

**Schwarzschild radius** (radius of a black hole of mass $M$):

$$R_s = \frac{2GM}{c^2}$$

For Earth: $R_s \approx 9$ mm. For the Sun: $R_s \approx 3$ km.

**Orbital speed** vs escape velocity:

$$v_{\text{orbital}} = \sqrt{\frac{GM}{R}} = \frac{v_e}{\sqrt{2}} \approx 0.707\, v_e$$

Escape velocity is $\sqrt{2}$ times the orbital speed at the same radius.
:::

::: real
**Rocket stages and escape velocity:** Earth's escape velocity is 11.2 km/s, but rockets are launched much slower — they accelerate throughout the burn. The rocket equation (Tsiolkovsky) means you need an enormous initial mass of fuel. The Saturn V that sent Apollo to the Moon weighed 2.8 million kg at launch; the payload (the three astronauts and command module) was 45 000 kg — about 1.6% of total launch mass. The rest was fuel to escape Earth's gravity well.
:::

::: try
Calculate the escape velocity for the Moon: $M_{\text{Moon}} = 7.3 \times 10^{22}$ kg, $R_{\text{Moon}} = 1.74 \times 10^6$ m. Use $v_e = \sqrt{2GM/R}$. Compare to Earth's 11.2 km/s. (Answer: ~2.4 km/s — that's why the Apollo lunar module ascent stage, a relatively tiny vehicle, could launch from the Moon's surface.)
:::

::: whatif
If the Earth were compressed to its Schwarzschild radius (~9 mm), it would become a black hole. What would happen to the orbit of the Moon? (Hint: the Moon is 384 000 km away — does compressing Earth change the gravitational force at that distance?)
:::

<Quiz
  question="The escape velocity from Earth's surface is approximately 11.2 km/s. From a planet with twice Earth's mass and twice Earth's radius, the escape velocity is:"
  :options="[
    { text: '5.6 km/s' },
    { text: '11.2 km/s', correct: true },
    { text: '15.8 km/s' },
    { text: '22.4 km/s' }
  ]"
  explanation="v_e = √(2GM/R). Doubling both M and R: v_e' = √(2G·2M/2R) = √(2GM/R) = v_e. The escape velocity is unchanged when M and R both double."
/>

::: notes
- $v_e = \sqrt{2GM/R} = \sqrt{2gR}$.
- Earth: $v_e \approx 11.2$ km/s. Moon: $\approx 2.4$ km/s.
- Independent of launch direction and projectile mass.
- Derivation: set $\frac{1}{2}mv_e^2 = \frac{GMm}{R}$ (total energy = 0).
- Orbital speed $v_0 = \sqrt{GM/R} = v_e/\sqrt{2}$.
- Black hole: $v_e \geq c$; Schwarzschild radius $R_s = 2GM/c^2$.
:::

::: refs
- [Escape Velocity — Khan Academy](https://www.khanacademy.org/science/physics/gravity/gravity-tutorial/v/escape-velocity)
- [Gravitation — NCERT Chapter 7](https://ncert.nic.in/textbook/pdf/keph107.pdf)
- [Escape Velocity — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/vesc.html)
:::
