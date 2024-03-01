import { registerPlugins } from '@/plugins'
import './assets/main.css'
import * as layouts from '@/components/layouts'
import * as zod from 'zod'
import * as lucideIcons from 'lucide-vue-next'
import { Chart as ChartJs, registerables } from 'chart.js'
import App from './App.vue'
import * as Chart from 'vue-chartjs'
import { createApp } from 'vue'
import { AuthGateway, CookiesGateway, ExpenseGateway } from './application/gateways'
import AxiosAdapter from './infra/AxiosAdapter'
import ZodSchemas from './helpers/validations/ZodSchemas'
import { useToast, useSidebar, useSummary } from '@/composable'
import AuthUseCase from './application/useCases/AuthUseCase'
import JsCookiesAdapter from './helpers/JsCookiesAdapter'
import ICookiesHandler from './helpers/ICookiesHandler'

ChartJs.register(...registerables)

const app = createApp(App)

registerPlugins(app)

const httpAdapter = new AxiosAdapter()
const cookiesAdapter: ICookiesHandler = new JsCookiesAdapter()
const cookiesGateway = new CookiesGateway(cookiesAdapter)
const authGateway = new AuthGateway(httpAdapter)
const expenseGateway = new ExpenseGateway(httpAdapter)
const authUseCase = new AuthUseCase(authGateway, cookiesGateway)

app.provide('authGateway', authGateway)
app.provide('expenseGateway', expenseGateway)
app.provide('authUseCase', authUseCase)

const zodSchemas = new ZodSchemas(zod)

app.provide('zodSchemas', zodSchemas)
app.provide('icons', lucideIcons)
app.provide('useToast', useToast)
app.provide('useSidebar', useSidebar)
app.provide('useSummary', useSummary)
app.provide('Chart', Chart)

app.component('AuthLayout', layouts.AuthLayout)
app.component('DashboardLayout', layouts.DashboardLayout)

app.mount('#app')
