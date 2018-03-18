import {
  ORDER,
  ORDER_LOADING,
  ORDER_ERROR,
} from '../constants/order';

const INITIAL_STATE = {
  loading: false,
  error: false,
  order: {},
};

export default function orderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ORDER:
      return { ...state, loading: false, order: action.paylod };
    case ORDER_LOADING:
      return { ...state, loading: true };
    case ORDER_ERROR:
      return { ...state, loading: false, error: true }
    default:
      return state;
  }
}
