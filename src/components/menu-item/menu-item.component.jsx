import React from 'react'

import './menu-item.styles.scss'

const MenuItem = ({ categoryName = "Placeholder", imgUrl = "https://picsum.photos/150", handleClick }) => {
    return (
        <div className='menu-item' onClick={handleClick}>
            <img alt='napustacie ventily' src={imgUrl} />
            <h2 className='title'>{categoryName}</h2>
        </div>
    )
}

export default MenuItem
