import React from 'react';
import style from './style'
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <header className={style.header}>
      <div className={style.fixed}>
        <div className={style.body}>

          <Link to="/">
            <img src={`${STATICURL}/build/logo.png`} className={style.logo}/>
          </Link>
        </div>
      </div>
      <div className={style.shadow}>
        header no fixed
      </div>
    </header>
  )
}

export default Header
