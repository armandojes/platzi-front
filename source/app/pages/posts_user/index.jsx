import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {load_posts, set_current_page, set_initial_state} from './ducks';
import Header from '../home/components/header';
import { set_type, set_query } from '../home/ducks';
import Container from '../../components/container';
import Item from '../home/components/item'
import ItemLoading from '../home/components/item/loading.jsx';
import { useFetch } from 'react-fetch-ssr';
import PageNavigator from '../../components/pages_navigator';
import {Helmet} from 'react-helmet'


function PostsUser(props) {

  const {username, page = 1 } = props.match.params;

  if (typeof window === 'undefined' && props.current_page == 0){
    props.set_current_page(page - 1);
  }

  useFetch(async () => {
    if (props.items.length === 0)
    await props.load_posts(username);
  },[]);

  useEffect(() => {
    return () => {props.set_initial_state()}
  },[username]);

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
      <Helmet>
        <title>{`${username} posts`}</title>
        <meta name="description" content={`Lista de posts de ${username}`} />
        <link rel="canonical" href={`${BASEURL}/user/${username}/${page}`} />
      </Helmet>
      <Header />
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
        {props.items.length > 0 && (
          <PageNavigator
            num_pages={props.num_pages}
            current_page={props.current_page}
            path={`/user/${username}/`}
          />
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
    query: state.pages.home.query,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({set_initial_state, load_posts, set_type, set_query, set_current_page}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsUser);
