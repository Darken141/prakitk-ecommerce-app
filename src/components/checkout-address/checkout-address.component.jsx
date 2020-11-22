import React, { useContext } from 'react'
import { CheckoutContext } from '../../contexts/checkout/checkout.context'

// import CheckoutControls from '../checkout-controls/checkout-controls.component'
import CustomButton from "../custom-button/custom-button.component"

import FormInput from '../form-input/form-input.component'

import './checkout-address.styles.scss'

const CheckoutAddress = () => {
    const { checkoutForm, handleAddressChange } = useContext(CheckoutContext)

    return (
        <React.Fragment>
            <div className='address'>
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
                    <FormInput
                        label='Tel. číslo'
                        name='phone'
                        type='text'
                        value={checkoutForm.address.phone}
                        handleChange={e => handleAddressChange(e.target.name, e.target.value)}
                        required
                    />
                </div>
                <FormInput
                    label='E-mail'
                    name='email'
                    type='email'
                    value={checkoutForm.address.email}
                    handleChange={e => handleAddressChange(e.target.name, e.target.value)}
                    required
                />
                <div className='row'>
                    <FormInput
                        label='Ulica'
                        name='address'
                        type='text'
                        value={checkoutForm.address.address}
                        handleChange={e => handleAddressChange(e.target.name, e.target.value)}
                        required
                    />
                    <FormInput
                        label='Mesto'
                        name='city'
                        type='text'
                        value={checkoutForm.address.city}
                        handleChange={e => handleAddressChange(e.target.name, e.target.value)}
                        required
                    />

                </div>
                <div className='row'>
                    <FormInput
                        label='Štát'
                        name='country'
                        type='text'
                        value={checkoutForm.address.country}
                        handleChange={e => handleAddressChange(e.target.name, e.target.value)}
                        required
                    />
                    <FormInput
                        label='PSČ'
                        name='zip'
                        type='text'
                        value={checkoutForm.address.zip}
                        handleChange={e => handleAddressChange(e.target.name, e.target.value)}
                        required
                    />
                </div>
                <CustomButton>
                    Dokončiť
                </CustomButton>
            </div>
            {/* <CheckoutControls handleNextClick={() => history.push(`/objednavka/zhrnutie-objednavky`)} handlePrevClick={() => history.goBack()} slug='dodacie-udaje' /> */}
        </React.Fragment>
    )
}

export default CheckoutAddress
