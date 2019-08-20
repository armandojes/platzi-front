import React from 'react';
import { StaticRouter } from "react-router";
import { renderToStaticMarkup } from 'react-dom/server'
import Markup from './Markup';
import App from './app/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import http from 'http'
import reducer from './app/reducer'
import renderToStringAsync from 'react-fetch-ssr';


async function handleRequest(request, response){

  //create store
  const store = createStore(
    reducer,
    applyMiddleware(ReduxThunk)
  );

  const context = {};
  const contentRendered = await renderToStringAsync(
    <Provider store={store}>
      <StaticRouter context={context} location={request.url}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const state = store.getState();
  const html = renderToStaticMarkup(<Markup content={contentRendered} state={state}/>);
  response.write(html);
  response.end();
  console.log(request.url)
}


const server = http.createServer(handleRequest);
server.listen(3000, () => {console.log('server stared on port 3000')});
