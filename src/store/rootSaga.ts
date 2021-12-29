import { all } from "redux-saga/effects";
import { loginSaga } from '../domain/login';

export default function* ():any {
  yield all([
    loginSaga()
  ])
}
