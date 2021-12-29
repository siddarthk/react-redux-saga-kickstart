export interface IRequest {
  url: string,
  method?: string,
  data?: any,
  params?: any
}

export interface IRequestAction {
  request: IRequest,
  client?: string
}

export interface IActionCreator {
  init: any,
  fetch: any,
  success: any,
  fail: any,
  reset: any
}

export interface IRequestPayload {
  data?: any,
  path?: string,
  query?: string
}

export interface IDispatchActionCreator {
  action: any
}