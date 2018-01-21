import { UPDATE_PRODUCTS } from '../actions';
import updateProducts from '../../../utils/updateProducts';
import products, { INITIAL_STATE } from '../reducer';

const ACTION = {
  type: UPDATE_PRODUCTS,
  payload: {
    data: [
      {
        productID: 2,
      },
      {
        productID: 1,
      }
    ],
  },
};

describe('products', () => {
  it('should return initial state when state is undefined and action is not given', () => {
    expect(products(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should update state when action is UPDATE_PRODUCTS', () => {
    expect(products(INITIAL_STATE, ACTION)).toEqual(updateProducts(ACTION.payload));
  });
});
