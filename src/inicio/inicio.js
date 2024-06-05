// src/components/Inicio.js
import React from 'react';
import inicioVideo from './video/johnny.mp4'; // Asegúrate de que la ruta al video sea correcta
import Carousel from './carousel/carousel';
import Texto from './textoYUbicacion/texto';
import Ubicacion from './textoYUbicacion/ubicacion/ubicacion';


function Inicio() {
  return (
    <div className="row position-relative">
      <div className="col">
        <video autoPlay muted className="img-fluid">
          <source src={inicioVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="position-absolute top-50 start-50 translate-middle text-center">
      </div>
      <Carousel />
      <Texto/>
      <Ubicacion/>
      
      </div>
    </div>
  );
}

export default Inicio;
