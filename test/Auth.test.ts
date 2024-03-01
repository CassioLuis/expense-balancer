import AxiosAdapter from "@/infra/AxiosAdapter"
import IHttpAdapter from "@/infra/IHttpAdapter"
import { AuthService } from "@/service"

// function sleep (time: number) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true)
//     }, time)
//   })
// }

test("Deve logar-se", async () => {
  const httpAdapter: IHttpAdapter = new AxiosAdapter()
  const authService: AuthService = new AuthService(httpAdapter)
  const user = {
    email: 'cassiocaruzo@gmail.com',
    password: '123456'
  }
  const response = await authService.signin(user)
  expect(response.status).toBe(200)
})

test("Não deve logar-se", async () => {
  const httpAdapter: IHttpAdapter = new AxiosAdapter()
  const authService: AuthService = new AuthService(httpAdapter)
  const user = {
    email: 'cassiocaruzo@gmail.com',
    password: 'senha_invalida'
  }
  const response = await authService.signin(user)
  console.log(response)
  expect(response).rejects.toThrow(new Error('Invalid user'))
})
