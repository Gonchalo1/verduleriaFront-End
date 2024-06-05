import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap CSS
import { Link } from 'react-router-dom'; // Importa el componente Link de React Router

import carousel1 from './imagenes/carousel1.webp';
import carousel2 from './imagenes/carousel2.webp';
import carousel3 from './imagenes/carousel3.jpeg';
import carousel4 from './imagenes/carousel4.jpeg';
import carousel5 from './imagenes/carousel5.jpeg';
import carousel6 from './imagenes/carousel6.jpeg';
import carousel7 from './imagenes/carousel7.jpeg';
import './carousel.css'; // Importa tu archivo CSS personalizado

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {/* Botones de indicadores */}
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
      </div>
      <div className="carousel-inner">
        {/* Carrusel de imágenes */}
        <div className="carousel-item active">
          <Link to="/productos">
            <img src={carousel1} className="d-block w-100" alt="First slide" />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/productos">
            <img src={carousel2} className="d-block w-100" alt="Second slide" />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/productos">
            <img src={carousel3} className="d-block w-100" alt="Third slide" />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/productos">
            <img src={carousel4} className="d-block w-100" alt="Fourth slide" />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/productos">
            <img src={carousel5} className="d-block w-100" alt="Fifth slide" />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/productos">
            <img src={carousel6} className="d-block w-100" alt="Sixth slide" />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/productos">
            <img src={carousel7} className="d-block w-100" alt="Seventh slide" />
          </Link>
        </div>
      </div>
      {/* Controles del carrusel */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
