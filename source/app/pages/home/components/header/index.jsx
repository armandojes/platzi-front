import React from 'react';
import style from './style';
import Container from '../../../../components/container';

function Header (props) {
  return (
    <Container>
      <div className={style.title}>
        {props.type === 'news' && ('Posts nuevos')}
        {props.type === 'voteds' && ('Mas votados')}
        {props.type === 'search' && (`"${props.query}"`)}
      </div>
      <div className={style.controls_container}>
        <select className={style.select} onChange={(e) => {props.set_type(e.target.value)}} value={props.type}>
          <option className={style.option} value="news">Nuevos</option>
          <option className={style.option} value="voteds">Mas votados</option>
          {props.type === 'search' && (<option className={style.option} value="search">Resultados</option>)}
        </select>
        <form className={style.form}>
          <input type="search"
            className={style.search}
            placeholder="buscar post"
            onChange={ e => {if (props.type != 'search') props.set_type('search'); props.set_query(e.target.value);}}
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

export default Header;
