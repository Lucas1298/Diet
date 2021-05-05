import React from "react"
import "./buttonCustom.styles.scss"
const ButtonCustom = ({children, ...otherProps})=>(
        <button className="buttonCustom"{...otherProps}>
                <span className="text-button">{children}</span>
        </button>
)
export default ButtonCustom