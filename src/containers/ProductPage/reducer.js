import updateProducts from '../../utils/updateProducts';
import { UPDATE_PRODUCTS } from './actions';


export const INITIAL_STATE = {
  ids: [],
  content: {},
};

export default function products(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_PRODUCTS:
      return updateProducts(action.payload);
    default:
      return state;
  }
};
