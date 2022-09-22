import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Panell } from "../Panell/Panell";
import { InputPresupuesto } from "./InputPresupuesto/InputPresupuesto";

export const Checkbox = ({ addPresupuesto, buscarPresupuesto }) => {
  const [input1, setInput1] = useLocalStorage("input1", false);
  const [input2, setInput2] = useLocalStorage("input2", false);
  const [input3, setInput3] = useLocalStorage("input3", false);

  const [total, setTotal] = useState(0);
  const [totalOpciones, setTotalOpciones] = useState(0);

  const newPresupuesto = (nombrePresupuesto, usuario) => {
    if (!nombrePresupuesto || !usuario) {
      alert(
        "Falta rellenar uno de los campos para poder guardar el presupuesto"
      );
      return;
    }

    const datosPresupuesto = {
      nombrePresupuesto,
      usuario,
      input1,
      input2,
      input3,
      opciones: totalOpciones / 30,
      total,
      fecha: new Date().toLocaleString(),
    };

    addPresupuesto(datosPresupuesto);
  };

  const sumaTotal = (totalOpciones = 0) => {
    let sumaTotal = 0;

    input1 && (sumaTotal += 500 + totalOpciones);
    input2 && (sumaTotal += 300);
    input3 && (sumaTotal += 200);

    setTotal(sumaTotal);
  };

  useEffect(() => {
    sumaTotal(totalOpciones);
  }, [totalOpciones, input1, input2, input3]);

  return (
    <div className="container-fluid m-3">
      <div className="row">
        <div className="col-12">
          <h1 className="display-6 mb-3">¿Que quieres hacer?</h1>
          <label className="mb-1">
            <input
              className="form-check-input me-2 "
              type="checkbox"
              name="input1"
              checked={input1}
              onChange={(e) => setInput1(e.target.checked)}
            />
            Una pagina web (500€)
          </label>
          <br />
          {input1 && <Panell setTotalOpciones={setTotalOpciones} />}
          <label className="mb-1">
            <input
              className="form-check-input me-2"
              type="checkbox"
              name="input2"
              checked={input2}
              onChange={(e) => setInput2(e.target.checked)}
            />
            Una consultoria SEO (300€)
          </label>
          <br />
          <label className="mb-1">
            <input
              className="form-check-input me-2"
              type="checkbox"
              name="input3"
              checked={input3}
              onChange={(e) => setInput3(e.target.checked)}
            />
            Una campaña de Google Ads (200€)
          </label>
        </div>
        <div className="col-6"></div>
      </div>
      <div className="row">
        <div className="col-12 mt-2">
          <p>Total: {total}€ </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <InputPresupuesto
            newPresupuesto={newPresupuesto}
            buscarPresupuesto={buscarPresupuesto}
          />
        </div>
      </div>
    </div>
  );
};
