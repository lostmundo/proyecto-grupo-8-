import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

const ModalNavbar = () => {
  return (
    <>
      {/* {" "}
      {estado && (
        <div className="Conatiner-modal" onClick={() => cambiar(false)}>
          <div className="cortina">
            <div className="cotenedor">
              <div className="text-modal">
                <ul>
                  <li>
                    <Link to="/home"> home</Link>
                  </li>
                  <li>
                    <a href="#">Servicios</a>
                  </li>
                  <li>
                    <a href="#">Proyectos</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )} */}
      {/* {<div className="cortina">
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
        </div>} */}
      {/* {<div className="modal-dialog">
          <div className="modal-content h-100">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>} */}
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
