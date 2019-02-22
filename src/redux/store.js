import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  applyMiddleware(logger,promiseMiddleware)
);

export default store;