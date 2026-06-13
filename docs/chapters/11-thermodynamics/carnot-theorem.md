---
description: "Carnot theorem and cycle for Class 11 Physics (NCERT) — maximum efficiency, η = 1 − T₂/T₁. Notes for JEE Main, JEE Advanced and KCET."
---

# Carnot Theorem

<ConceptMeta chapter="11" section="11.9" page="272–275" />

<Predict
  label="Carnot comparison"
  prompt="Engine A (Carnot) and Engine B (real, irreversible) both operate between 400 K and 200 K. Which is more efficient?"
  :options="[
    { text: 'Engine B — real engines can improve on ideal ones' },
    { text: 'They are equally efficient' },
    { text: 'Engine A (Carnot) — it is the maximum possible efficiency', correct: true },
    { text: 'Impossible to say without more data' }
  ]"
  reveal="Carnot's theorem states that all reversible engines between the same two temperatures have the same efficiency (Carnot efficiency = 1 − T_C/T_H), and no irreversible engine can have greater efficiency. So Engine B (real, irreversible) must be less efficient than Engine A (Carnot)."
/>

::: idea
**Carnot's Theorem:** Of all heat engines operating between a hot reservoir at $T_H$ and a cold reservoir at $T_C$:
1. No engine is more efficient than a Carnot engine.
2. All reversible engines have the same efficiency $\eta = 1 − T_C/T_H$.
3. Any irreversible engine is less efficient.

The **Carnot cycle** is the ideal reversible cycle consisting of two isothermals and two adiabatics on a p–V diagram.

This theorem is a consequence of the second law and sets an absolute limit on engine efficiency.
:::

<ConceptHero type="carnot-theorem" />

::: formula
**Carnot efficiency:**
$$\eta_C = 1 - \frac{T_C}{T_H}$$

**Carnot cycle** (working substance is an ideal gas):
1. **Isothermal expansion** at $T_H$: gas absorbs $Q_H$
2. **Adiabatic expansion**: gas cools from $T_H$ to $T_C$
3. **Isothermal compression** at $T_C$: gas rejects $Q_C$
4. **Adiabatic compression**: gas returns to $T_H$

For Carnot cycle:
$$\frac{Q_C}{Q_H} = \frac{T_C}{T_H}$$

**To increase efficiency:** increase $T_H$ or decrease $T_C$ (or both).
:::

::: real
**Power plants and the Carnot limit:** Modern supercritical steam turbines operate at ~600°C (873 K) and reject heat at ~30°C (303 K). Carnot efficiency = 1 − 303/873 ≈ 65%. Actual efficiencies reach ~45–48%. The gap represents friction, heat losses, and the irreversibility of real combustion. Engineers work hard to close this gap by increasing steam temperature and pressure — every degree matters economically.
:::

::: try
Draw a Carnot cycle on a p–V graph: start with isothermal expansion (horizontal curve), then steeper adiabatic expansion, then isothermal compression (shorter curve lower down), then adiabatic compression back to start. The enclosed area represents the net work done per cycle.
:::

::: whatif
Sadi Carnot derived his theorem in 1824 — before the first law of thermodynamics was formally stated. He used the incorrect "caloric" theory of heat, yet arrived at the correct result. This is a remarkable historical example of getting the right answer from a wrong model. Why does the Carnot result survive even though the caloric theory is wrong?
:::

<Quiz
  question="To double the efficiency of a Carnot engine (currently 40%), which change has a bigger effect: raising T_H by 100 K or lowering T_C by 100 K?"
  :options="[
    { text: 'Raising T_H by 100 K' },
    { text: 'Lowering T_C by 100 K', correct: true },
    { text: 'Both have the same effect' },
    { text: 'Neither — efficiency cannot be doubled' }
  ]"
  explanation="η = 1 − T_C/T_H. Lowering T_C reduces the T_C/T_H ratio more than raising T_H by the same amount (when T_C is already the smaller number). Calculate both and compare — lowering T_C has a larger effect on efficiency."
/>

::: notes
- Carnot theorem: no engine more efficient than Carnot between same T_H, T_C
- All reversible engines same efficiency; real engines less
- η_C = 1 − T_C/T_H; Q_C/Q_H = T_C/T_H
- Carnot cycle: isothermal expansion → adiabatic expansion → isothermal compression → adiabatic compression
- Increasing T_H or decreasing T_C improves efficiency
:::

::: refs
- [Carnot Cycle — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/carnot.html)
- [NCERT Ch11](https://ncert.nic.in/textbook/pdf/keph111.pdf)
:::
