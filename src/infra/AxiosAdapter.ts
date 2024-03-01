import axios from 'axios'
import IHttpAdapter from './IHttpAdapter'

export default class AxiosAdapter implements IHttpAdapter {

  async get (url: string, body: any) {
    try {
      return await axios.get(url, body)
    } catch ({ response }: any) {
      return {
        status: response.status,
        message: response.data.message
      }
    }
  }

  async post (url: string, body: object) {
    try {
      return await axios.post(url, body)
    } catch ({ response }: any) {
      return {
        status: response.status,
        message: response.data.message
      }
    }
  }
}
