import ICategory from "./ICategory"

export default interface IExpense {
  id?: string | undefined
  expenseDate: string
  description: string
  category: ICategory | undefined
  expenseValue: number
  creditCard?: boolean | undefined
  quota?: number | undefined
  totalQuota?: number | undefined
}
