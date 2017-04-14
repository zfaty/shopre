import * as types from '../actions/actionTypes';
import initialState from './initialState';

const INITIAL_STATE = { all: [], productss: null };


export default function ProductsReaducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.FETCH_PRODUCTS:
      console.log("action",action);
      return { ...state, all: action.payload };
    default:
      return state;
  }
}
