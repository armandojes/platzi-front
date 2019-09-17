import React from 'react';
import style from './style.css';

function Title (props){
  return (
    <h2 className={`${style.title} ${props.className || ''}`}>
      {props.children}
    </h2>
  )
}

export default Title;
