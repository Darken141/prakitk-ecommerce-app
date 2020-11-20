import React from 'react'

import CheckoutControls from '../checkout-controls/checkout-controls.component'

import './checkout-shipping-and-payment.styles.scss'

const CheckoutShippingAndPayment = ({ history, match }) => {
    return (
        <React.Fragment>
            <div>
                <h1>SHIPPING AND PAYMENT</h1>
            </div>
            <CheckoutControls handleNextClick={() => history.push(`/objednavka/dodacie-udaje`)} handlePrevClick={() => history.goBack()} slug='doprava-a-platba' />
        </React.Fragment>
    )
}

export default CheckoutShippingAndPayment
