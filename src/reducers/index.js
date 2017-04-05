import { combineReducers } from 'redux';
import ProductsReaducer from './products_reducer';

const rootReducer = combineReducers({
  products : ProductsReaducer
});

export default rootReducer;
