// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import VueTheMask from 'vue-the-mask'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(VueTheMask as any)
    .use(vuetify)
    .use(router)
    .use(pinia)
}
