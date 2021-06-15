export const LOAD_SEARCH = 'LOAD_SEARCH';
export const SAVE_SEARCH = 'SAVE_SEARCH';
export const SAVE_SEARCHRESULTS = 'SAVE_SEARCHRESULTS';
export const LOAD_USER = 'LOAD_USER';
export const CHECK_USER = 'CHECK_USER';

export const saveSearchResults = (searchResults) => ({
  type: SAVE_SEARCHRESULTS,
  payload: searchResults,
})

export const saveSearch = (search) => ({
  type: SAVE_SEARCHRESULTS,
  payload: search,
})

export const loadSearch = (search) => ({
  type: LOAD_SEARCH,
  payload: search,
})

export const checkLogin = (user) => ({
  type: LOAD_USER,
  payload: user
})

export const checkUser = (isInDB) => ({
  type: CHECK_USER,
  payload: isInDB
})