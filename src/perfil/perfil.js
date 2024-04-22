import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer/footer';
function Perfil() {
  return (
    <div className="container text-center mt-5"> 
      <div className="row justify-content-start">
        <div className="col-4">
          <FontAwesomeIcon icon={faUser} size="3x" />
        </div>
        <div className="col-8">
          <h2>PERFIL</h2>
        </div>
      </div>
      <div className="row justify-content-start">
        <div className="col-4">
          <label htmlFor="exampleInputName1" className="form-label">NOMBRE</label><br/>
          <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" readOnly/>
        </div>
        <div className="col-4">
          <label htmlFor="exampleInputNickname1" className="form-label">APELLIDO</label><br/>
          <input type="text" className="form-control" id="exampleInputNickname1" aria-describedby="nicknameHelp" readOnly/>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <label htmlFor="exampleInputEmail1" className="form-label">EMAIL</label><br/>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly/>
        </div>
        <div className="col-4">
          <label htmlFor="exampleInputPhone1" className="form-label">TELÉFONO</label><br/>
          <input type="text" className="form-control" id="exampleInputPhone1" aria-describedby="phoneHelp" readOnly/>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-4">
          <label htmlFor="exampleInputSex1" className="form-label">SEXO</label><br/>
          <input type="text" className="form-control" id="exampleInputSex1" aria-describedby="sexHelp" readOnly/>
        </div>
        <div className="col-4">
          <label htmlFor="exampleInputAge1" className="form-label">EDAD</label><br/>
          <input type="text" className="form-control" id="exampleInputAge1" aria-describedby="emailHelp" readOnly/>
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col-4">
          <label htmlFor="exampleInputPassword1" className="form-label">CONTRASEÑA</label><br/>
          <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" readOnly/>
        </div>
        <div className="col-5 mt-3">
          <button className="btn btn-danger m-1">Cerrar sesión</button>
          <button type="button" class="btn btn-info">Cambiar datos</button>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default Perfil;
