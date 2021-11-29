import React from 'react'
import { DivImagenCarrito, DivImagenNoHayProductos, H5NoHayProductos, ImagenNoHayProductos } from '../Home/HomeStyles'

let noHayProductos = [{
    "name": "No hay productos",
    "image": "https://res.cloudinary.com/dxgmhyliz/image/upload/v1637708981/Sprint_2/logo/Group_exs6pv.png"
}]

const NoHayProductos = () => {
    return (
        noHayProductos.map((ind) => (
            <DivImagenCarrito>
                <DivImagenNoHayProductos>
                    <ImagenNoHayProductos src={ind.image} alt="" />
                </DivImagenNoHayProductos>
                <H5NoHayProductos>{ind.name}</H5NoHayProductos>
            </DivImagenCarrito>
        ))


    )
}

export default NoHayProductos
