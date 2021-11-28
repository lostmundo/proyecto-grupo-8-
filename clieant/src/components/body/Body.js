import Axios from "axios";
import React, { useEffect, useState } from "react";
import imag1 from "./R (4).jpg";
import imag2 from "./img/book-ge75f2b3a5_1920.jpg";
import imag3 from "./img/field-gb2700bab8_1920.jpg";
import imag4 from "./img/Elias.jpeg";

import "./body.css";

function Body() {
  const iconos = [{}];

  const [PrimerCarru, setPrimerCarrusel] = useState([]);

  const getProfession = async (profesion) => {
    sessionStorage.setItem("filtroProfesion", profesion);
    window.location.replace("filtroProyect");
  };

  const getengineer = async () => {
    const res = await Axios.get("/engineer-all-homePage");
    const getRes = res.data.engineerAll;
    for (const elements of getRes) {
      setPrimerCarrusel((PrimerCarru) => [elements, ...PrimerCarru]);
      console.log(PrimerCarru);
    }
    //   getRes.map((elemento) => {
    //     console.log(elemento);
    //     setPrimerCarrusel([elemento, ...PrimerCarrus]);
    //   });
    //   console.log(PrimerCarrus);
    // };

    // const newCarrus = [...PrimerCarrus];
    // newCarrus.push(getRes);
    // console.log(newCarrus);
  };

  const goProyetos = () => {
    window.location.href = "/proyectos";
  };

  useEffect(() => {
    getengineer();
  }, []);

  return (
    <div className="" id="body-container">
      <h1 className="titulo">QUIENES SOMOS</h1>
      <p className="parrafo">
        hola mundo Como JSX se compila en llamadas a React.createElement, la
        bibliotecaReact también debe estar siempre dentro del alcance de tu
        código JSX. Por ejemplo, ambas importaciones son necesarias en este
        código, a pesar de que React y CustomButton no están directamente
        referenciados desde JavaScript: Al contrario del pensamiento popular, el
        texto de Lorem Ipsum no es simplemente texto aleatorio.
      </p>
      {/* debe haber funciones que te redireccion ademas de hacer una hacer un filtro */}
      <section className="reparto">
        <div className="container">
          <div className="row">
            <div className="title-home-body-filtrosPerfil text-light text-center my-4 fs-1">
              <h1>¿Qué tipo de ingenieros estás buscando?</h1>
            </div>
            <div
              className="col-sm-6 col-md-3"
              onClick={(e) => getProfession("civil")}
            >
              <div className="card-ing d-flex">
                <div className="efecto-card">
                  <div className="card-head text-center">
                    <div className="ico-header ">
                      <i className="fas fa-hard-hat fa-6x"></i>
                    </div>
                    <h1>Ingenieria Civil</h1>
                  </div>

                  <div className="body text-center">
                    <p>
                      Rama de la ingeniería esta se ocupa del diseño y cálculo
                      de obras civiles
                    </p>
                    <i className="fas fa-arrow-right fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-3"
              onClick={(e) => getProfession("minera")}
            >
              <div className="card-ing d-flex">
                <div className="efecto-card">
                  <div className="card-head text-center">
                    <div className="ico-header">
                      <i className="fas fa-oil-can fa-6x"></i>
                    </div>
                    <h1>Ingenieria Mineral</h1>
                  </div>

                  <div className="body text-center">
                    <p>
                      Rama de la ingeniería que se ocupa de la extracción de los
                      recursos minerales.
                    </p>
                    <i className="fas fa-arrow-right fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-3"
              onClick={(e) => getProfession("quimica")}
            >
              <div className="card-ing d-flex">
                <div className="efecto-card">
                  <div className="card-head text-center">
                    <div className="ico-header">
                      <i className="fas fa-atom fa-6x"></i>
                    </div>
                    <h1>Ingenieria Química</h1>
                  </div>

                  <div className="body text-center">
                    <p>
                      rama de la ingeniería que se encarga del estudio,
                      construcción y operación de todo tipo de elementos en la
                      industria de procesos.
                    </p>
                    <i className="fas fa-arrow-right fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-3"
              onClick={(e) => getProfession("mecanica")}
            >
              <div className="card-ing d-flex">
                <div className="efecto-card">
                  <div className="card-head text-center">
                    <div className="ico-header">
                      <i className="fas fa-wrench fa-6x"></i>
                    </div>
                    <h1>Ingenieria Mecánica</h1>
                  </div>

                  <div className="body text-center">
                    <p>
                      Ramas más antiguas e importantes de la ingeniería, dicha
                      disciplina estudia y perfecciona los principios de la
                      termodinámica, trasferencia de calor,entre otros.
                    </p>
                    <i className="fas fa-arrow-right fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3"
              onClick={(e) => getProfession("electronica")}
            >
              <div className="card-ing d-flex">
                <div className="efecto-card">
                  <div className="card-head text-center">
                    <div className="ico-header">
                      <i className="fas fa-bolt fa-6x"></i>
                    </div>
                    <h1>Ingenieria Electrónica</h1>
                  </div>

                  <div className="body text-center">
                    <p>
                      Ramas de la ingeniería que se encarga de resolver
                      problemas de la ingeniería tales como el control de
                      procesos industriales y de sistemas electrónicos de
                      potencia
                    </p>
                    <i className="fas fa-arrow-right fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3"
              onClick={(e) => getProfession("industrial")}
            >
              <div className="card-ing d-flex">
                <div className="efecto-card">
                  <div className="card-head text-center">
                    <div className="ico-header">
                      <i className="fas fa-industry fa-6x"></i>
                    </div>
                    <h1>Ingenieria Industrial</h1>
                  </div>

                  <div className="body text-center">
                    <p>
                      Rama que se ocupa de la optimización de procesos, sistemas
                      u organizaciones complejos mediante el desarrollo, la
                      mejora y la implementación de sistemas
                    </p>
                    <i className="fas fa-arrow-right fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3"
              onClick={(e) => getProfession("sonido")}
            >
              <div className="card-ing d-flex">
                <div className="efecto-card">
                  <div className="card-head text-center">
                    <div className="ico-header">
                      <i className="fas fa-guitar fa-6x"></i>
                    </div>
                    <h1>Ingenieria Sonido</h1>
                  </div>

                  <div className="body text-center">
                    <p>
                      Rama encarga del estudio del fenómeno sonoro, en todos los
                      campos de aplicación del mismo, tales como la grabación
                      ...
                    </p>
                    <i className="fas fa-arrow-right fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3"
              onClick={(e) => getProfession("nuclear")}
            >
              <div className="card-ing d-flex">
                <div className="efecto-card">
                  <div className="card-head text-center">
                    <div className="ico-header">
                      <i className="fas fa-guitar fa-6x"></i>
                    </div>
                    <h1>Ingenieria Nuclear</h1>
                  </div>

                  <div className="body text-center">
                    <p>
                      Rama encargada de la aplicación práctica de los
                      conocimientos sobre el núcleo atómico tratado por los
                      principios de la química nuclear ...
                    </p>
                    <i className="fas fa-arrow-right fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="carrusel">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          data-interval="400"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-present-home">
                <div className="card-imgen-home">
                  <img src={imag1} alt=".." />
                </div>

                <div className="card-body-home">
                  <h1>Hola soy. </h1>
                  <p>No quiero perder el placer de despertarme cada día</p>
                </div>
              </div>
            </div>
            {PrimerCarru.map((element, index) => (
              <div className="carousel-item" key={index} data-interval="400">
                <div className="card-present-home">
                  <div className="card-imgen-homen">
                    <img
                      src={"http://localhost:9000/" + element.img}
                      alt=".."
                    />
                  </div>

                  <div className="card-body-home">
                    <h1>Hola soy {element.firstname}</h1>
                    <p>{element.introduccion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="person">
        {/* <div className="card">
          <div className="card-header"></div>
          <div className="card-body"></div>
        </div> */}
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="bg-white rounded shadow-sm py-5 px-4 text-center">
                <img
                  src={imag2}
                  alt=""
                  style={{ width: "320px", height: "400px" }}
                  className="img-fluid rounded-3 mb-3 img-thumbnail shadow-sm "
                />
                <h3 className="mb-0">Sebastián Mosquera Martínez</h3>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3 text-center ">
                  <li className="list-inline-item">
                    <a
                      href="https://es-la.facebook.com/"
                      className="social-link"
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="bg-white rounded shadow-sm py-5 px-4 text-center">
                <img
                  src={imag3}
                  alt=""
                  style={{ width: "320px", height: "400px" }}
                  className="img-fluid rounded-3 mb-3 img-thumbnail shadow-sm"
                />
                <h3 className="mb-0">Johandris ...</h3>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3 text-center">
                  <li className="list-inline-item">
                    <a
                      href="https://es-la.facebook.com/"
                      className="social-link"
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="bg-white rounded shadow-sm py-5 px-4 text-center">
                <img
                  src={imag4}
                  alt=""
                  style={{ width: "320px", height: "400px" }}
                  className="img-fluid rounded-3 mb-3 img-thumbnail shadow-sm"
                />
                <h3 className="mb-0">Elias ...</h3>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3 text-center">
                  <li className="list-inline-item">
                    <a
                      href="https://es-la.facebook.com/"
                      className="social-link"
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* aqui debe haber una funcion que te redireccione a proyectos */}
      <section className="proyectos">
        <div className="row">
          <div className="col-sm-6">
            <div className="proyecto" onClick={(e) => goProyetos()}>
              <div className="opacidad">
                <h1>Proyectos</h1>
                <p>Vamos echale un vistazo a todos nuestros colaboradores</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="pages">
              <div className="opacidad">
                <h1>Pages</h1>
                <p>Nuestras experiencias en el mundo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
