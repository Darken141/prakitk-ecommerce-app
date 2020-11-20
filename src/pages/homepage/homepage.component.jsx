import React, { useContext } from 'react'
import { ShopContext } from '../../contexts/shop/shop.context'


import Directory from '../../components/directory/directory.component'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SectionHeading from '../../components/section-heading/section-heading.component'

import './homepage.styles.scss'
import Spinner from '../../components/spinner/spinner.component'

const Homepage = () => {
    const { categories, recentProducts } = useContext(ShopContext)

    if (!categories) return <Spinner />

    return (
        <div className='homepage'>

            <div className='container'>
                <SectionHeading>
                    Kategórie
                </SectionHeading>
                <Directory categories={categories} />
            </div>

            <div className='container'>
                <CollectionPreview title='Najnovšie produkty' items={recentProducts} slug='/obchod' />
            </div>

        </div>
    )
}

export default Homepage
