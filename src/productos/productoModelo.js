// src/components/Producto.js
import React from 'react';

const ProductoModelo = ({ imagen, titulo, descripcion }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imagen} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
  );
};

export default ProductoModelo;
