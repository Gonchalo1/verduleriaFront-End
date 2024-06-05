import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa el componente Link
import apiClient from './axios.js';
import './productos.css';

const Productos = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get('/productos');
        setProducts(response.data);
        console.log(response.data); // Verifica que los datos se estén recibiendo correctamente
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return (
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <div className="card product-card">
              <img src={selectedProduct.image} className="card-img-top product-image" alt={`imagen-${selectedProduct.name}`} />
              <div className="card-body">
                <h5 className="card-title">{selectedProduct.name}</h5>
                <p className="card-text">{selectedProduct.description}</p>
                <p className="card-text">Precio: ${selectedProduct.price.toFixed(2)}</p>
                {/* Utiliza el componente Link para redirigir a la sección de datos del usuario */}
                <Button variant="primary" as={Link} to="/DatosUsuario">Ordenar Ahora</Button>
                <Button variant="secondary" onClick={handleBackClick} className="mt-2">Volver a Productos</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} className="bg-light sidebar">
          <Nav className="flex-column">
            {products.map(product => (
              <Nav.Link key={product.id} href={`#${product.id}`} className="custom-nav-link">
                {product.name}
              </Nav.Link>
            ))}
          </Nav>
        </Col>

        <Col xs={12} md={9}>
          <Row>
            {products.map(product => (
              <Col key={product.id} xs={12} sm={6} md={6} lg={4} className="mb-4">
                <div id={product.id} className="card product-card">
                  <img src={product.image} className="card-img-top product-image" alt={`imagen-${product.name}`} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Kilo: ${product.price.toFixed(2)}</p>
                    <Button variant="primary" onClick={() => handleOrderClick(product)}>Seleccionar</Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Productos;
