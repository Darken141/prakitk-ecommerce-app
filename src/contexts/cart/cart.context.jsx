import React, { createContext, useState, useEffect } from 'react'
import { addItemToCart, removeItemFromCart } from './cart.utils'
import { useOutsideAlerter } from '../../hooks/outsideAlerter'
import { firestore } from '../../firebase/firebase.utils'

export const CartContext = createContext({
    cartDropdownRef: null,
    cartItems: [],
    price: 0,
    shippingFee: 0,
    itemCount: 0,
    cartHidden: false,
    toggleCart: () => { },
    addItem: () => { },
    removeItem: () => { },
    deleteItem: () => { },
    addShippingFee: () => { }
})

const CartProvider = ({ children }) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('CART PROVIDER RENDER')
    }
    const [itemCount, setItemCount] = useState(0);
    const [price, setPrice] = useState(0);
    const [shippingFee, setShippingFee] = useState(0);
    const [cartItems, setCartItems] = useState([])
    const [cartHidden, setCartHidden, cartDropdownRef] = useOutsideAlerter(false)

    const addShippingFee = (amount) => {
        setShippingFee(amount)
    }

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

    const deleteItem = item => {
        if (process.env.NODE_ENV === 'development') {
            console.log('CART PROVIDER | removeItem')
        }
        const filteredCart = cartItems.filter(cartItem => cartItem.id !== item.id)
        setCartItems(filteredCart)
    }

    const removeItem = item => {
        setCartItems(removeItemFromCart(cartItems, item))

    }

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.log('CART PROVIDER | getCartItems from local storage')
        }
        if (localStorage.getItem('products')) {
            const retrievedItems = JSON.parse(localStorage.getItem('products'))
            setCartItems(retrievedItems.map(item => ({
                ...item,
                category: firestore.doc(`categories/${item.category}`)
            })))
        }
    }, [])

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.log('CART PROVIDER | useEffect')
        }
        const arr = cartItems.map(item => ({
            ...item,
            category: item.category.id
        }))

        localStorage.setItem('products', JSON.stringify(arr));
        setItemCount(cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0))
        setPrice(cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0) + shippingFee)
    }, [cartItems, shippingFee])

    return (
        <CartContext.Provider
            value={{
                cartDropdownRef,
                cartItems,
                itemCount,
                price,
                shippingFee,
                cartHidden,
                toggleCart,
                addItem,
                removeItem,
                deleteItem,
                addShippingFee
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider