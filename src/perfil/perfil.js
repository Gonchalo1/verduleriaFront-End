import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Perfil({ userId }) {
  const navigate = useNavigate(); 
  const [userData, setUserData] = useState({
    nombre: '',
    email: '',
    sexo: '',
    edad: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/users/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setUserData({
            nombre: data.name,
            email: data.email,
            sexo: data.gender,
            edad: data.age,
          });
        } else {
          console.error('Error al obtener los datos del usuario');
        }
      } catch (error) {
        console.error('Error al enviar la solicitud:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.');

    if (confirmDelete) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/users/${userId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          alert('Cuenta eliminada exitosamente');
          localStorage.removeItem('userId'); 
          navigate('/login');
        } else {
          alert('Error al eliminar la cuenta. Por favor, inténtalo de nuevo.');
        }
      } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        alert('Ocurrió un error al enviar la solicitud. Por favor, verifica tu conexión a Internet.');
      }
    }
  };

  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center mb-4">
        <div className="col-auto">
          <FontAwesomeIcon icon={faUser} size="4x" />
          <h2 className="mt-3">PERFIL</h2>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <label htmlFor="exampleInputName1" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="exampleInputName1" value={userData.nombre} readOnly />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" value={userData.email} readOnly />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <label htmlFor="exampleInputSex1" className="form-label">Sexo</label>
          <input type="text" className="form-control" id="exampleInputSex1" value={userData.sexo} readOnly />
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <label htmlFor="exampleInputAge1" className="form-label">Edad</label>
          <input type="text" className="form-control" id="exampleInputAge1" value={userData.edad} readOnly />
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-auto">
          <Link to="/login">
            <button className="btn btn-danger m-1">Cerrar sesión</button>
          </Link>
          <Link to="/CambiarDatos">
            <button className="btn btn-info m-1">Cambiar Datos</button>
          </Link>
          <button type="button" className="btn btn-danger m-1" onClick={handleDeleteAccount}>Borrar Cuenta</button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
