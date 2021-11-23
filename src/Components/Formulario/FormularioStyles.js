import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivFormulario = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormularioInicio = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ImgFormulario = styled.img`
    width: 20vh;
    height: 20vh;
`

export const InputFormulario = styled.input`
    text-align: center;
    font-family: 'Yuji Syuku', serif;
    border-radius: 5px;
    margin: 0.5vh;
    height: 5vh;
    width: 25vh;
`

export const ButtonFormulario = styled.button`
    width: 25vh;
    height: 5vh;
    background-color: orange;
    color: black;
    border-radius: 5px;
    border: 2px solid black;
    margin: 0.5vh;
    font-weight: bold;
    &:hover {
        color: white;
        font-weight: bold;
        border: 2px solid orange;
        box-shadow: 0 0 40px 40px black inset;
        transition: all 0.3s ease;
    }   
`

export const LabelFormulario = styled.label`
    font-family: 'Yuji Syuku', serif;
    font-weight: bold;
`

export const LabelCrearCuenta = styled.label`
    font-family: 'Yuji Syuku', serif;
    font-weight: bold;
    font-size: 12px;
    
`
export const ACrearCuenta = styled(Link)`
    text-decoration: none;
    color: orange;
`