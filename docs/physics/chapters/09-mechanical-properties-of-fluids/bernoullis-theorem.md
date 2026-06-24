---
description: "Bernoulli's theorem for Class 11 Physics — P + ½ρv² + ρgh = constant. Lift on wings, Venturi meter. NCERT notes for JEE Main, KCET."
---

# Bernoulli's Theorem

<ConceptMeta chapter="9" section="9.8" page="214–218" />

<Predict
  label="Aerofoil lift"
  prompt="Air flows faster over the curved top of an aircraft wing than under the flat bottom. What does Bernoulli's theorem predict?"
  :options="[
    { text: 'Pressure is higher above the wing' },
    { text: 'Pressure is lower above the wing, creating upward lift', correct: true },
    { text: 'The wing is pushed down by fast air' },
    { text: 'No pressure difference is created' }
  ]"
  reveal="Bernoulli's theorem: where fluid velocity is higher, pressure is lower. Air moves faster over the curved top → lower pressure there. Air moves slower under the flat bottom → higher pressure. The pressure difference creates a net upward force — lift."
/>

::: idea
**Bernoulli's Theorem** is conservation of energy applied to a flowing fluid. Along a streamline, the sum of pressure energy, kinetic energy per unit volume, and potential energy per unit volume remains constant.

It applies to:
- Ideal fluid (incompressible, non-viscous)
- Steady (laminar) flow
- Along a streamline

Key insight: **faster flow → lower pressure** and vice versa.
:::

<ConceptHero type="bernoulli" />

::: formula
**Bernoulli's equation:**
$$p + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}$$

**Continuity equation** (mass conservation, incompressible fluid):
$$A_1 v_1 = A_2 v_2$$

**Torricelli's theorem** (speed of efflux from a hole at depth $h$):
$$v = \sqrt{2gh}$$

This is Bernoulli applied between the open top and the hole (same pressure, negligible top velocity).

**Venturi meter** (flow speed from pressure difference):
$$v_1 = A_2\sqrt{\frac{2(p_1-p_2)}{\rho(A_1^2-A_2^2)}}$$
:::

::: real
**Atomiser / perfume spray:** When you press the bulb, air flows rapidly across the top of a narrow tube dipped in perfume. High-speed air → low pressure at the tube top. The atmospheric pressure above the perfume (in the bottle below) pushes liquid up the tube. The liquid gets caught in the airstream and atomised into a fine mist. This is Bernoulli's principle driving a spray.
:::

::: try
Hold two sheets of A4 paper vertically, about 5 cm apart. Blow air between them. Instead of blowing apart (as you might expect), they come together. Fast air between them → lower pressure between → higher pressure outside pushes them inward. Classic Bernoulli demonstration.
:::

::: whatif
Bernoulli's equation assumes an ideal (non-viscous) fluid. Real fluids have viscosity, so energy is lost to friction as heat. For a wide pipe flowing water, the correction is small. For a narrow pipe (like a capillary) or a gas in a long pipe, the viscous losses dominate. In these cases, Hagen–Poiseuille's law (for viscous pipe flow) is more appropriate.
:::

<Quiz
  question="Water flows through a pipe that narrows from cross-section 4 cm² to 1 cm². If the speed in the wide section is 1 m/s, the speed in the narrow section is:"
  :options="[
    { text: '0.25 m/s' },
    { text: '1 m/s' },
    { text: '4 m/s', correct: true },
    { text: '16 m/s' }
  ]"
  explanation="Continuity: A₁v₁ = A₂v₂ → v₂ = (A₁/A₂)v₁ = (4/1) × 1 = 4 m/s."
/>

::: notes
- Bernoulli: p + ½ρv² + ρgh = constant along a streamline
- Higher velocity → lower pressure (and vice versa)
- Continuity: A₁v₁ = A₂v₂ (incompressible flow)
- Torricelli: efflux speed v = √(2gh)
- Applications: aerofoil lift, Venturi meter, atomiser, Pitot tube
:::

::: refs
- [Bernoulli's Principle — Khan Academy](https://www.khanacademy.org/science/physics/fluids/fluid-dynamics/v/bernoulli-s-equation)
- [NCERT Ch9](https://ncert.nic.in/textbook/pdf/keph109.pdf)
:::
