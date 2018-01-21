import { updateProducts, updateImage } from '../../utils/updateProducts';
import { UPDATE_PRODUCTS } from './actions';
import { UPDATE_IMAGE } from '../ProductImage/actions';


export const INITIAL_STATE = {
  ids: [],
  content: {},
};

export default function products(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_PRODUCTS:
      return updateProducts(action.payload);
    case UPDATE_IMAGE:
      return updateImage(state, action.payload);
    default:
      return state;
  }
};
