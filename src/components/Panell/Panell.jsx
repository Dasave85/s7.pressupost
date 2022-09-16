import { useEffect, useState } from "react"
import styled from "styled-components"
import { useLocalStorage } from "../hooks/useLocalStorage"

import { InputCustom } from "./InputCustom"

const Container = styled.div`
    border: 3px solid;
    border-radius: 10px;
    margin: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column; 
    max-width: fit-content;  
        
`

export const Panell = ({sumaTotal}) => {

    const [paginas, setPaginas] = useLocalStorage('paginas', 0)
    const [idiomas, setIdiomas] = useLocalStorage('idiomas', 0)

    const [totalOpciones, setTotalOpciones] = useState(0)

    const sumarPagina= () => {
        setPaginas(paginas + 1)
    }
    const restarPagina= () => {
        paginas && setPaginas(paginas - 1)
    }
    const sumarIdioma= () => {
        setIdiomas(idiomas + 1)
    }
    const restarIdioma= () => {
        idiomas && setIdiomas(idiomas - 1)
    }

    useEffect(() => {
        setTotalOpciones((paginas + idiomas) * 30)
     
    }, [paginas, idiomas])
    
        
    useEffect(() => {
      sumaTotal(totalOpciones)
    }, [totalOpciones])
    


  return (
    <Container>
        <label>Numero de Paginas            
            <InputCustom onChange={setPaginas} suma={sumarPagina} resta={restarPagina} value={paginas}/>
        </label>
        <label>Numero de Idiomas
            <InputCustom onChange={setIdiomas} suma={sumarIdioma} resta={restarIdioma} value={idiomas}/>
        </label>
    </Container>
  )
}

