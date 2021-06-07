import { takeLatest, put} from 'redux-saga/effects'; 
import { LOAD_SEARCH, SAVE_SEARCHRESULTS, SAVE_SEARCH } from '../actions';
import { getSearchResults } from '../api/search';

export function* loadSearchWatcher() {
  yield takeLatest(LOAD_SEARCH, loadSearchFlow);
}

export function* loadSearchFlow(action) {
  const searchResults = yield getSearchResults(action.payload);
  yield put({type: SAVE_SEARCHRESULTS, payload: searchResults});
}

export function* saveSearchResultWatcher() {
  yield takeLatest(SAVE_SEARCHRESULTS, saveSearchFlow);
}

export function* saveSearchFlow(action) {
  yield action;
}

export function* saveSearchWatcher() {
  yield takeLatest(SAVE_SEARCH, saveSearchFlow);
}