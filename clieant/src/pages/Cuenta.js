import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Cuenta.css";

const Cuenta = () => {
  const [id, setid] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [contrasenna, setcontrasenna] = useState("");
  const [telefono, settelefono] = useState("");
  const [idiomas, setidiomas] = useState("");
  const [referencias, setreferencias] = useState("");
  const [talento, settalento] = useState("");
  const [introduccion, setintroduccion] = useState("");
  const [experiencia, setexperiencia] = useState("");
  const [educacion, seteducacion] = useState("");
  const [profesion, setprofesion] = useState("");
  const [creado, setcreado] = useState("false");
  const [ingenieria, setingenieria] = useState("");
  const [perfil, setperfil] = useState("");

  // mantener y aparecer el formulario de usuario
  const [formIng, setformIng] = useState(false);

  // controlar el boton para abrir el formularios

  const [UserIng, setUserIng] = useState(false);

  // Datos para mostrar en la página del usuario. se obtienen del sessionStorage

  const [NombreUser, setNombreuser] = useState("");
  const [ApellidoUser, setApellidouser] = useState("");
  const [EmailUser, setEmailuser] = useState("");
  const [ImagemPerfil, setImagemperfil] = useState("");

  // peticiones al Session storage

  const usuario = sessionStorage.getItem("usuarioId");
  const nombre = sessionStorage.getItem("firstname");
  const apellido = sessionStorage.getItem("lastname");
  const correo = sessionStorage.getItem("email");
  const imagen = sessionStorage.getItem("img");

  // alertas de sweetalert
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

  // editar perfil de usuarios email y nombres || aquí pueden haber dos soluciones: forzar al usuario a salir, y voler a entrar o permitirle quedarse y subir los cambios

  const UserEdit = async (e) => {
    const edit = { firstname, id, email, lastname, contrasenna };
    console.log(edit);
    const resEdit = await Axios.put("/UpdateInfoEspecial", edit);
    const UpdateInfo = resEdit.data.UpdateInfo;
    sessionStorage.setItem("firstname", UpdateInfo.firstname);
    sessionStorage.setItem("lastname", UpdateInfo.lastname);
    sessionStorage.setItem("role", UpdateInfo.role);
    sessionStorage.setItem("email", UpdateInfo.email);
    sessionStorage.setItem("img", UpdateInfo.img);

    setNombreuser(UpdateInfo.firstname);
    setApellidouser(UpdateInfo.lastname);
    setEmailuser(UpdateInfo.email);

    if (UpdateInfo) {
      toastMixin.fire({
        title: "Usuario cambidado correctamente!!!",
        icon: "success",
      });
      document.getElementById("form-updatUser-info").reset();
    } else {
      toastMixin.fire({
        title: "Hubo un error intentalo de nuevo!!!",
        icon: "error",
      });
    }
  };

  const comprobarUsuario = (usuario) => {
    if (usuario) {
      const TipoUser = sessionStorage.getItem("role");
      if (TipoUser === "ingeniero") {
        setUserIng(true);
      }
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

  console.log(creado);

  // console.log(firstname);
  // console.log(usuario);
  // console.log(nombre);
  // console.log(user);

  useEffect(() => {
    // setfirstname(nombre);
    // setlastname(apellido);

    comprobarUsuario(usuario);
    setNombreuser(nombre);
    setApellidouser(apellido);
    setEmailuser(correo);
    setImagemperfil(imagen);
    setingenieria(ingenieria);
    setid(usuario);
    console.log(firstname + lastname);
  }, [
    firstname,
    nombre,
    apellido,
    usuario,
    correo,
    ingenieria,
    imagen,
    lastname,
  ]);

  const userHold = async (e) => {
    e.preventDefault();

    setcreado("true");

    const update = {
      id,
      telefono,
      idiomas,
      referencias,
      talento,
      introduccion,
      experiencia,
      educacion,
      profesion,
      creado,
      perfil,
      ingenieria,
    };

    const respuesta = await Axios.post("/updatUser", update);
    const updateUsiario = respuesta.data.updateUser;
    sessionStorage.setItem("firstname", updateUsiario.firstname);
    sessionStorage.setItem("lastname", updateUsiario.lastname);
    sessionStorage.setItem("role", updateUsiario.role);
    sessionStorage.setItem("email", updateUsiario.email);
    sessionStorage.setItem("img", updateUsiario.img);

    setNombreuser(updateUsiario.firstname);
    setApellidouser(updateUsiario.lastname);
    setEmailuser(updateUsiario.email);

    toastMixin.fire({
      title: "Informacion Enviada Correctamente !!!",
      icon: "success",
    });
    document.getElementById("info-cuenta-ingeniero").reset();
    setformIng(false);
  };

  return (
    <Fragment>
      <nav className="navbar navbar-dark" style={{ backgroundColor: "black" }}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            cuenta
          </Link>
        </div>
      </nav>
      {formIng ? (
        <div className="cuenta-contenedor-cuerpo">
          <div className="row row-cols-1">
            <section className="page-cuenta-general col-sm-12 d-flex justify-content-center align-content-center">
              <div className="cuerpo-cuenta">
                <div className="row row-cols-2">
                  <div className=" col-md-6 col-sm-12">
                    <div className="imag-cuenta">
                      <img
                        src={"http://localhost:9000/" + ImagemPerfil}
                        alt="..."
                      ></img>
                    </div>
                  </div>
                  <div className=" col-md-6 col-sm-12">
                    <div className="info-setion">
                      <div className="info-cuenta text-light">
                        <div className="icono-cuenta-userOut">
                          <button
                            className="boton-icono-cuenta"
                            onClick={singOut}
                          >
                            <i className="fas fa-sign-out-alt fa-2x"></i>
                          </button>
                        </div>
                        <h1>Bienvenido</h1>
                        <h3>
                          {NombreUser} {ApellidoUser}
                        </h3>
                        <p>{EmailUser}</p>
                        {UserIng ? (
                          <div className="icono-cuenta-usuarioIng">
                            <button
                              className="boton-icono-cuenta-formUserIng"
                              onClick={(e) => setformIng(!formIng)}
                            >
                              <i className="fas fa-user-cog fa-2x"></i>
                            </button>
                            <button
                              className="boton-icono-cuenta-editarUser "
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fas fa-user-edit fa-2x"></i>
                            </button>
                          </div>
                        ) : (
                          <div className="icono-cuenta-usuario">
                            <button
                              className="boton-icono-cuenta-editarUser"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fas fa-user-edit fa-2x"></i>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="page-cuenta-especial d-flex justify-content-center">
              <div className="cuerpo-formulario-cuenta">
                <h1 className="titulo-formulario-cuenta">Formulario</h1>
                <form onSubmit={userHold} id="info-cuenta-ingeniero">
                  <div className="row d-flex justify-content-start text-light text-center fs-3 align-content-center">
                    <div className="from-group">
                      <label>Introduccion</label>
                      <textarea
                        className="form-control col-12 my-2 bg-dark border border-dark border-1 text-light"
                        type="text"
                        required
                        style={{ height: "20px" }}
                        placeholder="Coloca una frase que te describa"
                        onChange={(e) => setintroduccion(e.target.value)}
                      />
                    </div>
                    <div className="from-group">
                      <label>Perfil</label>
                      <textarea
                        id="perfil"
                        className="form-control col-12 my-2 bg-dark border border-dark border-1 text-light"
                        type="text"
                        required
                        style={{ height: "150px" }}
                        placeholder="Escribe una breve descripción tuya"
                        onChange={(e) => setperfil(e.target.value)}
                      />
                    </div>
                    <div className="from-group col-sm-6">
                      <label>Idiomas</label>
                      <textarea
                        className="form-control my-2 bg-dark border border-dark border-1 text-light"
                        type="text"
                        required
                        style={{ height: "100px" }}
                        placeholder="los idiomas que manejas:"
                        onChange={(e) => setidiomas(e.target.value)}
                      />
                    </div>
                    <div className="from-group col-sm-6">
                      <label>Talento</label>
                      <textarea
                        className="form-control my-2 bg-dark border border-dark border-1 text-light"
                        type="text"
                        required
                        style={{ height: "100px" }}
                        placeholder="Describe las habilidades y fortalezas en una descripcion "
                        onChange={(e) => settalento(e.target.value)}
                      />
                    </div>
                    <div className="from-group">
                      <label>Educación</label>
                      <textarea
                        className="form-control col-12 my-2 bg-dark border border-dark border-1 text-light"
                        type="text"
                        required
                        style={{ height: "250px" }}
                        placeholder="Escriba la información acerca de su trayectoria educativa;
                    
                    ejemplo:
                    
                    Bachiller
                    GranColombo 2010-2020
                    
                    Pregrado: ingeniera indrustrial 
                    Universidad Antioquia 2021-2023
                    
                    Posgrado: mecanica cuantica
                    Universidad Oxford 2040-2044"
                        onChange={(e) => seteducacion(e.target.value)}
                      />
                    </div>
                    <div className="from-group">
                      <label>Referencias</label>
                      <textarea
                        className="form-control col-12 my-2 bg-dark border border-dark border-1 text-light"
                        type="text"
                        required
                        style={{ height: "150px" }}
                        placeholder="Lugares de referencia o personas que te referencian
                    
                    Sebastian Mosquera
                    Jefe de Company Engenery
                    contacto: sebasEs200@hotmail"
                        onChange={(e) => setreferencias(e.target.value)}
                      />
                    </div>
                    <div className="from-group">
                      <label>Experiencia</label>
                      <textarea
                        className="form-control col-12 my-2 bg-dark border border-dark border-1 text-light"
                        type="text"
                        required
                        style={{ height: "150px" }}
                        placeholder="haz una breve descripcion del campo en el que eres especialista o profesional"
                        onChange={(e) => setexperiencia(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-sm-6 ">
                      <label> Campo Laboral</label>
                      <select
                        className="form-select bg-black border border-dark border-1 text-light "
                        id="inputGroupSelect04"
                        aria-label="Example select with button addon"
                        onChange={(e) => setingenieria(e.target.value)}
                      >
                        <option value={ingenieria}>
                          Con que tipo de ingeniera se realaciona tu
                          profesión...
                        </option>
                        <option value="civil">Civil</option>
                        <option value="minera">Minera</option>
                        <option value="quimica">Quimica</option>
                        <option value="mecanica">Mecanica</option>
                        <option value="electronica">Electronica</option>
                        <option value="industrial">Industrial</option>
                        <option value="sonido">Sonido</option>
                        <option value="nuclear">Nuclear</option>
                      </select>
                    </div>
                    <div className="from-group col-sm-6">
                      <label>Teléfono</label>
                      <input
                        className="form-control bg-dark border border-dark border-1 text-light "
                        type="text"
                        placeholder="300..."
                        onChange={(e) => settelefono(e.target.value)}
                      />
                    </div>
                    <div className="from-group">
                      <label>Profesión</label>
                      <input
                        className="form-control col-12 my-2 bg-dark border border-dark border-1 text-light"
                        type="text"
                        placeholder="Expecífica la profesión"
                        required
                        onChange={(e) => setprofesion(e.target.value)}
                      />
                    </div>
                    <input
                      type="submit"
                      className="btn btn-primary btn-block my-3 mx-md-5 col-sm-11 mx-sm-4"
                    />
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div className="contenedor-body">
          <div className="cuerpo-cuenta">
            <div className="row">
              <div className=" col-md-6 col-sm-12">
                <div className="imag-cuenta">
                  <img
                    src={"http://localhost:9000/" + ImagemPerfil}
                    alt="..."
                  ></img>
                </div>
              </div>
              <div className=" col-md-6 col-sm-12">
                <div className="info-setion">
                  <div className="info-cuenta text-light ">
                    <div className="icono-cuenta-userOut">
                      <button className="boton-icono-cuenta" onClick={singOut}>
                        <i className="fas fa-sign-out-alt fa-2x"></i>
                      </button>
                    </div>
                    <h1>Bienvenido</h1>
                    <h3>
                      {NombreUser} {ApellidoUser}
                    </h3>
                    <p>{EmailUser}</p>
                    {UserIng ? (
                      <div className="icono-cuenta-usuarioIng ">
                        <button
                          className="boton-icono-cuenta-formUserIng"
                          onClick={(e) => setformIng(!formIng)}
                        >
                          <i className="fas fa-user-cog fa-2x"></i>
                        </button>
                        <button
                          className="boton-icono-cuenta-editarUser"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fas fa-user-edit fa-2x "></i>
                        </button>
                      </div>
                    ) : (
                      <div className="icono-cuenta-usuario">
                        <button
                          className="boton-icono-cuenta-editarUser"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fas fa-user-edit fa-2x"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* modal para editar */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: "black" }}>
            <div className="modal-header text-center text-light">
              <h5 className="modal-title" id="exampleModalLabel">
                {"Hola " + NombreUser + ", llena los campos para editar"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={UserEdit} id="form-updatUser-info">
                <div className="row text-center text-light">
                  <div className="from-group col-sm-6 my-2">
                    <label>
                      <i className="fas fa-user-alt mx-2"></i>Nombre
                    </label>
                    <input
                      className="form-control bg-dark border border-dark border-1 text-light"
                      type="text"
                      required
                      placeholder={nombre}
                      onChange={(e) => setfirstname(e.target.value)}
                    />
                  </div>
                  <div className="from-group col-sm-6 my-2">
                    <label>
                      <i className="fas fa-portrait mx-2"></i>Apellido
                    </label>
                    <input
                      className="form-control bg-dark border border-dark border-1 text-light"
                      type="text"
                      required
                      placeholder={apellido}
                      onChange={(e) => setlastname(e.target.value)}
                    />
                  </div>
                  <div className="from-group col-sm-6">
                    <label>
                      <i className="fas fa-envelope-open-text mx-2"></i>Email
                    </label>
                    <input
                      className="form-control bg-dark border border-dark border-1 text-light my-2"
                      type="text"
                      placeholder="&#xF674; E-mail"
                      style={{ fontFamily: "Arial, FontAwesome" }}
                      onChange={(e) => setemail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="from-group col-sm-6">
                    <label>
                      <i className="fas fa-unlock-alt mx-2"></i>
                      Contraseña
                    </label>
                    <input
                      className="form-control bg-dark border border-dark border-1 text-light my-2"
                      type="text"
                      placeholder="&#xf084; Password"
                      style={{ fontFamily: "Arial, FontAwesome" }}
                      onChange={(e) => setcontrasenna(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => UserEdit()}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container m-5 ">
        <div className="container">
          <div className="card ">
            <div className=" card-body w-auto col-8 ">
              <form onSubmit={userHold}>
                <div className="from-group">
                  <label>Nombre</label>
                  <input
                    className="form-control col-12"
                    type="text"
                    required
                    placeholder={nombre}
                    onChange={(e) => setfirstname(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Apellido</label>
                  <input
                    className="form-control col-12"
                    type="text"
                    required
                    placeholder={apellido}
                    onChange={(e) => setlastname(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Email</label>
                  <input
                    className="form-control col-12"
                    type="text"
                    required
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Telefono</label>
                  <input
                    className="form-control col-12"
                    type="text"
                    onChange={(e) => settelefono(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Idiomas</label>
                  <textarea
                    className="form-control col-12"
                    type="text"
                    required
                    style={{ height: "100px" }}
                    placeholder="los idiomas que manejas"
                    onChange={(e) => setidiomas(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Referencias</label>
                  <textarea
                    className="form-control col-12"
                    type="text"
                    required
                    style={{ height: "150px" }}
                    placeholder="Nombre de lugares de referencia o personas que te referencian
                    
                    Sebastian mosquera
                    Jefe de Company Engenery
                    contacto: sebasEs200@hotmail"
                    onChange={(e) => setreferencias(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Talento</label>
                  <textarea
                    className="form-control col-12"
                    type="text"
                    required
                    style={{ height: "100px" }}
                    placeholder="Describe las habilidades y fortalezas en una descripcion "
                    onChange={(e) => settalento(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Introduccion</label>
                  <textarea
                    className="form-control col-12"
                    type="text"
                    required
                    style={{ height: "150px" }}
                    placeholder="haz una breve introduccion acerca de tu vida"
                    onChange={(e) => setintroduccion(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Experiencia</label>
                  <textarea
                    className="form-control col-12"
                    type="text"
                    required
                    style={{ height: "150px" }}
                    placeholder="haz una descripcion de tu experiencia en el campo"
                    onChange={(e) => setexperiencia(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Educación</label>
                  <textarea
                    className="form-control col-12"
                    type="text"
                    required
                    style={{ height: "250px" }}
                    placeholder="Por favor escriba la información acerca de su trayectoria en la educación;
                    
                    ejemplo:
                    
                    Bachiller
                    GranColombo 2010-2020
                    
                    Pregrado: ingeniera indrustrial 
                    Universidad Antioquia 2021-2023
                    
                    Posgrado: mecanica cuantica
                    Universidad Oxford 2040-2044"
                    onChange={(e) => seteducacion(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label>Profesión</label>
                  <input
                    className="form-control col-12"
                    type="text"
                    placeholder="escribe tu profesión"
                    required
                    onChange={(e) => setprofesion(e.target.value)}
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
      </div> */}
      {/* <div className="from-group col-sm-6 my-2">
                      <label>Nombre</label>
                      <input
                        className="form-control bg-dark border border-dark border-1 text-light"
                        type="text"
                        required
                        placeholder={nombre}
                        onChange={(e) => setfirstname(e.target.value)}
                      />
                    </div>
                    <div className="from-group col-sm-6 my-2">
                      <label>Apellido</label>
                      <input
                        className="form-control bg-dark border border-dark border-1 text-light"
                        type="text"
                        required
                        placeholder={apellido}
                        onChange={(e) => setlastname(e.target.value)}
                      />
                    </div>
                    <div className="from-group col-sm-6">
                      <label>Email</label>
                      <input
                        className="form-control bg-dark border border-dark border-1 text-light my-2"
                        type="text"
                        placeholder="@.com"
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div> */}
    </Fragment>
  );
};

export default Cuenta;
