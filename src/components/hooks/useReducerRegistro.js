import { useReducer } from "react";

const listadoInicial = [
  {
    nombrePresupuesto: null,
    usuario: null,
    input1: null,
    input2: null,
    input3: null,
    opciones: null,
    total: null,
    fecha: null,
  },
];

const init = () => {
  const item = localStorage.getItem("presupuestos");
  if (!item) return listadoInicial;
  const data = JSON.parse(item);
  return data;
};

const reducerListado = (listadoInicial = [], action = {}) => {
  switch (action.type) {
    case "[PRESUPUESTO] add presupuesto":
      return [...listadoInicial, action.payload];

    default:
      return listadoInicial;
  }
};

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

export const useReducerRegistro = () => {
  const [state, dispatch] = useReducer(reducerListado, listadoInicial, init);

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

    if (busca.length < 1) {
      alert("Presupuesto no encontrado");
      return;
    }

    const accion = {
      type: "[PRESUPUESTO] buscar presupuesto",
      payload: busca,
    };

    dispatchListado(accion);
  };

  return {
    state,
    listadoMostrar,
    addPresupuesto,
    ordenarPorPresupuesto,
    ordenarPorFecha,
    reiniciarListado,
    buscarPresupuesto,
  };
};
