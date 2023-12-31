import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="d-flex justify-content-center w-100 bg-white mb-0">
      <footer className="container row d-flex justify-content-evenly py-3 text-dark">
        <section className="row col-lg-3">
          <h5>Ayuda</h5>
          <a href="/">¿Cómo comprar?</a>
          <a href="/">Preguntas Frecuentes</a>
          <a href="/">Cambios y Devoluciones</a>
        </section>
        <section className="row col-lg-3">
          <h5>Contacto</h5>
          <a href="/">WhatsApp</a>
          <a href="/">Correo</a>
          <a href="/">Redes</a>
        </section>
        <section className="row col-lg-3">
          <h5>Envíos</h5>
          <a href="/">Métodos de envío</a>
          <a href="/">Costos de envío</a>
          <a href="/">Seguimiento de envíos</a>
        </section>
        <section className="row col-lg-3">
          <h5>Suscribirse</h5>
          <p className="">
        <small>
          Registráte con tu correo para recibir todas las novedades!
        </small>
      </p>
      <div class="mb-3 d-flex">
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
          {/* <a href="/">Métodos de envío</a>
          <a href="/">Costos de envío</a>
          <a href="/">Seguimiento de envíos</a> */}
        </section>
        <div className="d-flex justify-content-center pt-4">
          <small className="text-dark">
            &copy; Todos los derechos reservados
          </small>
        </div>
      </footer>
    </div>
  );
}
