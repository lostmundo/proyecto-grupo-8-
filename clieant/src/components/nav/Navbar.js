import React, { useEffect, useState } from "react";
// import ModalNavbar from "./ModalNavbar";
import { Link as La } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isScroll }) => {
  const [usuarioconect, setUsuarioConect] = useState(false);

  const singOut = (e) => {
    sessionStorage.clear();
    window.location.replace("/");
  };

  useEffect(() => {
    const usuario = sessionStorage.getItem("usuarioId");
    if (usuario) {
      setUsuarioConect(true);
    } else {
      setUsuarioConect(false);
    }
    return;
  }, [usuarioconect]);

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-sm navbar-dark "
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            Home
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        {usuarioconect ? (
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto mb-0 mb-lg-1 justify-content-center align-content-center">
              <li className="nav-item ">
                <La className="nav-link  " aria-current="page" to="/cuenta">
                  Cuenta
                </La>
              </li>
              <li className="nav-item">
                <La className="nav-link" aria-current="page" to="/proyectos">
                  Perfiles
                </La>
              </li>
              <li className="nav-item">
                <button
                  className="singOut-navbar"
                  aria-current="page"
                  onClick={singOut}
                >
                  <i className="fas fa-sign-out-alt"></i> Salir
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse " id="navbarScroll">
            <ul className="navbar-nav ms-auto mb-5 mb-lg-1 ">
              <li className="nav-item ">
                <La className="nav-link" aria-current="page" to="/login">
                  Login
                </La>
              </li>
              <li className="nav-item ">
                <La className="nav-link" aria-current="page" to="/proyectos">
                  Perfiles
                </La>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
