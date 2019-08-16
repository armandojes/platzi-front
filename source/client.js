import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('render_target')
)
