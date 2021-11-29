import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import "./BodyPresentacion.css";

const BodyPresentacion = ({ engi = [] }) => {
  const [mensaje, setmenss] = useState("");
  const [newMen, setnewMens] = useState([]);
  const [listarMensajes, setlistarMensajes] = useState(Array);
  const [comentarios, setcomentarios] = useState(false);

  const usuario = sessionStorage.getItem("usuarioId");
  const firstname = sessionStorage.getItem("firstname");
  const lastname = sessionStorage.getItem("lastname");
  const email = sessionStorage.getItem("email");
  const img = sessionStorage.getItem("img");

  const sendmens = async (e) => {
    e.preventDefault();
    const id = sessionStorage.getItem("SelectIngeniero");
    const menss = { firstname, lastname, email, mensaje, id, img };
    const respuesta = await Axios.post("/new-mensaje", menss);
    const Messmundo = respuesta.data.UserMenss;
    console.log(Messmundo);
    if (Messmundo) {
      for (const element of Messmundo) {
        setnewMens([element, ...newMen]);
      }
    }

    document.getElementById("caja-comentarios").reset();
    setmenss("");
  };

  //parece que esta es la única forma de realizar eso: buscar y hacer el respectivo llamado a la base de datos de la persona a la cual se le va dejar el mensaje, después de eso, se hace una especie de recorrido del objeto y se tiene que llenar el otro array de la funcion; por varias razones, L aprimera sería el hehco de que si uno intenta recorrerlo así sin más, pues, se te puede complicar mucho; ya que estamos hablando de un array dentro de otro array. Porque la información se obtiene de un campo array llamado mensajes, y eso, mi querido amigo, no sé puede quitar.

  const listarMenss = async () => {
    const id = sessionStorage.getItem("SelectIngeniero");
    const res = await Axios.get("/enginnerMenss/" + id);
    const obt = res.data.ListMessEng;
    setnewMens([]);
    obt.mensajes.map((element) => {
      return setnewMens((listarMensajes) => [element, ...listarMensajes]);
    });

    setcomentarios(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      listarMenss();
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <div className="cuerpo-presentacion-engineer text-light">
        <div className="container">
          {engi.map((item, index) => (
            <>
              <div className="presentacion-ingeniero-cuerpo">
                <div className="row row-cols-sm-1 row-cols-md-2">
                  <div className="col-md-12 col-lg-7">
                    <section className="presentacion-cuerpo-derecho">
                      <div className="row">
                        <div className="col">
                          <div className="hoja-presentacion-parteDerecha">
                            <div className="col">
                              <article className="perfil-engineer-presentacion">
                                <h1>PERFIL</h1>
                                <p>{item.perfil}</p>
                              </article>
                            </div>
                            <div className="col">
                              <article className="experiencia-engineer-presentacion">
                                <h1>EXPERIENCIA LABORAL</h1>
                                <p>{item.experiencia}</p>
                              </article>
                            </div>
                            <div className="col">
                              <article className="education-engineer-presentacion">
                                <h3>EDUCACIÓN</h3>
                                <p>{item.educacion}</p>
                              </article>
                            </div>
                            <div className="col">
                              <article className="habiliades-engineer-presentacion">
                                <h1>TALENTOS O HABILIDADES</h1>
                                <p>{item.talento}</p>
                              </article>
                            </div>
                            <div className="col">
                              <article className="referencia-engineer-presentacion">
                                <h1>REFERENCIAS</h1>
                                <p>{item.referencias}</p>
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="col-md-12 col-lg-5">
                    <section className="presentacion-cuerpo-izquierdo">
                      <div className="row">
                        <div className="col">
                          <div className="hoja-presentacion-parteIzquierda">
                            <div className="col">
                              <article className="hader-perfil-introduccion">
                                <div className="Imagen-capa-presentacion">
                                  <div className="container-fluid d-flex justify-content-center">
                                    <img
                                      src={
                                        "https://app-backendengineertool.herokuapp.com/" +
                                        item.img
                                      }
                                      alt="imagen"
                                      className="img-fluid"
                                    ></img>
                                  </div>
                                </div>
                              </article>
                            </div>
                            <div className="col">
                              <article className="perfil-nombres-izquierda">
                                <h1>
                                  {item.firstname} {item.lastname}
                                </h1>
                                <p>{item.profesion}</p>
                              </article>
                            </div>
                            <div className="col">
                              <article className="contacto-engineer-izquierdas">
                                <h3>Contacto:</h3>
                                <p>
                                  <i className="fas fa-phone-alt fa-1x"></i>
                                  Teléfono:{""}
                                  {item.telefono}
                                </p>
                                <p>
                                  <i className="fas fa-at"></i> Correo:{" "}
                                  {item.email}
                                </p>
                                <p>
                                  <i className="fas fa-map-marker-alt fa-1x"></i>{" "}
                                  Ubicación: {item.ubicacion}
                                </p>
                              </article>
                            </div>
                            <div className="col">
                              <article className="honorarios-engineer-izquierda">
                                <h3>Honararios: </h3>
                                <p>
                                  <i className="fas fa-dollar-sign fa-1x"></i>
                                  {item.honorarios}
                                </p>
                              </article>
                            </div>
                            <div className="col">
                              <article className="idiomas-engineer-izquierda">
                                <h3>Idiomas: </h3>
                                <p>
                                  <i className="fas fa-language fa-1x"></i>
                                  {item.idiomas}
                                </p>
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </>
          ))}
          {comentarios ? (
            <>
              <div className="commentarios-presentacion d-flex justify-content-center align-content-center">
                <div className="card-comentarios-presentacion">
                  <div className="card-body text-sm-start text-md-center ">
                    <form onSubmit={sendmens} id="caja-comentarios">
                      <label className="fs-1">COMENTARIOS</label>
                      <textarea
                        type="text"
                        className="form-control col-12 bg-black border-1 text-light"
                        style={{ height: "100px" }}
                        placeholder="Comenta... "
                        onChange={(e) => setmenss(e.target.value)}
                      />
                      <input
                        type="submit"
                        className="btn btn-primary btn-block mt-3"
                      />
                    </form>

                    {newMen.map((item, index) => (
                      <div className="col" key={index}>
                        <div className="card-comentario">
                          <div className="row row-cols-1">
                            <div className="col-sm-12 col-lg-4">
                              <div className="imagen-comentario-presentacion">
                                <div className="container-fluid">
                                  <img
                                    src={
                                      "https://app-backendengineertool.herokuapp.com/" +
                                      item.img
                                    }
                                    className="img-fluid"
                                    alt="..."
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-lg-8">
                              <div className="card-body-comentarios">
                                <h2 className="card-title">
                                  {item.firstname} {item.lastname}
                                </h2>
                                <h6>{item.publicacion}</h6>
                                <h4>{item.email}</h4>
                                <p className="card-text">{item.mensaje}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="sesion-comentarios text-center my-3">
              <h1>COMENTARIOS</h1>
              <button
                type="button"
                className="btn btn-dark mt-4"
                onClick={listarMenss}
              >
                Ver y Comentar
              </button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default BodyPresentacion;
