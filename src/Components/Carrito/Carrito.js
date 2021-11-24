import React, { useState } from 'react'
import { ButtonCarrito, DivBotonCarrito, DivContainerFlechaCarrito, DivFlechitaAtras, DivH4PintarCarrito, DivH6P, DivImagenCarrito, DivImagenNoHayProductos, DivPintarDataCarrito, DivTituloCarrito, DivTodo, DivTotalCarrito, H1PrecioTotalCarrito, H1TotalCarrito, H4PintarCarrito, H5NoHayProductos, H6TituloPintarData, ImagenNoHayProductos, ImgAtras, ImgPintarDataCarrito, LinkAtras } from '../Home/HomeStyles'

let noHayProductos = {
    "nombre": "No hay productos",
    "imagen": "https://res.cloudinary.com/dxgmhyliz/image/upload/v1637708981/Sprint_2/logo/Group_exs6pv.png"
}

const Carrito = () => {
    const [productos, setProductos] = useState(noHayProductos)
    

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
                productos === noHayProductos ?
                    <DivImagenCarrito>
                        <DivImagenNoHayProductos>
                            <ImagenNoHayProductos src={noHayProductos.imagen} alt="" />
                        </DivImagenNoHayProductos>
                        <H5NoHayProductos>{noHayProductos.nombre}</H5NoHayProductos>
                    </DivImagenCarrito>
                    :

                    <DivPintarDataCarrito>
                        <DivTodo>
                            <ImgPintarDataCarrito src="https://res.cloudinary.com/dxgmhyliz/image/upload/v1636775454/Sprint_2/Guajolotas/guajolota-rajas_tyegpo.png" alt="" />
                            <DivH6P>
                                <H6TituloPintarData>Guajolota de Tamal Verde</H6TituloPintarData>
                                <H4PintarCarrito>x2</H4PintarCarrito>
                            </DivH6P>
                            <DivH4PintarCarrito>
                                <H4PintarCarrito>$50 MXN</H4PintarCarrito>
                            </DivH4PintarCarrito>
                        </DivTodo>
                        
                        <DivTotalCarrito>
                            <H1TotalCarrito>Total</H1TotalCarrito>
                            <H1PrecioTotalCarrito>$50 MXN</H1PrecioTotalCarrito>
                        </DivTotalCarrito>
                    </DivPintarDataCarrito>


            }

            <DivBotonCarrito>
                <ButtonCarrito >Pagar</ButtonCarrito>
            </DivBotonCarrito>
        </div >
    )
}

export default Carrito
