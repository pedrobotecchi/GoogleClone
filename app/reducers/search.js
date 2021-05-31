import { LOAD_SEARCH, SAVE_SEARCHRESULTS, SAVE_SEARCH } from "../actions"

const initialState = {
  search: '',
  searchResults: [],
}

export const searchReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_SEARCH: {
      return {...state, search: action.payload}
    }
    case SAVE_SEARCH : {
      return {...state, search: action.payload}
    }
    case SAVE_SEARCHRESULTS: {
      return {...state, searchResults: action.payload}
    }
    default:
      return state
  }
}

export const getResults = state => state.searchResults;