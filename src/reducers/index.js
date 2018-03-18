import {
  combineReducers,
} from 'redux';

import appStatus from './appStatus';
import authReducer from   './auth';
import productsReducer from './products';
import cousinesReducer from './cousines';

const reducers = combineReducers({
  authReducer,
  appStatus,
  productsReducer,
  cousinesReducer,
});

export default reducers;
