import React from 'react';

function Markup (props){

  const { head } = props;

  return (
    <html lang="es">
      <head>
        <link  rel="icon"   href={`${STATICURL}/build/icon.png`} type="image/png" />
        <meta charSet="utf-8" />
        <meta name="google-adsense-account" content="ca-pub-1801318163824555"></meta>
        {head.title.toComponent()}
        {head.link.toComponent()}
        {head.meta.toComponent()}
        <base href={BASEURL}/>
        <link rel="stylesheet" type="text/css" href={`${STATICURL}/build/style.css`} />
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>
        <div id="render_target" dangerouslySetInnerHTML={{__html: props.content}}></div>
        <script dangerouslySetInnerHTML={{__html: `window.__PRELOADED_STATE__=${JSON.stringify(props.state)}`}}></script>
        <script defer src={`${STATICURL}/build/client.js`}/>
        <link defer rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700&amp;subset=latin" media="all" />
      </body>
    </html>
  )
}

export default Markup;
