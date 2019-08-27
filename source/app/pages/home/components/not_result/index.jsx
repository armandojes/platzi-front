import React from 'react';
import style from './style';

function NotResult ({query}) {
  return (
    <div className={style.content}>
      No se encontraron resultados para: "{query}"
    </div>
  )
}

export default NotResult;
