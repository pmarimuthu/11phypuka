---
description: "Surface tension for Class 11 Physics (NCERT) — molecular theory, excess pressure in bubble, capillary action. Notes for JEE Main, KCET."
---

# Surface Tension

<ConceptMeta chapter="9" section="9.6" page="206–214" />

<Predict
  label="Water strider"
  prompt="A water strider (pond skater insect) walks on water without sinking. The correct explanation is:"
  :options="[
    { text: 'Its feet are coated with oil that repels water' },
    { text: 'Surface tension of water supports its weight', correct: true },
    { text: 'It moves so fast that it never sinks' },
    { text: 'Water near the surface is denser than deep water' }
  ]"
  reveal="Surface tension creates a membrane-like surface. The water strider's legs dimple but don't pierce the surface — the surface tension force (acting along the contact line) supports the insect's weight. Its waxy legs increase the contact angle, preventing piercing."
/>

::: idea
Molecules at a liquid's surface have neighbours only on one side — they are pulled inward. This inward pull creates a tendency to minimise surface area, making the surface behave like a stretched elastic membrane. This is **surface tension**.

Surface tension $S$ = force per unit length (N/m) = energy per unit area (J/m²).

Key effects:
- Spherical droplets and bubbles (minimum surface area for given volume)
- Capillary rise (water climbs narrow tubes against gravity)
- Insects walking on water
- Detergents reduce surface tension — that's why they clean
:::

<ConceptHero type="surface-tension" />

::: formula
**Surface tension:**
$$S = \frac{F}{l} = \frac{\text{surface energy}}{\text{area}} \quad [\text{N/m}]$$

**Excess pressure inside a drop** (one surface):
$$\Delta p = \frac{2S}{r}$$

**Excess pressure inside a soap bubble** (two surfaces):
$$\Delta p = \frac{4S}{r}$$

**Capillary rise:**
$$h = \frac{2S\cos\theta}{r\rho g}$$

where $\theta$ is the contact angle ($\theta < 90°$ for water on glass — wets; $\theta > 90°$ for mercury on glass — does not wet).
:::

::: real
**Why detergents clean:** Oil and grease are non-polar. Water alone cannot wet them (high contact angle). Detergent molecules have a water-loving (hydrophilic) end and an oil-loving (hydrophobic) end. They arrange themselves at the oil–water interface, dramatically reducing surface tension and allowing water to spread on and lift off the grease.
:::

::: try
Place a dry needle on a piece of tissue paper and gently lower the tissue paper onto still water in a bowl. The tissue sinks but the needle floats — supported by surface tension. Now add a drop of soap to the water. The surface tension drops and the needle sinks immediately.
:::

::: whatif
A soap bubble is blown to radius 5 cm. If you double the radius to 10 cm (by blowing more air), what happens to the excess pressure inside? $\Delta p = 4S/r$ — it halves. Why does this mean that a larger bubble requires less pressure to maintain than a smaller one? (This has interesting consequences for why small bubbles collapse into large ones.)
:::

<Quiz
  question="The excess pressure inside a soap bubble of radius 2 cm is p. If the radius is halved to 1 cm, the excess pressure becomes:"
  :options="[
    { text: 'p/2' },
    { text: 'p' },
    { text: '2p', correct: true },
    { text: '4p' }
  ]"
  explanation="Δp = 4S/r. Halving r doubles Δp. The excess pressure doubles."
/>

::: notes
- Surface tension S = F/l = surface energy per unit area [N/m]
- Drop (1 surface): Δp = 2S/r; Bubble (2 surfaces): Δp = 4S/r
- Capillary rise: h = 2S cosθ/(rρg)
- Contact angle < 90° → wets (water on glass); > 90° → does not wet (mercury on glass)
- Detergents reduce S → better wetting and cleaning
:::

::: refs
- [Surface Tension — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/surten.html)
- [NCERT Ch9](https://ncert.nic.in/textbook/pdf/keph109.pdf)
:::
