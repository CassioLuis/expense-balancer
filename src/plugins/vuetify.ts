// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const theme: any = localStorage.getItem('theme')

export default createVuetify({
  defaults: {
    VBtn: {
      elevation: '0',
      class: [
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
      elevation: '0',
      class: [
        'rounded-md',
        'transition-none'
      ]
    },
    VList: {
      density: 'compact',
      elevation: '0'
    },
    VMenu: {
      location: 'bottom',
      elevation: '0'
    },
    VNavigationDrawer: {
      floating: true
    },
    VAppBar: {
      flat: true
    }
  },
  theme: {
    defaultTheme: theme || 'dark',
    themes: {
      light: {
        colors: {
          background: 'rgb(244, 244, 245)',
          // surface: '#FFFFFF',
          // 'surface-bright': '#FFFFFF',
          // 'surface-light': '#EEEEEE',
          // 'surface-variant': '#424242',
          // 'on-surface-variant': '#EEEEEE',
          // primary: '#1867C0',
          // 'primary-darken-1': '#1F5592',
          // secondary: '#48A9A6',
          // 'secondary-darken-1': '#018786',
          // error: '#B00020',
          // info: '#2196F3',
          // success: '#4CAF50',
          // warning: '#FB8C00',
        },
        variables: {
          // 'border-color': 'rgb(228, 228, 231)',
          // 'border-opacity': 0.12,
          //   'high-emphasis-opacity': 0.87,
          //   'medium-emphasis-opacity': 0.60,
          //   'disabled-opacity': 0.38,
          //   'idle-opacity': 0.04,
          //   'hover-opacity': 0.04,
          //   'focus-opacity': 0.12,
          //   'selected-opacity': 0.08,
          //   'activated-opacity': 0.12,
          //   'pressed-opacity': 0.12,
          //   'dragged-opacity': 0.08,
          //   'theme-kbd': '#212529',
          //   'theme-on-kbd': '#FFFFFF',
          //   'theme-code': '#F5F5F5',
          //   'theme-on-code': '#000000',
        }
      }
    }
  }
})
