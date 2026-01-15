import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/views/LandingPage.vue'
import ServicesPage from '@/views/ServicesPage.vue'
import PricingPage from '@/views/PricingPage.vue'
import AboutPage from '@/views/AboutPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/services', component: ServicesPage },
  { path: '/pricing', component: PricingPage },
  { path: '/about', component: AboutPage }
]

export default createRouter({
  history: createWebHistory('/collegetask/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
