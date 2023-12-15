// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  defaults: {
    VBtn: {
      elevation: '1',
      class: [
        'rounded-md',
        'tracking-normal',
        'capitalize'
      ],
      variant: {
        flat: {
          elevation: '5',
          class: [
            'shadow-sm',
            'bg-white'
          ]
        }
      }
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
