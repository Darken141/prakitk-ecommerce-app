import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart/cart.context'
import { GiShoppingCart } from 'react-icons/gi'

import './add-item-button.styles.scss'

const AddItemButton = ({ itemToAdd }) => {
    const { addItem } = useContext(CartContext)

    return (
        <button onClick={() => addItem(itemToAdd)} className='cta-button'>
            <div className='cta-icon'><GiShoppingCart /></div>
            <p>Pridať do košíka</p>
        </button>
    )
}

export default AddItemButton
