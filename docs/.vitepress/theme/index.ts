import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import Quiz from './components/Quiz.vue'
import ConceptMeta from './components/ConceptMeta.vue'
import ConceptHero from './components/ConceptHero.vue'
import Predict from './components/Predict.vue'
import MissionLaunchSatellite from './components/simulations/MissionLaunchSatellite/MissionLaunchSatellite.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Quiz', Quiz)
    app.component('ConceptMeta', ConceptMeta)
    app.component('ConceptHero', ConceptHero)
    app.component('Predict', Predict)
    app.component('MissionLaunchSatellite', MissionLaunchSatellite)
  }
} satisfies Theme
