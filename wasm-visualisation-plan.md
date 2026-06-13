# Class 11 Physics — WASM Visualisation Roadmap

Companion document to the *Physics Companion* VitePress site.
Each chapter covers: content summary, one WASM interactive to build, and curated references from the world's ten highest-ranked physics universities.

---

## Top-Ranked Universities Referenced

| # | University | Country | Open Resource Used |
|---|-----------|---------|-------------------|
| 1 | Massachusetts Institute of Technology | USA | [MIT OpenCourseWare](https://ocw.mit.edu) — 8.01SC, 8.03SC, 8.044 |
| 2 | Harvard University | USA | [David Morin's Classical Mechanics](http://www.people.fas.harvard.edu/~djmorin/book.html) — free chapters |
| 3 | Stanford University | USA | [The Theoretical Minimum](https://theoreticalminimum.com) — Susskind's lectures |
| 4 | University of Cambridge | UK | [David Tong's Lecture Notes](https://www.damtp.cam.ac.uk/user/tong/teaching.html) — best free notes in the world |
| 5 | University of Oxford | UK | Oxford Physics Handouts — various open notes |
| 6 | California Institute of Technology | USA | [The Feynman Lectures on Physics](https://www.feynmanlectures.caltech.edu) |
| 7 | Princeton University | USA | [Princeton Physics 101/103](https://phy.princeton.edu/academics/undergraduate/courses) lecture notes |
| 8 | ETH Zurich | Switzerland | [ETH Physics Lecture Notes](https://edu.itp.phys.ethz.ch) — open PDF materials |
| 9 | UC Berkeley | USA | [Physics 7 Series](https://physics.berkeley.edu/academics/courses) — webcasts and notes |
| 10 | University of Chicago | USA | [Enrico Fermi Institute Resources](https://efi.uchicago.edu) + Kadanoff Center notes |

> **Also referenced throughout:** PhET Simulations (Univ. of Colorado Boulder), HyperPhysics (Georgia State University), NPTEL (IITs India), Khan Academy.

---

## How to Read This Document

- **Summary** — core concepts of the chapter
- **WASM Idea** — one focused interactive to build, with student controls and what the canvas shows
- **Key WASM Exports** — the function signatures the Vue canvas component calls
- **References** — specific lectures, chapters, and URLs from all ten universities plus trusted open sources

---

## Chapter 1 — Units and Measurement

### Summary
SI base and derived units; significant figures and rounding; dimensions of physical quantities; dimensional analysis — equation verification, formula derivation, unit conversion; absolute, relative, percentage errors; error propagation in addition, subtraction, multiplication, division.

### WASM Visualisation — SI Prefix Scale Walk ✅ Built
Eight labelled particles bounce in a box, each sized logarithmically to its SI prefix (femto → mega). Students instantly feel that each prefix step is ×1000, not ×10.

**Extend it:** add a draggable slider from `f` to `G`; at each prefix show a real-world anchor ("nm = DNA strand width", "μm = red blood cell", "mm = pencil tip", "m = your height", "km = 10-minute walk").

**Key WASM exports:** `init(W,H)` · `step(dt,W,H)` · `getX/Y/R(i)` · `count()`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.01SC — Lecture 1: *Units, Dimensional Analysis* · https://ocw.mit.edu/8-01sc |
| **Harvard** | Morin, *Introduction to Classical Mechanics* — Appendix A: *Units and Dimensions* · http://www.people.fas.harvard.edu/~djmorin/book.html |
| **Stanford** | Susskind, *The Theoretical Minimum* — Lecture 1, measurement and units · https://theoreticalminimum.com/courses/classical-mechanics/2011/fall |
| **Cambridge** | Tong, *Lectures on Dynamics and Relativity* — §1.1 Newtonian Mechanics · https://www.damtp.cam.ac.uk/user/tong/dynamics.html |
| **Oxford** | Oxford Year 1 Physics — *Dimensions and Units* handout (Dept. of Physics) |
| **Caltech** | Feynman Lectures Vol. I, Ch. 5 — *Time and Distance* · https://www.feynmanlectures.caltech.edu/I_05.html |
| **Princeton** | Princeton PHY 101 — Week 1 notes: *Physical Quantities and SI Units* |
| **ETH Zurich** | ETH Physics I (401-0151-00L) — Introduction to measurement and SI system |
| **UC Berkeley** | Physics 7A — Lecture 1 notes: *Measurement, Units, Significant Figures* |
| **U Chicago** | Chicago Intro Physics — *Measurement and Uncertainty* (Enrico Fermi's approach to estimation) |
| HyperPhysics | http://hyperphysics.phy-astr.gsu.edu/hbase/units.html |
| NIST SI Reference | https://www.nist.gov/pml/owm/metric-si/si-units |

---

## Chapter 2 — Motion in a Straight Line

### Summary
Position, displacement, path length; average and instantaneous velocity and speed; average and instantaneous acceleration; uniformly accelerated motion — kinematic equations (`v = u+at`, `s = ut+½at²`, `v² = u²+2as`); free fall; relative velocity in one dimension; x–t, v–t, a–t graphs.

### WASM Visualisation — Live Kinematic Graph Plotter
A ball is thrown upward (or dropped). WASM integrates `a = −9.8 m/s²` each frame, storing position history in a ring buffer. Canvas draws three live side-by-side plots: **x–t**, **v–t**, **a–t**. The student taps "Throw up" or "Drop" and watches all three graphs grow stroke-by-stroke.

**What it teaches viscerally:** the v–t graph slope is acceleration; the a–t graph is flat; the x–t graph is a parabola. Students see calculus before they know the word.

**Key WASM exports:** `throw(u)` · `step(dt)` · `getX()` · `getV()` · `getA()` · `histLen()` · `histX(i)` · `histV(i)`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.01SC — Lectures 2–4: *1D Kinematics, Free Fall* (Walter Lewin) · https://ocw.mit.edu/8-01sc |
| **Harvard** | Morin, Ch. 2 — *Kinematics in One Dimension* · http://www.people.fas.harvard.edu/~djmorin/book.html |
| **Stanford** | Susskind & Hrabovsky, *The Theoretical Minimum* — Lecture 1: *The Nature of Classical Physics* |
| **Cambridge** | Tong, *Dynamics and Relativity* — §1: *Newtonian Mechanics* · https://www.damtp.cam.ac.uk/user/tong/dynamics.html |
| **Oxford** | Oxford CP1 Notes — *Mechanics: Kinematics* (Dept. of Physics Year 1) |
| **Caltech** | Feynman Lectures Vol. I, Ch. 8 — *Motion* · https://www.feynmanlectures.caltech.edu/I_08.html |
| **Princeton** | PHY 101 — *Kinematics* week 2 notes (Halpern) |
| **ETH Zurich** | ETH Physics I — §2 Kinematics: position, velocity, acceleration |
| **UC Berkeley** | Physics 7A — Lecture 2: *Kinematics in 1D* (recorded webcasts available) |
| **U Chicago** | PHYS 121 — *Motion in 1D*, Fermi estimation of free-fall problems |
| PhET | Moving Man · https://phet.colorado.edu/en/simulations/moving-man |
| HyperPhysics | http://hyperphysics.phy-astr.gsu.edu/hbase/mot.html |

---

## Chapter 3 — Motion in a Plane

### Summary
Scalars and vectors; vector addition (triangle, parallelogram); resolution into components; unit vectors î, ĵ, k̂; position and displacement vectors; velocity and acceleration in 2D; relative velocity in 2D; projectile motion — trajectory, range, time of flight, maximum height; uniform circular motion — angular velocity, centripetal acceleration.

### WASM Visualisation — Projectile Laboratory
Sliders for **launch angle** (0°–90°) and **initial speed** (10–50 m/s). WASM computes the full trajectory. Canvas overlays the parabolic path, max-height arrow, range arrow, and a ghost of the 45° maximum-range shot. Live readout: R, H, T, final speed. Student sees range is symmetric about 45° — 30° and 60° give the same range.

**Key WASM exports:** `launch(angle_deg, speed)` · `step(dt)` · `getX()` · `getY()` · `maxHeight()` · `range()`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.01SC — Lecture 4: *Projectile Motion* (Lewin demonstrates with a ball) · https://ocw.mit.edu/8-01sc |
| **Harvard** | Morin, Ch. 2 — *2D Kinematics, Projectiles* |
| **Stanford** | Susskind Classical Mechanics — Lecture 2: *Motion and Mathematics* |
| **Cambridge** | Tong, *Dynamics and Relativity* — §1.2: *Projectiles* · https://www.damtp.cam.ac.uk/user/tong/dynamics.html |
| **Oxford** | Oxford CP1 — *Vectors and Projectile Motion* handout |
| **Caltech** | Feynman Lectures Vol. I, Ch. 9 — *Newton's Laws of Dynamics* · https://www.feynmanlectures.caltech.edu/I_09.html |
| **Princeton** | PHY 101 — *Projectile Motion and Relative Velocity* |
| **ETH Zurich** | ETH Physics I — §3: *Motion in a Plane* |
| **UC Berkeley** | Physics 7A — Lecture 3: *2D Motion* |
| **U Chicago** | PHYS 121 — *Vectors and 2D Kinematics* |
| PhET | Projectile Motion · https://phet.colorado.edu/en/simulations/projectile-motion |

---

## Chapter 4 — Laws of Motion

### Summary
Inertia and Newton's first law; linear momentum; Newton's second law `F = ma`; impulse; Newton's third law; conservation of linear momentum; equilibrium of a particle; static and kinetic friction (laws of limiting friction); circular motion — centripetal force; banking of roads.

### WASM Visualisation — Inclined Plane + Friction Meter
A block on a tilting ramp. Student drags angle slider. WASM calculates weight components, static friction (scales up to µₛN), and the moment of slipping. A needle gauge shows "friction used / max available" turning red at slip. After slipping, kinetic friction takes over and the block accelerates down.

**Key WASM exports:** `setAngle(deg)` · `setMu(static, kinetic)` · `step(dt)` · `getPos()` · `getFriction()` · `isSlipping()`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.01SC — Lectures 7–9: *Newton's Laws, Applications, Friction* (Lewin) · https://ocw.mit.edu/8-01sc |
| **Harvard** | Morin, Ch. 3 — *Newton's Laws* (with excellent friction examples) |
| **Stanford** | Susskind, *Theoretical Minimum* Lecture 3 — *Dynamics* |
| **Cambridge** | Tong, *Dynamics* — §2: *Forces* · https://www.damtp.cam.ac.uk/user/tong/dynamics.html |
| **Oxford** | Oxford CP1 — *Newton's Laws of Motion* handout |
| **Caltech** | Feynman Lectures Vol. I, Ch. 12 — *Characteristics of Force* · https://www.feynmanlectures.caltech.edu/I_12.html |
| **Princeton** | PHY 101 — *Newton's Laws, Friction, Circular Motion* |
| **ETH Zurich** | ETH Physics I — §4: *Newton's Laws* |
| **UC Berkeley** | Physics 7A — Lecture 5: *Laws of Motion and Friction* |
| **U Chicago** | PHYS 121 — *Dynamics: Forces and Newton's Laws* |
| PhET | Forces and Motion Basics · https://phet.colorado.edu/en/simulations/forces-and-motion-basics |

---

## Chapter 5 — Work, Energy and Power

### Summary
Work done by constant and variable force; kinetic energy; work–energy theorem; conservative and non-conservative forces; potential energy (gravitational, elastic); conservation of mechanical energy; power; elastic and inelastic collisions in 1D and 2D; coefficient of restitution.

### WASM Visualisation — Energy Roller Coaster
Student clicks to draw hills and valleys. WASM uses energy conservation — at each point, `KE = E_total − PE`. A live split bar shows KE (green) + PE (orange) = constant height bar. If the ball lacks energy to clear a hill, it stops and rolls back. After friction is toggled on, both bars shrink as energy is lost.

**Key WASM exports:** `setTrack(xs[], ys[])` · `launch(speed)` · `step(dt)` · `getBallX/Y()` · `getKE()` · `getPE()` · `getTotalE()`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.01SC — Lectures 11–13: *Work, Kinetic/Potential Energy, Conservation* (Lewin) |
| **Harvard** | Morin, Ch. 5 — *Energy* (rigorous treatment with examples) |
| **Stanford** | Susskind, *Theoretical Minimum* — Lecture 4: *Time, Energy, Hamiltonian* |
| **Cambridge** | Tong, *Dynamics* — §3: *Energy* · https://www.damtp.cam.ac.uk/user/tong/dynamics.html |
| **Oxford** | Oxford CP1 — *Work, Energy, Power* handout |
| **Caltech** | Feynman Lectures Vol. I, Ch. 13–14 — *Work and Potential Energy* · https://www.feynmanlectures.caltech.edu/I_13.html |
| **Princeton** | PHY 101 — *Energy Methods in Mechanics* |
| **ETH Zurich** | ETH Physics I — §5: *Work and Energy* |
| **UC Berkeley** | Physics 7A — *Energy Conservation, Collisions* |
| **U Chicago** | PHYS 121 — *Work–Energy Theorem* (Kadanoff approach to conservation laws) |
| PhET | Energy Skate Park · https://phet.colorado.edu/en/simulations/energy-skate-park |
| Feynman | Ch. 4 — *Conservation of Energy* (the most elegant explanation ever written) |

---

## Chapter 6 — System of Particles & Rotational Motion

### Summary
Centre of mass (discrete and continuous); motion of centre of mass; angular velocity and acceleration; torque; angular momentum; conservation of angular momentum; rigid body rotation; moment of inertia; parallel and perpendicular axis theorems; rolling motion without slipping.

### WASM Visualisation — Spinning Skater (L Conservation)
A skater as a central disc with two extending rod-arms. Student drags a slider to pull arms in or push them out. WASM conserves `L = Iω = const` — as I decreases, ω increases. Live readout of I, ω, L. L is always the same number: conservation is the whole point.

**Key WASM exports:** `setArmLength(r)` · `step(dt)` · `getOmega()` · `getMOI()` · `getL()`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.01SC — Lectures 19–24: *Rotation, Angular Momentum, Rolling* (Lewin) |
| **Harvard** | Morin, Ch. 7–8 — *Angular Momentum and Torque* |
| **Stanford** | Susskind, *Theoretical Minimum* — Lecture 5: *Conservation Laws and Symmetry* |
| **Cambridge** | Tong, *Dynamics* — §4: *Angular Momentum* · https://www.damtp.cam.ac.uk/user/tong/dynamics.html |
| **Oxford** | Oxford CP1 — *Rotational Mechanics* handout |
| **Caltech** | Feynman Lectures Vol. I, Ch. 18–20 — *Rotation in 2D and 3D* · https://www.feynmanlectures.caltech.edu/I_18.html |
| **Princeton** | PHY 101 — *Torque, Angular Momentum, Rigid Body Rotation* |
| **ETH Zurich** | ETH Physics I — §7: *Rotation of Rigid Bodies* |
| **UC Berkeley** | Physics 7A — *Rotational Motion, Moment of Inertia* |
| **U Chicago** | PHYS 121 — *Angular Momentum and its Conservation* |
| PhET | Torque · https://phet.colorado.edu/en/simulations/torque |

---

## Chapter 7 — Gravitation

### Summary
Newton's universal law of gravitation; gravitational constant G; variation of g with altitude, depth, latitude; gravitational potential energy; escape velocity; orbital speed and period; energy of a satellite; geostationary and polar orbits; Kepler's three laws.

### WASM Visualisation — Orbital Mechanics Sandbox
Student clicks to place a planet and drags an arrow to set initial velocity. WASM solves the two-body problem with Verlet integration. Canvas traces the orbit in real time — ellipse, circle, parabola, or hyperbola depending on speed. Equal-area triangles are shaded periodically (Kepler's 2nd). Live display: v, r, T, total energy, eccentricity.

**Key WASM exports:** `setBody(x,y,vx,vy,mass)` · `step(dt)` · `getX/Y()` · `getV()` · `getEnergy()` · `getAngMom()`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.01SC — Lecture 15: *Gravity, Satellite Orbits* (Lewin) |
| **Harvard** | Morin, Ch. 6 — *Gravity* (derivation of Kepler's laws from Newton's law) |
| **Stanford** | Susskind, *The Theoretical Minimum* — Lecture 7: *Symmetry and Conservation* |
| **Cambridge** | Tong, *Dynamics* — §5: *Central Forces and Kepler's Laws* · https://www.damtp.cam.ac.uk/user/tong/dynamics.html |
| **Oxford** | Oxford CP1 — *Gravity and Orbital Motion* handout |
| **Caltech** | Feynman Lectures Vol. I, Ch. 7 — *Theory of Gravitation* · https://www.feynmanlectures.caltech.edu/I_07.html |
| **Princeton** | PHY 101 — *Universal Gravitation, Orbits, Kepler* |
| **ETH Zurich** | ETH Physics I — §6: *Gravitation and Kepler's Laws* |
| **UC Berkeley** | Physics 7A — *Gravitation and Planetary Motion* |
| **U Chicago** | PHYS 121 — *Newtonian Gravity* (historical context from Einstein's IAS connection) |
| PhET | Gravity and Orbits · https://phet.colorado.edu/en/simulations/gravity-and-orbits |

---

## Chapter 8 — Mechanical Properties of Solids

### Summary
Elastic behaviour; stress (tensile, compressive, shear); strain (longitudinal, shear, volumetric); Hooke's law; Young's modulus (Y), shear modulus (G), bulk modulus (B); Poisson's ratio; stress–strain curve (proportional limit → elastic limit → yield point → UTS → fracture); elastic potential energy in a wire; applications — I-beams, bridges, bone.

### WASM Visualisation — Live Stress–Strain Curve Tracer
Student drags a "force" slider applying increasing tension to a rod. WASM computes σ = F/A and ε = ΔL/L₀ and plots a live dot on the graph. Background shading changes colour: green (Hookean) → yellow (plastic) → red (necking). The rod visual deforms. Past fracture point, the rod snaps with a flash effect.

**Key WASM exports:** `applyForce(F)` · `getStress()` · `getStrain()` · `getElongation()` · `getRegion()` · `isFractured()`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 2.001 — *Mechanics and Materials I*: Stress, Strain, Young's Modulus · https://ocw.mit.edu/2-001f06 |
| **Harvard** | Harvard Applied Physics — *Solid Mechanics* course notes |
| **Stanford** | Stanford ME 80 — *Mechanics of Materials* (lecture slides available via SCPD) |
| **Cambridge** | Cambridge Engineering Tripos — *Mechanics of Materials* (Ashby & Jones approach) |
| **Oxford** | Oxford Engineering — *Materials: Mechanical Properties* (Part A notes) |
| **Caltech** | Feynman Lectures Vol. II, Ch. 38 — *Elasticity* · https://www.feynmanlectures.caltech.edu/II_38.html |
| **Princeton** | Princeton MAE 223 — *Structural Mechanics* notes |
| **ETH Zurich** | ETH Mechanics of Materials (151-0525-00L) — *Stress and Strain* |
| **UC Berkeley** | CE 130 — *Mechanics of Materials*, Lecture notes on elasticity |
| **U Chicago** | PHYS 140 — *Mechanics of Continuous Media* |
| HyperPhysics | http://hyperphysics.phy-astr.gsu.edu/hbase/permot2.html |

---

## Chapter 9 — Mechanical Properties of Fluids

### Summary
Pressure at a depth; Pascal's law; hydraulic machines; Archimedes' principle; buoyancy; viscosity; Stokes' law; terminal velocity; Reynolds number; streamline and turbulent flow; equation of continuity; Bernoulli's theorem; applications (venturimeter, aerofoil, spinning ball, blood flow).

### WASM Visualisation — Bernoulli Pipe Flow
Variable-width pipe (student drags to widen or narrow the central section). WASM computes speed (continuity: Av = const) and pressure (Bernoulli: p + ½ρv² = const) at each section. Animated particles bunch up in the narrow part. Vertical pressure-gauge columns rise/fall in real time. A heat map colours the pipe wall from high-pressure blue to low-pressure red.

**Key WASM exports:** `setInletSpeed(v)` · `step(dt)` · `getSpeed(section)` · `getPressure(section)` · `getParticleX/Y(i)`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.01SC — Lecture 28: *Fluid Dynamics and Bernoulli's Theorem* (Lewin) |
| **Harvard** | Harvard Applied Math — *Fluid Mechanics* introductory notes |
| **Stanford** | Stanford ME 161 — *Fundamentals of Fluid Mechanics* (intro lectures) |
| **Cambridge** | Tong, *Lectures on Fluid Mechanics* · https://www.damtp.cam.ac.uk/user/tong/fluids.html |
| **Oxford** | Oxford CP2 — *Fluid Mechanics* handout (Acheson) |
| **Caltech** | Feynman Lectures Vol. II, Ch. 40–41 — *Flow of Dry Water / Wet Water* · https://www.feynmanlectures.caltech.edu/II_40.html |
| **Princeton** | Princeton MAE 305 — *Fluid Dynamics* notes |
| **ETH Zurich** | ETH Fluid Mechanics (151-0103-00L) — *Bernoulli and Continuity* |
| **UC Berkeley** | ME 106 — *Viscous Flow and Heat Transfer*, introductory fluid notes |
| **U Chicago** | PHYS 342 — *Fluid Mechanics* (Kadanoff's statistical approach to turbulence) |
| PhET | Fluid Pressure and Flow · https://phet.colorado.edu/en/simulations/fluid-pressure-and-flow |

---

## Chapter 10 — Thermal Properties of Matter

### Summary
Temperature, heat, thermal equilibrium; heat capacity and specific heat capacity; calorimetry; latent heat of fusion and vaporisation; thermal expansion (linear α, areal 2α, volumetric γ ≈ 3α); anomalous expansion of water; modes of heat transfer — conduction (Fourier's law, thermal conductivity k), convection, radiation (Stefan–Boltzmann law `P = εσAT⁴`, Wien's displacement law); Newton's law of cooling.

### WASM Visualisation — Newton's Cooling Laboratory
A hot cup starts at a temperature set by the student. WASM integrates `dT/dt = −k(T − T_room)` and draws the exponential T–t curve stroke by stroke in real time. The cup colour transitions from deep orange → pale blue as it cools. Sliders: initial temperature, room temperature, cooling constant k (insulation level). Changing k mid-simulation immediately reshapes the live curve.

**Key WASM exports:** `init(T0, Troom, k)` · `step(dt)` · `getT()` · `histLen()` · `histT(i)` · `histTime(i)`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.01 — Lecture 33: *Temperature, Heat, First Law* |
| **Harvard** | Schroeder, *Thermal Physics* (used at Harvard) — Ch. 1: *Energy in Thermal Physics* |
| **Stanford** | Susskind, *Statistical Mechanics: The Theoretical Minimum* — Lecture 1 |
| **Cambridge** | Tong, *Lectures on Statistical Physics* — §1: *Thermodynamics* · https://www.damtp.cam.ac.uk/user/tong/statphys.html |
| **Oxford** | Mandl, *Statistical Physics* (Oxford University Press) — Ch. 4: *Thermal Properties* |
| **Caltech** | Feynman Lectures Vol. I, Ch. 45 — *Illustrations of Thermodynamics* · https://www.feynmanlectures.caltech.edu/I_45.html |
| **Princeton** | Princeton PHY 301 — *Thermal Physics* week 1 notes |
| **ETH Zurich** | ETH Thermodynamics (151-0220-00L) — *Heat Transfer Modes* |
| **UC Berkeley** | Physics 7B — *Thermal Physics* (includes Newton's cooling lab) |
| **U Chicago** | PHYS 213 — *Thermal and Statistical Physics* (Fermi's problem-solving approach to cooling) |
| PhET | Blackbody Spectrum · https://phet.colorado.edu/en/simulations/blackbody-spectrum |

---

## Chapter 11 — Thermodynamics

### Summary
Thermal equilibrium and zeroth law; internal energy; first law `ΔU = Q − W`; specific heats Cp and Cv for ideal gases; isothermal, adiabatic, isochoric, isobaric processes; reversible and irreversible processes; second law (Kelvin–Planck: no engine converts all heat to work; Clausius: heat flows hot → cold only); entropy; heat engines; Carnot cycle and efficiency `η_C = 1 − T_C/T_H`; refrigerators.

### WASM Visualisation — p–V Diagram Live Tracer
Student selects a process and drags the piston. WASM computes p at each V using the correct equation (pV = nRT or pVᵞ = C) and tracks W (area under curve), Q, ΔU. Canvas shows the piston with moving gas particles (speed proportional to T) and the p–V diagram with the path traced live. Running totals show the first-law check W + ΔU = Q always holding.

**Key WASM exports:** `setProcess(type)` · `setVolume(V)` · `getP()` · `getT()` · `getW()` · `getQ()` · `getDeltaU()`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.044 — *Statistical Physics I* (Greytak/Ketterle): Thermodynamic processes, entropy · https://ocw.mit.edu/8-044s13 |
| **Harvard** | Schroeder, *Thermal Physics* — Ch. 3: *Interactions and Implications* (used at Harvard/Princeton) |
| **Stanford** | Susskind, *Statistical Mechanics: The Theoretical Minimum* — Lectures 4–6: *Entropy and the Laws* |
| **Cambridge** | Tong, *Statistical Physics* — §2: *The Second Law* · https://www.damtp.cam.ac.uk/user/tong/statphys.html |
| **Oxford** | Mandl, *Statistical Physics* — Ch. 5: *Thermodynamic Potentials* |
| **Caltech** | Feynman Lectures Vol. I, Ch. 44 — *The Laws of Thermodynamics* · https://www.feynmanlectures.caltech.edu/I_44.html |
| **Princeton** | Princeton PHY 301 — *The Carnot Cycle and Entropy* (notes by Halpern) |
| **ETH Zurich** | ETH Thermodynamics — *Entropy and the Second Law* (Poulikakos notes) |
| **UC Berkeley** | Physics 7B — *Thermodynamic Processes and Heat Engines* |
| **U Chicago** | PHYS 213 — *Second Law* (Kadanoff's statistical mechanics perspective on entropy) |
| PhET | Gas Properties · https://phet.colorado.edu/en/simulations/gas-properties |

---

## Chapter 12 — Kinetic Theory

### Summary
Molecular nature of matter; ideal gas assumptions; pressure in terms of molecular velocities `p = ⅓ρ⟨v²⟩`; kinetic interpretation of temperature `KE = 3/2 k_BT`; rms, mean, and most probable speeds; Maxwell–Boltzmann speed distribution; degrees of freedom; law of equipartition of energy `½k_BT` per DOF; specific heats of monatomic (γ = 5/3) and diatomic (γ = 7/5) gases; mean free path `λ = 1/(√2 πd²n)`.

### WASM Visualisation — Maxwell–Boltzmann Live Histogram
N = 300 molecules in a 2D box. WASM runs hard-disk collisions (elastic). After every 60 frames the canvas draws a real-time speed histogram and overlays the theoretical Maxwell–Boltzmann curve. Temperature slider shifts the peak right and broadens the curve. Molecular mass slider (H₂ vs O₂) shifts it left/right. Three vertical markers show v_p, v̄, v_rms.

**Key WASM exports:** `init(N, T, mass)` · `step(dt)` · `getSpeed(i)` · `count()` · `setTemperature(T)`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.044 — *Kinetic Theory, Maxwell Distribution, Mean Free Path* · https://ocw.mit.edu/8-044s13 |
| **Harvard** | Schroeder, *Thermal Physics* — Ch. 6: *Boltzmann Statistics* |
| **Stanford** | Susskind, *Statistical Mechanics* — Lecture 2: *Boltzmann Distribution* |
| **Cambridge** | Tong, *Kinetic Theory* notes · https://www.damtp.cam.ac.uk/user/tong/kinetic.html |
| **Oxford** | Oxford B3 — *Kinetic Theory* lecture notes (Prof. Sherrington) |
| **Caltech** | Feynman Lectures Vol. I, Ch. 39–40 — *Kinetic Theory of Gases* · https://www.feynmanlectures.caltech.edu/I_39.html |
| **Princeton** | Princeton PHY 301 — *Maxwell–Boltzmann Distribution* (Halpern) |
| **ETH Zurich** | ETH Statistical Mechanics — *Ideal Gas and Equipartition* |
| **UC Berkeley** | Physics 7B — *Kinetic Theory* (Saeta's notes available online) |
| **U Chicago** | PHYS 213 — *Kinetic Theory* (Fermi's original lecture style: back-of-envelope first) |
| PhET | Gas Properties · https://phet.colorado.edu/en/simulations/gas-properties |

---

## Chapter 13 — Oscillations

### Summary
Periodic and oscillatory motion; SHM definition; equation `x = A cos(ωt+φ)`, velocity `v = −Aω sin(ωt+φ)`, acceleration `a = −ω²x`; energy in SHM — KE and PE oscillate at 2ω; SHM as projection of uniform circular motion; spring–mass system `ω = √(k/m)`; simple pendulum `T = 2π√(L/g)`; damped oscillations — under/over/critically damped; forced oscillations; resonance; Q factor.

### WASM Visualisation — Phase Portrait + Resonance Sweep
WASM integrates the driven damped oscillator `mẍ + bẋ + kx = F₀cos(ωₐt)`. Canvas shows two panels simultaneously: (left) the mass bouncing on a spring; (right) the phase-space portrait (x vs v) — a decaying spiral for free oscillations, a stable ellipse at resonance. A third panel shows the amplitude–frequency response curve with a live dot tracking the current ω_d. Student sweeps frequency to hit resonance.

**Key WASM exports:** `setParams(m, b, k, F0, omega_d)` · `step(dt)` · `getX()` · `getV()` · `getAmplitude()`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.03SC — *Vibrations and Waves*, Lectures 1–6: *SHM, Damping, Resonance* · https://ocw.mit.edu/8-03sc |
| **Harvard** | Morin, Ch. 4 — *Oscillations* (with phase diagrams) |
| **Stanford** | Susskind, *Classical Mechanics* — Lecture 3: *Oscillators and Phase Space* |
| **Cambridge** | Tong, *Dynamics* — §6: *Oscillations* · https://www.damtp.cam.ac.uk/user/tong/dynamics.html |
| **Oxford** | Oxford CP1 — *Oscillations and Resonance* (thorough handout with Q factor) |
| **Caltech** | Feynman Lectures Vol. I, Ch. 21–23 — *Harmonic Oscillators, Resonance* · https://www.feynmanlectures.caltech.edu/I_21.html |
| **Princeton** | Princeton PHY 103 — *Oscillations, Coupled Oscillators, Normal Modes* |
| **ETH Zurich** | ETH Physics II — *Oscillations and Coupled Systems* |
| **UC Berkeley** | Physics 7B — *Simple Harmonic Motion and Resonance* |
| **U Chicago** | PHYS 121 — *Oscillations* (Kadanoff: energy landscape approach to equilibrium and SHM) |
| PhET | Masses and Springs · https://phet.colorado.edu/en/simulations/masses-and-springs |

---

## Chapter 14 — Waves

### Summary
Wave motion — transverse and longitudinal; progressive wave equation `y = A sin(kx − ωt)`; wave speed `v = fλ`; wave speed on a string `v = √(T/μ)`; speed of sound in air; principle of superposition; reflection of waves; standing waves; normal modes of a string `f_n = nv/2L`; beats `f_beat = |f₁ − f₂|`; Doppler effect — moving source and observer.

### WASM Visualisation — Wave Superposition Studio
Two sinusoidal waves with independent amplitude, frequency, and phase sliders. WASM adds them at 1000 x-sample points. Canvas draws wave 1 (faded blue), wave 2 (faded red), resultant (bright). Four one-tap presets:

| Preset | Condition | Shows |
|--------|-----------|-------|
| Standing wave | Same f, opposite direction | Nodes / antinodes |
| Beats | f₁ = 440, f₂ = 443 Hz | Slow 3 Hz envelope |
| Constructive | Same f, φ = 0 | Double amplitude |
| Destructive | Same f, φ = π | Cancellation |

**Key WASM exports:** `setWave1(A, f, phi)` · `setWave2(A, f, phi)` · `compute()` · `getResultant(i)` · `getW1(i)` · `getW2(i)`

### References
| University | Resource |
|-----------|---------|
| **MIT** | OCW 8.03SC — *Waves*, Lectures 7–18: *Standing Waves, Beats, Doppler, Sound* · https://ocw.mit.edu/8-03sc |
| **Harvard** | Harvard Applied Physics — *Waves and Acoustics* course notes |
| **Stanford** | Susskind, *Classical Mechanics* — Lecture 9: *Wave Equations* |
| **Cambridge** | Tong, *Lectures on Waves* · https://www.damtp.cam.ac.uk/user/tong/waves.html |
| **Oxford** | Oxford CP2 — *Waves and Optics* handout (Bleaney & Bleaney approach) |
| **Caltech** | Feynman Lectures Vol. I, Ch. 47–51 — *Sound, Wave Equation, Beats, Doppler* · https://www.feynmanlectures.caltech.edu/I_47.html |
| **Princeton** | Princeton PHY 103 — *Waves — Superposition, Standing Waves, Acoustics* |
| **ETH Zurich** | ETH Physics II — *Mechanical Waves and Sound* |
| **UC Berkeley** | Physics 7B — *Wave Motion, Superposition, Doppler* |
| **U Chicago** | PHYS 121 — *Waves* (historical: Fermi's approach to acoustics problems) |
| PhET | Wave Interference · https://phet.colorado.edu/en/simulations/wave-interference |

---

## Implementation Priority

Ranked by **student impact vs build effort**:

| Priority | Chapter | WASM Simulation | Why High Impact |
|----------|---------|----------------|----------------|
| 1 | Ch 2 | Kinematic graph plotter | v–t and a–t graphs are universally misunderstood |
| 2 | Ch 5 | Energy roller coaster | Energy conservation is the hardest intuition to build |
| 3 | Ch 14 | Wave superposition studio | Superposition cannot be grasped from equations alone |
| 4 | Ch 3 | Projectile laboratory | Immediate angle intuition; highly motivating |
| 5 | Ch 7 | Orbital mechanics sandbox | Kepler's laws come alive when you place the satellite |
| 6 | Ch 12 | Maxwell–Boltzmann histogram | A distribution emerging from collisions is profound |
| 7 | Ch 13 | Phase portrait + resonance | Phase space is powerful but under-taught at this level |
| 8 | Ch 11 | p–V diagram tracer | Abstract processes become concrete through the piston |
| 9 | Ch 6 | Spinning skater | The most dramatic consequence of angular momentum |
| 10 | Ch 9 | Bernoulli pipe flow | Better than any static Bernoulli diagram |
| 11 | Ch 4 | Inclined plane + friction | Slip point is counterintuitive; great "aha" moment |
| 12 | Ch 10 | Newton's cooling lab | Exponential decay made visible |
| 13 | Ch 8 | Stress–strain curve tracer | Material failure is dramatic when it snaps |
| 14 | Ch 1 | SI prefix walk | Already built ✅ |

---

## Common WASM Module Structure

```
docs/public/wasm/
  si_units.wasm         ✅ Ch1  — built
  kinematics.wasm          Ch2
  projectile.wasm          Ch3
  friction.wasm            Ch4
  roller_coaster.wasm      Ch5
  skater.wasm              Ch6
  orbits.wasm              Ch7
  stress_strain.wasm       Ch8
  bernoulli.wasm           Ch9
  cooling.wasm             Ch10
  pv_diagram.wasm          Ch11
  maxwell.wasm             Ch12
  oscillator.wasm          Ch13
  superposition.wasm       Ch14

wasm-src/
  <name>.ts            ← AssemblyScript source (TypeScript-like)
```

**Build command (same for all):**
```bash
/tmp/asc/node_modules/.bin/asc wasm-src/<name>.ts \
  --outFile docs/public/wasm/<name>.wasm \
  --optimize --runtime stub
```

---

## Master Resource Table

| University | Best Open Resource | Chapters Covered |
|-----------|-------------------|-----------------|
| **MIT OCW** | https://ocw.mit.edu/8-01sc | Ch 1–7 (mechanics) |
| **MIT OCW** | https://ocw.mit.edu/8-03sc | Ch 13–14 (waves) |
| **MIT OCW** | https://ocw.mit.edu/8-044s13 | Ch 11–12 (thermo, kinetic) |
| **Harvard** | Morin's CM textbook (free chapters) | Ch 1–7 |
| **Harvard** | Schroeder's Thermal Physics (used at Harvard) | Ch 10–12 |
| **Stanford** | The Theoretical Minimum (Susskind) | All chapters |
| **Cambridge** | Tong's Lecture Notes (tong/teaching.html) | All chapters |
| **Oxford** | CP1/CP2 handouts (Dept. of Physics) | All chapters |
| **Caltech** | The Feynman Lectures (feynmanlectures.caltech.edu) | All chapters |
| **Princeton** | PHY 101/103/301 course notes | All chapters |
| **ETH Zurich** | ETH Physics I/II/Thermodynamics | All chapters |
| **UC Berkeley** | Physics 7A/7B series (webcasts + notes) | All chapters |
| **U Chicago** | PHYS 121/213 notes + Kadanoff Center | All chapters |
| PhET | phet.colorado.edu | Visual reference for every chapter |
| HyperPhysics | hyperphysics.phy-astr.gsu.edu | Quick concept maps |
| NPTEL | nptel.ac.in/courses/115 | Indian syllabus alignment |
| Feynman Lectures | feynmanlectures.caltech.edu | Depth and wonder for every topic |
