import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import store from './store';

import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root'),
);
