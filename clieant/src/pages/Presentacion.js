import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BodyPresentacion from "../components/presentacion/body/BodyPresentacion";

const Presentacion = () => {
  const [engi, setengineer] = useState([]);

  const id = sessionStorage.getItem("SelectIngeniero");

  const SelectEngineer = async () => {
    const res = await Axios.get("/engineer/" + id);
    const obtener = res.data.Engineers;
    setengineer([obtener]);
  };

  useEffect(() => {
    SelectEngineer();
  }, []);

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Presentacion
          </Link>
        </div>
      </nav>
      <BodyPresentacion engi={engi} />
      {/* {engi.map((item, index) => (
        <div key={index} className="col">
          <div className="card">
            <div className="card-header">
              <h1>{item.firstname}</h1>
              <p>{item.lastname}</p>
            </div>
          </div>
        </div>
      ))} */}
    </Fragment>
  );
};

export default Presentacion;
