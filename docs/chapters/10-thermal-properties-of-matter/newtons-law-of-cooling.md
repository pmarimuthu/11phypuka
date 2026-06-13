---
description: "Newton's law of cooling for Class 11 Physics (NCERT) — rate of cooling, coffee cup problem. Notes for JEE Main, KCET and Karnataka PU."
---

# Newton's Law of Cooling

<ConceptMeta chapter="10" section="10.8" page="242–245" />

<Predict
  label="Faster cooling"
  prompt="Two identical cups of tea, one at 80°C and one at 60°C, are left in a 20°C room. Which one cools faster initially?"
  :options="[
    { text: 'The 60°C cup — it is closer to room temperature' },
    { text: 'The 80°C cup — larger temperature difference means faster heat loss', correct: true },
    { text: 'Both cool at the same rate' },
    { text: 'The 60°C cup — it has less heat to lose' }
  ]"
  reveal="Newton's Law of Cooling: rate of heat loss ∝ (T − T₀). The 80°C cup has a temperature excess of 60°C above room temperature; the 60°C cup has only 40°C excess. The 80°C cup cools faster — but as it cools, its rate decreases exponentially."
/>

::: idea
**Newton's Law of Cooling** states that the rate of heat loss of a body is proportional to the difference in temperature between the body and its surroundings, provided this difference is small.

The temperature decays exponentially with time — it approaches room temperature asymptotically but never quite reaches it (in theory).

This law is a special case of Newton's law of radiation (Stefan–Boltzmann) when the temperature excess is small.
:::

<ConceptHero type="newtons-cooling" />

::: formula
$$\frac{dT}{dt} = -k(T - T_0)$$

where $T$ = body temperature, $T_0$ = surroundings temperature, $k$ > 0 = cooling constant.

**Solution:**
$$T(t) = T_0 + (T_i - T_0)\,e^{-kt}$$

$T_i$ = initial temperature at $t = 0$.

Half-time: $t_{1/2} = \ln 2 / k$.

**Average temperature approximation** (useful in exams):
$$\bar{T} = \frac{T_1 + T_2}{2} \quad \Rightarrow \quad \frac{T_1 - T_2}{t} \propto \bar{T} - T_0$$
:::

::: real
**Forensic science — time of death:** Newton's Law of Cooling is used to estimate when a person died. If the body temperature at discovery is 32°C and room temperature is 20°C, using the law with the known cooling constant for a human body (~0.13 per hour), investigators can calculate how long ago death occurred. This is one of physics' less obvious but real applications.
:::

::: try
Boil a cup of water and record the temperature every minute for 20 minutes. Plot temperature (y) vs time (x). The curve should be exponential (not linear). Now plot $\ln(T - T_0)$ vs time — it should be a straight line, confirming Newton's Law of Cooling.
:::

::: whatif
Newton's Law breaks down when the temperature difference is large — then the full $T^4$ radiation law matters. At large temperature differences, cooling is faster than Newton's law predicts. At very small differences (within 10–15°C of surroundings), it is an excellent approximation. Where does it fail for your cup of tea — at the start or the end of cooling?
:::

<Quiz
  question="A body at 60°C is in a room at 20°C. Using Newton's Law, if it cools to 40°C in 5 minutes, how long to cool from 40°C to 30°C?"
  :options="[
    { text: '2.5 min' },
    { text: '5 min' },
    { text: '10 min', correct: true },
    { text: '20 min' }
  ]"
  explanation="Rate of cooling ∝ (T − T₀). At 40°C: excess = 20°C. At 30°C: excess = 10°C (average ~15°C). The 60→40 step had average excess ~30°C. Ratio of time ≈ 30/15 = 2. So 5 min × 2 = 10 min approximately."
/>

::: notes
- dT/dt = −k(T − T₀): rate of cooling ∝ temperature excess
- Exponential decay: T(t) = T₀ + (T_i − T₀)e^(−kt)
- Valid for small temperature differences (< ~50°C above surroundings)
- Exam shortcut: use average temperature method for cooling time calculations
- Applications: forensics, food safety, industrial cooling design
:::

::: refs
- [Newton's Law of Cooling — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/cooldow.html)
- [NCERT Ch10](https://ncert.nic.in/textbook/pdf/keph110.pdf)
:::
