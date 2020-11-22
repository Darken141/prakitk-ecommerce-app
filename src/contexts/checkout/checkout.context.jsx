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
    const { cartItems, addShippingFee } = useContext(CartContext)
    const [activeStep, setActiveStep] = useState('')
    const [checkoutForm, setCheckoutForm] = useState({
        items: cartItems,
        shipping: 'osobny-odber',
        payment: 'pri-prevzati-osobny-odber',
        address: {
            fName: '',
            lName: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            country: 'Slovensko',
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
            addShippingFee(700)

        }

        if (checkoutForm.shipping === "dorucenie-na-adresu") {
            setCheckoutForm({
                ...checkoutForm,
                [name]: option,
                payment: "pri-prevzati-osobny-odber"
            })
            addShippingFee(0)
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