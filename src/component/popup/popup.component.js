import React, { useState } from "react"

import { connect } from "react-redux"

import { setShowSignIn, setShowSignUp, setShowPopUp } from "../../redux/show/show.action"

import ButtonCustom from "../butttonCustom/buttonCustom.component"
import SignInAndSignUp from "../signInAndSignUp/signInAndSignUp.component"


import Logo from "../../Image/App/heart-5679378_960_720.png"
import "./popup.styles.scss"

const PopUp = ({ dispatchShowSignIn, dispatchShowSignUp, dispatchShowPopUp }) => {
    const [show, setShow] = useState(true)

    return (
        <div className={`overlay ${show ? "on" : "off"}`}>
            <div className={`pop-up ${show ? "on" : "off"}`}>
                <div className={`container ${show ? "on" : "off"}`}>

                    <span className="material-icons" onClick={() => {
                        setShow(false);
                        setTimeout(function () {
                            dispatchShowPopUp(false);
                            dispatchShowSignIn(true);
                            dispatchShowSignUp(false);
                        }, 1000);
                    }}>highlight_off</span>


                    <img className="logo" src={Logo} alt="" />

                    <h3 className="title-log-in">LOG IN</h3>

                    <p className="paragraph">
                        By clicking, you agree to our Terms. Learn how we process your data in our Privacy Policy and
                        Cookie Policy.
                    </p>

                    <div className="button-google">
                        <ButtonCustom >
                            <img src={"https://img.icons8.com/color/452/google-logo.png"} alt="Logo" />
                            LOG IN WITH GOOGLE
                        </ButtonCustom>
                    </div>

                    <div className="sign-in-and-sign-up">
                        <SignInAndSignUp />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchShowSignIn: show => dispatch(setShowSignIn(show)),
    dispatchShowSignUp: show => dispatch(setShowSignUp(show)),
    dispatchShowPopUp: show => dispatch(setShowPopUp(show))
})


export default connect(null, mapDispatchToProps)(PopUp);