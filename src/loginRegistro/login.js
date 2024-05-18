// src/components/Perfil.js
import { React, useState, useNavigate } from '../importacionesComunes/importacionesComunes';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Obtén la función de navegación

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const userId = data.user.id; // Ajusta esto según la estructura de tu respuesta
        localStorage.setItem('userId', userId);
        alert("Inicio de sesión exitoso");
        navigate('/'); // Redirige al usuario a INICIO
      } else {
        // Manejar errores, mostrar mensajes de error, etc.
        alert("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      alert("Ocurrió un error al enviar la solicitud. Por favor, verifica tu conexión a Internet.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <form className="text-center" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">Dirección de email</label>
              <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button type="submit" className="btn btn-primary mb-4">Enviar</button>
            <p><a href="#">¿Olvidaste tu contraseña?</a></p>
          </form>        
        </div>
      </div>
    </div>
  );
}

export default Login;
