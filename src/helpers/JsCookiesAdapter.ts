import ICookiesHandler from './ICookiesHandler'
import Cookies from 'js-cookie'

export default class JsCookiesAdapter implements ICookiesHandler {

  set (name: string, cookie: string, expires: object): void {
    Cookies.set(name, cookie, expires)
  }

  remove (name: string): void {
    Cookies.remove(name)
  }

  get (name: string): string | undefined {
    return Cookies.get(name)
  }
}
