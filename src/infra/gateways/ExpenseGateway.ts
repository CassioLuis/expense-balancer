import IHttpAdapter from '@/infra/http/IHttpAdapter'
import env from '../env'
import IGetExpensesInput from '../../application/dto/IGetExpensesInput'
import IGetExpensesOutput from '@/application/dto/IGetExpensesOutput'

const basePath = '/expenses'

export default class ExpenseGateway {
  constructor(private readonly httpAdapter: IHttpAdapter) { }

  async getByUser (input: IGetExpensesInput): Promise<IGetExpensesOutput> {
    const { iniDate, finDate, accessToken }: IGetExpensesInput = input

    const formattedIniDate = iniDate.replace(/:/g, '%3A')
    const formattedFinDate = finDate.replace(/:/g, '%3A')

    return this.httpAdapter.get(`
      ${env.BASE_URL}${basePath}/analitic?iniDate=${formattedIniDate}&finDate=${formattedFinDate}
    `,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
