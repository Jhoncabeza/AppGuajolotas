import React from 'react'
import { ARegresar, ButtonFormulario, DivFormulario, FormularioInicio, ImgFormulario, InputFormulario, LabelFormulario } from './ResgistrarseStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const Registrarse = () => {
    return (
        <>
            <DivFormulario>
                <ImgFormulario src="https://res.cloudinary.com/dxgmhyliz/image/upload/v1636825775/Sprint_2/logo/logo_typejp.png" alt="logo" />
                <LabelFormulario >REGISTRARSE</LabelFormulario>
                <FormularioInicio>
                    <InputFormulario type="email" name="email" placeholder="Email" />
                    <InputFormulario type="password" name="pasword" placeholder="Password" />
                    <ButtonFormulario type="submit">REGISTRARME</ButtonFormulario>
                </FormularioInicio>
                <ARegresar to="/" ><FontAwesomeIcon icon={faArrowLeft} />Volver</ARegresar>
            </DivFormulario>
        </>
    )
}

export default Registrarse
