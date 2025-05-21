// src/router/index.js or router.js

import { createRouter, createWebHistory } from 'vue-router'

// Existing category components
import CategoryPage from '../components/CategoryPage.vue'
import ComputerPage from '../components/ComputerPage.vue'
import PhilosophyPage from '../components/PhilosophyPage.vue'
import RomancePage from '../components/RomancePage.vue'

// Computer Page detail components
import CB1Page from '../components/CB1Page.vue'
import CB2Page from '../components/CB2Page.vue'
import CB3Page from '../components/CB3Page.vue'
import CB4Page from '../components/CB4Page.vue'
import CB5Page from '../components/CB5Page.vue'
import CB6Page from '../components/CB6Page.vue'

//Philosohpy Page detail components
import PB1Page from '../components/PB1Page.vue'
import PB2Page from '../components/PB2Page.vue'
import PB3Page from '../components/PB3Page.vue'
import PB4Page from '../components/PB4Page.vue'
import PB5Page from '../components/PB5Page.vue'
import PB6Page from '../components/PB6Page.vue'

//Romance Page detail components
import RB1Page from '../components/RB1Page.vue'
import RB2Page from '../components/RB2Page.vue'
import RB3Page from '../components/RB3Page.vue'
import RB4Page from '../components/RB4Page.vue'
import RB5Page from '../components/RB5Page.vue'
import RB6Page from '../components/RB6Page.vue'

const routes = [
  // Category routes
  { path: '/', name: 'Home', component: CategoryPage },
  { path: '/computers', name: 'Computers', component: ComputerPage },
  { path: '/philosophy', name: 'Philosophy', component: PhilosophyPage },
  { path: '/romance', name: 'Romance', component: RomancePage },

  // Book detail routes
  { path: '/cb1', name: 'CB1Page', component: CB1Page },
  { path: '/cb2', name: 'CB2Page', component: CB2Page },
  { path: '/cb3', name: 'CB3Page', component: CB3Page },
  { path: '/cb4', name: 'CB4Page', component: CB4Page },
  { path: '/cb5', name: 'CB5Page', component: CB5Page },
  { path: '/cb6', name: 'CB6Page', component: CB6Page },


 // Philosophy book routes
  { path: '/pb1', name: 'PB1Page', component: PB1Page },
  { path: '/pb2', name: 'PB2Page', component: PB2Page },
  { path: '/pb3', name: 'PB3Page', component: PB3Page },
  { path: '/pb4', name: 'PB4Page', component: PB4Page },
  { path: '/pb5', name: 'PB5Page', component: PB5Page },
  { path: '/pb6', name: 'PB6Page', component: PB6Page },


 // Romance book detail routes
  { path: '/rb1', component: RB1Page },
  { path: '/rb2', component: RB2Page },
  { path: '/rb3', component: RB3Page },
  { path: '/rb4', component: RB4Page },
  { path: '/rb5', component: RB5Page },
  { path: '/rb6', component: RB6Page }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
