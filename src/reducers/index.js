import {
  combineReducers,
} from 'redux';

import products from '../containers/ProductPage/reducer';
import cart from '../containers/CartPage/reducer';
import appStatus from './appStatus';

const reducers = combineReducers({
  appStatus,
  cart,
  products,
});

export default reducers;
