import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { multiClientMiddleware } from 'redux-axios-middleware';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const clients = {
  default: {
    client: axios.create({
      baseURL: '/api',
      responseType: 'json'
    }),
  },
  mock: {
    client: axios.create({
      baseURL: '/mock',
      responseType: 'json'
    })
  }
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, multiClientMiddleware(clients), logger];
const middlewareEnhancers = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancers];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(rootReducer, undefined, composedEnhancers);
sagaMiddleware.run(rootSaga);

export default store;
