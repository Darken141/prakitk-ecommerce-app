import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { ShopContext } from '../../contexts/shop/shop.context'
import { UserContext } from '../../contexts/user/user.context'

import AddItemButton from '../add-item-button/add-item-button.component'
import { BsPencilSquare } from 'react-icons/bs'

import './collection-item.styles.scss'

const CollectionItem = ({ productName, imgUrl, price, item }) => {
    const { categories } = useContext(ShopContext)
    const { isAdmin } = useContext(UserContext)

    const { slug } = categories.find(category => category.id === item.category.id)

    return (
        <div className='collection-item'>
            {isAdmin && <div className='admin-icons'>
                <Link to={`/upravit-produkt/${item.id}`} className='icon'>
                    <BsPencilSquare />
                </Link>
            </div>}
            <div className='product-image'>
                <LazyLoadImage
                    alt={productName}
                    height={'100%'}
                    src={imgUrl} // use normal <img> attributes as props
                    width={'100%'}
                    effect="blur"
                    placeholderSrc={imgUrl}
                />
                <AddItemButton itemToAdd={item} />

            </div>
            <div className='product-body'>
                <Link to={`/obchod/${slug}/${item.id}`}>
                    <h3 className='name'>{productName}</h3>
                    <p className='price'>{(price / 100).toFixed(2)}€</p>
                </Link >
            </div>
        </div>
    )
}

export default CollectionItem
