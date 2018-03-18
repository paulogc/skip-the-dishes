import {
  combineReducers,
} from 'redux';

import appStatus from './appStatus';
import authReducer from   './auth';
import productsReducer from './products';
import cousinesReducer from './cousines';
import cartReducer from './cart';

const reducers = combineReducers({
  authReducer,
  appStatus,
  productsReducer,
  cousinesReducer,
  cartReducer,
});

export default reducers;
