import { fork } from 'redux-saga/effects';
import { loadSearchWatcher, saveSearchResultWatcher, saveSearchWatcher } from './searchSaga';

export function* rootSaga() {
  yield fork(loadSearchWatcher);
  yield fork(saveSearchResultWatcher);
  yield fork(saveSearchWatcher);
}