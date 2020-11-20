import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart/cart.context'
import { GiShoppingCart } from 'react-icons/gi'
import './cart-button.styles.scss'

const CartButton = () => {
    const { itemCount, price, toggleCart } = useContext(CartContext)

    return (
        <button className='cart-button' onClick={toggleCart}>
            <div className='cart-icon'>
                <GiShoppingCart />
                <span className='count'>{itemCount}</span>
            </div>
            <div className='price'>
                {(price / 100).toFixed(2)}€
            </div>
        </button>
    )
}

export default CartButton
