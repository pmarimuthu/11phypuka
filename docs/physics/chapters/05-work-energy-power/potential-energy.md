---
description: "Gravitational potential energy mgh for Class 11 Physics (NCERT). Conservative forces, elastic PE. Notes for JEE Main, KCET and Karnataka PU."
---

# Potential Energy

<ConceptMeta chapter="5" section="5.5–5.6" page="83–88" />

<Predict
  label="Spring vs height"
  prompt="A compressed spring and a raised stone — both have potential energy. What type of potential energy does each store?"
  :options="[
    { text: 'Spring: gravitational; stone: elastic' },
    { text: 'Spring: elastic; stone: gravitational', correct: true },
    { text: 'Both store gravitational potential energy' },
    { text: 'Springs store kinetic energy' }
  ]"
  reveal="Potential energy is stored by position or configuration. A raised stone stores gravitational PE (position above Earth). A compressed spring stores elastic PE (deformed configuration). Both can release it as kinetic energy."
/>

::: idea
**Potential energy (PE)** is energy stored by virtue of position or configuration — it's work done *against* a conservative force that can be fully recovered later.

**Gravitational PE:** lift a book against gravity — you do work, which is stored as height. Release it, and gravity converts that stored energy back into kinetic energy.

**Elastic (spring) PE:** compress a spring against its restoring force — work is stored in the deformation. Release it, and the spring launches the object.

The crucial property of potential energy: it's only defined for **conservative forces** — forces where the work done is path-independent and fully recoverable (gravity, spring force). Friction is non-conservative — work done against it turns into heat and cannot be recovered.
:::

<ConceptHero type="potential-energy" />

::: formula
**Gravitational potential energy** (near Earth's surface, taking ground as zero):

$$PE_g = mgh$$

**Elastic potential energy** stored in a spring compressed or stretched by $x$:

$$PE_s = \frac{1}{2}kx^2$$

**Relation to conservative force:**

$$F = -\frac{dU}{dx}$$

(The force is the negative slope of the PE–position graph. The spring force $F = -kx$ follows directly from $U = \frac{1}{2}kx^2$.)

Symbols:
- $m$ — mass (kg), $g$ — gravitational acceleration (m/s²), $h$ — height above reference (m)
- $k$ — spring constant (N/m), $x$ — compression/extension from natural length (m)
- $U$ — potential energy (J)
:::

::: real
A hydroelectric dam stores gravitational PE as water in an elevated reservoir. When water falls through turbines, PE → KE of water → KE of turbine blades → electrical energy. The Tehri Dam (Uttarakhand) stores water at 260 m above the turbines. Every cubic metre of water (1000 kg) carries $mgh = 1000 × 9.8 × 260 ≈ 2.5$ MJ of gravitational PE — enough to power a 100 W bulb for about 7 hours. The entire dam's capacity is 1000 MW, converting stored PE to electricity around the clock.
:::

::: try
Pull a rubber band back by 2 cm, then by 4 cm, and launch a small paper ball each time. The ball reaches 4× the height on the second launch (if the rubber band behaves like a spring: PE = ½kx², doubling x quadruples PE, giving 4× the kinetic energy and therefore 4× the height). Measure and check!
:::

::: whatif
The reference level for gravitational PE is arbitrary — you can choose the floor, sea level, or even the ceiling as zero. Does changing the reference change the *difference* in PE between two heights? Does it affect energy conservation calculations? (Hint: only differences in PE ever appear in the equations.)
:::

<Quiz
  question="A spring with k = 200 N/m is compressed by 0.1 m. Its elastic PE is:"
  :options="[
    { text: '20 J' },
    { text: '1 J', correct: true },
    { text: '10 J' },
    { text: '0.1 J' }
  ]"
  explanation="PE = ½kx² = ½ × 200 × (0.1)² = ½ × 200 × 0.01 = 1 J."
/>

::: notes
- $PE_g = mgh$; reference level is arbitrary; only differences matter.
- $PE_s = \frac{1}{2}kx^2$; $k$ = spring constant (N/m).
- PE defined only for **conservative forces** (gravity, spring). Friction is non-conservative.
- $F = -dU/dx$: force is negative gradient of PE.
- Doubling height → 2× gravitational PE. Doubling compression → 4× elastic PE (goes as x²).
:::

::: refs
- [Potential Energy — Khan Academy](https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-gravitational-potential-energy)
- [Work, Energy and Power — NCERT Chapter 5](https://ncert.nic.in/textbook/pdf/keph105.pdf)
- [Potential Energy — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/pegrav.html)
:::
