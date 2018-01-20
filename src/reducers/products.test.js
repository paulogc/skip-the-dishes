import products, { INITIAL_STATE } from './products';

describe('products', () => {
  it('should return initial state when state is undefined', () => {
    expect(products()).toEqual(INITIAL_STATE);
  });
});
