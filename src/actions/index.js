import axios from 'axios';

// const API_KEY = 'f0d096918dd0857882cd6ddadd01ec3c';
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const data = [
  {title: 'Javascript V1' ,pages: 100},
  {title: 'PHP Cours',pages: 8},
  {title: 'Harry Potter',pages: 50},
  {title: 'My Book',pages: 20}
];
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export function fetchProduct(term) {
  console.log('Action fetchProduct',term);
  // const url = `${ROOT_URL}&q=${city},us`;
  // const request = axios.get(url);

  return {
    type: FETCH_PRODUCTS,
    payload: data
  };
}
