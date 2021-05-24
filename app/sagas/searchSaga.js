import { takeLatest, put, call, get } from 'redux-saga/effects'; 
import { LOAD_SEARCH, SAVE_SEARCH } from '../actions';
import { getSearchResults } from '../api/search';

export function* loadSearchWatcher() {
  yield takeLatest(LOAD_SEARCH, loadSearchFlow);
}

export function* loadSearchFlow(action) {
  const searchResults = yield getSearchResults(action.payload);
  yield put({type: SAVE_SEARCH, payload: searchResults});
}

export function* saveSearchWatcher() {
  yield takeLatest(SAVE_SEARCH, saveSearchFlow);
}

export function* saveSearchFlow(action) {
  return action;
}