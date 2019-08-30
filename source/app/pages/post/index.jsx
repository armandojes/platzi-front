import React, { useEffect } from 'react';
import style from './style';
import {connect} from 'react-redux';
import { load_post, set_initial_state } from './ducks';
import { bindActionCreators } from 'redux';
import { useFetch } from 'react-fetch-ssr';
import PostBody from './components/post';
import Container from '../../components/container'
import Highlight from 'react-highlight';
import {renderToStaticMarkup} from 'react-dom/server';

function Post (props){

  useFetch(async () => {
    if (props.post === 'loading')
    await props.load_post(props.match.params.url);
  },[]);

  useEffect(() => () => {props.set_initial_state()},[]);

  const postBodyHtml = renderToStaticMarkup(<PostBody {...props.post} />);
  console.log(postBodyHtml);
  return typeof props.post === 'object'
  ? (
    <Highlight innerHTML={true}>
      {postBodyHtml}
    </Highlight>
  )
  : (
    <Container>
      {props.post === 'loading' && (
        'cargando'
      )}
      {props.post === 'error' && (
        'error 404 ppost no enciontrado'
      )}
    </Container>
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
