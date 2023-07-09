import React from "react";
import './InfoSeparator.css'

export default function InfoSeparator() {
  return (
    <div className="container d-flex justify-content-center py-5">
      <section className="col-lg-4 text-center  px-1">
        <article>
          <div>
            <i class="bi bi-truck"></i>
          </div>
          <span className="d-block">Envios Gratis</span>
          <small>En compras superiores a $30.000</small>
        </article>
      </section>
      <section className="col-lg-4 text-center  px-1">
        <article>
          <div>
            <i class="bi bi-cash"></i>
          </div>
          <span>Cuotas Sin Interés</span>
        </article>
      </section>
      <section className="col-lg-4 text-center  px-1">
        <article>
          <div>
            <i class="bi bi-info-circle"></i>
          </div>
          <span className="d-block">Ayuda</span>
          <small>Contáctanos para más información</small>
        </article>
      </section>
    </div>
  );
}
