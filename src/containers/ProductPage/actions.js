import axios from 'axios'

import { TYPE_PRODUCT } from '../../constants/communicationType';
import { LOADING, UPDATED } from '../../constants/communicationStatus';

export const RETRIEVING_PRODUCTS = 'RETRIEVING_PRODUCTS';
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';

const PRODUCTS_URL = 'https://private-3efa8-products123.apiary-mock.com/products';

export function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    meta: {
      type: TYPE_PRODUCT,
      status: UPDATED,
      selector: 'all',
    },
    payload: {
      data: products,
    },
  };
};

export function retrievingProducts() {
  return {
    type: RETRIEVING_PRODUCTS,
    meta: {
      type: TYPE_PRODUCT,
      status: LOADING,
      selector: 'all',
    },
  };
};

export function addToCart(productID) {
  return {
    type: ADD_TO_CART,
    payload: {
      data: {
        productID,
      },
    },
  };
};

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(retrievingProducts);

    try {
      const response = await axios.get(PRODUCTS_URL);
      const products = response.data.products;
  
      dispatch(updateProducts(products));
    } catch (e) {
      console.log(e);
    }
  };
};
