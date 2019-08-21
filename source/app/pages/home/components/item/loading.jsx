import React from 'react';
import style from './loading.css';

function ItemLoading () {
  return (
  <section className={style.content}>
    <div className={`${style.votes} b_color`} />  
    <div className={style.content_data}>
      <div className={`${style.text} b_color`}/>
      <div className={`${style.text} b_color`}/>
      <div className={`${style.text_secundary} b_color`}/>
    </div>
  </section>
  )
}

export default ItemLoading;
