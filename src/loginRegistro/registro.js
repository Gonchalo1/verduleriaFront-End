
import React, { useState } from 'react';
import Footer from '../footer/footer';
function Registro() {

    const [edad, setEdad] = useState('');

    const handleEdadChange = (e) => {
      const value = e.target.value;
      if (value >= 1 && value <= 120) {
        setEdad(value);
      }
    };
    const [contrasena, setContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
  
    const handleContrasenaChange = (e) => {
      setContrasena(e.target.value);
    };
  
    const handleConfirmarContrasenaChange = (e) => {
      setConfirmarContrasena(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validación de contraseña
      if (contrasena.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
      }
  
      // Validación de coincidencia de contraseña y confirmación de contraseña
      if (contrasena !== confirmarContrasena) {
        alert('Las contraseñas no coinciden.');
        return;
      }
    };

    
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="text-center m-5" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">Nombre De Usuario</label>
              <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAge1" className="form-label">Edad</label>
              <input type="number" className="form-control" id="exampleInputAge1" value={edad} onChange={handleEdadChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputGender1" className="form-label">Sexo</label>
              <select className="form-select" id="exampleInputGender1">
                <option>Masculino</option>
                <option>Femenino</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" value={contrasena} onChange={handleContrasenaChange}/>
            </div>
            <div className="mb-5">
              <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirmar Contraseña</label>
              <input type="password" className="form-control" id="exampleInputConfirmPassword1"  value={confirmarContrasena} onChange={handleConfirmarContrasenaChange} />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Registro;
