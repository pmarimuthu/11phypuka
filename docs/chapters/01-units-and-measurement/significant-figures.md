---
description: "Significant figures rules for Class 11 Physics — counting, rounding, precision vs accuracy. NCERT notes with examples for JEE Main, KCET, Karnataka PU."
---

# Significant Figures

<ConceptMeta chapter="1" section="1.3" page="5–9" />

<Predict
  label="How many count?"
  prompt="In the measurement 0.04050 m, how many digits are 'significant' — that is, actually carry information?"
  :options="[
    { text: 'Four', correct: true },
    { text: 'Six' },
    { text: 'Two' }
  ]"
  reveal="Four. The leading zeros only place the decimal point; the digits 4, 0, 5, 0 are the significant ones."
/>

::: idea
**Significant figures** are the digits in a measurement you actually know — all the certain digits plus the first uncertain one. They show how *precise* a measurement is.

You can never report more precision than your instrument gave you. Writing extra digits a calculator invents is, quite simply, dishonest.
:::

<ConceptHero type="significant-figures" />

::: formula
The counting rules:

- All non-zero digits are significant.
- Zeros **between** non-zero digits are significant.
- **Leading** zeros (before the first non-zero digit) are **not** significant.
- **Trailing** zeros after a decimal point **are** significant.

Key rule for calculations: in $\times$ and $\div$, the answer keeps as many significant figures as the **least precise** value used.
:::

::: real
A kitchen scale reads 2.5 kg; a lab balance reads 2.532 kg. The extra digits aren't decoration — they mean the lab balance is a more precise instrument. You can report 2.532 only because you measured it.
:::

::: try
Measure a book with a ruler marked in millimetres. Write the length honestly, e.g. 21.4 cm — where the last digit (the 4) is your best estimate between two marks. That estimated digit is your final significant figure.
:::

::: whatif
A calculator shows 10 ÷ 3 = 3.3333333 cm. If your ruler only reads to the nearest millimetre, why is writing all seven digits misleading rather than "more accurate"?
:::

<Quiz
  question="How many significant figures does the measurement 0.00208 have?"
  :options="[
    { text: 'Three', correct: true },
    { text: 'Five' },
    { text: 'Six' }
  ]"
  explanation="Leading zeros are not significant. Only 2, 0 and 8 count — the zero is sandwiched between non-zero digits — so there are three significant figures."
/>

::: notes
- Non-zero digits: always significant. Zeros **between** them: significant.
- **Leading** zeros: not significant. **Trailing** zeros after a decimal: significant.
- $\times$ and $\div$: answer keeps the **least** number of significant figures.
- $+$ and $-$: answer keeps the **least** number of decimal places.
- Round only at the **end** of a calculation, not at each step.
:::

::: refs
- [Writing with SI Units & rounding rules — NIST (USA)](https://physics.nist.gov/cuu/Units/rules.html)
- [Physical Units — HyperPhysics, Georgia State (USA)](http://hyperphysics.phy-astr.gsu.edu/hbase/units.html)
- [Classical Mechanics 8.01 — MIT OpenCourseWare (USA)](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)
:::
