import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import CollectionItem from '../collection-item/collection-item.component'
import SectionHeading from '../section-heading/section-heading.component'
import Spinner from '../spinner/spinner.component'

import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items, slug }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getData = async () => {
            items.get().then(snap => {
                setProducts(
                    snap.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                )
            })
        }
        getData()

        return () => { setProducts([]) }
    }, [slug, items])

    if (!items && !products) return <Spinner />

    return (
        <div className='collection-preview'>
            <SectionHeading slug={slug}>
                {title}
            </SectionHeading>

            <div className='preview'>
                {
                    products.map(item => (
                        <CollectionItem key={item.id} item={item} {...item} />
                    ))
                }
                {products.length > 2 &&
                    <Link to={slug} className='more-button'>
                        Zobrazit viac
                </Link>

                }
            </div>
        </div>
    )
}

export default CollectionPreview
