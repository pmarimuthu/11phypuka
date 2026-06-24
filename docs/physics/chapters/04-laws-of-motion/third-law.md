---
description: "Newton's Third Law for Class 11 Physics — action and reaction pairs. NCERT notes with rocket and walking examples for JEE Main, KCET, Karnataka PU."
---

# Newton's Third Law

<ConceptMeta chapter="4" section="4.7" page="65–67" />

<Predict
  label="Does it push back?"
  prompt="You push hard on a wall that does not move. Does the wall push back on you?"
  :options="[
    { text: 'Yes, equally hard', correct: true },
    { text: 'No, it just resists' },
    { text: 'Only if it moves' }
  ]"
  reveal="Yes — equal and opposite. Forces always come in pairs, even when nothing moves."
/>

::: idea
**Every force comes in a pair.** When object A pushes object B, object B pushes back on A — equally hard, in the opposite direction. "To every action there is an equal and opposite reaction."

The key subtlety: the two forces act on **different objects**, so they don't cancel each other out.
:::

<ConceptHero type="third-law" />

::: formula
$$\vec{F}_{A \to B} = -\,\vec{F}_{B \to A}$$

The minus sign means *equal in size, opposite in direction*. Both forces appear at the same instant, and they act on **different objects** — so they never cancel each other.
:::

::: real
You walk by pushing your foot **backward** on the ground. The ground pushes your foot **forward** with an equal force — and *that* is what moves you. On smooth ice there's nothing to push against effectively, so walking fails.

A swimmer pushes water backward; the water pushes the swimmer forward.
:::

::: try
Sit on a wheeled chair holding a heavy bag. Throw the bag forward as hard as you can. You roll backward. You pushed the bag forward; the bag pushed you back with an equal force. (This is also how rockets work — see the next concept.)
:::

::: whatif
If the action and reaction are always equal and opposite, why doesn't the Earth visibly move when you jump? (Hint: equal *force*, but use `a = F/m` with the Earth's enormous mass.)
:::

<Quiz
  question="A bird flies by pushing air downward with its wings. What pushes the bird up?"
  :options="[
    { text: 'The bird\'s own muscles directly' },
    { text: 'The air pushing back up on the wings (reaction)', correct: true },
    { text: 'Gravity reversing' },
    { text: 'Nothing — birds float' }
  ]"
  explanation="Action: wings push air down. Reaction: air pushes wings (and bird) up with an equal force. The pair acts on different bodies — air and bird."
/>

::: notes
- $\vec F_{A\to B} = -\,\vec F_{B\to A}$ — equal, opposite, **simultaneous**.
- The pair acts on **different bodies**, so they never cancel.
- Explains walking, swimming, rockets and gun recoil.
:::

::: refs
- [Newton's Laws of Dynamics — Feynman Lectures, Caltech (USA)](https://www.feynmanlectures.caltech.edu/I_09.html)
- [Newton's Laws — HyperPhysics, Georgia State (USA)](http://hyperphysics.phy-astr.gsu.edu/hbase/Newt.html)
- [Forces & Motion: Basics — interactive sim, PhET, UC Boulder (USA)](https://phet.colorado.edu/en/simulations/forces-and-motion-basics)
:::
