import { DashboardViews } from '@/views'
import { defineComponent, inject } from 'vue'


const icons = defineComponent({
  setup () {
    const { BarChart3, ListChecks, NotebookPen }: any = inject('icons')
    return {
      BarChart3, ListChecks, NotebookPen
    }
  }
})


export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardViews.Dashboard,
    meta: {
      layout: 'DashboardLayout',
      icon: icons.BarChart3
    }
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: DashboardViews.Category,
    meta: {
      layout: 'DashboardLayout',
      icon: icons.ListChecks
    }
  },
  {
    path: '/depesas',
    name: 'Despesas',
    component: DashboardViews.Expense,
    meta: {
      layout: 'DashboardLayout',
      icon: icons.NotebookPen
    }
  },
]
