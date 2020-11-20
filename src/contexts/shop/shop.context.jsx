import React, { createContext, useEffect, useState, useCallback } from 'react'

import { firestore } from '../../firebase/firebase.utils'

export const ShopContext = createContext({
    categories: null,
    recentProducts: null,
    collectionProducts: null,
    getSingleCollectionProducts: () => { },
    setCollectionProducts: () => { }
})

const ShopProvider = ({ children }) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('SHOP PROVIDER | render')
    }
    const [categories, setCategories] = useState(null)
    const [recentProducts, setRecentProducts] = useState(null)
    const [collectionProducts, setCollectionProducts] = useState(null)

    const getSingleCollectionProducts = useCallback(
        (ref, limit) => {
            if (process.env.NODE_ENV === 'development') {
                console.log('SHOP PROVIDER | getSingleCollectionProducts')
            }
            if (limit) {
                const productsRef = firestore.collection('products').where('category', '==', ref).limit(limit)
                return productsRef
            }
            const productsRef = firestore.collection('products').where('category', '==', ref)
            return productsRef

        },
        [],
    )

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.log('SHOP PROVIDER | useEffect - getCategoriesCalled')
        }
        const getCategories = async () => {
            if (categories) return

            if (process.env.NODE_ENV === 'development') {
                console.log("SHOP PROVIDER | getCategoriesCalled")
            }

            const categoriesRef = firestore.collection('categories')
            const categoriesSnapshot = await categoriesRef.get()

            setCategories(categoriesSnapshot.docs.map(doc => ({
                id: doc.id,
                categoryRef: doc.ref,
                ...doc.data()
            })))

        }

        if (!categories) getCategories()

    }, [categories])

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.log('SHOP PROVIDER | useEffect - getRecentProductsCalled')
        }
        const getRecentProducts = async () => {
            if (recentProducts) return

            if (process.env.NODE_ENV === 'development') {
                console.log("SHOP PROVIDER | getRecentProductsCalled")
            }

            const recentProductsRef = firestore.collection('products').orderBy('createdAt', 'desc').limit(7)
            setRecentProducts(recentProductsRef)

        }

        if (!recentProducts) getRecentProducts()

    }, [recentProducts])

    return (
        <ShopContext.Provider
            value={{
                categories,
                recentProducts,
                collectionProducts,
                getSingleCollectionProducts,
                setCollectionProducts
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}

export default ShopProvider