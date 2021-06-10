import { LOAD_USER, SAVE_USER } from "../actions"

const initialState = {
  user: {},
}

export const loginReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_USER: {
      return {...state, user: action.payload}
    }
    case SAVE_USER : {
      return state;
    }
    default:
      return state;
  }
}

export const getUser = state => state.user;