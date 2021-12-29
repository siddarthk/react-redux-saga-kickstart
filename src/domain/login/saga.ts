import { all, takeEvery } from 'redux-saga/effects';
import { IRequestAction } from '../../common/type';
import action from './action';

function* performLogin(action: IRequestAction) {
  console.log(action)
}

function* watchLoginAction(): any {
  yield all([takeEvery(action.loginInit, performLogin)])
}

export default function* (): any {
  yield all([
    watchLoginAction()
  ])
}