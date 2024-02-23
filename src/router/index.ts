// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { LandingPage } from '@/views'
import AuthLayoutRoutes from './AuthLayoutRoutes/routes'
import DashboardLayoutRoutes from './DashboardLayoutRoutes/routes'

const routes = [
  ...AuthLayoutRoutes,
  ...DashboardLayoutRoutes,
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
