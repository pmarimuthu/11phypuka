---
description: "Hooke's law for Class 11 Physics — stress proportional to strain within elastic limit. NCERT notes for JEE Main, KCET and Karnataka PU."
---

# Hooke's Law

<ConceptMeta chapter="8" section="8.4" page="174–175" />

<Predict
  label="Spring constant"
  prompt="If you double the length of a spring (by joining two identical springs end-to-end), what happens to the spring constant?"
  :options="[
    { text: 'Doubles' },
    { text: 'Stays the same' },
    { text: 'Halves', correct: true },
    { text: 'Quadruples' }
  ]"
  reveal="Spring constant k = F/x. A longer spring stretches more for the same force, so x is bigger and k = F/x is smaller. For two identical springs in series, each stretches by x, total extension is 2x, so k_total = F/2x = k/2. The spring constant is inversely proportional to length."
/>

::: idea
Within the **elastic limit**, stress is directly proportional to strain. This is **Hooke's Law** — it describes the linear (proportional) region of elastic behaviour.

Beyond the elastic limit, the material no longer returns to its original shape when the force is removed. The law fails, and permanent deformation begins.

Hooke's law applies to springs, wires, beams, and any material in its elastic region — it is the foundation of all structural engineering calculations.
:::

<ConceptHero type="hookes-law" />

::: formula
$$\sigma \propto \varepsilon \quad \Rightarrow \quad \sigma = E \varepsilon$$

where $E$ is the modulus of elasticity (the slope of the stress–strain graph in the linear region).

For a spring:
$$F = kx$$

where $k$ is the spring constant (N/m) and $x$ is the extension from the natural length.

Elastic potential energy stored:
$$U = \frac{1}{2}kx^2$$
:::

::: real
**Weighing scales:** Every mechanical spring balance relies on Hooke's Law. The spring extends in proportion to the weight placed on it, and the scale is calibrated assuming this linear relationship holds. This is why scales have a maximum capacity — beyond that, the spring is stressed past its elastic limit and the reading becomes unreliable.
:::

::: try
Take a rubber band (acts like a spring for small extensions). Hang 0, 100 g, 200 g, 300 g, 400 g, 500 g from it and measure the extension each time. Plot force (y-axis) vs extension (x-axis). Up to what load is the graph linear? At what point does Hooke's Law fail?
:::

::: whatif
Hooke's Law fails at the elastic limit. For bone, the elastic limit is much lower than for steel — bone fractures at only about 1–2% strain, while steel wires can stretch 0.1–0.5% before yielding. Why might our bones be more brittle than steel, yet still work perfectly well in normal life?
:::

<Quiz
  question="A spring of constant 200 N/m is compressed by 5 cm. The elastic potential energy stored is:"
  :options="[
    { text: '0.1 J' },
    { text: '0.25 J', correct: true },
    { text: '10 J' },
    { text: '5 J' }
  ]"
  explanation="U = ½kx² = ½ × 200 × (0.05)² = 100 × 0.0025 = 0.25 J."
/>

::: notes
- Hooke's Law: stress ∝ strain (linear region only)
- For spring: F = kx; energy stored = ½kx²
- Valid only within elastic limit
- Modulus E = slope of σ–ε graph
- Springs in series: 1/k_eff = 1/k₁ + 1/k₂; in parallel: k_eff = k₁ + k₂
:::

::: refs
- [Hooke's Law — Khan Academy](https://www.khanacademy.org/science/physics/work-and-energy/hookes-law/v/intro-to-springs-and-hookes-law)
- [NCERT Ch8 — Mechanical Properties of Solids](https://ncert.nic.in/textbook/pdf/keph108.pdf)
:::
