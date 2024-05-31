import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
              </ul>
            
              <p>
                © 2024 |Verduleria EL JOHNNY | Buenos Aires
            </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
