---
description: "Archimedes' principle and buoyancy for Class 11 Physics (NCERT). Why ships float, hydrometer. Notes for JEE Main, KCET and Karnataka PU."
---

# Archimedes' Principle

<ConceptMeta chapter="9" section="9.4" page="197–201" />

<Predict
  label="Steel ship"
  prompt="A solid ball of steel sinks in water. A steel ship floats. Why?"
  :options="[
    { text: 'Ships use a different grade of steel that is lighter' },
    { text: 'The ship displaces water whose weight equals the total ship weight', correct: true },
    { text: 'Ships have engines that push them upward' },
    { text: 'Salt water is denser than steel' }
  ]"
  reveal="Archimedes' principle: buoyant force = weight of fluid displaced. A solid steel ball displaces very little water relative to its weight — it sinks. A ship's hull is shaped so the total volume (steel + air inside) displaces enough water to equal the total weight. The ship floats when buoyancy = weight."
/>

::: idea
When an object is partially or fully submerged in a fluid, it experiences an upward **buoyant force** equal to the weight of fluid it displaces.

This is **Archimedes' Principle** — discovered (according to legend) when Archimedes noticed water overflowing his bath and ran through Syracuse shouting "Eureka!"

**Conditions:**
- Floats: buoyancy = weight → $\rho_{\text{object}} < \rho_{\text{fluid}}$
- Sinks: buoyancy < weight → $\rho_{\text{object}} > \rho_{\text{fluid}}$
- Neutral: $\rho_{\text{object}} = \rho_{\text{fluid}}$
:::

<ConceptHero type="archimedes" />

::: formula
**Buoyant force:**
$$F_B = \rho_{\text{fluid}} \, V_{\text{submerged}} \, g$$

**Condition for floating:**
$$\rho_{\text{object}} \, V_{\text{total}} \, g = \rho_{\text{fluid}} \, V_{\text{submerged}} \, g$$
$$\frac{V_{\text{submerged}}}{V_{\text{total}}} = \frac{\rho_{\text{object}}}{\rho_{\text{fluid}}}$$

**Apparent weight:**
$$W_{\text{apparent}} = W_{\text{actual}} - F_B = (\rho_{\text{object}} - \rho_{\text{fluid}}) \, V \, g$$
:::

::: real
**Submarine diving:** A submarine takes in seawater ballast tanks to increase its average density above that of seawater — it sinks. To surface, it blows compressed air into the tanks, expelling water and reducing average density below seawater — it rises. This is direct application of Archimedes' principle to controlled buoyancy.
:::

::: try
Fill a bucket with water to the brim and place a block of wood on it. The water that overflows has weight exactly equal to the buoyant force on the wood. Collect and weigh it — compare to the weight of the wood block. They should be equal!
:::

::: whatif
The Dead Sea has salt concentration ~34% (density ~1240 kg/m³ vs normal seawater ~1025 kg/m³). Human body density is ~985 kg/m³. Would you float or sink in the Dead Sea? What fraction of your body would be above the water surface?
:::

<Quiz
  question="A block displaces 500 cm³ of water when fully submerged. The buoyant force is: (g = 10 m/s², ρ_water = 1000 kg/m³)"
  :options="[
    { text: '0.5 N' },
    { text: '5 N', correct: true },
    { text: '50 N' },
    { text: '500 N' }
  ]"
  explanation="F_B = ρVg = 1000 × 500×10⁻⁶ × 10 = 5 N."
/>

::: notes
- Buoyant force = weight of fluid displaced = ρ_fluid × V_sub × g
- Floats when ρ_object < ρ_fluid; fraction submerged = ρ_object/ρ_fluid
- Apparent weight = actual weight − buoyant force
- Archimedes' principle applies to any fluid (liquid or gas)
- Balloons float in air because ρ_balloon+gas < ρ_air
:::

::: refs
- [Archimedes' Principle — Khan Academy](https://www.khanacademy.org/science/physics/fluids/buoyancy/v/archimedes-principle)
- [NCERT Ch9](https://ncert.nic.in/textbook/pdf/keph109.pdf)
:::
