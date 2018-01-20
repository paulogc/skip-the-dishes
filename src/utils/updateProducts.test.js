import updateProducts from './updateProducts';

import { INITIAL_STATE } from '../reducers/products';

const PAYLOAD = {
  data: [
    {
      productID: 2,
    },
    {
      productID: 1,
    }
  ],
};

const DUPLICATED_PAYLOAD = {
  data: [
    {
      productID: 2,
    },
    {
      productID: 1,
    },
    {
      productID: 1,
    }
  ],
};

const HASHMAP = { ids: [ 2, 1 ], content: { 1: { productID: 1 }, 2: { productID: 2 } } };

describe('updateProducts', () => {
  it('should return object with empty ids and content when payload is not given', () => {
    expect(updateProducts()).toEqual(INITIAL_STATE);
  });

  it('should return hashmap when payload is given', () => {
    expect(updateProducts(PAYLOAD)).toEqual(HASHMAP);
  });

  it('should not return duplicated keys', () => {
    expect(updateProducts(DUPLICATED_PAYLOAD)).toEqual(HASHMAP);
  });
});
