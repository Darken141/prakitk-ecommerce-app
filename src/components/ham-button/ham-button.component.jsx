import React from 'react'

import './ham-button.styles.scss'

const HamButton = ({ isOpen = false, handleClick = null }) => {
    return (
        <button onClick={handleClick} className={isOpen ? "open-ham-styles" : "close-ham-styles"}>
            <div />
            <div />
            <div />
        </button>
    )
}

export default HamButton