import React from 'react';
import style from './loading.css';

import Container from '../../../../components/container'

function PostView (props){
  return (
    <article className={style.wrapper}>
      <Container className={style.body}>
        <div className={style.content}>
          <div className={`${style.title} b_color`}/>
          <div className={`${style.body} b_color`}/>
          <div className={`${style.body} b_color`}/>
          <div className={`${style.body} b_color`}/>
        </div>
      </Container>
    </article>
  )
}

export default PostView;
