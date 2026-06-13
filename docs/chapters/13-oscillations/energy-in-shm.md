---
description: "Energy in SHM for Class 11 Physics (NCERT) — KE + PE = constant, energy–displacement graph. Notes for JEE Main, KCET and Karnataka PU."
---

# Energy in SHM

<ConceptMeta chapter="13" section="13.5" page="312–316" />

<Predict
  label="Energy at equilibrium"
  prompt="A spring-mass system oscillates in SHM. At the equilibrium position, the kinetic energy is:"
  :options="[
    { text: 'Zero — the mass is momentarily at rest' },
    { text: 'Maximum — all energy is kinetic', correct: true },
    { text: 'Equal to the potential energy' },
    { text: 'Half the total energy' }
  ]"
  reveal="At equilibrium (x=0), the spring is unstretched (PE=0) and the mass moves at maximum speed. All energy is kinetic: KE = ½mv²_max = ½mA²ω² = total energy. At the extremes (x = ±A), v=0 so KE=0 and all energy is potential."
/>

::: idea
In SHM, energy continuously converts between **kinetic** (at equilibrium, max speed) and **potential** (at extremes, zero speed). The **total mechanical energy remains constant** (no friction).

Total energy $E = \frac{1}{2}kA^2$ — depends only on the amplitude, not on position or velocity at a specific moment.

This is why SHM is used in clocks — the energy sloshes back and forth predictably between KE and PE without loss (in the ideal case).
:::

<ConceptHero type="energy-shm" />

::: formula
**Potential energy:**
$$U = \frac{1}{2}kx^2 = \frac{1}{2}m\omega^2 x^2$$

**Kinetic energy:**
$$K = \frac{1}{2}mv^2 = \frac{1}{2}m\omega^2(A^2 - x^2)$$

**Total mechanical energy:**
$$E = K + U = \frac{1}{2}k A^2 = \frac{1}{2}m\omega^2 A^2 = \text{constant}$$

At $x = 0$: $K = E$, $U = 0$

At $x = \pm A$: $K = 0$, $U = E$

At $x = A/\sqrt{2}$: $K = U = E/2$
:::

::: real
**Swing timing:** When you push a child on a swing to a greater amplitude, you increase the total energy ($E \propto A^2$). But the period doesn't change (for small angles). The child swings faster through the bottom (higher KE = higher v) to compensate for the greater distance. This is why amplitude and period are independent in SHM.
:::

::: try
Set a pendulum swinging at different amplitudes. Time 10 swings for each amplitude. Notice that the period is the same regardless of amplitude (for small angles). This confirms that total energy $E \propto A^2$ does not affect the period — unlike most real-world systems where speed and period are linked.
:::

::: whatif
Total energy $E = \frac{1}{2}kA^2$. If you slowly (quasi-statically) increase the stiffness of the spring while the mass is oscillating (say by coiling extra wire), the amplitude decreases but the total energy can remain the same (or change, depending on how you do it). This adiabatic invariant — the ratio $E/f$ — is conserved in slowly changing systems and is important in quantum mechanics.
:::

<Quiz
  question="In SHM, when is the kinetic energy equal to the potential energy?"
  :options="[
    { text: 'At x = 0 (equilibrium)' },
    { text: 'At x = ±A (extremes)' },
    { text: 'At x = ±A/√2', correct: true },
    { text: 'Never — they are never equal' }
  ]"
  explanation="K = U when ½mω²(A²−x²) = ½mω²x² → A²−x² = x² → x = A/√2."
/>

::: notes
- U = ½kx² = ½mω²x²; K = ½mω²(A²−x²)
- E = K + U = ½kA² = constant (no friction)
- At x=0: K=max, U=0; at x=±A: K=0, U=max
- K = U when x = ±A/√2
- Amplitude determines total energy; period is amplitude-independent
:::

::: refs
- [Energy in SHM — Khan Academy](https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/harmonic-motion/v/conservation-of-energy-in-shm)
- [NCERT Ch13](https://ncert.nic.in/textbook/pdf/keph113.pdf)
:::
