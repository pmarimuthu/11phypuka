# Session Recap — Physics Companion App

Hand-off note so a new AI session (or developer) can continue without re-deriving context. Date of recap: 2026-06-13.

---

## 1. What this project is

A **mobile-first interactive learning app** that teaches **Class 11 Physics** (NCERT syllabus, PU Karnataka, English medium) to a student who benefits from plain language, real-world examples, and frequent low-pressure reinforcement.

Built as a **VitePress** site (static Markdown + Vue components). Content authors only write Markdown + reuse existing components — no build-code changes needed except when adding a brand-new animation type or registering a new chapter.

**Tech stack the owner wants for the larger app vision:** Vue (frontend), Java 21 + Jakarta EE (backend), PostgreSQL + Firebase (data/auth). The current VitePress site is the content/learning layer.

---

## 2. Where everything lives

- **App project (the VitePress site):** `C:\MyApps\edu.kanaksan.com\11PHYPUKA`
- **Docs / planning folder (guides, this recap):** `C:\MyApps\edu.kanaksan.com\docs`

Key files inside `11PHYPUKA`:

```
package.json                              scripts + deps
docs/
  index.md                                home page
  chapters/
    index.md                              master list of all 14 chapters (status: Ready / Coming soon)
    01-units-and-measurement/             ✅ DONE (4 concept pages + index.md)
    04-laws-of-motion/                    ✅ DONE (8 concept pages + index.md) — THE BENCHMARK
  .vitepress/
    config.mts                            nav, sidebar, math + custom container registrations
    theme/
      index.ts                            registers global components
      custom.css                          all styling + animations
      components/
        ConceptMeta.vue                   textbook reference chips
        ConceptHero.vue                   animated SVG diagram per concept (12 types so far)
        Quiz.vue                          end-of-page recall check
        Predict.vue                       predict-then-reveal (top of page)
```

---

## 3. How to run it

Requires Node.js (LTS). In the project folder:

```powershell
cd C:\MyApps\edu.kanaksan.com\11PHYPUKA
npm install
npm run docs:dev:lan      # dev server, also exposes a Network URL for phone/tablet on same Wi-Fi
npm run docs:build        # production build — MUST pass before considering a chapter done
npm run docs:preview      # preview the built output
```

Stop the server with Ctrl+C.

---

## 4. The BENCHMARK pattern (Chapter 4 — must be copied exactly)

Every concept page is ONE Markdown file following this exact section order. Chapter 4 (`04-laws-of-motion`) is the gold standard; **all new content must match it precisely**.

```markdown
# Concept Title

<ConceptMeta chapter="4" section="4.2–4.5" page="56–60" />

<Predict
  label="What happens?"                         <- short real question word (What/Why/How/Which/Does…)
  prompt="A real-world question to guess first."
  :options="[
    { text: 'Option A', correct: true },
    { text: 'Option B' },
    { text: 'Option C' }
  ]"
  reveal="One plain line shown after they guess."
/>

::: idea
Concept in plain words. No formula yet. 2–4 short sentences.
:::

<ConceptHero type="concept-key" />

::: formula
Words, then LaTeX equation, then every symbol named with units.
:::

::: real
One everyday example the student has seen. 2–4 sentences.
:::

::: try
A safe home experiment with common items, ending in a "why?".
:::

::: whatif
An open curiosity hook. No answer given.
:::

<Quiz
  question="One scenario-based MCQ."
  :options="[
    { text: 'Distractor' },
    { text: 'Correct', correct: true },
    { text: 'Distractor' },
    { text: 'Distractor' }
  ]"
  explanation="Why the right answer is right."
/>

::: notes
- 3–5 crisp exam-revision bullets (formulas in LaTeX, the law, common traps).
:::

::: refs
- [Descriptive title — Institution (Country)](https://VERIFIED-url)
- [Descriptive title — Institution (Country)](https://VERIFIED-url)
- [Descriptive title — Institution (Country)](https://VERIFIED-url)
:::
```

**Section order is fixed and pedagogical:** Predict → Idea → animation → Formula → Real → Try → What-If → Quiz → Notes → References.

### Components & blocks available
- `<ConceptMeta chapter section page />` — NCERT reference chips. Verify against the real textbook.
- `<Predict label prompt :options reveal />` — `label` is a real question-word header (NOT "Predict first").
- `<ConceptHero type="..." />` — animated SVG; **a new concept needs a new `v-else-if` branch + default caption + CSS animation added inside `ConceptHero.vue`**. Existing types: `inertia-first-law, momentum-second-law, impulse, third-law, conservation-of-momentum, equilibrium, friction, circular-motion, si-units, significant-figures, dimensions, dimensional-analysis`.
- `<Quiz question :options explanation />` — 4 options, exactly one `correct: true`, plausible distractors.
- Custom containers (registered in `config.mts`): `::: idea`, `::: formula`, `::: real`, `::: try`, `::: whatif`, `::: notes` (collapsible "Exam-Hall Quick Notes"), `::: refs` (collapsible "Learn More — World-Class Sources").

### Style & accuracy rules (NON-NEGOTIABLE)
- **Accuracy is the #1 requirement.** Everything must match the NCERT Class 11 Physics textbook.
- Math uses LaTeX: inline `$...$`, display `$$...$$`, vectors `\vec{}`. Name every symbol + unit.
- Color convention in diagrams: **red = force, blue = velocity, orange = friction.**
- References: **max 3 per concept**, only reputable open-access sources, and **EVERY URL must be verified to actually load** (a dead/invented link is worse than none). Web-search to confirm before adding.
- No copyrighted text or hotlinked images. Custom SVG diagrams only (no external images).
- Diagrams must be physically accurate and respect `prefers-reduced-motion` (follow the existing pattern in `ConceptHero.vue`).

The full authoring guide is at `C:\MyApps\edu.kanaksan.com\docs\authoring-guide-adding-content.md` — read it before writing.

---

## 5. Progress status

**Chapters complete (2 of 14):**
- ✅ **Chapter 4 — Laws of Motion** (8 concepts): Inertia & 1st Law, Momentum & 2nd Law, Impulse, 3rd Law, Conservation of Momentum, Equilibrium, Friction, Circular Motion. *(This is the benchmark.)*
- ✅ **Chapter 1 — Units and Measurement** (4 concepts): Physical Quantities & SI Units, Significant Figures, Dimensions, Dimensional Analysis.

**Chapters remaining (12), to build in NUMERICAL order:**
- ⬜ Chapter 2 — Motion in a Straight Line  ← **NEXT**
- ⬜ Chapter 3 — Motion in a Plane
- ⬜ Chapter 5 — Work, Energy and Power
- ⬜ Chapter 6 — System of Particles & Rotational Motion
- ⬜ Chapter 7 — Gravitation
- ⬜ Chapter 8 — Mechanical Properties of Solids
- ⬜ Chapter 9 — Mechanical Properties of Fluids
- ⬜ Chapter 10 — Thermal Properties of Matter
- ⬜ Chapter 11 — Thermodynamics
- ⬜ Chapter 12 — Kinetic Theory
- ⬜ Chapter 13 — Oscillations
- ⬜ Chapter 14 — Waves

NCERT Class 11 Physics is 14 chapters (rationalized syllabus; "Laws of Motion" = Chapter 4). Approach: **one chapter per session** to keep accuracy high.

---

## 6. Exact steps to add the next chapter (repeatable recipe)

1. **Research** the chapter's real NCERT structure (sections + concept list) via web search before writing anything. Confirm section numbers.
2. **Create folder** `docs/chapters/NN-chapter-slug/` (zero-padded number, lowercase-hyphen slug).
3. **Write `index.md`** (chapter overview) copying the structure of `04-laws-of-motion/index.md`.
4. **Write one `.md` per concept**, following the benchmark template above exactly.
5. **Add a `ConceptHero` animation** for each concept that needs a new one: add a `v-else-if type==='...'` group in `ConceptHero.vue`, a default caption in its `CAPTIONS` map, and matching CSS keyframes. Keep diagrams physically accurate.
6. **Verify every reference URL loads** (web search) before adding `::: refs` (max 3, name institution + country).
7. **Register in `config.mts`:** update the chapter's link in the "Class 11 Physics - Chapters" list, and add a collapsed sidebar group listing the concepts (mirror the Chapter 1 / Chapter 4 groups).
8. **Update `chapters/index.md`:** change that chapter's status from *Coming soon* to **✅ Ready** with a link.
9. **Build & verify:** `npm run docs:build` must pass; then check the rendered HTML has, on each page: `class="predict"`, `concept-hero`, `pc-idea/formula/real/try/whatif`, `mjx-container` (math), `pc-quiz`, `exam-notes`, and exactly 3 reference links.

---

## 7. KNOWN ENVIRONMENT GOTCHA (important for the next session)

In the previous sessions there was a **file-sync lag** between the AI sandbox and the user's real disk for files written via the editor tools (config.mts, custom.css, Vue components occasionally appeared truncated in the sandbox's mounted view, though the real on-disk file was correct).

Mitigations that worked:
- Prefer **whole-file rewrites** over blind appends for `config.mts` and `custom.css` (a stray append once corrupted `custom.css`).
- When building/verifying in the sandbox, work from a **separate copy** and re-sync changed files before each build.
- After any large edit, **read the file back / run `node -e "require('fs').readFileSync(path)"`** to confirm it's intact, and run a full `npm run docs:build` to catch corruption.

If you (next AI) have a clean local filesystem, this may not apply — but always do a build after edits.

---

## 8. Reference URLs already verified (reuse freely)

- Feynman Lectures Vol I (Caltech, USA): Ch 9 Newton's Laws `https://www.feynmanlectures.caltech.edu/I_09.html`, Ch 10 Conservation of Momentum `https://www.feynmanlectures.caltech.edu/I_10.html`
- HyperPhysics (Georgia State, USA): Newton's Laws `http://hyperphysics.phy-astr.gsu.edu/hbase/Newt.html`, Centripetal Force `http://hyperphysics.phy-astr.gsu.edu/hbase/cf.html`, Physical Units `http://hyperphysics.phy-astr.gsu.edu/hbase/units.html`
- PhET (UC Boulder, USA): `https://phet.colorado.edu/en/simulations/forces-and-motion-basics`, `https://phet.colorado.edu/en/simulations/forces-and-motion`
- MIT OpenCourseWare 8.01 (USA): `https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/`
- BIPM (Paris, France): SI base units `https://www.bipm.org/en/measurement-units/si-base-units`
- NIST (USA): SI units `https://www.nist.gov/pml/owm/metric-si/si-units`, rules `https://physics.nist.gov/cuu/Units/rules.html`

Always re-verify any NEW url before using it.

---

## 9. Ideas backlog (discussed, not yet built)

Retention & engagement features the owner liked but hasn't prioritized yet:
- Spaced-repetition flashcards (localStorage) — biggest retention lever still to build.
- Live formula playground (sliders recompute a formula in real time).
- PhET simulation embeds + curated videos (MIT/Khan) via an `<Embed>` component.
- Mastery meter + streaks (gamification); AI doubt-tutor per concept; parent weekly digest email; offline PWA.
- Misconception-buster cards.

**Already implemented:** Predict-then-reveal, Exam-Hall Notes, Learn-More references, LaTeX math, per-concept animations, mobile-first responsive theme, dark-mode + reduced-motion support.

---

## 10. First thing for the next session to say/do

> "Continue building the Physics Companion app at `C:\MyApps\edu.kanaksan.com\11PHYPUKA`. Read `docs/SESSION-RECAP.md` and `docs/authoring-guide-adding-content.md`. Chapter 4 is the benchmark; Chapters 1 and 4 are done. Build **Chapter 2 — Motion in a Straight Line** next, matching the benchmark exactly, accuracy first, then `npm run docs:build` to verify."
