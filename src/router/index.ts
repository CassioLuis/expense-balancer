// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { LandingPage } from '@/views'
import AuthLayoutRoutes from './AuthLayoutRoutes/routes'

const routes = [
  ...AuthLayoutRoutes,
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
