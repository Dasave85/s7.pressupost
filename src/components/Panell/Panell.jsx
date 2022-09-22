import { useEffect} from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { Modal } from "./Modal/Modal"

import { InputCustom } from "./InputCustom/InputCustom"



export const Panell = ({setTotalOpciones}) => {

    const [paginas, setPaginas] = useLocalStorage('paginas', 0)
    const [idiomas, setIdiomas] = useLocalStorage('idiomas', 0)

   

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
    
        
   
    


  return (
    <div className=" container  ">
        <div className="col-12 my-3 p-3 border border-secondary border-3 rounded-3">
        <div className="row align-items-center mb-2">
            <div className="col-12 col-lg-4 fw-bold mb-2">
                Numero de Paginas
            </div>
            <div className="col-11 col-lg-7">
            <InputCustom 
                onChange={setPaginas} 
                suma={sumarPagina}
                resta={restarPagina}
                value={paginas}/>
            </div>
            <div className="col-1">
                <Modal titulo={'Numero de paginas'} tipo={'paginas'} cantidad={paginas}/>
            </div>
        </div>

        <div className="row align-items-center mb-2">
            <div className="col-12 col-lg-4 fw-bold mb-2">
                Numero de Idiomas
            </div>
            <div className="col-11 col-lg-7">
            <InputCustom 
                onChange={setIdiomas} 
                suma={sumarIdioma}
                resta={restarIdioma}
                value={idiomas}/>
            </div>
            <div className="col-1">
                <Modal titulo={'Numero de idiomas'} tipo={'idiomas'} cantidad={idiomas}/>
            </div>
        </div>
    </div>

        </div>

  )
}

