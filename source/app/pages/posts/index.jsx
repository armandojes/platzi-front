import React, { useEffect } from 'react';
import PostPrimary from '../../sections/post_primary';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../home/components/header';
import News from '../home/components/news'
import Voteds from '../home/components/voteds'
import Search from '../home/components/search'
import {set_type, set_query, set_initial_state, load_news, load_search, load_voteds, set_current_page} from '../home/ducks';
import { useFetch } from 'react-fetch-ssr';

function Posts (props){

  const {type, page, query = ''} = props.match.params;

  if (typeof window === 'undefined' && props.current_page == 0){
    props.set_current_page(page - 1);
  }

  if (typeof window === 'undefined'){
    props.set_query(query);
  }


  return (
    <div role="page">
      <PostPrimary />
      <Header {...props} />
      {type === 'news' && (<News {...props}/>)}
      {type === 'search' && (<Search {...props}/>)}
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
    set_query,
    set_initial_state,
    load_news,
    load_search,
    load_voteds,
    set_current_page,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
