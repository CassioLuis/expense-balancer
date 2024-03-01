import { AuthGateway, CookiesGateway } from "@/application/gateways"
import AuthUseCase from "@/application/useCases/AuthUseCase"
import ICookiesHandler from "@/helpers/ICookiesHandler"
import JsCookiesAdapter from "@/helpers/JsCookiesAdapter"
import AxiosAdapter from "@/infra/AxiosAdapter"
import IHttpAdapter from "@/infra/IHttpAdapter"


test("Deve logar-se", async () => {
  const httpAdapter: IHttpAdapter = new AxiosAdapter()
  const authGateway: AuthGateway = new AuthGateway(httpAdapter)
  const jsCookiesAdapter: ICookiesHandler = new JsCookiesAdapter()
  const cookiesGateway = new CookiesGateway(jsCookiesAdapter)
  const authUseCase: AuthUseCase = new AuthUseCase(authGateway, cookiesGateway)

  const user = {
    email: 'cassiocaruzo@gmail.com',
    password: '123456'
  }

  const response = await authUseCase.signin(user)
  expect(response.status).toBe(200)
  expect(cookiesGateway.get('access-token')).toBeTruthy()
})

test("Deve deslogar-se", async () => {
  const httpAdapter: IHttpAdapter = new AxiosAdapter()
  const authGateway: AuthGateway = new AuthGateway(httpAdapter)
  const jsCookiesAdapter: ICookiesHandler = new JsCookiesAdapter()
  const cookiesGateway = new CookiesGateway(jsCookiesAdapter)
  const authUseCase: AuthUseCase = new AuthUseCase(authGateway, cookiesGateway)

  authUseCase.signout()
  expect(cookiesGateway.get('access-token')).toBeFalsy()
})
