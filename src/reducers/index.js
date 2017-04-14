import { combineReducers } from 'redux';
import ProductsReaducer from './products_reducer';
import Session from './sessionReducer';
import accountReducer from './account_reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  products : ProductsReaducer,
  session  : Session,
  account: accountReducer,
  form : formReducer
});

export default rootReducer;
