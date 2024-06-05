import React from 'react';
import './ubicacion.css'; 


function Ubicacion() {
  return (
    <div className="ubicacion-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6862143.794019821!2d-78.58708904770464!3d-32.88081599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0ee7b7aa74b5%3A0x9b6791d829f51ec7!2sFrutas%20Y%20Verduras%20EL%20JHONNY!5e0!3m2!1ses-419!2sar!4v1716043677650!5m2!1ses-419!2sar"
        title="Mapa de Frutas y Verduras EL JHONNY"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="ubicacion-iframe"
      ></iframe>
    </div>
  );
}

export default Ubicacion;
