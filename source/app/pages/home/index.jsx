import React from 'react';
import style from './style';
import PostPrimary from '../../sections/post_primary';
import { connect } from 'react-redux';
import Header from './components/header';
import { bindActionCreators } from 'redux';
import News from './components/news'
import Voteds from './components/voteds'
import Search from './components/search'
import {set_type, set_query, set_items, set_num_items, set_num_pages, set_loading} from './ducks';

function Post (props){
  return (
    <div role="page">
      <PostPrimary />
      <Header {...props} />
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
    num_pages: state.pages.home.num_pages,
    num_items: state.pages.home.num_items,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    set_type,
    set_query,
    set_items,
    set_num_items,
    set_num_pages,
    set_loading
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
