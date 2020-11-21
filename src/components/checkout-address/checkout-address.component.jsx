import React, { useState } from 'react'

import CheckoutControls from '../checkout-controls/checkout-controls.component'
import CustomButton from "../custom-button/custom-button.component"

import FormInput from '../form-input/form-input.component'

import './checkout-address.styles.scss'

const CheckoutAddress = ({ history }) => {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')

    return (
        <React.Fragment>
            <div className='address'>
                <div className='row'>
                    <FormInput
                        label='Meno'
                        name='fName'
                        type='text'
                        value={fName}
                        handleChange={e => setFName(e.target.value)}
                        required
                    />
                    <FormInput
                        label='Priezvisko'
                        name='lName'
                        type='text'
                        value={lName}
                        handleChange={e => setLName(e.target.value)}
                        required
                    />
                </div>
                <FormInput
                    label='E-mail'
                    name='email'
                    type='email'
                    value={email}
                    handleChange={e => setEmail(e.target.value)}
                    required
                />
                <div className='row'>
                    <FormInput
                        label='Adresa'
                        name='address'
                        type='text'
                        value={address}
                        handleChange={e => setAddress(e.target.value)}
                        required
                    />
                    <FormInput
                        label='Mesto'
                        name='city'
                        type='text'
                        value={city}
                        handleChange={e => setCity(e.target.value)}
                        required
                    />

                </div>
                <div className='row'>
                    <FormInput
                        label='Štát'
                        name='state'
                        type='text'
                        value={state}
                        handleChange={e => setState(e.target.value)}
                        required
                    />
                    <FormInput
                        label='PSČ'
                        name='zip'
                        type='text'
                        value={zip}
                        handleChange={e => setZip(e.target.value)}
                        required
                    />
                </div>
                <CustomButton>
                    Skontrolovať
                </CustomButton>
            </div>
            {/* <CheckoutControls handleNextClick={() => history.push(`/objednavka/zhrnutie-objednavky`)} handlePrevClick={() => history.goBack()} slug='dodacie-udaje' /> */}
        </React.Fragment>
    )
}

export default CheckoutAddress
