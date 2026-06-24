---
description: "Kinetic theory of gases for Class 11 Physics (NCERT) — pressure, KE and temperature relation. Notes for JEE Main, JEE Advanced and KCET."
---

# Kinetic Theory of Gases

<ConceptMeta chapter="12" section="12.2–12.4" page="282–289" />

<Predict
  label="Pressure and temperature"
  prompt="You heat a sealed container of gas. The pressure increases. What is the molecular explanation?"
  :options="[
    { text: 'Gas molecules expand and take up more space' },
    { text: 'Molecules collide with walls more often and harder', correct: true },
    { text: 'New gas molecules are created by heating' },
    { text: 'The container walls become weaker' }
  ]"
  reveal="Heating increases the kinetic energy of gas molecules — they move faster. Faster molecules hit the walls more frequently and with greater force. Pressure = force/area, so pressure increases. Temperature is literally the average KE of molecules: (3/2)kT per molecule."
/>

::: idea
The **kinetic theory** models a gas as a large number of tiny molecules in rapid, random motion. All observable gas properties emerge from these microscopic collisions.

**Key assumptions:**
- Molecules are point masses (negligible volume compared to the container)
- Collisions are perfectly elastic (kinetic energy conserved)
- No intermolecular forces except during collisions
- Molecules move randomly in all directions with a distribution of speeds

From these simple assumptions, the ideal gas law $pV = nRT$ can be derived from first principles.
:::

<ConceptHero type="kinetic-theory" />

::: formula
**Kinetic pressure:**
$$p = \frac{1}{3} \rho \langle v^2 \rangle = \frac{1}{3} \frac{Nm}{V} \langle v^2 \rangle$$

**Average KE per molecule:**
$$\langle KE \rangle = \frac{1}{2}m\langle v^2 \rangle = \frac{3}{2}k_BT$$

**Ideal gas law:**
$$pV = nRT = Nk_BT$$

where $k_B = 1.38 \times 10^{-23}$ J/K (Boltzmann constant), $R = 8.314$ J/mol·K.

**Temperature is proportional to average KE:**
$$T \propto \langle v^2 \rangle$$
:::

::: real
**Tyre pressure in summer:** When a car stands in the sun, the air inside the tyre heats up. Higher temperature → more energetic molecules → more pressure (sealed tyre = constant volume). This is why petrol stations often warn to check tyre pressure when cold — hot tyre pressure is always higher than the safe operating pressure measured cold.
:::

::: try
Squeeze an uninflated balloon to a small ball and hold it in warm water. It expands. Put it in cold water — it shrinks. The ideal gas law in action: fixed amount of gas, pressure roughly constant (atmospheric), temperature change → volume change.
:::

::: whatif
At absolute zero (0 K), molecules would have zero kinetic energy and gas pressure would be zero. This is the theoretical foundation of the Kelvin scale. But in practice, all real gases liquefy and solidify well above 0 K (except helium, which remains liquid down to ~4 K at atmospheric pressure). Why can't a real gas behave as an ideal gas near 0 K?
:::

<Quiz
  question="At what temperature does the average KE of gas molecules double its value at 27°C?"
  :options="[
    { text: '54°C' },
    { text: '327°C', correct: true },
    { text: '600°C' },
    { text: '127°C' }
  ]"
  explanation="KE ∝ T(K). At 27°C = 300 K. Double KE means double T = 600 K = 327°C."
/>

::: notes
- p = (1/3)ρ⟨v²⟩ = (1/3)(Nm/V)⟨v²⟩
- Average KE = (3/2)k_BT per molecule
- pV = nRT = Nk_BT
- Temperature is proportional to average molecular KE
- Assumptions: point masses, elastic collisions, no intermolecular forces
:::

::: refs
- [Kinetic Theory — Khan Academy](https://www.khanacademy.org/science/physics/thermodynamics/temp-kinetic-theory-ideal-gas-law/v/kinetic-molecular-theory-of-gases)
- [NCERT Ch12](https://ncert.nic.in/textbook/pdf/keph112.pdf)
:::
