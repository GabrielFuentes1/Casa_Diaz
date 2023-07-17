import React from 'react';
import Nav from "../../components/nav/Nav";
import "./User_info.css";

function User_info() {
  return (
    <div>
        <Nav/>
        <br/><br/>
        <div className="container container-cambios-devoluciones">

    <ul className="nav flex-column">
  <li className="nav-item">
    <a className="nav-link active" href="#">Mi cuenta</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Informacion de la cuenta</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Mis pedidos</a>
  </li>
</ul>
<div/>

<form>
                        <div className="mb-3">
                          <label htmlFor="nombre" className="form-label">Nombre</label>
                          <input type="text" className="form-control" id="nombre"defaultValue="Rodrigo"/>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="nombre" className="form-label">Apellido</label>
                          <input type="text" className="form-control" id="nombre" defaultValue="Perez"/>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                         <label class="form-check-label" for="flexCheckDefault">
                           Cambiar correo electrónico
                        </label>
                        <br/>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultValue="Perez"/>
                         <label class="form-check-label" for="flexCheckDefault">
                           Cambiar contraseña
                        </label>
                        <br/>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultValue="Perez"/>
                         <label class="form-check-label" for="flexCheckDefault">
                           Cambiar atributo de cliente
                        </label>
                        <br/>

                        <h5>Retroceder</h5>


                        <br/><br/><br/><br/>

                        </div>


                        </form>
<div/>



    </div>
    </div>
  )
  
}

export default User_info