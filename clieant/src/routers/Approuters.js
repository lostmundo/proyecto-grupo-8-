import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cuenta from "../pages/Cuenta";
import RegisterPage from "../pages/RegisterPage";
import HomePages from "../pages/HomePages";
import LoginUser from "../pages/LoginUser";
import Presentacion from "../pages/Presentacion";
import Proyectos from "../pages/Proyectos";
import FiltroProyectos from "../pages/FiltroProyectos";

function Approuters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cuenta" element={<Cuenta />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/presentacion" element={<Presentacion />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/filtroProyect" element={<FiltroProyectos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuters;
