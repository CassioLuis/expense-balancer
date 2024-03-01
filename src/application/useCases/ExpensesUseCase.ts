import { CookiesGateway, ExpenseGateway } from '../../infra/gateways'
import IAnalitics from '../domain/IAnalitics'

export default class ExpensesUseCase {

  constructor(
    private readonly expenseGateway: ExpenseGateway,
    private readonly cookiesGateway: CookiesGateway
  ) { }

  async getAnalitics (iniDate: string, finDate: string): Promise<IAnalitics> {
    const accessToken: string = this.cookiesGateway.get('access-token') ?? ''
    return this.expenseGateway.getByUser({ iniDate, finDate, accessToken })
  }
}
