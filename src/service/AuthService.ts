import IHttpAdapter from '@/infra/IHttpAdapter'
import env from './env'

export default class AuthService {
  constructor(private readonly httpAdapter: IHttpAdapter) { }

  async signin (credentials: any) {
    const response = await this.httpAdapter.post(`${env.BASE_URL}/auth`, credentials)
    if (response.status !== 200) {
      throw new Error(response.message)
    }
    return response
  }
}
