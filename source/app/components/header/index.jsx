import React from 'react';
import style from './style'
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <header className={style.header}>
      <div className={style.fixed}>
        <div className={`${style.body} ${style.desktop}`}>
          <Link to="/" className={style.link_logo}>
            <img src={`${STATICURL}/build/blog.png`} />
          </Link>
          <nav className={style.menu_content}>
            <a href="https://platzi.com" className={style.link}>Platzi</a>
            <Link to="/about" href="https://platzi.com" className={style.link}>About</Link>
          </nav>
        </div>

        <div className={`${style.body} ${style.movil}`}>
          <Link to="/" className={style.link_logo}>
            <img src={`${STATICURL}/build/blog.png`} />
          </Link>
          <a href="https://platzi.com" target="_blank" className={style.link}>Platzi</a>
          <Link to="/about" href="https://platzi.com" className={style.link}>About</Link>
        </div>

      </div>
      <div className={style.shadow} />
    </header>
  )
}

export default Header
