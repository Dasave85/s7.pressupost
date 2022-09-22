import React from 'react'

export const Modal = ({titulo, tipo, cantidad}) => {

    
  return (
    <>

        <button type="button" className="btn btn-light btn-sm fw-bold rounded-circle" data-bs-toggle="modal" data-bs-target={`#${tipo}`}>
            ?
        </button>


       <div className="modal fade" id={tipo} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{titulo}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Has seleccionado: {cantidad} {tipo}
                    </div>
                
                </div>
            </div>
        </div>
    </>
       
  )
}
