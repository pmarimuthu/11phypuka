---
description: "Heat engines and refrigerators for Class 11 Physics (NCERT) — efficiency, COP. Carnot engine concept. Notes for JEE Main, JEE Advanced and KCET."
---

# Heat Engines & Refrigerators

<ConceptMeta chapter="11" section="11.8" page="268–272" />

<Predict
  label="Engine efficiency"
  prompt="A heat engine takes in 1000 J of heat and does 300 J of useful work. How much heat is rejected?"
  :options="[
    { text: '300 J' },
    { text: '700 J', correct: true },
    { text: '1000 J' },
    { text: '1300 J' }
  ]"
  reveal="First Law for the engine cycle: Q_H = W + Q_C. So Q_C = Q_H − W = 1000 − 300 = 700 J. Efficiency η = W/Q_H = 300/1000 = 30%. Only 30% of input heat becomes useful work; 70% is wasted to the cold reservoir."
/>

::: idea
A **heat engine** operates in a cycle, taking heat from a hot reservoir, converting part into work, and rejecting the rest to a cold reservoir.

A **refrigerator** (or heat pump) does the reverse: it uses work to move heat from cold to hot.

**Performance measures:**
- Engine: efficiency $\eta = W/Q_H$
- Refrigerator: coefficient of performance COP = $Q_C/W$
- Heat pump: COP = $Q_H/W$

No real engine achieves 100% efficiency — the second law forbids it.
:::

<ConceptHero type="heat-engine" />

::: formula
**Heat engine:**
$$W = Q_H - Q_C \quad \eta = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}$$

**Refrigerator COP:**
$$\text{COP}_{\text{ref}} = \frac{Q_C}{W} = \frac{Q_C}{Q_H - Q_C}$$

**Heat pump COP:**
$$\text{COP}_{\text{HP}} = \frac{Q_H}{W} = \text{COP}_{\text{ref}} + 1$$

**Carnot efficiency** (maximum possible for given $T_H$, $T_C$):
$$\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}$$

No real engine can exceed Carnot efficiency operating between the same temperatures.
:::

::: real
**Coal-fired power station:** A steam turbine takes heat from burning coal (~550°C = 823 K) and rejects heat to a river or cooling tower (~30°C = 303 K). Maximum (Carnot) efficiency ≈ 1 − 303/823 ≈ 63%. Actual efficiency is ~35–40% due to irreversibilities. The remaining heat goes into the river or atmosphere — that is why power stations need cooling towers.
:::

::: try
Consider a car engine: it burns petrol (releases ~2.5 MJ/litre), operates between ~2000 K (combustion) and ~400 K (exhaust). Carnot efficiency would be 1 − 400/2000 = 80%. Real petrol engines achieve ~20–30%. Where does the rest go — exhaust heat, engine friction, cooling system?
:::

::: whatif
An air conditioner has COP = 3. For every 1 unit of electrical energy consumed, it pumps 3 units of heat from indoors to outdoors. The total heat going outside is 1 + 3 = 4 units. So an air conditioner actually heats the city more than it cools your room — the waste heat from all the air conditioners in a city contributes to the urban heat island effect.
:::

<Quiz
  question="A Carnot engine works between 600 K and 300 K. Its efficiency is:"
  :options="[
    { text: '25%' },
    { text: '33%' },
    { text: '50%', correct: true },
    { text: '100%' }
  ]"
  explanation="η_Carnot = 1 − T_C/T_H = 1 − 300/600 = 1 − 0.5 = 0.5 = 50%."
/>

::: notes
- Engine: W = Q_H − Q_C; η = W/Q_H = 1 − Q_C/Q_H
- Carnot efficiency: η = 1 − T_C/T_H (maximum possible)
- No real engine exceeds Carnot; real engines have η < η_Carnot
- Refrigerator COP = Q_C/W; Heat pump COP = Q_H/W = COP_ref + 1
- Higher T_H or lower T_C → higher efficiency
:::

::: refs
- [Heat Engines — Khan Academy](https://www.khanacademy.org/science/physics/thermodynamics/laws-of-thermodynamics/v/heat-engine)
- [NCERT Ch11](https://ncert.nic.in/textbook/pdf/keph111.pdf)
:::
