import React from 'react';
import style from './style';
import Container from '../../../../components/container'


function Alert (){
  return (
    <Container>
      <div className={style.body}>
        Advertencia: Este proyecto no es oficial de Platzi, es solo un ejercicio de programacion
      </div>
    </Container>
  )
}

export default Alert;
