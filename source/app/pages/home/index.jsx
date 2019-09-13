import React from 'react';
import PostPrimary from '../../sections/post_primary';
import { connect } from 'react-redux';
import Header from './components/header';
import { bindActionCreators } from 'redux';
import News from './components/news'
import Voteds from './components/voteds'
import Search from './components/search'
import {set_items, set_type, set_query, set_initial_state, load_news, load_search, load_voteds, set_current_page} from './ducks';


function Posts (props){
  return (
    <div role="page">
      <PostPrimary />
      <Header />
      {props.type === 'news' && (<News {...props}/>)}
      {props.type === 'search' && (<Search {...props}/>)}
      {props.type === 'voteds' && (<Voteds {...props}/>)}
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
    set_query,
    set_initial_state,
    load_news,
    load_search,
    load_voteds,
    set_items,
    set_current_page,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
