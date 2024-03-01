import IHttpAdapter from '@/infra/IHttpAdapter'
import env from '../../infra/env'


export default class AuthGateway {
  constructor(private readonly httpAdapter: IHttpAdapter) { }

  async signin (credentials: object) {
    const response = await this.httpAdapter.post(`${env.BASE_URL}/auth`, credentials)
    if (response.status !== 200) {
      throw new Error(response.message)
    }
    return response
  }
}
