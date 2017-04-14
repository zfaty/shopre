import * as types from '../actions/actionTypes';

const INITIAL_STATE = {};

export default function accountReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
  case types.REGISTER_SUCCESS:
    return action;
  default:
    return state;
  }
}
