import React from "react"

import "./form-input.styles.scss"
const FormInput = ({ handleChange, label, ...otherProps }) =>(
    <div className="field">
        <input className="form-input" placeholder={label} onChange={handleChange} {...otherProps}/>
    </div>
)

export default FormInput