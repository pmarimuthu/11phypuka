---
description: "Simple pendulum for Class 11 Physics (NCERT) — T = 2π√(l/g), factors affecting period. Notes for JEE Main, KCET and Karnataka PU."
---

# Simple Pendulum

<ConceptMeta chapter="13" section="13.6" page="316–320" />

<Predict
  label="Pendulum mass"
  prompt="A pendulum of length 1 m has bob mass 100 g. You replace the bob with a 500 g bob. How does the period change?"
  :options="[
    { text: 'Period increases by factor of 5' },
    { text: 'Period decreases — heavier bob swings faster' },
    { text: 'Period is unchanged', correct: true },
    { text: 'Period increases by √5' }
  ]"
  reveal="For a simple pendulum, T = 2π√(L/g). Mass does not appear in this formula — the period depends only on length and g. This is because both the restoring force (mg sinθ) and the inertia (m) are proportional to m, so m cancels. Galileo first observed this isochronism."
/>

::: idea
A **simple pendulum** is a point mass (bob) suspended by a massless, inextensible string from a fixed pivot. For small angles ($\theta < 10°$), it executes SHM with restoring force $F = -mg\sin\theta \approx -mg\theta$.

Key results:
- Period depends only on length $L$ and $g$ — not mass, not amplitude (for small $\theta$)
- Can be used to measure $g$ very precisely
- Clock pendulums use this principle — length must be controlled for accuracy

Galileo observed isochronism (equal period for different amplitudes) using his own pulse to time a swinging chandelier in Pisa Cathedral.
:::

<ConceptHero type="simple-pendulum" />

::: formula
**Period of a simple pendulum** (small angle):
$$T = 2\pi\sqrt{\frac{L}{g}}$$

**Angular frequency:**
$$\omega = \sqrt{\frac{g}{L}}$$

**Effective length:** $L$ = distance from pivot to centre of mass of bob.

**Second's pendulum:** $T = 2$ s → $L = g/\pi^2 \approx 0.993$ m ≈ 1 m (defined this way historically — the basis for the original definition of the metre).

**$g$ from pendulum:**
$$g = \frac{4\pi^2 L}{T^2}$$
:::

::: real
**Measuring g:** The simple pendulum is one of the most precise and accessible ways to measure $g$ locally. Different locations on Earth have slightly different values of $g$ (due to varying latitude, altitude, and local rock density). Gravitational survey teams use pendulums (or modern gravimeters) to map these variations, which reveal underground structures — useful for oil and mineral prospecting.
:::

::: try
Make a pendulum from a nut tied to a string. Try lengths of 25 cm, 50 cm, and 100 cm. Time 20 oscillations for each. Calculate $T$, then $g = 4\pi^2 L/T^2$. Compare to the standard value of 9.8 m/s². How accurately can you measure $g$ at home?
:::

::: whatif
On the Moon ($g_{\text{Moon}} = 1.62$ m/s²), a 1 m pendulum has period $T = 2\pi\sqrt{1/1.62} \approx 4.94$ s — nearly 2.5 times longer than on Earth. The astronauts' suits had built-in pendulums for some timing tasks — but they needed recalibration for lunar gravity. A Martian pendulum would tick at an intermediate rate between Earth and Moon.
:::

<Quiz
  question="A pendulum has period 2 s at Earth's surface. On a planet where g is 4 times Earth's g, its period would be:"
  :options="[
    { text: '8 s' },
    { text: '4 s' },
    { text: '1 s', correct: true },
    { text: '0.5 s' }
  ]"
  explanation="T ∝ 1/√g. If g → 4g, then T → T/√4 = T/2 = 1 s."
/>

::: notes
- T = 2π√(L/g) — depends on L and g only, not mass or amplitude
- Isochronism: same period for different amplitudes (small angle)
- Seconds pendulum: T = 2s → L ≈ 1 m
- g = 4π²L/T² (experimental determination)
- Large angles: period increases with amplitude (anharmonic)
:::

::: refs
- [Simple Pendulum — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/pend.html)
- [NCERT Ch13](https://ncert.nic.in/textbook/pdf/keph113.pdf)
:::
