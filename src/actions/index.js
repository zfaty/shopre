import axios from 'axios';
import * as types from './actionTypes';

const PUBLIC_TOKEN = '$2y$13$IknDLKh01Hs5WDp8NXPODOG3JpUxKvfuL6WCvQKE59MMeVD9i2wr2';

var TOKEN = sessionStorage.jwt;
if(!sessionStorage.jwt){
  var TOKEN = PUBLIC_TOKEN;
}
const ROOT_URL = `http://api.shop.dev/api`;


var instance = axios.create({
  baseURL: ROOT_URL,
  headers: {"X-AUTH-TOKEN":TOKEN}
});

export function fetchProduct(response) {
  return {type: types.FETCH_PRODUCTS, payload :response.data }
}


export function fetchProductAsync(term) {
    console.log('tocken',sessionStorage.jwt);
    console.log('Action fetchProduct.....',term);

  return function(dispatch) {
    const request = instance.get('/users');

    return request.then(response => {
      dispatch(fetchProduct(response));
    })
    .catch(error => {
      throw(error);
    });
  };
}
