import { LOAD_USER, SAVE_USER, CHECK_USER } from "../actions"

const initialState = {
  user: {},
  userIsInBD : false,
}

export const loginReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_USER: {
      return {...state, user: action.payload}
    }
    case SAVE_USER : {
      return state;
    }
    case CHECK_USER : {
      return {userIsInBD: action.payload}
    }
    default:
      return state;
  }
}

export const getUser = (state = initialState) => state.user;
export const checkUser = (state = initialState) => state.userIsInBD;