import { AuthGateway, CookiesGateway, ExpenseGateway } from "@/infra/gateways"
import AuthUseCase from "@/application/useCases/AuthUseCase"
import ExpensesUseCase from "@/application/useCases/ExpensesUseCase"
import ICookiesHandler from "@/helpers/ICookiesHandler"
import JsCookiesAdapter from "@/helpers/JsCookiesAdapter"
import AxiosAdapter from "@/infra/http/AxiosAdapter"
import IHttpAdapter from "@/infra/http/IHttpAdapter"
import IAnalitics from "@/application/domain/IAnalitics"


test("Deve buscar despesas", async () => {
  const httpAdapter: IHttpAdapter = new AxiosAdapter()
  const authGateway: AuthGateway = new AuthGateway(httpAdapter)
  const jsCookiesAdapter: ICookiesHandler = new JsCookiesAdapter()
  const cookiesGateway = new CookiesGateway(jsCookiesAdapter)
  const authUseCase: AuthUseCase = new AuthUseCase(authGateway, cookiesGateway)
  const expenseGateway: ExpenseGateway = new ExpenseGateway(httpAdapter)
  const expensesUseCase: ExpensesUseCase = new ExpensesUseCase(expenseGateway, cookiesGateway)

  const user = {
    email: 'cassiocaruzo@gmail.com',
    password: '123456'
  }

  const response = await authUseCase.signin(user)

  const iniDate = '2024-01-01T12:00:00Z'
  const finDate = '2024-01-31T12:00:00Z'

  const analicts: IAnalitics = await expensesUseCase.getAnalitics(iniDate, finDate)

  console.log(analicts, response)

  // expect(response.status).toBe(200)
  // expect(cookiesGateway.get('access-token')).toBeTruthy()
})
