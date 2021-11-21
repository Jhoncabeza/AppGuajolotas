import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { DivInput, Icono, InputSearch } from './HomeStyles'


const Buscador = () => {
    return (
        <DivInput>
            <Icono icon={faSearch} /><InputSearch type="text" placeholder=" Sabor de guajolota,bebida..."/>
        </DivInput>
    )
}

export default Buscador
