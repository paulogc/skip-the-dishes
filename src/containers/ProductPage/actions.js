import axios from 'axios'

import TYPE_PRODUCT from '../../constants/communicationType';
import { LOADING, UPDATED } from '../../constants/communicationStatus';

export const RETRIEVING_PRODUCTS = 'RETRIEVING_PRODUCTS';
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';

const PRODUCTS_URL = 'https://private-3efa8-products123.apiary-mock.com/products';

export function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    meta: {
      type: TYPE_PRODUCT,
      status: UPDATED,
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
    },
  };
};

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(retrievingProducts);

    try {
      const products = await axios.get(PRODUCTS_URL).then((response) => {
        return response.data.products;
      });
      dispatch(updateProducts(products));
    } catch (e) {
      console.log(e);
    }
  };
};
