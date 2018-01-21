export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export function updateQuantity(productID, quantity) {
  return {
    type: UPDATE_QUANTITY,
    payload: {
      data: {
        productID,
        quantity,
      },
    },
  };
};
