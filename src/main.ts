// Plugins
import { registerPlugins } from '@/plugins'
import './assets/main.css'
import * as layouts from '@/layouts'
import * as zod from 'zod'
import * as LucideIcons from 'lucide-vue-next'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { AuthService } from './service'
import AxiosAdapter from './infra/AxiosAdapter'
import ZodSchemas from './helpers/validations/ZodSchemas'

const app = createApp(App)

registerPlugins(app)

const httpAdapter = new AxiosAdapter()
const authService = new AuthService(httpAdapter)
const zodSchemas = new ZodSchemas(zod)

app.provide('authService', authService)
app.provide('zodSchemas', zodSchemas)
app.provide('icons', LucideIcons)

app.mount('#app')
app.component('AuthLayout', layouts.AuthLayout)
app.component('DashboardLayout', layouts.DashboardLayout)
