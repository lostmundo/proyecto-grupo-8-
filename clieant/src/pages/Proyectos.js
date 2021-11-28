import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import "./proyectos.css";

const Proyectos = () => {
  const [usuario, setusuario] = useState([]);
  const [role, setrole] = useState("ingeniero");
  const [buscarIng, setbuscarIng] = useState("");
  const [userValidar, setuserValidar] = useState("");

  const validarUsuario = () => {
    const validar = sessionStorage.getItem("usuarioId");

    if (validar) {
      setuserValidar(validar);
    }

    if (!buscarIng) {
      obtenerAll();
    }
  };

  const searchEngineer = async (e) => {
    e.preventDefault();
    const res = await Axios.get("/searchEngineer/" + buscarIng);
    const filtro = res.data.EngineerSearch;
    if (filtro) {
      setusuario([]);
      setusuario(filtro);
    }
  };

  var toastMixin = Swal.mixin({
    toast: true,
    icon: "success",
    title: "General Title",
    animation: false,
    position: "top-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const irse = (id) => {
    if (id) {
      console.log(id);
      sessionStorage.setItem("SelectIngeniero", id);
      window.location.href = "/presentacion";
    }
  };

  const singOut = () => {
    toastMixin.fire({
      animation: true,
      title: "Signed in Successfully",
    });
    sessionStorage.clear();
    window.location.replace("/");
  };
  const obtenerAll = async (role) => {
    const respuesta = await Axios.get("/engineer-all");
    const obtencion = respuesta.data.engineerAll;

    // console.log(respuesta.data.engineerAll);
    setusuario(obtencion);
    // usuarios.push(respuesta.data);
  };
  useEffect(() => {
    validarUsuario();
    obtenerAll();
  }, [buscarIng]);

  return (
    <Fragment>
      <nav className="navbar navbar-dark" style={{ backgroundColor: "black" }}>
        <div className="container d-flex ">
          <Link to="/" className="navbar-brand me-auto">
            Proyectos
          </Link>
          {userValidar ? (
            <>
              <form className="d-flex mx-4 w-25">
                <input
                  className="form-control me-2 bg-black text-light rounded-pill"
                  type="search"
                  placeholder="&#xf002; Search"
                  style={{ fontFamily: "Arial, FontAwesome" }}
                  aria-label="Search"
                  onChange={(e) => setbuscarIng(e.target.value)}
                />
                <button
                  onClick={(e) => searchEngineer(e)}
                  className="boton-serach-proyect"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <button
                className="singOut-navbar "
                aria-current="page"
                onClick={singOut}
              >
                <i className="fas fa-sign-out-alt"></i> Salir
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>

      {/* <Usuarios usuarios={usuarios} /> */}

      <div className="cuerpo-presentacion-proyectos mt-4">
        <div className="row row-cols-sm-2 row-cols-md-3 g-5">
          {usuario.map((item, index) => (
            <div key={index} className="col-sm-6 d-flex justify-content-center">
              <div className="card-proyectos">
                <img
                  src={"http://localhost:9000/" + item.img}
                  className="card-img-top-proyectos"
                  alt="..."
                />
                <div className="card-body-proyectos">
                  <h1 className="card-title-proyectos">{item.firstname}</h1>
                  <h3 className="card-title-proyectos">{item.lastname}</h3>
                  <p className="card-text-proyectos">{item.introduccion}</p>
                  {userValidar ? (
                    <button
                      className="btn btn-warning"
                      type="button"
                      onClick={(e) => irse(item._id)}
                      to="/presentacion"
                    >
                      Más información
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning"
                      type="button"
                      onClick={(e) => (window.location.href = "/login")}
                    >
                      Inicia Sesión
                    </button>
                  )}
                </div>
              </div>
            </div>
            // <div key={index} className="col">
            //   <div className="card">
            //     <div className="imagen d-flex justify-content-center">
            //       <img
            //         src={"http://localhost:9000/" + item.img}
            //         className="card-img-top-proyectos"
            //         alt="..."
            //         style={{ height: "300px" }}
            //       />
            //     </div>
            //     <div className="card-body-proyectos">
            //       <h5 className="card-title-proyectos">{item.firstname}</h5>
            //       <p className="card-text-proyectos">{item.introduccion}</p>
            //     </div>
            //     <div className="col-4 my-3 mx-4">
            //       <button
            //         className="btn btn-warning"
            //         type="button"
            //         onClick={(e) => irse(item._id)}
            //         to="/presentacion"
            //       >
            //         Más información
            //       </button>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Proyectos;
