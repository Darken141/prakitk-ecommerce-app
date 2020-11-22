import React, { useContext } from 'react'
import { CheckoutContext } from '../../contexts/checkout/checkout.context'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './checkout-reservation.styles.scss'

const CheckoutReservation = () => {
    const { checkoutForm, handleAddressChange } = useContext(CheckoutContext)

    return (
        <div className='reservation-form'>
            <div className='row'>
                <FormInput
                    label='Meno'
                    name='fName'
                    type='text'
                    value={checkoutForm.address.fName}
                    handleChange={e => handleAddressChange(e.target.name, e.target.value)}
                    required
                />
                <FormInput
                    label='Priezvisko'
                    name='lName'
                    type='text'
                    value={checkoutForm.address.lName}
                    handleChange={e => handleAddressChange(e.target.name, e.target.value)}
                    required
                />
            </div>

            <div className='row'>
                <FormInput
                    label='Tel. číslo'
                    name='phone'
                    type='text'
                    value={checkoutForm.address.phone}
                    handleChange={e => handleAddressChange(e.target.name, e.target.value)}
                    required
                />

            </div>
            <CustomButton>
                Dokončiť
            </CustomButton>
        </div>
    )
}

export default CheckoutReservation
