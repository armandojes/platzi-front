import React, { Fragment } from 'react';
import style from './style';
import PostBody from './components/post';
import PostBodyLoading from './components/post/loading';
import Container from '../../components/container';
import PostPrimary from '../../components/post_primary';
import PostPrimaryLoading from '../../components/post_primary/loading.jsx';
import Autor from './components/autor';
import Comments from './components/comments';
import {Helmet} from "react-helmet";

function View (props){

  if (typeof props.post === 'object'){
    return (
      <Fragment>
        <Helmet>
          <title>{props.post.title}</title>
          <meta name="description" content={props.post.description} />
          <link rel="canonical" href={`${BASEURL}/post/${props.post.url}`} />
        </Helmet>
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
