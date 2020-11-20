import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

const Directory = ({ categories }) => {

    const history = useHistory()
    const match = useRouteMatch()

    const handleClick = (slug) => {
        history.push(`${match.url}obchod/${slug}`)
    }


    return (
        <div className='directory-menu'>
            {
                categories.map(menuItem => (
                    <MenuItem key={menuItem.id} handleClick={() => handleClick(menuItem.slug)} {...menuItem} />
                ))
            }
        </div>
    )
}

export default Directory
