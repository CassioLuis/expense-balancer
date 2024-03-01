import axios from 'axios'
import IHttpAdapter from './IHttpAdapter'

export default class AxiosAdapter implements IHttpAdapter {

  async get (url: string, body: any) {
    try {
      const { data, status } = await axios.get(url, body)
      return {
        data,
        status
      }
    } catch ({ response }: any) {
      return {
        status: response.status,
        message: response.data.message
      }
    }
  }

  async post (url: string, body: object) {
    try {
      const { data, status } = await axios.post(url, body)
      return {
        data,
        status
      }
    } catch ({ response }: any) {
      return {
        status: response.status,
        message: response.data.message
      }
    }
  }
}
