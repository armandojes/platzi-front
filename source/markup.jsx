import React from 'react';

function Markup (props){

  const { head } = props;

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        {head.title.toComponent()}
        {head.link.toComponent()}
        {head.meta.toComponent()}
        <base href={BASEURL}/>
        <link rel="stylesheet" type="text/css" href={`${STATICURL}/build/style.css`} />
        <link rel="stylesheet" href="https://static.platzi.com/static/css/c/contribution-detail.43161e6709efa3001136.css.gz" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </head>
      <body>
        <div id="render_target" dangerouslySetInnerHTML={{__html: props.content}}></div>
        <script dangerouslySetInnerHTML={{__html: `window.__PRELOADED_STATE__=${JSON.stringify(props.state)}`}}></script>
        <script src={`${STATICURL}/build/client.js`}/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700&amp;subset=latin" media="all" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/monokai.min.css" />
      </body>
    </html>
  )
}

export default Markup;
