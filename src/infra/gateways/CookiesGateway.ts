import ICookiesHandler from '../../helpers/ICookiesHandler'

export default class CookiesGateway {
  constructor (private readonly cookieHandler: ICookiesHandler) {}

  remove (name: string): void {
    this.cookieHandler.remove(name)
  }
  get (name: string): string | undefined {
    return this.cookieHandler.get(name)
  }

  set (name: string, cookie: string, expires: object) {
    this.cookieHandler.set(name, cookie, expires)
  }
}
