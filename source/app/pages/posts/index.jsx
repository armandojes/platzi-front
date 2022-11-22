import React from 'react';
import PostPrimary from '../../sections/post_primary';
import parser_params from '../../utils/parser_params';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../home/components/header';
import News from '../home/components/news'
import Voteds from '../home/components/voteds'
import {set_type, set_initial_state, load_news, load_voteds} from '../home/ducks';



function Posts (props){
  let { type } = props.match.params;

  if (typeof window === 'undefined'){
    props.set_type_single(type);
  }


  return (
    <div role="page">
      <PostPrimary />
      <Header {...props} />
      {type === 'news' && (<News {...props}/>)}
      {type === 'voteds' && (<Voteds {...props}/>)}
    </div>
  )
}

function mapStateToProps(state){
  return {
    loading: state.pages.home.loading,
    items: state.pages.home.items,
    type: state.pages.home.type,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    set_type_single: set_type,
    set_initial_state,
    load_news,
    load_voteds,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
