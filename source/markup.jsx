import React from 'react';

function Markup (props){

  const preloaded_state = JSON.stringify(props.state);

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <title>Platzi Blog</title>
        <base href={BASEURL}/>
        <link rel="stylesheet" type="text/css" href={`${STATICURL}/build/style.css`} />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </head>
      <body>
        <div id="render_target" dangerouslySetInnerHTML={{__html: props.content}}></div>
        <script dangerouslySetInnerHTML={{__html: `window.__STATE__ = '${preloaded_state}'`}}></script>
        <script src={`${STATICURL}/build/client.js`}/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700&amp;subset=latin" media="all" />
      </body>
    </html>
  )
}

export default Markup;
