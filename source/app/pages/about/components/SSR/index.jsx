import React from 'react';
import Title from '../title';
import Parrafo from '../parrafo';

function SSR (){
  return (
    <section>
      <Title>Server Side Render</Title>
      <Parrafo>
        Esta aplicación cuenta con serverSideRender por lo tanto la primera solicitud es renderizado desde el backend y el resto de la navegación el render ocurre en el cliente (SPA). Esto nos garantiza que la aplicación siempre funcionara aunque el usuario tenga JavaScript deshabilitado o si por alguna razón falla la ejecución de JavaScript en el lado del cliente. Si eres una persona curiosa por favor siéntete libre experimentar deshabilitando  Javascript en tu navegador.
      </Parrafo>
    </section>
  )
}

export default SSR;
