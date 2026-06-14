<template>
  <div class="app-home">

    <section class="hero">

      <div class="hero-text">

        <div class="badge">
          Class 11 • NCERT
        </div>

        <h1>
          Physics Companion
        </h1>

        <p>
          Concept first. Formula second.
          One real example.
        </p>

        <div class="exam-tags">
          <span>JEE Main</span>
          <span>JEE Advanced</span>
          <span>KCET</span>
          <span>UCEED</span>
        </div>

        <a class="start-btn" href="/chapters/">
          Start Learning →
        </a>

      </div>

      <div class="hero-image">

        <img
          :src="selectedAnimation"
          alt="Physics Animation"
        />

      </div>

    </section>


    <section class="features">

      <div class="card">
        💡
        <h3>Concept before formula</h3>
        <p>Plain English first.</p>
      </div>

      <div class="card">
        🌍
        <h3>Real life examples</h3>
        <p>Buses, cricket, cooking.</p>
      </div>

      <div class="card">
        ✅
        <h3>Quick quizzes</h3>
        <p>Check understanding instantly.</p>
      </div>

      <div class="card">
        🎬
        <h3>Interactive simulations</h3>
        <p>Experiment with physics.</p>
      </div>

    </section>

  </div>
</template>

<script setup>

const animations = [

  '/animations/projectile.gif',
  '/animations/pendulum.gif',
  '/animations/waves.gif',
  '/animations/orbits.gif',
  '/animations/freefall.gif',
  '/animations/collision.gif',
  '/animations/electric.gif',
  '/animations/magnet.gif',
  '/animations/optics.gif',
  '/animations/particle.gif'

]

const selectedAnimation =
  animations[Math.floor(Math.random() * animations.length)]

</script>