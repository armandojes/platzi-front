import React from 'react';
import style from './style';

function ButtonLike({likes}){
  return (
    <div className={style.button_like}>
      <img src={`${STATICURL}/build/like.png`} className={style.icon_like}/>
      <div>{likes}</div>
    </div>
  )
}

export default ButtonLike;
