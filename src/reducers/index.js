import {
  combineReducers,
} from 'redux';

import products from '../containers/ProductPage/reducer';
import appStatus from './appStatus';

const reducers = combineReducers({
  appStatus,
  products,
});

export default reducers;
