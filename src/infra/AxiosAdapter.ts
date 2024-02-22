import axios from 'axios'
import IHttpAdapter from './IHttpAdapter'

export default class AxiosAdapter implements IHttpAdapter {

  async get (url: string, params: any) {
    return await axios.get(url, params)
  }

  async post (url: string, data: object) {
    return await axios.post(url, data)
  }
}
