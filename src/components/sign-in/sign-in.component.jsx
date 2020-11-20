import React, { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithFacebook, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className='sign-in'>
            <h2>Mám účet, chcem sa prihlásiť.</h2>
            <p>Prihláste sa pomocou emailu a hesla.</p>
            <form onSubmit={handleSubmit}>
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
                />

                <div className='buttons'>
                    <CustomButton type='submit'>
                        Prihlásiť sa
                    </CustomButton>
                    <CustomButton invert type='button' onClick={signInWithGoogle}>
                        Prihlásiť sa cez GOOGLE
                    </CustomButton>
                    <CustomButton invert type='button' onClick={signInWithFacebook}>
                        Prihlásiť sa cez Facebook
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
