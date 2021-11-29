import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import BodyPresentacion from "../components/presentacion/body/BodyPresentacion";

const Presentacion = () => {
  const [engi, setengineer] = useState([]);

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

  const id = sessionStorage.getItem("SelectIngeniero");

  const SelectEngineer = async () => {
    const res = await Axios.get("/engineer/" + id);
    const obtener = res.data.Engineers;
    setengineer([obtener]);
  };

  const singOut = () => {
    toastMixin.fire({
      animation: true,
      title: "Saliendo de Sesión",
    });
    sessionStorage.clear();
    window.location.replace("/");
  };

  useEffect(() => {
    SelectEngineer();
  }, []);

  return (
    <Fragment>
      <nav className="navbar navbar-dark " style={{ backgroundColor: "black" }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Presentacion
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
      <BodyPresentacion engi={engi} />
    </Fragment>
  );
};

export default Presentacion;
