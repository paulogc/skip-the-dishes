import {
  combineReducers,
} from 'redux';

import products from '../containers/ProductPage/reducer';
import cart from '../containers/YourCartPage/reducer';
import appStatus from './appStatus';

const reducers = combineReducers({
  appStatus,
  cart,
  products,
});

export default reducers;
