// src/components/ProductSection.js
import React from 'react';
import ProductoModelo from './productoModelo';
import ProductoArray from './productoArray';

const ProductoSeccion = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        {/* Barra de búsqueda */}
        <div className="col-12 mb-3">
          <input type="text" className="form-control" placeholder="Buscar productos..." />
        </div>
      </div>
      
      <div className="row">
        {/* Nav de categorías */}
        <div className="col-md-3 mb-3">
          <nav className="nav flex-column">
            <a className="nav-link active" href="#">Categoría 1</a>
            <a className="nav-link" href="#">Categoría 2</a>
            <a className="nav-link" href="#">Categoría 3</a>
            <a className="nav-link" href="#">Categoría 4</a>
          </nav>
        </div>
        
        {/* Grilla de productos */}
        <div className="col-md-9">
          <div className="row">
            {ProductoArray.map((producto, index) => (
              <productoModelo
                key={index}
                imagen={ProductoModelo.imagen}
                titulo={ProductoModelo.titulo}
                descripcion={ProductoModelo.descripcion}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoSeccion;
