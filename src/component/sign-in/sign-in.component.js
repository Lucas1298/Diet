import React, { Component } from "react"

import { connect } from "react-redux"

import { setShowSignIn, setShowSignUp } from "../../redux/show/show.action"

import FormInput from "../form-input/form-input.component"
import ButtonCustom from "../butttonCustom/buttonCustom.component"

import { auth } from "../../firebase/firebase.util"

import "./sign-in.styles.scss"

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            Email: "",
            Password: "",
            showSigIn: true
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { Email, Password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(Email, Password);
            this.setState({ Email: "", Password: "" })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { showSignIn, setShowSignIn, setShowSignUp } = this.props;
        return (
            <form className={`form-sign-in ${showSignIn ? "on" : "off"}`} onSubmit={this.handleSubmit}>
                <FormInput
                    name="Email"
                    type="text"
                    label="Email"
                    handleChange={this.handleChange}
                    required
                />
                <FormInput
                    name="Password"
                    type="password"
                    label="Password"
                    handleChange={this.handleChange}
                    required
                />
                <span className="forgot-password">Forgot your password?</span>

                <div className="button-log-in">
                    <ButtonCustom > Log In</ButtonCustom>
                </div>

                <span className="link-sign-in"
                    onClick={() => {
                        setShowSignIn(false);
                        setShowSignUp(true)
                    }}>
                    ¿Todavia no tenes cuenta?
                    </span>
            </form>
        )
    }
}

const mapStateToProps = ({ show }) => ({
    showSignIn: show.showSignIn

})

const mapDispatchToProps = dispatch => ({
    setShowSignIn: state => dispatch(setShowSignIn(state)),
    setShowSignUp: state => dispatch(setShowSignUp(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);





