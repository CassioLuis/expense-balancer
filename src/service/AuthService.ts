import axios from 'axios'
import env from './env'

class AuthService {
  async signin (credentials: any) {
    return axios.post(`${env.BASE_URL}/auth`, credentials)
  }
}

export default new AuthService()
