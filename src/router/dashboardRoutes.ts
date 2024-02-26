import { DashboardViews } from '@/views'

export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardViews.Dashboard,
    meta: {
      layout: 'DashboardLayout',
      requiresAuth: true,
      svg: {
        paths: ['M3 3v18h18', 'M18 17V9', 'M13 17V5', 'M8 17v-3'],
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        class: 'lucide lucide-bar-chart-3'
      },
      menuGroup: 'Home'
    }
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: DashboardViews.Category,
    meta: {
      layout: 'DashboardLayout',
      requiresAuth: true,
      svg: {
        paths: ['m3 17 2 2 4-4', 'm3 7 2 2 4-4', 'M13 6h8', 'M13 12h8', 'M13 18h8'],
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        class: 'lucide lucide-list-checks'
      },
      menuGroup: 'Gestão'
    }
  },
  {
    path: '/despesas',
    name: 'Despesas',
    component: DashboardViews.Expense,
    meta: {
      layout: 'DashboardLayout',
      requiresAuth: true,
      svg: {
        paths: [
          'M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4',
          'M2 6h4',
          'M2 10h4',
          'M2 14h4',
          'M2 18h4',
          'M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z'
        ],
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        class: 'lucide lucide-notebook-pen'
      },
      menuGroup: 'Gestão'
    }
  },
]
