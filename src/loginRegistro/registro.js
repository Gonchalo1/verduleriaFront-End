// src/components/Registro.js
import { React, useState } from '../importacionesComunes/importacionesComunes';
import { useNavigate } from 'react-router-dom';
import CambiarDatos from '../cambiarDatos/cambiarDatos';

function Registro({ setUserId }) {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [sexo, setSexo] = useState('Masculino');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const navigate = useNavigate();

    const handleNombreUsuarioChange = (e) => {
        setNombreUsuario(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleEdadChange = (e) => {
        setEdad(e.target.value);
    };

    const handleSexoChange = (e) => {
        setSexo(e.target.value);
    };

    const handleContraseñaChange = (e) => {
        setContraseña(e.target.value);
    };

    const handleConfirmarContraseñaChange = (e) => {
        setConfirmarContraseña(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (contraseña.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            return;
        }

        if (contraseña !== confirmarContraseña) {
            alert('Las contraseñas no coinciden.');
            return;
        }
        
        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nombreUsuario,
                    email: email,
                    password: contraseña,
                    password_confirmation: confirmarContraseña,
                    gender: sexo,
                    age: edad,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const userId = data.user.id;
                setUserId(userId);               
                localStorage.setItem('userId', userId);
                alert('Registro exitoso');
                setRegistroExitoso(true); // Registro exitoso
                navigate("/")
            } else {
                alert('Error al registrar');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            alert('Ocurrió un error al enviar la solicitud. Por favor, verifica tu conexión a Internet.');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className="text-center m-5" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName1" className="form-label">Nombre De Usuario</label>
                            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" value={nombreUsuario} onChange={handleNombreUsuarioChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmailChange} />
                            <label htmlFor="exampleInputAge" className="form-label">Edad</label>
                            <input type="number" className="form-control" id="exampleInputAge1" value={edad} onChange={handleEdadChange} />
                            <label htmlFor="exampleInputSex" className="form-label">Sexo</label>
                            <select className="form-select" id="exampleInputGender1" value={sexo} onChange={handleSexoChange}>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={contraseña} onChange={handleContraseñaChange} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirmar Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputConfirmPassword1" value={confirmarContraseña} onChange={handleConfirmarContraseñaChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
            {registroExitoso && <CambiarDatos userId={localStorage.getItem('userId')} />}
        </div>
    );
}

export default Registro;
