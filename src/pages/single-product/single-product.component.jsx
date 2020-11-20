import React, { useContext, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { SingleProductContext } from '../../contexts/single-product/single-product.context'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import BackButton from '../../components/back-button/back-button.component'
import Spinner from '../../components/spinner/spinner.component'
import AddItemButton from '../../components/add-item-button/add-item-button.component'

import './single-product.styles.scss'

const SingleProductPage = () => {
    const { getProductData, product } = useContext(SingleProductContext)
    const match = useRouteMatch()

    useEffect(() => {
        getProductData(match.params.id)
    }, [getProductData, match.params.id])

    if (!product) return <Spinner />

    return (
        <div className='product-page'>
            <BackButton />

            <div className='product-container'>
                <div className='row'>
                    <div className='col image-container'>
                        <div className='product-image'>
                            <LazyLoadImage
                                alt={product.productName}
                                height={'100%'}
                                src={product.imgUrl} // use normal <img> attributes as props
                                width={'100%'}
                                effect="blur"
                                placeholderSrc={product.imgUrl}
                            />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='product-description'>
                            <h1>{product.productName}</h1>
                            {product.description && <div dangerouslySetInnerHTML={{ __html: product.description }} />}
                        </div>

                        <div className='price'>
                            Cena: <strong>{(product.price / 100).toFixed(2)}€</strong>
                        </div>

                        <AddItemButton itemToAdd={product} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleProductPage
