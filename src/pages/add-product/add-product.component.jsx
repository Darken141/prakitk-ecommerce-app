import React, { useState, useEffect, useContext } from 'react'

import { AdminContext } from '../../contexts/admin-panel/admin.context'

import SectionHeading from '../../components/section-heading/section-heading.component'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { firestore } from '../../firebase/firebase.utils'
import JoditEditor from "jodit-react";

import './add-product.styles.scss'

const AddProductPage = ({ match }) => {
    const [content, setContent] = useState('')
    const {
        addCategoryToDatabase,
        addProductToDatabase,
        categories,
        editorConfig,
        editor
    } = useContext(AdminContext)

    const [productToAdd, setProductToAdd] = useState({
        productName: '',
        slug: '',
        category: '',
        price: 0,
        imgUrl: "https://res.cloudinary.com/coderkin/image/upload/v1605654531/Praktik/img-placeholder_umpdl2.png",
        description: '',
    })

    const [categoryToAdd, setCategoryToAdd] = useState({
        categoryName: '',
        slug: '',
        imgUrl: "https://res.cloudinary.com/coderkin/image/upload/v1605654531/Praktik/img-placeholder_umpdl2.png",
    })



    useEffect(() => {
        if (match.params.id) {
            const getProduct = async () => {
                const productRef = firestore.doc(`products/${match.params.id}`)

                try {
                    const productSnapShot = await productRef.get()
                    if (productSnapShot.exists) {
                        setProductToAdd({
                            slug: productSnapShot.id,
                            ...productSnapShot.data(),
                            category: productSnapShot.id,
                        })
                        setContent(productSnapShot.data().description)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            getProduct()
        }
    }, [])

    const handleCategoryForm = e => {
        e.preventDefault()
        const { categoryName, slug, imgUrl } = categoryToAdd
        if (!categoryName) return
        if (!slug) return
        if (!imgUrl) return
        addCategoryToDatabase(categoryToAdd)

        setCategoryToAdd({
            categoryName: '',
            slug: '',
            imgUrl: "https://res.cloudinary.com/coderkin/image/upload/v1605654531/Praktik/img-placeholder_umpdl2.png",
        })
    }

    const handleProductForm = e => {
        e.preventDefault()
        const { productName, slug, price, imgUrl } = productToAdd
        if (!productName) return
        if (!slug) return
        if (!price) return
        if (!imgUrl) return
        if (!content) return

        addProductToDatabase(productToAdd, content)

        setProductToAdd({
            productName: '',
            slug: '',
            category: '',
            price: 0,
            imgUrl: "https://res.cloudinary.com/coderkin/image/upload/v1605654531/Praktik/img-placeholder_umpdl2.png",
            description: '',
        })

        setContent('')
    }

    return (
        <div className='add-product-page'>

            <SectionHeading>
                Pridať kategóriu
            </SectionHeading>
            <div className='container'>

                <form className='add-item-form' onSubmit={e => handleCategoryForm(e)}>
                    <FormInput
                        label='Názov kategórie'
                        name='categoryName'
                        type='text'
                        value={categoryToAdd.categoryName}
                        handleChange={e => setCategoryToAdd({
                            ...categoryToAdd,
                            categoryName: e.target.value
                        })}
                        required
                    />
                    <FormInput
                        label='Slug'
                        name='slug'
                        type='text'
                        value={categoryToAdd.slug}
                        handleChange={e => setCategoryToAdd({
                            ...categoryToAdd,
                            slug: e.target.value
                        })}
                        required
                    />
                    <FormInput
                        label='Odkaz na obrazok'
                        name='imgUrl'
                        type='text'
                        value={categoryToAdd.imgUrl}
                        handleChange={e => setCategoryToAdd({
                            ...categoryToAdd,
                            imgUrl: e.target.value
                        })}
                        required
                    />

                    <CustomButton type='submit'>
                        Pridať
                    </CustomButton>
                </form>
            </div>

            <SectionHeading>
                Pridať nový produkt
            </SectionHeading>

            <div className='container'>

                <form className='add-item-form' onSubmit={e => handleProductForm(e)}>
                    <FormInput
                        label='Produkt'
                        name='productName'
                        type='text'
                        value={productToAdd.productName}
                        handleChange={e => setProductToAdd({
                            ...productToAdd,
                            productName: e.target.value
                        })}
                        required
                    />
                    <FormInput
                        label='Slug'
                        name='productSlug'
                        type='text'
                        value={productToAdd.slug}
                        handleChange={e => setProductToAdd({
                            ...productToAdd,
                            slug: e.target.value
                        })}
                        required
                    />
                    <div className='select-input'>
                        <label htmlFor="category">Vyberte kategóriu:</label>

                        <select id="category" onChange={(e) => setProductToAdd({
                            ...productToAdd,
                            category: e.target.value
                        })}>
                            {categories.map((category, idx) => (
                                <option key={idx} value={category.slug}>{category.categoryName} | {category.id}</option>
                            ))}
                        </select>
                    </div>
                    <FormInput
                        label='Cena (v centoch)'
                        name='price'
                        type='text'
                        value={productToAdd.price.toString()}
                        handleChange={e => setProductToAdd({
                            ...productToAdd,
                            price: e.target.value
                        })}
                        required
                    />
                    <FormInput
                        label='Odkaz na obrazok'
                        name='imgUrl'
                        type='text'
                        value={productToAdd.imgUrl}
                        handleChange={e => setProductToAdd({
                            ...productToAdd,
                            imgUrl: e.target.value
                        })}
                        required
                    />
                    <div className='rich-editor'>
                        <JoditEditor
                            ref={editor}
                            value={productToAdd.description}
                            config={editorConfig}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={newContent => {
                                setContent(newContent.target.innerHTML)
                            }} // preferred to use only this option to update the content for performance reasons
                        // onChange={newContent => setContent(newContent)}
                        />

                    </div>

                    <CustomButton type='submit'>
                        Pridať
                    </CustomButton>
                </form>
            </div>

        </div>
    )
}

export default AddProductPage
