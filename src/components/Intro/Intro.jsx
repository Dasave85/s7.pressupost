import React from "react";
import { Link } from "react-router-dom";

export const Intro = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 my-3">
          <h1 className="display-3">Bienvenido Usuario</h1>
          <hr />
        </div>
        <div className="col-12">
          <p className="fw-lighter">
            En esta web podras generar presupuestos segun tus necesidades
          </p>
        </div>
        <div className="col-12 my-3">
          <Link
            className="text-decoration-none border border-primary border-3 rounded-3 p-1 fw-bolder"
            to={"/presupuesto"}
          >
            Generador de presupuesto
          </Link>
        </div>
      </div>
    </div>
  );
};
