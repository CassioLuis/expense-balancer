// Utilities
import { defineStore } from 'pinia'

export const useApplicationStore = defineStore('app', {
  state: () => ({
    darkMode: true
  }),
  getters: {
    getDarkmode: (state): boolean => state.darkMode
  },
  actions: {
    setTheme () {
      this.darkMode = !this.darkMode
    }
  }
})
