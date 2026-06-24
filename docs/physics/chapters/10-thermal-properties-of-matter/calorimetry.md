---
description: "Calorimetry for Class 11 Physics (NCERT) — specific heat, latent heat, method of mixtures. Notes for JEE Main, KCET and Karnataka PU."
---

---
description: "Calorimetry for Class 11 Physics (NCERT) — specific heat, latent heat, method of mixtures. Notes for JEE Main, KCET and Karnataka PU."
---

# Calorimetry

<ConceptMeta chapter="10" section="10.5" page="234–238" />

<Predict
  label="Latent heat"
  prompt="You add the same amount of heat to 1 kg of ice at 0°C and to 1 kg of water at 0°C. Which one changes temperature more?"
  :options="[
    { text: 'The ice — it absorbs heat to melt, leaving more energy to raise temperature' },
    { text: 'The water — ice needs heat just to melt with no temperature change', correct: true },
    { text: 'Both change by the same amount' },
    { text: 'The ice changes temperature; the water does not' }
  ]"
  reveal="Ice at 0°C must first absorb latent heat (334 kJ/kg) to melt — during melting, temperature does not rise. Water at 0°C has no such barrier and its temperature rises at 4.18 kJ/(kg·K). So for the same heat added, ice's temperature change is delayed while it melts; water warms up immediately."
/>

::: idea
**Calorimetry** is the science of measuring heat exchange.

**Specific heat capacity (c):** heat required to raise 1 kg of a substance by 1 K. Water has one of the highest specific heats (4186 J/kg·K) — it stores a lot of energy for a given temperature change, which is why coastal climates are milder.

**Latent heat (L):** heat exchanged during a **phase change** (melting, boiling) at constant temperature. The energy goes into breaking bonds, not increasing molecular speed — so temperature stays constant during the phase change.
:::

<ConceptHero type="calorimetry" />

::: formula
**Sensible heat (temperature change):**
$$Q = mc\Delta T$$

**Latent heat (phase change, constant temperature):**
$$Q = mL$$

Latent heat of fusion for water: $L_f = 334$ kJ/kg (at 0°C)
Latent heat of vaporisation for water: $L_v = 2260$ kJ/kg (at 100°C)

**Calorimeter equation** (mixing two substances):
$$m_1 c_1 (T_1 - T_{\text{mix}}) = m_2 c_2 (T_{\text{mix}} - T_2)$$
:::

::: real
**Why a burn from steam at 100°C is worse than boiling water at 100°C:** Steam carries 2260 kJ/kg of latent heat. When it condenses on your skin, it releases that extra energy all at once, in addition to cooling from 100°C. The same mass of boiling water releases only the sensible heat as it cools. Steam burns are therefore much more severe.
:::

::: try
Fill one glass with 200 mL of water at room temperature (~25°C) and another with 200 mL of water at 60°C. Mix them and immediately measure the temperature. Use $Q_1 = Q_2$ to predict the mixing temperature. How close is your measurement?
:::

::: whatif
Why does 1 kg of ice at 0°C cool a drink more effectively than 1 kg of water at 0°C? The ice absorbs $mL_f = 334$ kJ just to melt, before doing any temperature-related cooling. An equal mass of cold water absorbs only sensible heat. This is why ice is used in coolers rather than very cold water.
:::

<Quiz
  question="How much heat is needed to melt 0.5 kg of ice at 0°C? (L_f = 336 kJ/kg)"
  :options="[
    { text: '84 kJ' },
    { text: '168 kJ', correct: true },
    { text: '336 kJ' },
    { text: '672 kJ' }
  ]"
  explanation="Q = mL_f = 0.5 × 336 = 168 kJ."
/>

::: notes
- Specific heat c [J/kg·K]: Q = mcΔT
- Latent heat L [J/kg]: Q = mL (phase change, ΔT = 0)
- Water: c = 4186 J/kg·K (high), L_f = 334 kJ/kg, L_v = 2260 kJ/kg
- Calorimeter: heat lost = heat gained; solve for unknown
- Phase change: temperature constant while heat is absorbed/released
:::

::: refs
- [Calorimetry — Khan Academy](https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-and-latent-heat)
- [NCERT Ch10](https://ncert.nic.in/textbook/pdf/keph110.pdf)
:::
