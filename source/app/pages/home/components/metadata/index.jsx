import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';


function MetaData (props){
  return (
    <div className={style.content}>
      <div className={`${style.items} ${style.bold}`}>
        <img src={props.avatar} className={style.avatar}/>
        {props.username}
      </div>
      <div className={style.items}>
        <img src={`${STATICURL}/build/clock_gray.png`} className={style.icon}/>
        {props.created_at}
      </div>
      <div className={`${style.items} ${style.comments}`}>
        <img src={`${STATICURL}/build/comments.png`} className={style.icon}/>
        {props.comments || 0} comentarios
      </div>
    </div>
  )
}

export default MetaData;
