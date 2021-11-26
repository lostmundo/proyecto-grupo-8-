import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const FiltroProyectos = () => {
  const [nombreInge, setnombreInge] = useState([]);
  const [ingenieros, setingenieros] = useState([]);

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

  useEffect(() => {
    obtenerIngenieros();
  }, []);
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

  const obtenerIngenieros = async () => {
    const filtroIng = sessionStorage.getItem("filtroProfesion");
    setnombreInge(filtroIng);
    // const profesion = { ingenieria: filtroIng };
    const respuesta = await Axios.get("/enginnerProfession/" + filtroIng);
    const engineers = respuesta.data.ProfessionEngineer;
    console.log(engineers);
    for (const elementos of engineers) {
      setingenieros((ingenieros) => [elementos, ...ingenieros]);
    }
  };

  return (
    <Fragment>
      <nav className="navbar navbar-dark" style={{ backgroundColor: "black" }}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            {"Ingeniera " + nombreInge}
          </Link>
          <button
            className="singOut-navbar"
            aria-current="page"
            onClick={singOut}
          >
            <i className="fas fa-sign-out-alt"></i> Salir
          </button>
        </div>
      </nav>

      {/* <Usuarios usuarios={usuarios} /> */}

      <div className="cuerpo-presentacion-proyectos mt-4">
        <div className="row row-cols-sm-2 row-cols-md-3 g-5">
          {ingenieros.map((item, index) => (
            <div key={index} className="col-sm-6 d-flex justify-content-center">
              <div className="card-proyectos">
                <img
                  src={"http://localhost:9000/" + item.img}
                  className="card-img-top-proyectos"
                  alt="..."
                />
                <div className="card-body-proyectos">
                  <h1 className="card-title-proyectos">{item.firstname}</h1>
                  <p className="card-text-proyectos">{item.introduccion}</p>
                  <button
                    className="btn btn-warning"
                    type="button"
                    onClick={(e) => irse(item._id)}
                    to="/presentacion"
                  >
                    Más información
                  </button>
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
