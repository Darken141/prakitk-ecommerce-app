import React from 'react'

import './custom-button-styles.scss'

const CustomButton = ({ children, invert, ...otherProps }) => {
    return (
        <button className={`${invert ? "invert" : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
