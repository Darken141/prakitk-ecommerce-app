import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../contexts/user/user.context'

import './menu-drawer.styles.scss'

const MenuDraver = ({ isOpen, setIsOpen }) => {
    const history = useHistory()
    const { signOut, currentUser } = useContext(UserContext)

    const handleSignOutButton = () => {
        signOut()
        setIsOpen(false)
    }

    const handleLinkClick = (slug) => {
        history.push(slug)
        setIsOpen(false)
    }

    return (
        <div className={`menu-drawer ${isOpen ? "" : "close-drawer"}`}>
            <nav className='drawer-links'>
                <button className='drawer-link' onClick={() => handleLinkClick('/obchod')}>
                    Obchod
                </button>
                {
                    currentUser ? (
                        <div className='drawer-link' onClick={handleSignOutButton}>
                            Odhlásiť sa
                        </div>
                    ) : (
                            <button className='drawer-link' onClick={() => handleLinkClick('/prihlasenie')}>
                                Prihlásiť
                            </button>
                        )
                }
            </nav>

        </div>
    )
}

export default MenuDraver
