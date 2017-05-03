import initialState from './initialState';
import types from './types';


export default function loginReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        submitting: true
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        submitting: false,
        token: action.payload
      }
    default:
      return state;
  }
}
