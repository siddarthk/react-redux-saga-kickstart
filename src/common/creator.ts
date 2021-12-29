import { createActionCreator } from 'deox';
import { IActionCreator, IRequestAction, IRequestPayload, IDispatchActionCreator } from './type';

const generationActionCreator = (action: string, url: string, method = 'get', client = 'default') => {
  const actionName = action.toUpperCase();

  const FETCH_INIT = `FETCH_${actionName}_INIT`;
  const FETCH = `FETCH_${actionName}`;
  const FETCH_SUCCESS = `FETCH_${actionName}_SUCCESS`;
  const FETCH_FAIL = `FETCH_${actionName}_FAIL`;
  const RESET = `RESET_${actionName}`;

  const fetch = createActionCreator(FETCH, resolve => (params: IRequestAction) => resolve(params));

  const derviceFromParams = (payload: IRequestPayload) => {
    let path = payload.path ? url + '/' + payload.path : url;
    path = payload.query ? path + '?' + payload.query : path;
    return {
      client: client,
      request: { url: path, method: method },
      data: payload.data
    }
  }

  const actions: IActionCreator = {
    init: createActionCreator(FETCH_INIT, resolve => (params: any) => resolve(params)),
    fetch: (payload: IRequestPayload) => fetch(derviceFromParams(payload)),
    success: createActionCreator(FETCH_SUCCESS, resolve => (params: any) => resolve(params)),
    fail: createActionCreator(FETCH_FAIL, resolve => (params: any) => resolve(params)),
    reset: createActionCreator(RESET, resolve => (params: any) => resolve(params))
  }
  return actions;
}

const generationDispatchActionCreator  = (action: string) => {
  const actionName = action.toUpperCase();
  const DISPATCH_ACTION =  `DISPATCH_${actionName}`;

  const actions: IDispatchActionCreator = {
    action: createActionCreator(DISPATCH_ACTION, resolve => (params: any) => resolve(params))
  }
  
  return actions.action;
}
export default generationActionCreator;

export {
  generationDispatchActionCreator
}