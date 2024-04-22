import React from 'react';
import Footer from '../footer/footer';
import Nav from '../nav/nav';
import inicio from './inicio.jpg';

function Inicio() {
  return (
    <div className="container-fluid">
      <Nav />
      <div className="row">
        <div className="col">
          <img src={inicio} className="img-fluid" alt="Inicio" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Inicio;
