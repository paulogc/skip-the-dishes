import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

import Auth from './containers/Auth';
import Cousines from './containers/Cousines';
import Products from './containers/Products';
import Cart from './containers/Cart';

const App = () => (
  <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Auth} />
            <Route path="/cousines" exact component={Cousines} />
            <Route path="/cousine/:cousineId/products" component={Products} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
  </Provider>
);

export default App;
