export const LOAD_SEARCH = 'LOAD_SEARCH';
export const SAVE_SEARCH = 'SAVE_SEARCH';
export const SAVE_SEARCHRESULTS = 'SAVE_SEARCHRESULTS';

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
