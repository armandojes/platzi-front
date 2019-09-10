import React, {useEffect} from 'react';
import { useFetch } from 'react-fetch-ssr';
import Item from '../item'
import ItemLoading from '../item/loading.jsx';
import Container from '../../../../components/container';
import PagesNavigator from '../../../../components/pages_navigator';


function Voteds (props){

  useFetch(async () => {
    if (props.items.length === 0 && !props.error){
      await props.load_voteds();
    }
  },[]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {window.removeEventListener('scroll', handleScroll)}
  },[props.loading])

  function handleScroll () {
    if (props.loading) return false;
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.getElementById('render_target').clientHeight;
    if ((scrolled + viewportHeight + 100) < fullHeight) return false;
    if (props.items.length === 0) return false;
    props.load_voteds();
  }

  return (
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
      <PagesNavigator
        num_pages={props.num_pages}
        current_page={props.current_page}
        path="/posts/voteds"
      />
    </Container>
  )
}

export default Voteds;
