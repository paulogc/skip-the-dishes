import appStatus from './appStatus';

import TYPE_PRODUCT from '../constants/communicationType';
import { UPDATED, LOADING } from '../constants/communicationStatus';
import { RETRIEVING_PRODUCTS } from '../actions/productActions';

const INITIAL_STATE = { [TYPE_PRODUCT]: LOADING };
const UPDATED_STATE = { [TYPE_PRODUCT]: UPDATED };

const ACTION = {
  type: RETRIEVING_PRODUCTS,
  meta: {
    type: TYPE_PRODUCT,
    status: UPDATED,
  }
};

describe('appStatus', () => {
  it('should return empty object when state and action is not given', () => {
    expect(appStatus()).toEqual({});
  });

  it('should return initial state when action meta is not given', () => {
    expect(appStatus(INITIAL_STATE)).toEqual(INITIAL_STATE);
  });

  it('should update state when meta is given', () => {
    expect(appStatus(INITIAL_STATE, ACTION)).toEqual(UPDATED_STATE);
  });
});
