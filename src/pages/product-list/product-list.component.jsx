import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import SectionHeading from '../../components/section-heading/section-heading.component'
import FormInput from '../../components/form-input/form-input.component'

import { firestore } from '../../firebase/firebase.utils'

import './product-list.styles.scss'

const ProductListPage = () => {
    const [products, setProducts] = useState([])
    const [searchedProduct, setSearchedProduct] = useState('')
    const filteredArr = products.filter(product => product.productName.toLowerCase().includes(searchedProduct.toLowerCase()))

    const handleDeleteProduct = async (id) => {
        const result = window.confirm('Ste si isty že chcete odstrániť tento produkt?')
        if (result) {
            console.log("lets delete")
            try {
                await firestore.doc(`products/${id}`).delete()
                setProducts(products.filter(product => product.id !== id))
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        const getData = async () => {
            const productsRef = firestore.collection('products')
            const productSnapshot = await productsRef.get()

            setProducts(
                productSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            )
        }

        getData()
    }, [])

    return (
        <div className='admin-product-list'>
            <SectionHeading>
                Všetky produkty
            </SectionHeading>

            <div className='input-container'>
                <FormInput
                    label='Hľadať'
                    name='searchedProduct'
                    type='search'
                    value={searchedProduct}
                    handleChange={e => setSearchedProduct(e.target.value)}
                    required
                />

            </div>

            <div className='product-list'>
                <div className='table-header'>
                    <div className='table-block'>
                        <p>#</p>
                    </div>
                    <div className='table-block'>
                        <p>Meno</p>
                    </div>
                    <div className='table-block'>
                        <p>Cena</p>
                    </div>
                    <div className='table-block'>
                        <p>Odstraniť</p>
                    </div>
                </div>

                <div className='table-body'>
                    {
                        filteredArr.map((product, idx) => (
                            <div key={idx} className='table-row'>
                                <div className='table-block'>{idx + 1}</div>
                                <div className='table-block'>
                                    <Link to={`/obchod/kategoria/${product.id}`}>
                                        {product.productName}
                                    </Link>
                                </div>
                                <div className='table-block'>{(product.price / 100).toFixed(2)}€</div>
                                <div className='table-block'>
                                    <button onClick={() => handleDeleteProduct(product.id)}>
                                        &#10005;
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductListPage
