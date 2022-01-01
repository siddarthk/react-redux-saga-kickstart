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

const session = ({ session = initialState }: IAppState): ILoginState => session
const isAuthenticated = createSelector(session, ({ isAuthenticated }) => isAuthenticated )

export const selector  = {
  isAuthenticated,
  session
}