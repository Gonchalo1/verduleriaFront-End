// src/components/Login.js
import './texto.css'; 


function Texto() {
  return (
    <div className="container login-container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 form-section">
          <div className="form-container">
            <div>
              <div className='div1'>
            <h5>El Johnny</h5>
            </div>
            <div className='div2'>
            <h1>¡Distribuición y mucho más!</h1>
            </div>
            <div className='div3'>
            <h6>Somos una empresa apasionada por lo que hace, la comercialización y distribución de bienes alimenticios.
            </h6>
            </div>
            <div className='div4'>
               <h6>Actualmente somos proveedores y abastecemos todo tipo de clientes:
                Restaurantes, Cafeterías, Hoteles, Clínicas, Comedores, Colegios, Caterings y Empresas.
                Hemos crecido y ampliado nuestro catálogo.
                </h6>
                </div>
                </div>
          </div>
        </div>
        <div className="col-md-6 image-section">
          {/* La imagen de fondo está en el CSS */}
        </div>
        <div className='serCliente'>  
      <h2>¿QUERES SER CLIENTE?</h2>
      <button><i class="bi bi-telephone-fill"></i> Contacto</button>
    </div>

      </div>
    </div>
  );
}

export default Texto;
