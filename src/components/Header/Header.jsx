import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark sticky-top my-lg-0 py-lg-0">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://res.cloudinary.com/gescobar/image/upload/v1688514343/tiendarg/LIAVA_FONDO_TRANSPARENTE_mmaz3n.png"
              alt=""
              width="120"
              height="70"
            />
          </a>
          {/* <div className="order-lg-2">
            <a href="/">
              <i class="bi bi-cart-fill text-light"></i>
            </a>
            <a href="/">
              <i class="bi bi-person-fill text-light"></i>
            </a>
          </div> */}

          <button
            className="navbar-toggler border-0 "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="justify-content-lg-center collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <form className="d-flex bg-form">
              <input
                className="form-control me-2"
                type="search"
                placeholder="¿Qué estás buscando?"
                aria-label="Search"
              />
              <button className="btn btn-outline-light rounded-0" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg bg-body py-0">
        <div class="container ">
          <div
            class="collapse navbar-collapse  justify-content-lg-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tienda">
                  Tienda
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/categorias"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href=".">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href=".">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href=".">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
