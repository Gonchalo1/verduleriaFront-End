import React from 'react';
import Nav from '../nav/nav';
import inicio from './inicio.jpg';

function Inicio() {
  return (
    <div className="container-fluid">
      <Nav />
      <div className="row position-relative">
        <div className="col">
          <img src={inicio} className="img-fluid" alt="Inicio" />
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <h1 className="text-dark fs-lg-5 fs-md-4 fs-sm-3 fs-2">
              ¡Descubre la frescura que necesitas en cada bocado! 
            </h1>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Inicio;
