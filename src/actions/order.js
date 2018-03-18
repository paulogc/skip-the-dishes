import axios from 'axios';

import { API_ENDPOINT, API_VERSION } from '../constants';
import {
  ORDER,
  ORDER_LOADING,
  ORDER_ERROR,
} from '../constants/order';

export function orderLoading() {
  return {
    type: ORDER_LOADING,
  };
}

export function orderLoded(payload) {
  return {
    type: ORDER,
    payload,
  };
}

export function orderError() {
  return {
    type: ORDER_ERROR,
  };
}

export function order(orders) {
  return async (dispatch) => {
    dispatch(orderLoading());
    try {
      const response = await axios.post(
        `${API_ENDPOINT}${API_VERSION}/Order`
      );

      dispatch(orderLoded(response.data));
    }
    catch (e) {
      dispatch(orderError());
    }
  }
}

export function fetchOrders() {
  return async (dispatch) => {
    dispatch(orderLoading());
    try {
      const response = await axios.post(`${API_ENDPOINT}${API_VERSION}/Order`);

      dispatch(orderLoded(response.data));
    }
    catch (e) {
      dispatch(orderError());
    }
  }
}

