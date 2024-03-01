import IHttpAdapter from '@/infra/IHttpAdapter'
import env from './env'
import Cookies from 'js-cookie'

const basePath = '/expenses'
const accessToken = Cookies.get('access-token')

export default class ExepenseService {
  constructor(private readonly httpAdapter: IHttpAdapter) { }

  async getByUser () {
    return this.httpAdapter.get(`${env.BASE_URL}${basePath}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })
  }
}
