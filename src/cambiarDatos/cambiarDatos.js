// src/components/CambiarDatos.js
import { React, useState } from '../importacionesComunes/importacionesComunes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function CambiarDatos({ userId }) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [sexo, setSexo] = useState('Masculino');
    const [edad, setEdad] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSexoChange = (e) => {
        setSexo(e.target.value);
    };

    const handleEdadChange = (e) => {
        setEdad(e.target.value);
    };

    const handleContraseñaChange = (e) => {
        setContraseña(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nombre,
                    email: email,
                    password: contraseña,
                    gender: sexo,
                    age: edad,
                }),
            });

            if (response.ok) {
                alert('Actualización exitosa');
            } else {
                alert('Error al cambiar los datos, probablemente tipeaste algo mal');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            alert('Ocurrió un error al enviar la solicitud. Por favor, verifica tu conexión a Internet.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container text-center mt-5">
                <div className="row justify-content-start">
                    <div className="col-4">
                        <FontAwesomeIcon icon={faUser} size="3x" />
                    </div>
                    <div className="col-8">
                        <h2>DATOS-NUEVOS</h2>
                    </div>
                </div>
                <div className="row justify-content-start">
                    <div className="col-4">
                        <label htmlFor="exampleInputName1" className="form-label">NOMBRE</label><br/>
                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" value={nombre} onChange={handleNombreChange} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">EMAIL</label><br/>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmailChange} />
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-4">
                        <label htmlFor="exampleInputSex1" className="form-label">SEXO</label><br/>
                        <select className="form-select" id="exampleInputSex1" value={sexo} onChange={handleSexoChange}>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label htmlFor="exampleInputAge1" className="form-label">EDAD</label><br/>
                        <input type="number" className="form-control" id="exampleInputAge1" aria-describedby="emailHelp" value={edad} onChange={handleEdadChange} min="5" max="120" />
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-4">
                        <label htmlFor="exampleInputPassword1" className="form-label">CONTRASEÑA</label><br/>
                        <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" value={contraseña} onChange={handleContraseñaChange} />
                    </div>
                    <div className="col-5 mt-3">
                        <button type="submit" className="btn btn-primary m-1">Enviar</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default CambiarDatos;
