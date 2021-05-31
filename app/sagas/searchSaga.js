import { takeLatest, put, call, get } from 'redux-saga/effects'; 
import { LOAD_SEARCH, SAVE_SEARCHRESULTS, SAVE_SEARCH } from '../actions';
import { getSearchResults } from '../api/search';

export function* loadSearchWatcher() {
  yield takeLatest(LOAD_SEARCH, loadSearchFlow);
}

export function* loadSearchFlow(action) {
  const searchResults = yield getSearchResults(action.payload);
  yield put({type: SAVE_SEARCHRESULTS, payload: searchResults});
}

export function* saveSearchResultWatcher(action) {
  yield takeLatest(SAVE_SEARCHRESULTS, saveSearchFlow);
}

export function* saveSearchFlow(action) {
  return action;
}

export function* saveSearchWatcher() {
  yield takeLatest(SAVE_SEARCH, saveSearchFlow);
}