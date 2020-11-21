import React, { createContext, useState, useContext } from 'react'
import { CartContext } from '../cart/cart.context'

export const CheckoutContext = createContext({
    checkoutForm: null,
    activeStep: '',
    setActiveStep: () => { },
    handleShippingChange: () => { },
    handleAddressChange: () => { },
    handlePaymentChange: () => { }
})

const CheckoutProvider = ({ children }) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('CHECKOUT PROVIDER | render')
    }
    const { cartItems } = useContext(CartContext)
    const [activeStep, setActiveStep] = useState('')
    const [checkoutForm, setCheckoutForm] = useState({
        items: cartItems,
        shipping: 'osobny-odber',
        payment: 'pri-prevzati-osobny-odber',
        address: {
            fName: '',
            lName: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    })

    const handleShippingChange = (name, option) => {
        if (checkoutForm.shipping === 'osobny-odber') {
            setCheckoutForm({
                ...checkoutForm,
                [name]: option,
                payment: "pri-prevzati-dobierka"
            })
        }

        if (checkoutForm.shipping === "dorucenie-na-adresu") {
            setCheckoutForm({
                ...checkoutForm,
                [name]: option,
                payment: "pri-prevzati-osobny-odber"
            })
        }
    }

    const handlePaymentChange = (name, value) => {
        setCheckoutForm({
            ...checkoutForm,
            [name]: value
        })
    }

    const handleAddressChange = (name, value) => {
        setCheckoutForm({
            ...checkoutForm,
            address: {
                ...checkoutForm.address,
                [name]: value
            }
        })
    }

    return (
        <CheckoutContext.Provider
            value={{
                checkoutForm,
                activeStep,
                setActiveStep,
                handleShippingChange,
                handleAddressChange,
                handlePaymentChange
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutProvider