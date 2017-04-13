import initialState from './initialState';
import types from './types';


export default function studentReducer(state = initialState.hotels, action) {
  switch (action.type) {
    case types.GET_HOTELS_SUCCESS:
      return [
        ...state,
        ...action.payload
      ]
    default:
      return state;
  }
}
