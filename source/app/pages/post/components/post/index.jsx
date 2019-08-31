import React from 'react';
import style from './style';
import Container from '../../../../components/container'
function PostView (props){
  return (
    <article className={style.wrapper}>
      <Container className={style.body}>
        <div
          className={style.content}
          dangerouslySetInnerHTML={{__html: props.body}}/>
      </Container>
    </article>
  )
}

export default PostView;
