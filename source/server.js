import React from 'react';
import { StaticRouter } from "react-router";
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import Markup from './Markup';
import App from './app/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import http from 'http'


function handleRequest(request, response){
  const context = {};
  const content =renderToString(
    <StaticRouter context={context} location={request.url}>
      <App />
    </StaticRouter>
  );

  const html = renderToStaticMarkup(<Markup content={content} />);
  response.write(html);
  response.end();
  console.log(request.url)
}


http.createServer(handleRequest).listen(3000, () => {console.log('server stared on port 3000')});
