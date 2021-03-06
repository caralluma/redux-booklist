import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App/App';
import reducers from './reducers';

const rootEl = document.getElementById('app');
const createStoreWithMiddleware = applyMiddleware()(createStore);

const render = () => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>,
    rootEl
  );
};

render();
