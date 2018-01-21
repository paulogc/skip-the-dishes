import { ADD_TO_CART } from '../ProductPage/actions';
import { UPDATE_QUANTITY } from './actions';
import { addToCart, updateQuantity } from '../../utils/updateCart';

export const INITIAL_STATE = { ids: [], content: {} };

export default function cart(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload);
    case UPDATE_QUANTITY:
      return updateQuantity(state, action.paylod)
    default:
      return state;
  }
}
