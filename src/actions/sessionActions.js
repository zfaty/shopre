import axios from 'axios';
import * as types from './actionTypes';

const ROOT_URL = `http://api.shop.dev/api`;

// headers: {"X-AUTH-TOKEN":TOKEN}

export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function logInUser(credentials) {
  return function(dispatch) {
    const request = axios.post(ROOT_URL+'/login', credentials);

    return request.then(response => {
      console.log('response',response.data.api_key);
      sessionStorage.setItem('jwt', response.data.api_key);
      dispatch(loginSuccess());
    })
    .catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT}
}
