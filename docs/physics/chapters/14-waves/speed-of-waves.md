---
description: "Speed of waves for Class 11 Physics (NCERT) — speed of sound, Newton's formula, Laplace correction. Notes for JEE Main, KCET and Karnataka PU."
---

# Speed of a Wave

<ConceptMeta chapter="14" section="14.5" page="343–346" />

<Predict
  label="Wave speed on a string"
  prompt="You increase the tension in a guitar string (by tightening the tuning peg). The wave speed on the string:"
  :options="[
    { text: 'Decreases — higher tension means stiffer, slower waves' },
    { text: 'Is unchanged — speed depends only on frequency' },
    { text: 'Increases — higher tension increases wave speed', correct: true },
    { text: 'Decreases — the string is heavier under tension' }
  ]"
  reveal="Speed of transverse wave on a string: v = √(T/μ). Higher tension T → higher speed. Frequency increases too (f = v/λ, same string length → same fundamental λ, so f goes up). That is exactly how tuning works: tighter string → faster wave → higher pitch."
/>

::: idea
Wave speed depends on the **medium** — specifically its elasticity (restoring force) and inertia (density):

- **Transverse waves on a string:** tension provides the restoring force; linear mass density provides inertia
- **Sound in a gas:** bulk modulus provides restoring force; density provides inertia  
- **Sound in a solid:** Young's modulus or bulk modulus depending on wave type

Speed is a property of the medium, not of the frequency or amplitude of the wave.

A key fact: **wave speed changes when the medium changes** (e.g., at an interface) — this causes reflection and refraction.
:::

<ConceptHero type="speed-of-waves" />

::: formula
**Speed of transverse wave on a string:**
$$v = \sqrt{\frac{T}{\mu}}$$

$T$ = tension [N], $\mu$ = linear mass density [kg/m]

**Speed of sound in a gas:**
$$v = \sqrt{\frac{\gamma p}{\rho}} = \sqrt{\frac{\gamma RT}{M}}$$

**Speed of sound in a solid (longitudinal):**
$$v = \sqrt{\frac{Y}{\rho}}$$

At 0°C: speed of sound in air ≈ 331 m/s. At temperature $T$(°C):
$$v \approx 331 + 0.6T \text{ m/s} \quad (\text{empirical})$$
:::

::: real
**Newton and Laplace correction:** Newton calculated the speed of sound in air assuming isothermal compression (B = p). His answer was ~280 m/s — 16% too low. Laplace corrected this by recognising compression in a sound wave is adiabatic (too fast for heat exchange): B = γp, giving $v = \sqrt{\gamma p/\rho} \approx 331$ m/s — in excellent agreement with experiment. The γ factor reflects the thermodynamic character of the wave.
:::

::: try
Clap two wooden blocks sharply near one end of a long metal pipe. Have a friend listen at the other end. They hear two sounds — one through the pipe (faster) and one through the air (slower). The time gap is related to the difference in wave speeds in metal vs air. Can you estimate the ratio of speeds?
:::

::: whatif
Sound travels at ~340 m/s in air, ~1480 m/s in water, and ~5100 m/s in steel. Why so different? In all cases $v = \sqrt{B/\rho}$. Water has much higher bulk modulus than air (less compressible) and only 800× higher density → net result: 4× faster. Steel has enormous Young's modulus → very fast. This is why underwater sonar can detect submarines: sound travels so well in water.
:::

<Quiz
  question="A string of length 1 m and mass 10 g is under tension 40 N. The speed of transverse waves is:"
  :options="[
    { text: '20 m/s' },
    { text: '40 m/s' },
    { text: '63 m/s', correct: true },
    { text: '4000 m/s' }
  ]"
  explanation="μ = 0.010/1 = 0.01 kg/m. v = √(T/μ) = √(40/0.01) = √4000 ≈ 63.2 m/s."
/>

::: notes
- v = √(T/μ) for transverse wave on string
- v = √(γp/ρ) = √(γRT/M) for sound in gas
- v = √(Y/ρ) for sound in solid (longitudinal)
- Speed depends on medium, not on frequency or amplitude
- Sound: air < water < solid (higher B/ρ → faster)
:::

::: refs
- [Speed of Sound — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/sound/souspe.html)
- [NCERT Ch14](https://ncert.nic.in/textbook/pdf/keph114.pdf)
:::
