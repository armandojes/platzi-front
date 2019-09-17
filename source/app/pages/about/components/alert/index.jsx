import React, { Fragment } from 'react';
import style from './style';
import Title from '../title';
import Parrafo from '../parrafo';



function Alert (){
  return (
    <section>
      <Title>
        Advertencia:
      </Title>
      <Parrafo className={style.body}>
        Este proyecto no es oficial de Platzi, es solo un ejercicio de programacion
      </Parrafo>
    </section>
  )
}

export default Alert;
