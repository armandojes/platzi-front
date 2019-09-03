import React from 'react';
import style from './style';
import Container from '../../../../components/container';
import Limiter from '../limiter_post';
import { Link } from 'react-router-dom';

function Autor (props) {
  return (
    <section className={style.autor}>
    <Container>
      <Limiter>
        <div className={style.body}>
          <img className={style.avatar} src={props.avatar} />
          <div className={style.element}>
            {props.username}
          </div>
          <div className={style.element}>
            {props.points} puntos
          </div>
          <div className={style.element}>
            <img className={style.icon} src={`${STATICURL}/build/clock_gray.png`} />
            {props.created_at}
          </div>
          <div className={style.element}>
            <Link to={`/user/${props.username}`}>ver todas sus entrada</Link>
          </div>
        </div>
      </Limiter>
    </Container>
  </section>

  )
}

export default Autor;
