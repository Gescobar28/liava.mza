import React from "react";
import "./Sidebar.css";

const category = ["Bebés", "Bebas", "Nenes", "Nenas", "Remera", "Calza"];
const size = ["S", "M", "L", "XL"];
const season = ["Verano", "Invierno", "Primavera", "Otoño"];


export default function Sidebar() {
  return (
    <div className="d-flex justify-content-center btn border">
      <i class="bi bi-funnel"></i>
      <a
        class="ms-2"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Filtrar
      </a>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Filtros
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <p className=""><strong>Categorías</strong></p>
        {category.map(el =>
        <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id={el}
        />
        <label class="form-check-label" for={el}>
          {el}
        </label>
      </div>
        )}
        <p className="font-weight-bold mt-3"><strong>Talles</strong></p>
        {size.map(el =>
        <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id={el}
        />
        <label class="form-check-label" for={el}>
          {el}
        </label>
      </div>
        )}
        <p className="font-weight-bold mt-3"><strong>Temporadas</strong></p>
        {season.map(el =>
        <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id={el}
        />
        <label class="form-check-label" for={el}>
          {el}
        </label>
      </div>
        )}
        </div>
      </div>
    
    </div>
  );
}
