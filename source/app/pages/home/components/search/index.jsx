import React, {useEffect} from 'react';
import { useFetch } from 'react-fetch-ssr';
import Item from '../item'
import ItemLoading from '../item/loading.jsx';
import NotResult from '../not_result';
import Container from '../../../../components/container';
import PagesNavigator from '../../../../components/pages_navigator';

function Search (props){

  useFetch(async () => {
    if (typeof window === 'undefined'){
      await props.load_search();
    }
  });

  useEffect(() => {
    if (props.items.length === 0){
      props.load_search();
    }
  },[props.query])

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
    props.load_search();
  }

  return (
    <Container>
      {props.items.length > 0 && (
        props.items.map( (item, index) => <Item {...item} key={index}/>)
      )}
      {props.items.length === 0 && props.loading && (
        <ItemLoading />
      )}
      {props.loading && (
        <ItemLoading />
      )}
      {!props.loading && props.items.length === 0 && (<NotResult query={props.query} />)}
      {props.items.length > 0 && (
        <PagesNavigator
          num_pages={props.num_pages}
          current_page={props.current_page}
          path={`/posts/search?query=${props.query}&page=`}
        />
      )}
    </Container>
  )
}

export default Search;
