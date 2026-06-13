---
description: "Molecular speeds — rms, mean and most probable for Class 11 Physics (NCERT). Maxwell distribution. Notes for JEE Main, KCET and Karnataka PU."
---

# Speed of Gas Molecules

<ConceptMeta chapter="12" section="12.4" page="289–293" />

<Predict
  label="Molecular speed"
  prompt="Hydrogen molecules (M = 2 g/mol) and oxygen molecules (M = 32 g/mol) are at the same temperature. Compare their rms speeds."
  :options="[
    { text: 'Oxygen molecules are faster — they are heavier' },
    { text: 'Hydrogen molecules are 4 times faster than oxygen', correct: true },
    { text: 'Both have the same rms speed at the same temperature' },
    { text: 'Hydrogen is 16 times faster' }
  ]"
  reveal="v_rms = √(3RT/M). Since T is the same, v ∝ 1/√M. v_H/v_O = √(M_O/M_H) = √(32/2) = √16 = 4. Hydrogen molecules are 4 times faster — hence hydrogen effuses 4 times faster than oxygen (Graham's law)."
/>

::: idea
Gas molecules have a **distribution** of speeds (Maxwell–Boltzmann distribution) — not all molecules move at the same speed. Three characteristic speeds are defined:

- **rms speed ($v_{\text{rms}}$):** square root of mean square speed — most useful for energy calculations
- **Mean speed ($\bar{v}$):** arithmetic average speed
- **Most probable speed ($v_p$):** the speed at the peak of the Maxwell distribution

At higher temperatures, the distribution shifts right (higher speeds) and broadens. Heavier molecules move more slowly at the same temperature.
:::

<ConceptHero type="speed-of-molecules" />

::: formula
$$v_{\text{rms}} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3k_BT}{m}}$$

$$\bar{v} = \sqrt{\frac{8RT}{\pi M}} \approx 0.92\, v_{\text{rms}}$$

$$v_p = \sqrt{\frac{2RT}{M}} \approx 0.82\, v_{\text{rms}}$$

Ordering: $v_p < \bar{v} < v_{\text{rms}}$

At 300 K for N₂ (M = 28 g/mol):
$v_{\text{rms}} = \sqrt{3 \times 8.314 \times 300 / 0.028} \approx 516$ m/s ≈ Mach 1.5!
:::

::: real
**Why the Earth has no hydrogen atmosphere:** The escape velocity from Earth is ~11.2 km/s. At room temperature, the rms speed of H₂ molecules is ~1920 m/s — far below escape velocity. But the Maxwell distribution has a tail extending to high speeds. A small fraction of H₂ molecules always have enough energy to escape. Over billions of years, essentially all of Earth's primordial hydrogen has escaped to space. Heavier molecules (N₂: v_rms ~ 516 m/s; O₂: ~ 484 m/s) escape far too slowly.
:::

::: try
Smell a perfume bottle from across the room after it is opened. The diffusion of scent molecules is directly related to their mean speed. Try with alcohol (lighter molecules, faster diffusion) and a heavier fragrance compound — which reaches you first and why?
:::

::: whatif
At the Sun's surface temperature (~5778 K), the rms speed of hydrogen atoms is about 12 km/s — close to escape velocity from the Sun's surface (620 km/s). But the Sun holds its hydrogen because its escape velocity is much higher. The same calculation explains why very hot planets (or moons with low gravity) lose their atmospheres.
:::

<Quiz
  question="The rms speed of O₂ molecules at 300 K is v. At 1200 K, the rms speed of O₂ is:"
  :options="[
    { text: 'v' },
    { text: '2v', correct: true },
    { text: '4v' },
    { text: '√2 v' }
  ]"
  explanation="v_rms ∝ √T. T increases by factor 4 (300→1200 K), so v_rms increases by √4 = 2. Answer: 2v."
/>

::: notes
- v_rms = √(3RT/M); v̄ = √(8RT/πM); v_p = √(2RT/M)
- Order: v_p < v̄ < v_rms
- v ∝ √T (same gas, different T) and v ∝ 1/√M (same T, different gas)
- Maxwell–Boltzmann distribution: shifts right and broadens at higher T
- Diffusion: lighter molecules diffuse faster (Graham's law: rate ∝ 1/√M)
:::

::: refs
- [Maxwell–Boltzmann Distribution — Khan Academy](https://www.khanacademy.org/science/ap-chemistry/thermodynamics-ap/maxwell-boltzmann-distributions/v/maxwell-boltzmann-distribution)
- [NCERT Ch12](https://ncert.nic.in/textbook/pdf/keph112.pdf)
:::
