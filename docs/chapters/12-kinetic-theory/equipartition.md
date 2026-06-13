---
description: "Law of equipartition of energy for Class 11 Physics (NCERT). Degrees of freedom, specific heat of gases. Notes for JEE Main, JEE Advanced, KCET."
---

# Law of Equipartition of Energy

<ConceptMeta chapter="12" section="12.5" page="293–296" />

<Predict
  label="Degrees of freedom"
  prompt="A diatomic gas (like O₂ or N₂) has more degrees of freedom than a monatomic gas (like Ar). What does this mean for their specific heat capacities?"
  :options="[
    { text: 'Diatomic has lower specific heat — more ways to store energy' },
    { text: 'Both have the same specific heat' },
    { text: 'Diatomic has higher specific heat — more degrees of freedom means more energy stored per kelvin', correct: true },
    { text: 'Monatomic has higher specific heat — simpler molecules' }
  ]"
  reveal="Equipartition theorem: each degree of freedom contributes (1/2)k_BT to average energy. Diatomic molecules have 5 degrees of freedom (3 translational + 2 rotational) vs 3 for monatomic. More degrees of freedom → more energy stored for the same temperature rise → higher specific heat. This is why air (diatomic) has higher c_v than noble gases."
/>

::: idea
The **Law of Equipartition of Energy** states that in thermal equilibrium, the total energy of a system is shared equally among all its degrees of freedom, each receiving an average energy of $\frac{1}{2}k_BT$.

**Degrees of freedom (f):**
- Monatomic gas (He, Ar): 3 (translation only)
- Diatomic gas (H₂, O₂, N₂) at room temperature: 5 (3 translation + 2 rotation)
- Diatomic at high temperature: 7 (+ 2 vibrational)
- Non-linear polyatomic: 6 (3 translation + 3 rotation)

This explains why different gases have different specific heat capacities.
:::

<ConceptHero type="equipartition" />

::: formula
**Average energy per molecule:**
$$U_{\text{molecule}} = \frac{f}{2} k_B T$$

**Internal energy of 1 mole:**
$$U = \frac{f}{2} RT$$

**Specific heat at constant volume:**
$$C_v = \frac{f}{2} R$$

**Ratio of specific heats:**
$$\gamma = \frac{C_p}{C_v} = 1 + \frac{2}{f}$$

| Gas type | $f$ | $C_v$ | $C_p$ | $\gamma$ |
|----------|-----|--------|--------|---------|
| Monatomic | 3 | (3/2)R | (5/2)R | 5/3 ≈ 1.67 |
| Diatomic (room T) | 5 | (5/2)R | (7/2)R | 7/5 = 1.4 |
| Diatomic (high T) | 7 | (7/2)R | (9/2)R | 9/7 ≈ 1.29 |
:::

::: real
**Speed of sound in different gases:** Speed of sound in a gas is $v = \sqrt{\gamma RT/M}$. At the same temperature, monatomic gases (γ = 5/3) carry sound slightly faster than diatomic (γ = 7/5) for the same molar mass. The anomalously slow speed of sound in SF₆ (heavy, many degrees of freedom, small γ) is used to demonstrate deepening of voice — opposite of helium's voice-raising effect.
:::

::: try
Compare the γ values: for monatomic ideal gas theory predicts γ = 1.67. Measured values: He = 1.66, Ar = 1.67 (excellent agreement). For N₂: theory = 1.4, measured = 1.40 (at room temperature). This agreement between kinetic theory predictions and measured values was one of the great triumphs of 19th-century physics.
:::

::: whatif
At very low temperatures, molecular vibrations are "frozen out" — quantum mechanics prevents them from being excited (vibrational energy levels are widely spaced). So H₂ at very low T acts like it has only 3 degrees of freedom (monatomic γ ≈ 5/3). As temperature rises, rotation kicks in (f=5), and at very high temperature, vibration too (f=7). Specific heat changes with temperature — another quantum effect in plain sight.
:::

<Quiz
  question="For a monatomic ideal gas, C_v is:"
  :options="[
    { text: 'R/2' },
    { text: 'R' },
    { text: '(3/2)R', correct: true },
    { text: '(5/2)R' }
  ]"
  explanation="Monatomic: f = 3. C_v = (f/2)R = (3/2)R ≈ 12.5 J/mol·K."
/>

::: notes
- Equipartition: each degree of freedom has average energy (1/2)k_BT
- Monatomic f=3; diatomic f=5 (room T); nonlinear polyatomic f=6
- C_v = (f/2)R; C_p = C_v + R; γ = 1 + 2/f
- Monatomic: γ=5/3; Diatomic: γ=7/5=1.4
- Vibrational modes frozen at low T (quantum effect)
:::

::: refs
- [Equipartition — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/kinetic/eqpar.html)
- [NCERT Ch12](https://ncert.nic.in/textbook/pdf/keph112.pdf)
:::
