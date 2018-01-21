import { ADD_TO_CART } from '../ProductPage/actions';
import { addToCart } from '../../utils/updateCart';

export const INITIAL_STATE = { ids: [], content: {} };

export default function cart(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload);
    default:
      return state;
  }
}
