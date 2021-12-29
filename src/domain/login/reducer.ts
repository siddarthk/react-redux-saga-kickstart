import { createReducer } from 'deox';
import { createSelector } from 'reselect';
import action from './action';
import { ILoginState } from './model';
import { IAppState } from '../../store/rootReducer';

const initialState: ILoginState = {
  firstname: '',
  lastname: '',
  username: '',
  isAuthenticated: false
}

export default createReducer(initialState, handle => [
  handle(action.loginSuccess, (state, action: any) => {
    return {
      ...state,
      ...action.payload,
      isAuthtenticated: true
    }
  }),
  handle(action.loginFailed, (state, action: any) => {
    return {
      ...state,
      ...action.payload
    }
  })
])

const currentState = ({ session = initialState }: IAppState): ILoginState => session

export const isAuthenticated = createSelector(currentState, ({ isAuthenticated }) => isAuthenticated )