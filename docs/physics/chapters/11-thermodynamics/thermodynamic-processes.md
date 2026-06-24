---
description: "Thermodynamic processes for Class 11 Physics — isothermal, adiabatic, isochoric, isobaric. P-V diagrams. NCERT notes for JEE Main, KCET."
---

# Thermodynamic Processes

<ConceptMeta chapter="11" section="11.6" page="260–264" />

<Predict
  label="Adiabatic"
  prompt="During an adiabatic expansion, the gas does work. Where does the energy come from?"
  :options="[
    { text: 'Heat absorbed from surroundings' },
    { text: 'The internal energy of the gas decreases', correct: true },
    { text: 'The pressure increases to supply energy' },
    { text: 'Mass converts to energy' }
  ]"
  reveal="In an adiabatic process Q = 0. First Law: ΔU = Q − W = 0 − W = −W. The gas does positive work (W > 0), so ΔU < 0 — internal energy decreases. Since U depends on temperature, the gas cools. No external heat is needed; the gas uses its own internal energy."
/>

::: idea
A **thermodynamic process** describes how a system moves from one state to another. Four ideal processes:

| Process | Constant | Q | W | ΔU |
|---------|----------|---|---|-----|
| **Isothermal** | T | ≠0 | nRT ln(V₂/V₁) | 0 |
| **Adiabatic** | Q = 0 | 0 | −ΔU | ΔU = −W |
| **Isochoric** | V | Q = ΔU | 0 | Q |
| **Isobaric** | p | ≠0 | pΔV | Q − pΔV |

In real engines, processes are approximate combinations of these ideal cases.
:::

<ConceptHero type="thermodynamic-processes" />

::: formula
**Isothermal** (constant T, ideal gas):
$$pV = \text{const} \quad W = nRT \ln\frac{V_2}{V_1}$$

**Adiabatic** (Q = 0):
$$pV^\gamma = \text{const} \quad T V^{\gamma-1} = \text{const}$$
$$W = \frac{p_1 V_1 - p_2 V_2}{\gamma - 1} = \frac{nR(T_1 - T_2)}{\gamma - 1}$$

**Isochoric** (constant V): $W = 0$, $Q = nC_v \Delta T = \Delta U$

**Isobaric** (constant p): $W = p\Delta V = nR\Delta T$, $Q = nC_p \Delta T$
:::

::: real
**Diesel engine:** In a diesel engine, air is compressed so rapidly (near-adiabatic) that the temperature rises to ~700–900°C — hot enough to ignite the diesel fuel injected at that moment. No spark plug is needed. The adiabatic compression does the ignition work. Diesel engines are more efficient than petrol engines partly because of this higher compression ratio.
:::

::: try
Release a CO₂ fire extinguisher briefly. The gas expands rapidly from high pressure (near-adiabatic). The temperature drops dramatically — you see frost forming on the nozzle. Adiabatic expansion cooling in action.
:::

::: whatif
On a p–V diagram, the work done in a process is the area under the curve. An adiabatic curve is steeper than an isothermal curve (because γ > 1). So for the same volume change, an adiabatic expansion does less work than an isothermal one — but at the cost of cooling the gas internally.
:::

<Quiz
  question="In an isochoric process, which of the following is zero?"
  :options="[
    { text: 'ΔU' },
    { text: 'Q' },
    { text: 'W (work done by gas)', correct: true },
    { text: 'T' }
  ]"
  explanation="Isochoric = constant volume → ΔV = 0 → W = pΔV = 0. All heat added goes to internal energy: Q = ΔU."
/>

::: notes
- Isothermal: T const; ΔU = 0; W = nRT ln(V₂/V₁); pV = const
- Adiabatic: Q = 0; pVγ = const; gas cools on expansion
- Isochoric: V const; W = 0; Q = ΔU = nCvΔT
- Isobaric: p const; W = pΔV; Q = nCpΔT
- p–V area = work done; isothermal curve less steep than adiabatic
:::

::: refs
- [Thermodynamic Processes — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/thproc.html)
- [NCERT Ch11](https://ncert.nic.in/textbook/pdf/keph111.pdf)
:::
