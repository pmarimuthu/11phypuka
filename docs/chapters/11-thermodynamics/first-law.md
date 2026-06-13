---
description: "First Law of Thermodynamics for Class 11 Physics — ΔU = Q − W. Internal energy, work done by gas. NCERT notes for JEE Main, JEE Advanced, KCET."
---

# Zeroth & First Law of Thermodynamics

<ConceptMeta chapter="11" section="11.2–11.5" page="254–260" />

<Predict
  label="Internal energy"
  prompt="You compress a gas in a thermally insulated cylinder (no heat exchange). What happens to the temperature of the gas?"
  :options="[
    { text: 'Temperature drops — the gas expands against the piston' },
    { text: 'Temperature is unchanged — no heat was added' },
    { text: 'Temperature rises — work done on the gas increases internal energy', correct: true },
    { text: 'Temperature drops because the volume decreases' }
  ]"
  reveal="First Law: ΔU = Q − W. With no heat exchange (Q = 0, adiabatic), compressing the gas means work is done ON it (W < 0 by convention, or W_on > 0). So ΔU = −W = W_on > 0 — internal energy increases, and since U depends on temperature, the temperature rises. This is why a bicycle pump gets hot."
/>

::: idea
**Zeroth Law:** If A is in thermal equilibrium with C, and B is in equilibrium with C, then A and B are in thermal equilibrium with each other. This is the basis of temperature measurement.

**First Law of Thermodynamics:** Energy is conserved. The change in internal energy of a system equals the heat added to it minus the work done by it:

$$\Delta U = Q - W$$

- $Q > 0$: heat flows into the system
- $W > 0$: work done by the system (expansion)
- $\Delta U$: change in internal energy (depends only on state)

Internal energy $U$ is a **state function** — it depends only on the current state of the system, not on how it got there.
:::

<ConceptHero type="first-law" />

::: formula
**First Law:**
$$\Delta U = Q - W$$

For an ideal gas, $U$ depends only on temperature: $U = n C_v T$.

**Work done by a gas:**
$$W = \int p \, dV = p \Delta V \quad (\text{constant pressure})$$

$$W = nRT \ln\frac{V_2}{V_1} \quad (\text{isothermal})$$

**Specific heat capacities of an ideal gas:**
$$C_p - C_v = R \quad (\text{Mayer's relation})$$
$$\gamma = C_p / C_v \quad (\text{ratio of specific heats: } \gamma = 5/3 \text{ monatomic, } 7/5 \text{ diatomic})$$
:::

::: real
**Bicycle pump:** When you push the pump handle rapidly (near-adiabatic compression), the air inside gets noticeably hot — you can feel the heat through the pump barrel. The work you do against the piston pressure goes into the internal energy of the gas, raising its temperature. First Law in your hands.
:::

::: try
Bend a metal paper clip back and forth rapidly 10 times at the same point. Immediately touch the bent spot — it is noticeably hot. Work done against inter-atomic bonds becomes internal energy (heat). The first law at a molecular scale.
:::

::: whatif
In a free expansion, a gas expands into vacuum (no work done, no heat exchange). For an ideal gas: ΔU = 0 → ΔT = 0. For a real gas (van der Waals), intermolecular forces matter — the gas actually cools slightly on free expansion. This is the basis of the Joule-Thomson effect used in refrigeration.
:::

<Quiz
  question="A gas absorbs 500 J of heat and does 200 J of work on the surroundings. The change in internal energy is:"
  :options="[
    { text: '700 J' },
    { text: '300 J', correct: true },
    { text: '−300 J' },
    { text: '200 J' }
  ]"
  explanation="ΔU = Q − W = 500 − 200 = 300 J."
/>

::: notes
- Zeroth Law: basis of thermometry and equilibrium
- First Law: ΔU = Q − W (energy conservation)
- U = state function (path-independent); Q and W are path-dependent
- Mayer's relation: C_p − C_v = R
- γ = C_p/C_v: monatomic 5/3, diatomic 7/5
:::

::: refs
- [First Law — Khan Academy](https://www.khanacademy.org/science/physics/thermodynamics/laws-of-thermodynamics/v/first-law-of-thermodynamics)
- [NCERT Ch11](https://ncert.nic.in/textbook/pdf/keph111.pdf)
:::
