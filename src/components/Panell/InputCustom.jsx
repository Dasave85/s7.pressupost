import styled from "styled-components"

const Button = styled.button`  
  background: orangered;
  font-size: 15px;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 5px;
`

export const InputCustom = ({onChange, suma, resta, value}) => {

  return (
    <>
    <Button onClick={resta}>-</Button>
    <input    
      value={value}    
      type="number"
      name="paginas"
      min={0}
      onChange={e=> onChange(Number(e.target.value))} 
      />
    <Button onClick={suma}>+</Button>
    </>
  )
}
