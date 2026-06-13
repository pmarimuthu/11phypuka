---
description: "Temperature and heat for Class 11 Physics (NCERT) — thermal equilibrium, temperature scales, thermometers. Notes for JEE Main, KCET and Karnataka PU."
---

# Temperature & Heat

<ConceptMeta chapter="10" section="10.2–10.3" page="226–229" />

<Predict
  label="Same temperature?"
  prompt="A metal spoon and a wooden spoon are left in the same room for an hour. Which one feels colder to the touch?"
  :options="[
    { text: 'The wooden spoon — wood is naturally cold' },
    { text: 'The metal spoon — it conducts heat away from your hand faster', correct: true },
    { text: 'Neither — they are at the same temperature so they feel the same' },
    { text: 'The wooden spoon — it has more mass' }
  ]"
  reveal="Both spoons are at exactly the same temperature (room temperature). Metal conducts heat much better than wood, so it draws heat from your hand faster — it feels colder. Your sense of 'cold' is really your sense of heat leaving your body, not the temperature of the object itself."
/>

::: idea
**Temperature** is the measure of the average kinetic energy of molecules in a substance. It tells you how hot or cold something is — but not how much heat it contains.

**Heat (Q)** is energy in transit due to a temperature difference. Heat flows from higher temperature to lower temperature until thermal equilibrium is reached.

**Zeroth Law of Thermodynamics:** If two bodies A and B are each in thermal equilibrium with a third body C, then A and B are in thermal equilibrium with each other. This is the logical basis of thermometry.

Temperature scales: Celsius (°C), Kelvin (K = °C + 273.15), Fahrenheit (°F = 9°C/5 + 32).
:::

<ConceptHero type="temperature-and-heat" />

::: formula
**Temperature conversion:**
$$T(K) = T(°C) + 273.15$$
$$T(°F) = \frac{9}{5}T(°C) + 32$$

**Absolute zero:** $T = 0$ K = −273.15 °C (no lower temperature is possible).

**Triple point of water:** 273.16 K (defined, used to calibrate thermometers).
:::

::: real
**Clinical thermometer:** A doctor's mercury thermometer has a constriction just above the bulb. When placed in the mouth, mercury expands and rises past the constriction. When removed, the mercury cannot fall back (the constriction breaks the column) so the reading is held. You must shake it to reset. This is a practical solution to the fact that the thermometer cools quickly outside the mouth.
:::

::: try
Record room temperature with a thermometer. Hold the bulb tightly in your fist for 30 seconds. Record again. Now compare the feel of a metal key and a rubber band from the same room — they are the same temperature but feel different. Temperature and sensation are not the same thing.
:::

::: whatif
The Celsius scale is based on water's freezing and boiling points (at 1 atm). But on the Moon, where there is essentially no atmosphere, water would immediately vaporise at any temperature above about 0°C. The Kelvin scale is defined independently of any substance — why is this important for physics?
:::

<Quiz
  question="Convert 37°C (normal body temperature) to Kelvin:"
  :options="[
    { text: '237 K' },
    { text: '300 K' },
    { text: '310 K', correct: true },
    { text: '373 K' }
  ]"
  explanation="T(K) = 37 + 273 = 310 K."
/>

::: notes
- Temperature = measure of average molecular KE; heat = energy in transit
- Zeroth Law: basis of thermometry and thermal equilibrium
- K = °C + 273.15; °F = 9°C/5 + 32
- Absolute zero: 0 K — lowest possible temperature
- Triple point of water: 273.16 K (used to define Kelvin scale)
:::

::: refs
- [Temperature & Heat — Khan Academy](https://www.khanacademy.org/science/physics/thermodynamics)
- [NCERT Ch10](https://ncert.nic.in/textbook/pdf/keph110.pdf)
:::
