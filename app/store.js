import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

import { rootSaga } from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the store
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// then tun the saga
sagaMiddleware.run(rootSaga);