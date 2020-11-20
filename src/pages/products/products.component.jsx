import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../contexts/shop/shop.context'

import BackButton from '../../components/back-button/back-button.component'
import SectionHeading from '../../components/section-heading/section-heading.component'
import CollectionItem from '../../components/collection-item/collection-item.component'
import Spinner from '../../components/spinner/spinner.component'

import './products.styles.scss'

const ProductsPage = ({ match }) => {
    const { categories, getSingleCollectionProducts } = useContext(ShopContext)
    const [products, setProducts] = useState([])
    const [collectionName, setCollectionName] = useState('')

    useEffect(() => {
        if (!categories) return
        const getProducts = async () => {
            const collection = categories.find(category => category.slug === match.params.slug)
            setCollectionName(collection.categoryName)
            const productsRef = getSingleCollectionProducts(collection.categoryRef)
            const productsSnapshot = await productsRef.get()
            setProducts(productsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })))
        }
        getProducts()
    }, [categories, getSingleCollectionProducts, match.params.slug])

    if (!products.length) return <Spinner />

    return (
        <div className='products-page'>
            <BackButton />
            <SectionHeading>
                {collectionName}
            </SectionHeading>

            <div className='products-container'>
                {
                    products.map(item => (
                        <CollectionItem key={item.id} item={item} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsPage
