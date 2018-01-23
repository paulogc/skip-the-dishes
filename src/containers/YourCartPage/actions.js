export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function updateQuantity({ productID, quantity }) {
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

export function removeFromCart(productID) {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      data: {
        productID,
      },
    },
  };
};
