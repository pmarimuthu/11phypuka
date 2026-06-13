---
description: "Dimensional analysis for Class 11 Physics — verify equations, derive formulae, convert units. NCERT notes for JEE Main, JEE Advanced and KCET."
---

# Dimensional Analysis

<ConceptMeta chapter="1" section="1.6" page="11–13" />

<Predict
  label="Can it be right?"
  prompt="Someone writes the formula v = u + at². Without deriving anything, can dimensions alone show it is wrong?"
  :options="[
    { text: 'Yes — the at² term has the wrong dimensions', correct: true },
    { text: 'No — you must derive it first' },
    { text: 'Only an experiment can tell' }
  ]"
  reveal="Yes. at² has dimensions LT⁻²·T² = L, but v has dimensions LT⁻¹. The terms don't match, so the formula must be wrong."
/>

::: idea
The **principle of homogeneity** says every term in a correct equation must have the **same dimensions**. You cannot add a length to a velocity.

This single idea lets you **check** equations, **convert** units, and even **guess the form** of a formula — all without doing the full physics.
:::

<ConceptHero type="dimensional-analysis" />

::: formula
For any valid equation, the dimensions of the left side equal the dimensions of every term on the right:

$$[\text{LHS}] = [\text{RHS}]$$

Check $v = u + at$ : $\quad LT^{-1} = LT^{-1} + (LT^{-2})(T) = LT^{-1}$ ✓ — every term is a velocity, so it is dimensionally consistent.
:::

::: real
In 1999 NASA lost the **Mars Climate Orbiter** because one team used pound-force and another used newtons — a units mismatch. A quick dimensional check is exactly the kind of sanity test engineers use to catch such blunders before they cost a spacecraft.
:::

::: try
Take the pendulum formula $T = 2\pi\sqrt{L/g}$. Check it: $\sqrt{L \div (LT^{-2})} = \sqrt{T^2} = T$. The right side has the dimension of **time**, just like the period $T$. The formula is dimensionally sound.
:::

::: whatif
Dimensional analysis can give the *form* of a formula but never the pure number in front (like the $2\pi$ above). Why can dimensions never reveal a dimensionless constant?
:::

<Quiz
  question="In s = ut + ½at², checking the ½at² term gives which dimensions?"
  :options="[
    { text: 'L', correct: true },
    { text: 'L T⁻¹' },
    { text: 'T' },
    { text: 'L T⁻²' }
  ]"
  explanation="at² has dimensions (L T⁻²)(T²) = L, the same as displacement s. The ½ is just a dimensionless number, so the term is consistent."
/>

::: notes
- **Principle of homogeneity:** every term in a valid equation shares the same dimensions.
- **Uses:** check equations, convert units, derive the *form* of a relation.
- **Limits:** cannot find pure numbers/constants; cannot handle sums of unlike terms; arguments of $\sin$, $\log$, $e^x$ must be dimensionless.
- A dimensionally correct equation can still be physically wrong — it is a necessary, not sufficient, check.
:::

::: refs
- [Physical Units & dimensional analysis — HyperPhysics, Georgia State (USA)](http://hyperphysics.phy-astr.gsu.edu/hbase/units.html)
- [Classical Mechanics 8.01 — MIT OpenCourseWare (USA)](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/)
- [SI base units — BIPM, Sèvres / Paris (France)](https://www.bipm.org/en/measurement-units/si-base-units)
:::
