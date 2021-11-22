import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { DivInputModal, DivSearchs, Icono, InputSearch, LinkModalCancelar } from '../Home/HomeStyles'

// let busqueda = {
//     "id": "busqueda",
//     "name": "Realiza una busqueda",
//     "image": "https://res.cloudinary.com/dxgmhyliz/image/upload/v1637559695/Sprint_2/Buscador/feather_search_tv35fh.png"
// }
const BuscadorModal = () => {
    // let url = "https://datasprint2.herokuapp.com/search/"

    // const [search, setSearch] = useState("");
    // const [result, setResult] = useState([busqueda]);

    // console.log(result)
    // useEffect(() => {
    //     setResult()
    // }, [search])


    // const handleFetch = async (url) => {
    //     if (search.length > 3) {
    //         const data = await fetch(url + "?name_like=" + search)
    //         const response = await data.json()
    //         setResult(response)
    //     }
    // }

    // handleFetch(url)


    // const handleSearch = (e) => {
    //     setSearch(e.target.value);
    // }



    return (
        <div>
            <DivSearchs>
                <DivInputModal>
                    <Icono icon={faSearch} /><InputSearch /* value={search} onChange={handleSearch}*/ autoFocus={true} type="text" placeholder=" Sabor de guajolo..." />
                </DivInputModal>
                <LinkModalCancelar to="/Home">Cancelar</LinkModalCancelar>
            </DivSearchs>
            <div>
                {
                    // result.map((ind) => (
                    //     <div key={ind.id}>
                    //         <h1>{ind.name}</h1>
                    //         <img src={ind.image} alt="" />
                    //     </div>
                    // ))

                }
            </div>
        </div>
    )
}

export default BuscadorModal
