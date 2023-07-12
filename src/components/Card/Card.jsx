import React from "react";

export default function Card({ image, id }) {
  return (
    <div class="col">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text m-0">
            <strong>Remera de jirafa</strong>
          </p>
          <p className="">
            <small className="text-success">$3.500</small>
          </p>
          <a
            href={`/producto/${id}`}
            class="btn btn-success text-white d-block rounded-0"
            alt=""
          >
            <small>Agregar al carrito</small>
          </a>
        </div>
      </div>
    </div>
  );
}
