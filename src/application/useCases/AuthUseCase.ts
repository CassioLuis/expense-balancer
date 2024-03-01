import { AuthGateway, CookiesGateway } from "../../infra/gateways";

export default class AuthUseCase {

  constructor (
    private readonly authGateway: AuthGateway,
    private readonly cookiesGateway: CookiesGateway
  ) {}

  async signin (credentials: object) {
    const response = await this.authGateway.signin(credentials)
    const expires = 1 // day
    this.cookiesGateway.set('access-token', response.data.token, { expires })
    return response
  }

  signout () {
    this.cookiesGateway.remove('access-token')
  }
}
