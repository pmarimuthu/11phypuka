---
description: "Doppler effect for Class 11 Physics (NCERT) — apparent frequency when source or observer moves. Police siren, ambulance examples. JEE Main, KCET notes."
---

# Doppler Effect

<ConceptMeta chapter="14" section="14.11" page="360–364" />

<Predict
  label="Moving source"
  prompt="An ambulance siren sounds at 800 Hz when stationary. As it drives toward you, the pitch you hear is:"
  :options="[
    { text: 'Lower than 800 Hz' },
    { text: 'Exactly 800 Hz — the siren frequency does not change' },
    { text: 'Higher than 800 Hz', correct: true },
    { text: 'Zero — the sound cannot catch up' }
  ]"
  reveal="Doppler effect: when the source moves toward you, successive wavefronts are compressed (shorter wavelength) → higher frequency. When it moves away, wavefronts are stretched → lower pitch. This is why you hear a characteristic pitch drop as an emergency vehicle passes."
/>

::: idea
The **Doppler Effect** is the change in observed frequency of a wave when there is relative motion between the source and the observer.

- Source moving toward observer → wavefronts crowd together → shorter $\lambda$ → higher $f$
- Source moving away from observer → wavefronts spread out → longer $\lambda$ → lower $f$
- Observer moving toward source → intercepts wavefronts more often → higher $f$

The effect applies to all waves — sound, light, water. For light, the Doppler effect causes redshift/blueshift and is fundamental to our understanding of the expanding universe.
:::

<ConceptHero type="doppler" />

::: formula
**General Doppler formula (sound):**
$$f' = f \cdot \frac{v + v_O}{v - v_S}$$

where:
- $v$ = speed of sound in medium
- $v_O$ = speed of observer (+ toward source)
- $v_S$ = speed of source (+ toward observer)

**Sign convention:** Choose + when the relative motion is toward, − when away.

**Special cases:**
- Observer moves toward stationary source: $f' = f(v + v_O)/v$
- Source moves toward stationary observer: $f' = fv/(v - v_S)$
- Source moving away: $f' = fv/(v + v_S) < f$
:::

::: real
**Astronomical redshift:** Light from distant galaxies is shifted toward the red (longer wavelength = lower frequency). This is a Doppler shift caused by the galaxies moving away from us. The faster they recede, the greater the redshift. Edwin Hubble discovered in 1929 that nearly all galaxies are redshifted and that recession speed is proportional to distance — proving the universe is expanding. This is one of the greatest uses of the Doppler effect.
:::

::: try
Listen to a passing vehicle (car, motorcycle, bus) with a constant engine note. Notice the clear pitch drop as it passes you. Before it passes: higher frequency (source approaching). After it passes: lower frequency (source receding). The sharper the drop, the faster the vehicle is moving.
:::

::: whatif
Police radar guns and speed cameras use the Doppler effect for radio waves (microwaves). The gun bounces microwaves off a moving car and measures the Doppler shift in the reflected signal to calculate speed. The formula is the same in principle — though for electromagnetic waves, the relativistic Doppler formula (not exactly the same as acoustic) is used at high precision.
:::

<Quiz
  question="A train moving at 30 m/s blows a horn of frequency 600 Hz. An observer at rest hears (speed of sound = 330 m/s):"
  :options="[
    { text: '545 Hz when the train approaches' },
    { text: '660 Hz when the train approaches', correct: true },
    { text: '600 Hz — the observer is stationary' },
    { text: '630 Hz when the train approaches' }
  ]"
  explanation="f' = f × v/(v − v_S) = 600 × 330/(330 − 30) = 600 × 330/300 = 660 Hz."
/>

::: notes
- Doppler formula: f' = f × (v + v_O)/(v − v_S)
- Source approaches: f' > f; Source recedes: f' < f
- Observer approaches: f' > f; Observer recedes: f' < f
- Sign: + when motion is toward, − when away
- Astronomical redshift: galaxies receding → light Doppler-shifted red → expanding universe
:::

::: refs
- [Doppler Effect — Khan Academy](https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/doppler-effect/v/doppler-effect)
- [NCERT Ch14](https://ncert.nic.in/textbook/pdf/keph114.pdf)
:::
