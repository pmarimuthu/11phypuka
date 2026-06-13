---
description: "Simple harmonic motion (SHM) for Class 11 Physics (NCERT) — displacement, velocity, acceleration equations. Notes for JEE Main, JEE Advanced, KCET."
---

# Periodic Motion & Simple Harmonic Motion

<ConceptMeta chapter="13" section="13.2–13.4" page="306–312" />

<Predict
  label="SHM condition"
  prompt="Which condition makes an oscillation simple harmonic?"
  :options="[
    { text: 'The restoring force is constant' },
    { text: 'The restoring force is proportional to displacement and directed toward equilibrium', correct: true },
    { text: 'The period is constant regardless of mass' },
    { text: 'The amplitude never changes' }
  ]"
  reveal="SHM requires F = −kx: restoring force proportional to displacement (so a = −ω²x). This gives sinusoidal motion. A constant force gives uniform acceleration (like gravity without a spring). Pendulums and springs both satisfy F ∝ x for small displacements."
/>

::: idea
**Periodic motion** repeats itself after a fixed time interval (period $T$).

**Simple Harmonic Motion (SHM)** is the simplest periodic motion where the restoring force is proportional to displacement and directed toward the equilibrium position:

$$F = -kx$$

This gives sinusoidal displacement vs time. Examples: spring-mass system, simple pendulum (small angle), atomic vibrations in a crystal, alternating current.

Key quantities: amplitude $A$, period $T$, frequency $f = 1/T$, angular frequency $\omega = 2\pi f$.
:::

<ConceptHero type="shm" />

::: formula
**Equation of motion:**
$$a = -\omega^2 x \quad (\text{defining equation of SHM})$$

**Displacement:**
$$x(t) = A \cos(\omega t + \phi)$$

**Angular frequency:**
$$\omega = \sqrt{\frac{k}{m}} \quad (\text{spring-mass})$$

**Period:**
$$T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}}$$

**Velocity and acceleration:**
$$v = -A\omega\sin(\omega t + \phi) \quad v_{\max} = A\omega \text{ (at equilibrium)}$$
$$a = -A\omega^2\cos(\omega t + \phi) \quad a_{\max} = A\omega^2 \text{ (at extremes)}$$
:::

::: real
**Quartz watch:** A quartz crystal oscillates at exactly 32 768 Hz (2¹⁵ Hz) in SHM. Electronic circuits divide this frequency down to 1 Hz to drive the second hand. The crystal's frequency is determined by its dimensions and elastic properties — with extraordinary precision. A quartz watch gains or loses less than 1 second per month because of the precise, stable frequency of SHM.
:::

::: try
Hang a mass from a rubber band (or spring) and set it oscillating. Time 20 oscillations and calculate the period. Now double the mass — measure the new period. Theory predicts $T \propto \sqrt{m}$, so doubling mass multiplies T by $\sqrt{2} \approx 1.41$. Test this.
:::

::: whatif
SHM only holds for small displacements. For a spring, it holds as long as Hooke's Law applies. For a pendulum, it holds when $\theta < \sim 10°$ (so that $\sin\theta \approx \theta$). At large amplitudes, the motion becomes anharmonic — the restoring force is no longer linear — and the period depends on amplitude. This is why grandfather clock pendulums use small angles.
:::

<Quiz
  question="A spring of constant k = 400 N/m has a 1 kg mass. Its period of oscillation is:"
  :options="[
    { text: 'π/10 s ≈ 0.31 s', correct: true },
    { text: 'π/5 s ≈ 0.63 s' },
    { text: 'π s ≈ 3.14 s' },
    { text: '2π s ≈ 6.28 s' }
  ]"
  explanation="T = 2π√(m/k) = 2π√(1/400) = 2π × 1/20 = π/10 s ≈ 0.314 s."
/>

::: notes
- SHM condition: F = −kx; a = −ω²x
- x = A cos(ωt + φ); v_max = Aω; a_max = Aω² (at extremes)
- ω = √(k/m); T = 2π/ω = 2π√(m/k)
- Period independent of amplitude (for true SHM)
- Large amplitude → anharmonic; period depends on amplitude
:::

::: refs
- [Simple Harmonic Motion — Khan Academy](https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/harmonic-motion/v/introduction-to-harmonic-motion)
- [NCERT Ch13](https://ncert.nic.in/textbook/pdf/keph113.pdf)
:::
