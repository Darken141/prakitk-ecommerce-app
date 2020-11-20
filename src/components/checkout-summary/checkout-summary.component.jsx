import React from 'react'

import CheckoutControls from '../checkout-controls/checkout-controls.component'

import './checkout-summary.styles.scss'

const CheckoutSummary = ({ history }) => {
    return (
        <React.Fragment>
            <div>
                <h1>Summary</h1>
            </div>
            <CheckoutControls submitButton handlePrevClick={() => history.goBack()} slug='zhrnutie-objednavky' />

        </React.Fragment>
    )
}

export default CheckoutSummary
