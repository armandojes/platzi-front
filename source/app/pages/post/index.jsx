import React, { useEffect, Fragment } from 'react';
import style from './style';
import {connect} from 'react-redux';
import { load_post, set_initial_state } from './ducks';
import { bindActionCreators } from 'redux';
import { useFetch } from 'react-fetch-ssr';
import PostBody from './components/post';
import PostBodyLoading from './components/post/loading';
import Container from '../../components/container';
import PostPrimary from '../../components/post_primary';
import PostPrimaryLoading from '../../components/post_primary/loading.jsx';
import Highlight from 'react-highlight';
import {renderToStaticMarkup} from 'react-dom/server';

function Post (props){

  useFetch(async () => {
    if (props.post === 'loading')
    await props.load_post(props.match.params.url);
  },[]);

  useEffect(() => () => {props.set_initial_state()},[]);

  const postBodyHtml = renderToStaticMarkup(<PostBody {...props.post} />);

  if (typeof props.post === 'object'){
    return (
      <Fragment>
        <PostPrimary {...props.post} />
        <Highlight innerHTML={true}>
          {postBodyHtml}
        </Highlight>
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

function mapStateToProps(state){
  return {
    post: state.pages.post.post,
    comments: state.pages.post.comments,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({load_post, set_initial_state}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
