// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  defaults: {
    VBtn: {
      elevation: '0',
      class: [
        'rounded-md',
        'tracking-normal',
        'normal-case'
      ]
    },
    VCheckbox: {
      density: 'compact',
    },
    VTextField: {
      variant: 'outlined',
      density: 'compact'
    },
    VSelect: {
      variant: 'outlined',
      density: 'compact'
    },
    VCard: {
      elevation: '1',
      class: [
        'rounded-md'
      ]
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6'
        }
      }
    }
  }
})
