import React from "react"

import FormInput from "../form-input/form-input.component"

const SignIn = () => {

    
    return (
        <div className="sign-up">
            <form className="sign-input-form">
                <FormInput
                    type="text"
                    name="user"
                    label="user"
                    required
                />
                <FormInput
                    type="text"
                    name="Email"
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="contraseña"
                    label="contraseña"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmar contraseña"
                    label="confirmar contraseña"
                    required
                />

            </form>
        </div>
    )
}
export default SignIn;