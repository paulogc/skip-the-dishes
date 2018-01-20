import getProducts from '../sources/productSource';

export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const LOADING_PRODUCTS = 'LOADING_PRODUCTS';
export const LOADING = 'loading';

export function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    payload: {
      data: products,
    },
  }
};

export function loadingProducts(products) {
  return {
    meta: {
      type: LOADING_PRODUCTS,
      selector: 'products',
      status: LOADING,
    },
  }
};

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(loadingProducts);

    try {
      console.log('actions');
      const products = await getProducts();
      console.log(products);
      dispatch(updateProducts(products));

    } catch (e) {
      console.log(e);
    }
  };
};
