import React, { createContext, useState } from 'react'

export const CheckoutContext = createContext({
    activeStep: '',
    setActiveStep: () => { }
})

const CheckoutProvider = ({ children }) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('CHECKOUT PROVIDER | render')
    }
    const [activeStep, setActiveStep] = useState('')

    return (
        <CheckoutContext.Provider
            value={{
                activeStep,
                setActiveStep
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutProvider