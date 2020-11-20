import React from 'react'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, removeItem }) => {
    const { imgUrl, price, quantity, productName } = cartItem


    return (
        <div className='checkout-item'>
            <div className='item-col'>
                <img alt={productName} src={imgUrl} />
            </div>
            <div className='item-col'>
                <p>{productName}</p>
            </div>
            <div className='item-col'>
                <p>{quantity}</p>
            </div>
            <div className='item-col'>
                <p>{quantity} x {(price / 100).toFixed(2)}€</p>
                <p className='total-price'>{((quantity * price) / 100).toFixed(2)}€</p>
            </div>
            <div className='item-col'>
                <button onClick={() => removeItem(cartItem)}>&#10005;</button>
            </div>
        </div>
    )
}

export default CheckoutItem
