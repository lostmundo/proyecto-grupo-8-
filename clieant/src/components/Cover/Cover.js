import React from "react";
import converVideo from "./pexels-kelly-lacy-6498494.mp4";
import "./Cover.css";

function Cover() {
  return (
    <div className="cover-container ">
      <video className="video" src={converVideo} autoPlay loop muted />
      <h1>Engertool</h1>
      <p>
        Una forma de transformar el mundo de las personas a nuestro alrededor
      </p>
      <button className="btn-contact">
        <a href="https://es-la.facebook.com/">Contáctanos</a>
      </button>
    </div>
  );
}

export default Cover;
