import React from 'react';
import style from './style';
import {connect} from 'react-redux';
import { load_post } from './ducks';
import { bindActionCreators } from 'redux';
import { useFetch } from 'react-fetch-ssr';
import PostBody from './components/post';
import Container from '../../components/container'

function Post (props){

  useFetch(async () => {
    if (props.post === 'loading')
    await props.load_post(props.match.params.url);
  },[]);


  return typeof props.post === 'object'
  ? (<PostBody {...props.post} />)
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
  return bindActionCreators({load_post}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
