import React, { useState } from "react";
import "./Products.css";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import {
  orderByPriceAsc,
  orderByPriceDesc,
} from "../../../redux/action/actionsProducts";

export default function Products() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { products, productsFiltered } = state.productReducer;
  const [currentPage, setCurrentPage] = useState(1);
  const [orderPage, setOrderPage] = useState();
  const [productsPerPage, setProductsPerPage] = useState(10);
  const numLastProduct = productsPerPage * currentPage;
  const numFirstProduct = numLastProduct - productsPerPage;
  const currentProducts = products.slice(numFirstProduct, numLastProduct);
  const currentProductsFiltered = productsFiltered?.slice(
    numFirstProduct,
    numLastProduct
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleOrderPriceDesc(e) {
    e.preventDefault();
    dispatch(orderByPriceDesc());
    setCurrentPage(1);
    setOrderPage(`Ordenado ${e.target.value}`);
  }

  function handleOrderPriceAsc(e) {
    e.preventDefault();
    dispatch(orderByPriceAsc());
    setCurrentPage(1);
    setOrderPage(`Ordenado ${e.target.value}`);
  }

  return (
    <div className="col mx-lg-4 bg-white mb-lg-2">
      <div className="d-flex pt-5">
        <div className="col d-flex pe-2 justify-content-center justify-content-md-end mb-5 mb-lg-0">
          <div className="">
            <Sidebar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div
            class="d-flex w-80 border btn ms-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <p className="me-2 mb-0">Ordenar</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#3b3b3b"
                d="m18 21l-4-4h3V7h-3l4-4l4 4h-3v10h3M2 19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2Z"
              />
            </svg>
            <ul class="dropdown-menu">
              <li>
                <button
                  class="dropdown-item"
                  value="mayor"
                  onClick={(e) => handleOrderPriceAsc(e)}
                >
                  Mayor precio
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  value="menor"
                  onClick={(e) => handleOrderPriceDesc(e)}
                >
                  Menor precio
                </button>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="container">
        <small className="ms-3 text-secondary">
          <strong>
            {productsFiltered[0] ? productsFiltered.length : products.length}
          </strong>{" "}
          productos
        </small>
      </div>
      <div className="col container">
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4 py-4">
          {!currentProducts[0] &&
          !currentProductsFiltered[0] &&
          !productsFiltered[0]
            ? "No se encuentran productos disponibles"
            : productsFiltered[0] && !currentProductsFiltered[0]
            ? productsFiltered.map((el, index) => (
                <Card
                  image={el.image}
                  id={el.id}
                  name={el.name}
                  price={el.price}
                  season={el.season}
                />
              ))
            : productsFiltered[0] && currentProductsFiltered[0]
            ? currentProductsFiltered.map((el, index) => (
                <Card
                  image={el.image}
                  id={el.id}
                  name={el.name}
                  price={el.price}
                  season={el.season}
                />
              ))
            : currentProducts.map((el, index) => (
                <Card
                  image={el.image}
                  id={el.id}
                  name={el.name}
                  price={el.price}
                  season={el.season}
                />
              ))}
        </div>
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        allProducts={
          productsFiltered[0] ? productsFiltered.length : products.length
        }
        pagination={pagination}
      />
    </div>
  );
}
