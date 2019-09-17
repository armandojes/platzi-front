import React, { useEffect } from 'react';
import Title from '../title';
import Parrafo from '../parrafo';
import style from './style';


function Finally (){

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  return (
    <section>
      <Title>Conclusiones</Title>
      <Parrafo>
        Durante el desarrollo de esta aplicación me enfrente a varios problemas técnicos y un problema que me gustaría destacar es el <span>fetch de datos desde el servidor SSR</span>, es decir cuando los componentes necesitan datos de una API.
      </Parrafo>
      <Parrafo>
        En el lado del cliente esto lo hacemos normalmente usando <span className={style.code}>useEffect ()</span> o <span className={style.code}>componentDidMount ()</span>, pero en el lado del servidor nunca se ejecutan estos métodos por lo que el servidor solo nos entrega componentes vacíos con un mensaje de <span>“cargando…”</span>, y lo que nosotros esperamos es que el servidor realice las peticiones necesarias al API,  espera la respuesta y finalmente nos entregue un HTML completo con todos los datos.
      </Parrafo>
      <Parrafo>
        Renderizar simples componentes en el servidor es muy fácil, el problema ocurre cuando ciertos componentes necesitan traer datos desde una API. <span>NextJs</span> con su famoso método <span className={style.code}>getInitialProps ()</span> soluciona este problema por nosotros, pero dicho método solo lo tenemos disponible cuando usamos <span>NextJs</span>.
      </Parrafo>
      <Parrafo>
        Pronto escribiré un artículo detallado y a profundidad sobre este problema y sus posibles soluciones… Mientras tanto disfruta de platzi-blog
      </Parrafo>
    </section>
  )
}

export default Finally;
