import React, { useContext } from 'react'
import { CheckoutContext } from '../../contexts/checkout/checkout.context'

// import CheckoutControls from '../checkout-controls/checkout-controls.component'

import './checkout-shipping-and-payment.styles.scss'

const CheckoutShippingAndPayment = () => {
    const { checkoutForm, handleShippingChange, handlePaymentChange } = useContext(CheckoutContext)


    return (
        <React.Fragment>
            <div className='shipping-and-payments'>
                <label className="radio-container" >
                    Osobný odber
                    <input
                        type="radio"
                        name='shipping'
                        value="osobny-odber"
                        onChange={e => handleShippingChange(e.target.name, e.target.value)}
                        checked={checkoutForm.shipping === "osobny-odber"} />
                    <span className="checkmark"></span>
                </label>
                <label className="radio-container" >
                    Doručenie na adresu
                    <input
                        type="radio"
                        name='shipping'
                        value="dorucenie-na-adresu"
                        onChange={e => handleShippingChange(e.target.name, e.target.value)}
                        checked={checkoutForm.shipping === "dorucenie-na-adresu"}
                    />
                    <span className="checkmark"></span>
                </label>

                <h2>spôsob platby</h2>

                <label className={`radio-container ${checkoutForm.shipping === "dorucenie-na-adresu" ? "disabled" : ""}`}>
                    Pri prevzatí (osobný odber)
                    <input
                        type="radio"
                        name='payment'
                        value="pri-prevzati-osobny-odber"
                        onChange={e => handlePaymentChange(e.target.name, e.target.value)}
                        checked={checkoutForm.payment === "pri-prevzati-osobny-odber"}
                        disabled={checkoutForm.shipping === "dorucenie-na-adresu"}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className={`radio-container ${checkoutForm.shipping === "osobny-odber" ? "disabled" : ""}`}>
                    Pri prevzatí (dobierka)
                    <input
                        type="radio"
                        name='payment'
                        value="pri-prevzati-dobierka"
                        onChange={e => handlePaymentChange(e.target.name, e.target.value)}
                        checked={checkoutForm.payment === "pri-prevzati-dobierka"}
                        disabled={checkoutForm.shipping === "osobny-odber"}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className={`radio-container ${checkoutForm.shipping === "osobny-odber" ? "disabled" : ""}`}>
                    Platba kartou online
                    <input
                        type="radio"
                        name='payment'
                        value="platba-kartou-online"
                        onChange={e => handlePaymentChange(e.target.name, e.target.value)}
                        checked={checkoutForm.payment === "platba-kartou-online"}
                        disabled={checkoutForm.shipping === "osobny-odber"}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className={`radio-container ${checkoutForm.shipping === "osobny-odber" ? "disabled" : ""}`} >
                    Bankovým prevodom
                    <input
                        type="radio"
                        name='payment'
                        value="bankovym-prevodom"
                        onChange={e => handlePaymentChange(e.target.name, e.target.value)}
                        checked={checkoutForm.payment === "bankovym-prevodom"}
                        disabled={checkoutForm.shipping === "osobny-odber"}
                    />
                    <span className="checkmark"></span>
                </label>
            </div>
            {/* <CheckoutControls handleNextClick={() => history.push(`/objednavka/dodacie-udaje`)} handlePrevClick={() => history.goBack()} slug='doprava-a-platba' /> */}
        </React.Fragment >
    )
}

export default CheckoutShippingAndPayment
