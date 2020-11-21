import React from 'react'

import { Link } from 'react-router-dom'

import './section-heading.styles.scss'

const SectionHeading = ({ children, slug }) => {
    return slug ? (
        <Link to={slug} className='heading-group'>
            <span className='rect' />
            <h2 className='title'>{children}</h2>
        </Link>) : (
            <div to={slug} className='heading-group'>
                <span className='rect' />
                <h2 className='heading'>{children}</h2>
            </div>
        )

}

export default SectionHeading
