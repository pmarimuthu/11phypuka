---
description: "Viscosity and Stokes' law for Class 11 Physics (NCERT). Coefficient of viscosity, terminal velocity, Poiseuille's law. Notes for JEE, KCET."
---

# Viscosity & Stokes' Law

<ConceptMeta chapter="9" section="9.5" page="202–206" />

<Predict
  label="Terminal velocity"
  prompt="A small sphere falls through oil and reaches terminal velocity. What happens to its acceleration at terminal velocity?"
  :options="[
    { text: 'Acceleration equals g downward' },
    { text: 'Acceleration is upward (it slows down)' },
    { text: 'Acceleration is zero — net force is zero', correct: true },
    { text: 'Acceleration doubles' }
  ]"
  reveal="At terminal velocity, the drag force (Stokes' drag) + buoyancy exactly equals the weight. Net force = 0, so acceleration = 0. The sphere moves at constant velocity — it has reached equilibrium between gravity and viscous resistance."
/>

::: idea
**Viscosity** is the internal friction of a fluid — it resists layers of fluid sliding past each other.

When you stir honey versus water, you feel the difference: honey has much higher viscosity. Formally, viscosity $\eta$ is the ratio of shear stress to velocity gradient.

**Stokes' Law:** For a small sphere moving slowly through a viscous fluid, the drag force is:
$$F = 6\pi\eta r v$$

At **terminal velocity**, gravity + buoyancy + drag = 0.
:::

<ConceptHero type="viscosity" />

::: formula
**Coefficient of viscosity (dynamic viscosity):**
$$\eta = \frac{\text{shear stress}}{\text{velocity gradient}} = \frac{F/A}{dv/dx} \quad [\text{Pa·s}]$$

**Stokes' Law:**
$$F_{\text{drag}} = 6\pi\eta r v$$

**Terminal velocity:**
$$v_t = \frac{2r^2(\rho - \rho_f)g}{9\eta}$$

where $r$ = sphere radius, $\rho$ = sphere density, $\rho_f$ = fluid density.

**Reynolds number** (determines if flow is laminar or turbulent):
$$R_e = \frac{\rho v L}{\eta}$$
Laminar flow: $R_e < 2300$; turbulent: $R_e > 4000$.
:::

::: real
**Blood viscosity and health:** Blood viscosity is about 3–4 times that of water. When blood becomes too thick (polycythaemia) or too thin (anaemia), the heart must work harder or less effectively. Many cardiovascular drugs work partly by modifying blood viscosity. Stokes' law determines how red blood cells settle in blood — the basis of the ESR (erythrocyte sedimentation rate) test used clinically.
:::

::: try
Drop small identical ball bearings into three containers: water, cooking oil, and honey. Time how long they take to fall the same distance. Use terminal velocity $v_t = L/t$ and Stokes' Law to estimate the viscosity ratio of the fluids.
:::

::: whatif
Viscosity of gases increases with temperature (more molecular collisions), while viscosity of liquids decreases with temperature (weaker intermolecular bonds). Why does engine oil thin out when hot — and why do engineers specify multi-grade oils (e.g., 10W-40) for cars?
:::

<Quiz
  question="If the radius of a sphere falling through a viscous fluid is doubled, its terminal velocity becomes:"
  :options="[
    { text: 'Double' },
    { text: '4 times', correct: true },
    { text: 'Half' },
    { text: '8 times' }
  ]"
  explanation="v_t ∝ r². Doubling r makes r² four times larger, so v_t becomes 4 times larger."
/>

::: notes
- Viscosity η [Pa·s]: internal friction between fluid layers
- Stokes' Law: F = 6πηrv (for slow, laminar flow around a sphere)
- Terminal velocity: v_t = 2r²(ρ−ρ_f)g / 9η ← proportional to r²
- Viscosity of liquids decreases with temperature; gases increase
- Reynolds number Re = ρvL/η: low = laminar, high = turbulent
:::

::: refs
- [Viscosity — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/pfric.html)
- [NCERT Ch9](https://ncert.nic.in/textbook/pdf/keph109.pdf)
:::
