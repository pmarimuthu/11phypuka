---
description: "Standing waves and normal modes for Class 11 Physics (NCERT) — nodes, antinodes, strings and pipes. Notes for JEE Main, JEE Advanced and KCET."
---

# Superposition & Standing Waves

<ConceptMeta chapter="14" section="14.7–14.9" page="349–358" />

<Predict
  label="Node or antinode?"
  prompt="In a standing wave on a string fixed at both ends, where is the displacement always zero?"
  :options="[
    { text: 'At the antinodes' },
    { text: 'At the nodes', correct: true },
    { text: 'At the midpoint only' },
    { text: 'The displacement is never zero anywhere' }
  ]"
  reveal="Nodes are points of zero displacement in a standing wave. They form where the two travelling waves always cancel (destructive interference). At antinodes, the waves always reinforce, giving maximum amplitude. For a string fixed at both ends, both ends must be nodes."
/>

::: idea
**Superposition principle:** When two or more waves overlap in the same medium, the net displacement at any point is the algebraic sum of the individual displacements.

**Standing wave:** formed by two identical waves travelling in opposite directions. Instead of moving along, the pattern of nodes (zero displacement) and antinodes (max displacement) stays fixed in space.

String fixed at both ends: resonant modes (harmonics) require $L = n\lambda/2$ for integer $n$.

Standing waves explain the tones of musical instruments.
:::

<ConceptHero type="standing-waves" />

::: formula
**Standing wave** (two opposite-travelling waves):
$$y = 2A \cos(kx) \sin(\omega t)$$

Nodes where $\cos(kx) = 0$ → $x = \lambda/4, 3\lambda/4, \ldots$

Antinodes where $|\cos(kx)| = 1$ → $x = 0, \lambda/2, \lambda, \ldots$

**Harmonics (string fixed at both ends):**
$$L = n\frac{\lambda_n}{2} \quad \Rightarrow \quad f_n = \frac{nv}{2L} = n f_1$$

$f_1 = v/2L$ = fundamental; $f_2 = 2f_1$ = first overtone; etc.

**Open pipe:** same harmonics as string: $f_n = nv/2L$

**Closed pipe (one end closed):** only odd harmonics: $f_n = (2n-1)v/4L$
:::

::: real
**Musical instruments:** Every stringed and wind instrument produces sound through standing waves. A guitar string (fixed at nut and bridge) vibrates in harmonics — the fundamental gives the note's pitch, higher harmonics give the timbre. The same note played on a violin and an oboe has the same fundamental frequency but different harmonic content — that is why they sound different.
:::

::: try
Clamp a ruler to a table's edge (40 cm hanging off). Pluck it to hear the natural resonance frequency. Now change how much hangs off (changing $L$) — the pitch changes. You can verify that $f \propto 1/L$ by plucking different lengths.
:::

::: whatif
The Chladni patterns you see when you sprinkle sand on a vibrating plate are the nodes of 2D standing waves. Sand collects where the plate does NOT vibrate (nodes). The beautiful, symmetric patterns depend on where the plate is supported and where it is excited. Chladni showed these patterns in 1787 — Napoleon Bonaparte awarded him a prize to explain them mathematically.
:::

<Quiz
  question="A string of length 0.5 m is fixed at both ends. The fundamental frequency is 200 Hz. What is the wave speed on the string?"
  :options="[
    { text: '100 m/s' },
    { text: '200 m/s', correct: true },
    { text: '400 m/s' },
    { text: '50 m/s' }
  ]"
  explanation="f₁ = v/2L → v = 2Lf₁ = 2 × 0.5 × 200 = 200 m/s."
/>

::: notes
- Superposition: net displacement = sum of individual displacements
- Standing wave: y = 2A cos(kx) sin(ωt) — no net energy transport
- Nodes: zero displacement always; antinodes: maximum displacement
- String/open pipe harmonics: f_n = nv/2L (all harmonics)
- Closed pipe: f_n = (2n−1)v/4L (odd harmonics only)
:::

::: refs
- [Standing Waves — Khan Academy](https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/standing-waves/v/standing-waves-on-strings)
- [NCERT Ch14](https://ncert.nic.in/textbook/pdf/keph114.pdf)
:::
