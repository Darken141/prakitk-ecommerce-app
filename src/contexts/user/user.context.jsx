import React, { createContext, useState, useEffect } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

export const UserContext = createContext({
    currentUser: null,
    signOut: () => { },
    isAdmin: false
})

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                    setIsAdmin(snapshot.data().isAdmin)
                })
            }
        })

        return () => (
            unsubscribeFromAuth()
        )
    }, [setCurrentUser])

    const signOut = async () => {
        try {
            await auth.signOut()
            setIsAdmin(false)
            setCurrentUser(null)
            console.log('Successfuly logged out')
        } catch (error) {
            console.log(error)
        }
    }

    // const Check

    return (
        <UserContext.Provider
            value={{
                currentUser,
                signOut,
                isAdmin
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider