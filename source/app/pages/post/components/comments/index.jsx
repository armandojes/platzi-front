import React from 'react';
import Highlight from 'react-highlight';
import style from './style';
import Container from '../../../../components/container';
import Limiter from '../limiter_post';

function Comments (props){
  return (
    <Container>
      <Limiter>
        {props.comments != 'loading' && props.comments != 'error' && (
          <Highlight innerHTML={true}>
            {props.comments}
          </Highlight>
        )}
      </Limiter>
    </Container>
  )
}

export default Comments
