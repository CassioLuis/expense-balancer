import { Login, Register } from '@/views'

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
  }
]
