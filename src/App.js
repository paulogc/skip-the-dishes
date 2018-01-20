import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

const App = () => (
  <Provider store={store}>
    <div>oi</div>
  </Provider>
);

export default App;
