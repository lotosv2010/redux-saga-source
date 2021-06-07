import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import './index.css';
import Login from './pages/Login'

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);
