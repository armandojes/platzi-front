import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './app/reducer.js';

var preloaded_state = window.__STATE__;
preloaded_state = JSON.parse(preloaded_state);

//creano store
var store = createStore(
  reducer,
  preloaded_state,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk,
      logger
    )
  )
);


hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('render_target')
)
