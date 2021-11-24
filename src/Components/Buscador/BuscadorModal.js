import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { DivCards, DivInputModal, DivNoHayResultados, DivSearchs, DivText, H1Flavor, Icono, Img, InputSearch, LiCards, LinkModalCancelar, Pesos } from '../Home/HomeStyles'

let busqueda = {
    "id": "busqueda",
    "name": "Realiza una búsqueda",
    "image": "https://res.cloudinary.com/dxgmhyliz/image/upload/v1637559695/Sprint_2/Buscador/feather_search_tv35fh.png",
    "price": ""
}


let busquedaNoEncontrada = {
    "id": "busquedano",
    "name": "No hay resultados",
    "image": "https://res.cloudinary.com/dxgmhyliz/image/upload/v1637559695/Sprint_2/Buscador/feather_search_tv35fh.png",
    "price": ""
}

let url = "https://datasprint2.herokuapp.com/search/"

const BuscadorModal = () => {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([busqueda]);

    useEffect(() => {
        handleFetch(url)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])


    const handleFetch = async (url) => {

        if (search.length >= 3) {
            const data = await fetch(url + "?name_like=" + search)
            const response = await data.json()
            setResult(response)

        } else if ((result.length === 0) && (search === "")) {
            setResult([])
        } else {
            setResult([busqueda])
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <DivSearchs>
                <DivInputModal>
                    <Icono icon={faSearch} /><InputSearch value={search} onChange={handleSearch} autoFocus={true} type="text" placeholder=" Sabor de guajolo..." />
                </DivInputModal>
                <LinkModalCancelar to="/Home">Cancelar</LinkModalCancelar>
            </DivSearchs>
            <div>
                {
                        (result === [busqueda]) || (search.length <=3)?
                        
                            <DivNoHayResultados>
                                <img src={busqueda.image} alt="error" />
                                <H1Flavor>{busqueda.name}</H1Flavor>
                            </DivNoHayResultados>
                        :
                    
                        (result.length === 0) && (search.length >= 3) ?

                        <DivNoHayResultados>
                            <img src={busquedaNoEncontrada.image} alt="error" />
                            <H1Flavor>{busquedaNoEncontrada.name}</H1Flavor>
                        </DivNoHayResultados>
                                    
                        : 
            
                        result.map((ind) => (

                        <DivCards key={ind.id}>
                            <LiCards>
                                <Img src={ind.image} alt="imagen" />
                                <DivText>
                                    <H1Flavor>{ind.flavor.nameFlavor}</H1Flavor> 
                                    <Pesos>$ {ind.price} MXN</Pesos>
                                </DivText>
                            </LiCards>
                        </DivCards>
                        ))
                }
            </div>
        </div >
    )
}

export default BuscadorModal


// // 