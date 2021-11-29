import React, { Fragment, useState } from "react";

import Axios from "axios";
import Swal from "sweetalert2";
import "./Registro.css";

export default function RegisterPage() {
  const [pasar, setPasar] = useState(true);
  const [file, setFile] = useState(null);
  const [img, setimg] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("regular");
  const [creado, setcreado] = useState("false");

  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const sendHandler = () => {
    if (!file) {
      Swal.fire({
        toast: true,
        icon: "error",
        title: "sube una foto por favor",
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
      return;
    } else {
      setPasar(false);

      const formdata = new FormData();
      formdata.append("image", file);

      fetch("https://app-backendengineertool.herokuapp.com/images/post", {
        method: "POST",
        body: formdata,
      })
        .then((res) => res.json())
        .then((res) => setimg(res))
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const login = async (e) => {
    e.preventDefault();
    setFile(null);

    const usuario = { firstname, lastname, password, email, img, role, creado };
    const respuesta = await Axios.post("/new-user", usuario);

    if (respuesta.data.mensaje) {
      Swal.fire({
        toast: true,
        icon: "error",
        title: `${respuesta.data.mensaje}`,
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

      document.getElementById("registro").reset();
    } else {
      Swal.fire({
        toast: true,
        icon: "success",
        title: "Registrado correctamente!!!",
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
      document.getElementById("registro").reset();
      window.location.replace("/login");
    }
  };

  return (
    <Fragment>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
        </div>
      </nav>

      {/* Registros forma */}

      <div className="contenedor-body">
        <div className="body-registro">
          <div className="row">
            <div className="col-sm-5">
              <div className="sombrea-img">
                <div className="img-regirtro">
                  <h1>
                    Uno a uno todos somos mortales. Juntos, somos eternos.
                    (Apuleyo)
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="cofre-contenido ">
                <div className="header-cofre">
                  <div className="row">
                    <div className="col-12">
                      <div className="title-cofre text-center">
                        <h1>Crea tu Cuenta Gratis</h1>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12 d-flex justify-content-center">
                      <button className="btnn">
                        <i className="fab fa-facebook">
                          <span>Facebook</span>
                        </i>
                      </button>
                      <button className="btnn">
                        <i className="fab fa-google-plus-g">
                          <span>Google</span>
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                {pasar ? (
                  <div className="body-cofre ">
                    <div className="row">
                      <div className="col-sm-12 text-center mb-5">
                        <div className="icono-UpdatePhoto">
                          <i className="fas fa-portrait fa-10x"></i>
                        </div>
                      </div>
                      <div className="col-sm-11 mb-4 ">
                        <input
                          id="fileImagen"
                          onChange={selectedHandler}
                          className="form-control "
                          type="file"
                        />
                        <button
                          onClick={sendHandler}
                          type="button"
                          className="boton_updated col-12 mt-5"
                        >
                          <i
                            className="fas fa-upload"
                            style={{ backgroundColor: "#2a3133" }}
                          >
                            <span
                              className="mx-3 "
                              style={{ backgroundColor: "#2a3133" }}
                            >
                              Upload
                            </span>
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={login} id="registro" className="text-light">
                    <div className="row d-flex justify-content-start">
                      <div className="form-group col-sm-11 col-md-5">
                        <label> Fistname</label>
                        <input
                          id="Fistname"
                          type="text"
                          className="form-control bg-black border border-dark border-1 text-light"
                          required
                          onChange={(e) => setfirstname(e.target.value)}
                        />
                      </div>
                      <div className="form-group  col-sm-11 col-md-6">
                        <label> lastname</label>
                        <input
                          id="lastname"
                          type="text"
                          className="form-control  bg-black border border-dark border-1 text-light"
                          required
                          onChange={(e) => setlastname(e.target.value)}
                        />
                      </div>
                      <div className="form-group  col-sm-11">
                        <label> password</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control bg-black border border-dark border-1 text-light"
                          required
                          onChange={(e) => setpassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group  col-sm-11">
                        <label> Correo</label>
                        <input
                          id="Correo"
                          type="email"
                          className="form-control bg-black border border-dark border-1 text-light"
                          autoFocus
                          required
                          onChange={(e) => setemail(e.target.value)}
                        />
                      </div>
                      <div className="form-group  col-sm-11">
                        <label> Tipo de usuario</label>
                        <select
                          className="form-select bg-black border border-dark border-1 text-light"
                          id="inputGroupSelect04"
                          aria-label="Example select with button addon"
                          onChange={(e) => setrole(e.target.value)}
                        >
                          <option value={role}>
                            Elige el tipo de usuario...
                          </option>
                          <option value="ingeniero">Ingeniero</option>
                          <option value="regular">Regular</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="btn_send mt-5 col-9 text-md-center"
                      >
                        Registrar
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
