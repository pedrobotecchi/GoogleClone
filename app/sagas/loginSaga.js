import { takeLatest, put} from 'redux-saga/effects'; 
import { LOAD_USER, SAVE_USER, CHECK_USER } from '../actions';
import { checkUserInDB } from '../api/login';

export function* loadLoginWatcher() {
  yield takeLatest(LOAD_USER, loadLoginFlow);
}

export function* loadLoginFlow(action) {
  const userIsInBD = yield checkUserInDB(action.payload);
  return yield put({type: CHECK_USER, payload: userIsInBD});
}

export function* saveLoginWatcher() {
  yield takeLatest(CHECK_USER, saveLoginFlow);
}

export function* saveLoginFlow(action) {
  yield action;
}