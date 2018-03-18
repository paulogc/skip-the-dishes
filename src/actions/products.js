import axios from 'axios';

import { API_ENDPOINT, API_VERSION } from '../constants';
import {
  PRODUCTS,
  PRODUCTS_LOADING,
  PRODUCTS_ERROR,
} from '../constants/products';

export function productsLoading() {
  return {
    type: PRODUCTS_LOADING,
  };
};

export function productsError() {
  return {
    type: PRODUCTS_ERROR,
  };
};

export function productsLoaded(products) {
  return {
    type: PRODUCTS,
    products,
  };
};

export function products() {
  return async (dispatch) => {
    dispatch(productsLoading());
    try {
      const response = await axios.get(
        `${API_ENDPOINT}${API_VERSION}/Product`
      );
      if (response.status === 200 && response.statusText === 'OK') {
        dispatch(productsLoaded(response.data));
      }
    } catch (error) {
      dispatch(productsError());
    }
  };
};
