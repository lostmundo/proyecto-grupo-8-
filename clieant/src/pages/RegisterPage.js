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

      fetch("http://localhost:9000/images/post", {
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

    const usuario = { firstname, lastname, password, email, img, role };
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
            Registro
          </a>
        </div>
      </nav>
      {/* <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Image App
          </Link>
        </div>
      </nav> */}
      <form>
        <div className="container mt-5">
          {/* <input type="text" value={text} placeholder="nombre"></input>
          <input type="text" value="" placeholder="correo"></input> */}
        </div>
      </form>

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
                        <i className="fas fa-portrait fa-10x"></i>
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

      {/* <div className="container mt-5">
        <div className="card p-3">
          <div className="row">
            <div className="col-10">
              <input
                id="fileinput"
                onChange={selectedHandler}
                className="form-control"
                type="file"
              />
            </div>
            <div className="col-2">
              <button
                onClick={sendHandler}
                type="button"
                className="btn btn-primary col-12"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <img
            src={"http://localhost:9000/" + img}
            alt="..."
            className="card-img-top"
          />
        </div>
      </div> */}

      {/* <div className="container">
        <div className=" input-group mb-3">
          <form className="form-control">
            <div className="row">
              <label>Ingrese su nombre</label>

              <input
                className="mb-3"
                placeholder="ingrese su nombre"
                type="text"
              />
              <label>Ingrese su apellido</label>

              <input
                className="mb-3"
                placeholder="ingrese su apellido"
                type="text"
              />
              <label>ingrese su correo</label>

              <input className="mb-3" placeholder="correo" type="correo" />
              <label>Ingrese su password</label>

              <input
                className="mb-3"
                placeholder="ingrese su password"
                type="password"
              />
              <label className="input-group-text " htmlFor="inputGroupSelect01">
                Role que quieres:
              </label>
              <select className="form-select mb-3" id="inputGroupSelect01">
                <option selected>Role que quieres: </option>
                <option value="regular">Usuario</option>
                <option value="creador">creador</option>
              </select>
            </div>
            <button className="btn btn-info" type="subtmi">
              registrar
            </button>
          </form>
        </div>
      </div> */}

      {/* {swith && (
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div className="card">
                <div className=" container text-center fa-5x">
                  <i className=" fas fa-user"></i>
                </div>
                <div className="card-header text-center">
                  <h3> Registro de sesion</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={login} id="registro">
                    <div className="form-group">
                      <label> Fistname</label>
                      <input
                        id="Fistname"
                        type="text"
                        className="form-control"
                        required
                        onChange={(e) => setfirstname(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label> lastname</label>
                      <input
                        id="lastname"
                        type="text"
                        className="form-control"
                        required
                        onChange={(e) => setlastname(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label> password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        required
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label> Correo</label>
                      <input
                        id="Correo"
                        type="email"
                        className="form-control"
                        autoFocus
                        required
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <input
                      type="submit"
                      className="btn btn-primary btn-block mt-3"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </Fragment>
  );
}
