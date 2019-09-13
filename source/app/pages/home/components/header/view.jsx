import React from 'react';
import style from './style';
import Container from '../../../../components/container';

function Header (props) {
  return (
    <Container>
      <div className={style.title}>
        {props.type === 'news' && ('Posts nuevos')}
        {props.type === 'voteds' && ('Mas votados')}
        {props.type === 'search' && ('Resultados')}
        {props.type === 'postsuser' && (`@${props.match.params.username}`)}
      </div>
      <div className={style.controls_container}>
        {props.renderSelect && (
          <select
            className={style.select}
            onChange={props.handleChangeType}
            value={props.type}>
            <option className={style.option} value="news">Nuevos</option>
            <option className={style.option} value="voteds">Mas votados</option>
            {props.type === 'search' && (<option className={style.option} value="search">Resultados</option>)}
            {props.type === 'postsuser' && (<option className={style.option} value="postsuser">Posts de usuario</option>)}
          </select>
        )}
        {!props.renderSelect && (
          <div className={style.anchor_}>
            <a href="/posts/news/1">Nuevos</a>
            <a href="/posts/voteds/1">Mas votados</a>
          </div>
        )}
        <form
          className={style.form}
          method="get"
          onSubmit={props.handleSubmit}
          action="/posts/search">
          <input type="search"
            ref={props.input_ref}
            className={style.search}
            placeholder="buscar post"
            onChange={props.handleChange}
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

export default Header;
