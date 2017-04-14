import axios from 'axios';

const TOKEN = '$2y$13$IknDLKh01Hs5WDp8NXPODOG3JpUxKvfuL6WCvQKE59MMeVD9i2wr2';
const ROOT_URL = `http://api.shop.dev/api`;


var instance = axios.create({
  baseURL: ROOT_URL,
  headers: {"X-AUTH-TOKEN":TOKEN}
});

export default class SessionApi {
  static login(credentials) {
    const request = axios.post(ROOT_URL+'/login', credentials);
    return request.then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  }
};
