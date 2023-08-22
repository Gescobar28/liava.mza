import React, { useState } from "react";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  filterByGenre,
  filterBySeason,
  filterByType,
  removeFilterGenre,
  removeFilterType,
} from "../../../redux/action/actionsProducts";

// const category = ["Bebe", "Beba", "Niño", "Niña"];
const season = ["Verano", "Invierno", "Primavera", "Otoño"];

export default function Sidebar({ currentPage, setCurrentPage }) {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState();
  const state = useSelector((state) => state);
  const { products, allProducts, productsFiltered } = state.productReducer;

  const navigate = useNavigate();

  const category =
    productsFiltered[0] && allProducts.length !== products.length && !params
      ? [...new Set(productsFiltered.map((el) => el.genre))]
      : [...new Set(allProducts.map((el) => el.genre))];
  const size =
    productsFiltered[0] && allProducts.length !== products.length && !params
      ? [...new Set(productsFiltered.map((el) => el.size))]
      : [...new Set(allProducts.map((el) => el.size))];
  const type =
    productsFiltered[0] && allProducts.length !== products.length && !params
      ? [...new Set(productsFiltered.map((el) => el.category))]
      : [...new Set(allProducts.map((el) => el.category))];

  function handleFilterCategory(e) {
    const category = e.target.value;
    if (e.target.checked === false) {
      dispatch(removeFilterGenre(e.target.value));
      setFilter(`Filtrado ${e.target.value}`);
    } else {
      dispatch(filterByGenre(category));
      setFilter(`Filtrado ${e.target.value}`);
    }
  }

  function handleFilterType(e) {
    const type = e.target.value;
    if (e.target.checked === false) {
      dispatch(removeFilterType(e.target.value));
      setFilter(`Filtrado ${e.target.value}`);
    } else {
      console.log(type);
      dispatch(filterByType(type));
      setFilter(`Filtrado ${e.target.value}`);
    }
  }

  function handleFilterSeason(e) {
    setFilter(`Filtrado ${e.target.value}`);
    let season = e.target.value.toLowerCase();
    if (season === "otoño") {
      season = "otono";
    }
    navigate(`/temporada/${season}`);
    dispatch(filterBySeason(season));
    setCurrentPage(1);
  }

  return (
    <div className="d-flex justify-content-center btn border">
      <div
        className="d-flex"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#3b3b3b"
            d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2h1.17zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h7.17zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h1.17z"
          />
        </svg>
        <p class="mb-0">Filtrar</p>
      </div>
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
          <p className="">
            <strong>Categoría</strong>
          </p>
          {category.map((el) => (
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value={el}
                id={el}
                onChange={(el) => handleFilterCategory(el)}
              />
              <label class="form-check-label" for={el}>
                {el}
              </label>
            </div>
          ))}
          <p className="font-weight-bold mt-3">
            <strong>Tipo</strong>
          </p>
          {type.map((el) => (
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value={el}
                id={el}
                onChange={(el) => handleFilterType(el)}
              />
              <label class="form-check-label" for={el}>
                {el}
              </label>
            </div>
          ))}
          <p className="font-weight-bold mt-3">
            <strong>Talle</strong>
          </p>
          {size.map((el) => (
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
          ))}
          {!productsFiltered[0] ? (
            <div>
              <p className="font-weight-bold mt-3">
                <strong>Temporadas</strong>
              </p>
              {season.map((el) => (
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    value={el}
                    id={el}
                    name="exampleRadios"
                    onChange={(el) => handleFilterSeason(el)}
                  />
                  <label class="form-check-label" for={el}>
                    {el}
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
