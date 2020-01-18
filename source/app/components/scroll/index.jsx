import React, { useState, useEffect } from 'react';
import style from './style';
import animateScrollTo from 'animated-scroll-to';


function Scroll(){

  const [render, set_render] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {window.removeEventListener('scroll', handleScroll);}
  },[render]);

  function handleScroll (){
    const scrolled = window.scrollY;
    if (scrolled > 600){
      render === false && set_render(true);
    } else {
      render === true && set_render(false);
    }

  }

  function handleClick(e){
    animateScrollTo(0);
  }

  if (!render) return null;

  return (
    <img src={`${STATICURL}/build/arrow_up.png`}
      className={style.icon}
      onClick={handleClick}
      alt="arrow"
    />
  )
}

export default Scroll;
