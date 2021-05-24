import { fork } from 'redux-saga/effects';
import { loadSearchWatcher, saveSearchWatcher } from './searchSaga';

export function* rootSaga() {
  yield fork(loadSearchWatcher);
  yield fork(saveSearchWatcher);
}