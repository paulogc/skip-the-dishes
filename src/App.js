import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

import Auth from './containers/Auth';
import Cousines from './containers/Cousines';
import ProductTable from './containers/ProductTable';

const App = () => (
  <Provider store={store}>
      <Router>
          <Switch>
            <Route path="/" exact component={Auth} />
            <Route path="/cousines" exact component={Cousines} />
            <Route path="/cousine/:cousineId/products" component={ProductTable} />
        </Switch>
      </Router>
  </Provider>
);

export default App;
