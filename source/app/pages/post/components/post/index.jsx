import React from 'react';
import style from './style';
import Container from '../../../../components/container';
import Autor from '../autor';
import Limiter from '../limiter_post';
import Highlight from 'react-highlight';

function PostView (props){
  return (
    <article className={style.wrapper}>
      <Container className={style.body}>
        <Limiter>
          <Highlight innerHTML={true} className={style.content} >
            {props.body}
          </Highlight>
        </Limiter>
      </Container>
    </article>
  )
}

export default PostView;
