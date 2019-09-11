import React, { useState, useRef, useEffect } from 'react';
import style from './style';
import Container from '../../../../components/container';
import { withRouter } from 'react-router-dom';


function Header (props) {

  const input = useRef(null);
  const [renderSelect, set_render_select] = useState(false);

  useEffect(() => {
    set_render_select(true);
  },[]);

  useEffect(() => {
    if (props.query.length > 0)
    input.current.focus();
  },[props.query])

  function handleChange(e) {
    if (props.match.path != '/'){
      props.history.push('/')
    }
    if (props.type != 'search')
    props.set_type('search')
    props.items.length > 0 && props.set_items([]);
    props.current_page != 0 && props.set_current_page(0);
    props.set_query(e.target.value)
  }

  function handleChangeType(e){
    if (props.match.path != '/'){
      props.history.push('/')
    }
    props.set_type(e.target.value)
  }


  function handleSubmit(e){
    //e.preventDefault();
  }

  return (
    <Container>
      <div className={style.title}>
        {props.type === 'news' && ('Posts nuevos')}
        {props.type === 'voteds' && ('Mas votados')}
        {props.type === 'search' && ('Resultados')}
        {props.type === 'postsuser' && (`@${props.match.params.username}`)}
      </div>
      <div className={style.controls_container}>
        {renderSelect && (
          <select className={style.select} onChange={handleChangeType} value={props.type}>
            <option className={style.option} value="news">Nuevos</option>
            <option className={style.option} value="voteds">Mas votados</option>
            {props.type === 'search' && (<option className={style.option} value="search">Resultados</option>)}
            {props.type === 'postsuser' && (<option className={style.option} value="postsuser">Posts de usuario</option>)}
          </select>
        )}
        {!renderSelect && (
          <div className={style.anchor_}>
            <a href="/posts/news/1">Nuevos</a>
            <a href="/posts/voteds/1">Mas votados</a>
          </div>
        )}
        <form className={style.form} method="get" action="/posts/search" onSubmit={handleSubmit}>
          <input type="search"
            ref={input}
            className={style.search}
            placeholder="buscar post"
            onChange={handleChange}
            value={props.query}
            name="query"
            autoComplete="off"
          />
          <button type="submit" className={style.icon_serach_container}>
            <img src={`${STATICURL}/build/search.png`} className={style.search_icon} />
          </button>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(Header);
