import axios from "axios";
import IHttpAdapter from "./IHttpAdapter";

export default class AxiosAdapter implements IHttpAdapter {

  get (url: any) {
    return axios({ url, method: 'get' })
  }

  post (url: any, data: any) {
    return axios({ url, method: 'post', data })
  }
}
