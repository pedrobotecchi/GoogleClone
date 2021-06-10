// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import { searchReducer } from './search';
import { loginReducer } from './login';
// Redux: Root Reducer
const rootReducer = combineReducers({
  searchReducer: searchReducer,
  loginReducer: loginReducer,
});
// Exports
export default rootReducer;