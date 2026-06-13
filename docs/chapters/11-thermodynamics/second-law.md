---
description: "Second Law of Thermodynamics for Class 11 Physics — entropy, irreversible processes. NCERT notes with real-world insight for JEE Main and KCET."
---

# Second Law & Entropy

<ConceptMeta chapter="11" section="11.7" page="265–268" />

<Predict
  label="Spontaneous process"
  prompt="A drop of ink spreads through a glass of water. The reverse — ink spontaneously gathering into a drop — never happens. This is explained by:"
  :options="[
    { text: 'Conservation of energy — spreading releases energy' },
    { text: 'The second law — entropy of an isolated system always increases', correct: true },
    { text: 'Newton third law of motion' },
    { text: 'Surface tension prevents concentration' }
  ]"
  reveal="The second law: natural processes go in the direction of increasing entropy (disorder). A concentrated ink drop is highly ordered (low entropy); spreading through water is disordered (high entropy). The first law does not forbid the reverse — energy would be conserved — but the second law forbids it: entropy cannot decrease spontaneously in an isolated system."
/>

::: idea
The **Second Law of Thermodynamics** places a fundamental direction on natural processes:

**Kelvin–Planck statement:** No heat engine can convert heat entirely into work in a cycle — some heat must always be rejected to a cold reservoir.

**Clausius statement:** Heat cannot spontaneously flow from a colder body to a hotter body without external work.

Both are equivalent and both say: **entropy of an isolated system never decreases.**

**Entropy (S):** A measure of disorder or the number of microscopic states available to the system. The universe tends toward maximum entropy — things fall apart, mix, and equalise.
:::

<ConceptHero type="second-law" />

::: formula
**Entropy change:**
$$\Delta S = \int \frac{dQ_{\text{rev}}}{T} \quad [\text{J/K}]$$

For a reversible isothermal process:
$$\Delta S = \frac{Q}{T}$$

**Second Law:**
$$\Delta S_{\text{universe}} = \Delta S_{\text{system}} + \Delta S_{\text{surroundings}} \geq 0$$

Equality holds for reversible processes; strict inequality for all real (irreversible) processes.

**Efficiency limit:**
No engine can be more efficient than the Carnot efficiency:
$$\eta \leq 1 - \frac{T_C}{T_H}$$
:::

::: real
**Refrigerator:** A refrigerator moves heat from cold (inside) to hot (room). This is not spontaneous — it requires work (electrical energy). The second law is not violated because we are pumping in external work. The total entropy of the universe still increases: the entropy decrease inside the fridge is more than compensated by entropy increase of the surroundings (from the electrical work).
:::

::: try
Mix hot water (70°C) with cold water (10°C) and measure the final temperature. Calculate ΔS for the hot water (loses heat), ΔS for the cold water (gains heat). Add them up — the total ΔS should be positive (entropy increased). This is irreversible mixing.
:::

::: whatif
Could a Maxwell's Demon — an intelligent being that can sort fast and slow molecules — violate the second law? Modern physics says no: the demon must store information to sort the molecules, and erasing that information costs entropy. The act of measurement and information erasure generates at least as much entropy as would be reduced. Information has an entropy cost.
:::

<Quiz
  question="For a reversible process in an isolated system, the entropy change is:"
  :options="[
    { text: 'Always positive' },
    { text: 'Always negative' },
    { text: 'Zero', correct: true },
    { text: 'Unpredictable' }
  ]"
  explanation="For a reversible process ΔS = 0 (entropy is conserved). Irreversible processes always have ΔS > 0. ΔS < 0 is forbidden for isolated systems."
/>

::: notes
- Second Law: entropy of an isolated system never decreases
- Kelvin–Planck: no 100% efficient heat engine
- Clausius: heat flows cold→hot only with external work (refrigerator)
- ΔS = ∫dQ_rev/T; ΔS ≥ 0 (isolated system)
- Reversible: ΔS = 0; Real processes: ΔS > 0
:::

::: refs
- [Second Law — Khan Academy](https://www.khanacademy.org/science/physics/thermodynamics/laws-of-thermodynamics/v/second-law-of-thermodynamics)
- [NCERT Ch11](https://ncert.nic.in/textbook/pdf/keph111.p