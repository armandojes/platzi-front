import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';


function MetaData (props){
  return (
    <div className={style.content}>
      <Link className={`${style.items} ${style.bold}`} to="/armandodejesus">
        <img src="https://static.platzi.com/media/avatars/avatars/foloarte_35a70dd6-529f-424e-adcf-8cec51bb6e33.jpg" className={style.avatar}/>
        Armandod de jesus
      </Link>
      <div className={style.items}>
        <img src={`${STATICURL}/build/clock.png`} className={style.icon}/>
        hace 5 dias
      </div>
      <div className={style.items}>
        <img src={`${STATICURL}/build/comments.png`} className={style.icon}/>
        5 comentarios
      </div>
    </div>
  )
}

export default MetaData;
