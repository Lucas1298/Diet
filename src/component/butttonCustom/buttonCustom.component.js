import React from "react"
import "./buttonCustom.styles.scss"
const ButtonCustom = (props)=>(
        <button className="buttonCustom">{props.children}</button>
)
export default ButtonCustom