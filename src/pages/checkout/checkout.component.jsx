import React from 'react'
// import { CheckoutContext } from '../../contexts/checkout/checkout.context'
// import { Switch, Route, useRouteMatch } from 'react-router-dom'

import SectionHeading from '../../components/section-heading/section-heading.component'
import CheckoutCart from '../../components/checkout-cart/checkout-cart.component'
import CheckoutShippingAndPayment from '../../components/checkout-shipping-and-payment/checkout-shipping-and-payment.component'
import CheckoutAddress from '../../components/checkout-address/checkout-address.component'
// import CheckoutSummary from '../../components/checkout-summary/checkout-summary.component'

import './checkout.styles.scss'


const CheckoutPage = () => {
    // const match = useRouteMatch()
    // const { activeStep } = useContext(CheckoutContext)

    return (
        <section className='checkout-page'>
            <div className='checkout-section'>
                <SectionHeading>
                    Položky vo vašom košíku:
                </SectionHeading>
                <CheckoutCart />
            </div>

            <div className='checkout-section'>
                <SectionHeading>
                    Vyberte si Spôsob doručenia
                </SectionHeading>

                <CheckoutShippingAndPayment />
            </div>

            <div className='checkout-section'>
                <SectionHeading>
                    Adresa doručenia
                </SectionHeading>

                <CheckoutAddress />

            </div>

        </section>
    )
}

export default CheckoutPage
