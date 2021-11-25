import { faArrowLeft, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    ButtonCarrito, ButtonMasContador, ButtonMenosContador, CheckBoxP, DivBotonCarrito, DivBotones,
    DivCajita, DivCarrito, DivCheckbox, DivContador, DivGuajolocombo, DivImgH4P, DivPintar, DivSabores,
    H1NameSlider, H2NameSabor, H4ImgP, IconoMas, IconoMenos, ImageCheckBox, ImageDivPintar, ImgSabores,
    LinkCards, Pesos
} from './HomeStyles'
import LogoCarrito from './LogoCarrito'


const Modal = () => {
    let dataSabores = JSON.parse(localStorage.getItem('toda'));
    let dataGuajolocombo = JSON.parse(localStorage.getItem('guajolocombo'));

    const [datos, setDatos] = useState({});
    const [contador, setContador] = useState(1);
    const [opacidadMenos, setOpacidadMenos] = useState("");
    const [checked, setChecked] = useState(false);
    const [checkboxPrecio, setCheckboxPrecio] = useState(0);
    const [checkBoxCantidad, setCheckBoxCantidad] = useState(0);
    const [shoppingCart, setShoppingCart] = useState([]);
    let contadorCarrito = contador;
    let dataElementoElegido = datos;
    console.log(checked)
    useEffect(() => {
        setDatos(JSON.parse(localStorage.getItem('data')));
    }, [])

    const cambioColor = (contador) => {
        contador < 2 ? setOpacidadMenos("") : setOpacidadMenos("active")
    }


    const addChange = (precio, ind) => {
        setCheckboxPrecio(checkboxPrecio + precio);
        setCheckBoxCantidad(checkBoxCantidad + 1);
        let newCart = [...shoppingCart]
        newCart.push(ind)
        setShoppingCart(newCart)
    }

    const deleteChange = (precio, ind) => {
        setCheckboxPrecio(checkboxPrecio - precio);
        setCheckBoxCantidad(checkBoxCantidad - 1);
        let newCart = [...shoppingCart]
        let indexFound = newCart.findIndex((element) => element.id === ind.id)
        newCart = newCart.filter((element, index) => index !== indexFound)
        setShoppingCart(newCart)
    }

    const handleChange = (e, precio, ind) => {
        let bandera = e.target.checked
        setChecked(e.target.checked);
        if (bandera !== undefined) {
            bandera ?
                addChange(precio, ind)
                :
                deleteChange(precio, ind)
        }
    };

    const handlePost = async () => {
        await fetch('https://datasprint2.herokuapp.com/carrito', {
            method: 'POST',
            body: JSON.stringify({
                "contador": contadorCarrito,
                "dataElegido": dataElementoElegido,
                "checkbox": shoppingCart,
                "total": (datos.price * contador) + checkboxPrecio

            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        window.location.reload(true);
    }

    return (
        <div>
            <DivCarrito>
                <LinkCards to='/Home'><FontAwesomeIcon icon={faArrowLeft} /></LinkCards>
                <Link style={{ textDecoration: "none", color: "gray" }} to='/Car'><LogoCarrito /></Link>
            </DivCarrito>

            <DivPintar>
                <ImageDivPintar src={datos.image} alt="" />
                <H1NameSlider>{datos.name}</H1NameSlider>
                <Pesos>${datos.price} MXN</Pesos>
            </DivPintar>

            <DivContador>
                <DivBotones>
                    <ButtonMenosContador onClick={() => {
                        contador <= 1 ? setContador(1) : setContador(contador - 1); cambioColor(contador - 1)
                    }}
                        className={opacidadMenos}><IconoMenos icon={faMinus} /></ButtonMenosContador>
                    <span >{contador}</span>
                    <ButtonMasContador onClick={() => { setContador(contador + 1); cambioColor(contador + 1) }}><IconoMas icon={faPlus} /></ButtonMasContador>
                </DivBotones>
            </DivContador>
            <H2NameSabor>Sabor</H2NameSabor>
            <DivSabores>
                {

                    dataSabores.map((ind) => (
                        <ImgSabores onClick={() => { setDatos(ind) }} key={ind.id} src={ind.flavor.imageFlavor} alt="" />
                    ))

                }
            </DivSabores>
            <H2NameSabor>Guajolocombo</H2NameSabor>
            <p>Selecciona la combinacion que mas te guste y disfruta de tu desayuno</p>
            <DivGuajolocombo>
                {

                    dataGuajolocombo.map((ind) => (
                        <DivCheckbox key={ind.id}  >
                            <DivCajita>
                                <input type="checkbox" onChange={(e) => { handleChange(e, ind.price, ind) }} />
                            </DivCajita>
                            <DivImgH4P>
                                <ImageCheckBox src={ind.image} alt="" />
                                <H4ImgP>{ind.flavor.nameFlavor}</H4ImgP>
                                <CheckBoxP>+${ind.price} MXN</CheckBoxP>
                            </DivImgH4P>
                        </DivCheckbox>
                    ))

                }

            </DivGuajolocombo>
            <DivBotonCarrito>
                <ButtonCarrito onClick={() => { handlePost() }}>Agregar {contador + checkBoxCantidad} al carrito  ${(datos.price * contador) + checkboxPrecio} MXN</ButtonCarrito>
            </DivBotonCarrito>


        </div>
    )
}

export default Modal