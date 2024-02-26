import { AuthViews } from '@/views'

export default [
  {
    path: '/login',
    name: 'Login',
    component: AuthViews.Login,
    meta: { layout: 'AuthLayout' }
  },
  {
    path: '/registration',
    name: 'Register',
    component: AuthViews.Register,
    meta: { layout: 'AuthLayout' }
  },
  {
    path: '/resetPassword',
    name: 'ResetPassword',
    component: AuthViews.ResetPassword,
    meta: { layout: 'AuthLayout' }
  }
]
