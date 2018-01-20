import {
  combineReducers,
} from 'redux';

import products from './products';
import appStatus from './appStatus';

const reducers = combineReducers({
  appStatus,
  products,
});

export default reducers;
