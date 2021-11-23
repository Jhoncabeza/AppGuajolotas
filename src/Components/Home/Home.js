import React, { useEffect, useState } from 'react'
import { DivCards, DivCarrito, DivSelects, DivText, H1Flavor, Img, LiCards, LinkCards, LinkCarrito, Parrafo, Pesos, SelectLink } from './HomeStyles'
import LogoPage from './LogoPage'
import LogoCarrito from './LogoCarrito'
import Buscador from './Buscador'
import { urlGuajolotas, urlBebidas, urlTamales } from '../url'



const Home = () => {

    const [data, setData] = useState([])
    const [Estadoguajolotas, setEstadoguajolotas] = useState("active")
    const [Estadobebidas, setEstadobebidas] = useState("")
    const [Estadotamales, setEstadotamales] = useState("")
    
    useEffect(() => {
        async function fetchData() {
            let response = await fetch(urlGuajolotas)
            response = await response.json()
            setData(response)
        }
        fetchData()
        dataCheckbox(urlBebidas);
    }, [])

    const categoriaResults = async (url) => {
        const resp = await fetch(url).then(resp => resp.json())
        setData(resp)
    }

    const dataCheckbox = async (url) => {
        const resp = await fetch(url).then(resp => resp.json())
        localStorage.setItem("guajolocombo", JSON.stringify(resp))
    }

    const handleGuajalotas = (e) => {
        e.preventDefault();
        categoriaResults(urlGuajolotas);
        dataCheckbox(urlBebidas);
    }

    const handleBebidas = (e) => {
        e.preventDefault();
        categoriaResults(urlBebidas);
        dataCheckbox(urlGuajolotas);
    }

    const handleTamales = (e) => {
        e.preventDefault();
        categoriaResults(urlTamales);
        dataCheckbox(urlBebidas);
    }

    const handleClick = (ind, data) => {
        const dataTotal = JSON.stringify(data)
        const datos = JSON.stringify(ind)
        localStorage.setItem("toda", dataTotal)
        localStorage.setItem("data", datos)
    }

    const helper = (id) => {
        if (id === "guajolotas") {
            setEstadoguajolotas("active")
            setEstadobebidas("")
            setEstadotamales("")
        }else if (id === "bebidas") {
            setEstadoguajolotas("")
            setEstadobebidas("active")
            setEstadotamales("")
        }else if (id === "tamales") {
            setEstadoguajolotas("")
            setEstadobebidas("")
            setEstadotamales("active")
        }
    }

    return (

        <div>
            <DivCarrito>
                <LinkCards to='/Home'><LogoPage /></LinkCards>
                <LinkCarrito to='/Car'><LogoCarrito /></LinkCarrito>
            </DivCarrito>
            <Parrafo>Nada como una Guajolota para empezar el día</Parrafo>
            <Buscador />
            <DivSelects>
                <SelectLink id="guajolotas" className={Estadoguajolotas} onClick={(e) => {
                    handleGuajalotas(e);
                    helper(e.target.id);
                }}>Guajolotas</SelectLink>
                <SelectLink id="bebidas" className={Estadobebidas}  onClick={(e) => {
                    handleBebidas(e);
                    helper(e.target.id);
                }} >Bebidas</SelectLink>
                <SelectLink id="tamales" className={Estadotamales} onClick={(e)=>{
                    handleTamales(e);
                    helper(e.target.id);
                }}>Tamales</SelectLink>
            </DivSelects>

            <>
                
                {
                    data.map((ind) => (
                        <LinkCards to="/Products" key={ind.id}>
                            <DivCards onClick={() => { handleClick(ind, data) }}>
                                <LiCards>
                                    <Img src={ind.image} alt="imagen" />
                                    <DivText>
                                        <H1Flavor>{ind.flavor.nameFlavor}</H1Flavor>
                                        <Pesos >$ {ind.price}MXN</Pesos>
                                    </DivText>
                                </LiCards>
                            </DivCards>
                        </LinkCards>
                    ))
                }
            </>
        </div>
    )
}


export default Home