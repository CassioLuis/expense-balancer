export default interface ICookiesHandler {
  set (name: string, cookie: string, expires: object): void
  remove (name: string): void
  get (name: string): string | undefined
}
