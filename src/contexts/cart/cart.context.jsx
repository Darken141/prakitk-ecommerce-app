import React, { createContext, useState, useEffect, useRef } from 'react'
import { addItemToCart } from './cart.utils'
import { useOutsideAlerter } from '../../hooks/outsideAlerter'

export const CartContext = createContext({
    cartDropdownRef: null,
    cartItems: [],
    price: 0,
    itemCount: 0,
    cartHidden: false,
    toggleCart: () => { },
    addItem: () => { },
    removeItem: () => { }
})

const CartProvider = ({ children }) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('CART PROVIDER RENDER')
    }
    const [itemCount, setItemCount] = useState(0);
    const [price, setPrice] = useState(0);
    const [cartItems, setCartItems] = useState([])
    // const [cartHidden, setCartHidden] = useState(false)

    const [cartHidden, setCartHidden, cartDropdownRef] = useOutsideAlerter(false)

    console.log(cartHidden)
    console.log(setCartHidden)
    console.log(cartDropdownRef)

    const toggleCart = () => {
        if (process.env.NODE_ENV === 'development') {
            console.log('CART PROVIDER | toggleCart')
        }
        setCartHidden(!cartHidden)
    }

    const addItem = item => {
        if (process.env.NODE_ENV === 'development') {
            console.log('CART PROVIDER | addItem')
        }
        setCartItems(addItemToCart(cartItems, item))
    }

    const removeItem = item => {
        if (process.env.NODE_ENV === 'development') {
            console.log('CART PROVIDER | removeItem')
        }
        const filteredCart = cartItems.filter(cartItem => cartItem.id !== item.id)
        setCartItems(filteredCart)
    }

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.log('CART PROVIDER | useEffect')
        }
        setItemCount(cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0))
        setPrice(cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0))
    }, [cartItems])

    return (
        <CartContext.Provider
            value={{
                cartDropdownRef,
                cartItems,
                itemCount,
                price,
                cartHidden,
                toggleCart,
                addItem,
                removeItem
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider