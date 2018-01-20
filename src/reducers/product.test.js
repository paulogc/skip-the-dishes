import product, { INITIAL_STATE } from './product';

describe('products', () => {
  it('should return initial state when state is undefined', () => {
    expect(product()).toEqual(INITIAL_STATE);
  });
});
