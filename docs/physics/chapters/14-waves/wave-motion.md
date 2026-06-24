---
description: "Wave motion for Class 11 Physics (NCERT) — transverse and longitudinal waves, wavelength, frequency, speed. Notes for JEE Main, KCET, Karnataka PU."
---

# Wave Motion

<ConceptMeta chapter="14" section="14.2–14.4" page="336–343" />

<Predict
  label="Transverse vs longitudinal"
  prompt="In a sound wave travelling through air, air molecules move:"
  :options="[
    { text: 'Perpendicular to the direction of wave travel (transverse)' },
    { text: 'Parallel to the direction of wave travel (longitudinal)', correct: true },
    { text: 'In circles' },
    { text: 'They do not move — only energy travels' }
  ]"
  reveal="Sound is a longitudinal wave: air molecules oscillate back and forth in the same direction as the wave travels, creating alternating compressions (high pressure) and rarefactions (low pressure). Transverse waves (like waves on a string) have displacement perpendicular to travel direction. Sound cannot be transverse in air (fluids cannot sustain shear)."
/>

::: idea
A **wave** is a disturbance that propagates through a medium (or in case of EM waves, through vacuum), transferring energy without permanently displacing the medium.

**Two types:**
- **Transverse:** displacement perpendicular to propagation (string waves, EM waves)
- **Longitudinal:** displacement parallel to propagation (sound, seismic P-waves)

**Key wave parameters:**
- Wavelength $\lambda$: distance between successive crests (or compressions)
- Frequency $f$: oscillations per second [Hz]
- Period $T = 1/f$
- Wave speed $v = f\lambda$
- Amplitude $A$: maximum displacement
:::

<ConceptHero type="wave-motion" />

::: formula
**Wave equation** (for a harmonic wave travelling in +x direction):
$$y(x, t) = A \sin(kx - \omega t + \phi)$$

where:
- $k = 2\pi/\lambda$ (wave number)
- $\omega = 2\pi f$ (angular frequency)
- Phase speed: $v = \omega/k = f\lambda$

**Wave equation (PDE):**
$$\frac{\partial^2 y}{\partial t^2} = v^2 \frac{\partial^2 y}{\partial x^2}$$
:::

::: real
**Seismic waves:** Earthquakes produce both P-waves (longitudinal, fastest, ~6 km/s in crust) and S-waves (transverse, ~3.5 km/s). S-waves cannot travel through liquid — this was the evidence that Earth's outer core is molten. The time difference between P and S arrivals at a seismograph station is used to calculate the distance to the earthquake epicentre.
:::

::: try
Tie one end of a rope to a wall. Shake the other end sideways — you create a transverse wave. Now push and pull the rope along its length — you create a longitudinal wave (harder to see). Notice: in the transverse wave, your hand moves sideways; the disturbance (crest) moves along the rope.
:::

::: whatif
Water waves are neither purely transverse nor longitudinal — water molecules move in circles (ellipses in shallow water). This is why boats bob up and down AND forward and back as a wave passes. Deep ocean waves involve circular motion that decreases exponentially with depth — submarines at depth feel almost no surface wave motion.
:::

<Quiz
  question="A wave has frequency 500 Hz and wavelength 0.68 m. Its speed is:"
  :options="[
    { text: '0.00136 m/s' },
    { text: '340 m/s', correct: true },
    { text: '735 m/s' },
    { text: '500 m/s' }
  ]"
  explanation="v = fλ = 500 × 0.68 = 340 m/s (speed of sound in air at room temperature)."
/>

::: notes
- Transverse: displacement ⊥ propagation; Longitudinal: displacement ∥ propagation
- y = A sin(kx − ωt + φ); k = 2π/λ; ω = 2πf
- v = fλ = ω/k
- Sound is longitudinal in air; light is transverse (EM)
- Energy transmitted proportional to A²
:::

::: refs
- [Wave Motion — Khan Academy](https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/mechanical-waves/v/introduction-to-waves)
- [NCERT Ch14](https://ncert.nic.in/textbook/pdf/keph114.pdf)
:::
