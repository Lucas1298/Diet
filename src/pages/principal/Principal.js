import React from "react"
import logo from "../../Image/App/Logo.png"
import ButtonCustom from "../../component/butttonCustom/buttonCustom.component"
import PopUp from "../../component/popup/popup.component"

import "./Principal.styles.scss"
const Principal = () => (
    <div className="principal">

        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <h1 className="title"> DIETA 2.0</h1>
        </div>

        <div className="slogan">
            <h1>NOW START YOUR DIET</h1>
        </div>

        <div className="button">
            <ButtonCustom className="button">Iniciar Sesión</ButtonCustom>
        </div>
        <PopUp />
    </div>
)
export default Principal