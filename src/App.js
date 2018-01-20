import React from 'react';
import { Provider } from 'react-redux';

import ProductPage from './containers/ProductPage';

import store from './store';

const App = () => (
  <Provider store={store}>
    <ProductPage />
  </Provider>
);

export default App;
