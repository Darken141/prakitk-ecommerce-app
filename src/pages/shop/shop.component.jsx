import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../../contexts/shop/shop.context'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import Spinner from '../../components/spinner/spinner.component'
import './shop.styles.scss'

const ShopPage = () => {
    const { categories, getSingleCollectionProducts, setCollectionProducts, collectionProducts } = useContext(ShopContext)

    useEffect(() => {
        if (!categories) return
        setCollectionProducts(
            categories.map(category => ({
                categoryName: category.categoryName,
                slug: category.slug,
                products: getSingleCollectionProducts(category.categoryRef, 3)
            }))
        )

    }, [categories, setCollectionProducts, getSingleCollectionProducts])

    if (!categories || !collectionProducts) return <Spinner />

    return (
        <section className='shop-page'>
            <div className='container'>
                {
                    collectionProducts.map((colProducts, idx) => {
                        return (
                            <CollectionPreview key={idx} title={colProducts.categoryName} items={colProducts.products} slug={`/obchod/${colProducts.slug}`} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ShopPage
