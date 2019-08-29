import React from 'react';
import style from './style';
import Container from '../../../../components/container'
function PostView (props){
  return (
    <article>
      <Container className={style.body}>
        <div dangerouslySetInnerHTML={{__html: props.body}}/>
      </Container>
    </article>
  )
}

export default PostView;
