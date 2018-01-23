import { ADD_TO_CART } from '../ProductPage/actions';
import { UPDATE_QUANTITY, REMOVE_FROM_CART } from './actions';
import { addToCart, updateQuantity, removeFromCart } from '../../utils/updateCart';

export const INITIAL_STATE = { ids: [], content: {} };

export default function cart(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload);
    case UPDATE_QUANTITY:
      return updateQuantity(state, action.payload);
    case REMOVE_FROM_CART:
      return removeFromCart(state, action.payload);
    default:
      return state;
  }
}
