import React, { Fragment } from 'react';
import style from './style';
import PostBody from './components/post';
import PostBodyLoading from './components/post/loading';
import Container from '../../components/container';
import PostPrimary from '../../components/post_primary';
import PostPrimaryLoading from '../../components/post_primary/loading.jsx';
import Autor from './components/autor';
import Comments from './components/comments';


function View (props){

  if (typeof props.post === 'object'){
    return (
      <Fragment>
        <PostPrimary {...props.post} />
        <PostBody {...props.post} />
        <Autor {...props.post} />
        <Comments comments={props.comments} />
      </Fragment>
    )
  }

  if (props.post === 'error') return (
    <Container>
      Error 404 post no encontrado
    </Container>
  )

  return (
    <Fragment>
      <PostPrimaryLoading />
      <PostBodyLoading />
    </Fragment>
  )
}

export default View
