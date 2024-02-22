export default interface IHttpAdapter {
  get: (url: any) => Promise<any>
  post: (url: any, data: any) => Promise<any>
}
