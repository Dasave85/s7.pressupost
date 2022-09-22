import { useEffect } from "react";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { useReducerRegistro } from "./components/hooks/useReducerRegistro";
import { ListadoPresupuesto } from "./components/ListadoPresupuesto/ListadoPresupuesto";

export const App = () => {
  const {
    state,
    listadoMostrar,
    addPresupuesto,
    ordenarPorPresupuesto,
    ordenarPorFecha,
    reiniciarListado,
    buscarPresupuesto,
  } = useReducerRegistro();

  useEffect(() => {
    localStorage.setItem("presupuestos", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <div className="row">
        <div className="col-6">
          <Checkbox
            addPresupuesto={addPresupuesto}
            buscarPresupuesto={buscarPresupuesto}
          />
        </div>
        <div className="col-6 border-start border-1 ">
          <ListadoPresupuesto
            presupuestos={listadoMostrar}
            ordenarPorPresupuesto={ordenarPorPresupuesto}
            ordenarPorFecha={ordenarPorFecha}
            reiniciarListado={reiniciarListado}
          />
        </div>
      </div>
    </>
  );
};
