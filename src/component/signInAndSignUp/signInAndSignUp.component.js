import React from "react";

import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

import "./signInAndSignUp.styles.scss"

const SignInAndSignUp = () => {

    return (
        <div className="form-container">
            <div className="form-inner">

                <SignIn />

                <SignUp />

            </div>
        </div>

    )
}

export default (SignInAndSignUp);