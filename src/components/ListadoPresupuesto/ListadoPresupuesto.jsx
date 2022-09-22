import styled from "styled-components";

const P = styled.p`
  font-size: 12px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 700;
`;

export const ListadoPresupuesto = ({
  presupuestos,
  ordenarPorPresupuesto,
  ordenarPorFecha,
  reiniciarListado,
}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="text-center m-3 display-6">Listado de Presupuestos</h3>
          <div>
            ordenar por:
            <button
              className="btn btn-outline-primary btn-sm m-1"
              onClick={ordenarPorPresupuesto}
            >
              nombre
            </button>
            <button
              className="btn btn-outline-primary btn-sm m-1"
              onClick={ordenarPorFecha}
            >
              fecha
            </button>
            <button
              className="btn btn-outline-primary btn-sm m-1"
              onClick={reiniciarListado}
            >
              reiniciar
            </button>
          </div>
        </div>
        <div className="row border border-2 text-center bg-primary text-white">
          <P className="col-2 border-end border-2 m-0 py-2">PRESUPUESTO</P>
          <P className="col-2 border-end border-2 m-0 py-2">USUARIO</P>
          <P className="col-1 border-end border-2 m-0 py-2">WEB</P>
          <P className="col-1 border-end border-2 m-0 py-2">SEO</P>
          <P className="col-1 border-end border-2 m-0 py-2">ADS</P>
          <P className="col-2 border-end border-2 m-0 py-2">PAGINAS/IDIOMAS</P>
          <P className="col-1 border-end border-2 m-0 py-2">TOTAL</P>
          <P className="col-2 m-0 py-2">FECHA</P>
        </div>
        {presupuestos.map((presupuesto, i) => {
          if (!presupuesto.usuario) return;
          const {
            nombrePresupuesto,
            usuario,
            input1,
            input2,
            input3,
            opciones,
            total,
            fecha,
          } = presupuesto;
          return (
            <div
              key={i}
              className="row border border-2 border-top-0 text-center align-items-center"
            >
              <P className="col-2 border-end border-2 m-0 py-2">
                {nombrePresupuesto}
              </P>
              <P className="col-2 border-end border-2 m-0 py-2">{usuario}</P>
              <P className="col-1 border-end border-2 m-0 py-2">
                {input1 ? "X" : ""}
              </P>
              <P className="col-1 border-end border-2 m-0 py-2">
                {input2 ? "X" : ""}
              </P>
              <P className="col-1 border-end border-2 m-0 py-2">
                {input3 ? "X" : ""}
              </P>
              <P className="col-2 border-end border-2 m-0 py-2">{opciones}</P>
              <P className="col-1 border-end border-2 m-0 py-2">{total}</P>
              <P className="col-2  m-0 py-2">{fecha}</P>
            </div>
          );
        })}
      </div>
    </>
  );
};
