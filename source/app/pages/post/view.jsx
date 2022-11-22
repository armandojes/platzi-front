import React, { Fragment } from 'react';
import style from './style';
import PostBody from './components/post';
import PostBodyLoading from './components/post/loading';
import Container from '../../components/container';
import PostPrimary from '../../components/post_primary';
import PostPrimaryLoading from '../../components/post_primary/loading.jsx';
import Autor from './components/autor';
import Comments from './components/comments';
import Head from '../../components/head'

function View (props){

  if (typeof props.post === 'object'){
    return (
      <Fragment>
        <Head 
          title={props.post.title}
          description={props.post.description}
          url={`${BASEURL}/post/${props.post.url}`}
          picture={props.post.cover}
        />
        <PostPrimary {...props.post} />
        <PostBody {...props.post} />
        <Autor {...props.post} />
        <Comments comments={props.comments} />
        <link defer rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/monokai.min.css" />
        <link defer rel="stylesheet" href="https://static.platzi.com/static/css/c/contribution-detail.43161e6709efa3001136.css.gz" />
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
