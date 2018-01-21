import TYPE_PRODUCT from '../../../constants/communicationType';
import { LOADING, UPDATED } from '../../../constants/communicationStatus';
import {
  updateProducts,
  retrievingProducts,
  RETRIEVING_PRODUCTS,
  UPDATE_PRODUCTS
} from '../actions';

const RETRIEEVING = {
  type: RETRIEVING_PRODUCTS,
  meta: {
    type: TYPE_PRODUCT,
    status: LOADING,
  },
};

const UPDATE = {
  type: UPDATE_PRODUCTS,
  meta: {
    type: TYPE_PRODUCT,
    status: UPDATED,
  },
  payload: {
    data: [],
  },
};

describe('productActions', () => {
  describe('retrievingProducts', () => {
    it('should return object with type and meta', () => {
      expect(retrievingProducts()).toEqual(RETRIEEVING);
    });
  });

  describe('updateProducts', () => {
    it('should return object with type and meta and payload', () => {
      expect(updateProducts([])).toEqual(UPDATE);
    });
  });
});
