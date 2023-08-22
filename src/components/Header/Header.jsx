import React, { useEffect, useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Logout from "../Auth/Logout/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { getProducts } from "../../redux/action/actionsProducts";

const seasons = ["Verano", "Invierno", "Primavera", "Otoño"];

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState();
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [userLocal, setUserLocal] = useState();

  if (user) {
    window.localStorage.setItem("user", JSON.stringify(user));
  }

  useEffect(() => {
    const userInfoJSON = window.localStorage.getItem("user");
    if (userInfoJSON) {
      const user = JSON.parse(userInfoJSON);
      setUserLocal(user);
    }
  }, []);

  function handleShop(e) {
    e.preventDefault();
    dispatch(getProducts());
    navigate(`/tienda`);
  }

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
          <div className="order-lg-2 d-flex align-items-center ">
            <a href="/carrito">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85Z"
                />
              </svg>
            </a>
            {isLoading ? (
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"
                  opacity=".3"
                />
                <circle cx="12" cy="8" r="2" fill="#ffffff" opacity=".3" />
                <path
                  fill="#ffffff"
                  d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2c2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2z"
                />
              </svg>
            ) : isAuthenticated || userLocal ? (
              <div class="dropdown d-flex flex-wrap ">
                <button
                  class="bg-transparent border-0 text-light fs-6 dropdown-toggle p-0 m-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ffffff"
                      d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"
                      opacity=".3"
                    />
                    <circle cx="12" cy="8" r="2" fill="#ffffff" opacity=".3" />
                    <path
                      fill="#ffffff"
                      d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2c2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2z"
                    />
                  </svg>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/perfil">
                      Mi cuenta
                    </a>
                  </li>
                  <li>
                    <Logout />
                  </li>
                </ul>
                <div className="d-flex ">
                  <p className="text-light fs-6 d-flex align-items-center">
                    Hola {userLocal ? userLocal.given_name : user.given_name}!
                  </p>
                </div>
              </div>
            ) : (
              <Login />
            )}
          </div>

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
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={(e) => handleShop(e)}
                  value="tienda"
                  href="/tienda"
                >
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
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/categorias"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Temporada
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {seasons.map((el) => (
                    <li>
                      <button
                        className="dropdown-item btn"
                        onClick={(e) => handleFilterSeason(e)}
                        value={el}
                      >
                        {el}
                      </button>
                    </li>
                  ))}
                </ul>
              </li> */}
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
