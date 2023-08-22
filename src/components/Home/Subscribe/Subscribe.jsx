import React from "react";
import './Subscribe.css'

export default function Susbcribe() {
  return (
    <div className="container my-5">
      <h4 className="text-center">Suscribete</h4>
      <p className="text-center">
        <small>
          Registráte con tu correo para recibir todas las novedades!
        </small>
      </p>
      <div class="mb-3 d-flex justify-content-center">
        <label for="exampleFormControlInput1" class="form-label"></label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="nombre@correo.com"
        />
        <div class="">
          <button class="btn btn-primary" type="submit">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
