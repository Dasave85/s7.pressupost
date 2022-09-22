import { useState } from "react";

export const InputPresupuesto = ({ newPresupuesto, buscarPresupuesto }) => {
  const [inputValue, setInputValue] = useState({
    presupuesto: "",
    usuario: "",
  });
  const { presupuesto, usuario } = inputValue;

  const handleOnChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    newPresupuesto(presupuesto, usuario);
    setInputValue({ ...inputValue, presupuesto: "", usuario: "" });
  };

  const sendInput = () => {
    buscarPresupuesto(presupuesto, usuario);
    setInputValue({ ...inputValue, presupuesto: "", usuario: "" });
  };

  return (
    <>
      <div className="row mt-3">
        <form id="form1" onSubmit={(event) => onSubmit(event)}>
          <div className="col-12">
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Nombre del Presupuesto"
              name="presupuesto"
              value={inputValue.presupuesto}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-12">
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Ingrese su nombre"
              name="usuario"
              value={inputValue.usuario}
              onChange={handleOnChange}
            />
          </div>
        </form>
      </div>
      <div className="row ">
        <div className="col-12 mt-3 d-flex justify-content-between">
          <input
            className="btn btn-primary"
            form="form1"
            type="submit"
            value={"Guardar"}
          />
          <button className="btn btn-secondary" onClick={sendInput}>
            Buscar Presupuesto
          </button>
        </div>
      </div>
    </>
  );
};
