import * as request from '../Utils/request';
import types from '../reducers/types';


function getAllHotelsSuccess(hotels) {
  return({
    type: types.GET_HOTELS_SUCCESS,
    payload: hotels
  })
}

export function getAllHotels() {
  return dispatch => {
    request.req('GET', '/hotel_api/')
      .then(res => {
        dispatch({
          type: types.GET_HOTELS_SUCCESS,
          payload: res.data
        });
      }).catch(err => {
        console.log('ERROR', err);
    })
  }
}


