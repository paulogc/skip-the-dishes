import productSource from 'sources/productSources';

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
    type: LOADING_PRODUCTS,
    meta: {
      status: LOADING,
    },
  }
};

export function featchProducts() {
  return async (dispatch) => {
    dispatch(loadingProducts);

    try {
      const products = await productSource.getProducts();

      dispatch(updateProducts(products));
      
    } catch (e) {
      console.log(e);
    }
  };
};
