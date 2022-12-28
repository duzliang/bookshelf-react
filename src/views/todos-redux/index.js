import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './redux/index'

import App from './App';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default function TodoApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};