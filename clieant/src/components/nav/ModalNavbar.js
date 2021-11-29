import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

const ModalNavbar = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="cortina">
          <div className="cotenedor">
            <div className="text-modal">
              <ul>
                <li>
                  <Link to="/home"> home</Link>
                </li>
                <li>
                  <a href="!#">Servicios</a>
                </li>
                <li>
                  <a href="!#">Proyectos</a>
                </li>
                <li>
                  <a href="!#">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNavbar;
