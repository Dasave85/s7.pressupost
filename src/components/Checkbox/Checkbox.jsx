import { useEffect, useState } from "react"

export const Checkbox = () => {

    const [input1, setInput1] = useState(false)
    const [input2, setInput2] = useState(false)
    const [input3, setInput3] = useState(false)

    
  return (
    <>
    <label><input 
        type="checkbox" 
        name="input1"
        checked={input1} 
        onChange={e => setInput1(e.target.checked)} 
        />Una pagina web (500€)</label>
    <br />
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
    </>
  )
}
