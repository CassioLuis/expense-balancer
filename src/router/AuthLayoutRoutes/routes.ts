import { Login, Register, ResetPassword } from '@/views'

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: 'AuthLayout' }
  },
  {
    path: '/registration',
    name: 'Register',
    component: Register,
    meta: { layout: 'AuthLayout' }
  },
  {
    path: '/resetPassword',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: { layout: 'AuthLayout' }
  }
]
