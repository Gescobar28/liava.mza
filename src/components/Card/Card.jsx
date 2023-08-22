import React from "react";
import "./Card.css";

export default function Card({ id, image, name, price, size, season }) {
  return (
    <div class="col ">
      <div class="card">
        <a className="" href={`/producto/${id}`}>
          <img src={image} class="card-img-top" alt="..." />
        </a>
        <div class="card-body">
          <a className="m-0" href={`/producto/${id}`}>
            {name}
          </a>
          <p className="">
            <small className="text-success">${price}</small>
          </p>
          <p className="">
            <small className="text-success">{season}</small>
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
