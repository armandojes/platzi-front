import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { load_post, set_initial_state, load_comments } from './ducks';
import { bindActionCreators } from 'redux';
import { useFetch } from 'react-fetch-ssr';
import View from './view';

function Post (props){

  useFetch(async () => {
    if (props.post === 'loading')
    await props.load_post(props.match.params.url);
  },[]);

  useEffect(() => () => {props.set_initial_state()},[]);

  useEffect(() => {
    props.load_comments(props.match.params.url);
  },[]);

  return (
    <View {...props}/>
  )

}

function mapStateToProps(state){
  return {
    post: state.pages.post.post,
    comments: state.pages.post.comments,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({load_post, set_initial_state, load_comments}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
