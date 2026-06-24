---
description: "Heat transfer — conduction, convection and radiation for Class 11 Physics (NCERT). Thermal conductivity, black body, Stefan's law. JEE Main, KCET notes."
---

# Heat Transfer

<ConceptMeta chapter="10" section="10.6–10.7" page="238–242" />

<Predict
  label="Thermos flask"
  prompt="A thermos flask keeps liquid hot for hours. Which heat transfer mechanism(s) does it block?"
  :options="[
    { text: 'Radiation only' },
    { text: 'Conduction only' },
    { text: 'All three: conduction, convection and radiation', correct: true },
    { text: 'Convection only' }
  ]"
  reveal="A thermos has: (1) a vacuum gap between double walls — blocks conduction and convection (no medium); (2) silvered inner walls — reflects radiation back. All three mechanisms are suppressed, which is why a thermos is so effective."
/>

::: idea
Heat transfers from hotter to cooler regions by three mechanisms:

**Conduction:** Energy passes through a material by molecular collisions, without bulk motion of the material. Metals are good conductors (free electrons); wood and air are poor conductors (insulators).

**Convection:** Heat is carried by the bulk movement of a fluid. Warm fluid rises (less dense), cool fluid sinks — forming convection currents. Responsible for sea breezes, monsoons, and room heating by radiators.

**Radiation:** Electromagnetic waves (mainly infrared) carry energy through vacuum or a medium — no material medium needed. The Sun heats Earth entirely by radiation across 150 million km of vacuum.
:::

<ConceptHero type="heat-transfer" />

::: formula
**Conduction** (Fourier's law):
$$\frac{dQ}{dt} = -kA\frac{dT}{dx}$$

$k$ = thermal conductivity [W/m·K]. $k_{\text{copper}} \approx 400$, $k_{\text{wood}} \approx 0.1$, $k_{\text{air}} \approx 0.026$ W/m·K.

**Radiation** (Stefan–Boltzmann law):
$$P = \varepsilon \sigma A T^4$$

where $\sigma = 5.67 \times 10^{-8}$ W/m²·K⁴ (Stefan–Boltzmann constant), $\varepsilon$ = emissivity (0 to 1).

**Net radiation** from a body at $T$ in surroundings at $T_0$:
$$P_{\text{net}} = \varepsilon \sigma A (T^4 - T_0^4)$$
:::

::: real
**Monsoon formation:** During summer, the Indian landmass heats up faster than the Indian Ocean (land has lower specific heat than water). Hot air over land rises (convection), creating low pressure. Cool, moist air from the ocean flows in to replace it. This giant convection cell carries moisture inland, producing the monsoon rains — directly driven by the differential heating of land and sea.
:::

::: try
Feel the bottom of a metal frying pan (cold) and a wooden spoon handle at room temperature. Both are at the same temperature, but the metal feels cooler — its higher thermal conductivity draws heat from your hand faster. Now hold both near (not touching) a lit candle — you feel the radiation. Wrap the metal with a cloth (insulator) — conduction drops to near zero.
:::

::: whatif
A perfect blackbody ($\varepsilon = 1$) radiates 1000 W at temperature $T$. If the temperature doubles, the radiated power becomes $2^4 = 16$ times larger — 16 000 W. This is why the surface temperature of the Sun (5778 K) radiates so enormously more per unit area than Earth (288 K): $(5778/288)^4 \approx 160 000$ times more per unit area.
:::

<Quiz
  question="If the absolute temperature of a black body is doubled, its rate of radiation becomes:"
  :options="[
    { text: '2 times' },
    { text: '4 times' },
    { text: '8 times' },
    { text: '16 times', correct: true }
  ]"
  explanation="Stefan–Boltzmann law: P ∝ T⁴. If T → 2T, then P → (2T)⁴ = 16T⁴ — 16 times larger."
/>

::: notes
- Conduction: dQ/dt = kA(ΔT/Δx), no bulk fluid motion; metals conduct best
- Convection: bulk fluid motion carries heat; hot fluid rises, cool sinks
- Radiation: EM waves, no medium needed; P = εσAT⁴
- Stefan–Boltzmann: P ∝ T⁴ (very sensitive to temperature)
- Thermos: vacuum blocks conduction+convection; silvering blocks radiation
:::

::: refs
- [Heat Transfer — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/heatra.html)
- [NCERT Ch10](https://ncert.nic.in/textbook/pdf/keph110.pdf)
:::
