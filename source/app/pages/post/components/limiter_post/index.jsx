import React from 'react';
import style from './style';

function LimiterPost({children}){
  return (
    <div className={style.limmiter}>
      {children}
    </div>
  )
}

export default LimiterPost;
