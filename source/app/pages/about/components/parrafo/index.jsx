import React from 'react';
import style from './style.css';

function Parrafo (props){
  return (
    <p className={`${style.content} ${props.className || ''}`}>
      {props.children}
    </p>
  )
}

export default Parrafo;
