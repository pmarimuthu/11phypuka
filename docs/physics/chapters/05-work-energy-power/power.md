---
description: "Power in Class 11 Physics — P = W/t = Fv. Watt and horsepower, human and machine power. NCERT notes for JEE Main, KCET and Karnataka PU."
---

# Power

<ConceptMeta chapter="5" section="5.8" page="92–94" />

<Predict
  label="Same work, different time"
  prompt="Mohan climbs a flight of stairs in 10 s. Sohan climbs the same stairs in 20 s. Who does more work? Who has more power?"
  :options="[
    { text: 'Mohan does more work and more power' },
    { text: 'They do the same work; Mohan has more power', correct: true },
    { text: 'Sohan does more work because he takes longer' },
    { text: 'They have the same power' }
  ]"
  reveal="Work = mgh — same mass, same height, so same work for both. Power = Work/time. Mohan does it in half the time, so his power is double. The body that works faster is more powerful, even if the total work done is the same."
/>

::: idea
**Power** is the rate of doing work — how much energy is transferred per second. Two machines can do the same total work, but the one that does it faster has more power.

In everyday life, power determines performance: a 100 W bulb consumes 100 J every second; a 150 W bulb consumes 150 J per second and is brighter. A 100 kW car engine can deliver 100 000 J of work per second to the wheels — enough to accelerate the car rapidly or maintain high speed against air resistance.

The commercial unit of energy — the **kilowatt-hour (kWh)** — is simply power × time: 1 kWh = 1000 W × 3600 s = 3.6 MJ.
:::

<ConceptHero type="power" />

::: formula
**Average power:**

$$P = \frac{W}{t} = \frac{\Delta E}{t}$$

**Instantaneous power** (when force and velocity are both known):

$$P = \vec{F} \cdot \vec{v} = Fv\cos\theta$$

where $\theta$ is the angle between force and velocity.

**Units:**
- SI: **watt (W)** = J/s = kg·m²·s⁻³
- Practical: **kilowatt (kW)** = 1000 W
- Old engineering: **horsepower (hp)**: 1 hp ≈ 746 W

**Energy from power over time:**

$$E = P \times t$$

Commercial electricity: **1 kWh = 3.6 × 10⁶ J = 3.6 MJ**
:::

::: real
The human heart pumps about 5 litres of blood per minute against a pressure of ~100 mmHg (≈ 13 300 Pa). Power = pressure × flow rate ≈ 13 300 × (5 × 10⁻³ / 60) ≈ 1.1 W. Over a lifetime of 70 years, the heart does $1.1 \times 70 \times 365 \times 24 \times 3600 ≈ 2.4$ GJ of work — without stopping once. An electric pump with the same power rating would need 24 kWh per year to match it, costing about ₹170 at typical electricity rates.
:::

::: try
Time how long it takes you to climb a full flight of stairs (measure the height — count steps and multiply by ~17 cm per step). Calculate your power output: $P = mgh/t$. Compare to a typical household bulb (40–100 W). A healthy adult can sustain about 100 W for extended periods; trained athletes sustain 300–400 W and peak above 1000 W in short sprints.
:::

::: whatif
An electric motor has 80% efficiency. If it draws 500 W from the mains, how much useful mechanical power does it deliver? Where does the remaining 20% go?
:::

<Quiz
  question="A machine does 6000 J of work in 2 minutes. Its power is:"
  :options="[
    { text: '3000 W' },
    { text: '50 W', correct: true },
    { text: '12000 W' },
    { text: '100 W' }
  ]"
  explanation="P = W/t = 6000 / (2 × 60) = 6000 / 120 = 50 W."
/>

::: notes
- $P = W/t$ (average); $P = Fv\cos\theta$ (instantaneous)
- SI unit: **watt (W)** = J/s. 1 hp ≈ 746 W.
- 1 kWh = 3.6 MJ (unit on your electricity bill).
- Same work, less time → more power. Same power, more time → more energy delivered.
- Efficiency $\eta = P_{\text{output}}/P_{\text{input}} \leq 1$; losses go to heat.
:::

::: refs
- [Power — Khan Academy](https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/power)
- [Work, Energy and Power — NCERT Chapter 5](https://ncert.nic.in/textbook/pdf/keph105.pdf)
- [Power — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/pow.html)
:::
