import React from 'react';
import Footer from '../footer/footer';
function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="text-center">
        <div className="mb-5">
          <label htmlFor="exampleInputEmail1" className="form-label">Dirección de email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-5">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary mb-5">Enviar</button>
        <p><a href="#">¿Olvidaste tu contraseña?</a></p>
      </form>
      <Footer/>
    </div>
  );
}

export default Login;
