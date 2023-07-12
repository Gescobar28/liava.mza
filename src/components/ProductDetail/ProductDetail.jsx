import React from "react";
import "./ProductDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import Similar from "./Similar/Similar";

export default function ProductDetail() {
  return (
    <div>
      <div className="col d-md-flex container border bg-white my-sm-5">
        <div className="col container py-5 d-flex justify-content-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnnF2Se6w0a41puyCPwRrpe3JhvA36mdDI8pC_NdIvr2-he1N5Rpqt1G8fhIBv7HYBl4"
            alt=".."
          />
        </div>
        <div className="col container py-5">
          <h4>Remera de Jirafa</h4>
          <p className="my-0">$4.500</p>
          <small>3 cuotas sin interes de $1.500</small>
          <p className="text-secondary my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            tempora sit maiores quaerat tenetur, quasi possimus iste est, fugiat
            ut doloribus delectus quidem quisquam minus repellat ducimus
            assumenda amet provident.
          </p>
          <span>Talle:</span>
          <select className="ms-4">
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <span className="d-block text-secondary my-2">
            <small>Disponibles 2 unidades</small>
          </span>
          <ItemCount />
          <div className="d-flex justify-content-center">
            <button className="btn btn-success my-3">AGREGAR AL CARRITO</button>
          </div>
          <hr></hr>
          <p>
            <small>
              Envíos a todo el país. Gratis en compras superiores a $30.000
            </small>
          </p>
          <p>
            <small>Entregas en Mendoza(Consultar localidades).</small>
          </p>
        </div>
      </div>
      <Similar />
    </div>
  );
}
