import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer
        className="text-center text-lg-start text-muted"
        style={{ backgroundColor: "black" }}
      >
        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
          style={{ color: "white" }}
        >
          <div className="me-5 d-none d-lg-block">
            <span>Conéctate con nosotras en las redes sociales:</span>
          </div>

          <div>
            <a href="https://es-la.facebook.com/" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="http://www.google.com/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://www.instagram.com/?hl=es"
              className="me-4 text-reset"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://co.linkedin.com/" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/jermart/proyecto"
              className="me-4 text-reset"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div
            className="container text-center text-md-start mt-5"
            style={{ color: "white" }}
          >
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center">
                <h6 className="text-uppercase fw-bold mb-4 ">
                  <i className="fas fa-gem me-3"></i>Ingineer Tool
                </h6>
                <p>
                  Un Sentimiento de ayuda y cooperación, mejorando el trabajo de
                  los profesionales y generando un impacto significativo en la
                  producción de proyectos.
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">CONTACTOS</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Medellin, COL
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  INGENUTP@hotmail.com.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 57 363 04 06
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 57 327 98 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
