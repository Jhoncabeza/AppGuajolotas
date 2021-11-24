import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { DivInput, Icono, InputSearch } from './HomeStyles'
import { Link } from 'react-router-dom'

const Buscador = () => {
    return (
        <DivInput>
            <Link to="/Search"><Icono icon={faSearch} /><InputSearch type="text" placeholder=" Sabor de guajolota,bebida..."/></Link>
        </DivInput>
    )
}

export default Buscador
