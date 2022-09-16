import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DivIntro = styled.div`
display: flex;
flex-flow: column;
padding-top: 30px;
background: #efd280;
height:600px;
border-radius: 10px;

    h1{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-top: 30px;
        margin-left: 10px;
        background: #ecdede;
        padding: 20px 35px;
        max-width: fit-content; 
        border-radius: 5px;
        align-self:center;

    }
    hr{
        width:100%;
    }
    p{
        
        font-size: 18px;
        font-weight: lighter;
        margin-left: 10px;
    }

    a{
        
        margin: 10px;
        background: blue;
        color: white;
        text-decoration: none;
        padding: 8px;
        border-radius: 5px;
        max-width: fit-content; 
    }

`

export const Intro = () => {
  return (
    <DivIntro>
        <h1>Bienvenido Usuario</h1>
        <hr />
        <p>En esta web podras generar presupuestos segun tus necesidades</p>
        <Link to={'/presupuesto'}>Generador de presupuesto</Link>
    </ DivIntro>
  )
}
