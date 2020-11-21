import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart/cart.context'

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'


import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {
    const { imgUrl, price, quantity, productName } = cartItem
    const { addItem, deleteItem, removeItem } = useContext(CartContext)

    return (
        <div className='checkout-item'>
            <div className='item-col'>
                <img alt={productName} src={imgUrl} />
            </div>
            <div className='item-col'>
                <p>{productName}</p>
            </div>
            <div className='item-col'>
                <div className='quantity'>
                    <button className='icon' onClick={() => removeItem(cartItem)}>
                        <AiOutlineLeft />
                    </button>
                    <p>{quantity}</p>
                    <button className='icon' onClick={() => addItem(cartItem)}>
                        <AiOutlineRight />
                    </button>
                </div>
            </div>
            <div className='item-col'>
                <p>{quantity} x {(price / 100).toFixed(2)}€</p>
                <p className='total-price'>{((quantity * price) / 100).toFixed(2)}€</p>
            </div>
            <div className='item-col'>
                <button className='delete-icon' onClick={() => deleteItem(cartItem)}>&#10005;</button>
            </div>
        </div>
    )
}

export default CheckoutItem
