import React from "react"

import ButtonCustom from "../butttonCustom/buttonCustom.component"
import SignInAndSignUp from "../signInAndSignUp/signInAndSignUp.component"

import Logo from "../../Image/App/heart-5679378_960_720.png"
import "./popup.styles.scss"

const PopUp = () => {

    return (
        <div className="overlay">
            <div className="pop-up">
                <img className="logo-principal" src={Logo} alt="" />
                <p className="parrafo">
                    Al hacer click en Iniciar Sesión, aceptas nuestros
                    Condiciones. obtén más información sobre cómo
                    procesamos tus datos en nuestra Política de privacidad y
                    nuestra Política de cookies.
                </p>

                <div className="button-google">
                    <ButtonCustom>Iniciar Sesión con Google</ButtonCustom>
                </div>

                <div className="sign-in-and-sign-up">
                    <SignInAndSignUp />
                </div>

                <div className="button-register">
                    <ButtonCustom>Registrarse</ButtonCustom>
                </div>
            </div>
        </div>
    )
}
export default PopUp;