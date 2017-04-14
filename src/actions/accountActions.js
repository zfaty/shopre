import axios from 'axios';
import * as types from './actionTypes';

const ROOT_URL = `http://api.shop.dev/api`;

// headers: {"X-AUTH-TOKEN":TOKEN}

var instance = axios.create({
  baseURL: ROOT_URL
});

export function registerSuccess() {
  return {type: types.REGISTER_SUCCESS}
}

export function registrationAsync(data) {
  return function(dispatch) {
    const request = instance.post('/users/new', data);

    return request.then(response => {
      dispatch(registerSuccess(response));
    })
    .catch(error => {
      throw(error);
    });
  };
}
