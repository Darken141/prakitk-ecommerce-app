import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/user/user.context'
import { CartContext } from '../../contexts/cart/cart.context'
import { Link } from 'react-router-dom'
import logoImg from '../../images/logo.png'
import CartButton from '../cart-button/cart-button.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import HamMenu from '../ham-button/ham-button.component'
import MenuDrawer from '../menu-drawer/menu-drawer.component'
import AdminPanel from '../admin-panel/admin-panel.component'

import './header.styles.scss'

const Header = () => {
    const { signOut, currentUser, isAdmin } = useContext(UserContext)
    const { cartHidden } = useContext(CartContext)
    const [isOpen, setIsOpen] = useState(false)


    return (
        <header>
            {isAdmin && <AdminPanel />}
            <div className='header-container'>
                <Link to='/' className='logo-container'>
                    <img alt='Praktik logo' src={logoImg} />
                </Link>
                <div className='nav'>
                    <nav className='nav-links'>
                        <Link className='nav-link' to='/obchod'>
                            Obchod
                        </Link>
                        {
                            currentUser ? (
                                <div className='nav-link' onClick={signOut}>
                                    Odhlásiť sa
                                </div>
                            ) : (
                                    <Link className='nav-link' to='/prihlasenie'>
                                        Prihlásiť
                                    </Link>
                                )
                        }
                    </nav>
                    <CartButton />
                    <HamMenu isOpen={isOpen} handleClick={() => setIsOpen(!isOpen)} />
                </div>
            </div>
            {cartHidden && <CartDropdown />}
            <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}

export default Header
