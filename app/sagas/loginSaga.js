import { takeLatest, put} from 'redux-saga/effects'; 
import { LOAD_USER, SAVE_USER } from '../actions';
import { searchUserInDB } from '../api/login';

export function* loadLoginWatcher() {
  yield takeLatest(LOAD_USER, loadLoginFlow);
}

export function* loadLoginFlow(action) {
  const searchResults = yield getSearchResults(action.payloaSd);
  yield put({type: LOAD_USER, payload: searchResults});
}

export function* saveLoginWatcher() {
  yield takeLatest(SAVE_USER, saveLoginFlow);
}

export function* saveLoginFlow(action) {
  yield action;
}