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
  let {type, page} = props.match.params;
  const params = parser_params(props.location.search);
  page = page ? page : (params.page || 1);

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
    query: state.pages.home.query,
    num_pages: state.pages.home.num_pages,
    num_items: state.pages.home.num_items,
    current_page: state.pages.home.current_page,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    set_type_single: set_type,
    set_type: (type) => (dispatch) => {dispatch(set_initial_state()); dispatch(set_type(type))},
    set_initial_state,
    load_news,
    load_voteds,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
