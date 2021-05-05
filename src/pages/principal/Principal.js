import React from "react"

import { connect } from "react-redux"

import { setShowPopUp } from "../../redux/show/show.action"

import ButtonCustom from "../../component/butttonCustom/buttonCustom.component"
import PopUp from "../../component/popup/popup.component"


import logo from "../../Image/App/Logo.png"
import "./Principal.styles.scss"

const Principal = ({dispatchShowPopUp, showPopUp}) => {
    return (
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
                <ButtonCustom onClick={()=>dispatchShowPopUp(true)}>Iniciar Sesión</ButtonCustom>
            </div>

           { showPopUp ? ( <PopUp /> ) : null}
       

        </div>
    )
}

const mapStateToProps = ({show}) =>({
    showPopUp: show.showPopUp
})

const mapDispatchToProps = dispatch =>({
    dispatchShowPopUp: show => dispatch(setShowPopUp(show))
})

export default connect(mapStateToProps, mapDispatchToProps)(Principal)