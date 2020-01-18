import React from 'react';
import style from './style';
import Container from '../../../../components/container';


function Header (){
  return (
    <div className={style.container}>
      <Container>
        <div className={style.body}>
          <div className={style.title_wrapper}>
            <img className={style.icon} src={`${STATICURL}/build/icon.png`} alt="icon"/>
            Platzi blog
          </div>
          <div className={style.description_wrapper}>
            Actualidad, artículos de opinión y tutoriales del Team Platzi y su comunidad sobre desarrollo, diseño, marketing y negocios.<br />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
