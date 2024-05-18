import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './loginRegistro/login';
import Registro from './loginRegistro/registro';
import Perfil from './perfil/perfil';
import CambiarDatos from './cambiarDatos/cambiarDatos';
import Nosotros from './sobreNosotros/nosotros';
import Inicio from './inicio/inicio';
import Footer from './footer/footer';

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
        <Routes>
          <Route path="/perfil" element={<Perfil userId={userId} />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro setUserId={setUserId} />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cambiarDatos" element={<CambiarDatos userId={userId} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
