// Plugins
import { registerPlugins } from '@/plugins'
import './assets/main.css'
import * as layouts from '@/layouts'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
app.component('AuthLayout', layouts.AuthLayout)
app.component('DashboardLayout', layouts.DashboardLayout)
