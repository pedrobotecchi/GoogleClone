// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import { searchReducer } from './search';
// Redux: Root Reducer
const rootReducer = combineReducers({
  searchReducer: searchReducer
});
// Exports
export default rootReducer;