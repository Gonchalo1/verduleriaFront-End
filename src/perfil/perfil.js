// src/components/Perfil.js
import { React, useState, useEffect, Link, useNavigate } from '../importacionesComunes/importacionesComunes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Perfil({ userId }) {
  const navigate = useNavigate(); // Obtén la función de navegación
  const [userData, setUserData] = useState({
    nombre: '',
    email: '',
    sexo: '',
    edad: '',
    
  });
//PETICION 1, OBTENER DATOS DEL USUARIO Y MOSTRARLOS EN LOS INPUT CORRESPONDIENTES
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

  
//PETICION 2, BORRAR DATOS DE USUARIO
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
          localStorage.removeItem('userId'); // Elimina el ID del usuario del localStorage
          navigate('/login'); // Redirige al usuario a la página de inicio de sesión
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
          <label htmlFor="exampleInputName1" className="form-label">NOMBRE</label><br />
          <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" value={userData.nombre} readOnly />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <label htmlFor="exampleInputEmail1" className="form-label">EMAIL</label><br />
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.email} readOnly />
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-4">
          <label htmlFor="exampleInputSex1" className="form-label">SEXO</label><br />
          <input type="text" className="form-control" id="exampleInputSex1" aria-describedby="sexHelp" value={userData.sexo} readOnly />
        </div>
        <div className="col-4">
          <label htmlFor="exampleInputAge1" className="form-label">EDAD</label><br />
          <input type="text" className="form-control" id="exampleInputAge1" aria-describedby="emailHelp" value={userData.edad} readOnly />
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col-5 mt-3">
          <Link to="/login">
            <button className="btn btn-danger m-1">Cerrar sesión</button>
          </Link>
          <Link to="/CambiarDatos">
            <button className="btn btn-info m-1">CambiarDatos</button>
          </Link>
          <button type="button" className="btn btn-danger m-1" onClick={handleDeleteAccount}>Borrar Cuenta</button>
        </div>
      </div>
      
    </div>
  );
}

export default Perfil;
