import React, { useState } from 'react'

import CheckoutControls from '../checkout-controls/checkout-controls.component'

import './checkout-shipping-and-payment.styles.scss'

const CheckoutShippingAndPayment = ({ history, match }) => {
    const [value, setValue] = useState('osobny-odber')
    const [payment, setPayment] = useState('pri-prevzati-osobny-odber')

    const handleShipping = (option) => {
        setValue(option)
        if (option === 'osobny-odber') {
            setPayment("pri-prevzati-osobny-odber")
        }

        if (option === "dorucenie-na-adresu") {
            setPayment("pri-prevzati-dobierka")
        }
    }

    return (
        <React.Fragment>
            <div className='shipping-and-payments'>
                <label className="radio-container" >
                    Osobný odber
                    <input
                        type="radio"
                        name='shipping'
                        value="osobny-odber"
                        onChange={e => handleShipping(e.target.value)}
                        checked={value === "osobny-odber"} />
                    <span class="checkmark"></span>
                </label>
                <label className="radio-container" >
                    Doručenie na adresu
                    <input
                        type="radio"
                        name='shipping'
                        value="dorucenie-na-adresu"
                        onChange={e => handleShipping(e.target.value)}
                        checked={value === "dorucenie-na-adresu"}
                    />
                    <span class="checkmark"></span>
                </label>

                <h2>a spôsob platby</h2>

                <label className={`radio-container ${value === "dorucenie-na-adresu" ? "disabled" : ""}`}>
                    Pri prevzatí (osobný odber)
                    <input
                        type="radio"
                        name='payment'
                        value="pri-prevzati-osobny-odber"
                        onChange={e => setPayment(e.target.value)}
                        checked={payment === "pri-prevzati-osobny-odber"}
                        disabled={value === "dorucenie-na-adresu"}
                    />
                    <span class="checkmark"></span>
                </label>
                <label className={`radio-container ${value === "osobny-odber" ? "disabled" : ""}`}>
                    Pri prevzatí (dobierka)
                    <input
                        type="radio"
                        name='payment'
                        value="pri-prevzati-dobierka"
                        onChange={e => setPayment(e.target.value)}
                        checked={payment === "pri-prevzati-dobierka"}
                        disabled={value === "osobny-odber"}
                    />
                    <span class="checkmark"></span>
                </label>
                <label className={`radio-container ${value === "osobny-odber" ? "disabled" : ""}`}>
                    Platba kartou online
                    <input
                        type="radio"
                        name='payment'
                        value="platba-kartou-online"
                        onChange={e => setPayment(e.target.value)}
                        checked={payment === "platba-kartou-online"}
                        disabled={value === "osobny-odber"}
                    />
                    <span class="checkmark"></span>
                </label>
                <label className={`radio-container ${value === "osobny-odber" ? "disabled" : ""}`} >
                    Bankovým prevodom
                    <input
                        type="radio"
                        name='payment'
                        value="bankovym-prevodom"
                        onChange={e => setPayment(e.target.value)}
                        checked={payment === "bankovym-prevodom"}
                        disabled={value === "osobny-odber"}
                    />
                    <span class="checkmark"></span>
                </label>
            </div>
            {/* <CheckoutControls handleNextClick={() => history.push(`/objednavka/dodacie-udaje`)} handlePrevClick={() => history.goBack()} slug='doprava-a-platba' /> */}
        </React.Fragment >
    )
}

export default CheckoutShippingAndPayment
