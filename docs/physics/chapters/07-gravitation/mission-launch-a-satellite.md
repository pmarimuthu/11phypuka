---
description: "Interactive satellite launch simulation for Class 11 Physics — discover orbital velocity, escape velocity and crash trajectories by experimenting. NCERT Gravitation, Karnataka PU."
---

# Mission: Launch a Satellite

<ConceptMeta chapter="7" section="7.5–7.7" page="150–160" />

You are the mission engineer. Set a launch angle, a speed, and a fuel load — then launch — and watch gravity decide what happens next. No formulas yet. Just fly it, crash it, orbit it, and lose it to space a few times before reading on.

::: idea
Before you scroll past the simulator: try to get the satellite to crash, then try to get it to circle Earth forever, then try to make it leave and never come back. All three are the same physics — Newton's gravity pulling continuously on the satellite — producing three completely different outcomes depending only on how fast (and which way) you launch.
:::

<MissionLaunchSatellite />

::: try
Free Exploration first. Try these three launches and watch the status badge and the trajectory colour change:

1. **Angle 80°, velocity 4 km/s, fuel 50%** — almost straight up, too slow. Watch it rise, stall, and fall back.
2. **Angle 5°, velocity 7.9 km/s, fuel 100%** — nearly sideways, right around the orbital speed at the surface. Watch the dashed preview line close into a loop *before* you even launch.
3. **Angle 30°, velocity 12 km/s, fuel 100%** — well past 11.2 km/s. Watch the predicted path open up instead of closing.

Then switch to **Mission 1 — Low Earth Orbit** and try to hold a stable loop for a full 2 simulated minutes without it dipping back toward the ground.
:::

Once you've crashed a few and orbited a few, here's what you were actually seeing:

::: idea
**Why low speed crashes:** gravity never stops pulling the satellite toward Earth's centre. If the satellite isn't moving sideways fast enough, the curve of its path bends back down faster than the ground curves away — so it lands.

**Why the right speed orbits:** at the right sideways speed, the satellite falls toward Earth at exactly the rate the ground curves away beneath it. It is genuinely falling the entire time — it just never gets any closer, because it's also moving sideways. That endless matched fall *is* an orbit. This is the same idea your [Satellites & Orbital Motion](./satellites) page builds on.

**Why high speed escapes:** past a certain speed, Earth's gravity is too weak (at the rate it falls off with distance) to ever pull the satellite all the way back, no matter how far out it gets. It slows down but never turns around. See [Escape Velocity](./escape-velocity) for the energy argument behind that exact number.

Notice the simulator never asked you for a formula to get any of this right — you found it by watching the satellite fly.
:::

<ConceptHero type="satellites" />

::: formula
Now that you've seen it happen, here are the numbers behind what you watched. Both come from balancing gravity's pull against the motion it's trying to bend (see the two linked pages above for the full derivation):

$$v_{\text{orbital}} = \sqrt{\frac{GM_E}{r}}, \qquad v_{\text{escape}} = \sqrt{\frac{2GM_E}{r}} = \sqrt{2}\, v_{\text{orbital}}$$

At Earth's surface ($r = R_E \approx 6{,}371$ km): $v_{\text{orbital}} \approx 7.9$ km/s and $v_{\text{escape}} \approx 11.2$ km/s — the exact thresholds the simulator's reference panel showed you in real time. Notice escape velocity is always $\sqrt{2}$ times the local orbital velocity, at any altitude.
:::

::: real
**Why real rockets launch the way they do:** a real rocket doesn't leap off the pad sideways at 7.9 km/s — it goes up first, then pitches over ("the gravity turn") to build up horizontal speed once it's clear of the thick lower atmosphere. In this simulator, a small launch angle (closer to 0°, more sideways) reaches orbit far more easily than a large one (closer to 90°, straight up) for exactly that reason: orbiting needs *sideways* speed, not *upward* speed. A purely vertical launch (90°) with no escape-level speed always falls straight back to the pad — there's no sideways motion to turn a fall into an orbit.
:::

::: whatif
If you doubled Earth's mass but kept its radius the same, would the orbital and escape speeds you discovered in the simulator go up or down — and by what factor? Try reasoning it out from the formulas above, then check by comparing to the Moon's much lower escape velocity (≈2.4 km/s) on the [Escape Velocity](./escape-velocity) page, where mass is much smaller and radius is also smaller.
:::

<Quiz
  question="In the simulator, a launch at a steep 85° angle with a speed below escape velocity almost always ends in a crash, even with plenty of fuel. Why?"
  :options="[
    { text: 'The fuel runs out before reaching orbit' },
    { text: 'A near-vertical launch has very little sideways velocity, so there is nothing to turn the fall into an orbit', correct: true },
    { text: 'Gravity is stronger directly above the launch pad' },
    { text: 'The simulator caps vertical launches at a lower top speed' }
  ]"
  explanation="Orbiting requires enough sideways (tangential) speed for the satellite's fall to be continuously matched by the curvature of the Earth below it. A near-vertical launch puts almost all the speed into the radial direction instead, so the satellite just rises and falls back along nearly the same line — a crash, not an orbit."
/>

::: notes
- An orbit is continuous free fall that keeps missing the ground because of sideways speed — not an absence of gravity.
- Crash: too little sideways speed; the elliptical path the engine predicts dips back below the surface.
- Stable orbit: the predicted ellipse never dips below Earth's surface ($v \approx v_{\text{orbital}}$ at that altitude).
- Escape: total mechanical energy ≥ 0; the satellite coasts outward forever ($v \geq v_{\text{escape}}$).
- $v_{\text{escape}} = \sqrt{2}\, v_{\text{orbital}}$ at the same distance from Earth's centre.
- Geostationary orbit sits at one specific altitude (~35,786 km) where the orbital period matches Earth's rotation — that's the dashed ring in Mission 2.
:::

::: refs
- [Orbital Mechanics — Khan Academy](https://www.khanacademy.org/science/physics/gravity/gravity-tutorial/v/introduction-to-orbital-motion)
- [Gravitation — NCERT Chapter 7](https://ncert.nic.in/textbook/pdf/keph107.pdf)
- [Escape Velocity — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/vesc.html)
:::
