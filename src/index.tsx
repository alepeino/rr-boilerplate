import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/client';

const store = configureStore();

const render = () => {
  const App = require('./app').default;
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./app', render);
}
