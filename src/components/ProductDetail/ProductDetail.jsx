import React, { useEffect } from "react";
import "./ProductDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import Similar from "./Similar/Similar";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById, getProducts } from "../../redux/action/actionsProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { product, listProducts } = state.productReducer;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch]);


  const productSelect = listProducts.filter((el) => el.name === product.name);

  return (
    <div>
      <div className="col d-md-flex container border bg-white my-sm-5">
        <div className="col container py-5 d-flex justify-content-center">
          <img src={product.image} alt=".." className="img-fluid"/>
        </div>
        <div className="col container py-5">
          <h4>{product.name}</h4>
          <p className="my-0">${product.price}</p>
          <small>3 cuotas sin interes de ${product.price / 3}</small>
          <p className="text-secondary my-4">{product.detail}</p>
          <span>Talle: </span>
          <select className="ms-4">
            {productSelect.map((el) => (
              <option>{el.size}</option>
            ))}
          </select>
          <span className="d-block text-secondary my-2">
            <small>Disponibles {product.stock} unidades</small>
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
      <Similar 
        productDetail = {product}
      />
    </div>
  );
}
