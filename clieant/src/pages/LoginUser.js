import Axios from "axios";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./LoginUser.css";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // aquí es para las alertas
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

  const userLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const respuesta = await Axios.post("/auth-user", user);
    const resMen = respuesta.data.mensaje;

    if (resMen) {
      Swal.fire({
        toast: true,
        icon: "error",
        title: `${resMen} !!!`,
        animation: false,
        position: "bottom",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    } else {
      toastMixin.fire({
        animation: true,
        title: "Bienvenido",
      });

      sessionStorage.setItem("usuarioId", respuesta.data.id);
      sessionStorage.setItem("firstname", respuesta.data.firstname);
      sessionStorage.setItem("lastname", respuesta.data.lastname);
      sessionStorage.setItem("role", respuesta.data.role);
      sessionStorage.setItem("email", respuesta.data.email);
      sessionStorage.setItem("img", respuesta.data.img);
      sessionStorage.setItem("token", respuesta.data.token);

      window.location.replace("/");
    }
  };

  return (
    <Fragment>
      <nav className="navbar navbar-dark " style={{ backgroundColor: "black" }}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
        </div>
      </nav>
      {/* nueva parte */}

      <div className="contenedor-body">
        <div className="cuerpo-login">
          <div className="row row-cols-2">
            <div className="col-sm-6">
              <div className="contenedor-imagen-loginUser">
                <h1>
                  Ejecuta tus conocimientos con la maestría del que sigue
                  aprendiendo - Jonathan García-Allen
                </h1>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row row-cols-1">
                <div className="col-12">
                  <div className="header-body-loginUser">
                    <div className="row row-cols-1">
                      <div className="cuerpo-titulo-loginUser text-center text-light mt-3">
                        <h1>Login In</h1>
                      </div>
                    </div>
                    <div className="row row-cols-1">
                      <div className="col-12 text-center">
                        <button className="boton-facebok-loginUser">
                          <i className="fab fa-facebook">
                            <span>Facebook</span>
                          </i>
                        </button>
                        <button className="boton-facebok-loginUser">
                          <i className="fab fa-google-plus-g">
                            <span>Google</span>
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="logueo-body-loginUser">
                    <div className="row row-cols-1">
                      <div className="col-12 text-center">
                        <div className="icono-loginUser my-4">
                          <i className="fas fa-user-lock fa-10x"></i>
                        </div>
                      </div>
                      <div className="col-12">
                        <form onSubmit={userLogin} id="Logueate">
                          <div className="form-group text-light fs-4">
                            <label>Email</label>
                            <input
                              id="Fistname"
                              type="text"
                              className="form-control bg-black border border-dark border-1 text-light"
                              required
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="form-group text-light fs-4">
                            <label> Password</label>
                            <input
                              id="password"
                              type="password"
                              className="form-control bg-black border border-dark border-1 text-light"
                              required
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <button type="submit" className="boton-login mt-2">
                            <span>Login</span>
                          </button>
                          <p className=" fs-6 text-light">
                            No te has registrado, que estas esperando{" "}
                            <a href="/register">Registraté</a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginUser;
