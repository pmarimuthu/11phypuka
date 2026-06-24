---
description: "Damped oscillations for Class 11 Physics (NCERT) — under, critical and over damping. Quality factor. Notes for JEE Main, KCET and Karnataka PU."
---

# Damped Oscillations

<ConceptMeta chapter="13" section="13.7" page="320–324" />

<Predict
  label="Overdamped door"
  prompt="A door closer is designed so the door slowly closes without oscillating. This is an example of:"
  :options="[
    { text: 'Underdamped motion — the door oscillates and settles' },
    { text: 'Critical or overdamping — no oscillation, direct return to equilibrium', correct: true },
    { text: 'SHM — the door follows a sine curve' },
    { text: 'Resonance — the damping matches the natural frequency' }
  ]"
  reveal="A door closer with enough damping (critical or overdamped) returns to closed position without oscillating past it. Critical damping is the minimum damping that prevents oscillation — it returns to equilibrium in the shortest time without overshoot. Overdamping returns even more slowly. Both are useful when overshooting is dangerous or annoying."
/>

::: idea
Real oscillators lose energy to friction, air resistance, or internal damping. The amplitude decreases over time — this is **damped oscillation**.

Three cases depending on the damping coefficient:
1. **Underdamped:** Oscillates with decreasing amplitude — like a swinging pendulum in air
2. **Critically damped:** Returns to equilibrium in minimum time without oscillating — used in measuring instruments
3. **Overdamped:** Returns slowly without oscillating — like a door closer

The energy in a damped oscillator decreases exponentially with time.
:::

<ConceptHero type="damped-oscillations" />

::: formula
**Damped oscillation** (underdamped):
$$x(t) = A_0 e^{-bt/2m} \cos(\omega' t + \phi)$$

where $b$ = damping coefficient, and:
$$\omega' = \sqrt{\omega_0^2 - \left(\frac{b}{2m}\right)^2} < \omega_0$$

(Damped frequency is lower than natural frequency)

**Energy decay:**
$$E(t) = \frac{1}{2}kA_0^2 e^{-bt/m}$$

**Quality factor:**
$$Q = \frac{\omega_0 m}{b} = \frac{2\pi E}{|\Delta E_{\text{per cycle}}|}$$

High Q → lightly damped (oscillates for many cycles); Low Q → heavily damped.
:::

::: real
**Shock absorbers in a car:** Car suspension springs compress when you hit a bump. Without damping, the car would bounce up and down many times (underdamped — dangerous). Shock absorbers add viscous damping to approach critical damping — the car returns to level quickly with minimal oscillation. "Bouncy" handling means underdamped; "stiff" means overdamped.
:::

::: try
Set a pendulum oscillating in air and observe how it gradually slows. Wrap a piece of card around the bob to increase air resistance — the damping increases and it stops faster. Now try it with the bob submerged in water — heavy damping, very few oscillations.
:::

::: whatif
Seismographs use critically damped spring-mass systems to measure ground motion. If underdamped, the instrument would oscillate after the earthquake passed, confusing the reading. If overdamped, it would be too sluggish to follow rapid vibrations. Critical damping gives the fastest response without overshooting — essential for accurate seismic records.
:::

<Quiz
  question="The energy of a damped oscillator decreases to half its initial value in 10 s. In how long will it decrease to 1/4 of the initial value?"
  :options="[
    { text: '10 s' },
    { text: '15 s' },
    { text: '20 s', correct: true },
    { text: '40 s' }
  ]"
  explanation="E ∝ e^(−bt/m). Halving takes 10 s. Halving again takes another 10 s. So E = E₀/4 after 20 s."
/>

::: notes
- Underdamped: oscillates with amplitude ∝ e^(−bt/2m)
- Critical damping: minimum damping, fastest return without oscillation
- Overdamped: slow return without oscillation
- E(t) = E₀ e^(−bt/m): exponential energy decay
- Quality factor Q: higher Q = less damping = more oscillations before stopping
:::

::: refs
- [Damped Oscillations — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/oscda.html)
- [NCERT Ch13](https://ncert.nic.in/textbook/pdf/keph113.pdf)
:::
