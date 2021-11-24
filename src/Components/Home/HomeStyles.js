import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


export const DivCarrito = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    color: gray;
`

export const Parrafo = styled.p`
    color: black;
    font-weight: bold;
    font-family: 'Shippori Antique B1', sans-serif;
    font-size: 40px;
`
export const DivInput = styled.div`
    width: 100%;
    height: 3rem;
    border-radius: 50px;
    background-color: #E7E7E7;
    color: gray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 2rem 0;
`
export const Icono = styled(FontAwesomeIcon)`
    color: black;
    padding-right: 5px;
    font-size: 20px;

`
export const InputSearch = styled.input`
    background-color: #E7E7E7;
    font-size: 18px;
    color: black;
    border:1px solid  #E7E7E7;
    font-family: 'Shippori Antique B1', sans-serif;
   
    &:focus {
            outline:none;
            color: #9A9A9D;
            background-color: #E7E7E7;
            font-family: 'Shippori Antique B1', sans-serif;
    }

`
export const SelectLink = styled.p`
    text-decoration: none;
    color: gray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 1.3rem;
    font-family: 'Shippori Antique B1', sans-serif;
    cursor: pointer;
    padding-bottom: 20px;

    &.active {
        color: orange;
        text-decoration:underline;
    }
`
export const DivSelects = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
export const DivCards = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const LiCards = styled.li`
    display: flex;
    list-style: none;
    flex-direction: row;
    background-color: #FFFFFF;
    border-radius: 20px;
    height: 8rem;
`

export const Img = styled.img`
    width: 6rem;
    height: 6rem;
`

export const DivText = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Shippori Antique B1', sans-serif;
    
`
export const Pesos = styled.h3`
    color: #FA4A0C;
`
export const H1Flavor = styled.h1`
    font-size: 1.3rem;
    padding-bottom: 0.5rem;
`

export const LinkCards = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 0;
`

export const DivPintar = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin-bottom: 2.5rem;
    font-family: 'Shippori Antique B1', sans-serif;
`
export const ImageDivPintar = styled.img`
    width: 8rem;
    height: 8rem;
`

export const DivContador = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const DivBotones = styled.div`
    width: 10rem;
    height: 4rem;
    background-color:#FFFFFF;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-around;
    border-radius: 10px;
    font-size: 20px;
    font-family: 'Shippori Antique B1', sans-serif;
    font-weight: bold;
`

export const ButtonMenosContador = styled.button`
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    background-color: white;
    border: 2px solid black;
    opacity: 0.5;
    &.active{
        opacity: 1;
    }
    &:hover:active{
        transform:scale(.90);
    }
`

export const ButtonMasContador = styled.button`
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    border: 2px solid black;
    background-color: white;
    &:hover:active{
        transform:scale(.90)
    }
`

export const IconoMenos = styled(FontAwesomeIcon)`
    color: black;
    font-size:20px;  
`
export const IconoMas = styled(FontAwesomeIcon)`
    color: black;
    font-size:20px;
`

export const ButtonCarrito = styled.button`
    width: 90%;
    height: 4rem;
    background-color: #FA4A0C;
    border: none;
    font-size: 15px;
    color: #F6F6F9;
    border-radius: 50px;
    position: fixed;
    bottom: 0;
    z-index: 100;
    left: 1;
    &:hover:active{
        transform:scale(.90);
    }
`

export const DivBotonCarrito = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
`

export const DivGuajolocombo = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
`

export const DivCheckbox = styled.div`
    width: 10rem;
    height: 10rem;
    background-color: white;
    border-radius: 20px;
`

export const ImageCheckBox = styled.img`
    width: 5rem;
    height: 5rem;
    
`
export const DivCajita = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const DivImgH4P = styled.div`
    display: flex;
    flex-direction: column;
    padding-left:10px;
`
export const H4ImgP = styled.h4`
    font-size: 13px;
    font-weight: bold;
`
export const CheckBoxP = styled.p`
    font-size: 13px;
    color: #FA4A0C;
    font-weight: bold;
`

//Sesion sabores

export const DivSabores = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 20px;
   
`
export const ImgSabores = styled.img`
    width: 4rem;
    height: 4rem;
    margin-right: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    &:hover:active{
        transform:scale(.90);
    }
`

export const H1NameSlider = styled.h1`
    text-align: center;
    font-size: 25px;
`

export const H2NameSabor = styled.h2`
    font-size: 20px;
    padding: 20px 20px 5px 0;
`

export const DivInputModal = styled.div`
    width: 80%;
    height: 3rem;
    border-radius: 50px;
    background-color: #E7E7E7;
    color: gray;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 2rem 0 2rem 0;
`

export const LinkModalCancelar = styled(Link)`
    text-decoration: none;
    width: 20%;
    color: black;
    padding-left: 10px;
`
export const DivSearchs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;  
`

//carrito
export const DivNoHayResultados = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
`
export const LinkCarrito = styled(Link)`
    text-decoration: none;
    color: gray;
`
export const DivImagenNoHayProductos = styled.div`
    width: 10rem;
    height: 10rem;
`
export const DivImagenCarrito = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;    
`
export const ImagenNoHayProductos = styled.img`
    width: 10rem;
    height: 10rem;
`
export const H5NoHayProductos = styled.h5`
    width: 100%;
    text-align: center;
    padding-left: 0.5rem;
    font-size: 19px;
`
export const LinkAtras = styled(Link)`
    width: 2rem;
    height: 2rem;
`
export const ImgAtras = styled.img`
    width: 2rem;
    height: 2rem;
`
export const DivContainerFlechaCarrito = styled.div`
    display: flex;
    flex-direction:row;
    width: 100%;
    margin-top: 3rem;
`
export const DivFlechitaAtras = styled.div`
    width:10%;
`
export const DivTituloCarrito = styled.div`
    width: 90%;
    padding-right: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
`
export const DivPintarDataCarrito = styled.div`
    width:100%;
    height: 100%;
`
export const ImgPintarDataCarrito = styled.img`
    width: 4rem;
    height: 4rem;
`
export const H6TituloPintarData=styled.h6`
    font-size: 13px;
` 
export const DivH6P = styled.div`
    display: flex;
    flex-direction: column;
`
export const DivTodo = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.1rem; 
`
export const H4PintarCarrito = styled.h4`
    color: #FA4A0C;
`
export const DivH4PintarCarrito = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:flex-end ;
`
export const DivTotalCarrito = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    border-radius: 30px;
    height: 4rem;
`
export const H1TotalCarrito = styled.h1`
    font-size: 20px;
    padding-left: 5%;
`

export const H1PrecioTotalCarrito = styled.h1`
    font-size: 20px;
    padding-right: 5%;
    color: #FA4A0C;
`