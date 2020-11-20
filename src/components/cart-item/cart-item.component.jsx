import React from 'react'

import './cart-item.styles.scss'

const CartItem = ({ item, removeItem }) => {
    const { imgUrl, productName, price, quantity } = item

    return (
        <div className='cart-item'>
            <div className='image-container'>
                <img alt={productName} src={imgUrl} />
            </div>
            <div className='item-count'>
                <p>{quantity} x {(price / 100).toFixed(2)}€</p>
            </div>
            <div className='item-name'>
                <h3>{productName}</h3>
            </div>
            <button onClick={() => removeItem(item)} className='remove-item-button'>&#10005;</button>

        </div>
    )
}

export default CartItem
