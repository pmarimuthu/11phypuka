---
description: "Resonance and forced oscillations for Class 11 Physics (NCERT). Tacoma bridge, tuning. Notes for JEE Main, KCET and Karnataka PU."
---

# Forced Oscillations & Resonance

<ConceptMeta chapter="13" section="13.8" page="324–328" />

<Predict
  label="Resonance condition"
  prompt="A child on a swing is pushed at random times. When pushed at just the right frequency, the amplitude builds dramatically. This frequency is:"
  :options="[
    { text: 'Twice the natural frequency of the swing' },
    { text: 'The natural frequency of the swing', correct: true },
    { text: 'Half the natural frequency' },
    { text: 'Any frequency — timing does not matter' }
  ]"
  reveal="Resonance occurs when the driving frequency equals the natural frequency. Energy is added most efficiently when each push is in phase with the swing's natural oscillation. At resonance, amplitude can build to very large values (limited only by damping). This is why you time your pushes with the swing's rhythm."
/>

::: idea
When an oscillator is driven by an external periodic force at frequency $\omega_d$, it undergoes **forced oscillations**. The amplitude of forced oscillation depends strongly on how close $\omega_d$ is to the natural frequency $\omega_0$.

**Resonance:** When $\omega_d = \omega_0$, the amplitude reaches its maximum (limited only by damping). Energy transfer from driver to oscillator is maximally efficient.

Resonance can be spectacular and dangerous:
- Soldiers break step crossing bridges (to avoid resonance)
- The Tacoma Narrows Bridge (1940) collapsed due to wind-driven resonance
- MRI machines use resonance of nuclear spins
- Radio tuning selects one frequency from many
:::

<ConceptHero type="resonance" />

::: formula
**Steady-state amplitude of forced oscillation:**
$$A = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega_d^2)^2 + (b\omega_d/m)^2}}$$

At resonance $\omega_d = \omega_0$:
$$A_{\text{res}} = \frac{F_0}{b\omega_0}$$

Amplitude at resonance is inversely proportional to damping $b$. Low damping → very sharp, very high resonance peak (high Q).

**Sharpness of resonance** (bandwidth):
$$\Delta\omega = \frac{b}{m} = \frac{\omega_0}{Q}$$
:::

::: real
**Radio tuning:** A radio receiver contains an LC circuit whose natural frequency can be adjusted by a variable capacitor. When the circuit's natural frequency matches the frequency of a radio station's carrier wave, resonance occurs — that station's signal is amplified far more than all others. This is how you "tune in" to a channel. The sharpness of the resonance peak determines the radio's selectivity.
:::

::: try
Fill glasses with different levels of water and tap them. Each rings at a different pitch (its natural frequency). Now try rubbing a wet finger around the rim of a crystal glass — you are driving it at its resonant frequency. It produces a clear, sustained musical note. This is resonance driven by stick-slip friction.
:::

::: whatif
The Tacoma Narrows Bridge collapsed in 1940 due to aeroelastic flutter (not simple resonance as often claimed, but related). The bridge oscillated with increasing amplitude until it tore apart. Watch the footage — it swings like a ribbon. Modern bridges are designed with aerodynamic cross-sections to prevent such instabilities. The lesson: resonance is not just a physics curiosity; it is a structural engineering constraint.
:::

<Quiz
  question="At resonance, the amplitude of a forced oscillator is maximum. Increasing the damping:"
  :options="[
    { text: 'Increases the resonance amplitude' },
    { text: 'Does not affect resonance amplitude' },
    { text: 'Decreases the resonance amplitude and broadens the peak', correct: true },
    { text: 'Shifts the resonance frequency higher' }
  ]"
  explanation="A_res = F₀/(bω₀). More damping (larger b) → lower resonance amplitude. It also broadens the resonance peak (Δω = b/m increases). High damping → broad, low peak; low damping → sharp, high peak."
/>

::: notes
- Forced oscillation driven at ω_d; amplitude depends on |ω_d − ω_0|
- Resonance: ω_d = ω_0 → maximum amplitude = F₀/(bω₀)
- Low damping → sharp, high resonance peak (high Q)
- High damping → broad, low peak; resonance less sharp
- Applications: radio tuning, MRI, musical instruments, structural design
:::

::: refs
- [Resonance — Khan Academy](https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/harmonic-motion/v/introduction-to-resonance)
- [NCERT Ch13](https://ncert.nic.in/textbook/pdf/keph113.pdf)
:::
