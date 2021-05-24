export const LOAD_SEARCH = 'LOAD_SEARCH';
export const SAVE_SEARCH = 'SAVE_SEARCH';

export const saveSearch = (search) => ({
  type: SAVE_SEARCH,
  payload: search,
})

export const loadSearch = (search) => ({
  type: LOAD_SEARCH,
  payload: search,
})