import { createRouter, createWebHistory } from 'vue-router'
import { LandingPage } from '@/views'
import AuthLayoutRoutes from './authRoutes'
import DashboardLayoutRoutes from './dashboardRoutes'
import { useToast } from '@/composable'
import { CookiesGateway } from '@/infra/gateways'
import JsCookiesAdapter from '@/helpers/JsCookiesAdapter'

const { toast } = useToast

const cookiesAdapter = new JsCookiesAdapter()
const cookiesGateway = new CookiesGateway(cookiesAdapter)

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

router.beforeEach(to => {
  const token = cookiesGateway.get('access-token')

  if (to.meta.requiresAuth && !token) {
    toast('Sessão Expirada. Efetue o login!')
    return { path: '/login' }
  }
  if (to.name === 'Login' && token) return { path: '/dashboard' }
})

export default router
