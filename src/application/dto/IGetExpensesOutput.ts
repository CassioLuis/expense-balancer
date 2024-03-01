export default interface IGetExpensesOutput {
  relevante: object
  analitic: object
  expenses: IExpense[]
}

export interface IExpense {
  id?: string | undefined
  expenseDate: string
  description: string
  category: ICategory | undefined
  expenseValue: number
  creditCard?: boolean | undefined
  quota?: number | undefined
  totalQuota?: number | undefined
}

export interface ICategory {
  id?: string | undefined
  name: string
  subCategory?: string
}
