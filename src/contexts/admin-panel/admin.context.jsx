import React, { createContext, useEffect, useState, useRef } from "react"
import { firestore } from '../../firebase/firebase.utils'

export const AdminContext = createContext({
    editor: null,
    editorConfig: null,
    categories: [],
    getCategories: () => { },
    addCategoryToDatabase: () => { },
    addProductToDatabase: () => { }
})

const AdminProvider = ({ children }) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('ADMIN PROVIDER | render')
    }
    const [categories, setCategories] = useState([])

    const editor = useRef(null)
    const editorConfig = {
        buttons: ["bold", "italic", "underline", "strikethrough", "|", "paragraph", "ul", "ol", "|", "center", "left", "right", "justify", "|", "link", "image"],
        uploader: { insertImageAsBase64URI: true },
        removeButtons: ["brush", "file"],
        showXPathInStatusbar: false,
        showCharsCounter: false,
        showWordsCounter: false,
        toolbarAdaptive: false
    };


    const getCategories = async () => {
        if (process.env.NODE_ENV === 'development') {
            console.log('ADMIN PROVIDER | getCategories')
        }
        const categoriesRef = firestore.collection('categories')
        const snapshot = await categoriesRef.get()

        setCategories(
            snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
        )
    }

    const addCategoryToDatabase = async (categoryToAdd) => {
        if (process.env.NODE_ENV === 'development') {
            console.log('ADMIN PROVIDER | addCategoryToDatabase')
        }
        const { categoryName, slug, imgUrl } = categoryToAdd
        const categoryRef = firestore.doc(`categories/${slug}`)
        const snapshot = await categoryRef.get()

        if (!snapshot.exist) {
            try {
                await categoryRef.set({
                    categoryName,
                    slug,
                    imgUrl,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                })

                alert("New category has been added!")

            } catch (error) {
                alert("Something went wrong")
                console.log(error)
            }
        }
    }

    const addProductToDatabase = async (productToAdd, content) => {
        if (process.env.NODE_ENV === 'development') {
            console.log('ADMIN PROVIDER | addProductToDatabase')
        }
        const { productName, slug, price, imgUrl, category } = productToAdd
        const productRef = firestore.doc(`products/${slug}`)
        const snapshot = await productRef.get()

        if (!snapshot.exist) {
            try {
                await productRef.set({
                    productName,
                    slug,
                    category: firestore.doc(`categories/${category}`),
                    price: parseInt(price),
                    imgUrl,
                    description: content,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                })

                alert("New product has been added!")


            } catch (error) {
                alert("Something went wrong")
                console.log(error)
            }
        }
    }

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.log('ADMIN PROVIDER | useEffect - getCategories')
        }
        getCategories()
    }, [])

    return (
        <AdminContext.Provider
            value={{
                editor,
                editorConfig,
                categories,
                getCategories,
                addCategoryToDatabase,
                addProductToDatabase
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}

export default AdminProvider