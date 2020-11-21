import React, { useContext } from 'react'

import { CartContext } from '../../contexts/cart/cart.context'

import { useHistory } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems, removeItem, toggleCart, cartDropdownRef } = useContext(CartContext)
    const history = useHistory()

    const handleClick = () => {
        toggleCart()
        history.push('/objednavka')
    }

    return (
        <div ref={cartDropdownRef} className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length <= 0 ? (
                        <span className='empty-message'>Košík je prázdny</span>
                    ) : cartItems.map((item, idx) => (
                        <CartItem key={idx} item={item} removeItem={removeItem} />
                    ))
                }
            </div>
            <button onClick={handleClick} className='checkout-button'>
                Dokončiť objednavku
            </button>
        </div>
    )
}

export default CartDropdown
