import React from 'react';
import Title from '../title';
import Parrafo from '../parrafo';

function FrontEnd(){
  return (
    <section>
      <Title>FrontEnd</Title>
      <Parrafo>
        La aplicación fue construida sin usar ningún framework como <span>Gatsby</span> o <span>NextJs</span>, a pesar de que <span>nextJs</span> es ideal para implementar <span>SSR</span> esta trae consigo algunas limitaciones además <span>NextJs</span> se encarga de solucionar todas las partes difíciles como el fetch de datos desde el servidor, y eso le quitaría toda la diversión XD… Así que para mejor aprovechamiento didáctico he configurado todo desde cero, la configuración de webpack, la estructura de archivos y todo lo que haga falta…
      </Parrafo>
    </section>
  )
}

export default FrontEnd;
