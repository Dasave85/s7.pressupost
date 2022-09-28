


export const InputCustom = ({onChange, suma, resta, value}) => {

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-2">
        <button className="btn btn-danger  " onClick={resta}>-</button>
      </div>
      <div className="col-8">
        <input className="form-control"   
          value={value}    
          type="number"
          name="paginas"
          min={0}
          onChange={e=> onChange(Number(e.target.value))} 
          />
      </div>
      <div className="col-2">

        <button className="btn btn-danger" onClick={suma}>+</button>
      </div>
    </div>
  )
}
