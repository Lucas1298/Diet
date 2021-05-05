import React, { Component } from "react"

import { connect } from "react-redux"

import { setShowSignIn, setShowSignUp } from "../../redux/show/show.action"

import ButtonCustom from "../butttonCustom/buttonCustom.component"
import FormInput from "../form-input/form-input.component"

import { auth } from "../../firebase/firebase.util"

import "./sign-up.styles.scss"

class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            await auth.createUserWithEmailAndPassword(email, password);
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { setShowSignUp, setShowSignIn } = this.props;

        return (
            <form className={`form-sign-up`} onSubmit={this.handleSubmit}>

                <FormInput
                    type="text"
                    name="displayName"
                    label="DisplayName"
                    handleChange={this.handleChange}
                    required
                />
                <FormInput
                    type="text"
                    name="email"
                    label="Email"
                    handleChange={this.handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    handleChange={this.handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    label="ConfirmPassword"
                    handleChange={this.handleChange}
                    required
                />

                <div className="button-custom">
                    <ButtonCustom type="submit">Registrarse</ButtonCustom>
                </div>

                <span className="link-log-in"
                    onClick={() => {
                        setShowSignUp(false);
                        setShowSignIn(true)
                    }}>
                    ¿Ya tenes cuenta?
                </span>
            </form>

        )
    }
}

const mapDispatchToProps = dispatch => ({
    setShowSignIn: state => dispatch(setShowSignIn(state)),
    setShowSignUp: state => dispatch(setShowSignUp(state))
})


export default connect(null, mapDispatchToProps)(SignUp);