import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store';

import NavBar from './containers/NavBar';
import ProductPage from './containers/ProductPage';
import TopProductsPage from './containers/TopProductsPage';
import YourCartPage from './containers/YourCartPage';

const App = () => (
  <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={ProductPage}/>
          <Route path="/top-5" component={TopProductsPage}/>
          <Route path="/cart" component={YourCartPage}/>
        </div>
    </Router>
  </Provider>
);

export default App;
