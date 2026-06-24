---
description: "Mean free path for Class 11 Physics (NCERT) — average distance between collisions, λ formula. Notes for JEE Main, KCET and Karnataka PU."
---

# Mean Free Path

<ConceptMeta chapter="12" section="12.6" page="296–298" />

<Predict
  label="Altitude effect"
  prompt="The mean free path of air molecules at sea level is about 70 nm. At high altitude (less pressure, fewer molecules), the mean free path is:"
  :options="[
    { text: 'Shorter — molecules move faster at altitude' },
    { text: 'The same — mean free path does not depend on pressure' },
    { text: 'Longer — fewer molecules means fewer collisions', correct: true },
    { text: 'Zero — molecules are too far apart to collide' }
  ]"
  reveal="Mean free path λ ∝ 1/(n·d²) where n = number density. At high altitude, n is much smaller (thinner air), so λ is larger. At ~100 km altitude, λ is several metres. Above ~500 km (exosphere), λ exceeds the scale of the atmosphere entirely — molecules rarely collide."
/>

::: idea
Even in a gas that appears still, molecules are constantly colliding with each other. The **mean free path** $\lambda$ is the average distance a molecule travels between successive collisions.

At atmospheric pressure, $\lambda \approx 70$ nm for air — about 200 times the molecular diameter. Collisions happen billions of times per second.

Mean free path determines how long it takes for heat, sound, momentum, or diffusing molecules to spread through a gas. It underpins viscosity, thermal conductivity, and diffusion.
:::

<ConceptHero type="mean-free-path" />

::: formula
**Mean free path:**
$$\lambda = \frac{1}{\sqrt{2}\, \pi d^2 n}$$

where $d$ = molecular diameter, $n$ = number density (molecules/m³).

Using ideal gas law $n = p/(k_BT)$:
$$\lambda = \frac{k_B T}{\sqrt{2}\, \pi d^2 p}$$

So $\lambda \propto T/p$ — mean free path increases with temperature and decreases with pressure.

**Collision frequency:**
$$Z = \frac{\bar{v}}{\lambda} = \sqrt{2}\, \pi d^2 n \bar{v}$$

At 300 K, 1 atm, for N₂: $\lambda \approx 70$ nm, $Z \approx 7 \times 10^9$ collisions/second.
:::

::: real
**Vacuum technology:** Industrial vacuum systems for thin-film deposition (used to coat mirrors, solar panels, and chips) must reduce pressure until the mean free path exceeds the chamber dimensions. At $10^{-3}$ Pa (low vacuum), $\lambda \approx 70$ mm. At $10^{-6}$ Pa (high vacuum), $\lambda \approx 70$ m. At such pressures, molecules travel across the chamber without colliding — essential for depositing thin films without gas-phase reactions contaminating the coating.
:::

::: try
Compare the diffusion of smell from a perfume bottle in still air at room temperature vs. at a slightly higher temperature. Higher T → higher molecular speed AND larger mean free path → faster diffusion. You can test this with a warm bowl vs. cool bowl of the same substance.
:::

::: whatif
If the mean free path becomes comparable to the size of the container, the usual fluid dynamics (Navier–Stokes equations) break down. This "Knudsen regime" matters in microelectronics (gas in tiny channels), upper atmosphere dynamics, and re-entry vehicles. The Knudsen number Kn = λ/L determines when this occurs.
:::

<Quiz
  question="If the pressure of a gas is halved (at constant temperature), the mean free path:"
  :options="[
    { text: 'Halves' },
    { text: 'Stays the same' },
    { text: 'Doubles', correct: true },
    { text: 'Quadruples' }
  ]"
  explanation="λ = k_BT/(√2 π d² p). At constant T, λ ∝ 1/p. Halving p doubles λ."
/>

::: notes
- Mean free path λ = 1/(√2 π d² n) = k_BT/(√2 π d² p)
- λ ∝ T/p — increases with T, decreases with pressure
- At 1 atm, 300 K: λ ≈ 70 nm for air; collision frequency ~7×10⁹/s
- Determines viscosity, thermal conductivity, diffusion coefficients
- Knudsen regime (Kn = λ/L >> 1): fluid dynamics breaks down
:::

::: refs
- [Mean Free Path — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/kinetic/mfp.html)
- [NCERT Ch12](https://ncert.nic.in/textbook/pdf/keph112.pdf)
:::
