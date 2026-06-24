---
description: "Beats in sound for Class 11 Physics (NCERT) — beat frequency = |f₁ − f₂|, tuning of instruments. Notes for JEE Main, KCET and Karnataka PU."
---

# Beats

<ConceptMeta chapter="14" section="14.10" page="358–360" />

<Predict
  label="Beat frequency"
  prompt="A tuning fork of 440 Hz and another of 443 Hz are sounded together. The beat frequency is:"
  :options="[
    { text: '883 Hz' },
    { text: '440 Hz' },
    { text: '3 Hz', correct: true },
    { text: '0.5 Hz' }
  ]"
  reveal="Beat frequency = |f₁ − f₂| = |440 − 443| = 3 Hz. You hear a sound that gets louder and softer 3 times per second. Beats arise from constructive and destructive interference alternating as the two waves drift in and out of phase."
/>

::: idea
When two sound waves of **slightly different frequencies** are superposed, they alternately reinforce and cancel as they drift in and out of phase. The result is a periodic variation in amplitude — you hear a regular "wah-wah-wah" sound called **beats**.

The beat frequency equals the difference in the two source frequencies:
$$f_{\text{beat}} = |f_1 - f_2|$$

Beats are used practically to tune musical instruments — you listen for beats between the instrument and a reference, then adjust until beats disappear (f₁ = f₂).
:::

<ConceptHero type="beats" />

::: formula
Two waves of frequencies $f_1$ and $f_2$ (where $f_1 \approx f_2$):
$$y_1 = A\cos(2\pi f_1 t) \quad y_2 = A\cos(2\pi f_2 t)$$

**Superposition:**
$$y = y_1 + y_2 = 2A\cos\left(2\pi \frac{f_1-f_2}{2} t\right) \cos\left(2\pi \frac{f_1+f_2}{2} t\right)$$

This is: **amplitude modulation** (the slow $\frac{f_1-f_2}{2}$ factor) × **carrier** (the fast $\frac{f_1+f_2}{2}$ factor).

**Beat frequency:** $f_{\text{beat}} = |f_1 - f_2|$ (note: the amplitude completes one cycle in $1/(f_1-f_2)$ seconds, but the ear hears two maxima per cycle, so beat rate = $|f_1-f_2|$).
:::

::: real
**Tuning instruments:** Professional musicians and piano tuners use beats constantly. To tune a guitar string to another string, they play both simultaneously and listen for beats. They tighten or loosen the string until the beats disappear — meaning the frequencies are equal. An experienced tuner can detect beats of 0.1 Hz and match frequencies to extraordinary precision. No electronic equipment is needed — just trained ears.
:::

::: try
Play two notes very close in frequency on any two instruments (or use online tone generators at 440 Hz and 442 Hz). Listen carefully — you hear a regular pulsing in the sound. This is beats. Change 442 to 444 Hz — the beats get faster (4 Hz instead of 2 Hz). Confirm: beat frequency = |f₁ − f₂|.
:::

::: whatif
If the two frequencies differ by more than about 20–30 Hz, the beats become too fast to hear as distinct pulses — they merge into a perceived roughness or dissonance. This is why a mistuned guitar sounds "off" but the beating isn't heard as a clear wah-wah — the rate is too fast. Very small differences (< ~5 Hz) produce clearly audible, distinct beats.
:::

<Quiz
  question="Two tuning forks produce 6 beats per second. One fork has frequency 512 Hz. The other fork could have frequency:"
  :options="[
    { text: '512 Hz only' },
    { text: '506 Hz or 518 Hz', correct: true },
    { text: '506 Hz only' },
    { text: '3072 Hz' }
  ]"
  explanation="f_beat = |f₁ − f₂| = 6. So f₂ = 512 + 6 = 518 Hz or f₂ = 512 − 6 = 506 Hz. Both give 6 beats per second."
/>

::: notes
- Beats: interference of two close frequencies f₁ and f₂
- Beat frequency = |f₁ − f₂|
- Amplitude pulsates between 2A (constructive) and 0 (destructive)
- Used for tuning instruments (beats → 0 when in tune)
- Too many beats per second (>~20–30): heard as roughness, not distinct beats
:::

::: refs
- [Beats — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/sound/beat.html)
- [NCERT Ch14](https://ncert.nic.in/textbook/pdf/keph114.pdf)
:::
