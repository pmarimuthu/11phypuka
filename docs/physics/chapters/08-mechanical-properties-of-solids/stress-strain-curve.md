---
description: "Stress-strain curve for Class 11 Physics (NCERT) — elastic limit, yield point, breaking stress. Notes for JEE Main, JEE Advanced and KCET."
---

# Stress–Strain Curve

<ConceptMeta chapter="8" section="8.6" page="180–183" />

<Predict
  label="Permanent set"
  prompt="A wire is stretched past its elastic limit and then the force is removed. What happens?"
  :options="[
    { text: 'It returns fully to its original length' },
    { text: 'It is permanently longer than it started', correct: true },
    { text: 'It immediately breaks' },
    { text: 'It contracts to shorter than original' }
  ]"
  reveal="Beyond the elastic limit, the material has undergone plastic deformation. When the stress is removed, the material follows a different (parallel) path back to zero stress, leaving a permanent extension called the permanent set. It does not return to the original length."
/>

::: idea
The **stress–strain curve** tells the complete story of how a material behaves from no load to breaking point.

Key points on the curve for a ductile metal like steel:
1. **Proportional limit (P):** Stress ∝ strain; Hooke's Law holds
2. **Elastic limit (E):** Material returns to original shape if unloaded (even if no longer linear)
3. **Yield point (Y):** Material starts to deform permanently — large strain for little extra stress
4. **Ultimate tensile strength (U):** Maximum stress the material can bear
5. **Breaking/fracture point (B):** Material fractures

Brittle materials (glass, ceramics) snap at the elastic limit with no plastic region. Ductile materials (steel, copper) have a long plastic region — they can be drawn into wires.
:::

<ConceptHero type="stress-strain-curve" />

::: formula
From the stress–strain graph:
- **Slope in linear region** = Young's Modulus $Y$
- **Area under curve** = energy stored per unit volume (toughness)
- **Elastic region energy** $= \frac{1}{2}\sigma\varepsilon = \frac{\sigma^2}{2Y}$

**Yield stress** and **Ultimate tensile strength (UTS)** are read directly from the graph.

**Elongation at fracture** (ductility measure): $\varepsilon_f = \Delta L_f / L$
:::

::: real
**Mild steel vs. cast iron:** Mild steel has a long plastic region — it bends visibly before breaking, giving warning before structural failure. Cast iron is brittle — it fractures with almost no plastic deformation. This is why building codes specify ductile materials for structural elements: a building that bends before it falls gives time to evacuate.
:::

::: try
Slowly stretch a piece of sticky tape or a rubber band (rubber's curve is non-linear but instructive). Notice how it stretches easily at first, then resists more, then eventually tears. This maps to the stress–strain curve — you can feel the proportional, elastic, and fracture regions.
:::

::: whatif
Two materials have the same UTS but one has a long plastic region (ductile) and the other has almost none (brittle). The area under the stress–strain curve is the toughness — resistance to fracture. Which material absorbs more energy before breaking, and which would you prefer for a car bumper?
:::

<Quiz
  question="The area under the complete stress–strain curve represents:"
  :options="[
    { text: 'Young modulus' },
    { text: 'The elastic limit' },
    { text: 'Toughness — energy absorbed per unit volume before fracture', correct: true },
    { text: 'The ultimate tensile strength' }
  ]"
  explanation="The area under the entire σ–ε curve (up to fracture) is the energy per unit volume the material can absorb before breaking — this is called toughness. The slope of the linear part is Young's modulus."
/>

::: notes
- Proportional limit: Hooke's Law holds (slope = Y)
- Elastic limit: last point where no permanent deformation
- Yield point: permanent plastic deformation begins
- UTS: maximum stress (after this, necking starts in ductile materials)
- Fracture point: breaks
- Ductile: long plastic region; Brittle: fractures near elastic limit
:::

::: refs
- [Stress–Strain Curve — Engineering ToolBox](https://www.engineeringtoolbox.com/stress-strain-d_950.html)
- [NCERT Ch8](https://ncert.nic.in/textbook/pdf/keph108.pdf)
:::
