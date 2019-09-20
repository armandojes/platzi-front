import React from 'react';
import style from './style.css';
import Parrafo from '../parrafo';
import Title from '../title';

function History(){
  return (
    <section className={style.body}>
      <Title className={style.title}>Historia</Title>
      <Parrafo className={style.content}>
        Después de mucho tiempo de jugar con código escribiendo aplicaciones web tradicionales con PHP y single page aplicaciones he sentido la curiosidad de aprender a profundidad una de las librerías para frontend más populares  reactJs, desde su integración con redux hasta SSR (server Side Render).
      </Parrafo>
      <Parrafo className={style.content}>
        Al principio no tenía bien claro que aplicación construir, me pase algunas horas revisando los proyectos de platzi connect tratando de inspirarme en alguno de los proyectos de la comunidad…
      </Parrafo>
      <Parrafo className={style.content}>
        Después de leer varios artículos en el blog de platzi me llamo mucho la atención su diseño y en especial su contenido, construir un blog como ese sería el reto perfecto, así que me dije a mi mismo manos a la obra y he empezado a ocupar mi tiempo libre en crear una réplica del blog de platzi basado en la técnica de isomorphic application (técnica que  combina Server Side Render y Client Side Render).
      </Parrafo>
      <Parrafo className={style.content}>
        Mi intención no es plagiar el contenido del blog de platzi es solo un ejercicio de programación… Si platzi decide que esta aplicación viola sus términos por favor háganmelo saber (armandodejesus678@gmail.com) y pondré la aplicación Offline de inmediato.
      </Parrafo>
    </section>

  )
}

export default History;
