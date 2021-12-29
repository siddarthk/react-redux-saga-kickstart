import { combineReducers } from "redux";
import { session, ILoginState } from '../domain/login';

export interface IAppState {
  session: ILoginState
}

export default  combineReducers<IAppState>({
  session
});