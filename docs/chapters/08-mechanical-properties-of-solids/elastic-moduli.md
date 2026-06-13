---
description: "Young's modulus, Bulk modulus and Modulus of Rigidity for Class 11 Physics (NCERT). Formulae and applications. JEE Main, KCET, Karnataka PU notes."
---

# Elastic Moduli

<ConceptMeta chapter="8" section="8.5" page="175–180" />

<Predict
  label="Stiffest modulus"
  prompt="Which of these materials has the highest Young's modulus (most resistant to stretching)?"
  :options="[
    { text: 'Rubber' },
    { text: 'Bone' },
    { text: 'Steel', correct: true },
    { text: 'Copper' }
  ]"
  reveal="Young's modulus of steel (~200 GPa) is far higher than copper (~120 GPa), bone (~20 GPa), or rubber (~0.01–0.1 GPa). Steel is extremely stiff — it resists longitudinal deformation very effectively, which is why it is used in structural applications."
/>

::: idea
The ratio of stress to strain defines a material's **elastic modulus** — a measure of stiffness. There are three moduli, one for each type of deformation:

- **Young's modulus (Y):** Resistance to stretching/compression along one direction
- **Shear modulus (G):** Resistance to shearing (tangential) deformation
- **Bulk modulus (B):** Resistance to uniform compression from all sides

A higher modulus = stiffer material = less deformation for the same stress.
:::

<ConceptHero type="elastic-moduli" />

::: formula
**Young's Modulus:**
$$Y = \frac{\text{tensile stress}}{\text{longitudinal strain}} = \frac{F/A}{\Delta L/L} = \frac{FL}{A\,\Delta L}$$

**Shear Modulus:**
$$G = \frac{\text{shear stress}}{\text{shear strain}} = \frac{F/A}{\Delta x/h}$$

**Bulk Modulus:**
$$B = -\frac{\text{pressure}}{\text{volumetric strain}} = -\frac{p}{\Delta V/V}$$

(Negative sign because volume decreases when pressure increases.)

**Compressibility** $= 1/B$.

Typical values: $Y_{\text{steel}} \approx 200$ GPa, $Y_{\text{bone}} \approx 20$ GPa, $Y_{\text{rubber}} \approx 0.05$ GPa.
:::

::: real
**Guitar strings:** Tightening a guitar string stretches it, increasing the tension. Because steel has a high Young's modulus, even a small increase in length requires a large increase in force — which is why fine-tuning is sensitive. If strings were made of rubber (low Y), they would stretch far too easily to tune accurately.
:::

::: try
Hang a known mass from a thin steel wire (e.g., a guitar string). Measure its diameter $d$ and initial length $L$, and measure the extension $\Delta L$ under the load. Calculate Young's modulus: $Y = FL/(A\,\Delta L)$ where $A = \pi d^2/4$.
:::

::: whatif
Liquids and gases have no shear modulus (they flow instead of shearing). They do have a bulk modulus — water is about 2.2 GPa and air is about 0.14 MPa. This difference in bulk modulus is why sound travels so much faster in water than in air.
:::

<Quiz
  question="A wire (Y = 2×10¹¹ Pa) of length 1 m and cross-section 1 mm² stretches 1 mm under a load. What is the load?"
  :options="[
    { text: '2 N' },
    { text: '200 N', correct: true },
    { text: '2000 N' },
    { text: '20 N' }
  ]"
  explanation="Y = FL/(AΔL) → F = YAΔl/L = 2×10¹¹ × 10⁻⁶ × 10⁻³ / 1 = 200 N."
/>

::: notes
- Young's Y = (F/A)/(ΔL/L) — longitudinal stiffness
- Shear G = (F/A)/(Δx/h) — resistance to shear
- Bulk B = −p/(ΔV/V) — resistance to uniform compression
- Liquids/gases: G = 0 (no shear modulus), B > 0
- All moduli in units of Pa (= N/m²)
:::

::: refs
- [Elastic Moduli — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/permot3.html)
- [NCERT Ch8 — Mechanical Properties of Solids](https://ncert.nic.in/textbook/pdf/keph108.pdf)
:::
