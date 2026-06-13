---
description: "Applications of elastic behaviour of materials — Class 11 Physics (NCERT). Bridges, pillars, bones. Notes for JEE Main, KCET and Karnataka PU."
---

# Applications of Elasticity

<ConceptMeta chapter="8" section="8.6" page="183–187" />

<Predict
  label="I-beam"
  prompt="Steel girders in bridges and buildings are made I-shaped (cross-section looks like the letter I) rather than solid rectangular. Why?"
  :options="[
    { text: 'I-beams are cheaper to manufacture' },
    { text: 'I-beams are lighter and equally resistant to bending', correct: true },
    { text: 'I-beams conduct heat better' },
    { text: 'I-beams are easier to paint' }
  ]"
  reveal="When a beam bends, most of the stress is concentrated near the top and bottom surfaces (the flanges of the I). The material in the middle (web) carries very little stress. Making it I-shaped removes the low-stress middle material, saving weight and cost while maintaining almost the same bending resistance. This is a direct application of elastic theory."
/>

::: idea
Engineering design uses elastic theory to:

- **Choose safe cross-sections** for beams and columns (I-beams, hollow cylinders)
- **Calculate maximum loads** before yielding or fracture
- **Design springs** for shock absorbers, watches and weighing instruments
- **Specify cable thickness** for bridges and lifts

The key principle: keep working stress well below the yield stress, using a **safety factor** of 2–10 depending on the application.
:::

<ConceptHero type="applications-elasticity" />

::: formula
**Bending (sag) of a beam** supported at both ends with central load $W$:

$$\delta = \frac{WL^3}{48 Y I_G}$$

where $I_G$ is the second moment of area of the cross-section. For a rectangular cross-section $b \times d$: $I_G = bd^3/12$.

For a beam of depth $d$, making it deeper (increasing $d$) reduces sag as $d^3$ — very effective.

**Critical load for a column** (buckling):
$$P_{\text{cr}} = \frac{\pi^2 Y I_G}{L^2} \quad (\text{Euler's formula})$$
:::

::: real
**Eiffel Tower and hollow columns:** Gustave Eiffel used latticed iron columns — open frameworks rather than solid rods. The same principle as the I-beam: the outer material carries the stress, so removing inner material reduces weight without much loss of stiffness. This is why the tower (7300 tonnes of iron) can survive wind loads of 300 tonnes in a storm.
:::

::: try
Place a ruler flat across two stacks of books (supported at both ends). Press down in the middle and notice the sag. Now turn the ruler on its edge (depth $d$ is now the longer dimension) and repeat. The sag reduces dramatically — sag goes as $1/d^3$, so doubling the depth reduces sag 8-fold.
:::

::: whatif
Safety factors in bridge design are typically 3–4. If engineers used a safety factor of 1.0 (working right at yield stress), what would happen over time as the material experiences thermal cycling, vibration, and fatigue? Why is redundancy built into every structure?
:::

<Quiz
  question="Doubling the depth d of a rectangular beam reduces its central sag by a factor of:"
  :options="[
    { text: '2' },
    { text: '4' },
    { text: '8', correct: true },
    { text: '16' }
  ]"
  explanation="Sag δ ∝ 1/d³. Doubling d makes d³ eight times larger, so sag = 1/8 of original."
/>

::: notes
- Safety factor = yield stress / working stress (typically 3–10)
- I-beam: removes low-stress core material → lighter, equally stiff
- Sag of beam: δ = WL³/(48YI_G) — sag ∝ L³, inversely ∝ Y and I_G
- Deeper beam = much less sag (cubic dependence on depth)
- Hollow columns and tubes: efficient in compression and bending
:::

::: refs
- [Structural Engineering basics — MIT OpenCourseWare](https://ocw.mit.edu/courses/civil-engineering/)
- [NCERT Ch8](https://ncert.nic.in/textbook/pdf/keph108.pdf)
:::
