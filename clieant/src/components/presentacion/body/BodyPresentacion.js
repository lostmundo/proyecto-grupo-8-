import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import "./BodyPresentacion.css";
import img from "./sunset.jpg";

const BodyPresentacion = ({ engi = [] }) => {
  const [mensaje, setmenss] = useState("");
  const [newMen, setnewMens] = useState([]);
  const [listarMensajes, setlistarMensajes] = useState(Array);

  const usuario = sessionStorage.getItem("usuarioId");
  const firstname = sessionStorage.getItem("firstname");
  const lastname = sessionStorage.getItem("lastname");
  const email = sessionStorage.getItem("email");
  const img = sessionStorage.getItem("img");

  const sendmens = async (e) => {
    e.preventDefault();
    const id = sessionStorage.getItem("SelectIngeniero");
    const menss = { firstname, email, mensaje, id };
    const respuesta = await Axios.post("/new-mensaje", menss);
    const Messmundo = respuesta.data.UserMenss;
    console.log(Messmundo);
    if (Messmundo) {
      for (const element of Messmundo) {
        setnewMens([element, ...newMen]);
      }
      // Messmundo.map((item) => setlistarMensajes([item]));
      // console.log(listarMensajes);
      // console.log(newMen);
    }

    // const id = sessionStorage.getItem("SelectIngeniero");
    // const chat = { id, Messmundo };
    // const res = await Axios.post("/enginnerMenss", chat);
    // const obst = res.data.conformacion;
    // if (obst === "listo") {
    //   setlistarMensajes((listarMensajes) => [...listarMensajes, Messmundo]);
    // }

    // const obt = res.data.menssge;
    // setlistarMensajes([...listarMensajes, obt]);
    // console.log(listarMensajes);
  };

  //parece que esta es la única forma de realizar eso: buscar y hacer el respectivo llamado a la base de datos de la persona a la cual se le va dejar el mensaje, después de eso, se hace una especie de recorrido del objeto y se tiene que llenar el otro array de la funcion; por varias razones, L aprimera sería el hehco de que si uno intenta recorrerlo así sin más, pues, se te puede complicar mucho; ya que estamos hablando de un array dentro de otro array. Porque la información se obtiene de un campo array llamado mensajes, y eso, mi querido amigo, no sé puede quitar.

  const listarMenss = async () => {
    const id = sessionStorage.getItem("SelectIngeniero");
    const res = await Axios.get("/enginnerMenss/" + id);
    const obt = res.data.ListMessEng;

    obt.mensajes.map((element) => {
      return setnewMens((listarMensajes) => [element, ...listarMensajes]);
    });
  };
  const generateKey = (index) => {
    return `${index}_${new Date().getTime()}`;
  };

  // const listarMenss = async () => {
  //   const id = sessionStorage.getItem("SelectIngeniero");
  //   const listar = await Axios.get("/enginnerMenss/" + id);
  //   const resList = listar.data;

  //   for (const resL of resList) {
  //     setlistarMensajes([...listarMensajes, resL]);
  //   }

  //   // for (var elementos in resList) {
  //   //   setlistarMensajes(elementos);
  //   // }

  //   console.log(listarMensajes);
  // };
  useEffect(() => {
    listarMenss();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="cuerpo">
          {engi.map((item, index) => (
            <>
              <div key={index} className="header">
                <h1>
                  {item.firstname} {item.lastname}
                </h1>
                <h3> {item.profesion}</h3>
              </div>
              <div className="body-page">
                <section className="inf-present">
                  <article>
                    <div className="title-artic">
                      <h1>Aceerca de mi</h1>
                    </div>
                    <div className="inf-artic">
                      <p>{item.introduccion}</p>
                    </div>
                  </article>
                  <article>
                    <div className="title-artic">
                      <h1>Referencias</h1>
                    </div>
                    <div className="inf-artic">
                      <p>{item.referencias}</p>
                    </div>
                  </article>
                  <article>
                    <div className="title-artic">
                      <h1>Experencia</h1>
                    </div>
                    <div className="inf-artic">
                      <p>{item.experiencia}</p>
                    </div>
                  </article>
                  <article>
                    <div className="title-artic">
                      <h1>Talento</h1>
                    </div>
                    <div className="inf-artic">
                      <p>{item.talento}</p>
                    </div>
                  </article>
                  <article>
                    <div className="title-artic">
                      <h1>About me</h1>
                    </div>
                    <div className="inf-artic">
                      <p>
                        Es un hecho establecido hace demasiado tiempo que un
                        lector se distraerá con el contenido del texto de un
                        sitio mientras que mira su diseño. El punto de usar
                        Lorem Ipsum es que tiene una distribución más o menos
                        normal de las letras, al contrario de usar textos como
                        por ejemplo "Contenido aquí, contenido aquí". Estos
                        textos hacen parecerlo un español que se puede leer.
                        Muchos paquetes de autoedición y editores de páginas web
                        usan el Lorem Ipsum como su texto por defecto, y al
                        hacer una búsqueda de "Lorem Ipsum" va a dar por
                        resultado muchos sitios web que usan este texto si se
                        encuentran en estado de desarrollo. Muchas versiones han
                        evolucionado a través de los años, algunas veces por
                        accidente, otras veces a propósito por ejemplo
                        insertándole humor y cosas por el estilo.
                      </p>
                    </div>
                  </article>
                </section>
                <section className="inf-sect">
                  <article>
                    <div className="inf-sect-img">
                      <img
                        src={"http://localhost:9000/" + item.img}
                        alt="imagen"
                      ></img>
                    </div>
                  </article>
                  <article>
                    <div className="inf-sect-educ">
                      <ul>
                        <ol>educacion</ol>
                        <ol>universidad pensyl</ol>
                        <ol>Acducta</ol>
                      </ul>
                    </div>
                  </article>
                  <article>
                    <div className="inf-sect-lenga">
                      <ul>
                        <ol>Language</ol>
                        <ol>English</ol>
                        <ol>Spanish</ol>
                      </ul>
                    </div>
                  </article>
                  <article className="ref-sect">
                    <p>
                      hola mundo, como vamos... Todo bien, todo correcto y yo
                      que me alegro.
                    </p>
                  </article>
                  <article>
                    <div className="finish-sect">
                      <p>Mis curiositos como estáis</p>
                    </div>
                  </article>
                </section>
              </div>
            </>
          ))}
          <div className="commentarios">
            <div className="card">
              <div className="card-body">
                <form onSubmit={sendmens}>
                  <label> comentarios</label>
                  <textarea
                    type="text"
                    className="form-control col-12"
                    style={{ height: "100px" }}
                    placeholder="comenta por favor tu experiencia"
                    onChange={(e) => setmenss(e.target.value)}
                  />
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-3"
                  />
                </form>
                <button
                  type="button"
                  className="btn btn-dark mt-4"
                  onClick={listarMenss}
                >
                  comentrios
                </button>
                {newMen.map((item, index) => (
                  <div className="col" key={index}>
                    <div className="card">
                      <div className="imagen">
                        <img
                          src="!#"
                          className="card-img-top"
                          alt="..."
                          style={{ height: "300px" }}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{item.firstname}</h5>
                        <p className="card-text">{item.mensaje}</p>
                      </div>
                    </div>
                  </div>

                  // <div className="prevent-comment mt-4">
                  //   <div key={index} className="card mb-3">
                  //     <div className="row g-0">
                  //       <div className="col-md-4">
                  //         <div className="imagen d-flex align-content-center justify-content-center">
                  //           <div className="imag-body ">
                  //             <img
                  //               src={img}
                  //               className="img-fluid rounded-circle w-100 h-100"
                  //               alt="..."
                  //             />
                  //           </div>
                  //         </div>
                  //       </div>

                  //       <div className="col-md-8">
                  //         <div className="card-body">
                  //           <div className="body-commet">
                  //             <h5 className="card-title">{item.firstname}</h5>
                  //             <p className="card-text">{item.mensaje}</p>
                  //           </div>
                  //         </div>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BodyPresentacion;
