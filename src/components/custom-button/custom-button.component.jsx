import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
    return(

        // both button and input can both take porperties of type='submit'
        <button className={`${isGoogleSignIn? "google-sign-in": ""} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton