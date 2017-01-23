require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
<<<<<<< HEAD

const createStoreWithMiddleWare = applyMiddleware()(createStore);
=======

const createStoreWithMiddleWare = applyMiddleware()(createStore);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
      <App />
    </Provider>
    , document.getElementById('app'));
})
>>>>>>> 2d9f4837bf61e9c7f44513f039742f0396714d80

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
      <App />
    </Provider>
    , document.getElementById('app'));
})