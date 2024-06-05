import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import Nav from './nav/nav';

import Login from './loginRegistro/login';
import Registro from './loginRegistro/registro';
import Perfil from './perfil/perfil';
import CambiarDatos from './cambiarDatos/cambiarDatos';
import Nosotros from './sobreNosotros/nosotros';
import Inicio from './inicio/inicio';
import Footer from './footer/footer';
import Productos from './productos/productos';
// Importa DatosUsuario desde la carpeta datosUsuario
import DatosUsuario from './productos/datosUsuario/datosUsuario';


function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav /> {/* Esto hará que el nav se renderice en todas las páginas */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro setUserId={setUserId} />} />
          <Route path="/productos" element={<Productos/>} />
          
          <Route path="/datosUsuario" element={<DatosUsuario />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/perfil" element={<Perfil userId={userId} />} />
          <Route path="/cambiarDatos" element={<CambiarDatos userId={userId} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
