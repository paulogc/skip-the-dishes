import {
  PRODUCTS,
  PRODUCTS_LOADING,
  PRODUCTS_ERROR,
} from '../constants/products';

const INITIAL_STATE = {
  loading: false,
  error: false,
  products: [],
}

export default function productsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case PRODUCTS_LOADING:
      return { ...state, loading: true };
    case PRODUCTS:
      return { ...state, loading: false, products: action.products };
    case PRODUCTS_ERROR:
      return { ...state, loading: false, error: true }
    default:
      return state;
  }
}
