import React, {useEffect, Fragment} from 'react';
import { useFetch } from 'react-fetch-ssr';
import Item from '../item'
import ItemLoading from '../item/loading.jsx';
import Container from '../../../../components/container';
import PagesNavigator from '../../../../components/pages_navigator';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>{`Platzi - blog `}</title>
        <meta name="description" content="Tu mejor blog de tecnologia y programacion en español" />
        <link rel="canonical" href={`${BASEURL}/posts/voteds/${props.current_page}`} />
      </Helmet>

      {props.items.length > 0 && (
        props.items.map( item => <Item {...item} key={item.id}/>)
      )}
      {props.items.length === 0 && (
        <Fragment>
          <ItemLoading />
          <ItemLoading />
        </Fragment>
      )}
      {props.loading && (
        <ItemLoading />
      )}
      <PagesNavigator
        num_pages={props.num_pages}
        current_page={props.current_page}
        path="/posts/voteds/"
      />
    </Container>
  )
}

export default Voteds;
