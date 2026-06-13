---
description: "Uniform circular motion for Class 11 Physics — centripetal acceleration, angular velocity, time period. NCERT notes for JEE Main, JEE Advanced, KCET."
---

# Uniform Circular Motion

<ConceptMeta chapter="3" section="3.9" page="60–61" />

<Predict
  label="Is it accelerating?"
  prompt="A car goes around a roundabout at a perfectly constant speed. Is it accelerating?"
  :options="[
    { text: 'No — speed is constant so there is no acceleration' },
    { text: 'Yes — direction is changing so velocity is changing', correct: true },
    { text: 'Only if it slows down or speeds up' }
  ]"
  reveal="Acceleration is the rate of change of *velocity* (a vector), not just speed. The direction changes continuously on a circle, so velocity changes even though speed is constant. The acceleration points toward the centre."
/>

::: idea
**Uniform circular motion** means moving in a circle at **constant speed**. Speed is constant — but velocity is not, because direction constantly changes. A changing velocity means there is an acceleration.

This acceleration always points **toward the centre** of the circle and is called **centripetal acceleration** (from Latin: *centrum* = centre, *petere* = to seek). It doesn't speed the object up or slow it down — it only changes direction.

The force that produces this centripetal acceleration is the **centripetal force**. It's not a new type of force — it's whatever real force happens to point inward: string tension, gravity, friction, or the normal force of a banked road.
:::

<ConceptHero type="uniform-circular-motion" />

::: formula
For an object moving in a circle of radius $r$ at constant speed $v$:

**Period** (time for one full revolution):

$$T = \frac{2\pi r}{v}$$

**Frequency:**

$$f = \frac{1}{T}$$

**Angular velocity** (angle swept per second):

$$\omega = \frac{2\pi}{T} = \frac{v}{r} \quad \text{(rad/s)}$$

Relation between speed and angular velocity:

$$v = \omega r$$

**Centripetal acceleration** (directed toward centre):

$$a_c = \frac{v^2}{r} = \omega^2 r$$

**Centripetal force:**

$$F_c = \frac{mv^2}{r} = m\omega^2 r$$

Symbols: $r$ — radius (m), $v$ — speed (m/s), $m$ — mass (kg), $T$ — period (s)
:::

::: real
The Moon orbits Earth in (approximately) a circle. Earth's gravity provides the centripetal force. Knowing the Moon's orbital radius ($r \approx 3.84 \times 10^8$ m) and period ($T \approx 27.3$ days), you can calculate the centripetal acceleration and confirm it matches $g/3600$ — exactly what Newton needed to verify his law of gravitation. The same equations describe a washing machine drum (friction holds clothes against the drum) and a satellite in orbit (gravity replaces the string).
:::

::: try
Tie a small object to a 50 cm string and swing it overhead in a horizontal circle. Keep the speed roughly constant. Notice: (a) you must constantly pull the string inward — that's the centripetal force; (b) if you swing faster, the pull grows sharply (because of $v^2$ in $F_c = mv^2/r$); (c) if you release the string, the object flies off in a straight line tangent to the circle — proof the centripetal force was only ever inward, never outward.
:::

::: whatif
A satellite doubles its orbital speed while staying in the same orbit. By what factor does the centripetal force change? What would actually have to happen for this to be physically possible?
:::

<Quiz
  question="An object moves in a circle of radius 2 m at a speed of 4 m/s. Its centripetal acceleration is:"
  :options="[
    { text: '2 m/s²' },
    { text: '8 m/s²', correct: true },
    { text: '16 m/s²' },
    { text: '4 m/s²' }
  ]"
  explanation="aₒ = v²/r = 4²/2 = 16/2 = 8 m/s², directed toward the centre."
/>

::: notes
- Speed constant; velocity direction changes → acceleration exists.
- Centripetal acceleration: $a_c = v^2/r = \omega^2 r$, always toward centre.
- Centripetal force: $F_c = mv^2/r = m\omega^2 r$ (not a new force — a role).
- Period $T = 2\pi r/v$; angular velocity $\omega = v/r$ (rad/s).
- No real 'centrifugal force' — it is an inertial effect in a rotating frame.
- Key cases: satellite orbit (gravity), car on curve (friction), ball on string (tension).
:::

::: refs
- [Uniform Circular Motion — Khan Academy](https://www.khanacademy.org/science/physics/centripetal-force-and-gravitation/centripetal-acceleration-tutoria/v/centripetal-acceleration)
- [Motion in a Plane — NCERT Chapter 3](https://ncert.nic.in/textbook/pdf/keph103.pdf)
- [Circular Motion — HyperPhysics](http://hyperphysics.phy-astr.gsu.edu/hbase/circ.html)
:::
