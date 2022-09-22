import { useEffect, useReducer } from "react";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { ListadoPresupuesto } from "./components/ListadoPresupuesto/ListadoPresupuesto";

const listadoInicial = [
  {
    nombrePresupuesto: "",
    usuario: "",
    input1: "",
    input2: "",
    input3: "",
    opciones: "",
    total: "",
    fecha: "",
  },
];

const init = () => {
  const item = localStorage.getItem("presupuestos");
  if (!item) return listadoInicial;
  const data = JSON.parse(item);
  return data;
};

export const App = () => {
  const reducerListado = (listadoInicial = [], action = {}) => {
    switch (action.type) {
      case "[PRESUPUESTO] add presupuesto":
        return [...listadoInicial, action.payload];

      default:
        return listadoInicial;
    }
  };

  const [state, dispatch] = useReducer(reducerListado, listadoInicial, init);

  const reducerListadoMostrar = (listadoMostrarInicial = [], action = {}) => {
    switch (action.type) {
      case "[PRESUPUESTO] add presupuesto":
        return [...listadoMostrarInicial, action.payload];

      case "[PRESUPUESTO] ordenar por presupuesto":
        return [...action.payload];

      case "[PRESUPUESTO] ordenar por fecha":
        return [...action.payload];

      case "[PRESUPUESTO] reiniciar listado":
        return [...action.payload];

      case "[PRESUPUESTO] buscar presupuesto":
        return [...action.payload];

      default:
        return listadoMostrarInicial;
    }
  };

  const [listadoMostrar, dispatchListado] = useReducer(
    reducerListadoMostrar,
    state
  );

  const addPresupuesto = (presupuesto) => {
    const accion = {
      type: "[PRESUPUESTO] add presupuesto",
      payload: presupuesto,
    };
    dispatch(accion);
    dispatchListado(accion);
  };

  const ordenarPorPresupuesto = () => {
    listadoMostrar.sort((a, b) =>
      a.nombrePresupuesto.localeCompare(b.nombrePresupuesto)
    );

    const accion = {
      type: "[PRESUPUESTO] ordenar por presupuesto",
      payload: listadoMostrar,
    };
    dispatchListado(accion);
  };

  const ordenarPorFecha = () => {
    listadoMostrar.sort((a, b) => a.fecha.localeCompare(b.fecha));

    const accion = {
      type: "[PRESUPUESTO] ordenar por fecha",
      payload: listadoMostrar,
    };
    dispatchListado(accion);
  };

  const reiniciarListado = () => {
    const accion = {
      type: "[PRESUPUESTO] reiniciar listado",
      payload: state,
    };

    dispatchListado(accion);
  };

  const buscarPresupuesto = (nombre, usr) => {
    const busca = state.filter(({ nombrePresupuesto, usuario }) => {
      return nombrePresupuesto === nombre || usuario === usr;
    });

    const accion = {
      type: "[PRESUPUESTO] buscar presupuesto",
      payload: busca,
    };

    dispatchListado(accion);
  };

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
