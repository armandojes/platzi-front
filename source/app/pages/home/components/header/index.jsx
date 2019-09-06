import React, { useRef, useEffect } from 'react';
import style from './style';
import Container from '../../../../components/container';
import { withRouter } from 'react-router-dom';


function Header (props) {

  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  })

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

  return (
    <Container>
      <div className={style.title}>
        {props.type === 'news' && ('Posts nuevos')}
        {props.type === 'voteds' && ('Mas votados')}
        {props.type === 'search' && ('Resultados')}
        {props.type === 'postsuser' && (`@${props.match.params.username}`)}
      </div>
      <div className={style.controls_container}>
        <select className={style.select} onChange={handleChangeType} value={props.type}>
          <option className={style.option} value="news">Nuevos</option>
          <option className={style.option} value="voteds">Mas votados</option>
          {props.type === 'search' && (<option className={style.option} value="search">Resultados</option>)}
          {props.type === 'postsuser' && (<option className={style.option} value="postsuser">Posts de usuario</option>)}
        </select>
        <form className={style.form}>
          <input type="search"
            ref={input}
            className={style.search}
            placeholder="buscar post"
            onChange={handleChange}
            value={props.query}
          />
          <div className={style.icon_serach_container}>
            <img src={`${STATICURL}/build/search.png`} className={style.search_icon} />
          </div>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(Header);
