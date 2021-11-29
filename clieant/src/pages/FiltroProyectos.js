import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const FiltroProyectos = () => {
  const [nombreInge, setnombreInge] = useState([]);
  const [ingenieros, setingenieros] = useState([]);
  const [userValidar, setuserValidar] = useState("");
  const [buscarIng, setbuscarIngProf] = useState("");

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

  const validarUsuario = () => {
    const validar = sessionStorage.getItem("usuarioId");

    if (validar) {
      setuserValidar(validar);
    }

    if (!buscarIng) {
      obtenerIngenieros();
    }
  };
  useEffect(() => {
    validarUsuario();
    obtenerIngenieros();
  }, [buscarIng]);

  // irse a presentación
  const irse = (id) => {
    if (id) {
      console.log(id);
      sessionStorage.setItem("SelectIngeniero", id);
      window.location.href = "/presentacion";
    }
  };

  // salir sesion

  const singOut = () => {
    toastMixin.fire({
      animation: true,
      title: "Signed in Successfully",
    });
    sessionStorage.clear();
    window.location.replace("/");
  };

  const obtenerIngenieros = async () => {
    const filtroIng = sessionStorage.getItem("filtroProfesion");
    setnombreInge(filtroIng);

    const respuesta = await Axios.get("/enginnerProfession/" + filtroIng);
    const engineers = respuesta.data.ProfessionEngineer;
    setingenieros(engineers);
  };
  // obtener filtro de ingenieros

  const searchEngineer = async (e) => {
    e.preventDefault();
    const filtroIng = sessionStorage.getItem("filtroProfesion");

    const envioInfo = { filtroIng, buscarIng };

    const res = await Axios.post("/searchProfessionEngineer", envioInfo);
    const filtroSearch = res.data.ProfessionSearch;
    if (filtroSearch) {
      setingenieros([]);
      setingenieros(filtroSearch);
    }
  };

  return (
    <Fragment>
      <nav className="navbar navbar-dark" style={{ backgroundColor: "black" }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {"Ingeniera " + nombreInge}
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
                  onChange={(e) => setbuscarIngProf(e.target.value)}
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
                className="singOut-navbar"
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
          {ingenieros.map((item, index) => (
            <div key={index} className="col-sm-6 d-flex justify-content-center">
              <div className="card-proyectos">
                <img
                  src={
                    "https://app-backendengineertool.herokuapp.com/" + item.img
                  }
                  className="card-img-top-proyectos"
                  alt="..."
                />
                <div className="card-body-proyectos">
                  <h1 className="card-title-proyectos">{item.firstname}</h1>
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
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FiltroProyectos;
