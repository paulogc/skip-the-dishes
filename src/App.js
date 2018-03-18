import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

import Auth from './containers/Auth';
import Products from './containers/Products';

const App = () => (
  <Provider store={store}>
      <Router>
          <Switch>
            <Route path="/" exact component={Auth} />
            <Route path="/products" component={Products} />
        </Switch>
      </Router>
  </Provider>
);

export default App;
