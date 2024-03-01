import IExpense from "./IExpense"

export default interface IGetExpensesOutput {
  relevante: object
  analitic: object
  expenses: IExpense[]
}
