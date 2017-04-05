import { FETCH_PRODUCTS } from '../actions/index';

const INITIAL_STATE = { all: [], product: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PRODUCTS:
    return { ...state, all: action.payload };
  default:
    return state;
  }
}
