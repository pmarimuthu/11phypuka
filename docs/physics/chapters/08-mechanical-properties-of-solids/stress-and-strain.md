---
description: "Stress and strain for Class 11 Physics (NCERT) — definitions, types and units. Tensile, compressive, shear. Notes for JEE Main, KCET, Karnataka PU."
---

# Stress and Strain

<ConceptMeta chapter="8" section="8.2–8.3" page="170–174" />

<Predict
  label="Which deformation?"
  prompt="You push the two faces of a rubber eraser sideways in opposite directions. What type of stress is this?"
  :options="[
    { text: 'Tensile stress' },
    { text: 'Compressive stress' },
    { text: 'Shear stress', correct: true },
    { text: 'Bulk stress' }
  ]"
  reveal="When equal and opposite forces act parallel (tangential) to the surfaces of a body, the stress is shear stress. The eraser deforms sideways — this is shear. Tensile and compressive stresses act perpendicular (normal) to the surface."
/>

::: idea
When a force acts on a solid, the solid deforms. Two quantities describe this:

**Stress** is the restoring force per unit area set up inside the material to oppose the deformation. It has the same units as pressure (Pa = N/m²).

**Strain** is the fractional change in dimension — it is dimensionless.

There are three types, depending on how the force is applied:
- **Tensile / compressive** — force normal to surface → elongation or compression
- **Shear** — force parallel to surface → angular deformation
- **Bulk (volumetric)** — pressure applied on all sides → volume change
:::

<ConceptHero type="stress-and-strain" />

::: formula
**Stress:**
$$\sigma = \frac{F}{A} \quad [\text{Pa} = \text{N/m}^2]$$

**Longitudinal strain:**
$$\varepsilon = \frac{\Delta L}{L}$$

**Shear strain:**
$$\theta \approx \frac{\Delta x}{h} \quad (\text{small angles})$$

**Volumetric strain:**
$$\frac{\Delta V}{V}$$

All strains are dimensionless ratios.
:::

::: real
**Steel cable in a lift:** A lift cable carries a load of 2000 kg. If the cable has cross-section 2 cm², the stress is $\sigma = mg/A = 2000 \times 10 / (2 \times 10^{-4}) = 10^8$ Pa = 100 MPa. Engineers design cables to stay well below the yield stress (~250 MPa for mild steel) with a safety factor of 2–4.
:::

::: try
Hang a 500 g mass from a rubber band and measure how much it stretches. Measure the band's original length and cross-sectional area. Calculate the tensile stress and longitudinal strain. How do they change if you double the load?
:::

::: whatif
What if you applied equal forces inward on all six faces of a steel cube simultaneously? The stress is bulk (volumetric) — every solid has a bulk modulus that resists this. Try to find the bulk modulus of steel and calculate how much a 1 cm³ cube compresses under deep ocean pressure (~600 atm).
:::

<Quiz
  question="A wire of length 2 m and cross-section 1 mm² is stretched by 2 mm under a force of 200 N. What is the tensile stress?"
  :options="[
    { text: '10 Pa' },
    { text: '2 × 10⁸ Pa', correct: true },
    { text: '2 × 10⁵ Pa' },
    { text: '0.001 Pa' }
  ]"
  explanation="Stress = F/A = 200 / (1×10⁻⁶) = 2×10⁸ Pa. Note: 1 mm² = 10⁻⁶ m²."
/>

::: notes
- Stress = F/A (restoring force per unit area), SI unit: Pa
- Strain = change/original — dimensionless
- Three types: tensile/compressive (normal), shear (tangential), bulk (all-round pressure)
- Stress and strain are not forces — they are field quantities inside the material
:::

::: refs
- [Stress and Strain — Khan Academy](https://www.khanacademy.org/science/physics/work-and-energy/stress-and-strain/v/stress-and-strain)
- [Mechanical Properties of Solids — NCERT Ch8](https://ncert.nic.in/textbook/pdf/keph108.pdf)
:::
