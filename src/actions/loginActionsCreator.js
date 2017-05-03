import * as request from '../Utils/request';
import types from '../reducers/types';
import {browserHistory} from 'react-router';



export function login(data) {
  return dispatch => {
    dispatch({
      type: types.LOGIN_START
    });
    request.req('POST', '/api-token-auth/', data)
      .then(res => {
        console.log('LOGIN SUCCESS', res.data);
        localStorage.setItem('token', res.data.token);
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: res.data
        });
        browserHistory.push('/dash');
      }).catch(err => {
      console.log('ERROR', err);
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: ''
      })
    })
  }
}
