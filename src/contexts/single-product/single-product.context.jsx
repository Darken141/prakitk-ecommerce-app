import React, { createContext, useState, useCallback } from 'react'
import { firestore } from '../../firebase/firebase.utils'

export const SingleProductContext = createContext({
    product: null,
    getProductData: () => { }
})

const SingleProductProvider = ({ children }) => {
    const [product, setProduct] = useState(null)


    const getProductData = useCallback(
        async (id) => {
            const productRef = firestore.doc(`products/${id}`)
            const productSnapshot = await productRef.get()
            setProduct({
                id: productSnapshot.id,
                ...productSnapshot.data()
            })
        },
        [],
    )
    return (
        <SingleProductContext.Provider
            value={{
                product,
                getProductData
            }}
        >
            {children}
        </SingleProductContext.Provider>
    )
}

export default SingleProductProvider