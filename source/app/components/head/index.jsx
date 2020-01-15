import { Helmet } from 'react-helmet';
import React from 'react';

function Head(props){
  return (
    <Helmet>
      <title>{props.title || 'Platzi - blog'}</title>
      <meta name="description" content={props.description || 'Tu mejor blog de tecnologia y programacion en español'} />
      {props.url && (<link rel="canonical" href={props.url} />)}
      {props.url && (<meta property="og:url" content={props.url} />)}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={props.title || 'Platzi - blog SSR'} />
      <meta property="og:description" content={props.description || 'Tu mejor blog de tecnologia y programacion en español'} />
      <meta property="og:image" content={props.picture || `${STATICURL}/build/share.png`} />
    </Helmet>
  )
}

export default Head;