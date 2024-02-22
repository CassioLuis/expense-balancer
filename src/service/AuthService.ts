import IHttpAdapter from '@/infra/IHttpAdapter'
import env from './env'

export default class AuthService {
  constructor(private readonly httpAdapter: IHttpAdapter) {
  }

  async signin (credentials: any) {
    console.log(env)
    return this.httpAdapter.post(`${env.BASE_URL}/auth`, credentials)
  }
}
