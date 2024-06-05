import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import logo from '../nav/logo.png';

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div className='div1 text-center'>
          <img src={logo} alt="Logo" />
          <p>Verduleria de barrio al alcance tullo</p>
        </div>
        <div className='div2 text-center'>
          <h1>MENU</h1>
          <Link className="navbar-brand" to="/productos">Productos </Link>
          <Link className="navbar-brand" to="/">Home </Link>
          <Link className="navbar-brand" to="/nosotros"><button>Contacto</button></Link>
        </div>
        <div className='div3 text-center'>
          <h1>CONTACTO</h1>
          <p>Dirección: Virgen de las Nieves 3900-3948, Mendoza</p>
        </div>
        <div className='div4 text-center'>
          <h1>REDES SOCIALES</h1>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
