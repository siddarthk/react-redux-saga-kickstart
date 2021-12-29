import generationActionCreator, { generationDispatchActionCreator } from '../../common/creator';

const login = generationActionCreator('login', '/login', 'post');

export default {
  loginInit: login.init,
  login: login.fetch,
  loginSuccess: login.success,
  loginFailed: login.fail
}