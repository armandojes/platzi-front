import React from 'react';
import style from './style';
import Container from '../../components/container'
import Head from '../../components/head'

function Error404 (props){
  return (
    <div role="page"
      name="error404"
      className={style.page}
      style={{backgroundImage: `url(${STATICURL}/build/stars-pttnr.webp)`}}>
      <Container>
        <Head title="Error 404" />
        <div className={style.body}>
          <img src={`${STATICURL}/build/not_found.webp`} className={style.picture}/>
          <h1 className={style.title}>Hmmm!</h1>
          <h2 className={style.sub_title}>No encontramos lo que buscabas!</h2>
        </div>
      </Container>
    </div>
  )
}

export default Error404;
