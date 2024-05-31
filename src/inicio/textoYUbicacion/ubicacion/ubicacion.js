import React from 'react';
import './ubicacion.css'; 


function Ubicacion() {
  return (
    <div className="ubicacion-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20829.50202212472!2d-58.656608868641925!3d-34.69405282391667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7ec7393b099%3A0x86b4761d35ad6a0!2sVerduler%C3%ADa%20Jhonny!5e0!3m2!1ses-419!2sar!4v1716906201948!5m2!1ses-419!2sar"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="mapa"
        className="ubicacion-iframe"
      ></iframe>
    </div>
  );
}

export default Ubicacion;
