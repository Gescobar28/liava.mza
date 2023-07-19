import React from "react";
import './Card.css'

export default function Card({ id, image, name, price, size }) {
  return (
    <div class="col cardHeight">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." height="60%" />
        <div class="card-body">
          <p class="card-text m-0">
            <strong>{name}</strong>
          </p>
          <p className="">
            <small className="text-success">${price}</small>
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
