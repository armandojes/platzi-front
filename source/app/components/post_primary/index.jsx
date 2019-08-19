import React from 'react';
import style from './style';
import Container from '../../components/container';
import ButtonLike from '../../components/button_like';
import MetaData from '../../components/metadata';
import { Link } from 'react-router-dom';

function PostPrimary (props){
  return (
    <section className={style.content} style={{backgroundImage: 'url(https://static.platzi.com/media/blog/cover-back-for-frontend-59149515-3636-4c86-936e-7cde6523b5d1.png)'}}>
      <Container>
        <div className={style.body}>
          <div className={style.data_content}>
            <div className={style.votes}>
              <ButtonLike likes={55}/>
            </div>
            <div className={style.data}>
              <Link to="/" className={style.title}>¿Cuándo crear un Componente? Estructura, Organización y Tipos de Componentes en React</Link>
              <MetaData />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PostPrimary;
