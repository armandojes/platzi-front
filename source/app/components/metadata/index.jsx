import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';


function MetaData (props){
  return (
    <div className={style.content}>
      <a className={`${style.items} ${style.bold}`} href={`https://platzi.com/@${props.username}`}>
        <img src={props.avatar} className={style.avatar} alt="avatar"/>
        {props.username}
      </a>
      <div className={style.items}>
        <img src={`${STATICURL}/build/clock.png`} className={style.icon} alt="time past"/>
        {props.created_at}
      </div>
      <div className={style.items}>
        <img src={`${STATICURL}/build/comments.png`} className={style.icon} alt="comment" />
        {props.comments || 0} comentarios
      </div>
    </div>
  )
}

export default MetaData;
