import React from 'react';
import Title from '../title';
import Parrafo from '../parrafo';

function BackEnd (){
  return (
    <section>
      <Title>BackEnd</Title>
      <Parrafo>
        El <span>back-end</span> no es más que una <span>API REST</span> construida con <span>PHP</span> junto el motor de base de datos <span>MYSQL</span>, Los datos los post son consumidos por primera vez desde platzi.com (la extracción de datos puede tardar unos segundos), luego son guardados en una base de datos para que las próximas peticiones se consuman desde ahí. Dichos datos son actualizados si han pasado 24 horas desde la última actualización, en la próxima petición del usuario.
      </Parrafo>
    </section>
  )
}

export default BackEnd;
