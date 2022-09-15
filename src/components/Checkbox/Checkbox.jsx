import { useEffect, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

import { Panell } from "../Panell/Panell"

export const Checkbox = () => {

    const [input1, setInput1] = useLocalStorage('input1', false)
    const [input2, setInput2] = useLocalStorage('input2', false)
    const [input3, setInput3] = useLocalStorage('input3', false)

    const [total, setTotal] = useState(0)

    const sumaTotal = (totalOpciones = 0) => {
      let sumaTotal = 0

      input1 && (sumaTotal += (500 + totalOpciones))
      input2 && (sumaTotal += 300)
      input3 && (sumaTotal += 200)
    
      setTotal(sumaTotal)
    }

    useEffect(() => {
      sumaTotal()
    }, [input1, input2, input3])
    
  return (
    <>
    <p>¿Que quieres hacer</p>
    <label><input 
        type="checkbox" 
        name="input1"
        checked={input1} 
        onChange={e => setInput1(e.target.checked)} 
        />Una pagina web (500€)</label>
    <br />
    {
      input1 && <Panell sumaTotal={ sumaTotal }/>
    }
    <label><input 
        type="checkbox" 
        name="input2"
        checked={input2} 
        onChange={e => setInput2(e.target.checked)} 
        />Una consultoria SEO (300€)</label>
    <br />
    <label><input 
        type="checkbox" 
        name="input3"
        checked={input3} 
        onChange={e => setInput3(e.target.checked)} 
        />Una campaña de Google Ads (200€)</label>
    <p>Total: { total }€ </p>
    </>
    
  )
}
