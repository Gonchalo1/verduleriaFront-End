import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './loginRegistro/login';
import Registro from './loginRegistro/registro';
import Perfil from './perfil/perfil';
import Nosotros from './sobreNosotros/nosotros';
import Inicio from './inicio/inicio';
import Footer from './footer/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
