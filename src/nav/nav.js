import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import logo from '../nav/logo.png';

function Nav() {
  return (
    <div>
      <div className="d-none d-sm-block"> {/* Esta clase oculta el div en pantallas pequeñas */}
        <div className="d-flex justify-content-around align-items-center py-2 border-bottom contact-info">
          <p className="mb-0"><i className="bi bi-envelope"></i> Email: eljohnny@gmail.com</p>
          <p className="mb-0"><i className="bi bi-clock"></i> Horas de trabajo: Lunes - Domingo, 08 am - 08 pm</p>
          <p className="mb-0"><i className="bi bi-telephone"></i> Llamanos: +012 (345) 678 99</p>
        </div>
      </div>
      <header>
        <nav className="navbar bg-white navbar-rounded" data-bs-theme="dark">
          <div className="container-fluid navbar-horizontal">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <div className='div-principal'>
              <div className='div1'>
                <Link className="navbar-brand" to="/productos">Productos</Link>
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/nosotros">Contacto</Link>
              </div>
              <div className='div2'>
                <Link className="navbar-brand" to="/login"><i className="bi bi-door-open"></i> Iniciar Sesión</Link>
                <Link className="navbar-brand" to="/registro"><i className="bi bi-card-checklist"></i> Registro</Link>
                <Link className="navbar-brand" to="/perfil"><i className="bi bi-person-lines-fill"></i> Perfíl</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
