import { fork } from 'redux-saga/effects';
import { loadSearchWatcher, saveSearchResultWatcher, saveSearchWatcher } from './searchSaga';
import { loadLoginWatcher, saveLoginWatcher } from './loginSaga';

export function* rootSaga() {
  yield fork(loadSearchWatcher);
  yield fork(saveSearchResultWatcher);
  yield fork(saveSearchWatcher);
  yield fork(loadLoginWatcher);
  yield fork(saveLoginWatcher);
}