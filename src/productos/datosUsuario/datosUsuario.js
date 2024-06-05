import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './datosUsuario.css';

const DatosUsuario = () => {
  const [direccion, setDireccion] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [cantidad, setCantidad] = useState(1);

  const handleEnviarPedido = () => {
    // Simulación de tiempo estimado aleatorio
    const tiempoEstimado = Math.floor(Math.random() * 60) + 30; // Entre 30 y 90 minutos
    alert(`Tu pedido llegará en aproximadamente ${tiempoEstimado} minutos.`);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Haz tu pedido</h1>
          <Form>
            <Form.Group controlId="formDireccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formMetodoPago">
              <Form.Label>Método de pago</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu método de pago" value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formCantidad">
              <Form.Label>Cantidad de kilos</Form.Label>
              <Form.Control type="number" placeholder="Ingresa la cantidad de kilos" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
            </Form.Group>
            <br></br>
            
            <Button variant="primary" onClick={handleEnviarPedido}>Enviar Pedido</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DatosUsuario;
