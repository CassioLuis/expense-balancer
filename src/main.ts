// Plugins
import { registerPlugins } from '@/plugins'
import './assets/main.css'
import * as layouts from '@/layouts'
import * as zod from 'zod'
import * as lucideIcons from 'lucide-vue-next'
import { Chart as ChartJs, registerables } from 'chart.js'

// Components
import App from './App.vue'
import * as Chart from 'vue-chartjs'

// Composables
import { createApp } from 'vue'
import { AuthService } from './service'
import AxiosAdapter from './infra/AxiosAdapter'
import ZodSchemas from './helpers/validations/ZodSchemas'
import { useToast, useSidebar, useSummary } from '@/composable'

ChartJs.register(...registerables)

const app = createApp(App)

registerPlugins(app)

const httpAdapter = new AxiosAdapter()
const authService = new AuthService(httpAdapter)
const zodSchemas = new ZodSchemas(zod)

app.provide('authService', authService)
app.provide('zodSchemas', zodSchemas)
app.provide('icons', lucideIcons)
app.provide('useToast', useToast)
app.provide('useSidebar', useSidebar)
app.provide('useSummary', useSummary)
app.provide('Chart', Chart)

app.component('AuthLayout', layouts.AuthLayout)
app.component('DashboardLayout', layouts.DashboardLayout)

app.mount('#app')
