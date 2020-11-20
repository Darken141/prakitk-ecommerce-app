import React from 'react'
import { useHistory } from 'react-router-dom'
import { RiArrowGoBackFill } from 'react-icons/ri'

import './back-button.styles.scss'

const BackButton = () => {
    const history = useHistory()

    const handleClick = (action) => {
        action === 'POP' ? (
            history.push('/')
        ) : (
                history.goBack()
            )
    }

    return (
        <button className='back-button' onClick={() => handleClick(history.action)}>
            <div className='back-button__icon'>
                <RiArrowGoBackFill />
            </div>
                Naspäť
        </button>
    )
}

export default BackButton
