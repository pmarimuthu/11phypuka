---
description: "Fluid pressure and Pascal's law for Class 11 Physics (NCERT). Hydraulic machines, atmospheric pressure. Notes for JEE Main, KCET, Karnataka PU."
---

# Pressure & Pascal's Law

<ConceptMeta chapter="9" section="9.2–9.3" page="192–197" />

<Predict
  label="Hydraulic press"
  prompt="A hydraulic press has a small piston of area 10 cm² and a large piston of area 1000 cm². A force of 100 N is applied to the small piston. What force acts on the large piston?"
  :options="[
    { text: '100 N' },
    { text: '1000 N' },
    { text: '10 000 N', correct: true },
    { text: '1 N' }
  ]"
  reveal="Pascal's Law: pressure transmits equally. p = F₁/A₁ = 100/10×10⁻⁴ = 10⁵ Pa. Force on large piston = p × A₂ = 10⁵ × 1000×10⁻⁴ = 10 000 N. Force is amplified by the ratio of areas (1000/10 = 100×)."
/>

::: idea
**Pressure** at a point in a fluid is the normal force per unit area. It acts equally in all directions.

In a static fluid, pressure increases with depth:
$$p = p_0 + \rho g h$$

**Pascal's Law:** A change in pressure applied to an enclosed fluid is transmitted undiminished to every point of the fluid and the walls of the container.

This is why a hydraulic jack can lift a car: a small force on a small piston creates a large force on a large piston, because pressure multiplies by area.
:::

<ConceptHero type="pressure" />

::: formula
**Pressure:**
$$p = \frac{F}{A} \quad [\text{Pa} = \text{N/m}^2]$$

**Pressure with depth:**
$$p = p_0 + \rho g h$$

**Pascal's Law (hydraulic machines):**
$$\frac{F_1}{A_1} = \frac{F_2}{A_2} \quad \Rightarrow \quad F_2 = F_1 \frac{A_2}{A_1}$$

1 atm = 101 325 Pa ≈ 10⁵ Pa = 76 cm of Hg = 10.3 m of water.
:::

::: real
**Hydraulic brakes:** In your car, pressing the brake pedal with a modest force (~100 N) on the master cylinder creates a pressure transmitted equally to all four wheel cylinders. Because the wheel cylinders have larger pistons, the braking force at each wheel is much larger — enough to stop a car safely. This is Pascal's Law in daily use.
:::

::: try
Fill a plastic bottle with water and make three small holes at different heights. Notice the lowest hole shoots water the farthest — the pressure (and therefore speed) is greatest at the greatest depth. This directly demonstrates $p = \rho g h$.
:::

::: whatif
The Mariana Trench reaches ~11 km depth. The pressure there is about 1100 atm = 1.1 × 10⁸ Pa. A human body would be instantly crushed. Yet certain microbes thrive there. What structural properties would an organism need to survive such pressure?
:::

<Quiz
  question="A fluid exerts a pressure of 5000 Pa at a depth of 0.5 m. What is the density of the fluid? (g = 10 m/s²)"
  :options="[
    { text: '100 kg/m³' },
    { text: '500 kg/m³' },
    { text: '1000 kg/m³', correct: true },
    { text: '2500 kg/m³' }
  ]"
  explanation="p = ρgh → ρ = p/(gh) = 5000/(10 × 0.5) = 1000 kg/m³ (water)."
/>

::: notes
- Pressure = F/A, SI unit Pa
- Pressure in a fluid: p = p₀ + ρgh (increases with depth)
- Pascal's Law: pressure transmitted equally in all directions in static fluid
- Hydraulic machines: F₂/F₁ = A₂/A₁ (force multiplication)
- Gauge pressure = total pressure − atmospheric pressure
:::

::: refs
- [Pascal's Law — Khan Academy](https://www.khanacademy.org/science/physics/fluids/fluid-pressure/v/pascals-principle)
- [NCERT Ch9](https://ncert.nic.in/textbook/pdf/keph109.pdf)
:::
