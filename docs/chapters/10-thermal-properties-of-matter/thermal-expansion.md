---
description: "Thermal expansion — linear, area and volume expansion for Class 11 Physics (NCERT). Coefficients, bimetallic strip, anomalous expansion of water. JEE, KCET notes."
---

# Thermal Expansion

<ConceptMeta chapter="10" section="10.4" page="229–234" />

<Predict
  label="Bimetallic strip"
  prompt="A bimetallic strip (two metals bonded together) curves when heated. Which side curves outward?"
  :options="[
    { text: 'The metal with higher thermal expansion coefficient', correct: true },
    { text: 'The metal with lower thermal expansion coefficient' },
    { text: 'Both sides expand equally so it stays straight' },
    { text: 'Whichever metal is on the outside' }
  ]"
  reveal="When heated, both metals expand, but the one with the higher expansion coefficient expands more. Since they are bonded, the metal that wants to be longer forces the strip to curve — the longer (high α) side curves to the outside of the bend. This is used in thermostats."
/>

::: idea
When matter is heated, molecules vibrate more energetically and push each other apart — the solid, liquid, or gas **expands**.

For solids: a small linear expansion coefficient $\alpha$ — changes in length.
For liquids: characterised by volume expansion coefficient $\gamma$.
For gases: expansion is large and described by gas laws.

**Thermal expansion matters in engineering:** railway tracks have gaps, bridges have expansion joints, and clock pendulums change length with temperature — all because of thermal expansion.
:::

<ConceptHero type="thermal-expansion" />

::: formula
**Linear expansion** (solids):
$$\Delta L = L_0 \, \alpha \, \Delta T \quad \Rightarrow \quad L = L_0(1 + \alpha \Delta T)$$

**Area expansion:**
$$\Delta A = A_0 \, (2\alpha) \, \Delta T \quad \beta \approx 2\alpha$$

**Volume expansion:**
$$\Delta V = V_0 \, \gamma \, \Delta T \quad \gamma \approx 3\alpha$$

Typical values: $\alpha_{\text{steel}} \approx 12 \times 10^{-6}$ K$^{-1}$, $\alpha_{\text{Al}} \approx 23 \times 10^{-6}$ K$^{-1}$.

**Anomalous expansion of water:** Water is densest at 4°C. Below 4°C, it expands as it cools — which is why ice floats and lakes freeze from the top down.
:::

::: real
**Railway tracks:** Steel rails expand on hot days. Older tracks left gaps (~3 mm per 12 m length) between sections to accommodate this — you hear a rhythmic clunk as trains pass the joints. Modern tracks are welded continuously; they are pre-stressed (slightly compressed when laid) so expansion takes them to a natural state rather than buckling.
:::

::: try
Fill a glass bottle to the brim with water and seal it tightly. Put it in the freezer. When water freezes it expands ~9% — it will shatter the bottle (or dent a metal container). This is why you should never freeze a completely full sealed container.
:::

::: whatif
A steel bridge is 500 m long and is built at 20°C. If the temperature range in the city is −10°C to 50°C (ΔT = 60°C), what is the maximum expansion? $\Delta L = 500 \times 12\times10^{-6} \times 60 = 0.36$ m = 36 cm. That is why large bridges have multiple expansion joints — without them, the bridge would buckle or crack.
:::

<Quiz
  question="A steel rod (α = 1.2×10⁻⁵ K⁻¹) is 2 m long at 20°C. Its length at 120°C is:"
  :options="[
    { text: '2.0000 m' },
    { text: '2.0024 m', correct: true },
    { text: '2.024 m' },
    { text: '2.24 m' }
  ]"
  explanation="ΔL = L₀αΔT = 2 × 1.2×10⁻⁵ × 100 = 2.4×10⁻³ m = 2.4 mm. L = 2.0024 m."
/>

::: notes
- Linear expansion: ΔL = L₀αΔT; β ≈ 2α; γ ≈ 3α
- Thermal stress: if expansion is prevented, σ = YαΔT
- Anomalous expansion of water: density maximum at 4°C
- Bimetallic strip: different α → bends on heating → used in thermostats
- Applications: railway gaps, bridge joints, clocks, thermometers
:::

::: refs
- [Thermal Expansion — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/thexp.html)
- [NCERT Ch10](https://ncert.nic.in/textbook/pdf/keph110.pdf)
:::
