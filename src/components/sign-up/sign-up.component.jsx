import React, { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-up.styles.scss'

const SignUp = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className='sign-up'>
            <h2>Chcem si vytvoriť nový účet.</h2>
            <p>Vytvorte si nový účet zadarmo.</p>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Meno Priezvisko'
                    name='diplayName'
                    type='text'
                    value={displayName}
                    handleChange={e => setDisplayName(e.target.value)}
                    required
                />
                <FormInput
                    label='E-mail'
                    name='email'
                    type='email'
                    value={email}
                    handleChange={e => setEmail(e.target.value)}
                    required
                />
                <FormInput
                    label='Heslo'
                    name='password'
                    type='password'
                    value={password}
                    handleChange={e => setPassword(e.target.value)}
                    required
                />
                <FormInput
                    label='Potvrdiť heslo'
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    handleChange={e => setConfirmPassword(e.target.value)}
                    required
                />

                <CustomButton type='submit'>
                    Vytvoriť účet
                </CustomButton>
            </form>
        </div>
    )
}

export default SignUp
