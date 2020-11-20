import React, { useContext, useEffect } from 'react'
import { CheckoutContext } from '../../contexts/checkout/checkout.context'

import './checkout-controls.styles.scss'

const CheckoutControls = ({ handleNextClick, handlePrevClick, disablePrev, slug }) => {
    const { setActiveStep } = useContext(CheckoutContext)

    useEffect(() => {
        setActiveStep(slug)
    })

    return (
        <div className='controls'>
            {!disablePrev && <button onClick={handlePrevClick} className='prev-button' >Naspäť</button>}
            <button onClick={handleNextClick} className='next-button'>Pokračovať</button>
        </div>
    )
}

export default CheckoutControls
