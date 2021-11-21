import React from 'react'
import { ACrearCuenta, ButtonFormulario, DivFormulario, FormularioInicio, ImgFormulario, InputFormulario, LabelCrearCuenta, LabelFormulario } from './FormularioStyles'

const Formulario = () => {
    return (
        <DivFormulario>
            <ImgFormulario src="https://res.cloudinary.com/dxgmhyliz/image/upload/v1636825775/Sprint_2/logo/logo_typejp.png"alt="logo" />
            <LabelFormulario >INICIAR SESIÓN</LabelFormulario>
            <FormularioInicio>
                <InputFormulario type="email" name="email" placeholder="Email"/>
                <InputFormulario type="password" name="pasword" placeholder="Password"/>
                <ButtonFormulario type="submit">ENVIAR</ButtonFormulario>
                <LabelCrearCuenta > ¿No tiene una cuenta? <ACrearCuenta to="/Registrarse">Crea una aquí</ACrearCuenta></LabelCrearCuenta>
            </FormularioInicio>
        </DivFormulario>
    )
}

export default Formulario
