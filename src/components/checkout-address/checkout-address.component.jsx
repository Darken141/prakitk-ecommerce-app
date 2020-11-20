import React from 'react'

import CheckoutControls from '../checkout-controls/checkout-controls.component'

import './checkout-address.styles.scss'

const CheckoutAddress = ({ history }) => {
    return (
        <React.Fragment>
            <div>
                <h1>ADDRESS</h1>
            </div>
            <CheckoutControls handleNextClick={() => history.push(`/objednavka/zhrnutie-objednavky`)} handlePrevClick={() => history.goBack()} slug='dodacie-udaje' />
        </React.Fragment>
    )
}

export default CheckoutAddress
