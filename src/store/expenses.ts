// Utilities
import { defineStore } from 'pinia'

export const useExpensesStore = defineStore('expenses', {
  state: () => ({
    expenses: ['expense']
  }),
  getters: {
    getExpenses: (state) => state.expenses
  },
  actions: {
    setExpenses (expenses: any) {
      this.expenses = expenses
    }
  }
})
