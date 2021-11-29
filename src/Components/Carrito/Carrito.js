import React, { useEffect, useState } from 'react'
import {
    ButtonCarrito, DivBotonCarrito, DivContainerFlechaCarrito, DivFlechitaAtras,
    DivH4PintarCarrito, DivH6P, DivPintarDataCarrito, DivTituloCarrito, DivTodo, DivTotalCarrito,
    H1PrecioTotalCarrito, H1TotalCarrito, H4PintarCarrito, H6TituloPintarData, ImgAtras,
    ImgPintarDataCarrito, LinkAtras
} from '../Home/HomeStyles'
import NoHayProductos from './NoHayProductos'

let url = "https://datasprint2.herokuapp.com/carrito"

const Carrito = () => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        getSearch(url)
    }, [])

    const getSearch = async (url) => {
        let response = await fetch(url);
        let data = await response.json();
        setDatas(data)
    }

    return (

        <div>
            <DivContainerFlechaCarrito>
                <DivFlechitaAtras>
                    <LinkAtras to="/Home"><ImgAtras src="https://res.cloudinary.com/dxgmhyliz/image/upload/v1637709101/Sprint_2/logo/chevron-left_1_jyafp4.png" alt="" /></LinkAtras>
                </DivFlechitaAtras>
                <DivTituloCarrito>
                    <h3>Carrito</h3>
                </DivTituloCarrito>
            </DivContainerFlechaCarrito>

            {
                datas.length <= 0 ?
                    <NoHayProductos />
                    :
                    <DivPintarDataCarrito>
                        <DivTodo>
                            <ImgPintarDataCarrito src={datas[0].dataElegido.image} alt="" />
                            <DivH6P>
                                <H6TituloPintarData>{datas[0].dataElegido.name}</H6TituloPintarData>
                                <H4PintarCarrito>x{datas[0].contador}</H4PintarCarrito>
                            </DivH6P>
                            <DivH4PintarCarrito>
                                <H4PintarCarrito>${datas[0].dataElegido.price * datas[0].contador} MXN</H4PintarCarrito>
                            </DivH4PintarCarrito>
                        </DivTodo>

                        {
                            (datas[0].checkbox).map((el) => (
                                <DivTodo key={el.id}>
                                    <ImgPintarDataCarrito src={el.image} alt="" />
                                    <DivH6P>
                                        <H6TituloPintarData>{el.name}</H6TituloPintarData>
                                        <H4PintarCarrito>x1</H4PintarCarrito>
                                    </DivH6P>
                                    <DivH4PintarCarrito>
                                        <H4PintarCarrito>${el.price} MXN</H4PintarCarrito>
                                    </DivH4PintarCarrito>
                                </DivTodo>
                            ))
                        }

                        <DivTotalCarrito>
                            <H1TotalCarrito>Total</H1TotalCarrito>
                            <H1PrecioTotalCarrito>${datas[0].total} MXN</H1PrecioTotalCarrito>
                        </DivTotalCarrito>
                        <DivBotonCarrito>
                            <ButtonCarrito>Pagar</ButtonCarrito>
                        </DivBotonCarrito>

                    </DivPintarDataCarrito>

            }


        </div >
    )
}

export default Carrito
