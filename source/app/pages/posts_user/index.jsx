import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {load_posts} from './ducks';
import Header from '../home/components/header';
import { set_type, set_query } from '../home/ducks';
import Container from '../../components/container';
import Item from '../home/components/item'
import ItemLoading from '../home/components/item/loading.jsx';
import { useFetch } from 'react-fetch-ssr';


function PostsUser(props) {

  const {username} = props.match.params;

  useFetch(async () => {
    if (props.items.length === 0)
    await props.load_posts(username);
  },[]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {window.removeEventListener('scroll', handleScroll)}
  },[props.loading, props.current_page, props.num_pages])

  function handleScroll () {
    if (props.current_page >= props.num_pages) return false;
    if (props.loading) return false;
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.getElementById('render_target').clientHeight;
    if ((scrolled + viewportHeight + 100) < fullHeight) return false;
    if (props.items.length === 0) return false;
    props.load_posts(username);
  }

  return (
    <div role="page">
      <Header
        username={props.match.params.username}
        type="postsuser"
        set_type={props.set_type}
        set_query={props.set_query}
      />
      <Container>
        {props.items.length > 0 && (
          props.items.map( item => <Item {...item} key={item.id}/>)
        )}
        {props.items.length === 0 && (
          <ItemLoading />
        )}
        {props.loading && (
          <ItemLoading />
        )}
      </Container>
    </div>
  )
}

function mapStateToProps (state){
  return {
    items: state.pages.posts_user.items,
    num_pages: state.pages.posts_user.num_pages,
    loading: state.pages.posts_user.loading,
    loading: state.pages.posts_user.loading,
    error: state.pages.posts_user.error,
    current_page: state.pages.posts_user.current_page,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({load_posts, set_type, set_query}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsUser);
