import React from 'react';
import { Provider } from 'mobx-react';

import App from './App';

import { store } from './mobx/store';

export default function TodoApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};